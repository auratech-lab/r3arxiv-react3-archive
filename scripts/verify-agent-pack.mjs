import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { channels, resources } from "../src/data/resources.ts";

const rootDir = process.cwd();

function readJson(relativePath) {
  return JSON.parse(readFileSync(path.join(rootDir, relativePath), "utf8"));
}

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function readJsonl(relativePath) {
  const text = readFileSync(path.join(rootDir, relativePath), "utf8").trim();
  if (!text) return [];
  return text.split("\n").map((line, index) => {
    try {
      return JSON.parse(line);
    } catch (error) {
      throw new Error(`${relativePath}:${index + 1} is not valid JSON: ${error.message}`);
    }
  });
}

const catalog = readJson("docs/agent/catalog.json");
const docsIndex = readJson("docs/agent/docs.index.json");
const routes = readJson("docs/agent/routes.json");
const prompts = readJson("docs/agent/prompts.json");
const mcpResources = readJson("docs/agent/mcp-resources.json");
const resourceLines = readJsonl("docs/agent/resources.jsonl");
const chunkLines = readJsonl("docs/agent/chunks.jsonl");

assert(catalog.title === "R3ARXIV", "Catalog title must be R3ARXIV.");
assert(catalog.resources.length === resources.length, "Catalog resource count mismatch.");
assert(resourceLines.length === resources.length, "Resource JSONL count mismatch.");
assert(chunkLines.length >= resources.length, "Chunk JSONL must include every resource.");
assert(routes.routes.length >= 8, "Expected task routes for major agent workflows.");
assert(prompts.prompts.length >= 5, "Expected reusable agent prompts.");
assert(
  mcpResources.resources.length >= resources.length,
  "MCP resource manifest should expose catalog resources."
);

const ids = new Set();
for (const resource of catalog.resources) {
  assert(!ids.has(resource.id), `Duplicate resource id ${resource.id}.`);
  ids.add(resource.id);
  assert(resource.title, `${resource.id} is missing title.`);
  assert(resource.url, `${resource.id} is missing url.`);
  assert(resource.description, `${resource.id} is missing description.`);
  assert(resource.bestFor, `${resource.id} is missing bestFor.`);
  assert(Array.isArray(resource.tags) && resource.tags.length > 0, `${resource.id} needs tags.`);
  assert(resource.image.startsWith("/screenshots/"), `${resource.id} has unexpected image path.`);

  const imagePath = path.join(rootDir, "public", resource.image.replace(/^\//, ""));
  assert(existsSync(imagePath), `${resource.id} preview image is missing at ${resource.image}.`);
}

for (const channel of channels) {
  const channelRecord = catalog.taxonomy.channels.find(
    (candidate) => candidate.title === channel.title
  );
  assert(channelRecord, `Missing taxonomy channel ${channel.title}.`);
  assert(channelRecord.count > 0, `Channel ${channel.title} should not be empty.`);
}

for (const route of routes.routes) {
  assert(route.primaryResourceIds.length > 0, `Route ${route.id} needs primary resources.`);
  for (const id of route.primaryResourceIds) {
    assert(ids.has(id), `Route ${route.id} references unknown resource ${id}.`);
  }
}

for (const relativePath of [
  "AGENTS.md",
  "CLAUDE.md",
  ".github/copilot-instructions.md",
  "llms.txt",
  "llms-full.txt",
  "docs/agent/README.md",
  "docs/agent/resources.md",
  "docs/agent/catalog.json",
  "docs/agent/resources.jsonl",
  "docs/agent/chunks.jsonl",
  "docs/agent/routes.json",
  "docs/agent/prompts.json",
  "docs/agent/mcp-resources.json",
  "docs/agent/docs.index.json",
  "skills/r3arxiv-react-three-dev/SKILL.md",
  "skills/r3arxiv-react-three-dev/references/review-rules.md",
  "skills/r3arxiv-react-three-dev/scripts/lib/r3arxiv-core.mjs",
  "skills/r3arxiv-react-three-dev/scripts/r3arxiv-cli.mjs",
  "skills/r3arxiv-react-three-dev/scripts/r3arxiv-mcp-server.mjs",
  "skills/r3arxiv-react-three-dev/scripts/r3arxiv-query.mjs",
  "skills/r3arxiv-react-three-dev/scripts/r3f-audit.mjs",
  "public/llms.txt",
  "public/llms-full.txt",
  "public/agent/catalog.json",
  "public/agent/chunks.jsonl",
  "public/docs/agent/catalog.json",
  "public/docs/agent/chunks.jsonl",
  "public/skills/r3arxiv-react-three-dev/SKILL.md"
]) {
  assert(existsSync(path.join(rootDir, relativePath)), `Missing ${relativePath}.`);
}

for (const artifact of docsIndex.artifacts) {
  if (
    !artifact.path.startsWith("docs/agent/") &&
    !artifact.path.startsWith("skills/r3arxiv-react-three-dev/") &&
    !["AGENTS.md", "CLAUDE.md", ".github/copilot-instructions.md", "llms.txt", "llms-full.txt"].includes(artifact.path)
  ) {
    continue;
  }

  const artifactPath = path.join(rootDir, artifact.path);
  if (existsSync(artifactPath)) {
    const content = readFileSync(artifactPath, "utf8");
    assert(
      sha256(content) === artifact.sha256,
      `Artifact hash mismatch for ${artifact.path}. Regenerate with npm run agent:export.`
    );
  }
}

console.log(
  JSON.stringify(
    {
      resources: catalog.resources.length,
      chunks: chunkLines.length,
      routes: routes.routes.length,
      prompts: prompts.prompts.length,
      artifacts: docsIndex.artifacts.length
    },
    null,
    2
  )
);
