# R3ARXIV Agent Pack

> Agent-ready archive of React Three Fiber, Three.js, WebGL, WebGPU, XR, asset-pipeline, shader, game, and creative-web resources.

This pack is built for coding agents that need to plan, build, debug, or research 3D web applications without scraping the visual UI.

## Entry Points

- `llms.txt`: Small, standards-shaped table of contents for agents.
- `llms-full.txt`: Single-file Markdown context pack.
- `docs/agent/catalog.json`: Full normalized resource index.
- `docs/agent/chunks.jsonl`: Retrieval-ready JSON Lines chunks.
- `docs/agent/routes.json`: Task-intent routing for common 3D web app jobs.
- `docs/agent/prompts.json`: Reusable prompts for agentic platforms and MCP prompt servers.
- `skills/r3arxiv-react-three-dev/SKILL.md`: Consolidated React Three / Three.js coding-agent skill.
- `public/agent/*`: Same machine-readable files served by the Vite app.

## How Agents Should Use It

1. Read `AGENTS.md` for repo commands and guardrails.
2. Read `llms.txt` to choose the smallest relevant artifact.
3. Use `routes.json` when the user describes a task rather than naming a resource.
4. Use `catalog.json` for filtering by category, kind, status, tag, host, or source URL.
5. Use `chunks.jsonl` for embedding, vector search, or line-by-line retrieval.
6. Use `skills/r3arxiv-react-three-dev` for React Three / Three.js implementation, review, and debugging tasks.
7. Use screenshot paths only as visual references; never treat previews as source-code documentation.

## Catalog Shape

Every normalized resource includes `id`, `title`, `url`, optional `github`, `category`, `channelId`, `field`, `kind`, `status`, `description`, `bestFor`, `tags`, a stable local `image`, `host`, `priority`, `taskHints`, and retrieval metadata.

## Channel Counts

- Foundations: 26
- Ecosystem Libraries: 41
- Asset Pipeline: 110
- Interaction & UI: 16
- Gaming & Physics: 67
- Creative Coding & Shaders: 63
- XR, AR & VR: 41
- Web Experiences: 28
- Performance & Debug: 15
- Learning & Theory: 55
- Showcases & Inspiration: 62
- Data, Maps & AI: 43

## Kind Counts

- library: 208
- docs: 18
- showcase: 77
- tool: 116
- community: 14
- course: 36
- asset: 56
- reference: 30
- starter: 4
- article: 8

## Task Routes

### Start or repair a React Three Fiber app

Use when an agent needs the canonical renderer stack, project setup, Drei helpers, state, controls, and first production defaults.

- Route ID: `start-r3f-app`
- Query hints: `r3f`, `react three fiber`, `canvas`, `starter`, `vite`
- Primary resources: `r3f`, `r3f-docs`, `threejs`, `threejs-docs`, `vite`, `typescript`, `gltfjsx`, `leva`, `zustand`, `maath`, `react-use-measure`

### Choose and optimize a 3D asset pipeline

Use for GLB/glTF conversion, compression, validation, free models, materials, HDRIs, avatars, scans, and production asset hygiene.

- Route ID: `asset-pipeline`
- Query hints: `gltf`, `glb`, `assets`, `models`, `compression`, `textures`
- Primary resources: `gltfjsx`, `gltf-transform`, `gltf-validator`, `gltf-report`, `gltfpack`, `meshoptimizer`, `draco`, `ktx`, `blender`, `blender-gltf-exporter`, `mixamo-to-gltf`, `polyhaven`, `ambientcg`, `sketchfab`, `fab`

### Build shaders, materials, and post effects

Use when the task mentions GLSL, WGSL, custom materials, transitions, distortion, procedural effects, postprocessing, or visual art direction.

- Route ID: `shader-effects`
- Query hints: `shader`, `glsl`, `wgsl`, `material`, `postprocessing`, `effect`
- Primary resources: `book-of-shaders`, `shadertoy`, `lygia`, `hg-sdf`, `glsl-noise`, `glsl-easings`, `glsl-aastep`, `shader-park`, `lamina`, `shader-composer`, `react-shader-fiber`, `postprocessing`, `n8ao`, `three-custom-shader-material`

### Debug performance, loading, and rendering limits

Use for frame drops, GPU limits, draw-call pressure, workers, BVH raycasting, bundle size, screenshots that fail to load, and diagnostics.

