import { resourceAdditions } from "./resourceAdditions.ts";
import { resourceExpansion } from "./resourceExpansion.ts";
import { resourceExpansion2 } from "./resourceExpansion2.ts";

export type ResourceKind =
  | "library"
  | "docs"
  | "tool"
  | "course"
  | "showcase"
  | "article"
  | "starter"
  | "asset"
  | "community"
  | "reference";

export type ResourceStatus =
  | "core"
  | "production"
  | "creative"
  | "experimental"
  | "learning";

export type ResourceSize = "compact" | "standard" | "tall" | "wide";

export type Resource = {
  id: string;
  title: string;
  url: string;
  github?: string;
  previewUrl?: string;
  category: string;
  field: string;
  kind: ResourceKind;
  status: ResourceStatus;
  description: string;
  bestFor: string;
  tags: string[];
  image?: string;
  color: string;
  size?: ResourceSize;
};

export const channels = [
  {
    id: "foundations",
    title: "Foundations",
    signal: "The renderer, Three.js base layer, docs, and mental models."
  },
  {
    id: "ecosystem",
    title: "Ecosystem Libraries",
    signal: "Production helpers from pmndrs and adjacent React 3D tools."
  },
  {
    id: "assets",
    title: "Asset Pipeline",
    signal: "Model conversion, compression, avatars, materials, and sources."
  },
  {
    id: "interaction-ui",
    title: "Interaction & UI",
    signal: "Controls, panels, spatial UI, timelines, and interface glue."
  },
  {
    id: "games",
    title: "Gaming & Physics",
    signal: "Physics, character rigs, ECS, navigation, netcode, and game loops."
  },
  {
    id: "creative",
    title: "Creative Coding & Shaders",
    signal: "GLSL, post effects, procedural visuals, text, and code art."
  },
  {
    id: "xr",
    title: "XR, AR & VR",
    signal: "WebXR, headset workflows, hand input, AR targets, and standards."
  },
  {
    id: "websites",
    title: "Web Experiences",
    signal: "Scroll, editorial WebGL, portfolio systems, and app starters."
  },
  {
    id: "performance",
    title: "Performance & Debug",
    signal: "Profiling, BVHs, GPU limits, workers, compression, and diagnostics."
  },
  {
    id: "learning",
    title: "Learning & Theory",
    signal: "Courses, references, graphics fundamentals, and durable tutorials."
  },
  {
    id: "showcases",
    title: "Showcases & Inspiration",
    signal: "Reference work, studios, experiments, and visual taste builders."
  },
  {
    id: "data-ai",
    title: "Data, Maps & AI",
    signal: "Globes, maps, splats, generated assets, and spatial data."
  }
] as const;

