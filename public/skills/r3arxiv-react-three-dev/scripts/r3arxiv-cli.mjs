#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import {
  compactResource,
  findRoot,
  getChunks,
  getResource,
  getRoute,
  loadPack,
  makeRecommendation
} from "./lib/r3arxiv-core.mjs";

function usage() {
  console.log(`Usage:
  r3arxiv-cli routes [--json]
  r3arxiv-cli route <route-id> [--json]
  r3arxiv-cli resource <resource-id> [--json]
  r3arxiv-cli recommend <task text> [--route route-id] [--limit n] [--json]
  r3arxiv-cli chunks [--search text] [--route route-id] [--resource resource-id] [--limit n] [--json]
  r3arxiv-cli prompt <prompt-name> [--json]
  r3arxiv-cli audit <paths...> [--json]
  r3arxiv-cli mcp

Examples:
  npm run r3arxiv -- recommend "build a shader-heavy product configurator" --limit 8
  npm run r3arxiv -- route physics-games --json
  npm run r3arxiv -- mcp`);
}

function parse(argv) {
  const [command, ...rest] = argv;
  const args = { command, positional: [], limit: 12, json: false };
  for (let i = 0; i < rest.length; i += 1) {
    const arg = rest[i];
    if (arg === "--json") args.json = true;
    else if (arg === "--limit") args.limit = Number(rest[++i] ?? args.limit);
    else if (arg === "--route") args.route = rest[++i];
    else if (arg === "--search") args.search = rest[++i];
    else if (arg === "--resource") args.resource = rest[++i];
    else if (arg === "--help" || arg === "-h") args.help = true;
    else args.positional.push(arg);
  }
  return args;
}

function printJson(value) {
  console.log(JSON.stringify(value, null, 2));
}

function printResource(resource) {
  const record = compactResource(resource);
  console.log(`${record.id} | ${record.title}`);
  console.log(`${record.category} / ${record.field} / ${record.kind} / ${record.status} / ${record.priority}`);
  console.log(record.description);
  console.log(`Best for: ${record.bestFor}`);
  console.log(`URL: ${record.url}`);
  if (record.github) console.log(`GitHub: ${record.github}`);
  console.log(`Preview: ${record.image}`);
  console.log(`Tags: ${record.tags.join(", ")}`);
}

function printRecommendation(recommendation) {
  console.log(`Task: ${recommendation.task}`);
  console.log("\nRoutes:");
  for (const route of recommendation.routes) {
    console.log(`- ${route.id}: ${route.title}`);
  }
  console.log("\nResources:");
  for (const resource of recommendation.resources) {
    console.log(`- ${resource.id}: ${resource.title} (${resource.kind}/${resource.status})`);
    console.log(`  ${resource.url}`);
  }
}

function runAudit(args) {
  const scriptUrl = new URL("./r3f-audit.mjs", import.meta.url);
  const child = spawnSync(process.execPath, [scriptUrl.pathname, ...args], {
    stdio: "inherit"
  });
  process.exitCode = child.status ?? 1;
}

function main() {
  const args = parse(process.argv.slice(2));
  if (args.help || !args.command) {
    usage();
    return;
  }

  if (args.command === "audit") {
    const auditArgs = [...args.positional];
    if (args.json) auditArgs.push("--json");
    runAudit(auditArgs);
    return;
  }

  if (args.command === "mcp") {
    const scriptUrl = new URL("./r3arxiv-mcp-server.mjs", import.meta.url);
    const child = spawnSync(process.execPath, [scriptUrl.pathname], {
      stdio: "inherit",
      env: process.env
    });
    process.exitCode = child.status ?? 1;
    return;
  }

  const pack = loadPack(findRoot());

  if (args.command === "routes") {
    const records = pack.routes.map((route) => ({
      id: route.id,
      title: route.title,
      intent: route.intent,
      queryHints: route.queryHints,
      primaryResourceIds: route.primaryResourceIds
    }));
    args.json ? printJson(records) : records.forEach((route) => console.log(`${route.id}: ${route.title}`));
    return;
  }

  if (args.command === "route") {
    const route = getRoute(pack, args.positional[0]);
    if (args.json) printJson(route);
    else {
      console.log(`${route.id}: ${route.title}`);
      console.log(route.intent);
      console.log(`Primary: ${route.primaryResourceIds.join(", ")}`);
      console.log(`Expanded: ${route.expandedResourceIds.join(", ")}`);
    }
    return;
  }

  if (args.command === "resource") {
    const resource = getResource(pack, args.positional[0]);
    args.json ? printJson(resource) : printResource(resource);
    return;
  }

  if (args.command === "recommend") {
    const task = args.positional.join(" ");
    const recommendation = makeRecommendation(pack, {
      task,
      search: task,
      route: args.route,
      limit: args.limit
    });
    args.json ? printJson(recommendation) : printRecommendation(recommendation);
    return;
  }

  if (args.command === "chunks") {
    const chunks = getChunks(pack.root, {
      search: args.search,
      routeId: args.route,
      resourceId: args.resource
    }).slice(0, args.limit);
    args.json
      ? printJson(chunks)
      : chunks.forEach((chunk) => {
          console.log(`${chunk.id} | ${chunk.title}`);
          console.log((chunk.content ?? "").slice(0, 260).replace(/\s+/g, " "));
          console.log("");
        });
    return;
  }

  if (args.command === "prompt") {
    const prompt = pack.prompts.find((candidate) => candidate.name === args.positional[0]);
    if (!prompt) throw new Error(`Unknown prompt: ${args.positional[0]}`);
    args.json ? printJson(prompt) : console.log(prompt.messages.map((message) => message.content).join("\n\n"));
    return;
  }

  usage();
  process.exitCode = 1;
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
