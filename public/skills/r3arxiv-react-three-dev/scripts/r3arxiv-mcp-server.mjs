#!/usr/bin/env node
import readline from "node:readline";
import {
  compactResource,
  filterResources,
  findRoot,
  getChunks,
  getResource,
  getRoute,
  loadPack,
  makeRecommendation,
  readText,
  resourcesForRoute
} from "./lib/r3arxiv-core.mjs";

const pack = loadPack(findRoot());

const tools = [
  {
    name: "r3arxiv_search",
    description: "Search R3ARXIV resources by text, tag, category, kind, status, or route.",
    inputSchema: {
      type: "object",
      properties: {
        search: { type: "string" },
        route: { type: "string" },
        tag: { type: "string" },
        category: { type: "string" },
        kind: { type: "string" },
        status: { type: "string" },
        limit: { type: "number", default: 12 }
      }
    }
  },
  {
    name: "r3arxiv_route",
    description: "Read a task route and its primary/expanded resources.",
    inputSchema: {
      type: "object",
      required: ["route"],
      properties: {
        route: { type: "string" },
        includeResources: { type: "boolean", default: true },
        limit: { type: "number", default: 20 }
      }
    }
  },
  {
    name: "r3arxiv_resource",
    description: "Read a single R3ARXIV resource by id.",
    inputSchema: {
      type: "object",
      required: ["id"],
      properties: {
        id: { type: "string" }
      }
    }
  },
  {
    name: "r3arxiv_recommend",
    description: "Recommend routes and resources for a 3D web app task.",
    inputSchema: {
      type: "object",
      required: ["task"],
      properties: {
        task: { type: "string" },
        route: { type: "string" },
        limit: { type: "number", default: 12 }
      }
    }
  },
  {
    name: "r3arxiv_chunks",
    description: "Read retrieval chunks by search text, route id, resource id, or type.",
    inputSchema: {
      type: "object",
      properties: {
        search: { type: "string" },
        routeId: { type: "string" },
        resourceId: { type: "string" },
        type: { type: "string" },
        limit: { type: "number", default: 8 }
      }
    }
  }
];

function textResult(value) {
  return {
    content: [
      {
        type: "text",
        text: typeof value === "string" ? value : JSON.stringify(value, null, 2)
      }
    ]
  };
}

function response(id, result) {
  process.stdout.write(`${JSON.stringify({ jsonrpc: "2.0", id, result })}\n`);
}

function errorResponse(id, code, message) {
  process.stdout.write(
    `${JSON.stringify({ jsonrpc: "2.0", id, error: { code, message } })}\n`
  );
}

function listResources() {
  const artifacts = pack.docsIndex.artifacts.map((artifact) => ({
    uri: `r3arxiv://artifact/${artifact.path}`,
    name: artifact.path,
    title: artifact.title,
    description: artifact.description,
    mimeType: artifact.mimeType
  }));
  const routes = pack.routes.map((route) => ({
    uri: `r3arxiv://route/${route.id}`,
    name: route.id,
    title: route.title,
    description: route.intent,
    mimeType: "application/json"
  }));
  const resources = pack.catalog.resources.map((resource) => ({
    uri: `r3arxiv://resource/${resource.id}`,
    name: resource.id,
    title: resource.title,
    description: resource.description,
    mimeType: "application/json"
  }));
  return [...artifacts, ...routes, ...resources];
}

function readResource(uri) {
  if (uri.startsWith("r3arxiv://artifact/")) {
    const artifactPath = uri.replace("r3arxiv://artifact/", "");
    return {
      uri,
      mimeType: artifactPath.endsWith(".json")
        ? "application/json"
        : artifactPath.endsWith(".jsonl")
          ? "application/jsonl"
          : "text/plain",
      text: readText(pack.root, artifactPath)
    };
  }

  if (uri.startsWith("r3arxiv://route/")) {
    const route = getRoute(pack, uri.replace("r3arxiv://route/", ""));
    return {
      uri,
      mimeType: "application/json",
      text: JSON.stringify(route, null, 2)
    };
  }

  if (uri.startsWith("r3arxiv://resource/")) {
    const resource = getResource(pack, uri.replace("r3arxiv://resource/", ""));
    return {
      uri,
      mimeType: "application/json",
      text: JSON.stringify(resource, null, 2)
    };
  }

  throw new Error(`Unknown resource URI: ${uri}`);
}

function callTool(name, args = {}) {
  if (name === "r3arxiv_search") {
    return textResult(
      filterResources(pack, args)
        .slice(0, args.limit ?? 12)
        .map(compactResource)
    );
  }

  if (name === "r3arxiv_route") {
    const route = getRoute(pack, args.route);
    const result = {
      route,
      resources: args.includeResources === false
        ? undefined
        : resourcesForRoute(pack, args.route)
            .slice(0, args.limit ?? 20)
            .map(compactResource)
    };
    return textResult(result);
  }

  if (name === "r3arxiv_resource") {
    return textResult(getResource(pack, args.id));
  }

  if (name === "r3arxiv_recommend") {
    return textResult(
      makeRecommendation(pack, {
        task: args.task,
        search: args.task,
        route: args.route,
        limit: args.limit ?? 12
      })
    );
  }

  if (name === "r3arxiv_chunks") {
    return textResult(
      getChunks(pack.root, args).slice(0, args.limit ?? 8)
    );
  }

  throw new Error(`Unknown tool: ${name}`);
}

function promptList() {
  return pack.prompts.map((prompt) => ({
    name: prompt.name,
    title: prompt.title,
    description: prompt.description,
    arguments: prompt.arguments ?? []
  }));
}

function promptGet(name, args = {}) {
  const prompt = pack.prompts.find((candidate) => candidate.name === name);
  if (!prompt) throw new Error(`Unknown prompt: ${name}`);
  return {
    description: prompt.description,
    messages: prompt.messages.map((message) => ({
      role: message.role,
      content: {
        type: "text",
        text: interpolate(message.content, args)
      }
    }))
  };
}

function interpolate(template, args) {
  return template.replace(/\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g, (_, key) =>
    args[key] == null ? "" : String(args[key])
  );
}

async function handle(message) {
  const { id, method, params = {} } = message;

  if (!id && method?.startsWith("notifications/")) return;

  try {
    if (method === "initialize") {
      response(id, {
        protocolVersion: params.protocolVersion ?? "2025-06-18",
        capabilities: {
          tools: {},
          resources: {},
          prompts: {}
        },
        serverInfo: {
          name: "r3arxiv-react-three-dev",
          version: "1.0.0"
        }
      });
      return;
    }

    if (method === "tools/list") {
      response(id, { tools });
      return;
    }

    if (method === "tools/call") {
      response(id, callTool(params.name, params.arguments ?? {}));
      return;
    }

    if (method === "resources/list") {
      response(id, { resources: listResources() });
      return;
    }

    if (method === "resources/read") {
      response(id, { contents: [readResource(params.uri)] });
      return;
    }

    if (method === "prompts/list") {
      response(id, { prompts: promptList() });
      return;
    }

    if (method === "prompts/get") {
      response(id, promptGet(params.name, params.arguments ?? {}));
      return;
    }

    errorResponse(id, -32601, `Method not found: ${method}`);
  } catch (error) {
    errorResponse(id, -32000, error.message);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Number.POSITIVE_INFINITY
});

rl.on("line", (line) => {
  if (!line.trim()) return;
  try {
    void handle(JSON.parse(line));
  } catch (error) {
    errorResponse(null, -32700, error.message);
  }
});