const curatedResources: Resource[] = [
  {
    id: "r3f",
    title: "React Three Fiber",
    url: "https://r3f.docs.pmnd.rs",
    github: "https://github.com/pmndrs/react-three-fiber",
    category: "Foundations",
    field: "3D renderer",
    kind: "library",
    status: "core",
    description:
      "The React renderer for Three.js. It lets scenes be composed declaratively while keeping direct access to the Three.js object graph.",
    bestFor: "Any serious React-based 3D, WebGL, XR, game, or creative coding project.",
    tags: ["renderer", "three.js", "react", "canvas", "pmndrs"],
    image: "/screenshots/r3f-docs.webp",
    color: "#111111",
    size: "wide"
  },
  {
    id: "threejs",
    title: "Three.js",
    url: "https://threejs.org",
    github: "https://github.com/mrdoob/three.js",
    category: "Foundations",
    field: "WebGL engine",
    kind: "library",
    status: "core",
    description:
      "The rendering engine underneath most React Three Fiber work: materials, loaders, cameras, animation, WebXR, and examples.",
    bestFor: "Understanding what every R3F JSX element becomes at runtime.",
    tags: ["webgl", "webgpu", "engine", "examples", "materials"],
    image: "/screenshots/threejs.webp",
    color: "#e5e5e5",
    size: "wide"
  },
  {
    id: "r3f-docs",
    title: "R3F Docs and API",
    url: "https://r3f.docs.pmnd.rs/getting-started/introduction",
    github: "https://github.com/pmndrs/react-three-fiber",
    category: "Foundations",
    field: "Documentation",
    kind: "docs",
    status: "core",
    description:
      "The canonical source for Canvas, hooks, events, loaders, performance patterns, and reconciler behavior.",
    bestFor: "Resolving API details and checking recommended R3F patterns.",
    tags: ["docs", "api", "hooks", "events"],
    image: "/screenshots/r3f-docs.webp",
    color: "#f4f0e8"
  },
  {
    id: "threejs-docs",
    title: "Three.js Docs",
    url: "https://threejs.org/docs/",
    github: "https://github.com/mrdoob/three.js",
    category: "Foundations",
    field: "Documentation",
    kind: "docs",
    status: "core",
    description:
      "Reference for every class R3F can instantiate: Mesh, BufferGeometry, Object3D, WebGLRenderer, materials, loaders, and math primitives.",
    bestFor: "Looking up props, constructor arguments, and engine-level behavior.",
    tags: ["docs", "reference", "classes", "math"],
    color: "#d9d9d9"
  },
  {
    id: "three-examples",
    title: "Three.js Examples",
    url: "https://threejs.org/examples/",
    github: "https://github.com/mrdoob/three.js/tree/dev/examples",
    category: "Foundations",
    field: "Examples",
    kind: "showcase",
    status: "core",
    description:
      "A huge gallery of engine examples that can be translated into React components when Drei does not already wrap them.",
    bestFor: "Finding raw techniques for loaders, postprocessing, WebXR, materials, controls, and shaders.",
    tags: ["examples", "engine", "patterns", "webxr"],
    color: "#cfcfcf",
    size: "tall"
  },
  {
    id: "react-docs",
    title: "React Docs",
    url: "https://react.dev",
    github: "https://github.com/reactjs/react.dev",
    category: "Foundations",
    field: "React",
    kind: "docs",
    status: "core",
    description:
      "The React model still matters in R3F: composition, refs, effects, memoization, transitions, and state boundaries.",
    bestFor: "Keeping scene components predictable and avoiding render-loop state mistakes.",
    tags: ["react", "hooks", "state", "refs"],
    color: "#61dafb"
  },
  {
    id: "vite",
    title: "Vite",
    url: "https://vite.dev",
    github: "https://github.com/vitejs/vite",
    category: "Foundations",
    field: "Build tooling",
    kind: "tool",
    status: "production",
    description:
      "Fast local development and bundling for React Three projects, including GLSL, workers, WASM, and asset pipelines via plugins.",
    bestFor: "Starting fast R3F prototypes and production apps.",
    tags: ["build", "dev-server", "bundler", "wasm"],
    color: "#ffcb6b"
  },
  {
    id: "typescript",
    title: "TypeScript",
    url: "https://www.typescriptlang.org",
    github: "https://github.com/microsoft/TypeScript",
    category: "Foundations",
    field: "Language",
    kind: "tool",
    status: "production",
    description:
      "Type safety for scene props, GLTF components, ECS state, physics handles, refs, and shader uniform contracts.",
    bestFor: "Larger R3F apps where ref and asset types become hard to track.",
    tags: ["types", "tooling", "maintainability"],
    color: "#3178c6"
  },
  {
    id: "pmndrs",
    title: "pmndrs",
    url: "https://pmnd.rs",
    github: "https://github.com/pmndrs",
    category: "Foundations",
    field: "Ecosystem",
    kind: "community",
    status: "core",
    description:
      "The collective behind R3F, Drei, Zustand, Jotai, Valtio, Leva, React Spring, XR, Rapier bindings, and many companion tools.",
    bestFor: "Following the center of gravity for modern React 3D tooling.",
    tags: ["pmndrs", "community", "ecosystem"],
    color: "#111111",
    size: "compact"
  },
  {
    id: "webgl-fundamentals",
    title: "WebGL Fundamentals",
    url: "https://webglfundamentals.org",
    github: "https://github.com/gfxfundamentals/webgl-fundamentals",
    category: "Foundations",
    field: "Graphics basics",
    kind: "course",
    status: "learning",
    description:
      "Low-level explanations of shaders, buffers, textures, matrix math, and GPU draw calls behind the abstractions.",
    bestFor: "Debugging when Three.js abstractions stop being enough.",
    tags: ["webgl", "gpu", "math", "shaders"],
    color: "#f08b51"
  },
  {
    id: "drei",
    title: "Drei",
    url: "https://drei.docs.pmnd.rs",
    github: "https://github.com/pmndrs/drei",
    category: "Ecosystem Libraries",
    field: "Helpers",
    kind: "library",
    status: "core",
    description:
      "The kitchen sink of R3F helpers: cameras, controls, loaders, staging, text, HTML, environment maps, shader materials, views, and abstractions.",
    bestFor: "Shipping faster without rebuilding common Three.js patterns.",
    tags: ["helpers", "controls", "loaders", "staging", "pmndrs"],
    image: "/screenshots/drei-docs.webp",
    color: "#f4f0e8",
    size: "wide"
  },
  {
    id: "gltfjsx",
    title: "gltfjsx",
    url: "https://gltf.pmnd.rs",
    github: "https://github.com/pmndrs/gltfjsx",
    category: "Ecosystem Libraries",
    field: "Model conversion",
    kind: "tool",
    status: "core",
    description:
      "Transforms GLTF and GLB files into typed JSX components, keeping model structure editable inside React.",
    bestFor: "Turning Blender, Spline, Sketchfab, or scanned assets into maintainable scene components.",
    tags: ["gltf", "assets", "jsx", "cli"],
    color: "#d7f0ff"
  },
  {
    id: "react-postprocessing",
    title: "React Postprocessing",
    url: "https://react-postprocessing.docs.pmnd.rs",
    github: "https://github.com/pmndrs/react-postprocessing",
    category: "Ecosystem Libraries",
    field: "Post effects",
    kind: "library",
    status: "production",
    description:
      "Declarative wrapper around the postprocessing library for bloom, depth of field, outlines, SSAO, noise, LUTs, and custom passes.",
    bestFor: "Giving scenes a finished art direction without manual composer plumbing.",
    tags: ["postprocessing", "effects", "bloom", "dof"],
    color: "#f7b2ad",
    size: "tall"
  },
  {
    id: "react-three-rapier",
    title: "React Three Rapier",
    url: "https://pmndrs.github.io/react-three-rapier/",
    github: "https://github.com/pmndrs/react-three-rapier",
    category: "Ecosystem Libraries",
    field: "Physics",
    kind: "library",
    status: "production",
    description:
      "R3F bindings for the Rapier physics engine, with rigid bodies, colliders, joints, sensors, and debug rendering.",
    bestFor: "Games, product configurators, toys, XR interactions, and believable motion.",
    tags: ["physics", "rapier", "collisions", "wasm"],
    image: "/screenshots/rapier-docs.webp",
    color: "#ffe082",
    size: "wide"
  },
  {
    id: "react-three-xr",
    title: "React Three XR",
    url: "https://pmndrs.github.io/xr/docs/getting-started/introduction",
    github: "https://github.com/pmndrs/xr",
    category: "Ecosystem Libraries",
    field: "WebXR",
    kind: "library",
    status: "production",
    description:
      "React and vanilla Three tools for VR and AR sessions, controllers, hand tracking, pointer events, and XR-friendly scene structure.",
    bestFor: "Meta Quest, Vision Pro browser, AR hit testing, room-scale demos, and headset interfaces.",
    tags: ["webxr", "vr", "ar", "controllers", "pmndrs"],
    image: "/screenshots/xr-docs.webp",
    color: "#b3e5fc",
    size: "wide"
  },
  {
    id: "react-three-uikit",
    title: "React Three UIKit",
    url: "https://pmndrs.github.io/uikit/docs/getting-started/introduction",
    github: "https://github.com/pmndrs/uikit",
    category: "Ecosystem Libraries",
    field: "Spatial UI",
    kind: "library",
    status: "production",
    description:
      "WebGL-rendered UI primitives for Three.js and R3F, including layout, text, interaction, and kit packages.",
    bestFor: "XR menus, in-scene dashboards, HUDs, panels, and 3D app controls.",
    tags: ["ui", "webxr", "layout", "text"],
    image: "/screenshots/uikit-docs.webp",
    color: "#c8f7dc",
    size: "tall"
  },
  {
    id: "react-three-flex",
    title: "React Three Flex",
    url: "https://github.com/pmndrs/react-three-flex",
    github: "https://github.com/pmndrs/react-three-flex",
    category: "Ecosystem Libraries",
    field: "3D layout",
    kind: "library",
    status: "production",
    description:
      "Flexbox-like layout for R3F scenes using Yoga, useful when arranging panels, labels, grids, and spatial UI.",
    bestFor: "Keeping scene UI and product configurator layouts from becoming hard-coded coordinates.",
    tags: ["layout", "flexbox", "ui", "yoga"],
    color: "#b7e4c7"
  },
  {
    id: "react-three-csg",
    title: "React Three CSG",
    url: "https://github.com/pmndrs/react-three-csg",
    github: "https://github.com/pmndrs/react-three-csg",
    category: "Ecosystem Libraries",
    field: "Geometry",
    kind: "library",
    status: "production",
    description:
      "Constructive solid geometry components for boolean operations on meshes, powered by the three-bvh-csg ecosystem.",
    bestFor: "CAD-like cuts, holes, procedural product parts, and editable shapes.",
    tags: ["csg", "geometry", "cad", "boolean"],
    color: "#ffddd2"
  },
  {
    id: "react-three-a11y",
    title: "React Three A11y",
    url: "https://github.com/pmndrs/react-three-a11y",
    github: "https://github.com/pmndrs/react-three-a11y",
    category: "Ecosystem Libraries",
    field: "Accessibility",
    kind: "library",
    status: "production",
    description:
      "Accessibility helpers for canvas experiences, giving screen readers and keyboard users meaningful access to 3D interactions.",
    bestFor: "Making interactive canvas content less hostile to non-pointer workflows.",
    tags: ["accessibility", "a11y", "keyboard", "semantics"],
    color: "#bde0fe"
  },
  {
    id: "react-three-offscreen",
    title: "React Three Offscreen",
    url: "https://github.com/pmndrs/react-three-offscreen",
    github: "https://github.com/pmndrs/react-three-offscreen",
    category: "Ecosystem Libraries",
    field: "Workers",
    kind: "library",
    status: "experimental",
    description:
      "Runs R3F rendering in a worker through OffscreenCanvas where browser support and project constraints allow it.",
    bestFor: "Heavy visual apps that need to keep the main thread available for DOM and interaction.",
    tags: ["offscreen", "worker", "performance", "canvas"],
    color: "#d8e2dc"
  },
  {
    id: "gpu-pathtracer",
    title: "React Three GPU Pathtracer",
    url: "https://github.com/pmndrs/react-three-gpu-pathtracer",
    github: "https://github.com/pmndrs/react-three-gpu-pathtracer",
    category: "Ecosystem Libraries",
    field: "Rendering",
    kind: "library",
    status: "creative",
    description:
      "R3F integration for physically based GPU path tracing, useful for high-end product visuals and still-quality previews.",
    bestFor: "Photoreal product configurators, material studies, and render-mode toggles.",
    tags: ["path tracing", "rendering", "photoreal", "materials"],
    color: "#f1f3f5"
  },
  {
    id: "lamina",
    title: "Lamina",
    url: "https://github.com/pmndrs/lamina",
    github: "https://github.com/pmndrs/lamina",
    category: "Ecosystem Libraries",
    field: "Materials",
    kind: "library",
    status: "creative",
    description:
      "Layer-based shader materials for R3F that make gradients, fresnel, noise, depth, and matcap looks easier to compose.",
    bestFor: "Art-directed materials without writing full custom GLSL from scratch.",
    tags: ["materials", "shader", "layers", "noise"],
    color: "#ffd6a5",
    size: "tall"
  },
  {
    id: "maath",
    title: "Maath",
    url: "https://github.com/pmndrs/maath",
    github: "https://github.com/pmndrs/maath",
    category: "Ecosystem Libraries",
    field: "Math utilities",
    kind: "library",
    status: "production",
    description:
      "Animation-friendly math utilities for easing, damping, random distributions, buffers, geometry helpers, and vector operations.",
    bestFor: "Natural motion, procedural placement, camera smoothing, and interactive transitions.",
    tags: ["math", "damping", "animation", "procedural"],
    color: "#caffbf"
  },
  {
    id: "zustand",
    title: "Zustand",
    url: "https://zustand.docs.pmnd.rs",
    github: "https://github.com/pmndrs/zustand",
    category: "Ecosystem Libraries",
    field: "State",
    kind: "library",
    status: "production",
    description:
      "Small state store that works well outside React renders, making it a common choice for R3F controls, games, and editors.",
    bestFor: "Scene state that needs to be read in useFrame without constantly re-rendering React.",
    tags: ["state", "store", "games", "controls"],
    color: "#ead7c3"
  },
  {
    id: "valtio",
    title: "Valtio",
    url: "https://valtio.dev",
    github: "https://github.com/pmndrs/valtio",
    category: "Ecosystem Libraries",
    field: "State",
    kind: "library",
    status: "production",
    description:
      "Proxy state for mutable-feeling scene and editor data that can still drive React updates where needed.",
    bestFor: "Configurator state, editor panels, and object graphs that map naturally to mutable objects.",
    tags: ["state", "proxy", "editor", "configurator"],
    color: "#f1c0e8"
  },
  {
    id: "jotai",
    title: "Jotai",
    url: "https://jotai.org",
    github: "https://github.com/pmndrs/jotai",
    category: "Ecosystem Libraries",
    field: "State",
    kind: "library",
    status: "production",
    description:
      "Atomic state model for composing small pieces of UI and scene state with minimal coupling.",
    bestFor: "Complex interfaces around a canvas where individual controls should update independently.",
    tags: ["state", "atoms", "react", "ui"],
    color: "#cdb4db"
  },
  {
    id: "react-spring",
    title: "React Spring",
    url: "https://www.react-spring.dev",
    github: "https://github.com/pmndrs/react-spring",
    category: "Interaction & UI",
    field: "Animation",
    kind: "library",
    status: "production",
    description:
      "Spring animation primitives with R3F support, useful for UI transitions, camera-ish motion, and physical-feeling values.",
    bestFor: "Declarative animations that need continuity instead of keyframe jumps.",
    tags: ["animation", "springs", "transitions", "pmndrs"],
    color: "#ffcad4"
  },
  {
    id: "leva",
    title: "Leva",
    url: "https://leva.pmnd.rs",
    github: "https://github.com/pmndrs/leva",
    category: "Interaction & UI",
    field: "Controls",
    kind: "tool",
    status: "production",
    description:
      "Beautiful debug controls for numbers, colors, vectors, folders, toggles, and live-tuning shader or physics parameters.",
    bestFor: "Rapidly art-directing scenes and exposing internal controls during development.",
    tags: ["controls", "debug", "tweaks", "parameters"],
    color: "#ffc8dd"
  },
  {
    id: "theatre",
    title: "Theatre.js",
    url: "https://www.theatrejs.com",
    github: "https://github.com/theatre-js/theatre",
    category: "Interaction & UI",
    field: "Timeline",
    kind: "tool",
    status: "production",
    description:
      "A timeline and sequencing environment for animating Three.js and R3F scenes with editable keyframes.",
    bestFor: "Cinematic product reveals, camera paths, story moments, and reusable animation systems.",
    tags: ["timeline", "animation", "keyframes", "editor"],
    image: "/screenshots/theatre.webp",
    color: "#b8c0ff",
    size: "wide"
  },
  {
    id: "tweakpane",
    title: "Tweakpane",
    url: "https://tweakpane.github.io/docs/",
    github: "https://github.com/cocopon/tweakpane",
    category: "Interaction & UI",
    field: "Controls",
    kind: "tool",
    status: "production",
    description:
      "A compact parameter panel for tuning visuals, shaders, post effects, procedural generation, and animation values.",
    bestFor: "Creative coding sketches that need a small, framework-agnostic control surface.",
    tags: ["controls", "debug", "creative coding", "parameters"],
    color: "#c8b6ff"
  },
  {
    id: "drei-controls",
    title: "Drei Controls",
    url: "https://drei.docs.pmnd.rs/controls/introduction",
    github: "https://github.com/pmndrs/drei",
    category: "Interaction & UI",
    field: "Camera controls",
    kind: "library",
    status: "core",
    description:
      "Drei wraps common Three.js controls including OrbitControls, CameraControls, PointerLockControls, PresentationControls, and more.",
    bestFor: "Choosing the right camera interaction for editors, games, galleries, and object viewers.",
    tags: ["camera", "controls", "orbit", "presentation"],
    color: "#f4f0e8"
  },
  {
    id: "drei-html",
    title: "Drei Html",
    url: "https://drei.docs.pmnd.rs/misc/html",
    github: "https://github.com/pmndrs/drei",
    category: "Interaction & UI",
    field: "DOM overlays",
    kind: "library",
    status: "core",
    description:
      "Projects DOM into a 3D scene with occlusion options, making labels, controls, popovers, and hybrid interfaces possible.",
    bestFor: "Mixing accessible HTML UI with spatial scene anchors.",
    tags: ["html", "labels", "dom", "hybrid ui"],
    color: "#e9ecef"
  },
  {
    id: "drei-view",
    title: "Drei View",
    url: "https://drei.docs.pmnd.rs/portals/view",
    github: "https://github.com/pmndrs/drei",
    category: "Interaction & UI",
    field: "Multi-view canvas",
    kind: "library",
    status: "production",
    description:
      "Lets a single canvas render multiple viewports tied to DOM regions, avoiding multiple WebGL context limits.",
    bestFor: "Product grids, editorial pages, and dashboards with many 3D previews.",
    tags: ["viewport", "dom", "single canvas", "performance"],
    color: "#dee2e6"
  },
  {
    id: "gltf-transform",
    title: "glTF Transform",
    url: "https://gltf-transform.dev",
    github: "https://github.com/donmccurdy/glTF-Transform",
    category: "Asset Pipeline",
    field: "Optimization",
    kind: "tool",
    status: "production",
    description:
      "A CLI and SDK for inspecting, optimizing, compressing, converting, and transforming glTF assets before they reach R3F.",
    bestFor: "Shrinking models, deduplicating textures, adding KTX2, Draco, meshopt, and fixing asset hygiene.",
    tags: ["gltf", "optimization", "compression", "cli"],
    color: "#8ecae6"
  },
  {
    id: "gltf-report",
    title: "glTF Report",
    url: "https://gltf.report",
    github: "https://github.com/donmccurdy/glTF-Report",
    category: "Asset Pipeline",
    field: "Inspection",
    kind: "tool",
    status: "production",
    description:
      "Browser-based model inspection with scene stats, textures, animations, materials, validation, and optimization hints.",
    bestFor: "Diagnosing why a model is heavy, broken, unlit, oversized, or animation-hostile.",
    tags: ["gltf", "inspection", "validation", "assets"],
    image: "/screenshots/gltf-report.webp",
    color: "#90dbf4",
    size: "wide"
  },
  {
    id: "gltf-validator",
    title: "glTF Validator",
    url: "https://github.khronos.org/glTF-Validator/",
    github: "https://github.com/KhronosGroup/glTF-Validator",
    category: "Asset Pipeline",
    field: "Validation",
    kind: "tool",
    status: "production",
    description:
      "Official validation for glTF 2.0 assets, useful before blaming R3F for a malformed model.",
    bestFor: "Checking export correctness from Blender, Spline, CAD, or marketplace assets.",
    tags: ["gltf", "validator", "khronos", "assets"],
    color: "#adb5bd"
  },
  {
    id: "blender",
    title: "Blender",
    url: "https://www.blender.org",
    github: "https://github.com/blender/blender",
    category: "Asset Pipeline",
    field: "3D creation",
    kind: "tool",
    status: "production",
    description:
      "The open-source 3D creation suite for modeling, rigging, animation, UVs, materials, baking, and glTF export.",
    bestFor: "Owning the asset pipeline instead of depending only on downloaded models.",
    tags: ["modeling", "animation", "gltf", "rigging"],
    color: "#f4a261"
  },
  {
    id: "polyhaven",
    title: "Poly Haven",
    url: "https://polyhaven.com",
    github: "https://github.com/Poly-Haven",
    category: "Asset Pipeline",
    field: "Assets",
    kind: "asset",
    status: "production",
    description:
      "Free public-domain HDRIs, textures, and models that are excellent for environment lighting and material studies.",
    bestFor: "Fast, legal environment maps and PBR texture sources.",
    tags: ["hdri", "textures", "models", "cc0"],
    image: "/screenshots/polyhaven.webp",
    color: "#d4a373",
    size: "tall"
  },
  {
    id: "sketchfab",
    title: "Sketchfab",
    url: "https://sketchfab.com",
    category: "Asset Pipeline",
    field: "Marketplace",
    kind: "asset",
    status: "production",
    description:
      "Large library of 3D models across licenses, often available as glTF or convertible into glTF workflows.",
    bestFor: "Finding reference models, scanned objects, props, and prototype assets.",
    tags: ["models", "marketplace", "gltf", "scans"],
    color: "#78c6a3"
  },
  {
    id: "ready-player-me",
    title: "Ready Player Me",
    url: "https://readyplayer.me",
    github: "https://github.com/readyplayerme",
    category: "Asset Pipeline",
    field: "Avatars",
    kind: "asset",
    status: "production",
    description:
      "Avatar creation and integration platform frequently used in R3F and WebXR social experiences.",
    bestFor: "Humanoid avatars, profile-driven characters, and quick multiplayer identity.",
    tags: ["avatars", "gltf", "characters", "xr"],
    color: "#a0c4ff"
  },
  {
    id: "mixamo",
    title: "Mixamo",
    url: "https://www.mixamo.com",
    category: "Asset Pipeline",
    field: "Animation",
    kind: "asset",
    status: "production",
    description:
      "Character rigging and motion library that can feed Blender and GLTF character animation workflows.",
    bestFor: "Rapid prototyping for third-person characters and NPCs.",
    tags: ["animation", "characters", "rigging", "fbx"],
    color: "#fbc4ab"
  },
  {
    id: "draco",
    title: "Draco",
    url: "https://google.github.io/draco/",
    github: "https://github.com/google/draco",
    category: "Asset Pipeline",
    field: "Compression",
    kind: "tool",
    status: "production",
    description:
      "Geometry compression used by many GLTF pipelines to shrink mesh payloads.",
    bestFor: "Reducing model download size when decode cost is acceptable.",
    tags: ["compression", "geometry", "gltf", "google"],
    color: "#cddafd"
  },
  {
    id: "ktx",
    title: "KTX Software",
    url: "https://github.khronos.org/KTX-Software/",
    github: "https://github.com/KhronosGroup/KTX-Software",
    category: "Asset Pipeline",
    field: "Texture compression",
    kind: "tool",
    status: "production",
    description:
      "Texture compression tooling for KTX2 and Basis Universal, critical for mobile and XR memory budgets.",
    bestFor: "Compressing textures so a beautiful scene does not collapse on phones and headsets.",
    tags: ["textures", "ktx2", "basis", "compression"],
    color: "#b5ead7"
  },
  {
    id: "meshoptimizer",
    title: "meshoptimizer",
    url: "https://meshoptimizer.org",
    github: "https://github.com/zeux/meshoptimizer",
    category: "Asset Pipeline",
    field: "Mesh compression",
    kind: "tool",
    status: "production",
    description:
      "Mesh optimization and compression library used in glTF pipelines for smaller and faster geometry.",
    bestFor: "High-volume models, scanned meshes, and performance-conscious delivery.",
    tags: ["meshopt", "compression", "geometry", "gltf"],
    color: "#b0c4b1"
  },
  {
    id: "spline",
    title: "Spline",
    url: "https://spline.design",
    github: "https://github.com/splinetool/react-spline",
    category: "Asset Pipeline",
    field: "No-code 3D",
    kind: "tool",
    status: "production",
    description:
      "Browser-based 3D design tool with React integration, useful for fast art-directed scenes and lightweight interactive assets.",
    bestFor: "Design-led teams that need 3D layouts before investing in a full code pipeline.",
    tags: ["design", "react", "3d tool", "interactive"],
    color: "#d0f4de"
  },
  {
    id: "model-viewer",
    title: "model-viewer",
    url: "https://modelviewer.dev",
    github: "https://github.com/google/model-viewer",
    category: "Asset Pipeline",
    field: "Model display",
    kind: "library",
    status: "production",
    description:
      "A web component for glTF display and AR handoff. Not R3F, but useful as a benchmark and fallback for product viewers.",
    bestFor: "Comparing R3F viewers to a battle-tested model presentation component.",
    tags: ["gltf", "ar", "web component", "viewer"],
    color: "#fefae0"
  },
  {
    id: "rapier",
    title: "Rapier",
    url: "https://rapier.rs",
    github: "https://github.com/dimforge/rapier",
    category: "Gaming & Physics",
    field: "Physics engine",
    kind: "library",
    status: "production",
    description:
      "Rust and WASM physics engine behind React Three Rapier, with rigid bodies, joints, colliders, and queries.",
    bestFor: "Understanding engine-level physics features beyond the React wrapper.",
    tags: ["physics", "wasm", "collisions", "rapier"],
    color: "#ffdd00"
  },
  {
    id: "cannon-es",
    title: "cannon-es",
    url: "https://pmndrs.github.io/cannon-es/",
    github: "https://github.com/pmndrs/cannon-es",
    category: "Gaming & Physics",
    field: "Physics engine",
    kind: "library",
    status: "production",
    description:
      "Maintained ES module fork of Cannon.js and the physics base for @react-three/cannon projects.",
    bestFor: "Existing Cannon workflows or lighter physics demos where Rapier is not required.",
    tags: ["physics", "cannon", "rigid bodies"],
    color: "#ffb703"
  },
  {
    id: "react-three-cannon",
    title: "React Three Cannon",
    url: "https://github.com/pmndrs/use-cannon",
    github: "https://github.com/pmndrs/use-cannon",
    category: "Gaming & Physics",
    field: "Physics",
    kind: "library",
    status: "production",
    description:
      "Hooks-based R3F bindings for Cannon physics, with worker support and a mature example set.",
    bestFor: "Projects already built around Cannon or examples using useBox, useSphere, and constraints.",
    tags: ["physics", "cannon", "worker", "hooks"],
    color: "#ffd166"
  },
  {
    id: "ecctrl",
    title: "Ecctrl",
    url: "https://github.com/pmndrs/ecctrl",
    github: "https://github.com/pmndrs/ecctrl",
    category: "Gaming & Physics",
    field: "Character controller",
    kind: "library",
    status: "production",
    description:
      "Floating rigid-body character controller built on R3F and React Three Rapier for third-person movement.",
    bestFor: "Jump-starting platformers, walking demos, avatar worlds, and portfolio games.",
    tags: ["character", "controller", "rapier", "games"],
    color: "#ffafcc"
  },
  {
    id: "koota",
    title: "Koota",
    url: "https://github.com/pmndrs/koota",
    github: "https://github.com/pmndrs/koota",
    category: "Gaming & Physics",
    field: "ECS state",
    kind: "library",
    status: "experimental",
    description:
      "Entity-component state management optimized for real-time apps, games, XR experiences, and React integration.",
    bestFor: "Game-like scenes where objects and behaviors should be modeled as systems.",
    tags: ["ecs", "state", "games", "xr"],
    color: "#9bf6ff"
  },
  {
    id: "miniplex",
    title: "Miniplex",
    url: "https://github.com/hmans/miniplex",
    github: "https://github.com/hmans/miniplex",
    category: "Gaming & Physics",
    field: "ECS",
    kind: "library",
    status: "production",
    description:
      "Small ECS library that has been used in R3F game experiments and keeps entity queries ergonomic.",
    bestFor: "Game prototypes that outgrow component-local React state.",
    tags: ["ecs", "entities", "games", "state"],
    color: "#a0c4ff"
  },
  {
    id: "bitecs",
    title: "bitECS",
    url: "https://github.com/NateTheGreatt/bitECS",
    github: "https://github.com/NateTheGreatt/bitECS",
    category: "Gaming & Physics",
    field: "ECS",
    kind: "library",
    status: "production",
    description:
      "Data-oriented ECS for JavaScript with an emphasis on performance and game-style simulations.",
    bestFor: "High-entity-count simulations where cache-friendly data layout matters.",
    tags: ["ecs", "data-oriented", "games", "simulation"],
    color: "#bdb2ff"
  },
  {
    id: "yuka",
    title: "Yuka",
    url: "https://mugen87.github.io/yuka/",
    github: "https://github.com/Mugen87/yuka",
    category: "Gaming & Physics",
    field: "Game AI",
    kind: "library",
    status: "production",
    description:
      "JavaScript game AI library with steering behaviors, nav meshes, pathfinding, fuzzy logic, and state machines.",
    bestFor: "NPC movement, flocking, steering, and AI behaviors in R3F games.",
    tags: ["ai", "pathfinding", "npc", "steering"],
    color: "#caffbf"
  },
  {
    id: "three-pathfinding",
    title: "three-pathfinding",
    url: "https://github.com/donmccurdy/three-pathfinding",
    github: "https://github.com/donmccurdy/three-pathfinding",
    category: "Gaming & Physics",
    field: "Navigation",
    kind: "library",
    status: "production",
    description:
      "Navigation mesh pathfinding toolkit for Three.js scenes, useful when characters need to move through authored levels.",
    bestFor: "NPC route finding in GLTF environments and game maps.",
    tags: ["navmesh", "pathfinding", "npc", "three.js"],
    color: "#fdffb6"
  },
  {
    id: "recast-navigation",
    title: "recast-navigation-js",
    url: "https://github.com/isaac-mason/recast-navigation-js",
    github: "https://github.com/isaac-mason/recast-navigation-js",
    category: "Gaming & Physics",
    field: "Navigation",
    kind: "library",
    status: "production",
    description:
      "WASM port of Recast Navigation for generating and querying navigation meshes in JavaScript.",
    bestFor: "More serious AI navigation than hand-authored paths can support.",
    tags: ["navmesh", "wasm", "pathfinding", "games"],
    color: "#ffd6a5"
  },
  {
    id: "geckos",
    title: "geckos.io",
    url: "https://geckos.io",
    github: "https://github.com/geckosio/geckos.io",
    category: "Gaming & Physics",
    field: "Networking",
    kind: "library",
    status: "production",
    description:
      "Real-time client-server networking over WebRTC data channels, built with browser games in mind.",
    bestFor: "Low-latency multiplayer experiments without immediately building a native stack.",
    tags: ["multiplayer", "webrtc", "networking", "games"],
    color: "#9bf6ff"
  },
  {
    id: "colyseus",
    title: "Colyseus",
    url: "https://colyseus.io",
    github: "https://github.com/colyseus/colyseus",
    category: "Gaming & Physics",
    field: "Multiplayer",
    kind: "library",
    status: "production",
    description:
      "Node.js multiplayer framework with rooms, state sync, matchmaking, and clients for browser games.",
    bestFor: "R3F games that need authoritative rooms and repeatable multiplayer state.",
    tags: ["multiplayer", "rooms", "state sync", "server"],
    color: "#a9def9"
  },
  {
    id: "playroom",
    title: "PlayroomKit",
    url: "https://joinplayroom.com",
    github: "https://github.com/asadm/playroom",
    category: "Gaming & Physics",
    field: "Multiplayer",
    kind: "library",
    status: "production",
    description:
      "Fast multiplayer prototyping layer used by many web game demos for room joins, player state, and quick sharing.",
    bestFor: "Playable R3F prototypes where setup friction matters more than full backend control.",
    tags: ["multiplayer", "prototype", "rooms", "games"],
    color: "#ffc6ff"
  },
  {
    id: "shader-park",
    title: "Shader Park",
    url: "https://shaderpark.com",
    github: "https://github.com/shader-park",
    category: "Creative Coding & Shaders",
    field: "Procedural shaders",
    kind: "tool",
    status: "creative",
    description:
      "A code-based procedural shader environment with a React Three Fiber integration for expressive sculptural visuals.",
    bestFor: "Organic forms, audio-reactive visuals, and shader art without starting from raw GLSL.",
    tags: ["shaders", "procedural", "code art", "r3f"],
    image: "/screenshots/shader-park.webp",
    color: "#f15bb5",
    size: "wide"
  },
  {
    id: "book-of-shaders",
    title: "The Book of Shaders",
    url: "https://thebookofshaders.com",
    github: "https://github.com/patriciogonzalezvivo/thebookofshaders",
    category: "Creative Coding & Shaders",
    field: "GLSL learning",
    kind: "course",
    status: "learning",
    description:
      "A durable, visual introduction to fragment shaders, shaping functions, color, noise, patterns, and generative thinking.",
    bestFor: "Learning enough GLSL to customize R3F materials and post effects with confidence.",
    tags: ["glsl", "shaders", "learning", "generative"],
    image: "/screenshots/book-of-shaders.webp",
    color: "#fee440",
    size: "wide"
  },
  {
    id: "shadertoy",
    title: "Shadertoy",
    url: "https://www.shadertoy.com",
    category: "Creative Coding & Shaders",
    field: "Shader archive",
    kind: "showcase",
    status: "creative",
    description:
      "Massive archive of fragment shader techniques, raymarching, procedural materials, particles, and visual experiments.",
    bestFor: "Studying techniques that can be adapted into custom ShaderMaterial or postprocessing passes.",
    tags: ["glsl", "raymarching", "procedural", "reference"],
    color: "#00bbf9"
  },
  {
    id: "vite-plugin-glsl",
    title: "vite-plugin-glsl",
    url: "https://github.com/UstymUkhman/vite-plugin-glsl",
    github: "https://github.com/UstymUkhman/vite-plugin-glsl",
    category: "Creative Coding & Shaders",
    field: "Shader imports",
    kind: "tool",
    status: "production",
    description:
      "Vite plugin for importing, compressing, and composing GLSL shader files in modern frontend projects.",
    bestFor: "Keeping shader code out of string literals and closer to normal source files.",
    tags: ["vite", "glsl", "shader", "tooling"],
    color: "#00f5d4"
  },
  {
    id: "glslify",
    title: "glslify",
    url: "https://github.com/glslify/glslify",
    github: "https://github.com/glslify/glslify",
    category: "Creative Coding & Shaders",
    field: "Shader modules",
    kind: "tool",
    status: "production",
    description:
      "Module system for GLSL that makes reusable shader functions and shader package composition practical.",
    bestFor: "Borrowing and composing battle-tested GLSL snippets.",
    tags: ["glsl", "modules", "shader", "npm"],
    color: "#98f5e1"
  },
  {
    id: "postprocessing",
    title: "postprocessing",
    url: "https://pmndrs.github.io/postprocessing/public/docs/",
    github: "https://github.com/pmndrs/postprocessing",
    category: "Creative Coding & Shaders",
    field: "Effects engine",
    kind: "library",
    status: "production",
    description:
      "The lower-level effects engine underneath React Postprocessing, useful for custom effects and deeper composer work.",
    bestFor: "Writing custom effect passes when the React wrapper is not enough.",
    tags: ["effects", "postprocessing", "composer", "shader"],
    color: "#f7aef8"
  },
  {
    id: "n8ao",
    title: "n8ao",
    url: "https://github.com/N8python/n8ao",
    github: "https://github.com/N8python/n8ao",
    category: "Creative Coding & Shaders",
    field: "Ambient occlusion",
    kind: "library",
    status: "production",
    description:
      "Screen-space ambient occlusion effect for Three.js and postprocessing pipelines with strong visual payoff.",
    bestFor: "Adding depth and contact shadows to stylized and product scenes.",
    tags: ["ssao", "postprocessing", "lighting", "depth"],
    color: "#ced4da"
  },
  {
    id: "troika-text",
    title: "troika-three-text",
    url: "https://protectwise.github.io/troika/troika-three-text/",
    github: "https://github.com/protectwise/troika",
    category: "Creative Coding & Shaders",
    field: "Text rendering",
    kind: "library",
    status: "production",
    description:
      "High-quality SDF text rendering for Three.js, also used through Drei Text abstractions.",
    bestFor: "Crisp 3D typography, labels, title cards, and data annotation.",
    tags: ["text", "sdf", "typography", "drei"],
    color: "#e0fbfc"
  },
  {
    id: "meshline",
    title: "MeshLine",
    url: "https://github.com/pmndrs/meshline",
    github: "https://github.com/pmndrs/meshline",
    category: "Creative Coding & Shaders",
    field: "Lines",
    kind: "library",
    status: "production",
    description:
      "Triangle-based line rendering for thick, textured, animated lines beyond WebGL native line limits.",
    bestFor: "Trails, paths, drawings, graphs, signatures, and stylized outlines.",
    tags: ["lines", "trails", "geometry", "drawing"],
    color: "#bde0fe"
  },
  {
    id: "canvas-sketch",
    title: "canvas-sketch",
    url: "https://github.com/mattdesl/canvas-sketch",
    github: "https://github.com/mattdesl/canvas-sketch",
    category: "Creative Coding & Shaders",
    field: "Sketching",
    kind: "tool",
    status: "creative",
    description:
      "A creative coding toolkit for rapid sketches, exports, and generative studies that translate well into R3F thinking.",
    bestFor: "Building a habit of small visual experiments before turning them into React components.",
    tags: ["creative coding", "sketches", "generative", "canvas"],
    color: "#fdfcdc"
  },
  {
    id: "p5",
    title: "p5.js",
    url: "https://p5js.org",
    github: "https://github.com/processing/p5.js",
    category: "Creative Coding & Shaders",
    field: "Creative coding",
    kind: "library",
    status: "learning",
    description:
      "Friendly creative coding library and community. Not R3F, but excellent for learning generative systems and visual algorithms.",
    bestFor: "Developing artistic instincts that transfer into procedural R3F scenes.",
    tags: ["creative coding", "generative", "learning", "art"],
    color: "#ff70a6"
  },
  {
    id: "hydra",
    title: "Hydra",
    url: "https://hydra.ojack.xyz",
    github: "https://github.com/hydra-synth/hydra",
    category: "Creative Coding & Shaders",
    field: "Live visuals",
    kind: "tool",
    status: "creative",
    description:
      "Live-coded visual synthesizer that builds intuition for feedback, texture processing, and procedural composition.",
    bestFor: "Visual performance ideas and shader-like composition patterns.",
    tags: ["live coding", "feedback", "visuals", "generative"],
    color: "#70d6ff"
  },
  {
    id: "regl",
    title: "regl",
    url: "https://regl.party",
    github: "https://github.com/regl-project/regl",
    category: "Creative Coding & Shaders",
    field: "WebGL abstraction",
    kind: "library",
    status: "learning",
    description:
      "Functional WebGL library with excellent examples for understanding draw calls, buffers, and shader programs.",
    bestFor: "Learning GPU patterns below Three.js without dropping to raw WebGL immediately.",
    tags: ["webgl", "learning", "draw calls", "shaders"],
    color: "#80ed99"
  },
  {
    id: "webxr-samples",
    title: "WebXR Samples",
    url: "https://immersive-web.github.io/webxr-samples/",
    github: "https://github.com/immersive-web/webxr-samples",
    category: "XR, AR & VR",
    field: "Standards examples",
    kind: "showcase",
    status: "core",
    description:
      "Official sample collection for WebXR capabilities, including immersive VR, AR, anchors, hit tests, layers, and input.",
    bestFor: "Understanding what the browser platform supports before adding React abstractions.",
    tags: ["webxr", "standards", "samples", "vr", "ar"],
    image: "/screenshots/webxr-samples.webp",
    color: "#a2d2ff",
    size: "wide"
  },
  {
    id: "immersive-web",
    title: "Immersive Web WG",
    url: "https://immersiveweb.dev",
    github: "https://github.com/immersive-web",
    category: "XR, AR & VR",
    field: "Standards",
    kind: "reference",
    status: "core",
    description:
      "Home for WebXR standards work, explainer documents, samples, and links into device/input specifications.",
    bestFor: "Tracking browser-level XR capabilities and constraints.",
    tags: ["webxr", "standards", "browser", "spec"],
    color: "#bde0fe"
  },
  {
    id: "mdn-webxr",
    title: "MDN WebXR",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API",
    category: "XR, AR & VR",
    field: "Reference",
    kind: "docs",
    status: "core",
    description:
      "Practical reference for WebXR concepts, sessions, spaces, frame loops, inputs, and browser support.",
    bestFor: "Grounding R3F XR behavior in platform vocabulary.",
    tags: ["webxr", "mdn", "reference", "browser"],
    color: "#cdb4db"
  },
  {
    id: "three-webxr",
    title: "Three.js WebXR Manual",
    url: "https://threejs.org/manual/#en/webxr-basics",
    github: "https://github.com/mrdoob/three.js",
    category: "XR, AR & VR",
    field: "Three.js XR",
    kind: "docs",
    status: "core",
    description:
      "Three.js explanation of enabling XR rendering and controller interaction at the engine level.",
    bestFor: "Debugging what R3F and React Three XR configure for you.",
    tags: ["webxr", "three.js", "manual", "controllers"],
    color: "#d9ed92"
  },
  {
    id: "aframe",
    title: "A-Frame",
    url: "https://aframe.io",
    github: "https://github.com/aframevr/aframe",
    category: "XR, AR & VR",
    field: "WebXR framework",
    kind: "library",
    status: "production",
    description:
      "HTML-like WebXR framework built on Three.js. Not React, but important context for declarative XR on the web.",
    bestFor: "Studying approachable XR patterns and comparing declarative scene models.",
    tags: ["webxr", "vr", "ar", "three.js"],
    color: "#ef476f"
  },
  {
    id: "mindar",
    title: "MindAR",
    url: "https://hiukim.github.io/mind-ar-js-doc/",
    github: "https://github.com/hiukim/mind-ar-js",
    category: "XR, AR & VR",
    field: "Image tracking AR",
    kind: "library",
    status: "production",
    description:
      "Web AR library for image tracking and face tracking with Three.js examples.",
    bestFor: "Marker-like AR prototypes that do not require full WebXR device support.",
    tags: ["ar", "image tracking", "face tracking", "three.js"],
    color: "#06d6a0"
  },
  {
    id: "webxr-input-profiles",
    title: "WebXR Input Profiles",
    url: "https://immersive-web.github.io/webxr-input-profiles/",
    github: "https://github.com/immersive-web/webxr-input-profiles",
    category: "XR, AR & VR",
    field: "Controller assets",
    kind: "asset",
    status: "core",
    description:
      "Controller profile registry and assets used to represent XR input devices consistently across platforms.",
    bestFor: "Controller models, button mappings, and cross-device XR input handling.",
    tags: ["webxr", "controllers", "input", "assets"],
    color: "#ffd166"
  },
  {
    id: "awesome-webxr",
    title: "Awesome WebXR Development",
    url: "https://github.com/Pico-Developer/awesome-webxr-development",
    github: "https://github.com/Pico-Developer/awesome-webxr-development",
    category: "XR, AR & VR",
    field: "Resource list",
    kind: "community",
    status: "learning",
    description:
      "Large, categorized list of engines, frameworks, optimization resources, input, assets, audio, and learning links for WebXR.",
    bestFor: "Branching beyond React Three into the wider immersive web ecosystem.",
    tags: ["webxr", "resources", "awesome", "xr"],
    color: "#caf0f8"
  },
  {
    id: "r3f-scroll-rig",
    title: "R3F Scroll Rig",
    url: "https://github.com/14islands/r3f-scroll-rig",
    github: "https://github.com/14islands/r3f-scroll-rig",
    category: "Web Experiences",
    field: "DOM and WebGL sync",
    kind: "library",
    status: "production",
    description:
      "Global canvas and scroll synchronization system for progressively enhancing React websites with WebGL.",
    bestFor: "Editorial sites, portfolios, product pages, and grids that blend DOM layout with 3D.",
    tags: ["scroll", "global canvas", "dom", "websites"],
    image: "/screenshots/r3f-scroll-rig.webp",
    color: "#f5ebe0",
    size: "wide"
  },
  {
    id: "triplex",
    title: "Triplex",
    url: "https://triplex.dev",
    github: "https://github.com/pmndrs/triplex",
    category: "Web Experiences",
    field: "Visual editor",
    kind: "tool",
    status: "production",
    description:
      "Open-source visual workspace for React and Three Fiber components where code remains the source of truth.",
    bestFor: "Designing 2D and 3D components visually without leaving a code-centric workflow.",
    tags: ["editor", "visual", "r3f", "code"],
    image: "/screenshots/triplex.webp",
    color: "#e9d8a6",
    size: "wide"
  },
  {
    id: "react-three-next",
    title: "React Three Next",
    url: "https://github.com/pmndrs/react-three-next",
    github: "https://github.com/pmndrs/react-three-next",
    category: "Web Experiences",
    field: "Starter",
    kind: "starter",
    status: "production",
    description:
      "Next.js starter for React Three Fiber with common setup patterns for hybrid web and canvas apps.",
    bestFor: "Full website builds where SSR routes, HTML sections, and R3F views need to coexist.",
    tags: ["starter", "next.js", "websites", "r3f"],
    color: "#e5e5e5"
  },
  {
    id: "lenis",
    title: "Lenis",
    url: "https://lenis.darkroom.engineering",
    github: "https://github.com/darkroomengineering/lenis",
    category: "Web Experiences",
    field: "Scrolling",
    kind: "library",
    status: "production",
    description:
      "Smooth scrolling library commonly paired with editorial R3F experiences and scroll-linked animation systems.",
    bestFor: "Polished scroll narratives where DOM and WebGL motion need to feel connected.",
    tags: ["scroll", "motion", "websites", "interaction"],
    color: "#eae2b7"
  },
  {
    id: "gsap",
    title: "GSAP",
    url: "https://gsap.com",
    github: "https://github.com/greensock/GSAP",
    category: "Web Experiences",
    field: "Animation",
    kind: "library",
    status: "production",
    description:
      "Animation platform often used for timeline-driven DOM and Three.js values, scroll triggers, and product reveals.",
    bestFor: "When designers expect exact timeline control across DOM and WebGL.",
    tags: ["animation", "timeline", "scroll", "websites"],
    color: "#b7e4c7"
  },
  {
    id: "framer-motion",
    title: "Motion",
    url: "https://motion.dev",
    github: "https://github.com/motiondivision/motion",
    category: "Web Experiences",
    field: "Animation",
    kind: "library",
    status: "production",
    description:
      "React animation library for UI around canvas experiences, formerly Framer Motion.",
    bestFor: "The DOM half of hybrid R3F websites, panels, modals, and transitions.",
    tags: ["animation", "react", "ui", "motion"],
    color: "#dee2ff"
  },
  {
    id: "codrops-webgl",
    title: "Codrops WebGL",
    url: "https://tympanus.net/codrops/tag/webgl/",
    category: "Web Experiences",
    field: "Editorial tutorials",
    kind: "article",
    status: "creative",
    description:
      "A long-running source of polished WebGL, Three.js, shader, scroll, and interaction breakdowns.",
    bestFor: "Seeing how visual ideas are packaged into web-native experiences.",
    tags: ["tutorials", "webgl", "interaction", "websites"],
    image: "/screenshots/codrops.webp",
    color: "#fefae0",
    size: "wide"
  },
  {
    id: "r3f-perf",
    title: "R3F Perf",
    url: "https://github.com/utsuboco/r3f-perf",
    github: "https://github.com/utsuboco/r3f-perf",
    category: "Performance & Debug",
    field: "Profiling",
    kind: "tool",
    status: "production",
    description:
      "In-scene performance monitor for R3F with FPS, memory, draw calls, geometries, textures, shaders, and graphs.",
    bestFor: "Seeing exactly when a scene becomes too expensive.",
    tags: ["performance", "profiling", "fps", "draw calls"],
    color: "#fbf8cc"
  },
  {
    id: "stats-gl",
    title: "stats-gl",
    url: "https://github.com/RenaudRohlinger/stats-gl",
    github: "https://github.com/RenaudRohlinger/stats-gl",
    category: "Performance & Debug",
    field: "Profiling",
    kind: "tool",
    status: "production",
    description:
      "Modern WebGL performance panel for GPU and CPU timing, memory, and frame diagnostics.",
    bestFor: "Lightweight runtime monitoring in plain Three.js or R3F scenes.",
    tags: ["performance", "profiling", "webgl", "gpu"],
    color: "#b9fbc0"
  },
  {
    id: "spector",
    title: "Spector.js",
    url: "https://spector.babylonjs.com",
    github: "https://github.com/BabylonJS/Spector.js",
    category: "Performance & Debug",
    field: "Frame capture",
    kind: "tool",
    status: "production",
    description:
      "WebGL frame inspection tool for draw calls, shader programs, textures, uniforms, and render-state debugging.",
    bestFor: "Finding what the GPU is actually drawing when abstractions hide too much.",
    tags: ["webgl", "debug", "frame capture", "gpu"],
    color: "#e0fbfc"
  },
  {
    id: "three-mesh-bvh",
    title: "three-mesh-bvh",
    url: "https://github.com/gkjohnson/three-mesh-bvh",
    github: "https://github.com/gkjohnson/three-mesh-bvh",
    category: "Performance & Debug",
    field: "Spatial acceleration",
    kind: "library",
    status: "production",
    description:
      "Bounding volume hierarchy acceleration for raycasting, collision queries, shapecasts, and geometry operations.",
    bestFor: "Large meshes, picking, collision-like tests, CSG, and path tracing support.",
    tags: ["bvh", "raycasting", "geometry", "performance"],
    color: "#a3cef1"
  },
  {
    id: "three-bvh-csg",
    title: "three-bvh-csg",
    url: "https://github.com/gkjohnson/three-bvh-csg",
    github: "https://github.com/gkjohnson/three-bvh-csg",
    category: "Performance & Debug",
    field: "Geometry",
    kind: "library",
    status: "production",
    description:
      "Fast CSG implementation built on top of three-mesh-bvh for dynamic boolean mesh operations.",
    bestFor: "Procedural CAD-like features and user-authored boolean editing.",
    tags: ["csg", "bvh", "geometry", "cad"],
    color: "#ffcfd2"
  },
  {
    id: "detect-gpu",
    title: "detect-gpu",
    url: "https://github.com/pmndrs/detect-gpu",
    github: "https://github.com/pmndrs/detect-gpu",
    category: "Performance & Debug",
    field: "Capability detection",
    kind: "library",
    status: "production",
    description:
      "Classifies client GPU capability so apps can choose quality levels, effects, and fallbacks responsibly.",
    bestFor: "Avoiding a single heavy art direction for every device.",
    tags: ["gpu", "fallbacks", "quality", "performance"],
    color: "#d8f3dc"
  },
  {
    id: "webgl-report",
    title: "WebGL Report",
    url: "https://webglreport.com",
    category: "Performance & Debug",
    field: "Capabilities",
    kind: "tool",
    status: "production",
    description:
      "Simple inspection of browser WebGL capabilities, extensions, limits, and renderer details.",
    bestFor: "Checking device limits when debugging user reports.",
    tags: ["webgl", "capabilities", "limits", "debug"],
    color: "#f1faee"
  },
  {
    id: "threejs-journey",
    title: "Three.js Journey",
    url: "https://threejs-journey.com",
    category: "Learning & Theory",
    field: "Course",
    kind: "course",
    status: "learning",
    description:
      "Deep paid course by Bruno Simon covering Three.js and modern workflows, with a React Three Fiber chapter.",
    bestFor: "Going from beginner to fluent through structured exercises and production-minded examples.",
    tags: ["course", "three.js", "r3f", "bruno simon"],
    image: "/screenshots/threejs-journey.webp",
    color: "#f6bd60",
    size: "wide"
  },
  {
    id: "sbcode",
    title: "SBCode R3F Tutorials",
    url: "https://sbcode.net/react-three-fiber/",
    category: "Learning & Theory",
    field: "Tutorials",
    kind: "course",
    status: "learning",
    description:
      "Large set of practical React Three Fiber tutorials covering basics, Drei helpers, physics, loaders, shaders, and patterns.",
    bestFor: "Looking up a focused example when you need one concept quickly.",
    tags: ["tutorials", "r3f", "examples", "learning"],
    image: "/screenshots/sbcode.webp",
    color: "#e0fbfc",
    size: "wide"
  },
  {
    id: "discover-three",
    title: "Discover Three.js",
    url: "https://discoverthreejs.com",
    github: "https://github.com/looeee/discoverthreejs-site",
    category: "Learning & Theory",
    field: "Book",
    kind: "course",
    status: "learning",
    description:
      "Readable Three.js book with best practices and mental models that map directly into R3F development.",
    bestFor: "Building a solid foundation before abstracting everything through React.",
    tags: ["three.js", "book", "best practices", "learning"],
    color: "#ccd5ae"
  },
  {
    id: "threejs-fundamentals",
    title: "Three.js Fundamentals",
    url: "https://threejsfundamentals.org",
    github: "https://github.com/gfxfundamentals/threejsfundamentals",
    category: "Learning & Theory",
    field: "Tutorials",
    kind: "course",
    status: "learning",
    description:
      "Extensive, example-heavy explanations of Three.js cameras, lights, textures, geometry, render targets, and more.",
    bestFor: "Understanding the engine behaviors R3F exposes as JSX.",
    tags: ["three.js", "fundamentals", "examples", "learning"],
    color: "#faedcd"
  },
  {
    id: "maxime-heckel",
    title: "Maxime Heckel",
    url: "https://blog.maximeheckel.com",
    github: "https://github.com/MaximeHeckel",
    category: "Learning & Theory",
    field: "Articles",
    kind: "article",
    status: "creative",
    description:
      "High-quality articles on shaders, R3F, lighting, render targets, effects, and interaction patterns.",
    bestFor: "Deep dives that connect code, visuals, and graphics concepts clearly.",
    tags: ["articles", "shaders", "r3f", "graphics"],
    color: "#bde0fe"
  },
  {
    id: "awesome-r3f",
    title: "Awesome React Three Fiber",
    url: "https://github.com/gsimone/awesome-react-three-fiber",
    github: "https://github.com/gsimone/awesome-react-three-fiber",
    category: "Learning & Theory",
    field: "Resource list",
    kind: "community",
    status: "learning",
    description:
      "Loose collection of R3F links, demos, tutorials, people, and experiments from the broader community.",
    bestFor: "Going down rabbit holes and finding older gems that do not surface in docs.",
    tags: ["awesome", "links", "community", "r3f"],
    color: "#fcd5ce"
  },
  {
    id: "gpu-gems",
    title: "GPU Gems",
    url: "https://developer.nvidia.com/gpugems/gpugems/contributors",
    category: "Learning & Theory",
    field: "Graphics theory",
    kind: "reference",
    status: "learning",
    description:
      "Classic GPU programming articles. Older, but still full of durable ideas for particles, lighting, simulation, and shaders.",
    bestFor: "Understanding where many modern shader and rendering techniques came from.",
    tags: ["graphics", "gpu", "shaders", "theory"],
    color: "#d8e2dc"
  },
  {
    id: "nature-of-code",
    title: "The Nature of Code",
    url: "https://natureofcode.com",
    github: "https://github.com/nature-of-code/noc-book-2",
    category: "Learning & Theory",
    field: "Generative systems",
    kind: "course",
    status: "learning",
    description:
      "Creative coding book about vectors, forces, particles, agents, autonomous behavior, physics, and generative systems.",
    bestFor: "Making R3F scenes feel alive instead of merely rendered.",
    tags: ["generative", "physics", "agents", "creative coding"],
    color: "#e9edc9"
  },
  {
    id: "examples-pmndrs",
    title: "pmndrs Examples",
    url: "https://examples.pmnd.rs",
    github: "https://github.com/pmndrs",
    category: "Showcases & Inspiration",
    field: "Demos",
    kind: "showcase",
    status: "creative",
    description:
      "Collection of polished demos from the pmndrs ecosystem showing what R3F, Drei, Rapier, and postprocessing can do together.",
    bestFor: "Reverse-engineering complete scene patterns and visual polish.",
    tags: ["examples", "demos", "pmndrs", "r3f"],
    image: "/screenshots/examples-pmndrs.webp",
    color: "#e9ecef",
    size: "wide"
  },
  {
    id: "bruno-simon",
    title: "Bruno Simon Portfolio",
    url: "https://bruno-simon.com",
    category: "Showcases & Inspiration",
    field: "Portfolio",
    kind: "showcase",
    status: "creative",
    description:
      "Benchmark interactive 3D portfolio that shaped many developers' idea of what a playful web experience can be.",
    bestFor: "Studying taste, interaction density, and game-like navigation in a website.",
    tags: ["portfolio", "interactive", "game", "inspiration"],
    color: "#fb8500"
  },
  {
    id: "awwwards-webgl",
    title: "Awwwards WebGL",
    url: "https://www.awwwards.com/websites/webgl/",
    category: "Showcases & Inspiration",
    field: "Gallery",
    kind: "showcase",
    status: "creative",
    description:
      "Gallery of high-end WebGL sites across agencies, brands, product launches, and experimental storytelling.",
    bestFor: "Art direction references and interaction patterns outside the code-library bubble.",
    tags: ["gallery", "webgl", "websites", "inspiration"],
    color: "#f8edeb"
  },
  {
    id: "lusion",
    title: "Lusion",
    url: "https://lusion.co",
    github: "https://github.com/lusionltd",
    category: "Showcases & Inspiration",
    field: "Studio",
    kind: "showcase",
    status: "creative",
    description:
      "Studio known for technical, art-directed WebGL, interactive brand work, and experimental web experiences.",
    bestFor: "Seeing how far creative frontend engineering can be pushed.",
    tags: ["studio", "webgl", "brand", "inspiration"],
    color: "#e5e5e5"
  },
  {
    id: "active-theory",
    title: "Active Theory",
    url: "https://activetheory.net",
    category: "Showcases & Inspiration",
    field: "Studio",
    kind: "showcase",
    status: "creative",
    description:
      "Interactive studio focused on immersive websites, installations, real-time graphics, and experience design.",
    bestFor: "High-end interaction references, not necessarily R3F-specific.",
    tags: ["studio", "immersive", "webgl", "inspiration"],
    color: "#111111"
  },
  {
    id: "frontend-horse",
    title: "Frontend Horse",
    url: "https://frontend.horse",
    category: "Showcases & Inspiration",
    field: "Community inspiration",
    kind: "community",
    status: "creative",
    description:
      "Creative frontend community and newsletter with frequent WebGL, animation, and delightful UI references.",
    bestFor: "Finding visually ambitious web work and process notes.",
    tags: ["community", "frontend", "creative", "inspiration"],
    color: "#fefae0"
  },
  {
    id: "react-globe-gl",
    title: "react-globe.gl",
    url: "https://vasturiano.github.io/react-globe.gl/",
    github: "https://github.com/vasturiano/react-globe.gl",
    category: "Data, Maps & AI",
    field: "Globe data viz",
    kind: "library",
    status: "production",
    description:
      "React component for Three.js-powered globes with arcs, points, polygons, labels, tiles, heatmaps, and custom layers.",
    bestFor: "Fast spatial data visualization without building a globe engine from scratch.",
    tags: ["data viz", "globe", "maps", "three.js"],
    color: "#90e0ef",
    size: "tall"
  },
  {
    id: "deck-gl",
    title: "deck.gl",
    url: "https://deck.gl",
    github: "https://github.com/visgl/deck.gl",
    category: "Data, Maps & AI",
    field: "Data visualization",
    kind: "library",
    status: "production",
    description:
      "GPU-powered visualization framework for large-scale geospatial and non-geospatial data, with React integration.",
    bestFor: "When the problem is massive data rendering more than scene composition.",
    tags: ["data viz", "maps", "webgl", "react"],
    color: "#ade8f4"
  },
  {
    id: "three-geo",
    title: "three-geo",
    url: "https://github.com/w3reality/three-geo",
    github: "https://github.com/w3reality/three-geo",
    category: "Data, Maps & AI",
    field: "Terrain",
    kind: "library",
    status: "production",
    description:
      "Terrain generation for Three.js from geographic data, useful for map-like 3D scenes and topographic experiments.",
    bestFor: "Terrain visualization and geographic context inside R3F.",
    tags: ["terrain", "maps", "geography", "three.js"],
    color: "#ccd5ae"
  },
  {
    id: "drei-splat",
    title: "Drei Splat",
    url: "https://drei.docs.pmnd.rs/abstractions/splat",
    github: "https://github.com/pmndrs/drei",
    category: "Data, Maps & AI",
    field: "Gaussian splats",
    kind: "library",
    status: "creative",
    description:
      "Drei abstraction for rendering Gaussian splat scenes in R3F, useful for captured real-world spaces and AI-era 3D assets.",
    bestFor: "Showing scan-like scenes, captures, and spatial memories inside a React app.",
    tags: ["splats", "capture", "3d scan", "drei"],
    color: "#cdb4db"
  },
  {
    id: "sparkjs",
    title: "Spark",
    url: "https://sparkjs.dev",
    github: "https://github.com/sparkjsdev/spark",
    category: "Data, Maps & AI",
    field: "Gaussian splats",
    kind: "library",
    status: "creative",
    description:
      "Renderer and tooling for Gaussian splats on the web, useful context for emerging R3F capture workflows.",
    bestFor: "Exploring high-fidelity captured scenes and new spatial media formats.",
    tags: ["splats", "3d capture", "renderer", "webgl"],
    color: "#ffc8dd"
  },
  {
    id: "luma-genie",
    title: "Luma Genie",
    url: "https://lumalabs.ai/genie",
    category: "Data, Maps & AI",
    field: "Generated 3D",
    kind: "tool",
    status: "experimental",
    description:
      "AI-generated 3D asset source. Useful as a fast prototyping input, but assets still need optimization and art review.",
    bestFor: "Early ideation before moving through glTF Transform, Blender, and performance checks.",
    tags: ["ai", "3d assets", "prototype", "gltf"],
    color: "#f1c0e8"
  },
  {
    id: "blockade-skybox",
    title: "Blockade Labs Skybox",
    url: "https://skybox.blockadelabs.com",
    category: "Data, Maps & AI",
    field: "Generated environments",
    kind: "tool",
    status: "creative",
    description:
      "AI skybox generator for concepting environment maps and immersive backdrops.",
    bestFor: "Quick mood exploration for XR prototypes, worlds, and R3F scene backgrounds.",
    tags: ["ai", "skybox", "environment", "xr"],
    color: "#a2d2ff"
  }
];

export const resources: Resource[] = [
  ...curatedResources,
  ...resourceAdditions,
  ...resourceExpansion,
  ...resourceExpansion2
];

export const categories = Array.from(
  new Set(resources.map((resource) => resource.category))
);

export const kinds = Array.from(new Set(resources.map((resource) => resource.kind)));

export const statuses = Array.from(
  new Set(resources.map((resource) => resource.status))
);
