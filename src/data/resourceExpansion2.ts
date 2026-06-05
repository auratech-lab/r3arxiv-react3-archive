import type { Resource } from "./resources.ts";

type ExpansionEntry = Omit<Resource, "color"> & Partial<Pick<Resource, "color">>;

const palette = [
  "#bde0fe",
  "#c8f7dc",
  "#ffd6a5",
  "#ffc8dd",
  "#d0f4de",
  "#e0fbfc",
  "#f1c0e8",
  "#cddafd",
  "#ffe5ec",
  "#fefae0",
  "#a2d2ff",
  "#d8e2dc"
];

function withPalette(entries: ExpansionEntry[]): Resource[] {
  return entries.map(({ color, ...entry }, index) => ({
    ...entry,
    color: color ?? palette[index % palette.length]
  }));
}

export const resourceExpansion2: Resource[] = withPalette([
  {
    id: "use-shader-fx",
    title: "use-shader-fx",
    url: "https://use-shader-fx.vercel.app",
    github: "https://github.com/FunTechInc/use-shader-fx",
    category: "Creative Coding & Shaders",
    field: "R3F shader effects",
    kind: "library",
    status: "creative",
    description:
      "A collection of ready-made shader effects and hooks for React Three Fiber scenes.",
    bestFor: "Dropping stylized transitions, distortions, and visual treatments into R3F projects quickly.",
    tags: ["r3f", "shaders", "effects", "hooks"],
    previewUrl: "https://use-shader-fx.vercel.app"
  },
  {
    id: "viber3d",
    title: "Viber3D",
    url: "https://viber3d.instructa.ai",
    github: "https://github.com/instructa/viber3d",
    category: "Gaming & Physics",
    field: "R3F game framework",
    kind: "library",
    status: "experimental",
    description:
      "React Three Fiber game-building layer focused on levels, interaction, scene structure, and fast prototyping.",
    bestFor: "Starting game-like R3F scenes without assembling every runtime convention from scratch.",
    tags: ["r3f", "games", "framework", "levels"],
    previewUrl: "https://viber3d.instructa.ai"
  },
  {
    id: "r3f-globe",
    title: "r3f-globe",
    url: "https://vasturiano.github.io/r3f-globe/",
    github: "https://github.com/vasturiano/r3f-globe",
    category: "Data, Maps & AI",
    field: "R3F globe",
    kind: "library",
    status: "production",
    description:
      "React Three Fiber wrapper for globe.gl style geographic visualizations, arcs, points, polygons, and animated tracks.",
    bestFor: "Building map and data-globe views while staying inside a R3F scene graph.",
    tags: ["r3f", "globe", "maps", "data"],
    previewUrl: "https://vasturiano.github.io/r3f-globe/"
  },
  {
    id: "react-three-lightmap",
    title: "react-three-lightmap",
    url: "https://github.com/pmndrs/react-three-lightmap",
    github: "https://github.com/pmndrs/react-three-lightmap",
    category: "Ecosystem Libraries",
    field: "Baked lighting",
    kind: "library",
    status: "experimental",
    description:
      "pmndrs experiment for using lightmaps in React Three Fiber scenes.",
    bestFor: "Exploring baked-lighting workflows for performant architectural, product, and game scenes.",
    tags: ["r3f", "lightmaps", "baking", "pmndrs"]
  },
  {
    id: "component-material",
    title: "component-material",
    url: "https://github.com/pmndrs/component-material",
    github: "https://github.com/pmndrs/component-material",
    category: "Creative Coding & Shaders",
    field: "Material composition",
    kind: "library",
    status: "experimental",
    description:
      "Composable material experiments from pmndrs for building shader behavior out of React-style pieces.",
    bestFor: "Studying how declarative composition can make advanced material systems easier to author.",
    tags: ["materials", "r3f", "shaders", "pmndrs"]
  },
  {
    id: "react-three-arjs",
    title: "react-three-arjs",
    url: "https://github.com/artcom/react-three-arjs",
    github: "https://github.com/artcom/react-three-arjs",
    category: "XR, AR & VR",
    field: "Marker AR",
    kind: "library",
    status: "experimental",
    description:
      "React Three Fiber integration for AR.js marker-based augmented reality.",
    bestFor: "Quick marker AR prototypes when WebXR hit-test support is not the right fit.",
    tags: ["r3f", "ar", "markers", "arjs"]
  },
  {
    id: "zappar-react-three-fiber",
    title: "Zappar React Three Fiber",
    url: "https://github.com/zappar-xr/react-three-fiber",
    github: "https://github.com/zappar-xr/react-three-fiber",
    category: "XR, AR & VR",
    field: "Web AR",
    kind: "library",
    status: "production",
    description:
      "Zappar components for face, image, and world tracking inside React Three Fiber.",
    bestFor: "Commercial WebAR projects that need tracking primitives and a React scene model.",
    tags: ["r3f", "ar", "tracking", "zappar"]
  },
  {
    id: "r3f-webgpu-postprocessing",
    title: "R3F WebGPU Postprocessing",
    url: "https://r3f-webgpu-post-processing.vercel.app/",
    github: "https://github.com/ektogamat/r3f-webgpu-post-processing",
    category: "Foundations",
    field: "WebGPU starter",
    kind: "starter",
    status: "experimental",
    description:
      "Starter/demo project for React Three Fiber with WebGPU-oriented postprocessing experiments.",
    bestFor: "Learning how emerging WebGPU rendering paths change R3F effects and setup code.",
    tags: ["r3f", "webgpu", "postprocessing", "starter"],
    previewUrl: "https://r3f-webgpu-post-processing.vercel.app/"
  },
  {
    id: "ultimate-lens-flare",
    title: "Ultimate Lens Flare",
    url: "https://ultimate-lens-flare.vercel.app/",
    category: "Creative Coding & Shaders",
    field: "Lens effects",
    kind: "tool",
    status: "creative",
    description:
      "Interactive Three.js/R3F-style lens flare effect reference with tuned bloom and flare controls.",
    bestFor: "Adding cinematic flare language to space, product, vehicle, and sci-fi scenes.",
    tags: ["lens-flare", "postprocessing", "three.js", "vfx"],
    previewUrl: "https://ultimate-lens-flare.vercel.app/"
  },
  {
    id: "autofocus-dof",
    title: "AutoFocusDOF",
    url: "https://autofocusdof.vercel.app/",
    category: "Creative Coding & Shaders",
    field: "Depth of field",
    kind: "tool",
    status: "creative",
    description:
      "Depth-of-field demo that automatically focuses camera blur around scene targets.",
    bestFor: "Product shots, cinematic web scenes, and focus-pull experiments.",
    tags: ["dof", "camera", "postprocessing", "focus"],
    previewUrl: "https://autofocusdof.vercel.app/"
  },
  {
    id: "wawa-vfx",
    title: "Wawa VFX",
    url: "https://wawa-vfx.wawasensei.dev",
    github: "https://github.com/wass08/r3f-vfx",
    category: "Creative Coding & Shaders",
    field: "R3F effects",
    kind: "library",
    status: "creative",
    description:
      "React Three Fiber visual-effects helpers for game-like particles, trails, transitions, and scene polish.",
    bestFor: "Adding readable visual feedback and motion energy to R3F games and demos.",
    tags: ["r3f", "vfx", "particles", "games"],
    previewUrl: "https://wawa-vfx.wawasensei.dev"
  },
  {
    id: "water-surface",
    title: "Water Surface",
    url: "https://water-surface.vercel.app",
    category: "Creative Coding & Shaders",
    field: "Water shader",
    kind: "showcase",
    status: "creative",
    description:
      "A focused realtime water-surface shader demo with reflections, animated waves, and material tuning.",
    bestFor: "Learning the pieces of stylized or semi-realistic water in a small scene.",
    tags: ["water", "shader", "three.js", "materials"],
    previewUrl: "https://water-surface.vercel.app"
  },
  {
    id: "holographic-material",
    title: "Three.js Holographic Material",
    url: "https://threejs-holographic-material.vercel.app/",
    category: "Creative Coding & Shaders",
    field: "Hologram material",
    kind: "tool",
    status: "creative",
    description:
      "Shader material demo for scanline, fresnel, and additive hologram-style rendering.",
    bestFor: "Sci-fi interfaces, ghosted previews, selected-object states, and avatar effects.",
    tags: ["hologram", "shader", "fresnel", "materials"],
    previewUrl: "https://threejs-holographic-material.vercel.app/"
  },
  {
    id: "fake-glow-material",
    title: "R3F Fake Glow Material",
    url: "https://r3f-fake-glow-material.vercel.app/",
    category: "Creative Coding & Shaders",
    field: "Glow material",
    kind: "tool",
    status: "creative",
    description:
      "Lightweight glow/fresnel material approach for giving meshes a readable aura without a full post stack.",
    bestFor: "Selections, powerups, holograms, UI affordances, and cheap stylized rim lighting.",
    tags: ["r3f", "glow", "fresnel", "materials"],
    previewUrl: "https://r3f-fake-glow-material.vercel.app/"
  },
  {
    id: "flow-shield-effect",
    title: "Flow Shield Effect",
    url: "https://flow-shield-effect.vercel.app",
    category: "Creative Coding & Shaders",
    field: "Shield shader",
    kind: "showcase",
    status: "creative",
    description:
      "Animated force-field material demo with flowing highlights and transparent energy-shell behavior.",
    bestFor: "Game shields, hit feedback, portals, and protective-volume effects.",
    tags: ["shader", "shield", "vfx", "games"],
    previewUrl: "https://flow-shield-effect.vercel.app"
  },
  {
    id: "stylized-water",
    title: "Stylized Water",
    url: "https://stylized-water.vercel.app",
    category: "Creative Coding & Shaders",
    field: "Stylized water",
    kind: "showcase",
    status: "creative",
    description:
      "A compact stylized-water scene useful for studying color bands, foam, motion, and readable waves.",
    bestFor: "Cartoon, cozy, and low-poly game environments.",
    tags: ["water", "stylized", "shader", "games"],
    previewUrl: "https://stylized-water.vercel.app"
  },
  {
    id: "r3f-cheers",
    title: "R3F Cheers",
    url: "https://r3f-cheers.netlify.app/",
    category: "Showcases & Inspiration",
    field: "R3F demo",
    kind: "showcase",
    status: "creative",
    description:
      "Polished React Three Fiber demo scene with characterful motion and interaction.",
    bestFor: "Reference for small, delightful R3F experiences with strong presentation.",
    tags: ["r3f", "demo", "motion", "interaction"],
    previewUrl: "https://r3f-cheers.netlify.app/"
  },
  {
    id: "react-fluid-distortion",
    title: "react-three-fluid-distortion",
    url: "https://github.com/pmndrs/react-three-fluid-distortion",
    github: "https://github.com/pmndrs/react-three-fluid-distortion",
    category: "Creative Coding & Shaders",
    field: "Fluid distortion",
    kind: "library",
    status: "experimental",
    description:
      "pmndrs fluid distortion component for cursor-driven warping and liquid-style post effects.",
    bestFor: "Interactive landing pages, image reveals, and tactile shader feedback.",
    tags: ["r3f", "fluid", "distortion", "pmndrs"]
  },
  {
    id: "realism-effects",
    title: "Realism Effects",
    url: "https://realism-effects.vercel.app/",
    category: "Creative Coding & Shaders",
    field: "Post effects",
    kind: "tool",
    status: "creative",
    description:
      "Realtime postprocessing reference for stacking photographic and cinematic scene treatments.",
    bestFor: "Tuning bloom, tone, blur, grain, and screen-space details for polished R3F scenes.",
    tags: ["postprocessing", "realism", "r3f", "cinematic"],
    previewUrl: "https://realism-effects.vercel.app/"
  },
  {
    id: "enhance-shader-lighting",
    title: "Enhance Shader Lighting",
    url: "https://github.com/N8python/enhance-shader-lighting",
    github: "https://github.com/N8python/enhance-shader-lighting",
    category: "Creative Coding & Shaders",
    field: "Shader lighting",
    kind: "library",
    status: "experimental",
    description:
      "Utility approach for improving custom shader lighting so bespoke materials fit better into lit scenes.",
    bestFor: "Custom ShaderMaterial work that still needs convincing light response.",
    tags: ["shaders", "lighting", "materials", "three.js"]
  },
  {
    id: "three-shader-baker",
    title: "three-shader-baker",
    url: "https://github.com/repalash/three-shader-baker",
    github: "https://github.com/repalash/three-shader-baker",
    category: "Asset Pipeline",
    field: "Shader baking",
    kind: "tool",
    status: "experimental",
    description:
      "Bake shader outputs and material looks for Three.js-oriented workflows.",
    bestFor: "Moving expensive procedural looks into cheaper textures when performance matters.",
    tags: ["baking", "shaders", "materials", "optimization"]
  },
  {
    id: "three-material-editor",
    title: "three-material-editor",
    url: "https://github.com/repalash/three-material-editor",
    github: "https://github.com/repalash/three-material-editor",
    category: "Asset Pipeline",
    field: "Material editing",
    kind: "tool",
    status: "experimental",
    description:
      "Material inspection and editing tooling for Three.js projects.",
    bestFor: "Tweaking, debugging, and comparing Three.js material settings visually.",
    tags: ["materials", "editor", "three.js", "tools"]
  },
  {
    id: "vanta-js",
    title: "Vanta.js",
    url: "https://www.vantajs.com/",
    github: "https://github.com/tengbao/vanta",
    category: "Creative Coding & Shaders",
    field: "Background effects",
    kind: "library",
    status: "creative",
    description:
      "Classic animated WebGL background effect library built on Three.js.",
    bestFor: "Studying compact, reusable effect modules and quick atmospheric backgrounds.",
    tags: ["three.js", "backgrounds", "effects", "webgl"],
    previewUrl: "https://www.vantajs.com/"
  },
  {
    id: "three-pathtracing-renderer",
    title: "THREE.js PathTracing Renderer",
    url: "https://erichlof.github.io/THREE.js-PathTracing-Renderer/",
    github: "https://github.com/erichlof/THREE.js-PathTracing-Renderer",
    category: "Creative Coding & Shaders",
    field: "Path tracing",
    kind: "showcase",
    status: "creative",
    description:
      "Long-running Three.js path-tracing renderer with many physically inspired realtime examples.",
    bestFor: "Learning realistic lighting ideas before adapting them to interactive R3F scenes.",
    tags: ["path-tracing", "lighting", "three.js", "rendering"],
    previewUrl: "https://erichlof.github.io/THREE.js-PathTracing-Renderer/"
  },
  {
    id: "three-vrm",
    title: "three-vrm",
    url: "https://pixiv.github.io/three-vrm/",
    github: "https://github.com/pixiv/three-vrm",
    category: "Gaming & Physics",
    field: "VRM avatars",
    kind: "library",
    status: "production",
    description:
      "Three.js loader and runtime for VRM humanoid avatars, expressions, spring bones, and look-at behavior.",
    bestFor: "Avatar projects, VTuber prototypes, social spaces, and character-heavy R3F scenes.",
    tags: ["vrm", "avatars", "characters", "three.js"],
    previewUrl: "https://pixiv.github.io/three-vrm/"
  },
  {
    id: "kalidokit",
    title: "Kalidokit",
    url: "https://yeemachine.github.io/kalidokit/",
    github: "https://github.com/yeemachine/kalidokit",
    category: "Gaming & Physics",
    field: "Avatar animation",
    kind: "library",
    status: "production",
    description:
      "Pose, face, and hand solving helpers for driving avatars from tracking data.",
    bestFor: "Animating VRM characters from webcam or mediapipe-style body tracking.",
    tags: ["avatars", "tracking", "animation", "vrm"],
    previewUrl: "https://yeemachine.github.io/kalidokit/"
  },
  {
    id: "loaders-gl",
    title: "loaders.gl",
    url: "https://loaders.gl/",
    github: "https://github.com/visgl/loaders.gl",
    category: "Asset Pipeline",
    field: "Data loaders",
    kind: "library",
    status: "production",
    description:
      "Large loader ecosystem for 3D tiles, point clouds, geospatial data, images, and binary formats.",
    bestFor: "Feeding serious spatial data and large assets into WebGL/WebGPU applications.",
    tags: ["loaders", "geospatial", "3d-tiles", "point-clouds"],
    previewUrl: "https://loaders.gl/"
  },
  {
    id: "web-ifc-viewer",
    title: "web-ifc-viewer",
    url: "https://ifcjs.github.io/web-ifc-viewer/",
    github: "https://github.com/IFCjs/web-ifc-viewer",
    category: "Asset Pipeline",
    field: "BIM viewer",
    kind: "library",
    status: "production",
    description:
      "Open IFC/BIM viewer tooling for loading architectural models in the browser.",
    bestFor: "AEC, architecture, and building-data viewers using Three.js workflows.",
    tags: ["ifc", "bim", "architecture", "viewer"],
    previewUrl: "https://ifcjs.github.io/web-ifc-viewer/"
  },
  {
    id: "sketchbook-threejs",
    title: "Sketchbook",
    url: "https://github.com/swift502/Sketchbook",
    github: "https://github.com/swift502/Sketchbook",
    category: "Gaming & Physics",
    field: "Character controller",
    kind: "showcase",
    status: "production",
    description:
      "Open-source Three.js character controller and world sandbox with vehicles, animation, physics, and input.",
    bestFor: "Studying third-person movement, animation blending, vehicles, and game-scene architecture.",
    tags: ["three.js", "characters", "vehicles", "controls"]
  },
  {
    id: "joltphysics-js",
    title: "JoltPhysics.js",
    url: "https://github.com/jrouwe/JoltPhysics.js",
    github: "https://github.com/jrouwe/JoltPhysics.js",
    category: "Gaming & Physics",
    field: "3D physics",
    kind: "library",
    status: "production",
    description:
      "JavaScript and WebAssembly build of Jolt Physics for high-performance rigid body simulation.",
    bestFor: "Modern physics experiments, stacks, vehicles, constraints, and game prototypes.",
    tags: ["physics", "wasm", "jolt", "rigid-body"]
  },
  {
    id: "react-three-jolt",
    title: "react-three-jolt",
    url: "https://github.com/pmndrs/react-three-jolt",
    github: "https://github.com/pmndrs/react-three-jolt",
    category: "Gaming & Physics",
    field: "R3F physics",
    kind: "library",
    status: "experimental",
    description:
      "React Three Fiber bindings around Jolt Physics from the pmndrs ecosystem.",
    bestFor: "Testing a modern rigid-body alternative in R3F projects.",
    tags: ["r3f", "physics", "jolt", "pmndrs"]
  },
  {
    id: "three-to-cannon",
    title: "three-to-cannon",
    url: "https://github.com/pmndrs/three-to-cannon",
    github: "https://github.com/pmndrs/three-to-cannon",
    category: "Gaming & Physics",
    field: "Physics shapes",
    kind: "library",
    status: "production",
    description:
      "Convert Three.js geometry into Cannon-compatible physics shapes.",
    bestFor: "Generating collision proxies from meshes in older Cannon and use-cannon workflows.",
    tags: ["physics", "cannon", "geometry", "pmndrs"]
  },
  {
    id: "oimo-js",
    title: "Oimo.js",
    url: "https://lo-th.github.io/Oimo.js/",
    github: "https://github.com/lo-th/Oimo.js",
    category: "Gaming & Physics",
    field: "3D physics",
    kind: "library",
    status: "learning",
    description:
      "Lightweight JavaScript rigid-body physics engine with classic Three.js demos.",
    bestFor: "Simple physics sketches and historical browser physics patterns.",
    tags: ["physics", "three.js", "rigid-body", "demos"],
    previewUrl: "https://lo-th.github.io/Oimo.js/"
  },
  {
    id: "box2d-wasm",
    title: "box2d-wasm",
    url: "https://birch-san.github.io/box2d-wasm/",
    github: "https://github.com/Birch-san/box2d-wasm",
    category: "Gaming & Physics",
    field: "2D physics",
    kind: "library",
    status: "production",
    description:
      "WebAssembly Box2D bindings for browser games and interactive simulations.",
    bestFor: "2D collision, platformer mechanics, and hybrid 2.5D gameplay under R3F scenes.",
    tags: ["physics", "box2d", "wasm", "2d"],
    previewUrl: "https://birch-san.github.io/box2d-wasm/"
  },
  {
    id: "planck-js",
    title: "Planck.js",
    url: "https://piqnt.com/planck.js/",
    github: "https://github.com/piqnt/planck.js",
    category: "Gaming & Physics",
    field: "2D physics",
    kind: "library",
    status: "production",
    description:
      "JavaScript rewrite of Box2D with a friendly API and browser demos.",
    bestFor: "Fast 2D gameplay physics, collision experiments, and testbed learning.",
    tags: ["physics", "box2d", "2d", "games"],
    previewUrl: "https://piqnt.com/planck.js/"
  },
  {
    id: "p2-es",
    title: "p2-es",
    url: "https://github.com/pmndrs/p2-es",
    github: "https://github.com/pmndrs/p2-es",
    category: "Gaming & Physics",
    field: "2D physics",
    kind: "library",
    status: "production",
    description:
      "Modern maintained fork of p2.js for 2D rigid body physics.",
    bestFor: "2D collision and constraints in browser games with pmndrs-adjacent maintenance.",
    tags: ["physics", "2d", "collision", "pmndrs"]
  },
  {
    id: "navmesh",
    title: "navmesh",
    url: "https://github.com/mikewesthad/navmesh",
    github: "https://github.com/mikewesthad/navmesh",
    category: "Gaming & Physics",
    field: "Navigation",
    kind: "library",
    status: "production",
    description:
      "2D navigation mesh pathfinding library with useful polygon-path examples.",
    bestFor: "Top-down movement, RTS-like agents, and level navigation prototypes.",
    tags: ["navigation", "pathfinding", "navmesh", "ai"]
  },
  {
    id: "behavior3js",
    title: "Behavior3JS",
    url: "https://github.com/behavior3/behavior3js",
    github: "https://github.com/behavior3/behavior3js",
    category: "Gaming & Physics",
    field: "Game AI",
    kind: "library",
    status: "learning",
    description:
      "Behavior tree implementation for JavaScript games and simulations.",
    bestFor: "NPC decision logic, stateful agent behavior, and readable AI experiments.",
    tags: ["ai", "behavior-tree", "npc", "games"]
  },
  {
    id: "fluent-behavior-tree",
    title: "Fluent Behavior Tree",
    url: "https://github.com/codecapers/Fluent-Behaviour-Tree",
    github: "https://github.com/codecapers/Fluent-Behaviour-Tree",
    category: "Gaming & Physics",
    field: "Game AI",
    kind: "library",
    status: "production",
    description:
      "Composable behavior tree library for JavaScript and TypeScript.",
    bestFor: "Readable AI behavior definitions for agents, enemies, and scripted interactions.",
    tags: ["ai", "behavior-tree", "typescript", "npc"]
  },
  {
    id: "ape-ecs",
    title: "Ape-ECS",
    url: "https://github.com/fritzy/ape-ecs",
    github: "https://github.com/fritzy/ape-ecs",
    category: "Gaming & Physics",
    field: "ECS",
    kind: "library",
    status: "production",
    description:
      "Entity component system for JavaScript with queries, components, and simulation-oriented structure.",
    bestFor: "Traditional ECS architecture in browser games and large interactive scenes.",
    tags: ["ecs", "entities", "simulation", "games"]
  },
  {
    id: "becsy",
    title: "Becsy",
    url: "https://lastolivegames.github.io/becsy/",
    github: "https://github.com/LastOliveGames/becsy",
    category: "Gaming & Physics",
    field: "ECS",
    kind: "library",
    status: "production",
    description:
      "TypeScript ECS focused on performance, correctness, and structured simulation code.",
    bestFor: "Large entity counts, simulation-heavy games, and typed ECS experiments.",
    tags: ["ecs", "typescript", "performance", "simulation"],
    previewUrl: "https://lastolivegames.github.io/becsy/"
  },
  {
    id: "ecsy",
    title: "ECSY",
    url: "https://ecsyjs.github.io/ecsy/",
    github: "https://github.com/ecsyjs/ecsy",
    category: "Gaming & Physics",
    field: "ECS",
    kind: "library",
    status: "learning",
    description:
      "Mozilla-originated entity component system used in WebXR-era experiments.",
    bestFor: "Studying ECS patterns for immersive and browser game projects.",
    tags: ["ecs", "webxr", "mozilla", "architecture"],
    previewUrl: "https://ecsyjs.github.io/ecsy/"
  },
  {
    id: "geotic",
    title: "Geotic",
    url: "https://github.com/ddmills/geotic",
    github: "https://github.com/ddmills/geotic",
    category: "Gaming & Physics",
    field: "ECS",
    kind: "library",
    status: "learning",
    description:
      "Simple ECS focused on ergonomic JavaScript entity modeling.",
    bestFor: "Small games that need ECS concepts without a heavy engine.",
    tags: ["ecs", "javascript", "entities", "architecture"]
  },
  {
    id: "mavonengine",
    title: "MavonEngine",
    url: "https://mavonengine.github.io/",
    github: "https://github.com/MavonEngine/Core",
    category: "Gaming & Physics",
    field: "R3F game engine",
    kind: "library",
    status: "experimental",
    description:
      "Opinionated React Three Fiber game-engine layer with scenes, input, physics-oriented structure, and examples.",
    bestFor: "Starting actual R3F games instead of one-off demos.",
    tags: ["r3f", "game-engine", "physics", "controls"],
    previewUrl: "https://mavonengine.github.io/"
  },
  {
    id: "react-three-game",
    title: "react-three-game",
    url: "https://github.com/prnthh/react-three-game",
    github: "https://github.com/prnthh/react-three-game",
    category: "Gaming & Physics",
    field: "R3F game framework",
    kind: "library",
    status: "experimental",
    description:
      "Composable helpers for building game loops, entities, input, and scene architecture in React Three Fiber.",
    bestFor: "Turning R3F demos into maintainable game-like projects.",
    tags: ["r3f", "games", "framework", "entities"]
  },
  {
    id: "react-game-engine",
    title: "React Game Engine",
    url: "https://github.com/bberak/react-game-engine",
    github: "https://github.com/bberak/react-game-engine",
    category: "Gaming & Physics",
    field: "React game loops",
    kind: "library",
    status: "learning",
    description:
      "Older but useful React entity and game-loop library.",
    bestFor: "Understanding React-driven update loops, systems, and entity architecture.",
    tags: ["react", "game-loop", "entities", "architecture"]
  },
  {
    id: "replay-js",
    title: "Replay",
    url: "https://replay.js.org/",
    github: "https://github.com/edbentley/replay",
    category: "Gaming & Physics",
    field: "Web game framework",
    kind: "library",
    status: "production",
    description:
      "Cross-platform JavaScript game framework with deterministic game patterns.",
    bestFor: "Borrowing browser game architecture ideas that can transfer into R3F.",
    tags: ["games", "typescript", "deterministic", "canvas"],
    previewUrl: "https://replay.js.org/"
  },
  {
    id: "trystero",
    title: "Trystero",
    url: "https://github.com/dmotz/trystero",
    github: "https://github.com/dmotz/trystero",
    category: "Gaming & Physics",
    field: "P2P networking",
    kind: "library",
    status: "production",
    description:
      "Peer-to-peer WebRTC library with multiple signaling backends.",
    bestFor: "Small multiplayer rooms, co-presence, collaborative 3D spaces, and quick network experiments.",
    tags: ["webrtc", "p2p", "multiplayer", "networking"]
  },
  {
    id: "lance-gg",
    title: "Lance.gg",
    url: "https://lance-gg.github.io/",
    github: "https://github.com/lance-gg/lance",
    category: "Gaming & Physics",
    field: "Realtime networking",
    kind: "library",
    status: "learning",
    description:
      "Multiplayer game networking engine with client prediction and synchronization concepts.",
    bestFor: "Learning authoritative multiplayer architecture before implementing your own stack.",
    tags: ["networking", "multiplayer", "prediction", "sync"],
    previewUrl: "https://lance-gg.github.io/"
  },
  {
    id: "netplayjs",
    title: "NetplayJS",
    url: "https://netplayjs.org/",
    github: "https://github.com/rameshvarun/netplayjs",
    category: "Gaming & Physics",
    field: "Rollback networking",
    kind: "library",
    status: "production",
    description:
      "JavaScript rollback netcode library for deterministic browser games.",
    bestFor: "Fighting-game, arcade, and synchronized multiplayer experiments.",
    tags: ["rollback", "networking", "multiplayer", "deterministic"],
    previewUrl: "https://netplayjs.org/"
  },
  {
    id: "game-ai-pro-online",
    title: "Game AI Pro Online",
    url: "https://www.gameaipro.com/",
    category: "Learning & Theory",
    field: "Game AI",
    kind: "reference",
    status: "learning",
    description:
      "Free online chapters from the Game AI Pro series covering agents, tactics, steering, and decision systems.",
    bestFor: "Serious AI design ideas for game characters and simulations.",
    tags: ["game-ai", "npc", "steering", "books"],
    previewUrl: "https://www.gameaipro.com/"
  },
  {
    id: "game-programming-patterns",
    title: "Game Programming Patterns",
    url: "https://gameprogrammingpatterns.com/",
    github: "https://github.com/munificent/game-programming-patterns",
    category: "Learning & Theory",
    field: "Game architecture",
    kind: "course",
    status: "learning",
    description:
      "Free online book covering game loops, components, spatial partitioning, event queues, and more.",
    bestFor: "Architecture decisions before an R3F game grows beyond a prototype.",
    tags: ["architecture", "patterns", "game-loop", "ecs"],
    previewUrl: "https://gameprogrammingpatterns.com/"
  },
  {
    id: "third-room",
    title: "Third Room",
    url: "https://thirdroom.io/",
    github: "https://github.com/matrix-org/thirdroom",
    category: "XR, AR & VR",
    field: "Social XR",
    kind: "showcase",
    status: "experimental",
    description:
      "Open social 3D/WebXR world built around Matrix and web technologies.",
    bestFor: "Architecture reference for networked 3D rooms, avatars, and spatial presence.",
    tags: ["webxr", "social", "matrix", "multiplayer"],
    previewUrl: "https://thirdroom.io/"
  },
  {
    id: "mozilla-hubs",
    title: "Mozilla Hubs",
    url: "https://github.com/mozilla/hubs",
    github: "https://github.com/mozilla/hubs",
    category: "XR, AR & VR",
    field: "Social VR",
    kind: "showcase",
    status: "learning",
    description:
      "Large open-source WebXR social-space codebase, valuable as a reference even after the hosted product era.",
    bestFor: "Studying rooms, avatars, WebRTC, spatial UX, and production-scale immersive web code.",
    tags: ["webxr", "social-vr", "avatars", "webrtc"]
  },
  {
    id: "coconut-xr-koestlich",
    title: "@coconut-xr/koestlich",
    url: "https://github.com/coconut-xr/koestlich",
    github: "https://github.com/coconut-xr/koestlich",
    category: "XR, AR & VR",
    field: "Spatial UI",
    kind: "library",
    status: "production",
    description:
      "Spatial UI primitives for React Three Fiber and WebXR interfaces.",
    bestFor: "Building actual XR panels, controls, and 3D app interfaces.",
    tags: ["r3f", "spatial-ui", "webxr", "ui"]
  },
  {
    id: "ratk",
    title: "RATK",
    url: "https://github.com/ratk-org/ratk",
    github: "https://github.com/ratk-org/ratk",
    category: "XR, AR & VR",
    field: "XR toolkit",
    kind: "library",
    status: "experimental",
    description:
      "Reality Accelerator Toolkit for WebXR interaction patterns and prototyping.",
    bestFor: "Controller, hand, and object-interaction experiments in immersive scenes.",
    tags: ["webxr", "toolkit", "interaction", "prototyping"]
  },
  {
    id: "handy-js",
    title: "Handy.js",
    url: "https://github.com/stspanho/handy.js",
    github: "https://github.com/stspanho/handy.js",
    category: "XR, AR & VR",
    field: "Hand tracking",
    kind: "library",
    status: "experimental",
    description:
      "WebXR hand-tracking helper library for hand input experiments.",
    bestFor: "Testing hand-joint and gesture workflows in immersive web scenes.",
    tags: ["webxr", "hands", "tracking", "input"]
  },
  {
    id: "r3f-form",
    title: "r3f-form",
    url: "https://github.com/jmberesford/r3f-form",
    github: "https://github.com/jmberesford/r3f-form",
    category: "Interaction & UI",
    field: "3D forms",
    kind: "library",
    status: "experimental",
    description:
      "Form controls rendered inside React Three Fiber scenes.",
    bestFor: "Diegetic UI, debug panels, in-world forms, and spatial input controls.",
    tags: ["r3f", "forms", "ui", "spatial"]
  },
  {
    id: "mr-js",
    title: "mr.js",
    url: "https://mrjs.io/",
    github: "https://github.com/Volumetrics-io/mrjs",
    category: "XR, AR & VR",
    field: "Spatial web",
    kind: "library",
    status: "experimental",
    description:
      "HTML-like spatial web framework for mixed reality interfaces.",
    bestFor: "Thinking beyond canvas-only XR into spatial DOM-style authoring.",
    tags: ["webxr", "spatial-web", "mixed-reality", "ui"],
    previewUrl: "https://mrjs.io/"
  },
  {
    id: "jsar-runtime",
    title: "JSAR Runtime",
    url: "https://github.com/M-CreativeLab/jsar-runtime",
    github: "https://github.com/M-CreativeLab/jsar-runtime",
    category: "XR, AR & VR",
    field: "Spatial runtime",
    kind: "tool",
    status: "experimental",
    description:
      "Spatial computing runtime exploring browser-like XR app execution.",
    bestFor: "Future-facing research into XR runtimes, spatial browsing, and app containers.",
    tags: ["xr", "runtime", "spatial-computing", "browser"]
  },
  {
    id: "xr-blocks",
    title: "XR Blocks",
    url: "https://xrblocks.github.io/gem/",
    github: "https://github.com/google/xrblocks",
    category: "XR, AR & VR",
    field: "XR prototyping",
    kind: "tool",
    status: "experimental",
    description:
      "Google research project for building XR experiences with block-based tools.",
    bestFor: "Approachable XR authoring ideas, education workflows, and rapid spatial sketches.",
    tags: ["webxr", "education", "blocks", "prototyping"],
    previewUrl: "https://xrblocks.github.io/gem/"
  },
  {
    id: "webxr-dom-overlays",
    title: "WebXR DOM Overlays Module",
    url: "https://immersive-web.github.io/dom-overlays/",
    github: "https://github.com/immersive-web/dom-overlays",
    category: "XR, AR & VR",
    field: "WebXR UI standard",
    kind: "reference",
    status: "core",
    description:
      "Spec for DOM UI overlays inside immersive AR sessions.",
    bestFor: "Mixing React DOM controls with AR experiences.",
    tags: ["webxr", "dom", "ar", "ui"],
    previewUrl: "https://immersive-web.github.io/dom-overlays/"
  },
  {
    id: "resonance-audio-web",
    title: "Resonance Audio Web SDK",
    url: "https://resonance-audio.github.io/resonance-audio/",
    github: "https://github.com/resonance-audio/resonance-audio-web-sdk",
    category: "Gaming & Physics",
    field: "Spatial audio",
    kind: "library",
    status: "learning",
    description:
      "Google spatial audio SDK for Web Audio, ambisonics, and room-aware rendering.",
    bestFor: "Learning positional sound design for XR, games, and 3D web spaces.",
    tags: ["audio", "spatial-audio", "web-audio", "xr"],
    previewUrl: "https://resonance-audio.github.io/resonance-audio/"
  },
  {
    id: "omnitone",
    title: "Omnitone",
    url: "https://googlechrome.github.io/omnitone/",
    github: "https://github.com/GoogleChrome/omnitone",
    category: "Gaming & Physics",
    field: "Ambisonic audio",
    kind: "library",
    status: "learning",
    description:
      "Ambisonic spatial audio renderer for Web Audio.",
    bestFor: "360 video, sound fields, XR audio references, and spatial music experiments.",
    tags: ["audio", "ambisonics", "web-audio", "xr"],
    previewUrl: "https://googlechrome.github.io/omnitone/"
  },
  {
    id: "jsambisonics",
    title: "JSAmbisonics",
    url: "https://github.com/polarch/JSAmbisonics",
    github: "https://github.com/polarch/JSAmbisonics",
    category: "Gaming & Physics",
    field: "Spatial audio",
    kind: "library",
    status: "learning",
    description:
      "JavaScript ambisonic audio processing toolkit.",
    bestFor: "Advanced XR sound design, spatial audio experiments, and research prototypes.",
    tags: ["audio", "ambisonics", "spatial", "research"]
  },
  {
    id: "mdn-web-audio-spatialization",
    title: "MDN Web Audio Spatialization",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics",
    github: "https://github.com/mdn/webaudio-examples",
    category: "Learning & Theory",
    field: "Spatial audio",
    kind: "course",
    status: "learning",
    description:
      "Practical browser spatial audio primer using PannerNode and Web Audio.",
    bestFor: "Adding positional sound to R3F games without heavy dependencies.",
    tags: ["audio", "web-audio", "panner", "tutorial"]
  },
  {
    id: "three-d-force-graph",
    title: "3d-force-graph",
    url: "https://vasturiano.github.io/3d-force-graph/",
    github: "https://github.com/vasturiano/3d-force-graph",
    category: "Data, Maps & AI",
    field: "Graph visualization",
    kind: "library",
    status: "production",
    description:
      "Three.js-powered force-directed graph visualization with nodes, links, labels, and interaction.",
    bestFor: "Knowledge graphs, relationship explorers, and 3D network maps.",
    tags: ["graphs", "data-viz", "three.js", "force"],
    previewUrl: "https://vasturiano.github.io/3d-force-graph/"
  },
  {
    id: "globe-gl",
    title: "globe.gl",
    url: "https://globe.gl/",
    github: "https://github.com/vasturiano/globe.gl",
    category: "Data, Maps & AI",
    field: "Globe visualization",
    kind: "library",
    status: "production",
    description:
      "Standalone Three.js globe component with points, arcs, hex bins, paths, and animated data layers.",
    bestFor: "Geographic storytelling and data-globe prototypes outside a full R3F stack.",
    tags: ["globe", "maps", "data-viz", "three.js"],
    previewUrl: "https://globe.gl/"
  },
  {
    id: "three-globe",
    title: "three-globe",
    url: "https://vasturiano.github.io/three-globe/",
    github: "https://github.com/vasturiano/three-globe",
    category: "Data, Maps & AI",
    field: "Three.js globe",
    kind: "library",
    status: "production",
    description:
      "Three.js object for globe visualizations, useful when you want lower-level control than wrappers provide.",
    bestFor: "Custom geographic layers inside bespoke Three.js or R3F scenes.",
    tags: ["three.js", "globe", "maps", "data"],
    previewUrl: "https://vasturiano.github.io/three-globe/"
  },
  {
    id: "geo-three",
    title: "geo-three",
    url: "https://tentone.github.io/geo-three/",
    github: "https://github.com/tentone/geo-three",
    category: "Data, Maps & AI",
    field: "3D maps",
    kind: "library",
    status: "production",
    description:
      "Geographic tile and map rendering utilities for Three.js.",
    bestFor: "Map-tile terrain, geographic viewers, and custom spatial data scenes.",
    tags: ["maps", "tiles", "terrain", "three.js"],
    previewUrl: "https://tentone.github.io/geo-three/"
  },
  {
    id: "threepipe",
    title: "ThreePipe",
    url: "https://threepipe.org/",
    github: "https://github.com/repalash/threepipe",
    category: "Ecosystem Libraries",
    field: "Viewer framework",
    kind: "library",
    status: "production",
    description:
      "Three.js framework for model viewers, plugins, asset loading, and production rendering pipelines.",
    bestFor: "Product viewers and configurable 3D applications that need a plugin-oriented architecture.",
    tags: ["viewer", "three.js", "plugins", "pipeline"],
    previewUrl: "https://threepipe.org/"
  },
  {
    id: "typegpu",
    title: "TypeGPU",
    url: "https://docs.swmansion.com/TypeGPU/",
    github: "https://github.com/software-mansion/TypeGPU",
    category: "Foundations",
    field: "Typed WebGPU",
    kind: "library",
    status: "experimental",
    description:
      "TypeScript-first WebGPU abstraction focused on type-safe GPU resources and shaders.",
    bestFor: "R3F developers exploring future WebGPU pipelines and lower-level GPU code.",
    tags: ["webgpu", "typescript", "gpu", "shaders"],
    previewUrl: "https://docs.swmansion.com/TypeGPU/"
  },
  {
    id: "gpu-curtains",
    title: "gpu-curtains",
    url: "https://martinlaxenaire.github.io/gpu-curtains/",
    github: "https://github.com/martinlaxenaire/gpu-curtains",
    category: "Web Experiences",
    field: "WebGPU effects",
    kind: "library",
    status: "creative",
    description:
      "WebGPU rendering and effects library by the Curtains.js author.",
    bestFor: "DOM-integrated WebGPU planes, scroll effects, displacement, and creative site transitions.",
    tags: ["webgpu", "dom", "effects", "creative-coding"],
    previewUrl: "https://martinlaxenaire.github.io/gpu-curtains/"
  },
  {
    id: "webgpu-utils",
    title: "webgpu-utils",
    url: "https://greggman.github.io/webgpu-utils/",
    github: "https://github.com/greggman/webgpu-utils",
    category: "Foundations",
    field: "WebGPU helpers",
    kind: "library",
    status: "production",
    description:
      "Small helpers for buffers, bind groups, typed arrays, and common WebGPU setup.",
    bestFor: "Reducing boilerplate in raw WebGPU prototypes before integrating with higher-level renderers.",
    tags: ["webgpu", "utilities", "buffers", "gpu"],
    previewUrl: "https://greggman.github.io/webgpu-utils/"
  },
  {
    id: "wgpu-matrix",
    title: "wgpu-matrix",
    url: "https://wgpu-matrix.org/",
    github: "https://github.com/greggman/wgpu-matrix",
    category: "Foundations",
    field: "GPU math",
    kind: "library",
    status: "production",
    description:
      "Matrix and vector math helpers aimed at WebGPU examples and engines.",
    bestFor: "Low-level WebGPU experiments and shader math support.",
    tags: ["webgpu", "math", "matrices", "utilities"],
    previewUrl: "https://wgpu-matrix.org/"
  },
  {
    id: "hoverstates",
    title: "Hoverstat.es",
    url: "https://www.hoverstat.es/",
    category: "Showcases & Inspiration",
    field: "Website archive",
    kind: "showcase",
    status: "creative",
    description:
      "Curated archive of interaction-heavy, art-directed websites with strong visual references.",
    bestFor: "Finding motion, layout, and interaction references before building a WebGL site.",
    tags: ["inspiration", "websites", "interaction", "archive"],
    previewUrl: "https://www.hoverstat.es/"
  },
  {
    id: "refs-gallery",
    title: "Refs Gallery",
    url: "https://refs.gallery/",
    category: "Showcases & Inspiration",
    field: "Reference gallery",
    kind: "showcase",
    status: "creative",
    description:
      "Visual reference gallery for polished digital design, web art, and interaction patterns.",
    bestFor: "Building taste boards for premium 3D and motion-led web experiences.",
    tags: ["references", "design", "websites", "inspiration"],
    previewUrl: "https://refs.gallery/"
  },
  {
    id: "godly-website",
    title: "Godly",
    url: "https://godly.website/",
    category: "Showcases & Inspiration",
    field: "Website inspiration",
    kind: "showcase",
    status: "creative",
    description:
      "Curated gallery of high-end web design and interactive sites.",
    bestFor: "Scanning current visual directions for product, agency, and immersive sites.",
    tags: ["inspiration", "web-design", "gallery", "creative"],
    previewUrl: "https://godly.website/"
  },
  {
    id: "the-fwa",
    title: "The FWA",
    url: "https://thefwa.com/",
    category: "Showcases & Inspiration",
    field: "Award archive",
    kind: "showcase",
    status: "creative",
    description:
      "Long-running award archive for experimental, polished, and production-grade digital experiences.",
    bestFor: "Researching best-in-class interactive work and agency-level production values.",
    tags: ["awards", "webgl", "interactive", "archive"],
    previewUrl: "https://thefwa.com/"
  },
  {
    id: "gsap-showcase",
    title: "GSAP Showcase",
    url: "https://gsap.com/showcase/",
    category: "Showcases & Inspiration",
    field: "Motion showcase",
    kind: "showcase",
    status: "creative",
    description:
      "Showcase of advanced web animation and scroll-driven interaction work.",
    bestFor: "Studying motion language that pairs well with R3F, ScrollTrigger, and editorial 3D sites.",
    tags: ["animation", "motion", "gsap", "websites"],
    previewUrl: "https://gsap.com/showcase/"
  },
  {
    id: "chrome-experiments",
    title: "Chrome Experiments",
    url: "https://experiments.withgoogle.com/collection/chrome",
    category: "Showcases & Inspiration",
    field: "Experiment archive",
    kind: "showcase",
    status: "creative",
    description:
      "Historic and ongoing archive of browser experiments, many using WebGL, Web Audio, and interactive graphics.",
    bestFor: "Finding durable ideas from the experimental web canon.",
    tags: ["experiments", "webgl", "google", "archive"],
    previewUrl: "https://experiments.withgoogle.com/collection/chrome"
  },
  {
    id: "has-studio",
    title: "HAS Studio",
    url: "https://has.studio/",
    category: "Showcases & Inspiration",
    field: "Creative studio",
    kind: "showcase",
    status: "creative",
    description:
      "Creative technology studio with refined WebGL, motion, and digital product work.",
    bestFor: "Reference for polished interactive direction and studio-grade execution.",
    tags: ["studio", "webgl", "creative-tech", "portfolio"],
    previewUrl: "https://has.studio/"
  },
  {
    id: "fourteen-islands",
    title: "14islands",
    url: "https://www.14islands.com/",
    category: "Showcases & Inspiration",
    field: "Creative studio",
    kind: "showcase",
    status: "creative",
    description:
      "Studio known for immersive websites, WebGL craft, and experimental interfaces.",
    bestFor: "Studying how 3D details can support brand and product stories.",
    tags: ["studio", "webgl", "r3f", "interactive"],
    previewUrl: "https://www.14islands.com/"
  },
  {
    id: "monogrid",
    title: "Monogrid",
    url: "https://www.monogrid.com/",
    category: "Showcases & Inspiration",
    field: "Creative studio",
    kind: "showcase",
    status: "creative",
    description:
      "Interactive studio producing high-end 3D, WebGL, and experiential digital work.",
    bestFor: "Reference for brand worlds, product experiences, and cinematic web presentation.",
    tags: ["studio", "3d", "webgl", "experiential"],
    previewUrl: "https://www.monogrid.com/"
  },
  {
    id: "b-reel",
    title: "B-Reel",
    url: "https://www.b-reel.com/",
    category: "Showcases & Inspiration",
    field: "Creative studio",
    kind: "showcase",
    status: "creative",
    description:
      "Global creative studio with strong interactive, film, product, and campaign work.",
    bestFor: "Understanding how interactive 3D fits broader campaign and brand ecosystems.",
    tags: ["studio", "interactive", "brand", "creative-tech"],
    previewUrl: "https://www.b-reel.com/"
  },
  {
    id: "future-deluxe",
    title: "FutureDeluxe",
    url: "https://futuredeluxe.com/",
    category: "Showcases & Inspiration",
    field: "Design studio",
    kind: "showcase",
    status: "creative",
    description:
      "Design and moving-image studio with premium visual systems, CGI, and interactive references.",
    bestFor: "Art direction, material taste, and motion references for product-led 3D sites.",
    tags: ["studio", "cgi", "motion", "art-direction"],
    previewUrl: "https://futuredeluxe.com/"
  },
  {
    id: "rally-interactive",
    title: "Rally Interactive",
    url: "https://rallyinteractive.com/",
    category: "Showcases & Inspiration",
    field: "Interactive studio",
    kind: "showcase",
    status: "creative",
    description:
      "Studio portfolio with strong interaction, product, and experiential web work.",
    bestFor: "Studying refined interaction pacing and production-quality polish.",
    tags: ["studio", "interaction", "websites", "portfolio"],
    previewUrl: "https://rallyinteractive.com/"
  },
  {
    id: "darkroom-engineering",
    title: "darkroom.engineering",
    url: "https://darkroom.engineering/",
    category: "Showcases & Inspiration",
    field: "Development studio",
    kind: "showcase",
    status: "creative",
    description:
      "Engineering-led creative studio with high-end motion, WebGL, and interaction work.",
    bestFor: "Reference for crisp implementation and modern creative development craft.",
    tags: ["studio", "engineering", "webgl", "motion"],
    previewUrl: "https://darkroom.engineering/"
  },
  {
    id: "rezo-zero",
    title: "Rezo Zero",
    url: "https://www.rezo-zero.com/",
    category: "Showcases & Inspiration",
    field: "Creative studio",
    kind: "showcase",
    status: "creative",
    description:
      "French creative studio with polished interactive, editorial, and WebGL-forward websites.",
    bestFor: "Editorial interaction, portfolio language, and tasteful 3D integration.",
    tags: ["studio", "editorial", "webgl", "portfolio"],
    previewUrl: "https://www.rezo-zero.com/"
  },
  {
    id: "locomotive",
    title: "Locomotive",
    url: "https://locomotive.ca/",
    category: "Showcases & Inspiration",
    field: "Digital agency",
    kind: "showcase",
    status: "creative",
    description:
      "Award-winning digital agency with rich scrolling, motion, and interactive web experiences.",
    bestFor: "Pairing 3D moments with dense editorial and brand systems.",
    tags: ["agency", "scroll", "motion", "interactive"],
    previewUrl: "https://locomotive.ca/"
  },
  {
    id: "ykob-threejs-experiments",
    title: "ykob Three.js Experiments",
    url: "https://ykob.github.io/",
    github: "https://github.com/ykob",
    category: "Showcases & Inspiration",
    field: "Three.js experiments",
    kind: "showcase",
    status: "creative",
    description:
      "Archive of elegant Three.js experiments, particles, interactions, and shader studies.",
    bestFor: "Compact references for procedural motion and visual coding ideas.",
    tags: ["three.js", "experiments", "particles", "shaders"],
    previewUrl: "https://ykob.github.io/"
  },
  {
    id: "clicktorelease",
    title: "Clicktorelease",
    url: "https://www.clicktorelease.com/",
    github: "https://github.com/spite",
    category: "Showcases & Inspiration",
    field: "WebGL experiments",
    kind: "showcase",
    status: "creative",
    description:
      "Jaume Sanchez Elias archive of influential WebGL, Three.js, and interactive graphics experiments.",
    bestFor: "Studying practical creative coding patterns from early and modern WebGL work.",
    tags: ["webgl", "three.js", "experiments", "creative-coding"],
    previewUrl: "https://www.clicktorelease.com/"
  },
  {
    id: "spite-codevember-2021",
    title: "Spite Codevember 2021",
    url: "https://spite.github.io/codevember-2021/",
    github: "https://github.com/spite/codevember-2021",
    category: "Showcases & Inspiration",
    field: "Daily WebGL sketches",
    kind: "showcase",
    status: "creative",
    description:
      "Daily creative WebGL sketch collection with shader, particle, geometry, and postprocessing ideas.",
    bestFor: "Quick visual idea mining and compact implementation references.",
    tags: ["codevember", "webgl", "sketches", "shaders"],
    previewUrl: "https://spite.github.io/codevember-2021/"
  },
  {
    id: "tim-rodenbroeker",
    title: "Tim Rodenbroeker",
    url: "https://timrodenbroeker.de/",
    category: "Showcases & Inspiration",
    field: "Creative coding educator",
    kind: "showcase",
    status: "creative",
    description:
      "Artist and educator focused on generative design, creative coding, and visual systems.",
    bestFor: "Generative design taste, teaching references, and procedural visual language.",
    tags: ["generative", "education", "creative-coding", "design"],
    previewUrl: "https://timrodenbroeker.de/"
  },
  {
    id: "inconvergent",
    title: "Inconvergent",
    url: "https://inconvergent.net/",
    category: "Showcases & Inspiration",
    field: "Generative art",
    kind: "showcase",
    status: "creative",
    description:
      "Anders Hoff archive of generative algorithms, plotted forms, and computational aesthetics.",
    bestFor: "Deep visual ideas for procedural geometry and algorithmic drawing.",
    tags: ["generative-art", "algorithms", "procedural", "drawing"],
    previewUrl: "https://inconvergent.net/"
  },
  {
    id: "raven-kwok",
    title: "Raven Kwok",
    url: "https://ravenkwok.com/",
    category: "Showcases & Inspiration",
    field: "Generative art",
    kind: "showcase",
    status: "creative",
    description:
      "Artist portfolio of algorithmic visuals, music videos, installations, and generative systems.",
    bestFor: "High-density procedural motion and installation-scale visual references.",
    tags: ["generative-art", "motion", "installation", "visuals"],
    previewUrl: "https://ravenkwok.com/"
  },
  {
    id: "nicolas-barradeau",
    title: "Nicolas Barradeau",
    url: "https://barradeau.com/",
    github: "https://github.com/nicoptere",
    category: "Showcases & Inspiration",
    field: "Creative coding",
    kind: "showcase",
    status: "creative",
    description:
      "Artist and developer archive of WebGL, procedural geometry, and graphics experiments.",
    bestFor: "Mining elegant code-art ideas and small Three.js experiments.",
    tags: ["creative-coding", "webgl", "experiments", "generative"],
    previewUrl: "https://barradeau.com/"
  },
  {
    id: "makio135",
    title: "Makio135",
    url: "https://makio135.com/",
    github: "https://github.com/makio135",
    category: "Showcases & Inspiration",
    field: "Interactive experiments",
    kind: "showcase",
    status: "creative",
    description:
      "Interactive developer portfolio and experiments with WebGL, particles, and playful motion.",
    bestFor: "Small interaction ideas and lively visual treatments.",
    tags: ["webgl", "experiments", "particles", "portfolio"],
    previewUrl: "https://makio135.com/"
  },
  {
    id: "marpi-studio",
    title: "Marpi Studio",
    url: "https://marpi.studio/",
    github: "https://github.com/marpi",
    category: "Showcases & Inspiration",
    field: "Interactive art",
    kind: "showcase",
    status: "creative",
    description:
      "Marpi's interactive art, installations, experiments, and 3D web work.",
    bestFor: "Playful realtime visuals, particle worlds, and installation-grade interaction.",
    tags: ["interactive-art", "particles", "webgl", "installation"],
    previewUrl: "https://marpi.studio/"
  },
  {
    id: "joshua-davis",
    title: "Joshua Davis",
    url: "https://joshuadavis.com/",
    category: "Showcases & Inspiration",
    field: "Generative art",
    kind: "showcase",
    status: "creative",
    description:
      "Pioneer of generative and computational design with a long-running visual archive.",
    bestFor: "Historical and contemporary generative design references.",
    tags: ["generative-art", "design", "procedural", "history"],
    previewUrl: "https://joshuadavis.com/"
  },
  {
    id: "land-lines",
    title: "Land Lines",
    url: "https://lines.chromeexperiments.com/",
    category: "Showcases & Inspiration",
    field: "Interactive experiment",
    kind: "showcase",
    status: "creative",
    description:
      "Google Chrome Experiment that lets users draw gestures to explore satellite imagery.",
    bestFor: "Reference for data, interaction, and visual search concepts.",
    tags: ["google", "maps", "interaction", "experiment"],
    previewUrl: "https://lines.chromeexperiments.com/"
  },
  {
    id: "google-scanned-objects",
    title: "Google Scanned Objects",
    url: "https://research.google/resources/datasets/scanned-objects-google-research/",
    category: "Asset Pipeline",
    field: "Free 3D dataset",
    kind: "asset",
    status: "production",
    description:
      "Large dataset of scanned household objects for research and prototyping.",
    bestFor: "Real-world object references, dataset experiments, and asset prototyping.",
    tags: ["3d-assets", "scans", "dataset", "objects"],
    previewUrl: "https://research.google/resources/datasets/scanned-objects-google-research/"
  },
  {
    id: "amazon-berkeley-objects",
    title: "Amazon Berkeley Objects",
    url: "https://amazon-berkeley-objects.s3.amazonaws.com/index.html",
    category: "Asset Pipeline",
    field: "Free 3D dataset",
    kind: "asset",
    status: "production",
    description:
      "Amazon/Berkeley dataset of product object scans, metadata, and imagery.",
    bestFor: "Object-recognition, ecommerce, and 3D product prototype datasets.",
    tags: ["3d-assets", "dataset", "objects", "products"],
    previewUrl: "https://amazon-berkeley-objects.s3.amazonaws.com/index.html"
  },
  {
    id: "objaverse-xl",
    title: "Objaverse XL",
    url: "https://objaverse.allenai.org/",
    github: "https://github.com/allenai/objaverse-xl",
    category: "Asset Pipeline",
    field: "Massive 3D dataset",
    kind: "asset",
    status: "production",
    description:
      "Massive open dataset of 3D objects used for research into 3D understanding and generation.",
    bestFor: "Large-scale asset research, AI-era 3D workflows, and dataset exploration.",
    tags: ["3d-assets", "dataset", "ai", "research"],
    previewUrl: "https://objaverse.allenai.org/"
  },
  {
    id: "thingi10k",
    title: "Thingi10K",
    url: "https://ten-thousand-models.appspot.com/",
    category: "Asset Pipeline",
    field: "Mesh dataset",
    kind: "asset",
    status: "learning",
    description:
      "Dataset of 10,000 3D-printable models useful for geometry processing research.",
    bestFor: "Testing mesh cleanup, decimation, repair, and conversion pipelines.",
    tags: ["meshes", "dataset", "3d-printing", "geometry"],
    previewUrl: "https://ten-thousand-models.appspot.com/"
  },
  {
    id: "shapenet",
    title: "ShapeNet",
    url: "https://shapenet.org/",
    category: "Asset Pipeline",
    field: "3D shape dataset",
    kind: "asset",
    status: "learning",
    description:
      "Research dataset of categorized 3D shapes and annotations.",
    bestFor: "AI, geometry processing, and shape-classification experiments.",
    tags: ["3d-assets", "dataset", "research", "shapes"],
    previewUrl: "https://shapenet.org/"
  },
  {
    id: "modelnet",
    title: "ModelNet",
    url: "https://modelnet.cs.princeton.edu/",
    category: "Asset Pipeline",
    field: "3D model dataset",
    kind: "asset",
    status: "learning",
    description:
      "Princeton dataset of CAD models used heavily in 3D recognition research.",
    bestFor: "Testing point-cloud, mesh, and object-classification algorithms.",
    tags: ["dataset", "cad", "research", "3d-models"],
    previewUrl: "https://modelnet.cs.princeton.edu/"
  },
  {
    id: "scan-the-world",
    title: "Scan the World",
    url: "https://www.myminifactory.com/scantheworld/",
    category: "Asset Pipeline",
    field: "Cultural scans",
    kind: "asset",
    status: "production",
    description:
      "Archive of 3D-scanned sculptures, artifacts, and cultural heritage objects.",
    bestFor: "Public-domain-style sculptural assets, museum references, and educational scenes.",
    tags: ["scans", "culture", "sculpture", "3d-assets"],
    previewUrl: "https://www.myminifactory.com/scantheworld/"
  },
  {
    id: "thingiverse",
    title: "Thingiverse",
    url: "https://www.thingiverse.com/",
    category: "Asset Pipeline",
    field: "Model marketplace",
    kind: "asset",
    status: "production",
    description:
      "Large community archive of printable 3D models, parts, props, and experiments.",
    bestFor: "Prototype meshes, props, and mechanical references that may need cleanup before web use.",
    tags: ["3d-printing", "models", "community", "assets"],
    previewUrl: "https://www.thingiverse.com/"
  },
  {
    id: "printables",
    title: "Printables",
    url: "https://www.printables.com/model",
    category: "Asset Pipeline",
    field: "Model marketplace",
    kind: "asset",
    status: "production",
    description:
      "Community 3D model library with lots of printable objects and practical props.",
    bestFor: "Finding mechanical, hobby, and prop meshes to retopologize or optimize for web scenes.",
    tags: ["3d-printing", "models", "community", "assets"],
    previewUrl: "https://www.printables.com/model"
  },
  {
    id: "itch-free-3d-assets",
    title: "itch.io Free 3D Assets",
    url: "https://itch.io/game-assets/free/tag-3d",
    category: "Asset Pipeline",
    field: "Game assets",
    kind: "asset",
    status: "production",
    description:
      "Free 3D game asset packs from independent artists and toolmakers.",
    bestFor: "Fast prototyping with stylized characters, props, environments, and game-ready pieces.",
    tags: ["assets", "games", "free", "itch"],
    previewUrl: "https://itch.io/game-assets/free/tag-3d"
  },
  {
    id: "kaykit",
    title: "KayKit",
    url: "https://kaylousberg.itch.io/",
    category: "Asset Pipeline",
    field: "Game asset packs",
    kind: "asset",
    status: "production",
    description:
      "Polished low-poly and stylized game asset packs, many with free options.",
    bestFor: "Cohesive prototype worlds, characters, vehicles, and props for R3F games.",
    tags: ["assets", "low-poly", "games", "characters"],
    previewUrl: "https://kaylousberg.itch.io/"
  },
  {
    id: "craftpix-freebies",
    title: "CraftPix Freebies",
    url: "https://craftpix.net/freebies/",
    category: "Asset Pipeline",
    field: "Game assets",
    kind: "asset",
    status: "production",
    description:
      "Free game asset packs including UI, sprites, and some 3D-adjacent resources.",
    bestFor: "Filling out prototypes with matching game UI and supporting art.",
    tags: ["assets", "games", "free", "ui"],
    previewUrl: "https://craftpix.net/freebies/"
  },
  {
    id: "lazytextures",
    title: "LazyTextures",
    url: "https://lazytextures.com/",
    category: "Asset Pipeline",
    field: "Textures",
    kind: "asset",
    status: "production",
    description:
      "Texture library with free and paid materials for 3D scenes.",
    bestFor: "Quick material exploration and texture references for web-optimized assets.",
    tags: ["textures", "materials", "assets", "pbr"],
    previewUrl: "https://lazytextures.com/"
  },
  {
    id: "poliigon-free",
    title: "Poliigon Free",
    url: "https://www.poliigon.com/search/free",
    category: "Asset Pipeline",
    field: "PBR materials",
    kind: "asset",
    status: "production",
    description:
      "Free tier of Poliigon materials, HDRIs, and model assets.",
    bestFor: "High-quality PBR material references and selected production assets.",
    tags: ["pbr", "textures", "materials", "hdri"],
    previewUrl: "https://www.poliigon.com/search/free"
  },
  {
    id: "lotpixel",
    title: "LotPixel",
    url: "https://lotpixel.com/",
    category: "Asset Pipeline",
    field: "Textures and models",
    kind: "asset",
    status: "production",
    description:
      "Asset library with textures, models, and materials for 3D scenes.",
    bestFor: "Supplementing environment and product work with ready references.",
    tags: ["textures", "models", "materials", "assets"],
    previewUrl: "https://lotpixel.com/"
  },
  {
    id: "cgees-hdri",
    title: "CGEES HDRI",
    url: "https://cgees.com/",
    category: "Asset Pipeline",
    field: "HDRI library",
    kind: "asset",
    status: "production",
    description:
      "HDRI and environment resources for lighting 3D scenes.",
    bestFor: "Finding environment lighting that fits product, automotive, and architectural scenes.",
    tags: ["hdri", "lighting", "environment", "assets"],
    previewUrl: "https://cgees.com/"
  },
  {
    id: "open-hdri",
    title: "Open HDRI",
    url: "https://open-hdri.com/",
    category: "Asset Pipeline",
    field: "Free HDRIs",
    kind: "asset",
    status: "production",
    description:
      "Free HDRI environment maps for 3D rendering and scene lighting.",
    bestFor: "Lighting R3F scenes with real captured environments.",
    tags: ["hdri", "lighting", "environment", "free"],
    previewUrl: "https://open-hdri.com/"
  },
  {
    id: "hdrmaps-freebies",
    title: "HDRMAPS Freebies",
    url: "https://hdrmaps.com/freebies/",
    category: "Asset Pipeline",
    field: "HDRI library",
    kind: "asset",
    status: "production",
    description:
      "Free HDRI samples from HDRMAPS for environment lighting and reflections.",
    bestFor: "Testing lighting setups before committing to paid HDRI packs.",
    tags: ["hdri", "lighting", "free", "environment"],
    previewUrl: "https://hdrmaps.com/freebies/"
  },
  {
    id: "openfootage",
    title: "OpenFootage",
    url: "https://www.openfootage.net/",
    category: "Asset Pipeline",
    field: "HDRI and footage",
    kind: "asset",
    status: "production",
    description:
      "HDRI panoramas, textures, and footage resources for visual effects and rendering.",
    bestFor: "Environment lighting, background plates, and material references.",
    tags: ["hdri", "textures", "footage", "vfx"],
    previewUrl: "https://www.openfootage.net/"
  },
  {
    id: "sibl-archive",
    title: "sIBL Archive",
    url: "http://www.hdrlabs.com/sibl/archive.html",
    category: "Asset Pipeline",
    field: "HDRI archive",
    kind: "asset",
    status: "learning",
    description:
      "Historic archive of smart image-based lighting sets and HDR environments.",
    bestFor: "Understanding image-based lighting workflows and finding older free lighting sets.",
    tags: ["hdri", "ibl", "lighting", "archive"],
    previewUrl: "http://www.hdrlabs.com/sibl/archive.html"
  },
  {
    id: "pixar-one-twenty-eight",
    title: "Pixar One Twenty Eight",
    url: "https://renderman.pixar.com/one-twenty-eight",
    category: "Asset Pipeline",
    field: "Texture library",
    kind: "asset",
    status: "production",
    description:
      "Pixar texture library with 128 production-inspired materials.",
    bestFor: "Material study, procedural texture references, and high-quality lookdev inspiration.",
    tags: ["textures", "pixar", "materials", "lookdev"],
    previewUrl: "https://renderman.pixar.com/one-twenty-eight"
  },
  {
    id: "iconify",
    title: "Iconify",
    url: "https://iconify.design/",
    github: "https://github.com/iconify/iconify",
    category: "Asset Pipeline",
    field: "Icon system",
    kind: "asset",
    status: "production",
    description:
      "Massive icon framework and API aggregating many open icon sets.",
    bestFor: "Toolbars, spatial UI labels, editor controls, and app chrome around 3D tools.",
    tags: ["icons", "ui", "assets", "svg"],
    previewUrl: "https://iconify.design/"
  },
  {
    id: "game-icons",
    title: "Game-icons.net",
    url: "https://game-icons.net/",
    github: "https://github.com/game-icons/icons",
    category: "Asset Pipeline",
    field: "Game icons",
    kind: "asset",
    status: "production",
    description:
      "Huge library of game-oriented SVG icons for actions, items, abilities, and interface states.",
    bestFor: "Inventory systems, HUDs, prototypes, and game/editor affordances.",
    tags: ["icons", "games", "svg", "ui"],
    previewUrl: "https://game-icons.net/"
  },
  {
    id: "openmoji",
    title: "OpenMoji",
    url: "https://openmoji.org/",
    github: "https://github.com/hfg-gmuend/openmoji",
    category: "Asset Pipeline",
    field: "Emoji assets",
    kind: "asset",
    status: "production",
    description:
      "Open-source emoji library with SVG and PNG assets.",
    bestFor: "Friendly UI markers, placeholder art, and social/spatial app interface language.",
    tags: ["emoji", "icons", "svg", "assets"],
    previewUrl: "https://openmoji.org/"
  },
  {
    id: "sonniss-gdc",
    title: "Sonniss GDC Game Audio",
    url: "https://sonniss.com/gameaudiogdc",
    category: "Asset Pipeline",
    field: "Sound effects",
    kind: "asset",
    status: "production",
    description:
      "Large annual free game audio bundles released around GDC.",
    bestFor: "Stocking prototypes with higher-quality game and UI sound effects.",
    tags: ["audio", "sfx", "games", "free"],
    previewUrl: "https://sonniss.com/gameaudiogdc"
  },
  {
    id: "pixabay-sound-effects",
    title: "Pixabay Sound Effects",
    url: "https://pixabay.com/sound-effects/",
    category: "Asset Pipeline",
    field: "Sound effects",
    kind: "asset",
    status: "production",
    description:
      "Searchable library of royalty-free sound effects and short audio clips.",
    bestFor: "Quick audio passes for demos, UI feedback, and lightweight game prototypes.",
    tags: ["audio", "sfx", "free", "royalty-free"],
    previewUrl: "https://pixabay.com/sound-effects/"
  },
  {
    id: "bbc-sound-effects",
    title: "BBC Sound Effects",
    url: "https://sound-effects.bbcrewind.co.uk/",
    category: "Asset Pipeline",
    field: "Sound archive",
    kind: "asset",
    status: "learning",
    description:
      "BBC archive of sound effects and field recordings for reference and permitted uses.",
    bestFor: "Ambience, environmental reference, and sound design research.",
    tags: ["audio", "sfx", "archive", "field-recording"],
    previewUrl: "https://sound-effects.bbcrewind.co.uk/"
  },
  {
    id: "lafan1",
    title: "LAFAN1",
    url: "https://github.com/ubisoft/ubisoft-laforge-animation-dataset",
    github: "https://github.com/ubisoft/ubisoft-laforge-animation-dataset",
    category: "Asset Pipeline",
    field: "Animation dataset",
    kind: "asset",
    status: "learning",
    description:
      "Ubisoft La Forge animation dataset for motion prediction and character animation research.",
    bestFor: "Animation ML, locomotion tests, and motion blending references.",
    tags: ["mocap", "animation", "dataset", "characters"]
  },
  {
    id: "amass",
    title: "AMASS",
    url: "https://amass.is.tue.mpg.de/",
    category: "Asset Pipeline",
    field: "Human motion dataset",
    kind: "asset",
    status: "learning",
    description:
      "Large archive of human motion datasets represented in a common body model format.",
    bestFor: "Research-grade human motion, retargeting, and avatar animation pipelines.",
    tags: ["mocap", "human-motion", "dataset", "research"],
    previewUrl: "https://amass.is.tue.mpg.de/"
  },
  {
    id: "bvhacker",
    title: "bvhacker",
    url: "https://www.bvhacker.com/",
    category: "Asset Pipeline",
    field: "BVH editing",
    kind: "tool",
    status: "learning",
    description:
      "Tool for viewing, trimming, repairing, and preparing BVH motion-capture files.",
    bestFor: "Cleaning legacy mocap before retargeting to web characters.",
    tags: ["mocap", "bvh", "animation", "tool"],
    previewUrl: "https://www.bvhacker.com/"
  },
  {
    id: "vroid-studio",
    title: "VRoid Studio",
    url: "https://vroid.com/en/studio",
    category: "Asset Pipeline",
    field: "Avatar authoring",
    kind: "tool",
    status: "production",
    description:
      "Free avatar creation tool for VRM-compatible humanoid characters.",
    bestFor: "Creating stylized characters for three-vrm, XR worlds, and avatar demos.",
    tags: ["avatars", "vrm", "characters", "authoring"],
    previewUrl: "https://vroid.com/en/studio"
  },
  {
    id: "vrm-spec",
    title: "VRM Specification",
    url: "https://vrm.dev/en/",
    github: "https://github.com/vrm-c/vrm-specification",
    category: "Asset Pipeline",
    field: "Avatar standard",
    kind: "reference",
    status: "core",
    description:
      "Official VRM specification and documentation for humanoid avatar exchange.",
    bestFor: "Understanding avatar rigs, expressions, spring bones, metadata, and compatibility.",
    tags: ["vrm", "avatars", "standard", "characters"],
    previewUrl: "https://vrm.dev/en/"
  },
  {
    id: "vrm-blender-addon",
    title: "VRM Add-on for Blender",
    url: "https://github.com/saturday06/VRM-Addon-for-Blender",
    github: "https://github.com/saturday06/VRM-Addon-for-Blender",
    category: "Asset Pipeline",
    field: "Avatar export",
    kind: "tool",
    status: "production",
    description:
      "Blender add-on for importing, editing, and exporting VRM avatars.",
    bestFor: "Preparing VRM characters for Three.js, R3F, and avatar applications.",
    tags: ["vrm", "blender", "avatars", "export"]
  },
  {
    id: "univrm",
    title: "UniVRM",
    url: "https://github.com/vrm-c/UniVRM",
    github: "https://github.com/vrm-c/UniVRM",
    category: "Asset Pipeline",
    field: "VRM tooling",
    kind: "tool",
    status: "production",
    description:
      "Unity VRM import/export tooling that defines many practical VRM workflows.",
    bestFor: "Cross-checking avatar behavior between Unity, VRM authoring, and web runtimes.",
    tags: ["vrm", "unity", "avatars", "tooling"]
  },
  {
    id: "colmap",
    title: "COLMAP",
    url: "https://colmap.github.io/",
    github: "https://github.com/colmap/colmap",
    category: "Asset Pipeline",
    field: "Photogrammetry",
    kind: "tool",
    status: "production",
    description:
      "Structure-from-motion and multi-view stereo pipeline for photogrammetry reconstruction.",
    bestFor: "Turning photos into cameras, sparse clouds, dense reconstructions, and splat/mesh inputs.",
    tags: ["photogrammetry", "reconstruction", "3d-scan", "sfm"],
    previewUrl: "https://colmap.github.io/"
  },
  {
    id: "openmvg",
    title: "OpenMVG",
    url: "https://openmvg.readthedocs.io/",
    github: "https://github.com/openMVG/openMVG",
    category: "Asset Pipeline",
    field: "Photogrammetry",
    kind: "tool",
    status: "production",
    description:
      "Open multiple-view geometry library for structure-from-motion pipelines.",
    bestFor: "Photogrammetry research, camera reconstruction, and custom capture workflows.",
    tags: ["photogrammetry", "sfm", "geometry", "reconstruction"],
    previewUrl: "https://openmvg.readthedocs.io/"
  },
  {
    id: "openmvs",
    title: "OpenMVS",
    url: "https://cdcseacave.github.io/openMVS/",
    github: "https://github.com/cdcseacave/openMVS",
    category: "Asset Pipeline",
    field: "Dense reconstruction",
    kind: "tool",
    status: "production",
    description:
      "Open multi-view stereo library for dense point clouds, meshes, and textured reconstructions.",
    bestFor: "Completing photogrammetry pipelines after camera reconstruction.",
    tags: ["photogrammetry", "mvs", "meshes", "reconstruction"],
    previewUrl: "https://cdcseacave.github.io/openMVS/"
  },
  {
    id: "alicevision",
    title: "AliceVision",
    url: "https://alicevision.org/",
    github: "https://github.com/alicevision/AliceVision",
    category: "Asset Pipeline",
    field: "Photogrammetry",
    kind: "tool",
    status: "production",
    description:
      "Computer vision photogrammetry framework powering Meshroom.",
    bestFor: "Open photogrammetry pipelines and visual reconstruction workflows.",
    tags: ["photogrammetry", "computer-vision", "meshroom", "reconstruction"],
    previewUrl: "https://alicevision.org/"
  },
  {
    id: "opendronemap",
    title: "OpenDroneMap",
    url: "https://www.opendronemap.org/",
    github: "https://github.com/OpenDroneMap/ODM",
    category: "Asset Pipeline",
    field: "Drone mapping",
    kind: "tool",
    status: "production",
    description:
      "Open toolkit for processing aerial imagery into maps, point clouds, meshes, and terrain outputs.",
    bestFor: "Geospatial capture, terrain references, and 3D map generation pipelines.",
    tags: ["photogrammetry", "drones", "maps", "terrain"],
    previewUrl: "https://www.opendronemap.org/"
  },
  {
    id: "open3d",
    title: "Open3D",
    url: "https://www.open3d.org/",
    github: "https://github.com/isl-org/Open3D",
    category: "Asset Pipeline",
    field: "3D data processing",
    kind: "tool",
    status: "production",
    description:
      "Open-source library for processing point clouds, meshes, RGB-D data, and 3D ML workflows.",
    bestFor: "Cleaning scans, analyzing point clouds, and preparing spatial data for web display.",
    tags: ["point-clouds", "meshes", "3d-data", "processing"],
    previewUrl: "https://www.open3d.org/"
  },
  {
    id: "cloudcompare",
    title: "CloudCompare",
    url: "https://www.cloudcompare.org/",
    category: "Asset Pipeline",
    field: "Point cloud tool",
    kind: "tool",
    status: "production",
    description:
      "Open-source point cloud and mesh processing application.",
    bestFor: "Inspecting, cleaning, aligning, and simplifying scanned spatial datasets.",
    tags: ["point-clouds", "meshes", "scans", "tool"],
    previewUrl: "https://www.cloudcompare.org/"
  },
  {
    id: "pcl",
    title: "Point Cloud Library",
    url: "https://pointclouds.org/",
    github: "https://github.com/PointCloudLibrary/pcl",
    category: "Asset Pipeline",
    field: "Point cloud processing",
    kind: "library",
    status: "production",
    description:
      "Foundational C++ library for point cloud filtering, segmentation, registration, and geometry processing.",
    bestFor: "Understanding the algorithms behind scan cleanup and spatial data preparation.",
    tags: ["point-clouds", "geometry", "processing", "library"],
    previewUrl: "https://pointclouds.org/"
  },
  {
    id: "gltf-pipeline",
    title: "gltf-pipeline",
    url: "https://github.com/CesiumGS/gltf-pipeline",
    github: "https://github.com/CesiumGS/gltf-pipeline",
    category: "Asset Pipeline",
    field: "glTF optimization",
    kind: "tool",
    status: "production",
    description:
      "Cesium command-line tool for converting and optimizing glTF assets.",
    bestFor: "Batch optimization, Draco compression, and legacy glTF pipeline tasks.",
    tags: ["gltf", "optimization", "conversion", "cesium"]
  },
  {
    id: "obj2gltf",
    title: "obj2gltf",
    url: "https://github.com/CesiumGS/obj2gltf",
    github: "https://github.com/CesiumGS/obj2gltf",
    category: "Asset Pipeline",
    field: "Model conversion",
    kind: "tool",
    status: "production",
    description:
      "Convert OBJ assets to glTF for modern web 3D pipelines.",
    bestFor: "Cleaning up older OBJ asset libraries before using GLTFLoader or R3F.",
    tags: ["obj", "gltf", "conversion", "assets"]
  },
  {
    id: "fbx2gltf",
    title: "FBX2glTF",
    url: "https://github.com/facebookincubator/FBX2glTF",
    github: "https://github.com/facebookincubator/FBX2glTF",
    category: "Asset Pipeline",
    field: "Model conversion",
    kind: "tool",
    status: "production",
    description:
      "Command-line FBX to glTF converter from Facebook Incubator.",
    bestFor: "Migrating FBX character, animation, and environment assets into web-friendly glTF.",
    tags: ["fbx", "gltf", "conversion", "animation"]
  },
  {
    id: "assimp",
    title: "Assimp",
    url: "https://github.com/assimp/assimp",
    github: "https://github.com/assimp/assimp",
    category: "Asset Pipeline",
    field: "Model import/export",
    kind: "tool",
    status: "production",
    description:
      "Open Asset Import Library supporting many 3D file formats.",
    bestFor: "Understanding and converting obscure legacy 3D formats before web optimization.",
    tags: ["conversion", "formats", "3d-assets", "pipeline"]
  },
  {
    id: "blendergis",
    title: "BlenderGIS",
    url: "https://github.com/domlysz/BlenderGIS",
    github: "https://github.com/domlysz/BlenderGIS",
    category: "Asset Pipeline",
    field: "GIS in Blender",
    kind: "tool",
    status: "production",
    description:
      "Blender add-on for importing geospatial raster, vector, and terrain data.",
    bestFor: "Preparing map, terrain, and city assets before optimizing for R3F.",
    tags: ["blender", "gis", "terrain", "maps"]
  },
  {
    id: "blosm",
    title: "Blosm",
    url: "https://github.com/vvoovv/blosm",
    github: "https://github.com/vvoovv/blosm",
    category: "Asset Pipeline",
    field: "OpenStreetMap import",
    kind: "tool",
    status: "production",
    description:
      "Blender add-on for importing OpenStreetMap buildings, terrain, and map data.",
    bestFor: "Creating city and terrain base meshes for web scenes.",
    tags: ["blender", "osm", "cities", "terrain"]
  },
  {
    id: "blenderproc",
    title: "BlenderProc",
    url: "https://github.com/DLR-RM/BlenderProc",
    github: "https://github.com/DLR-RM/BlenderProc",
    category: "Asset Pipeline",
    field: "Synthetic data",
    kind: "tool",
    status: "production",
    description:
      "Procedural Blender pipeline for rendering synthetic datasets and scene variations.",
    bestFor: "AI data generation, automated render passes, and scalable asset staging.",
    tags: ["blender", "synthetic-data", "ai", "pipeline"]
  },
  {
    id: "wawa-sensei",
    title: "Wawa Sensei",
    url: "https://wawasensei.dev/",
    github: "https://github.com/wass08",
    category: "Learning & Theory",
    field: "R3F learning",
    kind: "course",
    status: "learning",
    description:
      "React Three Fiber lessons and example projects with a strong game, character, and shader focus.",
    bestFor: "Practical R3F game and character workflows with approachable examples.",
    tags: ["r3f", "course", "characters", "games"],
    previewUrl: "https://wawasensei.dev/"
  },
  {
    id: "motion-react-three-fiber",
    title: "Motion for React Three Fiber",
    url: "https://motion.dev/docs/react-three-fiber",
    category: "Interaction & UI",
    field: "Animation",
    kind: "docs",
    status: "production",
    description:
      "Motion documentation for animating React Three Fiber objects with familiar React animation patterns.",
    bestFor: "Declarative object animation, transitions, hover states, and UI-like scene motion.",
    tags: ["animation", "r3f", "motion", "react"],
    previewUrl: "https://motion.dev/docs/react-three-fiber"
  },
  {
    id: "r3f-spline",
    title: "r3f-spline",
    url: "https://github.com/splinetool/r3f-spline",
    github: "https://github.com/splinetool/r3f-spline",
    category: "Asset Pipeline",
    field: "Spline import",
    kind: "library",
    status: "production",
    description:
      "React Three Fiber integration for loading and using Spline scenes.",
    bestFor: "Moving Spline-authored scenes and assets into custom R3F applications.",
    tags: ["r3f", "spline", "import", "design-tools"]
  },
  {
    id: "threejs-editor",
    title: "Three.js Editor",
    url: "https://threejs.org/editor/",
    github: "https://github.com/mrdoob/three.js/tree/dev/editor",
    category: "Asset Pipeline",
    field: "Scene editor",
    kind: "tool",
    status: "core",
    description:
      "Official Three.js browser editor for arranging scenes, lights, materials, and objects.",
    bestFor: "Quick scene inspection, exporter checks, and understanding Three.js object structure.",
    tags: ["three.js", "editor", "scene", "tools"],
    previewUrl: "https://threejs.org/editor/"
  },
  {
    id: "threejs-migration-guide",
    title: "Three.js Migration Guide",
    url: "https://github.com/mrdoob/three.js/wiki/Migration-Guide",
    github: "https://github.com/mrdoob/three.js",
    category: "Learning & Theory",
    field: "Version upgrades",
    kind: "reference",
    status: "core",
    description:
      "Official wiki notes for breaking changes and migration steps between Three.js releases.",
    bestFor: "Upgrading R3F and Three.js projects without missing renderer, color, or API changes.",
    tags: ["three.js", "migration", "versions", "reference"]
  },
  {
    id: "threejs-forum",
    title: "Three.js Forum",
    url: "https://discourse.threejs.org/",
    category: "Learning & Theory",
    field: "Community support",
    kind: "community",
    status: "core",
    description:
      "Official Three.js community forum with deep debugging threads, examples, and release discussions.",
    bestFor: "Solving real rendering, material, loader, and performance problems.",
    tags: ["three.js", "community", "debugging", "support"],
    previewUrl: "https://discourse.threejs.org/"
  },
  {
    id: "stackoverflow-threejs",
    title: "Stack Overflow three.js",
    url: "https://stackoverflow.com/questions/tagged/three.js",
    category: "Learning & Theory",
    field: "Q&A archive",
    kind: "community",
    status: "learning",
    description:
      "Stack Overflow tag archive for Three.js questions and practical debugging answers.",
    bestFor: "Finding edge-case fixes and implementation details from real user problems.",
    tags: ["three.js", "q&a", "debugging", "community"],
    previewUrl: "https://stackoverflow.com/questions/tagged/three.js"
  },
  {
    id: "stemkoski-threejs",
    title: "Stemkoski Three.js Examples",
    url: "https://stemkoski.github.io/Three.js/",
    github: "https://github.com/stemkoski/stemkoski.github.com",
    category: "Learning & Theory",
    field: "Three.js examples",
    kind: "course",
    status: "learning",
    description:
      "Classic collection of small Three.js examples covering materials, geometry, controls, particles, and shaders.",
    bestFor: "Learning older but still useful Three.js concepts in bite-size demos.",
    tags: ["three.js", "examples", "learning", "webgl"],
    previewUrl: "https://stemkoski.github.io/Three.js/"
  },
  {
    id: "acko",
    title: "Acko.net",
    url: "https://acko.net/",
    category: "Learning & Theory",
    field: "Graphics essays",
    kind: "article",
    status: "learning",
    description:
      "Steven Wittens archive of essays and experiments on math, graphics, presentations, and WebGL.",
    bestFor: "Deep conceptual grounding for visual math, rendering, and exploratory graphics.",
    tags: ["graphics", "math", "webgl", "essays"],
    previewUrl: "https://acko.net/"
  },
  {
    id: "mathbox",
    title: "MathBox",
    url: "https://gitgud.io/unconed/mathbox",
    github: "https://gitgud.io/unconed/mathbox",
    category: "Data, Maps & AI",
    field: "Math visualization",
    kind: "library",
    status: "learning",
    description:
      "Library for mathematical visualization and WebGL presentation graphics.",
    bestFor: "Building explanatory 3D graphs, math demos, and visual teaching systems.",
    tags: ["math", "visualization", "webgl", "education"]
  },
  {
    id: "webgpu-spec",
    title: "WebGPU Specification",
    url: "https://www.w3.org/TR/webgpu/",
    github: "https://github.com/gpuweb/gpuweb",
    category: "Foundations",
    field: "WebGPU standard",
    kind: "reference",
    status: "core",
    description:
      "W3C WebGPU specification defining the modern browser GPU API.",
    bestFor: "Understanding the low-level capabilities behind future Three.js and R3F rendering.",
    tags: ["webgpu", "standard", "gpu", "browser"],
    previewUrl: "https://www.w3.org/TR/webgpu/"
  },
  {
    id: "wgsl-spec",
    title: "WGSL Specification",
    url: "https://www.w3.org/TR/WGSL/",
    github: "https://github.com/gpuweb/gpuweb",
    category: "Creative Coding & Shaders",
    field: "WebGPU shaders",
    kind: "reference",
    status: "core",
    description:
      "W3C specification for WebGPU Shading Language.",
    bestFor: "Learning the shader language that underpins WebGPU rendering and compute.",
    tags: ["wgsl", "webgpu", "shaders", "standard"],
    previewUrl: "https://www.w3.org/TR/WGSL/"
  },
  {
    id: "chrome-webgpu-docs",
    title: "Chrome WebGPU Docs",
    url: "https://developer.chrome.com/docs/web-platform/webgpu",
    category: "Learning & Theory",
    field: "WebGPU learning",
    kind: "docs",
    status: "learning",
    description:
      "Chrome documentation and guides for using WebGPU in modern browsers.",
    bestFor: "Practical WebGPU setup, browser support, debugging, and feature guidance.",
    tags: ["webgpu", "chrome", "docs", "browser"],
    previewUrl: "https://developer.chrome.com/docs/web-platform/webgpu"
  },
  {
    id: "webgl-academy",
    title: "WebGL Academy",
    url: "https://www.webglacademy.com/",
    category: "Learning & Theory",
    field: "WebGL course",
    kind: "course",
    status: "learning",
    description:
      "Interactive course that teaches raw WebGL concepts step by step.",
    bestFor: "Understanding what Three.js abstracts away and how GPU draw calls actually work.",
    tags: ["webgl", "course", "graphics", "learning"],
    previewUrl: "https://www.webglacademy.com/"
  },
  {
    id: "glsl-sandbox",
    title: "GLSL Sandbox",
    url: "http://glslsandbox.com/",
    category: "Creative Coding & Shaders",
    field: "Shader gallery",
    kind: "showcase",
    status: "learning",
    description:
      "Classic browser shader sketch gallery and live editor.",
    bestFor: "Mining fragment shader ideas and studying compact GLSL sketches.",
    tags: ["glsl", "shaders", "gallery", "editor"],
    previewUrl: "http://glslsandbox.com/"
  },
  {
    id: "dwitter",
    title: "Dwitter",
    url: "https://www.dwitter.net/",
    category: "Creative Coding & Shaders",
    field: "Tiny code art",
    kind: "community",
    status: "creative",
    description:
      "Community for 140-character JavaScript canvas sketches.",
    bestFor: "Studying compressed visual ideas, math tricks, and procedural animation.",
    tags: ["creative-coding", "canvas", "tiny-code", "community"],
    previewUrl: "https://www.dwitter.net/"
  },
  {
    id: "tixy-land",
    title: "tixy.land",
    url: "https://tixy.land/",
    category: "Creative Coding & Shaders",
    field: "Tiny code art",
    kind: "tool",
    status: "creative",
    description:
      "Minimal creative coding playground for tiny grid-based visual expressions.",
    bestFor: "Practicing compact math-driven animation ideas.",
    tags: ["creative-coding", "math", "animation", "playground"],
    previewUrl: "https://tixy.land/"
  },
  {
    id: "shaderfrog",
    title: "ShaderFrog",
    url: "https://shaderfrog.com/",
    category: "Creative Coding & Shaders",
    field: "Shader editor",
    kind: "tool",
    status: "learning",
    description:
      "Visual shader editor and shader library for WebGL-era material experiments.",
    bestFor: "Learning shader composition and porting material ideas into Three.js.",
    tags: ["shaders", "editor", "webgl", "materials"],
    previewUrl: "https://shaderfrog.com/"
  },
  {
    id: "nodetoy",
    title: "NodeToy",
    url: "https://nodetoy.co/",
    category: "Creative Coding & Shaders",
    field: "Node shaders",
    kind: "tool",
    status: "creative",
    description:
      "Node-based shader and material authoring tool for web-friendly visual effects.",
    bestFor: "Designing procedural materials visually before integrating into Three.js/R3F.",
    tags: ["shaders", "nodes", "materials", "tool"],
    previewUrl: "https://nodetoy.co/"
  },
  {
    id: "polygonjs",
    title: "Polygonjs",
    url: "https://polygonjs.com/",
    github: "https://github.com/polygonjs/polygonjs",
    category: "Creative Coding & Shaders",
    field: "Procedural 3D tool",
    kind: "tool",
    status: "production",
    description:
      "Procedural WebGL design tool and runtime for creating interactive 3D scenes.",
    bestFor: "Node-based procedural scene authoring and exporting interactive web experiences.",
    tags: ["procedural", "nodes", "webgl", "tool"],
    previewUrl: "https://polygonjs.com/"
  },
  {
    id: "playcanvas-examples",
    title: "PlayCanvas Examples",
    url: "https://playcanvas.github.io/",
    github: "https://github.com/playcanvas/engine",
    category: "Learning & Theory",
    field: "WebGL engine examples",
    kind: "showcase",
    status: "learning",
    description:
      "Interactive examples for a mature browser 3D engine, covering cameras, materials, physics, UI, and rendering.",
    bestFor: "Borrowing engine-level ideas and comparing patterns with Three.js/R3F.",
    tags: ["playcanvas", "examples", "webgl", "engine"],
    previewUrl: "https://playcanvas.github.io/"
  },
  {
    id: "vertexfragment",
    title: "VertexFragment",
    url: "https://www.vertexfragment.com/",
    category: "Learning & Theory",
    field: "Shader tutorials",
    kind: "course",
    status: "learning",
    description:
      "Shader, graphics, and realtime rendering tutorials with approachable explanations.",
    bestFor: "Building shader intuition before writing custom Three.js materials.",
    tags: ["shaders", "graphics", "tutorials", "rendering"],
    previewUrl: "https://www.vertexfragment.com/"
  },
  {
    id: "gmshaders",
    title: "GM Shaders Mini",
    url: "https://mini.gmshaders.com/",
    category: "Learning & Theory",
    field: "Shader course",
    kind: "course",
    status: "learning",
    description:
      "Friendly shader learning resource with compact lessons and visual explanations.",
    bestFor: "Getting comfortable with shader fundamentals and procedural effects.",
    tags: ["shaders", "learning", "graphics", "glsl"],
    previewUrl: "https://mini.gmshaders.com/"
  },
  {
    id: "graphics-compendium",
    title: "Graphics Compendium",
    url: "https://graphicscompendium.com/",
    category: "Learning & Theory",
    field: "Graphics fundamentals",
    kind: "course",
    status: "learning",
    description:
      "Free computer graphics learning resource covering rendering foundations.",
    bestFor: "Building durable mental models for cameras, lighting, rasterization, and rendering.",
    tags: ["graphics", "rendering", "fundamentals", "course"],
    previewUrl: "https://graphicscompendium.com/"
  },
  {
    id: "raytracing-weekend",
    title: "Ray Tracing in One Weekend",
    url: "https://raytracing.github.io/",
    github: "https://github.com/RayTracing/raytracing.github.io",
    category: "Learning & Theory",
    field: "Rendering book",
    kind: "course",
    status: "learning",
    description:
      "Free book series teaching ray tracing and rendering from first principles.",
    bestFor: "Understanding light transport concepts that inform realistic realtime rendering.",
    tags: ["ray-tracing", "rendering", "graphics", "book"],
    previewUrl: "https://raytracing.github.io/"
  },
  {
    id: "pbr-book",
    title: "Physically Based Rendering",
    url: "https://www.pbr-book.org/",
    github: "https://github.com/mmp/pbrt-v4",
    category: "Learning & Theory",
    field: "Rendering book",
    kind: "reference",
    status: "learning",
    description:
      "Authoritative free online book on physically based rendering.",
    bestFor: "Deep rendering knowledge behind materials, light transport, sampling, and cameras.",
    tags: ["pbr", "rendering", "graphics", "book"],
    previewUrl: "https://www.pbr-book.org/"
  },
  {
    id: "algorithm-archive",
    title: "The Algorithm Archive",
    url: "https://www.algorithm-archive.org/",
    github: "https://github.com/algorithm-archivists/algorithm-archive",
    category: "Learning & Theory",
    field: "Algorithms",
    kind: "reference",
    status: "learning",
    description:
      "Open algorithm reference with explanations useful for procedural and simulation work.",
    bestFor: "Implementing pathfinding, noise, geometry, and simulation ideas with stronger grounding.",
    tags: ["algorithms", "procedural", "math", "reference"],
    previewUrl: "https://www.algorithm-archive.org/"
  },
  {
    id: "the-coding-train",
    title: "The Coding Train",
    url: "https://thecodingtrain.com/",
    github: "https://github.com/CodingTrain",
    category: "Learning & Theory",
    field: "Creative coding education",
    kind: "course",
    status: "learning",
    description:
      "Large creative coding learning archive covering p5.js, algorithms, simulations, and visual systems.",
    bestFor: "Procedural thinking, simulation sketches, and generative ideas transferable to R3F.",
    tags: ["creative-coding", "education", "algorithms", "generative"],
    previewUrl: "https://thecodingtrain.com/"
  },
  {
    id: "genuary",
    title: "GENUARY",
    url: "https://genuary.art/",
    category: "Creative Coding & Shaders",
    field: "Creative coding challenge",
    kind: "community",
    status: "creative",
    description:
      "Annual generative art challenge with daily prompts and a large community archive.",
    bestFor: "Idea prompts and creative constraints for shader, geometry, and procedural scene studies.",
    tags: ["generative-art", "community", "prompts", "creative-coding"],
    previewUrl: "https://genuary.art/"
  },
  {
    id: "shaderism",
    title: "Shaderism",
    url: "https://shaderism.com/",
    category: "Learning & Theory",
    field: "Shader learning",
    kind: "course",
    status: "learning",
    description:
      "Shader learning resource focused on visual experimentation and creative coding.",
    bestFor: "Exploring shader concepts through art-oriented examples.",
    tags: ["shaders", "creative-coding", "learning", "glsl"],
    previewUrl: "https://shaderism.com/"
  },
  {
    id: "processing-examples",
    title: "Processing Examples",
    url: "https://processing.org/examples/",
    github: "https://github.com/processing/processing-docs",
    category: "Learning & Theory",
    field: "Creative coding examples",
    kind: "course",
    status: "learning",
    description:
      "Canonical Processing examples for form, motion, interaction, image, and simulation.",
    bestFor: "Borrowing simple visual-system ideas and translating them into WebGL/R3F.",
    tags: ["processing", "creative-coding", "examples", "education"],
    previewUrl: "https://processing.org/examples/"
  },
  {
    id: "gltf-tutorials",
    title: "glTF Tutorials",
    url: "https://github.com/KhronosGroup/glTF-Tutorials",
    github: "https://github.com/KhronosGroup/glTF-Tutorials",
    category: "Learning & Theory",
    field: "glTF learning",
    kind: "course",
    status: "core",
    description:
      "Khronos tutorials explaining glTF structure, buffers, scenes, materials, skins, and animation.",
    bestFor: "Understanding what is inside assets loaded by GLTFLoader and useGLTF.",
    tags: ["gltf", "assets", "khronos", "learning"]
  },
  {
    id: "gltf-sample-viewer",
    title: "Khronos glTF Sample Viewer",
    url: "https://github.khronos.org/glTF-Sample-Viewer-Release/",
    github: "https://github.com/KhronosGroup/glTF-Sample-Viewer",
    category: "Asset Pipeline",
    field: "glTF validation",
    kind: "tool",
    status: "core",
    description:
      "Reference glTF sample viewer for checking how assets render against Khronos expectations.",
    bestFor: "Debugging PBR, extensions, lighting, animation, and loader differences.",
    tags: ["gltf", "viewer", "khronos", "validation"],
    previewUrl: "https://github.khronos.org/glTF-Sample-Viewer-Release/"
  },
  {
    id: "webxr-spec",
    title: "WebXR Device API",
    url: "https://immersive-web.github.io/webxr/",
    github: "https://github.com/immersive-web/webxr",
    category: "XR, AR & VR",
    field: "WebXR standard",
    kind: "reference",
    status: "core",
    description:
      "Core WebXR Device API specification for immersive VR and AR sessions in browsers.",
    bestFor: "Understanding sessions, reference spaces, frame loops, input sources, and browser capabilities.",
    tags: ["webxr", "standard", "vr", "ar"],
    previewUrl: "https://immersive-web.github.io/webxr/"
  }
]);
