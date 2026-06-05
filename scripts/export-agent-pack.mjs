import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { cp, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { channels, kinds, resources, statuses } from "../src/data/resources.ts";

const rootDir = process.cwd();
const docsDir = path.join(rootDir, "docs", "agent");
const publicAgentDir = path.join(rootDir, "public", "agent");
const publicDocsAgentDir = path.join(rootDir, "public", "docs", "agent");
const publicSkillsDir = path.join(rootDir, "public", "skills");
const generatedAt = new Date().toISOString();
const schemaVersion = "1.0.0";
const title = "R3ARXIV";
const description =
  "Agent-ready archive of React Three Fiber, Three.js, WebGL, WebGPU, XR, asset-pipeline, shader, game, and creative-web resources.";

const sourceFiles = [
  "src/data/resources.ts",
  "src/data/resourceAdditions.ts",
  "src/data/resourceExpansion.ts",
  "src/data/resourceExpansion2.ts"
];

const statusWeight = {
  core: 1,
  production: 0.86,
  creative: 0.74,
  learning: 0.66,
  experimental: 0.48
};

const kindWeight = {
  docs: 0.1,
  reference: 0.08,
  library: 0.08,
  tool: 0.05,
  course: 0.04,
  starter: 0.04,
  asset: 0.03,
  showcase: 0.02,
  article: 0.02,
  community: 0.01
};

const routeDefinitions = [
  {
    id: "start-r3f-app",
    title: "Start or repair a React Three Fiber app",
    intent:
      "Use when an agent needs the canonical renderer stack, project setup, Drei helpers, state, controls, and first production defaults.",
    queryHints: ["r3f", "react three fiber", "canvas", "starter", "vite"],
    categoryAny: ["Foundations", "Ecosystem Libraries"],
    tagAny: ["r3f", "react", "three.js", "pmndrs", "starter"],
    resourceIds: [
      "r3f",
      "r3f-docs",
      "threejs",
      "threejs-docs",
      "drei-docs",
      "vite",
      "typescript",
      "gltfjsx",
      "leva",
      "zustand",
      "maath",
      "react-use-measure"
    ]
  },
  {
    id: "asset-pipeline",
    title: "Choose and optimize a 3D asset pipeline",
    intent:
      "Use for GLB/glTF conversion, compression, validation, free models, materials, HDRIs, avatars, scans, and production asset hygiene.",
    queryHints: ["gltf", "glb", "assets", "models", "compression", "textures"],
    categoryAny: ["Asset Pipeline", "Data, Maps & AI"],
    tagAny: ["gltf", "assets", "models", "textures", "compression"],
    resourceIds: [
      "gltfjsx",
      "gltf-transform",
      "gltf-validator",
      "gltf-report",
      "gltfpack",
      "meshoptimizer",
      "draco",
      "ktx",
      "blender",
      "blender-gltf-exporter",
      "mixamo-to-gltf",
      "polyhaven",
      "ambientcg",
      "sketchfab",
      "fab"
    ]
  },
  {
    id: "shader-effects",
    title: "Build shaders, materials, and post effects",
    intent:
      "Use when the task mentions GLSL, WGSL, custom materials, transitions, distortion, procedural effects, postprocessing, or visual art direction.",
    queryHints: ["shader", "glsl", "wgsl", "material", "postprocessing", "effect"],
    categoryAny: ["Creative Coding & Shaders", "Ecosystem Libraries"],
    tagAny: ["shaders", "glsl", "materials", "effects", "postprocessing"],
    resourceIds: [
      "book-of-shaders",
      "shadertoy",
      "lygia",
      "hg-sdf",
      "glsl-noise",
      "glsl-easings",
      "glsl-aastep",
      "shader-park",
      "lamina",
      "shader-composer",
      "react-shader-fiber",
      "postprocessing",
      "n8ao",
      "three-custom-shader-material"
    ]
  },
  {
    id: "performance-debug",
    title: "Debug performance, loading, and rendering limits",
    intent:
      "Use for frame drops, GPU limits, draw-call pressure, workers, BVH raycasting, bundle size, screenshots that fail to load, and diagnostics.",
    queryHints: ["performance", "debug", "fps", "profiling", "worker", "bvh"],
    categoryAny: ["Performance & Debug"],
    tagAny: ["performance", "debug", "profiling", "worker", "bvh"],
    resourceIds: [
      "r3f-perf",
      "drei-performance-monitor",
      "stats-gl",
      "stats-js",
      "detect-gpu",
      "chrome-performance",
      "webgl-report",
      "three-mesh-bvh",
      "react-three-offscreen",
      "meshoptimizer",
      "vite-plugin-compression"
    ]
  },
  {
    id: "xr-ar-vr",
    title: "Plan WebXR, AR, VR, and spatial input",
    intent:
      "Use for immersive web apps, headset sessions, hit testing, hand input, layers, anchors, DOM overlays, avatars, and WebXR standards.",
    queryHints: ["webxr", "ar", "vr", "headset", "hand tracking", "hit test"],
    categoryAny: ["XR, AR & VR"],
    tagAny: ["webxr", "xr", "ar", "vr", "hands"],
    resourceIds: [
      "immersive-web",
      "mdn-webxr",
      "three-webxr",
      "webxr-samples",
      "webxr-spec",
      "webxr-input-profiles",
      "webxr-hit-test",
      "webxr-hand-input",
      "webxr-layers",
      "meta-presence-platform",
      "zappar-react-three-fiber",
      "coconut-xr-koestlich",
      "xr-docs"
    ]
  },
  {
    id: "physics-games",
    title: "Build game loops, physics, navigation, and multiplayer",
    intent:
      "Use for character controllers, collision, ECS, pathfinding, behavior trees, realtime multiplayer, and web game engines.",
    queryHints: ["physics", "game", "rapier", "character", "ecs", "multiplayer"],
    categoryAny: ["Gaming & Physics"],
    tagAny: ["physics", "games", "ecs", "navigation", "multiplayer"],
    resourceIds: [
      "react-three-rapier",
      "rapier",
      "cannon-es",
      "react-three-cannon",
      "ecctrl",
      "miniplex",
      "bitecs",
      "yuka",
      "recast-navigation",
      "three-pathfinding",
      "navmesh",
      "colyseus",
      "geckos",
      "trystero",
      "phaser",
      "excaliburjs",
      "kaboom"
    ]
  },
  {
    id: "visual-inspiration",
    title: "Find visual references, studios, and artists",
    intent:
      "Use when an agent needs taste, references, examples to imitate structurally, or links to standout creative technologists and studios.",
    queryHints: ["inspiration", "showcase", "artist", "studio", "creative coding"],
    categoryAny: ["Showcases & Inspiration", "Creative Coding & Shaders", "Web Experiences"],
    tagAny: ["inspiration", "portfolio", "studio", "creative", "showcase"],
    resourceIds: [
      "bruno-simon",
      "yuri-artiukh",
      "aristide-benoist",
      "raven-kwok",
      "patricio-gonzalez-vivo",
      "matt-deslauriers",
      "nicky-case",
      "active-theory",
      "resn",
      "hello-monday",
      "lusion",
      "makemepulse",
      "unit9",
      "the-fwa",
      "codrops"
    ]
  },
  {
    id: "data-maps-ai",
    title: "Use maps, globes, splats, scans, and generated 3D assets",
    intent:
      "Use for geographic visualization, point clouds, 3D tiles, Gaussian splats, AI-generated models, scans, and spatial data.",
    queryHints: ["maps", "globe", "splats", "3d tiles", "ai assets", "scans"],
    categoryAny: ["Data, Maps & AI"],
    tagAny: ["maps", "data", "splats", "ai", "3d scan"],
    resourceIds: [
      "react-globe-gl",
      "r3f-globe",
      "three-globe",
      "deck-gl",
      "kepler-gl",
      "maplibre-gl-js",
      "cesiumjs",
      "3d-tiles-renderer",
      "google-scanned-objects",
      "objaverse-xl",
      "luma-genie",
      "tripo-ai",
      "meshy",
      "gaussian-splats-3d",
      "sparkjs",
      "supersplat",
      "nerfstudio"
    ]
  },
  {
    id: "learning-theory",
    title: "Learn graphics fundamentals and durable theory",
    intent:
      "Use when an agent should explain the underlying math, WebGL/WebGPU concepts, rendering algorithms, or shader fundamentals before coding.",
    queryHints: ["learning", "graphics", "math", "webgl", "webgpu", "rendering"],
    categoryAny: ["Learning & Theory", "Foundations"],
    tagAny: ["learning", "graphics", "math", "webgl", "webgpu"],
    resourceIds: [
      "discover-three",
      "threejs-fundamentals",
      "webgl-fundamentals",
      "webgl2-fundamentals",
      "webgpu-fundamentals",
      "math-for-3d",
      "book-of-shaders",
      "graphics-compendium",
      "real-time-rendering",
      "gpu-gems",
      "raytracing-weekend",
      "pbr-book",
      "scratchapixel",
      "learnopengl",
      "nature-of-code"
    ]
  },
  {
    id: "web-experiences",
    title: "Build editorial, portfolio, and scroll-driven 3D websites",
    intent:
      "Use for visual websites where R3F is combined with animation systems, scroll orchestration, page frameworks, or no-code 3D tools.",
    queryHints: ["portfolio", "website", "scroll", "animation", "editorial", "spline"],
    categoryAny: ["Web Experiences"],
    tagAny: ["websites", "portfolio", "scroll", "animation"],
    resourceIds: [
      "r3f-portfolio-starter",
      "react-three-next",
      "r3f-scroll-rig",
      "theatre",
      "gsap",
      "gsap-scrolltrigger",
      "lenis",
      "locomotive-scroll",
      "framer-motion",
      "react-spring",
      "unicorn-studio",
      "spline",
      "dora"
    ]
  }
];

function getHost(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function countWords(value) {
  return value.trim() ? value.trim().split(/\s+/).length : 0;
}

function approxTokens(value) {
  return Math.ceil(countWords(value) * 1.35);
}

function searchableText(resource) {
  return [
    resource.title,
    resource.description,
    resource.bestFor,
    resource.category,
    resource.field,
    resource.kind,
    resource.status,
    ...resource.tags
  ]
    .join(" ")
    .toLowerCase();
}

function priorityFor(resource) {
  const score =
    (statusWeight[resource.status] ?? 0.5) + (kindWeight[resource.kind] ?? 0);

  if (score >= 1.04) return "canonical";
  if (score >= 0.88) return "production";
  if (score >= 0.7) return "specialized";
  if (score >= 0.55) return "learning";
  return "experimental";
}

function taskHintsFor(resource) {
  const haystack = searchableText(resource);
  return routeDefinitions
    .filter((route) => {
      if (route.categoryAny.includes(resource.category)) return true;
      return route.tagAny.some((tag) => haystack.includes(tag));
    })
    .map((route) => route.id);
}

function normalizeResource(resource) {
  const channel = channels.find((candidate) => candidate.title === resource.category);
  const image = resource.image ?? `/screenshots/${resource.id}.webp`;
  const content = [
    `${resource.title} (${resource.id})`,
    `Category: ${resource.category}`,
    `Field: ${resource.field}`,
    `Kind: ${resource.kind}`,
    `Status: ${resource.status}`,
    `Description: ${resource.description}`,
    `Best for: ${resource.bestFor}`,
    `Tags: ${resource.tags.join(", ")}`,
    `Primary URL: ${resource.url}`,
    resource.github ? `GitHub: ${resource.github}` : "GitHub: none",
    resource.previewUrl ? `Preview URL: ${resource.previewUrl}` : `Preview image: ${image}`
  ].join("\n");

  return {
    id: resource.id,
    title: resource.title,
    url: resource.url,
    github: resource.github ?? null,
    previewUrl: resource.previewUrl ?? null,
    category: resource.category,
    channelId: channel?.id ?? null,
    field: resource.field,
    kind: resource.kind,
    status: resource.status,
    description: resource.description,
    bestFor: resource.bestFor,
    tags: resource.tags,
    image,
    imageSource: resource.image ? "explicit" : "derived",
    color: resource.color,
    size: resource.size ?? "standard",
    host: getHost(resource.url),
    githubHost: resource.github ? getHost(resource.github) : null,
    searchableText: searchableText(resource),
    priority: priorityFor(resource),
    taskHints: taskHintsFor(resource),
    headingPath: ["R3ARXIV", resource.category, resource.field, resource.title],
    source: {
      sourceUrl: resource.url,
      githubUrl: resource.github ?? null,
      screenshotPath: image
    },
    retrieval: {
      id: `resource.${resource.id}`,
      title: resource.title,
      content,
      contentSha256: sha256(content),
      wordCount: countWords(content),
      approxTokenCount: approxTokens(content)
    }
  };
}

function countBy(items, getKey) {
  const counts = new Map();
  for (const item of items) {
    const key = getKey(item);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return counts;
}

function normalizeRoutes(normalizedResources) {
  const byId = new Map(normalizedResources.map((resource) => [resource.id, resource]));

  return routeDefinitions.map((route) => {
    const directIds = route.resourceIds.filter((id) => byId.has(id));
    const directSet = new Set(directIds);
    const discoveredIds = normalizedResources
      .filter((resource) => {
        if (directSet.has(resource.id)) return false;
        if (route.categoryAny.includes(resource.category)) return true;
        return route.tagAny.some((tag) => resource.searchableText.includes(tag));
      })
      .sort((a, b) => {
        const priorityDiff =
          (statusWeight[b.status] ?? 0.5) - (statusWeight[a.status] ?? 0.5);
        return priorityDiff || a.title.localeCompare(b.title);
      })
      .slice(0, 28)
      .map((resource) => resource.id);

    return {
      id: route.id,
      title: route.title,
      intent: route.intent,
      queryHints: route.queryHints,
      categoryAny: route.categoryAny,
      tagAny: route.tagAny,
      primaryResourceIds: directIds,
      expandedResourceIds: Array.from(new Set([...directIds, ...discoveredIds])),
      suggestedPrompt:
        `Use R3ARXIV route ${route.id}. Start with the primaryResourceIds, then use expandedResourceIds only when the task needs more breadth.`
    };
  });
}

function buildResourceMarkdown(normalizedResources) {
  const grouped = Map.groupBy(normalizedResources, (resource) => resource.category);
  const lines = [
    "# R3ARXIV Resource Catalog",
    "",
    `> ${description}`,
    "",
    `Generated: ${generatedAt}`,
    `Resources: ${normalizedResources.length}`,
    "",
    "Use this Markdown catalog when an agent needs readable context with source URLs and concise use guidance. Use `docs/agent/catalog.json` or `/agent/catalog.json` when a tool can parse JSON.",
    ""
  ];

  for (const channel of channels) {
    const items = grouped.get(channel.title) ?? [];
    lines.push(`## ${channel.title}`, "", channel.signal, "");

    for (const resource of items) {
      lines.push(
        `### ${resource.title}`,
        "",
        `- ID: \`${resource.id}\``,
        `- Field: ${resource.field}`,
        `- Kind / status / priority: ${resource.kind} / ${resource.status} / ${resource.priority}`,
        `- Best for: ${resource.bestFor}`,
        `- Description: ${resource.description}`,
        `- Tags: ${resource.tags.map((tag) => `\`${tag}\``).join(", ")}`,
        `- URL: ${resource.url}`,
        `- GitHub: ${resource.github ?? "none"}`,
        `- Preview: ${resource.image}`,
        `- Agent routes: ${resource.taskHints.length ? resource.taskHints.join(", ") : "general-search"}`,
        ""
      );
    }
  }

  return `${lines.join("\n").trim()}\n`;
}

function buildGuideMarkdown(normalizedResources, routes) {
  const channelCounts = countBy(normalizedResources, (resource) => resource.category);
  const kindCounts = countBy(normalizedResources, (resource) => resource.kind);
  const lines = [
    "# R3ARXIV Agent Pack",
    "",
    `> ${description}`,
    "",
    "This pack is built for coding agents that need to plan, build, debug, or research 3D web applications without scraping the visual UI.",
    "",
    "## Entry Points",
    "",
    "- `llms.txt`: Small, standards-shaped table of contents for agents.",
    "- `llms-full.txt`: Single-file Markdown context pack.",
    "- `docs/agent/catalog.json`: Full normalized resource index.",
    "- `docs/agent/chunks.jsonl`: Retrieval-ready JSON Lines chunks.",
    "- `docs/agent/routes.json`: Task-intent routing for common 3D web app jobs.",
    "- `docs/agent/prompts.json`: Reusable prompts for agentic platforms and MCP prompt servers.",
    "- `skills/r3arxiv-react-three-dev/SKILL.md`: Consolidated React Three / Three.js coding-agent skill.",
    "- `public/agent/*`: Same machine-readable files served by the Vite app.",
    "",
    "## How Agents Should Use It",
    "",
    "1. Read `AGENTS.md` for repo commands and guardrails.",
    "2. Read `llms.txt` to choose the smallest relevant artifact.",
    "3. Use `routes.json` when the user describes a task rather than naming a resource.",
    "4. Use `catalog.json` for filtering by category, kind, status, tag, host, or source URL.",
    "5. Use `chunks.jsonl` for embedding, vector search, or line-by-line retrieval.",
    "6. Use `skills/r3arxiv-react-three-dev` for React Three / Three.js implementation, review, and debugging tasks.",
    "7. Use screenshot paths only as visual references; never treat previews as source-code documentation.",
    "",
    "## Catalog Shape",
    "",
    "Every normalized resource includes `id`, `title`, `url`, optional `github`, `category`, `channelId`, `field`, `kind`, `status`, `description`, `bestFor`, `tags`, a stable local `image`, `host`, `priority`, `taskHints`, and retrieval metadata.",
    "",
    "## Channel Counts",
    "",
    ...channels.map(
      (channel) => `- ${channel.title}: ${channelCounts.get(channel.title) ?? 0}`
    ),
    "",
    "## Kind Counts",
    "",
    ...kinds.map((kind) => `- ${kind}: ${kindCounts.get(kind) ?? 0}`),
    "",
    "## Task Routes",
    ""
  ];

  for (const route of routes) {
    lines.push(
      `### ${route.title}`,
      "",
      route.intent,
      "",
      `- Route ID: \`${route.id}\``,
      `- Query hints: ${route.queryHints.map((hint) => `\`${hint}\``).join(", ")}`,
      `- Primary resources: ${route.primaryResourceIds.map((id) => `\`${id}\``).join(", ")}`,
      ""
    );
  }

  return `${lines.join("\n").trim()}\n`;
}

function buildLlmsTxt({ publicPaths = false } = {}) {
  const prefix = publicPaths ? "" : "";
  const agentPrefix = publicPaths ? "/agent" : "docs/agent";
  const fullPath = publicPaths ? "/llms-full.txt" : "llms-full.txt";
  const appPath = publicPaths ? "/" : "README.md";

  return `# ${title}

> ${description}

R3ARXIV is a curated visual wiki for building 3D web apps. It contains ${resources.length} resources across ${channels.length} channels, with local previews and agent-oriented exports for retrieval, task routing, and source citation.

## Start Here

- [Agent guide](${prefix}${agentPrefix}/README.md): How coding agents should ingest and route this collection.
- [Full agent context](${fullPath}): Single-file Markdown bundle for large-context agents.
- [Human app / README](${appPath}): Run and curate the visual interface.

## Machine-Readable Indexes

- [Full catalog](${prefix}${agentPrefix}/catalog.json): Normalized JSON with all resources, taxonomy, routes, and source fields.
- [Resource records](${prefix}${agentPrefix}/resources.jsonl): One JSON object per resource.
- [Retrieval chunks](${prefix}${agentPrefix}/chunks.jsonl): JSON Lines chunks suitable for vector stores and search indexes.
- [Document index](${prefix}${agentPrefix}/docs.index.json): Generated artifact manifest with hashes and descriptions.

## Agent Routing

- [Task routes](${prefix}${agentPrefix}/routes.json): Maps common 3D web app intents to resource IDs.
- [Prompt templates](${prefix}${agentPrefix}/prompts.json): Reusable prompts for Codex, Claude Code, Copilot, Cursor, or MCP prompt servers.
- [MCP resource manifest](${prefix}${agentPrefix}/mcp-resources.json): MCP-shaped resource descriptors for future read-only servers.

## Agent Skill

- [R3ARXIV React Three Dev skill](skills/r3arxiv-react-three-dev/SKILL.md): Consolidated R3F, Three.js, shader, XR, asset, physics, ECS, and performance workflow for coding agents.

## Catalog Markdown

- [Resource catalog](${prefix}${agentPrefix}/resources.md): Human-readable Markdown list of every resource with URLs, tags, and agent routes.

## Optional

- [Visual previews](${publicPaths ? "/screenshots/" : "public/screenshots/"}): Local WebP previews for visual inspection.
`;
}

function buildLlmsFull(guideMarkdown, resourceMarkdown, normalizedResources, routes) {
  const compactIndex = normalizedResources
    .map(
      (resource) =>
        `- ${resource.id}: ${resource.title} | ${resource.category} | ${resource.kind}/${resource.status} | ${resource.url}`
    )
    .join("\n");
  const routeSummary = routes
    .map(
      (route) =>
        `- ${route.id}: ${route.title}. Primary: ${route.primaryResourceIds.join(", ")}`
    )
    .join("\n");

  return `# ${title} Full Agent Context

> ${description}

Generated: ${generatedAt}
Schema version: ${schemaVersion}
Resource count: ${normalizedResources.length}

## Recommended Agent Workflow

1. If editing this repo, read AGENTS.md first.
2. If selecting resources for a user task, read the route summary and then inspect matching resources.
3. Prefer canonical and production resources for implementation advice; use creative/showcase resources for visual direction and examples.
4. Cite primary URLs and GitHub URLs when giving recommendations.
5. Use local preview paths only to understand what the resource looks like.

## Route Summary

${routeSummary}

## Compact Resource Index

${compactIndex}

---

${guideMarkdown}

---

${resourceMarkdown}
`;
}

function buildPrompts(routes) {
  return {
    schemaVersion,
    generatedAt,
    prompts: [
      {
        name: "r3arxiv_select_stack",
        title: "Select a 3D Web Stack",
        description:
          "Choose R3ARXIV resources for a concrete React Three Fiber or Three.js project.",
        arguments: [
          { name: "project_goal", required: true },
          { name: "constraints", required: false },
          { name: "preferred_style", required: false }
        ],
        messages: [
          {
            role: "user",
            content:
              "Use docs/agent/routes.json and docs/agent/catalog.json to select a practical 3D web stack for: {{project_goal}}. Respect constraints: {{constraints}}. Prefer canonical/production resources for implementation and creative/showcase resources for visual direction. Return resource IDs, source URLs, and a concise build plan."
          }
        ]
      },
      {
        name: "r3arxiv_debug_scene",
        title: "Debug a 3D Scene",
        description:
          "Route debugging tasks to performance, rendering, asset, and platform resources.",
        arguments: [
          { name: "symptoms", required: true },
          { name: "current_stack", required: false }
        ],
        messages: [
          {
            role: "user",
            content:
              "Use R3ARXIV route performance-debug plus any matching catalog tags to diagnose these symptoms: {{symptoms}}. Current stack: {{current_stack}}. Return likely causes, commands or browser checks to run, and the most relevant resources with URLs."
          }
        ]
      },
      {
        name: "r3arxiv_asset_pipeline",
        title: "Plan an Asset Pipeline",
        description:
          "Find conversion, compression, validation, and free-source assets for web 3D.",
        arguments: [
          { name: "asset_type", required: true },
          { name: "target_runtime", required: false }
        ],
        messages: [
          {
            role: "user",
            content:
              "Use the asset-pipeline route in docs/agent/routes.json. I need assets of type {{asset_type}} for {{target_runtime}}. Recommend source libraries, conversion steps, validation/compression tools, and performance checks. Include resource IDs and URLs."
          }
        ]
      },
      {
        name: "r3arxiv_visual_research",
        title: "Find Visual References",
        description:
          "Use artist, studio, showcase, shader, and web-experience resources for taste-building.",
        arguments: [
          { name: "visual_direction", required: true },
          { name: "implementation_medium", required: false }
        ],
        messages: [
          {
            role: "user",
            content:
              "Use the visual-inspiration, shader-effects, and web-experiences routes to research this visual direction: {{visual_direction}}. Medium: {{implementation_medium}}. Return references, why each matters, implementation leads, and URLs."
          }
        ]
      },
      {
        name: "r3arxiv_ingest",
        title: "Ingest R3ARXIV",
        description:
          "Instructions for an agent or retrieval system consuming this pack.",
        arguments: [{ name: "target_platform", required: false }],
        messages: [
          {
            role: "user",
            content:
              "Ingest this repo's agent pack for {{target_platform}}. Read AGENTS.md, llms.txt, docs/agent/README.md, docs/agent/docs.index.json, and docs/agent/chunks.jsonl. Preserve IDs, source URLs, tags, routes, and content hashes in your index."
          }
        ]
      },
      {
        name: "r3arxiv_review_r3f_code",
        title: "Review React Three Code",
        description:
          "Use the bundled R3ARXIV React Three Dev skill and audit script to review R3F/Three.js code.",
        arguments: [
          { name: "paths", required: true },
          { name: "review_focus", required: false }
        ],
        messages: [
          {
            role: "user",
            content:
              "Use skills/r3arxiv-react-three-dev/SKILL.md to review {{paths}} for React Three Fiber / Three.js issues. Run npm run r3f:audit -- {{paths}} when available, then manually apply skills/r3arxiv-react-three-dev/references/review-rules.md. Focus: {{review_focus}}. Return prioritized findings with file/line references and suggested fixes."
          }
        ]
      }
    ],
    routePromptHints: routes.map((route) => ({
      routeId: route.id,
      title: route.title,
      prompt:
        `For tasks matching ${route.queryHints.join(", ")}, start with resources: ${route.primaryResourceIds.join(", ")}.`
    }))
  };
}

function buildMcpResources(artifactDescriptors, normalizedResources) {
  return {
    schemaVersion,
    generatedAt,
    resources: [
      ...artifactDescriptors.map((artifact) => ({
        uri: `r3arxiv://artifact/${artifact.path}`,
        name: path.basename(artifact.path),
        title: artifact.title,
        description: artifact.description,
        mimeType: artifact.mimeType,
        size: artifact.size,
        annotations: {
          audience: ["assistant"],
          priority: artifact.priority,
          lastModified: generatedAt
        }
      })),
      ...normalizedResources.map((resource) => ({
        uri: `r3arxiv://resource/${resource.id}`,
        name: resource.id,
        title: resource.title,
        description: `${resource.description} Best for: ${resource.bestFor}`,
        mimeType: "application/json",
        annotations: {
          audience: ["assistant"],
          priority: resource.priority === "canonical" ? 0.95 : 0.65,
          lastModified: generatedAt
        }
      }))
    ]
  };
}

function artifact(pathname, titleValue, descriptionValue, mimeType, content, priority = 0.7) {
  return {
    path: pathname,
    publicPath: pathname.startsWith("docs/agent/")
      ? `/agent/${pathname.replace("docs/agent/", "")}`
      : `/${pathname}`,
    title: titleValue,
    description: descriptionValue,
    mimeType,
    size: Buffer.byteLength(content),
    sha256: sha256(content),
    priority
  };
}

function contentIfExists(relativePath) {
  const fullPath = path.join(rootDir, relativePath);
  return existsSync(fullPath) ? readFileSync(fullPath, "utf8") : "";
}

async function writeBoth(relativePath, content) {
  await writeFile(path.join(rootDir, relativePath), content);
  if (relativePath.startsWith("docs/agent/")) {
    const publicRelative = relativePath.replace("docs/agent/", "");
    await writeFile(path.join(publicAgentDir, publicRelative), content);
    await writeFile(path.join(publicDocsAgentDir, publicRelative), content);
  }
}

async function main() {
  await mkdir(docsDir, { recursive: true });
  await mkdir(publicAgentDir, { recursive: true });
  await mkdir(publicDocsAgentDir, { recursive: true });
  await mkdir(publicSkillsDir, { recursive: true });
  await cp(
    path.join(rootDir, "skills", "r3arxiv-react-three-dev"),
    path.join(publicSkillsDir, "r3arxiv-react-three-dev"),
    { recursive: true, force: true }
  );

  const normalizedResources = resources.map(normalizeResource);
  const routes = normalizeRoutes(normalizedResources);
  const resourceMarkdown = buildResourceMarkdown(normalizedResources);
  const guideMarkdown = buildGuideMarkdown(normalizedResources, routes);
  const prompts = buildPrompts(routes);

  const resourcesJsonl = `${normalizedResources
    .map((resource) => JSON.stringify(resource))
    .join("\n")}\n`;
  const chunksJsonl = `${[
    {
      id: "overview.r3arxiv",
      type: "overview",
      title,
      path: "docs/agent/README.md",
      url: "docs/agent/README.md",
      headingPath: ["R3ARXIV", "Agent Pack"],
      tags: ["r3arxiv", "agent-pack", "3d-web"],
      content: guideMarkdown,
      contentSha256: sha256(guideMarkdown),
      approxTokenCount: approxTokens(guideMarkdown)
    },
    ...normalizedResources.map((resource) => ({
      id: `resource.${resource.id}`,
      type: "resource",
      title: resource.title,
      path: `docs/agent/resources.md#${slugify(resource.title)}`,
      url: resource.url,
      sourceUrl: resource.url,
      githubUrl: resource.github,
      headingPath: resource.headingPath,
      tags: resource.tags,
      category: resource.category,
      kind: resource.kind,
      status: resource.status,
      priority: resource.priority,
      routeIds: resource.taskHints,
      content: resource.retrieval.content,
      contentSha256: resource.retrieval.contentSha256,
      approxTokenCount: resource.retrieval.approxTokenCount
    })),
    ...routes.map((route) => ({
      id: `route.${route.id}`,
      type: "route",
      title: route.title,
      path: "docs/agent/routes.json",
      url: "docs/agent/routes.json",
      headingPath: ["R3ARXIV", "Routes", route.title],
      tags: route.queryHints,
      resourceIds: route.expandedResourceIds,
      content: [
        route.title,
        route.intent,
        `Query hints: ${route.queryHints.join(", ")}`,
        `Primary resources: ${route.primaryResourceIds.join(", ")}`,
        `Expanded resources: ${route.expandedResourceIds.join(", ")}`
      ].join("\n"),
      contentSha256: sha256(route.intent),
      approxTokenCount: approxTokens(route.intent)
    }))
  ]
    .map((chunk) => JSON.stringify(chunk))
    .join("\n")}\n`;

  const catalog = {
    schemaVersion,
    generatedAt,
    title,
    description,
    source: {
      app: "r3arxiv-react3-archive",
      sourceFiles,
      resourceCount: normalizedResources.length,
      channelCount: channels.length,
      screenshotDirectory: "public/screenshots"
    },
    usage: {
      preferredStart: ["AGENTS.md", "llms.txt", "docs/agent/README.md"],
      routeFile: "docs/agent/routes.json",
      retrievalFile: "docs/agent/chunks.jsonl",
      visualPreviewRule:
        "Use image paths for visual inspection only; primary URLs and GitHub URLs are authoritative."
    },
    taxonomy: {
      channels: channels.map((channel) => ({
        ...channel,
        count: normalizedResources.filter((resource) => resource.category === channel.title)
          .length
      })),
      kinds: kinds.map((kind) => ({
        kind,
        count: normalizedResources.filter((resource) => resource.kind === kind).length
      })),
      statuses: statuses.map((status) => ({
        status,
        count: normalizedResources.filter((resource) => resource.status === status).length
      })),
      tags: Array.from(
        countBy(
          normalizedResources.flatMap((resource) => resource.tags),
          (tag) => tag
        )
      )
        .map(([tag, count]) => ({ tag, count }))
        .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag))
    },
    routes,
    resources: normalizedResources
  };

  const routesJson = `${JSON.stringify({ schemaVersion, generatedAt, routes }, null, 2)}\n`;
  const promptsJson = `${JSON.stringify(prompts, null, 2)}\n`;
  const catalogJson = `${JSON.stringify(catalog, null, 2)}\n`;
  const llmsRoot = buildLlmsTxt({ publicPaths: false });
  const llmsFull = buildLlmsFull(
    guideMarkdown,
    resourceMarkdown,
    normalizedResources,
    routes
  );

  const artifactDescriptors = [
    artifact("AGENTS.md", "Repository agent instructions", "Canonical instructions for coding agents.", "text/markdown", contentIfExists("AGENTS.md"), 1),
    artifact("CLAUDE.md", "Claude Code memory", "Claude Code shim that imports AGENTS.md.", "text/markdown", contentIfExists("CLAUDE.md"), 0.96),
    artifact(".github/copilot-instructions.md", "GitHub Copilot instructions", "Repository guidance for Copilot-compatible clients.", "text/markdown", contentIfExists(".github/copilot-instructions.md"), 0.9),
    artifact("skills/r3arxiv-react-three-dev/SKILL.md", "R3ARXIV React Three Dev skill", "Consolidated R3F, Three.js, shader, XR, asset, physics, ECS, and performance skill.", "text/markdown", contentIfExists("skills/r3arxiv-react-three-dev/SKILL.md"), 0.98),
    artifact("skills/r3arxiv-react-three-dev/references/review-rules.md", "R3F review rules", "Manual review checklist for R3F and Three.js code.", "text/markdown", contentIfExists("skills/r3arxiv-react-three-dev/references/review-rules.md"), 0.92),
    artifact("skills/r3arxiv-react-three-dev/references/implementation-workflows.md", "R3ARXIV implementation workflows", "Route-aware workflows for building 3D web apps.", "text/markdown", contentIfExists("skills/r3arxiv-react-three-dev/references/implementation-workflows.md"), 0.88),
    artifact("skills/r3arxiv-react-three-dev/references/mobile-games-ecs.md", "Mobile games and ECS patterns", "Mobile, game-loop, input, physics, and ECS guidance.", "text/markdown", contentIfExists("skills/r3arxiv-react-three-dev/references/mobile-games-ecs.md"), 0.84),
    artifact("skills/r3arxiv-react-three-dev/references/component-recipes.md", "R3F component recipes", "Reusable R3F component and asset pipeline recipes.", "text/markdown", contentIfExists("skills/r3arxiv-react-three-dev/references/component-recipes.md"), 0.84),
    artifact("skills/r3arxiv-react-three-dev/references/external-skill-sources.md", "External skill sources", "Upstream sources absorbed by the R3ARXIV React Three Dev skill.", "text/markdown", contentIfExists("skills/r3arxiv-react-three-dev/references/external-skill-sources.md"), 0.7),
    artifact("skills/r3arxiv-react-three-dev/scripts/lib/r3arxiv-core.mjs", "R3ARXIV toolkit core", "Shared catalog, route, chunk, and recommendation library.", "text/javascript", contentIfExists("skills/r3arxiv-react-three-dev/scripts/lib/r3arxiv-core.mjs"), 0.84),
    artifact("skills/r3arxiv-react-three-dev/scripts/r3arxiv-cli.mjs", "R3ARXIV CLI", "Executable route, resource, recommendation, chunk, prompt, audit, and MCP command surface.", "text/javascript", contentIfExists("skills/r3arxiv-react-three-dev/scripts/r3arxiv-cli.mjs"), 0.9),
    artifact("skills/r3arxiv-react-three-dev/scripts/r3arxiv-mcp-server.mjs", "R3ARXIV MCP server", "Read-only stdio MCP server exposing catalog tools, resources, and prompts.", "text/javascript", contentIfExists("skills/r3arxiv-react-three-dev/scripts/r3arxiv-mcp-server.mjs"), 0.9),
    artifact("skills/r3arxiv-react-three-dev/scripts/r3arxiv-query.mjs", "R3ARXIV query helper", "CLI helper for querying routes and catalog resources.", "text/javascript", contentIfExists("skills/r3arxiv-react-three-dev/scripts/r3arxiv-query.mjs"), 0.82),
    artifact("skills/r3arxiv-react-three-dev/scripts/r3f-audit.mjs", "R3F audit helper", "Static heuristic scan for common R3F anti-patterns.", "text/javascript", contentIfExists("skills/r3arxiv-react-three-dev/scripts/r3f-audit.mjs"), 0.82),
    artifact("llms.txt", "R3ARXIV LLM index", "Small Markdown table of contents for agents.", "text/markdown", llmsRoot, 0.95),
    artifact("llms-full.txt", "R3ARXIV full context", "Single-file Markdown context bundle.", "text/plain", llmsFull, 0.9),
    artifact("docs/agent/README.md", "Agent guide", "How to ingest and route the collection.", "text/markdown", guideMarkdown, 0.9),
    artifact("docs/agent/catalog.json", "Normalized catalog", "Full JSON catalog with taxonomy and routes.", "application/json", catalogJson, 0.95),
    artifact("docs/agent/resources.jsonl", "Resource JSONL", "One JSON object per resource.", "application/jsonl", resourcesJsonl, 0.86),
    artifact("docs/agent/chunks.jsonl", "Retrieval chunks", "Chunked JSONL for embedding or search.", "application/jsonl", chunksJsonl, 0.9),
    artifact("docs/agent/routes.json", "Task routes", "Intent-to-resource routing map.", "application/json", routesJson, 0.86),
    artifact("docs/agent/prompts.json", "Prompt templates", "Reusable prompts for agent platforms.", "application/json", promptsJson, 0.78),
    artifact("docs/agent/resources.md", "Resource Markdown", "Readable catalog of every resource.", "text/markdown", resourceMarkdown, 0.82)
  ];

  const mcpResourcesJson = `${JSON.stringify(
    buildMcpResources(artifactDescriptors, normalizedResources),
    null,
    2
  )}\n`;
  artifactDescriptors.push(
    artifact(
      "docs/agent/mcp-resources.json",
      "MCP resource descriptors",
      "MCP-shaped descriptors for a future read-only server.",
      "application/json",
      mcpResourcesJson,
      0.74
    )
  );

  const docsIndex = {
    schemaVersion,
    generatedAt,
    title,
    description,
    sourceFiles,
    counts: {
      resources: normalizedResources.length,
      channels: channels.length,
      routes: routes.length,
      chunks: chunksJsonl.trim().split("\n").length,
      artifacts: artifactDescriptors.length
    },
    artifacts: artifactDescriptors,
    routeIds: routes.map((route) => route.id),
    resourceIndex: normalizedResources.map((resource) => ({
      id: resource.id,
      title: resource.title,
      category: resource.category,
      kind: resource.kind,
      status: resource.status,
      priority: resource.priority,
      tags: resource.tags,
      url: resource.url,
      github: resource.github,
      image: resource.image,
      routes: resource.taskHints,
      contentSha256: resource.retrieval.contentSha256
    }))
  };
  const docsIndexJson = `${JSON.stringify(docsIndex, null, 2)}\n`;

  await writeFile(path.join(rootDir, "llms.txt"), llmsRoot);
  await writeFile(path.join(rootDir, "llms-full.txt"), llmsFull);
  await writeFile(path.join(rootDir, "public", "llms.txt"), llmsRoot);
  await writeFile(path.join(rootDir, "public", "llms-full.txt"), llmsFull);

  await writeBoth("docs/agent/README.md", guideMarkdown);
  await writeBoth("docs/agent/resources.md", resourceMarkdown);
  await writeBoth("docs/agent/catalog.json", catalogJson);
  await writeBoth("docs/agent/resources.jsonl", resourcesJsonl);
  await writeBoth("docs/agent/chunks.jsonl", chunksJsonl);
  await writeBoth("docs/agent/routes.json", routesJson);
  await writeBoth("docs/agent/prompts.json", promptsJson);
  await writeBoth("docs/agent/mcp-resources.json", mcpResourcesJson);
  await writeBoth("docs/agent/docs.index.json", docsIndexJson);

  console.log(
    JSON.stringify(
      {
        generatedAt,
        resources: normalizedResources.length,
        routes: routes.length,
        chunks: docsIndex.counts.chunks,
        artifacts: docsIndex.counts.artifacts,
        outputs: [
          "AGENTS.md",
          "CLAUDE.md",
          "llms.txt",
          "llms-full.txt",
          "docs/agent/*",
          "skills/r3arxiv-react-three-dev/*",
          "public/agent/*",
          "public/docs/agent/*",
          "public/skills/r3arxiv-react-three-dev/*",
          "public/llms.txt",
          "public/llms-full.txt"
        ]
      },
      null,
      2
    )
  );
}

await main();
