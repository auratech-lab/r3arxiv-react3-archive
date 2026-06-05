#!/usr/bin/env node
import {
  compactResource,
  filterResources,
  findRoot,
  loadPack
} from "./lib/r3arxiv-core.mjs";

function usage() {
  console.log(`Usage:
  r3arxiv-query --routes
  r3arxiv-query --route <route-id> [--limit n] [--json]
  r3arxiv-query --search <text> [--limit n] [--json]
  r3arxiv-query --tag <tag> [--limit n] [--json]
  r3arxiv-query --kind <kind> [--limit n] [--json]
  r3arxiv-query --status <status> [--limit n] [--json]
  r3arxiv-query --category <category> [--limit n] [--json]

Environment:
  R3ARXIV_ROOT=/path/to/r3arxiv-react3-archive`);
}

function parseArgs(argv) {
  const args = {
    limit: 20,
    json: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--json") args.json = true;
    else if (arg === "--routes") args.routes = true;
    else if (arg === "--help" || arg === "-h") args.help = true;
    else if (arg === "--limit") args.limit = Number(argv[++i] ?? 20);
    else if (arg === "--route") args.route = argv[++i];
    else if (arg === "--search") args.search = argv[++i];
    else if (arg === "--tag") args.tag = argv[++i];
    else if (arg === "--kind") args.kind = argv[++i];
    else if (arg === "--status") args.status = argv[++i];
    else if (arg === "--category") args.category = argv[++i];
    else throw new Error(`Unknown argument: ${arg}`);
  }

  if (!Number.isFinite(args.limit) || args.limit < 1) args.limit = 20;
  return args;
}

function printResources(resources, json) {
  const records = resources.map(compactResource);
  if (json) {
    console.log(JSON.stringify(records, null, 2));
    return;
  }

  for (const resource of records) {
    console.log(`${resource.id} | ${resource.title}`);
    console.log(`  ${resource.category} / ${resource.kind} / ${resource.status} / ${resource.priority}`);
    console.log(`  ${resource.bestFor}`);
    console.log(`  ${resource.url}`);
    if (resource.github) console.log(`  ${resource.github}`);
    console.log(`  tags: ${resource.tags.join(", ")}`);
  }
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    return;
  }

  const pack = loadPack(findRoot());
  const { routes } = pack;

  if (args.routes) {
    const records = routes.map((route) => ({
      id: route.id,
      title: route.title,
      intent: route.intent,
      primaryResourceIds: route.primaryResourceIds
    }));
    console.log(args.json ? JSON.stringify(records, null, 2) : records.map((route) => `${route.id}: ${route.title}`).join("\n"));
    return;
  }

  const hasFilter =
    args.route || args.search || args.tag || args.kind || args.status || args.category;
  if (!hasFilter) {
    usage();
    process.exitCode = 1;
    return;
  }

  const results = filterResources(pack, args);
  printResources(results.slice(0, args.limit), args.json);
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
