---
name: r3arxiv-react-three-dev
description: Plan, build, review, and debug React Three Fiber, Three.js, WebGL/WebGPU, shader, XR, asset-pipeline, physics, game, and creative 3D web app work using the R3ARXIV agent catalog plus absorbed R3F/Three.js skill patterns. Use when the task mentions @react-three/fiber, R3F, Drei, Three.js, WebGL, WebGPU, GLSL, shaders, glTF/GLB, Rapier, WebXR, 3D assets, browser games, 3D portfolios, product configurators, or performance/debugging of 3D scenes.
---

# R3ARXIV React Three Dev

Use this skill to act like a senior React Three / Three.js engineer with a live resource map. It combines R3ARXIV's catalog/routes with practical patterns learned from public R3F, Three.js, ECS/mobile, and WebGL skill packs. It is not only Markdown: it includes CLI tools, an audit helper, and a read-only stdio MCP server.

## Start Here

1. Locate the R3ARXIV pack from the current project root:
   - `docs/agent/catalog.json`
   - `docs/agent/routes.json`
   - `docs/agent/chunks.jsonl`
   - `llms.txt`
2. Use `scripts/r3arxiv-cli.mjs` or `scripts/r3arxiv-query.mjs` to select resources by route, tag, kind, status, or search text.
3. For implementation/review, load only the relevant reference:
   - `references/review-rules.md`: R3F and Three.js correctness/performance checklist.
   - `references/implementation-workflows.md`: task routing and build workflows.
   - `references/mobile-games-ecs.md`: mobile, game, ECS, input, and physics patterns.
   - `references/component-recipes.md`: reusable R3F component recipes.
   - `references/external-skill-sources.md`: upstream skill sources and attribution.

## Workflow

### Plan

- Classify the task into one or more R3ARXIV routes: `start-r3f-app`, `asset-pipeline`, `shader-effects`, `performance-debug`, `xr-ar-vr`, `physics-games`, `visual-inspiration`, `data-maps-ai`, `learning-theory`, or `web-experiences`.
- Prefer canonical/production catalog entries for implementation choices; use creative/showcase entries for visual direction.
- Return resource IDs and source URLs when making recommendations.

### Build

- Use R3F for React-owned scene composition; use raw Three.js where imperative control is simpler or isolated.
- Keep render-loop data in refs, external stores, or Three.js objects. Do not route per-frame values through React state.
- Use Drei for common primitives before writing wrappers: controls, loaders, environment, bounds, text, Html, instances, helpers.
- Treat asset loading, compression, and validation as part of the implementation, not cleanup.

### Review

- Run `scripts/r3f-audit.mjs <paths>` for a quick static anti-pattern pass.
- Then manually apply `references/review-rules.md`; the script is only a heuristic.
- Check runtime behavior with screenshots or Playwright when the scene, canvas, or visual output changed.

### Debug

- First split failures into: React render churn, render-loop work, GPU/draw-call pressure, asset loading, shader/material issue, physics/input issue, browser/platform issue, or layout/canvas sizing.
- Use `performance-debug` resources from `routes.json`.
- If visuals are blank, inspect canvas dimensions, WebGL context errors, asset network failures, Suspense fallbacks, and camera/object placement before changing architecture.

## Utilities

```bash
# Full command surface
node skills/r3arxiv-react-three-dev/scripts/r3arxiv-cli.mjs routes
node skills/r3arxiv-react-three-dev/scripts/r3arxiv-cli.mjs recommend "build a WebXR product configurator"
node skills/r3arxiv-react-three-dev/scripts/r3arxiv-cli.mjs resource r3f
node skills/r3arxiv-react-three-dev/scripts/r3arxiv-cli.mjs chunks --search "shader material" --limit 5

# Show all routes
node skills/r3arxiv-react-three-dev/scripts/r3arxiv-query.mjs --routes

# Query resources for a workflow
node skills/r3arxiv-react-three-dev/scripts/r3arxiv-query.mjs --route shader-effects --limit 12

# Search catalog text
node skills/r3arxiv-react-three-dev/scripts/r3arxiv-query.mjs --search "rapier character controller"

# Static R3F review heuristics
node skills/r3arxiv-react-three-dev/scripts/r3f-audit.mjs src

# Read-only MCP server over catalog/routes/resources/prompts
node skills/r3arxiv-react-three-dev/scripts/r3arxiv-mcp-server.mjs
```

Both scripts search upward from the current directory for `docs/agent/catalog.json`. Set `R3ARXIV_ROOT=/path/to/r3arxiv-react3-archive` if running outside the repo.

## MCP Tools

The MCP server exposes:

- `r3arxiv_search`: search/filter resources.
- `r3arxiv_route`: read a route plus resources.
- `r3arxiv_resource`: read a single resource.
- `r3arxiv_recommend`: get route/resource recommendations for a task.
- `r3arxiv_chunks`: read retrieval chunks.

It also exposes resources for generated artifacts, every route, every catalog resource, and the generated prompt templates.

## Non-Negotiables

- Never call React `setState` from `useFrame`.
- Always use `delta` or elapsed time for animation.
- Avoid allocating vectors, arrays, materials, geometries, or loaders inside hot render paths.
- Use stable keys and stable props for dynamic object lists.
- Prefer instancing, merging, LOD, and texture compression over brute force object counts.
- Use `Suspense`, preloading, error boundaries, and validation for models/textures.
- Dispose manually only when R3F auto-dispose is disabled or objects are external/shared.
- Verify visual output after meaningful scene changes.
