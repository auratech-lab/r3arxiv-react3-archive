import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

export function findRoot(start = process.cwd()) {
  const envRoot = process.env.R3ARXIV_ROOT;
  if (envRoot && existsSync(path.join(envRoot, "docs/agent/catalog.json"))) {
    return path.resolve(envRoot);
  }

  let current = path.resolve(start);
  while (true) {
    if (existsSync(path.join(current, "docs/agent/catalog.json"))) return current;
    const parent = path.dirname(current);
    if (parent === current) break;
    current = parent;
  }

  throw new Error(
    "Could not find docs/agent/catalog.json. Run from R3ARXIV or set R3ARXIV_ROOT."
  );
}

export function readJson(root, relativePath) {
  return JSON.parse(readFileSync(path.join(root, relativePath), "utf8"));
}

export function readText(root, relativePath) {
  return readFileSync(path.join(root, relativePath), "utf8");
}

export function loadPack(root = findRoot()) {
  const catalog = readJson(root, "docs/agent/catalog.json");
  const routes = readJson(root, "docs/agent/routes.json").routes;
  const prompts = readJson(root, "docs/agent/prompts.json").prompts;
  const docsIndex = readJson(root, "docs/agent/docs.index.json");
  return { root, catalog, routes, prompts, docsIndex };
}

export function scoreResource(resource, query) {
  const q = query.toLowerCase();
  let value = 0;
  if (resource.title.toLowerCase().includes(q)) value += 12;
  if (resource.id.toLowerCase().includes(q)) value += 10;
  if (resource.tags.some((tag) => tag.toLowerCase().includes(q))) value += 8;
  if (resource.field.toLowerCase().includes(q)) value += 6;
  if (resource.category.toLowerCase().includes(q)) value += 5;
  if (resource.description.toLowerCase().includes(q)) value += 3;
  if (resource.bestFor.toLowerCase().includes(q)) value += 3;
  if (resource.searchableText?.includes(q)) value += 1;
  if (resource.priority === "canonical") value += 2;
  if (resource.priority === "production") value += 1;
  return value;
}

export function compactResource(resource) {
  return {
    id: resource.id,
    title: resource.title,
    category: resource.category,
    field: resource.field,
    kind: resource.kind,
    status: resource.status,
    priority: resource.priority,
    tags: resource.tags,
    url: resource.url,
    github: resource.github,
    image: resource.image,
    bestFor: resource.bestFor,
    description: resource.description
  };
}

export function resourcesForRoute(pack, routeId) {
  const route = pack.routes.find((candidate) => candidate.id === routeId);
  if (!route) throw new Error(`Unknown route: ${routeId}`);

  const byId = new Map(pack.catalog.resources.map((resource) => [resource.id, resource]));
  return route.expandedResourceIds.map((id) => byId.get(id)).filter(Boolean);
}

export function searchResources(pack, query) {
  return pack.catalog.resources
    .map((resource) => ({ resource, score: scoreResource(resource, query) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.resource.title.localeCompare(b.resource.title))
    .map((item) => item.resource);
}

export function filterResources(pack, filters = {}) {
  let results = pack.catalog.resources;

  if (filters.route) results = resourcesForRoute(pack, filters.route);
  if (filters.search) results = searchResources({ ...pack, catalog: { ...pack.catalog, resources: results } }, filters.search);
  if (filters.tag) {
    const tag = filters.tag.toLowerCase();
    results = results.filter((resource) =>
      resource.tags.some((candidate) => candidate.toLowerCase() === tag)
    );
  }
  if (filters.kind) results = results.filter((resource) => resource.kind === filters.kind);
  if (filters.status) results = results.filter((resource) => resource.status === filters.status);
  if (filters.category) {
    const category = filters.category.toLowerCase();
    results = results.filter((resource) => resource.category.toLowerCase() === category);
  }

  return results;
}

export function getResource(pack, id) {
  const resource = pack.catalog.resources.find((candidate) => candidate.id === id);
  if (!resource) throw new Error(`Unknown resource: ${id}`);
  return resource;
}

export function getRoute(pack, id) {
  const route = pack.routes.find((candidate) => candidate.id === id);
  if (!route) throw new Error(`Unknown route: ${id}`);
  return route;
}

export function getChunks(root, options = {}) {
  const text = readText(root, "docs/agent/chunks.jsonl").trim();
  const chunks = text ? text.split("\n").map((line) => JSON.parse(line)) : [];

  let results = chunks;
  if (options.type) results = results.filter((chunk) => chunk.type === options.type);
  if (options.resourceId) {
    results = results.filter(
      (chunk) => chunk.id === `resource.${options.resourceId}` || chunk.resourceIds?.includes(options.resourceId)
    );
  }
  if (options.routeId) {
    results = results.filter(
      (chunk) => chunk.id === `route.${options.routeId}` || chunk.routeIds?.includes(options.routeId)
    );
  }
  if (options.search) {
    const query = options.search.toLowerCase();
    results = results.filter((chunk) => {
      const haystack = [
        chunk.title,
        chunk.content,
        ...(chunk.tags ?? []),
        ...(chunk.headingPath ?? [])
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }

  return results;
}

export function makeRecommendation(pack, options = {}) {
  const limit = options.limit ?? 12;
  const routes = options.route ? [getRoute(pack, options.route)] : inferRoutes(pack, options.search ?? "");
  const byId = new Map(pack.catalog.resources.map((resource) => [resource.id, resource]));
  const routeResources = routes.flatMap((route) => [
    ...route.primaryResourceIds,
    ...route.expandedResourceIds
  ]);
  const routeSet = new Set(routeResources);
  const searchMatches = options.search ? searchResources(pack, options.search) : [];
  const resources = Array.from(
    new Set([
      ...routeResources,
      ...searchMatches.map((resource) => resource.id)
    ])
  )
    .map((id) => byId.get(id))
    .filter(Boolean)
    .sort((a, b) => {
      const routeA = routeSet.has(a.id) ? 1 : 0;
      const routeB = routeSet.has(b.id) ? 1 : 0;
      return routeB - routeA || scoreResource(b, options.search ?? "") - scoreResource(a, options.search ?? "");
    })
    .slice(0, limit);

  return {
    task: options.task ?? options.search ?? options.route ?? "general 3D web app work",
    routes: routes.map((route) => ({
      id: route.id,
      title: route.title,
      intent: route.intent,
      primaryResourceIds: route.primaryResourceIds
    })),
    resources: resources.map(compactResource),
    guidance: [
      "Prefer canonical/production resources for implementation decisions.",
      "Use creative/showcase resources for visual direction.",
      "Cite primary URLs and GitHub URLs when returning recommendations.",
      "Use preview image paths for visual inspection only."
    ]
  };
}

export function inferRoutes(pack, query) {
  const normalized = query.toLowerCase();
  const scored = pack.routes
    .map((route) => {
      let score = 0;
      if (route.title.toLowerCase().includes(normalized)) score += 10;
      if (route.intent.toLowerCase().includes(normalized)) score += 8;
      for (const hint of route.queryHints) {
        if (normalized.includes(hint.toLowerCase())) score += 6;
      }
      for (const tag of route.tagAny) {
        if (normalized.includes(tag.toLowerCase())) score += 3;
      }
      return { route, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.route);

  return scored.length ? scored.slice(0, 3) : pack.routes.slice(0, 3);
}
