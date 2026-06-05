import type { Resource } from "./resources.ts";

export const resourceAdditions: Resource[] = [
  {
    id: "three-manual",
    title: "Three.js Manual",
    url: "https://threejs.org/manual/",
    github: "https://github.com/mrdoob/three.js",
    category: "Foundations",
    field: "Engine learning",
    kind: "docs",
    status: "core",
    description:
      "Narrative manual for cameras, lights, textures, loading, render targets, optimization, and WebXR in Three.js.",
    bestFor: "Turning R3F JSX back into engine concepts when something needs lower-level debugging.",
    tags: ["three.js", "manual", "learning", "engine"],
    color: "#e5e5e5"
  },
  {
    id: "mdn-webgl",
    title: "MDN WebGL",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API",
    category: "Foundations",
    field: "Browser API",
    kind: "docs",
    status: "core",
    description:
      "Browser-level reference for WebGL concepts, context creation, extensions, textures, buffers, and compatibility.",
    bestFor: "Understanding platform constraints underneath Three.js and R3F.",
    tags: ["webgl", "mdn", "browser", "reference"],
    color: "#d7e3fc"
  },
  {
    id: "mdn-webgpu",
    title: "MDN WebGPU",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API",
    category: "Foundations",
    field: "Browser API",
    kind: "docs",
    status: "learning",
    description:
      "Reference for the next browser graphics API, useful as Three.js and R3F workflows move toward WebGPU renderers.",
    bestFor: "Learning the vocabulary around adapters, devices, pipelines, buffers, and compute.",
    tags: ["webgpu", "browser", "gpu", "future"],
    color: "#cce3de"
  },
  {
    id: "webgpu-fundamentals",
    title: "WebGPU Fundamentals",
    url: "https://webgpufundamentals.org",
    github: "https://github.com/gfxfundamentals/webgpufundamentals",
    category: "Foundations",
    field: "Graphics learning",
    kind: "course",
    status: "learning",
    description:
      "Practical WebGPU lessons from the same lineage as WebGL Fundamentals, covering modern GPU programming in browsers.",
    bestFor: "Preparing for custom compute, storage buffers, and post-WebGL rendering patterns.",
    tags: ["webgpu", "gpu", "learning", "graphics"],
    color: "#b8f2e6"
  },
  {
    id: "khronos-gltf",
    title: "Khronos glTF",
    url: "https://www.khronos.org/gltf/",
    github: "https://github.com/KhronosGroup/glTF",
    category: "Foundations",
    field: "3D asset standard",
    kind: "reference",
    status: "core",
    description:
      "The official home of glTF, the runtime 3D asset format most R3F model workflows depend on.",
    bestFor: "Understanding what exporters, loaders, validators, compression tools, and model viewers agree on.",
    tags: ["gltf", "khronos", "standard", "assets"],
    color: "#fefae0"
  },
  {
    id: "webgl2-fundamentals",
    title: "WebGL2 Fundamentals",
    url: "https://webgl2fundamentals.org",
    github: "https://github.com/gfxfundamentals/webgl2-fundamentals",
    category: "Foundations",
    field: "Graphics learning",
    kind: "course",
    status: "learning",
    description:
      "A focused companion to WebGL Fundamentals for the WebGL2 features that modern Three.js scenes often rely on.",
    bestFor: "Learning instancing, transform feedback, 3D textures, and render target techniques.",
    tags: ["webgl2", "gpu", "learning", "shaders"],
    color: "#ffddd2"
  },
  {
    id: "react-compiler",
    title: "React Compiler Docs",
    url: "https://react.dev/learn/react-compiler",
    github: "https://github.com/facebook/react",
    category: "Foundations",
    field: "React performance",
    kind: "docs",
    status: "learning",
    description:
      "Official React guidance for compiler-era React, useful when heavy canvas pages also contain complex DOM interfaces.",
    bestFor: "Keeping React app structure modern around an R3F canvas without accidental render churn.",
    tags: ["react", "compiler", "performance", "docs"],
    color: "#61dafb"
  },
  {
    id: "tanstack-query",
    title: "TanStack Query",
    url: "https://tanstack.com/query/latest",
    github: "https://github.com/TanStack/query",
    category: "Foundations",
    field: "Async state",
    kind: "library",
    status: "production",
    description:
      "Server-state toolkit for resource libraries, asset browsers, multiplayer metadata, and 3D apps backed by APIs.",
    bestFor: "Fetching catalogs, configuration, scores, geodata, and user-generated assets around a scene.",
    tags: ["react", "async", "data", "state"],
    color: "#ffd6a5"
  },
  {
    id: "three-stdlib",
    title: "three-stdlib",
    url: "https://github.com/pmndrs/three-stdlib",
    github: "https://github.com/pmndrs/three-stdlib",
    category: "Ecosystem Libraries",
    field: "Three.js addons",
    kind: "library",
    status: "production",
    description:
      "Standalone, tree-shakeable exports of Three.js examples utilities, maintained for modern npm workflows.",
    bestFor: "Using controls, loaders, modifiers, and utilities without relying directly on examples paths.",
    tags: ["three.js", "stdlib", "loaders", "controls"],
    color: "#d9ed92"
  },
  {
    id: "camera-controls",
    title: "camera-controls",
    url: "https://github.com/yomotsu/camera-controls",
    github: "https://github.com/yomotsu/camera-controls",
    category: "Ecosystem Libraries",
    field: "Camera control",
    kind: "library",
    status: "production",
    description:
      "Smooth, production-grade camera controller for Three.js, wrapped by Drei and widely used for product viewers.",
    bestFor: "Orbit-style camera motion with damping, bounds, fit-to-box, and polished transitions.",
    tags: ["camera", "controls", "three.js", "drei"],
    color: "#caf0f8"
  },
  {
    id: "react-three-test-renderer",
    title: "React Three Test Renderer",
    url: "https://github.com/pmndrs/react-three-fiber/tree/master/packages/test-renderer",
    github: "https://github.com/pmndrs/react-three-fiber/tree/master/packages/test-renderer",
    category: "Ecosystem Libraries",
    field: "Testing",
    kind: "library",
    status: "production",
    description:
      "Test renderer for React Three Fiber scenes that lets unit tests inspect the rendered Three.js object graph.",
    bestFor: "Testing scene composition, props, handlers, and state-driven object creation in Node.",
    tags: ["testing", "r3f", "react", "pmndrs"],
    color: "#f4f0e8"
  },
  {
    id: "three-custom-shader-material",
    title: "three-custom-shader-material",
    url: "https://github.com/FarazzShaikh/THREE-CustomShaderMaterial",
    github: "https://github.com/FarazzShaikh/THREE-CustomShaderMaterial",
    category: "Ecosystem Libraries",
    field: "Shader materials",
    kind: "library",
    status: "production",
    description:
      "Extend built-in Three.js materials with custom shader code while preserving lighting, maps, shadows, and material features.",
    bestFor: "Adding deformation and stylized effects without rewriting MeshStandardMaterial from scratch.",
    tags: ["shader", "materials", "three.js", "lighting"],
    color: "#ffc8dd"
  },
  {
    id: "three-nebula",
    title: "three-nebula",
    url: "https://github.com/creativelifeform/three-nebula",
    github: "https://github.com/creativelifeform/three-nebula",
    category: "Ecosystem Libraries",
    field: "Particles",
    kind: "library",
    status: "production",
    description:
      "Particle engine for Three.js with emitters, initializers, behaviours, renderers, and zone-based spawning.",
    bestFor: "Fire, dust, sparks, magic effects, and environmental motion in R3F scenes.",
    tags: ["particles", "effects", "three.js", "games"],
    color: "#ffafcc"
  },
  {
    id: "three.quarks",
    title: "three.quarks",
    url: "https://github.com/Alchemist0823/three.quarks",
    github: "https://github.com/Alchemist0823/three.quarks",
    category: "Ecosystem Libraries",
    field: "Particles",
    kind: "library",
    status: "production",
    description:
      "GPU-friendly particle system for Three.js with editor tooling and runtime effects for games and experiences.",
    bestFor: "Richer particle effects than hand-authored Points systems can comfortably support.",
    tags: ["particles", "vfx", "games", "three.js"],
    color: "#ffbe0b"
  },
  {
    id: "three-bmfont-text",
    title: "three-bmfont-text",
    url: "https://github.com/Jam3/three-bmfont-text",
    github: "https://github.com/Jam3/three-bmfont-text",
    category: "Ecosystem Libraries",
    field: "Typography",
    kind: "library",
    status: "production",
    description:
      "Bitmap font geometry for Three.js, still useful for stylized text, older projects, and shader-driven typography.",
    bestFor: "Text meshes where texture atlas control and shader effects matter.",
    tags: ["text", "typography", "bmfont", "three.js"],
    color: "#e0fbfc"
  },
  {
    id: "three-instanced-uniforms-mesh",
    title: "Instanced Uniforms Mesh",
    url: "https://github.com/protectwise/troika/tree/main/packages/three-instanced-uniforms-mesh",
    github: "https://github.com/protectwise/troika/tree/main/packages/three-instanced-uniforms-mesh",
    category: "Ecosystem Libraries",
    field: "Instancing",
    kind: "library",
    status: "production",
    description:
      "Adds per-instance uniform-like attributes to InstancedMesh workflows for richer variation at scale.",
    bestFor: "Crowds, forests, particles, and product grids with per-instance material differences.",
    tags: ["instancing", "performance", "materials", "three.js"],
    color: "#b7e4c7"
  },
  {
    id: "gltf-sample-assets",
    title: "glTF Sample Assets",
    url: "https://github.com/KhronosGroup/glTF-Sample-Assets",
    github: "https://github.com/KhronosGroup/glTF-Sample-Assets",
    category: "Asset Pipeline",
    field: "Reference models",
    kind: "asset",
    status: "core",
    description:
      "Official sample glTF assets used for testing loaders, materials, animation, extensions, and viewer behavior.",
    bestFor: "Checking whether a rendering issue is your model, your exporter, or your scene setup.",
    tags: ["gltf", "samples", "testing", "khronos"],
    color: "#fefae0"
  },
  {
    id: "gltf-viewer",
    title: "Don McCurdy glTF Viewer",
    url: "https://gltf-viewer.donmccurdy.com",
    github: "https://github.com/donmccurdy/three-gltf-viewer",
    category: "Asset Pipeline",
    field: "Model inspection",
    kind: "tool",
    status: "production",
    description:
      "Fast Three.js-based glTF viewer for inspecting lighting, animations, materials, wireframes, skeletons, and variants.",
    bestFor: "Comparing how a model looks in a known-good viewer before debugging R3F code.",
    tags: ["gltf", "viewer", "materials", "animation"],
    color: "#e0fbfc"
  },
  {
    id: "gltfpack",
    title: "gltfpack",
    url: "https://meshoptimizer.org/gltf/",
    github: "https://github.com/zeux/meshoptimizer/tree/master/gltf",
    category: "Asset Pipeline",
    field: "Model optimization",
    kind: "tool",
    status: "production",
    description:
      "glTF optimizer from the meshoptimizer project for compression, simplification, quantization, and texture workflows.",
    bestFor: "Making models web-sized before they reach a Vite build or CDN.",
    tags: ["gltf", "optimization", "meshopt", "compression"],
    color: "#b0c4b1"
  },
  {
    id: "ambientcg",
    title: "ambientCG",
    url: "https://ambientcg.com",
    category: "Asset Pipeline",
    field: "PBR textures",
    kind: "asset",
    status: "production",
    description:
      "Large library of public-domain PBR materials, HDRIs, and models for physically based scenes.",
    bestFor: "Finding legal, tileable material maps for product shots and environment studies.",
    tags: ["textures", "pbr", "cc0", "materials"],
    color: "#d4a373"
  },
  {
    id: "matcaps",
    title: "Matcaps",
    url: "https://github.com/nidorx/matcaps",
    github: "https://github.com/nidorx/matcaps",
    category: "Asset Pipeline",
    field: "Material assets",
    kind: "asset",
    status: "creative",
    description:
      "Open collection of matcap textures for stylized lighting and fast material exploration.",
    bestFor: "Quick sculptural looks, prototype materials, and Drei MeshMatcapMaterial workflows.",
    tags: ["matcap", "materials", "textures", "stylized"],
    color: "#ffc8dd"
  },
  {
    id: "kenney-assets",
    title: "Kenney Assets",
    url: "https://kenney.nl/assets",
    category: "Asset Pipeline",
    field: "Game assets",
    kind: "asset",
    status: "production",
    description:
      "Huge library of clean game-ready 2D and 3D assets with permissive licensing and consistent style.",
    bestFor: "Rapid R3F game prototyping without waiting on custom art.",
    tags: ["game assets", "models", "prototype", "low poly"],
    color: "#ffd166"
  },
  {
    id: "quaternius",
    title: "Quaternius",
    url: "https://quaternius.com",
    category: "Asset Pipeline",
    field: "Game models",
    kind: "asset",
    status: "production",
    description:
      "Free stylized 3D model packs for games, characters, props, environments, and fantasy worlds.",
    bestFor: "Building cohesive R3F game scenes quickly with low-poly assets.",
    tags: ["models", "game assets", "characters", "low poly"],
    color: "#caffbf"
  },
  {
    id: "opengameart",
    title: "OpenGameArt",
    url: "https://opengameart.org",
    category: "Asset Pipeline",
    field: "Open game assets",
    kind: "asset",
    status: "production",
    description:
      "Community repository for game art, sound, textures, models, sprites, and music across multiple licenses.",
    bestFor: "Finding placeholder or production-friendly game assets while watching license details.",
    tags: ["game assets", "audio", "models", "textures"],
    color: "#fefae0"
  },
  {
    id: "fab",
    title: "Fab",
    url: "https://www.fab.com",
    category: "Asset Pipeline",
    field: "Marketplace",
    kind: "asset",
    status: "production",
    description:
      "Epic's marketplace for 3D models, materials, environments, plugins, and game-ready art.",
    bestFor: "Finding higher-fidelity assets that may need conversion and optimization for web delivery.",
    tags: ["marketplace", "models", "materials", "assets"],
    color: "#e5e5e5"
  },
  {
    id: "polycam",
    title: "Polycam",
    url: "https://poly.cam",
    category: "Asset Pipeline",
    field: "3D scanning",
    kind: "tool",
    status: "production",
    description:
      "3D capture app for LiDAR, photogrammetry, Gaussian splats, and model export workflows.",
    bestFor: "Capturing real-world objects and spaces for later cleanup and R3F presentation.",
    tags: ["scan", "photogrammetry", "splats", "capture"],
    color: "#a2d2ff"
  },
  {
    id: "meshroom",
    title: "Meshroom",
    url: "https://alicevision.org/#meshroom",
    github: "https://github.com/alicevision/Meshroom",
    category: "Asset Pipeline",
    field: "Photogrammetry",
    kind: "tool",
    status: "production",
    description:
      "Open-source photogrammetry software for reconstructing textured meshes from image sets.",
    bestFor: "Producing scan assets that can be retopologized, compressed, and displayed in R3F.",
    tags: ["photogrammetry", "scan", "models", "open source"],
    color: "#d7e3fc"
  },
  {
    id: "meshlab",
    title: "MeshLab",
    url: "https://www.meshlab.net",
    github: "https://github.com/cnr-isti-vclab/meshlab",
    category: "Asset Pipeline",
    field: "Mesh processing",
    kind: "tool",
    status: "production",
    description:
      "Open-source system for processing, cleaning, decimating, inspecting, and converting 3D triangular meshes.",
    bestFor: "Repairing scanned or marketplace meshes before web optimization.",
    tags: ["mesh", "repair", "decimation", "models"],
    color: "#dee2e6"
  },
  {
    id: "instant-meshes",
    title: "Instant Meshes",
    url: "https://github.com/wjakob/instant-meshes",
    github: "https://github.com/wjakob/instant-meshes",
    category: "Asset Pipeline",
    field: "Retopology",
    kind: "tool",
    status: "production",
    description:
      "Automatic field-aligned mesh retopology tool for turning messy scans into cleaner geometry.",
    bestFor: "Creating lighter, more usable assets from dense scan meshes.",
    tags: ["retopology", "mesh", "optimization", "scan"],
    color: "#ccd5ae"
  },
  {
    id: "material-maker",
    title: "Material Maker",
    url: "https://www.materialmaker.org",
    github: "https://github.com/RodZill4/material-maker",
    category: "Asset Pipeline",
    field: "Procedural materials",
    kind: "tool",
    status: "creative",
    description:
      "Open-source procedural PBR material authoring tool inspired by node-based texture workflows.",
    bestFor: "Creating custom tileable textures for stylized and physically based R3F scenes.",
    tags: ["materials", "textures", "procedural", "pbr"],
    color: "#f1c0e8"
  },
  {
    id: "armorpaint",
    title: "ArmorPaint",
    url: "https://armorpaint.org",
    github: "https://github.com/armory3d/armorpaint",
    category: "Asset Pipeline",
    field: "Texture painting",
    kind: "tool",
    status: "production",
    description:
      "Standalone physically based texture painting tool for authoring maps on 3D models.",
    bestFor: "Customizing GLTF assets before export and web compression.",
    tags: ["texture painting", "materials", "pbr", "models"],
    color: "#ffddd2"
  },
  {
    id: "cascadeur",
    title: "Cascadeur",
    url: "https://cascadeur.com",
    category: "Asset Pipeline",
    field: "Character animation",
    kind: "tool",
    status: "production",
    description:
      "Physics-assisted character animation software for creating and refining humanoid movement.",
    bestFor: "Making character animation feel less generic before exporting to GLTF pipelines.",
    tags: ["animation", "characters", "rigging", "game assets"],
    color: "#ffcad4"
  },
  {
    id: "rokoko",
    title: "Rokoko",
    url: "https://www.rokoko.com",
    category: "Asset Pipeline",
    field: "Motion capture",
    kind: "tool",
    status: "production",
    description:
      "Motion capture tools and marketplace for character animation pipelines.",
    bestFor: "Bringing believable body movement into R3F avatar and game workflows.",
    tags: ["mocap", "animation", "characters", "avatars"],
    color: "#bde0fe"
  },
  {
    id: "use-gesture",
    title: "@use-gesture/react",
    url: "https://use-gesture.netlify.app",
    github: "https://github.com/pmndrs/use-gesture",
    category: "Interaction & UI",
    field: "Gestures",
    kind: "library",
    status: "production",
    description:
      "Gesture primitives for drag, pinch, wheel, scroll, hover, and move interactions that pair well with R3F and React Spring.",
    bestFor: "Touch-friendly model viewers, sliders, map-like controls, and custom canvas tools.",
    tags: ["gestures", "touch", "interaction", "pmndrs"],
    color: "#caffbf"
  },
  {
    id: "react-use-measure",
    title: "react-use-measure",
    url: "https://github.com/pmndrs/react-use-measure",
    github: "https://github.com/pmndrs/react-use-measure",
    category: "Interaction & UI",
    field: "Layout measurement",
    kind: "library",
    status: "production",
    description:
      "ResizeObserver hook from pmndrs that helps coordinate DOM layout with responsive canvas and view calculations.",
    bestFor: "Hybrid DOM/WebGL layouts, galleries, previews, and scroll-linked R3F sections.",
    tags: ["layout", "measure", "react", "dom"],
    color: "#d0f4de"
  },
  {
    id: "tunnel-rat",
    title: "tunnel-rat",
    url: "https://github.com/pmndrs/tunnel-rat",
    github: "https://github.com/pmndrs/tunnel-rat",
    category: "Interaction & UI",
    field: "Portals",
    kind: "library",
    status: "production",
    description:
      "Small portal/tunnel utility for transporting React children between tree locations, useful in canvas and DOM composition.",
    bestFor: "Complex layout systems where scene content and app chrome need clean ownership boundaries.",
    tags: ["portals", "react", "pmndrs", "composition"],
    color: "#faedcd"
  },
  {
    id: "xstate",
    title: "XState",
    url: "https://stately.ai/docs",
    github: "https://github.com/statelyai/xstate",
    category: "Interaction & UI",
    field: "State machines",
    kind: "library",
    status: "production",
    description:
      "State machine and actor model library for explicit interaction flows, game states, editors, and XR modes.",
    bestFor: "Preventing complex R3F tools from becoming boolean-state soup.",
    tags: ["state", "machines", "interaction", "tools"],
    color: "#ced4da"
  },
  {
    id: "lil-gui",
    title: "lil-gui",
    url: "https://lil-gui.georgealways.com",
    github: "https://github.com/georgealways/lil-gui",
    category: "Interaction & UI",
    field: "Controls",
    kind: "tool",
    status: "production",
    description:
      "Tiny controller panel descended from dat.GUI, still common in Three.js and shader experiments.",
    bestFor: "Framework-light parameter tuning when Leva is too React-specific.",
    tags: ["controls", "debug", "parameters", "three.js"],
    color: "#f1f3f5"
  },
  {
    id: "floating-ui",
    title: "Floating UI",
    url: "https://floating-ui.com",
    github: "https://github.com/floating-ui/floating-ui",
    category: "Interaction & UI",
    field: "DOM overlays",
    kind: "library",
    status: "production",
    description:
      "Positioning primitives for popovers, tooltips, menus, and inspectors around canvas-heavy interfaces.",
    bestFor: "Polished DOM overlays anchored to controls, thumbnails, and scene metadata.",
    tags: ["ui", "popovers", "tooltips", "dom"],
    color: "#e0fbfc"
  },
  {
    id: "radix-ui",
    title: "Radix UI",
    url: "https://www.radix-ui.com/primitives",
    github: "https://github.com/radix-ui/primitives",
    category: "Interaction & UI",
    field: "Accessible UI",
    kind: "library",
    status: "production",
    description:
      "Accessible React primitives for the non-canvas controls surrounding serious 3D apps and editor interfaces.",
    bestFor: "Menus, dialogs, popovers, tabs, sliders, and toggles around R3F without rebuilding accessibility.",
    tags: ["ui", "accessibility", "react", "controls"],
    color: "#ffffff"
  },
  {
    id: "r3f-virtual-joystick",
    title: "nipplejs",
    url: "https://yoannmoi.net/nipplejs/",
    github: "https://github.com/yoannmoinet/nipplejs",
    category: "Gaming & Physics",
    field: "Touch controls",
    kind: "library",
    status: "production",
    description:
      "Virtual joystick library often used for browser games and mobile character controllers.",
    bestFor: "Mobile R3F games and avatar demos that need touch movement controls.",
    tags: ["mobile", "joystick", "controls", "games"],
    color: "#bde0fe"
  },
  {
    id: "pathfinding-js",
    title: "PathFinding.js",
    url: "https://qiao.github.io/PathFinding.js/visual/",
    github: "https://github.com/qiao/PathFinding.js",
    category: "Gaming & Physics",
    field: "Pathfinding",
    kind: "library",
    status: "production",
    description:
      "Classic grid pathfinding library with multiple algorithms and a visual demo.",
    bestFor: "Tile-based R3F games, tactical prototypes, and pathfinding education.",
    tags: ["pathfinding", "grid", "games", "ai"],
    color: "#caffbf"
  },
  {
    id: "easystarjs",
    title: "EasyStar.js",
    url: "https://github.com/prettymuchbryce/easystarjs",
    github: "https://github.com/prettymuchbryce/easystarjs",
    category: "Gaming & Physics",
    field: "Pathfinding",
    kind: "library",
    status: "production",
    description:
      "Asynchronous A-star pathfinding for JavaScript tilemaps, useful for lightweight browser games.",
    bestFor: "Simple grid navigation where a navmesh would be overkill.",
    tags: ["pathfinding", "astar", "tilemap", "games"],
    color: "#fdffb6"
  },
  {
    id: "three-csg-ts",
    title: "three-csg-ts",
    url: "https://github.com/samalexander/three-csg-ts",
    github: "https://github.com/samalexander/three-csg-ts",
    category: "Gaming & Physics",
    field: "Level geometry",
    kind: "library",
    status: "production",
    description:
      "TypeScript-friendly CSG implementation for Three.js that can help with procedural level and object geometry.",
    bestFor: "Prototype destructible-looking or generated geometry before moving to more advanced BVH CSG.",
    tags: ["csg", "geometry", "levels", "three.js"],
    color: "#ffcfd2"
  },
  {
    id: "howler",
    title: "Howler.js",
    url: "https://howlerjs.com",
    github: "https://github.com/goldfire/howler.js",
    category: "Gaming & Physics",
    field: "Audio",
    kind: "library",
    status: "production",
    description:
      "Web audio library for sprites, spatial-ish effects, playback control, and cross-browser game audio basics.",
    bestFor: "Adding reliable sound effects and music to R3F games and interactive scenes.",
    tags: ["audio", "games", "sound", "web audio"],
    color: "#e9edc9"
  },
  {
    id: "tonejs",
    title: "Tone.js",
    url: "https://tonejs.github.io",
    github: "https://github.com/Tonejs/Tone.js",
    category: "Gaming & Physics",
    field: "Audio synthesis",
    kind: "library",
    status: "creative",
    description:
      "Web audio framework for synthesis, sequencing, effects, and musical timing.",
    bestFor: "Audio-reactive R3F art, interactive instruments, rhythm toys, and generative sound.",
    tags: ["audio", "music", "generative", "creative coding"],
    color: "#ffc8dd"
  },
  {
    id: "phaser",
    title: "Phaser",
    url: "https://phaser.io",
    github: "https://github.com/phaserjs/phaser",
    category: "Gaming & Physics",
    field: "Game engine",
    kind: "library",
    status: "production",
    description:
      "Mature 2D browser game engine. Not R3F, but valuable for game architecture, asset loading, input, and scenes.",
    bestFor: "Borrowing proven browser-game concepts for R3F projects.",
    tags: ["games", "engine", "2d", "architecture"],
    color: "#9bf6ff"
  },
  {
    id: "matter-js",
    title: "Matter.js",
    url: "https://brm.io/matter-js/",
    github: "https://github.com/liabru/matter-js",
    category: "Gaming & Physics",
    field: "2D physics",
    kind: "library",
    status: "production",
    description:
      "2D rigid-body physics engine that can drive UI toys, mini games, and hybrid 2D/3D interactions.",
    bestFor: "Flat physics overlays and simple games where full 3D Rapier is unnecessary.",
    tags: ["physics", "2d", "games", "simulation"],
    color: "#ffd166"
  },
  {
    id: "ammojs",
    title: "Ammo.js",
    url: "https://github.com/kripken/ammo.js",
    github: "https://github.com/kripken/ammo.js",
    category: "Gaming & Physics",
    field: "Physics engine",
    kind: "library",
    status: "production",
    description:
      "JavaScript/WASM port of Bullet Physics, historically used in Three.js physics demos and engines.",
    bestFor: "Understanding older Three.js physics examples and complex rigid-body features.",
    tags: ["physics", "bullet", "wasm", "three.js"],
    color: "#ffb703"
  },
  {
    id: "socket-io",
    title: "Socket.IO",
    url: "https://socket.io",
    github: "https://github.com/socketio/socket.io",
    category: "Gaming & Physics",
    field: "Networking",
    kind: "library",
    status: "production",
    description:
      "Real-time bidirectional communication library used in many browser multiplayer prototypes and collaborative tools.",
    bestFor: "Chat, presence, editor collaboration, and less latency-critical multiplayer R3F projects.",
    tags: ["networking", "multiplayer", "realtime", "server"],
    color: "#e5e5e5"
  },
  {
    id: "yjs",
    title: "Yjs",
    url: "https://docs.yjs.dev",
    github: "https://github.com/yjs/yjs",
    category: "Gaming & Physics",
    field: "Collaboration",
    kind: "library",
    status: "production",
    description:
      "CRDT framework for real-time shared documents, useful for collaborative scene editors and multiplayer creation tools.",
    bestFor: "Shared object transforms, level editors, whiteboards, and multiplayer creative spaces.",
    tags: ["collaboration", "crdt", "multiplayer", "editors"],
    color: "#f4f0e8"
  },
  {
    id: "lygia",
    title: "LYGIA Shader Library",
    url: "https://lygia.xyz",
    github: "https://github.com/patriciogonzalezvivo/lygia",
    category: "Creative Coding & Shaders",
    field: "Shader modules",
    kind: "library",
    status: "creative",
    description:
      "A large, reusable shader function library for noise, color, SDFs, generative patterns, lighting, and filters.",
    bestFor: "Building richer custom ShaderMaterial and postprocessing effects faster.",
    tags: ["glsl", "shaders", "noise", "sdf"],
    color: "#f15bb5"
  },
  {
    id: "iq-articles",
    title: "Inigo Quilez Articles",
    url: "https://iquilezles.org/articles/",
    category: "Creative Coding & Shaders",
    field: "Shader theory",
    kind: "article",
    status: "learning",
    description:
      "Essential articles on distance fields, raymarching, noise, fractals, palettes, lighting, and demoscene techniques.",
    bestFor: "Leveling up shader art beyond copied snippets.",
    tags: ["raymarching", "sdf", "shaders", "math"],
    color: "#fee440"
  },
  {
    id: "hg-sdf",
    title: "hg_sdf",
    url: "http://mercury.sexy/hg_sdf/",
    github: "https://github.com/mercury-hg/hg_sdf",
    category: "Creative Coding & Shaders",
    field: "Signed distance fields",
    kind: "reference",
    status: "creative",
    description:
      "Classic GLSL distance-field library and article set for building procedural geometry with SDF operations.",
    bestFor: "Raymarched shapes, smooth boolean operations, and procedural shader sculpture.",
    tags: ["sdf", "glsl", "raymarching", "procedural"],
    color: "#ff006e"
  },
  {
    id: "mercury-demoscene",
    title: "Mercury Workshop",
    url: "http://mercury.sexy",
    category: "Creative Coding & Shaders",
    field: "Demoscene",
    kind: "showcase",
    status: "creative",
    description:
      "Demoscene studio whose technical writeups and shader techniques influence modern procedural WebGL work.",
    bestFor: "Understanding compact, high-impact procedural visuals.",
    tags: ["demoscene", "procedural", "shaders", "inspiration"],
    color: "#111111"
  },
  {
    id: "curtainsjs",
    title: "Curtains.js",
    url: "https://www.curtainsjs.com",
    github: "https://github.com/martinlaxenaire/curtainsjs",
    category: "Creative Coding & Shaders",
    field: "DOM WebGL",
    kind: "library",
    status: "creative",
    description:
      "WebGL planes synced to DOM images and videos, useful inspiration for shader-rich editorial pages.",
    bestFor: "Learning DOM-to-WebGL image effects that can later be rebuilt in R3F.",
    tags: ["webgl", "dom", "images", "shaders"],
    color: "#a0c4ff"
  },
  {
    id: "ogl",
    title: "OGL",
    url: "https://oframe.github.io/ogl/",
    github: "https://github.com/oframe/ogl",
    category: "Creative Coding & Shaders",
    field: "WebGL library",
    kind: "library",
    status: "creative",
    description:
      "Minimal WebGL library with elegant examples, often used for creative coding and interaction experiments.",
    bestFor: "Studying lean WebGL patterns outside Three.js before translating ideas into R3F.",
    tags: ["webgl", "creative coding", "shaders", "examples"],
    color: "#8ecae6"
  },
  {
    id: "gl-react",
    title: "gl-react",
    url: "https://github.com/gre/gl-react",
    github: "https://github.com/gre/gl-react",
    category: "Creative Coding & Shaders",
    field: "React shaders",
    kind: "library",
    status: "creative",
    description:
      "React library for composing fragment shaders as components, historically influential for React-based GPU work.",
    bestFor: "Thinking about shader graphs and render passes through React composition.",
    tags: ["react", "glsl", "shaders", "composition"],
    color: "#bdb2ff"
  },
  {
    id: "react-shader-fiber",
    title: "React Shader Fiber",
    url: "https://github.com/pmndrs/react-shader-fiber",
    github: "https://github.com/pmndrs/react-shader-fiber",
    category: "Creative Coding & Shaders",
    field: "Shader experiments",
    kind: "library",
    status: "experimental",
    description:
      "Experimental pmndrs exploration around shader composition and React-style GPU programming.",
    bestFor: "Following where React-driven shader workflows might go next.",
    tags: ["shaders", "react", "experimental", "pmndrs"],
    color: "#cdb4db"
  },
  {
    id: "fragment-foundry",
    title: "Fragment Foundry",
    url: "https://github.com/pmndrs/fragment-foundry",
    github: "https://github.com/pmndrs/fragment-foundry",
    category: "Creative Coding & Shaders",
    field: "Shader tooling",
    kind: "tool",
    status: "experimental",
    description:
      "pmndrs shader-oriented tooling experiment, useful as a signal for emerging GPU authoring workflows.",
    bestFor: "Watching the future edge of React and shader composition tooling.",
    tags: ["shader", "tooling", "pmndrs", "experimental"],
    color: "#f1c0e8"
  },
  {
    id: "openprocessing",
    title: "OpenProcessing",
    url: "https://openprocessing.org",
    category: "Creative Coding & Shaders",
    field: "Sketch archive",
    kind: "showcase",
    status: "creative",
    description:
      "Large creative coding sketch archive, mostly Processing and p5.js, full of generative ideas transferable to R3F.",
    bestFor: "Finding algorithms, compositions, and interactive studies to reinterpret in 3D.",
    tags: ["creative coding", "generative", "sketches", "inspiration"],
    color: "#ff70a6"
  },
  {
    id: "webxr-emulator",
    title: "WebXR API Emulator",
    url: "https://github.com/meta-quest/immersive-web-emulator",
    github: "https://github.com/meta-quest/immersive-web-emulator",
    category: "XR, AR & VR",
    field: "Development tool",
    kind: "tool",
    status: "production",
    description:
      "Browser extension for emulating WebXR devices, poses, controllers, and sessions during development.",
    bestFor: "Testing R3F XR interaction loops before repeatedly putting on a headset.",
    tags: ["webxr", "debug", "emulator", "controllers"],
    color: "#a2d2ff"
  },
  {
    id: "meta-webxr",
    title: "Meta Quest WebXR",
    url: "https://developers.meta.com/horizon/documentation/web/webxr-overview/",
    category: "XR, AR & VR",
    field: "Platform docs",
    kind: "docs",
    status: "production",
    description:
      "Meta's WebXR guidance for Quest browsers, performance expectations, input, and immersive web deployment.",
    bestFor: "Shipping R3F XR experiences that actually behave well on Quest hardware.",
    tags: ["quest", "webxr", "vr", "platform"],
    color: "#bde0fe"
  },
  {
    id: "zappar",
    title: "Zappar for Three.js",
    url: "https://docs.zap.works/universal-ar/javascript/threejs/",
    github: "https://github.com/zappar-xr/zappar-threejs",
    category: "XR, AR & VR",
    field: "AR tracking",
    kind: "library",
    status: "production",
    description:
      "AR tracking SDK with Three.js integrations for image, face, and world tracking workflows.",
    bestFor: "Commercial AR projects that need reliable tracking beyond baseline WebXR support.",
    tags: ["ar", "tracking", "three.js", "sdk"],
    color: "#d0f4de"
  },
  {
    id: "ar-js",
    title: "AR.js",
    url: "https://ar-js-org.github.io/AR.js-Docs/",
    github: "https://github.com/AR-js-org/AR.js",
    category: "XR, AR & VR",
    field: "Marker AR",
    kind: "library",
    status: "production",
    description:
      "Open-source web AR toolkit for marker, location, and image-tracking experiences with Three.js/A-Frame roots.",
    bestFor: "Lightweight marker AR and location-based experiments.",
    tags: ["ar", "marker", "location", "three.js"],
    color: "#caffbf"
  },
  {
    id: "8th-wall",
    title: "8th Wall",
    url: "https://www.8thwall.com",
    category: "XR, AR & VR",
    field: "Commercial AR",
    kind: "tool",
    status: "production",
    description:
      "Commercial web AR platform used for branded camera effects, image targets, face effects, and world tracking.",
    bestFor: "Client AR work where support, tracking quality, and deployment tooling outweigh open-source purity.",
    tags: ["ar", "commercial", "tracking", "webxr"],
    color: "#ffd6a5"
  },
  {
    id: "wonderland-engine",
    title: "Wonderland Engine",
    url: "https://wonderlandengine.com",
    github: "https://github.com/WonderlandEngine",
    category: "XR, AR & VR",
    field: "WebXR engine",
    kind: "tool",
    status: "production",
    description:
      "Performance-focused WebXR engine and editor. Not R3F, but a useful benchmark for headset-first web experiences.",
    bestFor: "Understanding optimization expectations for VR on standalone headsets.",
    tags: ["webxr", "vr", "engine", "performance"],
    color: "#111111"
  },
  {
    id: "needle-engine",
    title: "Needle Engine",
    url: "https://engine.needle.tools",
    github: "https://github.com/needle-tools/needle-engine-support",
    category: "XR, AR & VR",
    field: "3D web engine",
    kind: "tool",
    status: "production",
    description:
      "Unity-to-web and glTF-centric engine for interactive 3D, AR, VR, and spatial web publishing.",
    bestFor: "Comparing editor-driven pipelines against React-authored R3F experiences.",
    tags: ["webxr", "gltf", "unity", "engine"],
    color: "#f6bd60"
  },
  {
    id: "babylonjs",
    title: "Babylon.js",
    url: "https://www.babylonjs.com",
    github: "https://github.com/BabylonJS/Babylon.js",
    category: "XR, AR & VR",
    field: "3D engine",
    kind: "library",
    status: "production",
    description:
      "Full-featured web 3D engine with strong WebXR, tooling, inspector, physics, GUI, and WebGPU support.",
    bestFor: "Benchmarking what a batteries-included engine offers compared with R3F's composable ecosystem.",
    tags: ["webxr", "engine", "webgpu", "three.js alternative"],
    color: "#bb3e03"
  },
  {
    id: "webxr-layers",
    title: "WebXR Layers Explainer",
    url: "https://immersive-web.github.io/layers/",
    github: "https://github.com/immersive-web/layers",
    category: "XR, AR & VR",
    field: "Standards",
    kind: "reference",
    status: "learning",
    description:
      "Standards explainer for efficient XR composition layers, important for high-resolution panels and media in headsets.",
    bestFor: "Understanding where crisp XR UI and video rendering are heading.",
    tags: ["webxr", "layers", "standards", "performance"],
    color: "#caf0f8"
  },
  {
    id: "nextjs",
    title: "Next.js",
    url: "https://nextjs.org",
    github: "https://github.com/vercel/next.js",
    category: "Web Experiences",
    field: "React framework",
    kind: "tool",
    status: "production",
    description:
      "React framework commonly used for production R3F websites that need routing, metadata, server components, and deployment.",
    bestFor: "Portfolio sites, product pages, galleries, and content-driven 3D experiences.",
    tags: ["react", "framework", "websites", "routing"],
    color: "#ffffff"
  },
  {
    id: "remix",
    title: "React Router Framework",
    url: "https://reactrouter.com/start/framework/installation",
    github: "https://github.com/remix-run/react-router",
    category: "Web Experiences",
    field: "React framework",
    kind: "tool",
    status: "production",
    description:
      "Full-stack React framework path from the React Router team, useful for app-like R3F experiences with data routes.",
    bestFor: "3D tools, dashboards, and editors that need robust routing and nested layouts.",
    tags: ["react", "routing", "framework", "apps"],
    color: "#d7e3fc"
  },
  {
    id: "astro",
    title: "Astro",
    url: "https://astro.build",
    github: "https://github.com/withastro/astro",
    category: "Web Experiences",
    field: "Content framework",
    kind: "tool",
    status: "production",
    description:
      "Content-first web framework that can host React islands, useful for editorial pages with selective R3F moments.",
    bestFor: "Fast content sites where only parts of the page need interactive 3D.",
    tags: ["content", "islands", "react", "websites"],
    color: "#ffd6a5"
  },
  {
    id: "gsap-scrolltrigger",
    title: "GSAP ScrollTrigger",
    url: "https://gsap.com/docs/v3/Plugins/ScrollTrigger/",
    github: "https://github.com/greensock/GSAP",
    category: "Web Experiences",
    field: "Scroll animation",
    kind: "library",
    status: "production",
    description:
      "Scroll-linked animation plugin frequently used to coordinate DOM timelines, camera motion, and scene transitions.",
    bestFor: "Editorial R3F storytelling and product launches with exact scroll choreography.",
    tags: ["scroll", "animation", "timeline", "websites"],
    color: "#b7e4c7"
  },
  {
    id: "locomotive-scroll",
    title: "Locomotive Scroll",
    url: "https://github.com/locomotivemtl/locomotive-scroll",
    github: "https://github.com/locomotivemtl/locomotive-scroll",
    category: "Web Experiences",
    field: "Scrolling",
    kind: "library",
    status: "production",
    description:
      "Smooth scrolling and parallax library used across many creative web portfolios and WebGL pages.",
    bestFor: "Studying older but influential scroll-driven creative site patterns.",
    tags: ["scroll", "parallax", "websites", "creative"],
    color: "#eae2b7"
  },
  {
    id: "barba",
    title: "Barba.js",
    url: "https://barba.js.org",
    github: "https://github.com/barbajs/barba",
    category: "Web Experiences",
    field: "Page transitions",
    kind: "library",
    status: "production",
    description:
      "Page transition library often seen in creative sites, useful reference for route changes around persistent canvases.",
    bestFor: "Keeping transitions smooth when pages and WebGL scenes share visual continuity.",
    tags: ["transitions", "routing", "websites", "animation"],
    color: "#cdb4db"
  },
  {
    id: "storybook",
    title: "Storybook",
    url: "https://storybook.js.org",
    github: "https://github.com/storybookjs/storybook",
    category: "Web Experiences",
    field: "Component workshop",
    kind: "tool",
    status: "production",
    description:
      "Component workshop that can document UI around R3F and isolate complex controls, panels, and visual states.",
    bestFor: "Designing the app shell around canvas experiences without launching the whole product.",
    tags: ["components", "documentation", "react", "ui"],
    color: "#ffafcc"
  },
  {
    id: "chromatic",
    title: "Chromatic",
    url: "https://www.chromatic.com",
    github: "https://github.com/chromaui",
    category: "Web Experiences",
    field: "Visual testing",
    kind: "tool",
    status: "production",
    description:
      "Visual review and regression testing for Storybook, useful for DOM UI around 3D experiences.",
    bestFor: "Preventing interface regressions in tool-heavy R3F products.",
    tags: ["visual testing", "storybook", "ui", "qa"],
    color: "#ffc8dd"
  },
  {
    id: "playwright",
    title: "Playwright",
    url: "https://playwright.dev",
    github: "https://github.com/microsoft/playwright",
    category: "Web Experiences",
    field: "Browser testing",
    kind: "tool",
    status: "production",
    description:
      "Browser automation and test framework for checking canvas pages, responsive layout, screenshots, and user flows.",
    bestFor: "Testing R3F apps as real browser experiences instead of only unit-testing components.",
    tags: ["testing", "browser", "screenshots", "qa"],
    color: "#caffbf"
  },
  {
    id: "vercel",
    title: "Vercel",
    url: "https://vercel.com",
    github: "https://github.com/vercel",
    category: "Web Experiences",
    field: "Deployment",
    kind: "tool",
    status: "production",
    description:
      "Deployment platform commonly used for React, Next.js, and R3F portfolios, demos, and product sites.",
    bestFor: "Shipping polished web experiences with previews and edge delivery.",
    tags: ["deployment", "next.js", "websites", "previews"],
    color: "#ffffff"
  },
  {
    id: "netlify",
    title: "Netlify",
    url: "https://www.netlify.com",
    github: "https://github.com/netlify",
    category: "Web Experiences",
    field: "Deployment",
    kind: "tool",
    status: "production",
    description:
      "Static and full-stack deployment platform well suited for Vite, Astro, and portfolio-style R3F builds.",
    bestFor: "Fast preview deploys and static creative web projects.",
    tags: ["deployment", "vite", "websites", "static"],
    color: "#80ffdb"
  },
  {
    id: "drei-performance-monitor",
    title: "Drei PerformanceMonitor",
    url: "https://drei.docs.pmnd.rs/performances/performance-monitor",
    github: "https://github.com/pmndrs/drei",
    category: "Performance & Debug",
    field: "Adaptive quality",
    kind: "library",
    status: "production",
    description:
      "Drei helper for detecting performance changes and adapting DPR, effects, geometry density, or quality tiers.",
    bestFor: "Automatically protecting users on weak devices without removing visual ambition for everyone.",
    tags: ["performance", "adaptive", "drei", "quality"],
    color: "#d8f3dc"
  },
  {
    id: "drei-instances",
    title: "Drei Instances",
    url: "https://drei.docs.pmnd.rs/performances/instances",
    github: "https://github.com/pmndrs/drei",
    category: "Performance & Debug",
    field: "Instancing",
    kind: "library",
    status: "production",
    description:
      "Declarative instancing abstraction for drawing many similar meshes through fewer draw calls.",
    bestFor: "Forests, repeated products, particles-as-meshes, crowds, grids, and background detail.",
    tags: ["instancing", "performance", "drei", "draw calls"],
    color: "#b7e4c7"
  },
  {
    id: "drei-bake-shadows",
    title: "Drei BakeShadows",
    url: "https://drei.docs.pmnd.rs/performances/bake-shadows",
    github: "https://github.com/pmndrs/drei",
    category: "Performance & Debug",
    field: "Lighting optimization",
    kind: "library",
    status: "production",
    description:
      "Freezes shadow maps after an initial render, reducing runtime cost for mostly static staged scenes.",
    bestFor: "Product scenes and portfolios where dynamic shadows are visually unnecessary after setup.",
    tags: ["shadows", "performance", "lighting", "drei"],
    color: "#e9ecef"
  },
  {
    id: "drei-merged",
    title: "Drei Merged",
    url: "https://drei.docs.pmnd.rs/performances/merged",
    github: "https://github.com/pmndrs/drei",
    category: "Performance & Debug",
    field: "Geometry batching",
    kind: "library",
    status: "production",
    description:
      "Helper for reusing and merging GLTF nodes to reduce overhead when many repeated model parts appear in a scene.",
    bestFor: "Model-heavy worlds, shelves, product grids, and repeated props.",
    tags: ["gltf", "performance", "batching", "drei"],
    color: "#dee2e6"
  },
  {
    id: "stats-js",
    title: "stats.js",
    url: "https://github.com/mrdoob/stats.js",
    github: "https://github.com/mrdoob/stats.js",
    category: "Performance & Debug",
    field: "FPS monitor",
    kind: "tool",
    status: "production",
    description:
      "Tiny classic FPS and memory monitor used in many Three.js examples and quick prototypes.",
    bestFor: "A first quick signal before deeper profiling with Spector or browser dev tools.",
    tags: ["fps", "performance", "debug", "three.js"],
    color: "#f1faee"
  },
  {
    id: "rollup-plugin-visualizer",
    title: "rollup-plugin-visualizer",
    url: "https://github.com/btd/rollup-plugin-visualizer",
    github: "https://github.com/btd/rollup-plugin-visualizer",
    category: "Performance & Debug",
    field: "Bundle analysis",
    kind: "tool",
    status: "production",
    description:
      "Bundle visualization tool for Vite/Rollup projects, useful when Three.js addons and asset tooling inflate payloads.",
    bestFor: "Finding heavy imports, accidental whole-library pulls, and optimization targets.",
    tags: ["bundle", "vite", "performance", "analysis"],
    color: "#faedcd"
  },
  {
    id: "vite-plugin-compression",
    title: "vite-plugin-compression",
    url: "https://github.com/vbenjs/vite-plugin-compression",
    github: "https://github.com/vbenjs/vite-plugin-compression",
    category: "Performance & Debug",
    field: "Compression",
    kind: "tool",
    status: "production",
    description:
      "Vite plugin for producing compressed assets, helpful for self-hosted static R3F apps and heavy bundles.",
    bestFor: "Ensuring models, scripts, and app shells are delivered with modern compression.",
    tags: ["vite", "compression", "bundle", "performance"],
    color: "#ffd6a5"
  },
  {
    id: "chrome-performance",
    title: "Chrome Performance Panel",
    url: "https://developer.chrome.com/docs/devtools/performance",
    category: "Performance & Debug",
    field: "Browser profiling",
    kind: "docs",
    status: "production",
    description:
      "Official DevTools profiling guide for main-thread work, frames, memory, interactions, and rendering performance.",
    bestFor: "Finding whether lag is React, asset decode, layout, JavaScript, or GPU pressure.",
    tags: ["devtools", "performance", "browser", "profiling"],
    color: "#d7e3fc"
  },
  {
    id: "learnopengl",
    title: "LearnOpenGL",
    url: "https://learnopengl.com",
    github: "https://github.com/JoeyDeVries/LearnOpenGL",
    category: "Learning & Theory",
    field: "Graphics theory",
    kind: "course",
    status: "learning",
    description:
      "OpenGL tutorial series that explains lighting, materials, framebuffers, cubemaps, PBR, and advanced rendering.",
    bestFor: "Understanding the graphics theory behind Three.js abstractions.",
    tags: ["opengl", "graphics", "lighting", "pbr"],
    color: "#e9edc9"
  },
  {
    id: "scratchapixel",
    title: "Scratchapixel",
    url: "https://www.scratchapixel.com",
    category: "Learning & Theory",
    field: "Rendering theory",
    kind: "course",
    status: "learning",
    description:
      "Detailed lessons on ray tracing, rasterization, shading, cameras, sampling, and rendering math.",
    bestFor: "Building serious graphics intuition that pays off in shaders and scene design.",
    tags: ["rendering", "math", "ray tracing", "graphics"],
    color: "#fefae0"
  },
  {
    id: "real-time-rendering",
    title: "Real-Time Rendering",
    url: "https://www.realtimerendering.com",
    category: "Learning & Theory",
    field: "Rendering reference",
    kind: "reference",
    status: "learning",
    description:
      "Book site and reference hub for modern real-time rendering techniques, papers, links, and updates.",
    bestFor: "Going beyond tutorials into the vocabulary used by graphics engineers.",
    tags: ["rendering", "graphics", "reference", "papers"],
    color: "#e5e5e5"
  },
  {
    id: "the-graphics-codex",
    title: "The Graphics Codex",
    url: "https://graphicscodex.com",
    category: "Learning & Theory",
    field: "Graphics reference",
    kind: "reference",
    status: "learning",
    description:
      "Compact reference for computer graphics concepts, algorithms, notation, and visual explanations.",
    bestFor: "Clarifying math and rendering concepts while building shader-heavy R3F work.",
    tags: ["graphics", "math", "reference", "rendering"],
    color: "#ccd5ae"
  },
  {
    id: "simondev",
    title: "SimonDev",
    url: "https://www.youtube.com/@simondev758",
    github: "https://github.com/simondevyoutube",
    category: "Learning & Theory",
    field: "Video tutorials",
    kind: "course",
    status: "learning",
    description:
      "Practical Three.js, game programming, graphics, and engine-style tutorials with code-heavy explanations.",
    bestFor: "Learning game and graphics patterns that can be adapted to R3F.",
    tags: ["three.js", "games", "video", "learning"],
    color: "#ffcad4"
  },
  {
    id: "wael-yasmina",
    title: "Wael Yasmina",
    url: "https://waelyasmina.net",
    github: "https://github.com/WaelYasmina",
    category: "Learning & Theory",
    field: "Tutorials",
    kind: "course",
    status: "learning",
    description:
      "Three.js and R3F learning material with approachable project-based examples and visual walkthroughs.",
    bestFor: "Filling gaps between docs and finished interactive demos.",
    tags: ["three.js", "r3f", "tutorials", "learning"],
    color: "#bde0fe"
  },
  {
    id: "r3f-workshop",
    title: "R3F by Example",
    url: "https://onion2k.github.io/r3f-by-example/",
    github: "https://github.com/onion2k/r3f-by-example",
    category: "Learning & Theory",
    field: "Examples",
    kind: "course",
    status: "learning",
    description:
      "Example-driven React Three Fiber reference covering many small patterns in focused, inspectable projects.",
    bestFor: "Finding a minimal R3F example before building a full feature.",
    tags: ["r3f", "examples", "learning", "patterns"],
    color: "#d0f4de"
  },
  {
    id: "threejs-resources",
    title: "Three.js Resources",
    url: "https://threejs.org/docs/#manual/en/introduction/Useful-links",
    github: "https://github.com/mrdoob/three.js",
    category: "Learning & Theory",
    field: "Resource index",
    kind: "reference",
    status: "learning",
    description:
      "Official useful links page for Three.js ecosystem resources, communities, books, courses, and tools.",
    bestFor: "Checking the broader ecosystem from the official project perspective.",
    tags: ["three.js", "resources", "official", "learning"],
    color: "#f1f3f5"
  },
  {
    id: "little-workshop",
    title: "Little Workshop",
    url: "https://www.littleworkshop.fr",
    category: "Showcases & Inspiration",
    field: "Studio",
    kind: "showcase",
    status: "creative",
    description:
      "Small studio known for carefully crafted interactive 3D web experiences, games, and playful product work.",
    bestFor: "Studying charm, interaction, and performance-aware visual polish.",
    tags: ["studio", "webgl", "games", "inspiration"],
    color: "#f6bd60"
  },
  {
    id: "unseen-studio",
    title: "Unseen Studio",
    url: "https://unseen.co",
    category: "Showcases & Inspiration",
    field: "Studio",
    kind: "showcase",
    status: "creative",
    description:
      "Creative studio with polished motion, WebGL, brand systems, and high-end interactive site work.",
    bestFor: "Taste references for luxury, editorial, and brand-forward 3D websites.",
    tags: ["studio", "webgl", "brand", "inspiration"],
    color: "#111111"
  },
  {
    id: "resn",
    title: "Resn",
    url: "https://resn.co.nz",
    category: "Showcases & Inspiration",
    field: "Studio",
    kind: "showcase",
    status: "creative",
    description:
      "Long-running interactive studio with experimental, surreal, and technically ambitious web work.",
    bestFor: "Finding references that feel less template-like and more authored.",
    tags: ["studio", "interactive", "webgl", "inspiration"],
    color: "#e0fbfc"
  },
  {
    id: "dogstudio",
    title: "Dogstudio",
    url: "https://dogstudio.co",
    category: "Showcases & Inspiration",
    field: "Studio",
    kind: "showcase",
    status: "creative",
    description:
      "Digital studio with a strong history of motion-rich, art-directed, interactive web experiences.",
    bestFor: "Studying pacing, transitions, and brand storytelling around interactive visuals.",
    tags: ["studio", "motion", "websites", "inspiration"],
    color: "#f8edeb"
  },
  {
    id: "hello-monday",
    title: "Hello Monday",
    url: "https://www.hellomonday.com",
    category: "Showcases & Inspiration",
    field: "Studio",
    kind: "showcase",
    status: "creative",
    description:
      "Experience design studio producing polished interactive work, games, installations, and brand systems.",
    bestFor: "Learning how high-end digital experiences balance storytelling and usability.",
    tags: ["studio", "interactive", "brand", "inspiration"],
    color: "#ffd6a5"
  },
  {
    id: "nicky-case",
    title: "Nicky Case",
    url: "https://ncase.me",
    github: "https://github.com/ncase",
    category: "Showcases & Inspiration",
    field: "Explorable explanations",
    kind: "showcase",
    status: "creative",
    description:
      "Interactive explainers that demonstrate how systems, simulations, and visual storytelling can teach complex ideas.",
    bestFor: "Designing meaningful interaction, not just impressive rendering.",
    tags: ["interactive", "explainers", "simulation", "inspiration"],
    color: "#ffcad4"
  },
  {
    id: "digital-art-museum",
    title: "Digital Art Museum",
    url: "https://dam.org",
    category: "Showcases & Inspiration",
    field: "Art history",
    kind: "reference",
    status: "creative",
    description:
      "Archive and context for digital art history, useful for grounding creative coding beyond current web trends.",
    bestFor: "Understanding the lineage behind generative and computational art.",
    tags: ["digital art", "history", "creative coding", "reference"],
    color: "#e9edc9"
  },
  {
    id: "new-aesthetic",
    title: "CreativeApplications.Net",
    url: "https://www.creativeapplications.net",
    category: "Showcases & Inspiration",
    field: "Creative technology",
    kind: "community",
    status: "creative",
    description:
      "Long-running publication covering creative coding, installations, generative art, data art, and toolmaking.",
    bestFor: "Finding artistic context and references beyond frontend portfolios.",
    tags: ["creative technology", "art", "installations", "inspiration"],
    color: "#cdb4db"
  },
  {
    id: "mapbox-gl-js",
    title: "Mapbox GL JS",
    url: "https://docs.mapbox.com/mapbox-gl-js/",
    github: "https://github.com/mapbox/mapbox-gl-js",
    category: "Data, Maps & AI",
    field: "Maps",
    kind: "library",
    status: "production",
    description:
      "WebGL map renderer and ecosystem for basemaps, layers, terrain, custom overlays, and geospatial interfaces.",
    bestFor: "Combining R3F data visuals with serious mapping products and location context.",
    tags: ["maps", "webgl", "geospatial", "data viz"],
    color: "#90e0ef"
  },
  {
    id: "maplibre-gl-js",
    title: "MapLibre GL JS",
    url: "https://maplibre.org/maplibre-gl-js/docs/",
    github: "https://github.com/maplibre/maplibre-gl-js",
    category: "Data, Maps & AI",
    field: "Maps",
    kind: "library",
    status: "production",
    description:
      "Open-source WebGL map renderer forked from Mapbox GL JS, widely used for open geospatial web applications.",
    bestFor: "Open map stacks where vendor lock-in or license constraints matter.",
    tags: ["maps", "webgl", "open source", "geospatial"],
    color: "#ade8f4"
  },
  {
    id: "react-map-gl",
    title: "react-map-gl",
    url: "https://visgl.github.io/react-map-gl/",
    github: "https://github.com/visgl/react-map-gl",
    category: "Data, Maps & AI",
    field: "React maps",
    kind: "library",
    status: "production",
    description:
      "React wrapper for Mapbox GL JS and MapLibre GL JS from the vis.gl ecosystem.",
    bestFor: "React app maps that can coordinate with deck.gl and R3F overlays.",
    tags: ["react", "maps", "mapbox", "maplibre"],
    color: "#caf0f8"
  },
  {
    id: "kepler-gl",
    title: "kepler.gl",
    url: "https://kepler.gl",
    github: "https://github.com/keplergl/kepler.gl",
    category: "Data, Maps & AI",
    field: "Geospatial analysis",
    kind: "tool",
    status: "production",
    description:
      "Open-source geospatial analysis tool for large-scale location data, powered by deck.gl.",
    bestFor: "Understanding high-density map visualization patterns before building custom 3D layers.",
    tags: ["maps", "data viz", "geospatial", "deck.gl"],
    color: "#bde0fe"
  },
  {
    id: "cesiumjs",
    title: "CesiumJS",
    url: "https://cesium.com/platform/cesiumjs/",
    github: "https://github.com/CesiumGS/cesium",
    category: "Data, Maps & AI",
    field: "3D geospatial",
    kind: "library",
    status: "production",
    description:
      "3D geospatial engine for globes, terrain, imagery, 3D Tiles, time-dynamic data, and large spatial scenes.",
    bestFor: "Comparing R3F map/globe ideas with a purpose-built geospatial engine.",
    tags: ["geospatial", "globe", "3d tiles", "terrain"],
    color: "#ccd5ae"
  },
  {
    id: "3d-tiles-renderer",
    title: "3d-tiles-renderer",
    url: "https://github.com/NASA-AMMOS/3DTilesRendererJS",
    github: "https://github.com/NASA-AMMOS/3DTilesRendererJS",
    category: "Data, Maps & AI",
    field: "3D Tiles",
    kind: "library",
    status: "production",
    description:
      "Renderer for OGC 3D Tiles in Three.js, enabling massive tiled 3D geospatial and photogrammetry datasets.",
    bestFor: "Large environments and geospatial scenes inside Three.js or R3F.",
    tags: ["3d tiles", "geospatial", "three.js", "streaming"],
    color: "#d8f3dc"
  },
  {
    id: "potree",
    title: "Potree",
    url: "https://potree.org",
    github: "https://github.com/potree/potree",
    category: "Data, Maps & AI",
    field: "Point clouds",
    kind: "library",
    status: "production",
    description:
      "WebGL renderer for large point clouds, useful context for scan data, LiDAR, and heavy spatial visualization.",
    bestFor: "Understanding point-cloud interaction patterns and level-of-detail streaming.",
    tags: ["point cloud", "lidar", "webgl", "data viz"],
    color: "#a3cef1"
  },
  {
    id: "plas-io",
    title: "plas.io",
    url: "https://plas.io",
    github: "https://github.com/verma/plasio",
    category: "Data, Maps & AI",
    field: "Point clouds",
    kind: "tool",
    status: "production",
    description:
      "Browser point-cloud viewer for LAS/LAZ data, useful as a reference for spatial data inspection.",
    bestFor: "Checking LiDAR files and thinking through point-cloud UI.",
    tags: ["point cloud", "lidar", "viewer", "webgl"],
    color: "#e0fbfc"
  },
  {
    id: "tensorflow-js",
    title: "TensorFlow.js",
    url: "https://www.tensorflow.org/js",
    github: "https://github.com/tensorflow/tfjs",
    category: "Data, Maps & AI",
    field: "ML in browser",
    kind: "library",
    status: "production",
    description:
      "Machine learning in JavaScript for browser and Node, useful for AI-driven interaction, classification, and generative tools.",
    bestFor: "Computer vision or ML-enhanced R3F experiences that run client-side.",
    tags: ["ai", "machine learning", "browser", "tensorflow"],
    color: "#f6bd60"
  },
  {
    id: "mediapipe",
    title: "MediaPipe",
    url: "https://ai.google.dev/edge/mediapipe/solutions/guide",
    github: "https://github.com/google-ai-edge/mediapipe",
    category: "Data, Maps & AI",
    field: "Computer vision",
    kind: "library",
    status: "production",
    description:
      "On-device vision and ML task libraries for hands, face, pose, object detection, and gesture-based experiences.",
    bestFor: "Camera-driven R3F interactions, body tracking, and AR-adjacent prototypes.",
    tags: ["computer vision", "hands", "pose", "ai"],
    color: "#a0c4ff"
  },
  {
    id: "replicate",
    title: "Replicate",
    url: "https://replicate.com",
    github: "https://github.com/replicate",
    category: "Data, Maps & AI",
    field: "AI models",
    kind: "tool",
    status: "production",
    description:
      "Hosted model platform for image, video, 3D, and generative workflows that can feed asset ideation pipelines.",
    bestFor: "Prototype AI-assisted textures, concept art, depth maps, and 3D asset workflows around R3F.",
    tags: ["ai", "models", "assets", "generation"],
    color: "#ffffff"
  },
  {
    id: "meshy",
    title: "Meshy",
    url: "https://www.meshy.ai",
    category: "Data, Maps & AI",
    field: "Generated 3D",
    kind: "tool",
    status: "experimental",
    description:
      "AI 3D asset generation service for text-to-3D and image-to-3D workflows, useful for fast concept passes.",
    bestFor: "Rapid asset ideation before cleanup, retopology, and glTF optimization.",
    tags: ["ai", "3d assets", "generation", "gltf"],
    color: "#f1c0e8"
  },
  {
    id: "tripo-ai",
    title: "Tripo AI",
    url: "https://www.tripo3d.ai",
    category: "Data, Maps & AI",
    field: "Generated 3D",
    kind: "tool",
    status: "experimental",
    description:
      "AI 3D generation tool for producing draft models from text or images.",
    bestFor: "Quickly exploring asset directions before committing to a modeled production asset.",
    tags: ["ai", "3d assets", "prototype", "generation"],
    color: "#ffc8dd"
  }
];