- Route ID: `performance-debug`
- Query hints: `performance`, `debug`, `fps`, `profiling`, `worker`, `bvh`
- Primary resources: `r3f-perf`, `drei-performance-monitor`, `stats-gl`, `stats-js`, `detect-gpu`, `chrome-performance`, `webgl-report`, `three-mesh-bvh`, `react-three-offscreen`, `meshoptimizer`, `vite-plugin-compression`

### Plan WebXR, AR, VR, and spatial input

Use for immersive web apps, headset sessions, hit testing, hand input, layers, anchors, DOM overlays, avatars, and WebXR standards.

- Route ID: `xr-ar-vr`
- Query hints: `webxr`, `ar`, `vr`, `headset`, `hand tracking`, `hit test`
- Primary resources: `immersive-web`, `mdn-webxr`, `three-webxr`, `webxr-samples`, `webxr-spec`, `webxr-input-profiles`, `webxr-hit-test`, `webxr-hand-input`, `webxr-layers`, `meta-presence-platform`, `zappar-react-three-fiber`, `coconut-xr-koestlich`

### Build game loops, physics, navigation, and multiplayer

Use for character controllers, collision, ECS, pathfinding, behavior trees, realtime multiplayer, and web game engines.

- Route ID: `physics-games`
- Query hints: `physics`, `game`, `rapier`, `character`, `ecs`, `multiplayer`
- Primary resources: `react-three-rapier`, `rapier`, `cannon-es`, `react-three-cannon`, `ecctrl`, `miniplex`, `bitecs`, `yuka`, `recast-navigation`, `three-pathfinding`, `navmesh`, `colyseus`, `geckos`, `trystero`, `phaser`, `excaliburjs`, `kaboom`

### Find visual references, studios, and artists

Use when an agent needs taste, references, examples to imitate structurally, or links to standout creative technologists and studios.

- Route ID: `visual-inspiration`
- Query hints: `inspiration`, `showcase`, `artist`, `studio`, `creative coding`
- Primary resources: `bruno-simon`, `yuri-artiukh`, `aristide-benoist`, `raven-kwok`, `patricio-gonzalez-vivo`, `matt-deslauriers`, `nicky-case`, `active-theory`, `resn`, `hello-monday`, `lusion`, `makemepulse`, `unit9`, `the-fwa`

### Use maps, globes, splats, scans, and generated 3D assets

Use for geographic visualization, point clouds, 3D tiles, Gaussian splats, AI-generated models, scans, and spatial data.

- Route ID: `data-maps-ai`
- Query hints: `maps`, `globe`, `splats`, `3d tiles`, `ai assets`, `scans`
- Primary resources: `react-globe-gl`, `r3f-globe`, `three-globe`, `deck-gl`, `kepler-gl`, `maplibre-gl-js`, `cesiumjs`, `3d-tiles-renderer`, `google-scanned-objects`, `objaverse-xl`, `luma-genie`, `tripo-ai`, `meshy`, `gaussian-splats-3d`, `sparkjs`, `supersplat`, `nerfstudio`

### Learn graphics fundamentals and durable theory

Use when an agent should explain the underlying math, WebGL/WebGPU concepts, rendering algorithms, or shader fundamentals before coding.

- Route ID: `learning-theory`
- Query hints: `learning`, `graphics`, `math`, `webgl`, `webgpu`, `rendering`
- Primary resources: `discover-three`, `threejs-fundamentals`, `webgl-fundamentals`, `webgl2-fundamentals`, `webgpu-fundamentals`, `math-for-3d`, `book-of-shaders`, `graphics-compendium`, `real-time-rendering`, `gpu-gems`, `raytracing-weekend`, `pbr-book`, `scratchapixel`, `learnopengl`, `nature-of-code`

### Build editorial, portfolio, and scroll-driven 3D websites

Use for visual websites where R3F is combined with animation systems, scroll orchestration, page frameworks, or no-code 3D tools.

- Route ID: `web-experiences`
- Query hints: `portfolio`, `website`, `scroll`, `animation`, `editorial`, `spline`
- Primary resources: `r3f-portfolio-starter`, `react-three-next`, `r3f-scroll-rig`, `theatre`, `gsap`, `gsap-scrolltrigger`, `lenis`, `locomotive-scroll`, `framer-motion`, `react-spring`, `unicorn-studio`, `spline`, `dora`
