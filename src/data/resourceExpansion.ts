import type { Resource } from "./resources.ts";

export const resourceExpansion: Resource[] = [
  {
    id: "three-mesh-ui",
    title: "three-mesh-ui",
    url: "https://felixmariotto.github.io/three-mesh-ui/",
    github: "https://github.com/felixmariotto/three-mesh-ui",
    category: "Ecosystem Libraries",
    field: "Spatial UI",
    kind: "library",
    status: "production",
    description:
      "Block, text, layout, and interaction primitives for building mesh-based user interfaces in Three.js.",
    bestFor: "In-scene panels, VR menus, kiosks, HUDs, and UI experiments that need to exist inside the 3D world.",
    tags: ["ui", "webxr", "three.js", "layout"],
    color: "#c8f7dc"
  },
  {
    id: "troika-3d",
    title: "Troika",
    url: "https://protectwise.github.io/troika/",
    github: "https://github.com/protectwise/troika",
    category: "Ecosystem Libraries",
    field: "3D utilities",
    kind: "library",
    status: "production",
    description:
      "A suite of Three.js utilities including SDF text, instanced uniforms, derived materials, workers, and supporting tools.",
    bestFor: "Borrowing mature pieces for text-heavy, instanced, or worker-backed Three.js scenes.",
    tags: ["text", "materials", "instancing", "workers"],
    color: "#e0fbfc"
  },
  {
    id: "troika-derived-material",
    title: "troika-three-utils",
    url: "https://protectwise.github.io/troika/troika-three-utils/",
    github: "https://github.com/protectwise/troika/tree/main/packages/troika-three-utils",
    category: "Ecosystem Libraries",
    field: "Material utilities",
    kind: "library",
    status: "production",
    description:
      "Material derivation and utility helpers used across Troika packages for extending Three.js material behavior.",
    bestFor: "Understanding advanced material patching patterns used by production-quality Three.js libraries.",
    tags: ["materials", "shaders", "three.js", "utilities"],
    color: "#bde0fe"
  },
  {
    id: "three-projected-material",
    title: "three-projected-material",
    url: "https://github.com/marcofugaro/three-projected-material",
    github: "https://github.com/marcofugaro/three-projected-material",
    category: "Ecosystem Libraries",
    field: "Projection mapping",
    kind: "library",
    status: "creative",
    description:
      "Project a texture from a camera onto meshes, enabling decals, projector looks, and camera-mapped effects.",
    bestFor: "Art-directed product reveals, projection-mapped scenes, and texture effects that need to follow a view.",
    tags: ["projection", "materials", "camera", "effects"],
    color: "#ffc8dd"
  },
  {
    id: "three-viewport-gizmo",
    title: "three-viewport-gizmo",
    url: "https://github.com/Fennec-hub/three-viewport-gizmo",
    github: "https://github.com/Fennec-hub/three-viewport-gizmo",
    category: "Ecosystem Libraries",
    field: "Editor controls",
    kind: "library",
    status: "production",
    description:
      "Viewport orientation gizmo for Three.js editors and CAD-like tools.",
    bestFor: "Building scene editors, model viewers, CAD interfaces, and spatial tools with clear orientation feedback.",
    tags: ["editor", "gizmo", "camera", "tools"],
    color: "#d7e3fc"
  },
  {
    id: "three-gizmo",
    title: "three-transform-controls",
    url: "https://threejs.org/examples/#misc_controls_transform",
    github: "https://github.com/mrdoob/three.js/blob/dev/examples/jsm/controls/TransformControls.js",
    category: "Ecosystem Libraries",
    field: "Scene editing",
    kind: "library",
    status: "core",
    description:
      "Three.js TransformControls example for translating, rotating, and scaling objects with familiar editor handles.",
    bestFor: "Any R3F editor or builder that needs object manipulation in the viewport.",
    tags: ["editor", "controls", "transform", "three.js"],
    color: "#e5e5e5"
  },
  {
    id: "three-meshline-examples",
    title: "MeshLine Examples",
    url: "https://pmndrs.github.io/meshline/",
    github: "https://github.com/pmndrs/meshline",
    category: "Ecosystem Libraries",
    field: "Line rendering",
    kind: "library",
    status: "creative",
    description:
      "Examples for textured, thick, animated mesh-based lines that avoid native WebGL line limitations.",
    bestFor: "Trails, paths, graphs, signatures, strokes, and code-art line systems.",
    tags: ["lines", "trails", "pmndrs", "effects"],
    color: "#bde0fe"
  },
  {
    id: "three-subdivide",
    title: "three-subdivide",
    url: "https://github.com/stevinz/three-subdivide",
    github: "https://github.com/stevinz/three-subdivide",
    category: "Ecosystem Libraries",
    field: "Geometry",
    kind: "library",
    status: "production",
    description:
      "Subdivision surface modifier for Three.js geometries, useful for smoothing and procedural mesh workflows.",
    bestFor: "Generative geometry, smoothing rough meshes, and experimenting with sculptural forms.",
    tags: ["geometry", "subdivision", "mesh", "procedural"],
    color: "#d8f3dc"
  },
  {
    id: "three-fatline",
    title: "Three.js Fat Lines",
    url: "https://threejs.org/examples/#webgl_lines_fat",
    github: "https://github.com/mrdoob/three.js/tree/dev/examples/jsm/lines",
    category: "Ecosystem Libraries",
    field: "Line rendering",
    kind: "library",
    status: "core",
    description:
      "Official Three.js wide-line examples using Line2, LineGeometry, and LineMaterial.",
    bestFor: "Graph lines, routes, wire visuals, and annotations that need consistent screen-space thickness.",
    tags: ["lines", "three.js", "examples", "geometry"],
    color: "#dee2e6"
  },
  {
    id: "three-gpucomputationrender",
    title: "GPUComputationRenderer",
    url: "https://threejs.org/examples/#webgl_gpgpu_birds",
    github: "https://github.com/mrdoob/three.js/blob/dev/examples/jsm/misc/GPUComputationRenderer.js",
    category: "Creative Coding & Shaders",
    field: "GPGPU simulation",
    kind: "reference",
    status: "creative",
    description:
      "Classic Three.js utility and examples for texture-backed GPU particle and flocking simulations.",
    bestFor: "Learning how to build GPU particles, fluid-ish systems, and simulation textures in R3F.",
    tags: ["gpgpu", "particles", "simulation", "three.js"],
    color: "#9bf6ff"
  },
  {
    id: "use-gpu",
    title: "Use.GPU",
    url: "https://usegpu.live",
    github: "https://github.com/iamwilhelm/use.gpu",
    category: "Ecosystem Libraries",
    field: "WebGPU UI",
    kind: "library",
    status: "experimental",
    description:
      "React-like live-computed WebGPU rendering system for UI, plots, layout, and shader-driven components.",
    bestFor: "Studying what React-shaped GPU programming can become beyond WebGL.",
    tags: ["webgpu", "react", "gpu", "experimental"],
    color: "#b8f2e6"
  },
  {
    id: "threlte",
    title: "Threlte",
    url: "https://threlte.xyz",
    github: "https://github.com/threlte/threlte",
    category: "Ecosystem Libraries",
    field: "Declarative Three.js",
    kind: "library",
    status: "production",
    description:
      "Svelte renderer and ecosystem for Three.js, useful as a sibling reference for declarative 3D patterns.",
    bestFor: "Comparing R3F architecture against another polished component-based Three.js framework.",
    tags: ["three.js", "svelte", "declarative", "ecosystem"],
    color: "#ffb703"
  },
  {
    id: "tresjs",
    title: "TresJS",
    url: "https://tresjs.org",
    github: "https://github.com/Tresjs/tres",
    category: "Ecosystem Libraries",
    field: "Declarative Three.js",
    kind: "library",
    status: "production",
    description:
      "Vue ecosystem for declarative Three.js, with companion packages and patterns adjacent to the R3F world.",
    bestFor: "Seeing how other frontend ecosystems solve familiar scene composition problems.",
    tags: ["three.js", "vue", "declarative", "ecosystem"],
    color: "#c8f7dc"
  },
  {
    id: "ogl-react",
    title: "react-ogl",
    url: "https://github.com/pmndrs/react-ogl",
    github: "https://github.com/pmndrs/react-ogl",
    category: "Ecosystem Libraries",
    field: "Alternative renderer",
    kind: "library",
    status: "experimental",
    description:
      "pmndrs experiment bringing React renderer ideas to OGL, a smaller WebGL library than Three.js.",
    bestFor: "Studying renderer design and lightweight creative-coding alternatives to Three.js.",
    tags: ["react", "ogl", "renderer", "experimental"],
    color: "#8ecae6"
  },
  {
    id: "drei-stage",
    title: "Drei Stage",
    url: "https://drei.docs.pmnd.rs/staging/stage",
    github: "https://github.com/pmndrs/drei",
    category: "Ecosystem Libraries",
    field: "Staging",
    kind: "library",
    status: "core",
    description:
      "Drei abstraction for quickly staging models with lighting, environment, shadows, and camera framing.",
    bestFor: "Making imported models look presentable without building a full studio setup first.",
    tags: ["staging", "lighting", "models", "drei"],
    color: "#f4f0e8"
  },
  {
    id: "drei-environment",
    title: "Drei Environment",
    url: "https://drei.docs.pmnd.rs/staging/environment",
    github: "https://github.com/pmndrs/drei",
    category: "Ecosystem Libraries",
    field: "Lighting",
    kind: "library",
    status: "core",
    description:
      "Environment-map helper for presets, HDRIs, ground projection, and scene lighting in R3F.",
    bestFor: "Fast product lighting, reflective materials, and visual context for GLTF scenes.",
    tags: ["lighting", "hdri", "environment", "drei"],
    color: "#fefae0"
  },
  {
    id: "drei-meshtransmission",
    title: "Drei MeshTransmissionMaterial",
    url: "https://drei.docs.pmnd.rs/shaders/mesh-transmission-material",
    github: "https://github.com/pmndrs/drei",
    category: "Creative Coding & Shaders",
    field: "Glass material",
    kind: "library",
    status: "creative",
    description:
      "High-quality transmissive glass material helper from Drei for refraction-heavy stylized and product scenes.",
    bestFor: "Glass, gems, transparent objects, luxury product shots, and art-directed refraction.",
    tags: ["materials", "glass", "refraction", "drei"],
    color: "#d7f0ff"
  },
  {
    id: "drei-meshreflector",
    title: "Drei MeshReflectorMaterial",
    url: "https://drei.docs.pmnd.rs/shaders/mesh-reflector-material",
    github: "https://github.com/pmndrs/drei",
    category: "Creative Coding & Shaders",
    field: "Reflection material",
    kind: "library",
    status: "creative",
    description:
      "Material helper for blurred planar reflections, common in polished landing pages and product floors.",
    bestFor: "Studio floors, mirrors, gallery scenes, and quick visual depth.",
    tags: ["materials", "reflection", "drei", "product"],
    color: "#e9ecef"
  },
  {
    id: "drei-shadermaterial",
    title: "Drei shaderMaterial",
    url: "https://drei.docs.pmnd.rs/shaders/shader-material",
    github: "https://github.com/pmndrs/drei",
    category: "Creative Coding & Shaders",
    field: "Shader helper",
    kind: "library",
    status: "core",
    description:
      "Drei helper that turns uniforms and GLSL into reusable typed React material components.",
    bestFor: "Authoring custom shader materials in a React-friendly style.",
    tags: ["shader", "materials", "glsl", "drei"],
    color: "#f7aef8"
  },
  {
    id: "shader-composer",
    title: "Shader Composer",
    url: "https://github.com/hmans/shader-composer",
    github: "https://github.com/hmans/shader-composer",
    category: "Creative Coding & Shaders",
    field: "Shader composition",
    kind: "library",
    status: "creative",
    description:
      "Composable shader building blocks and material helpers for Three.js and R3F experiments.",
    bestFor: "Building shader effects from reusable pieces instead of isolated string blobs.",
    tags: ["shaders", "composition", "materials", "r3f"],
    color: "#cdb4db"
  },
  {
    id: "shadergradient",
    title: "ShaderGradient",
    url: "https://www.shadergradient.co",
    github: "https://github.com/ruucm/shadergradient",
    category: "Creative Coding & Shaders",
    field: "Gradient scenes",
    kind: "tool",
    status: "creative",
    description:
      "Interactive shader-gradient tool and React package for animated 3D gradient backgrounds.",
    bestFor: "Fast art-directed backgrounds and learning how simple shader scenes become reusable components.",
    tags: ["shader", "gradient", "react", "backgrounds"],
    color: "#b8c0ff"
  },
  {
    id: "glsl-noise",
    title: "glsl-noise",
    url: "https://github.com/hughsk/glsl-noise",
    github: "https://github.com/hughsk/glsl-noise",
    category: "Creative Coding & Shaders",
    field: "Shader functions",
    kind: "library",
    status: "production",
    description:
      "Classic GLSL noise functions packaged for shader workflows.",
    bestFor: "Adding procedural texture, displacement, clouds, terrain, and organic motion to custom materials.",
    tags: ["glsl", "noise", "procedural", "shaders"],
    color: "#fee440"
  },
  {
    id: "glsl-easings",
    title: "glsl-easings",
    url: "https://github.com/glslify/glsl-easings",
    github: "https://github.com/glslify/glsl-easings",
    category: "Creative Coding & Shaders",
    field: "Shader functions",
    kind: "library",
    status: "production",
    description:
      "Robert Penner-style easing functions for GLSL, packaged for glslify.",
    bestFor: "Shader transitions, reveals, procedural animation curves, and polished motion inside materials.",
    tags: ["glsl", "animation", "easing", "shaders"],
    color: "#ffcad4"
  },
  {
    id: "glsl-aastep",
    title: "glsl-aastep",
    url: "https://github.com/glslify/glsl-aastep",
    github: "https://github.com/glslify/glsl-aastep",
    category: "Creative Coding & Shaders",
    field: "Shader functions",
    kind: "library",
    status: "production",
    description:
      "Anti-aliased step function for cleaner procedural edges in fragment shaders.",
    bestFor: "Crisp SDF shapes, masks, line art, and procedural patterns.",
    tags: ["glsl", "sdf", "antialiasing", "patterns"],
    color: "#fdfcdc"
  },
  {
    id: "nannou",
    title: "nannou",
    url: "https://nannou.cc",
    github: "https://github.com/nannou-org/nannou",
    category: "Creative Coding & Shaders",
    field: "Creative coding",
    kind: "library",
    status: "creative",
    description:
      "Rust creative-coding framework for artists and designers, useful context for generative systems beyond JavaScript.",
    bestFor: "Studying creative coding structure, generative methods, and graphics ideas to port to R3F.",
    tags: ["creative coding", "rust", "generative", "art"],
    color: "#b7e4c7"
  },
  {
    id: "openframeworks",
    title: "openFrameworks",
    url: "https://openframeworks.cc",
    github: "https://github.com/openframeworks/openFrameworks",
    category: "Creative Coding & Shaders",
    field: "Creative coding",
    kind: "library",
    status: "creative",
    description:
      "C++ toolkit for creative coding, interactive installations, computational art, and live visuals.",
    bestFor: "Understanding installation-grade creative technology patterns that can inspire web work.",
    tags: ["creative coding", "installations", "art", "c++"],
    color: "#a2d2ff"
  },
  {
    id: "cables",
    title: "cables.gl",
    url: "https://cables.gl",
    github: "https://github.com/cables-gl/cables",
    category: "Creative Coding & Shaders",
    field: "Visual patching",
    kind: "tool",
    status: "creative",
    description:
      "Browser-based visual programming environment for interactive WebGL, shaders, data, and audio-reactive pieces.",
    bestFor: "Prototyping visual systems and studying node-based interaction graphs.",
    tags: ["webgl", "visual programming", "interactive", "creative"],
    color: "#111111"
  },
  {
    id: "touchdesigner",
    title: "TouchDesigner",
    url: "https://derivative.ca",
    category: "Creative Coding & Shaders",
    field: "Visual programming",
    kind: "tool",
    status: "creative",
    description:
      "Node-based real-time visual environment for installations, live visuals, sensors, shaders, and generative systems.",
    bestFor: "Learning how artists build rich interaction systems that can inspire web versions.",
    tags: ["creative coding", "installations", "visual programming", "shaders"],
    color: "#1d3557"
  },
  {
    id: "vvvv",
    title: "vvvv gamma",
    url: "https://visualprogramming.net",
    github: "https://github.com/vvvv",
    category: "Creative Coding & Shaders",
    field: "Visual programming",
    kind: "tool",
    status: "creative",
    description:
      "Visual live-programming environment for real-time graphics, data, interaction, and media systems.",
    bestFor: "Studying patch-based systems and interaction architecture from creative technologists.",
    tags: ["visual programming", "creative coding", "installations", "graphics"],
    color: "#d8e2dc"
  },
  {
    id: "madmapper",
    title: "MadMapper",
    url: "https://madmapper.com",
    category: "Creative Coding & Shaders",
    field: "Projection mapping",
    kind: "tool",
    status: "creative",
    description:
      "Projection mapping and LED mapping tool used in installations, scenography, and live visual production.",
    bestFor: "Understanding real-world spatial media workflows that web 3D sometimes emulates.",
    tags: ["projection", "installations", "spatial", "visuals"],
    color: "#f1f3f5"
  },
  {
    id: "resolume",
    title: "Resolume",
    url: "https://resolume.com",
    category: "Creative Coding & Shaders",
    field: "Live visuals",
    kind: "tool",
    status: "creative",
    description:
      "Live VJ and audiovisual performance software with effects, clips, mapping, and real-time control.",
    bestFor: "Learning how visual performance interfaces think about clips, layers, effects, and control.",
    tags: ["live visuals", "vj", "performance", "effects"],
    color: "#ffafcc"
  },
  {
    id: "obs-shaderfilter",
    title: "OBS Shaderfilter",
    url: "https://github.com/exeldro/obs-shaderfilter",
    github: "https://github.com/exeldro/obs-shaderfilter",
    category: "Creative Coding & Shaders",
    field: "Shader performance",
    kind: "tool",
    status: "creative",
    description:
      "OBS plugin for applying custom shaders to sources, useful for live visual and stream experiments.",
    bestFor: "Testing shader looks in broadcast-style workflows and live visual systems.",
    tags: ["shaders", "obs", "live visuals", "effects"],
    color: "#cdb4db"
  },
  {
    id: "react-three-map",
    title: "react-three-map",
    url: "https://github.com/RodrigoHamuy/react-three-map",
    github: "https://github.com/RodrigoHamuy/react-three-map",
    category: "Data, Maps & AI",
    field: "Map integration",
    kind: "library",
    status: "production",
    description:
      "Utilities for rendering React Three Fiber content on top of Mapbox/MapLibre map views.",
    bestFor: "Placing custom R3F meshes, effects, and scenes into geospatial map contexts.",
    tags: ["maps", "r3f", "mapbox", "maplibre"],
    color: "#90e0ef"
  },
  {
    id: "threebox",
    title: "Threebox",
    url: "https://github.com/jscastro76/threebox",
    github: "https://github.com/jscastro76/threebox",
    category: "Data, Maps & AI",
    field: "Mapbox 3D",
    kind: "library",
    status: "production",
    description:
      "Three.js plugin for Mapbox GL JS that helps place and control 3D objects on maps.",
    bestFor: "Learning patterns for georeferenced 3D objects and map-camera synchronization.",
    tags: ["maps", "mapbox", "three.js", "geospatial"],
    color: "#ade8f4"
  },
  {
    id: "osm-buildings",
    title: "OSM Buildings",
    url: "https://osmbuildings.org",
    github: "https://github.com/OSMBuildings/OSMBuildings",
    category: "Data, Maps & AI",
    field: "3D maps",
    kind: "library",
    status: "production",
    description:
      "JavaScript library for visualizing OpenStreetMap building geometry in 2.5D and 3D-style map views.",
    bestFor: "Studying lightweight city visualization and map extrusion patterns.",
    tags: ["maps", "buildings", "openstreetmap", "data viz"],
    color: "#ccd5ae"
  },
  {
    id: "harp-gl",
    title: "harp.gl",
    url: "https://www.harp.gl",
    github: "https://github.com/heremaps/harp.gl",
    category: "Data, Maps & AI",
    field: "Vector maps",
    kind: "library",
    status: "production",
    description:
      "Three.js-based vector map renderer from HERE with a focus on customizable 3D map visualizations.",
    bestFor: "Advanced map rendering ideas using Three.js as the display layer.",
    tags: ["maps", "three.js", "vector tiles", "geospatial"],
    color: "#bde0fe"
  },
  {
    id: "itowns",
    title: "iTowns",
    url: "https://www.itowns-project.org",
    github: "https://github.com/iTowns/itowns",
    category: "Data, Maps & AI",
    field: "3D geospatial",
    kind: "library",
    status: "production",
    description:
      "Three.js-based framework for geospatial 3D visualization, globe views, terrain, imagery, and 3D Tiles.",
    bestFor: "Open-source geospatial R&D with Three.js rendering under the hood.",
    tags: ["geospatial", "three.js", "terrain", "3d tiles"],
    color: "#caf0f8"
  },
  {
    id: "d3",
    title: "D3",
    url: "https://d3js.org",
    github: "https://github.com/d3/d3",
    category: "Data, Maps & AI",
    field: "Data visualization",
    kind: "library",
    status: "production",
    description:
      "Foundational JavaScript data visualization library for scales, layouts, shapes, and data transforms.",
    bestFor: "Driving R3F charts, spatial encodings, force simulations, and nontrivial data mappings.",
    tags: ["data viz", "scales", "layout", "charts"],
    color: "#f6bd60"
  },
  {
    id: "observable",
    title: "Observable",
    url: "https://observablehq.com",
    github: "https://github.com/observablehq",
    category: "Data, Maps & AI",
    field: "Data notebooks",
    kind: "community",
    status: "production",
    description:
      "Notebook and publishing platform full of data visualization, WebGL, maps, and generative graphics examples.",
    bestFor: "Finding visual techniques and prototyping data-driven ideas before integrating into React.",
    tags: ["data viz", "notebooks", "examples", "community"],
    color: "#e9edc9"
  },
  {
    id: "observable-plot",
    title: "Observable Plot",
    url: "https://observablehq.com/plot/",
    github: "https://github.com/observablehq/plot",
    category: "Data, Maps & AI",
    field: "Charts",
    kind: "library",
    status: "production",
    description:
      "Concise grammar for exploratory charts and marks, useful when not every data view needs to be 3D.",
    bestFor: "Pairing R3F spatial views with clear 2D analytical charts.",
    tags: ["charts", "data viz", "observable", "analysis"],
    color: "#fefae0"
  },
  {
    id: "regl-scatterplot",
    title: "regl-scatterplot",
    url: "https://github.com/flekschas/regl-scatterplot",
    github: "https://github.com/flekschas/regl-scatterplot",
    category: "Data, Maps & AI",
    field: "Large scatterplots",
    kind: "library",
    status: "production",
    description:
      "Fast WebGL scatterplot component for millions of points, with interaction and performance-minded rendering.",
    bestFor: "Learning dense data rendering patterns for R3F point clouds and analytical canvases.",
    tags: ["webgl", "scatterplot", "data viz", "performance"],
    color: "#a3cef1"
  },
  {
    id: "higlass",
    title: "HiGlass",
    url: "https://higlass.io",
    github: "https://github.com/higlass/higlass",
    category: "Data, Maps & AI",
    field: "Tiled visualization",
    kind: "library",
    status: "production",
    description:
      "Tiled, zoomable visualization system for large genomic and matrix-like datasets.",
    bestFor: "Studying tile pyramids, zoomable interfaces, and high-density web visualization.",
    tags: ["data viz", "tiles", "performance", "zoom"],
    color: "#d7e3fc"
  },
  {
    id: "supersplat",
    title: "SuperSplat",
    url: "https://superspl.at",
    github: "https://github.com/playcanvas/supersplat",
    category: "Data, Maps & AI",
    field: "Gaussian splats",
    kind: "tool",
    status: "creative",
    description:
      "Open-source browser editor for inspecting, cleaning, optimizing, and publishing Gaussian splat scenes.",
    bestFor: "Preparing captured splats before using them in web experiences.",
    tags: ["splats", "editor", "3d capture", "playcanvas"],
    color: "#ffc8dd"
  },
  {
    id: "gaussian-splats-3d",
    title: "GaussianSplats3D",
    url: "https://github.com/mkkellogg/GaussianSplats3D",
    github: "https://github.com/mkkellogg/GaussianSplats3D",
    category: "Data, Maps & AI",
    field: "Gaussian splats",
    kind: "library",
    status: "creative",
    description:
      "Three.js-oriented Gaussian splat viewer and renderer for browser-based 3D capture scenes.",
    bestFor: "Learning implementation details and rendering captured splats in Three.js contexts.",
    tags: ["splats", "three.js", "3d capture", "renderer"],
    color: "#f1c0e8"
  },
  {
    id: "antimatter-splat",
    title: "antimatter15/splat",
    url: "https://github.com/antimatter15/splat",
    github: "https://github.com/antimatter15/splat",
    category: "Data, Maps & AI",
    field: "Gaussian splats",
    kind: "library",
    status: "creative",
    description:
      "Early WebGL Gaussian splat renderer that helped popularize browser-based splat viewing.",
    bestFor: "Understanding the small, hackable version of the splat rendering idea.",
    tags: ["splats", "webgl", "3d capture", "renderer"],
    color: "#a2d2ff"
  },
  {
    id: "gsplat-js",
    title: "gsplat.js",
    url: "https://github.com/huggingface/gsplat.js",
    github: "https://github.com/huggingface/gsplat.js",
    category: "Data, Maps & AI",
    field: "Gaussian splats",
    kind: "library",
    status: "experimental",
    description:
      "Hugging Face JavaScript tooling for Gaussian splat rendering and experiments.",
    bestFor: "Following ML-adjacent browser splat workflows and examples.",
    tags: ["splats", "hugging face", "ai", "webgl"],
    color: "#ffbe0b"
  },
  {
    id: "nerfstudio",
    title: "Nerfstudio",
    url: "https://docs.nerf.studio",
    github: "https://github.com/nerfstudio-project/nerfstudio",
    category: "Data, Maps & AI",
    field: "NeRF tooling",
    kind: "tool",
    status: "production",
    description:
      "Open-source framework for training and experimenting with NeRFs and neural scene representations.",
    bestFor: "Understanding AI-era scene capture pipelines before exporting to web-friendly formats.",
    tags: ["nerf", "ai", "3d capture", "research"],
    color: "#d0f4de"
  },
  {
    id: "postshot",
    title: "Postshot",
    url: "https://www.jawset.com",
    category: "Data, Maps & AI",
    field: "Gaussian splats",
    kind: "tool",
    status: "production",
    description:
      "Desktop tool for training, editing, and exporting Gaussian splats from images and video.",
    bestFor: "Creating splat assets that can later be optimized and displayed on the web.",
    tags: ["splats", "3d capture", "photogrammetry", "tool"],
    color: "#cdb4db"
  },
  {
    id: "scaniverse",
    title: "Scaniverse",
    url: "https://scaniverse.com",
    category: "Data, Maps & AI",
    field: "3D scanning",
    kind: "tool",
    status: "production",
    description:
      "Mobile 3D scanning app for meshes and Gaussian splats, with web-sharing workflows.",
    bestFor: "Capturing real-world objects and spaces that can become web 3D source material.",
    tags: ["scan", "splats", "mobile", "3d capture"],
    color: "#bde0fe"
  },
  {
    id: "free3d",
    title: "Free3D",
    url: "https://free3d.com",
    category: "Asset Pipeline",
    field: "Model marketplace",
    kind: "asset",
    status: "production",
    description:
      "Large library of free and paid 3D models across formats and quality levels.",
    bestFor: "Finding prototype models while checking licenses and cleaning assets before web use.",
    tags: ["models", "marketplace", "free", "assets"],
    color: "#e5e5e5"
  },
  {
    id: "cgtrader-free",
    title: "CGTrader Free Models",
    url: "https://www.cgtrader.com/free-3d-models",
    category: "Asset Pipeline",
    field: "Model marketplace",
    kind: "asset",
    status: "production",
    description:
      "Free section of a large 3D model marketplace, with mixed licenses and formats.",
    bestFor: "Finding high-quality placeholder or production assets for optimization experiments.",
    tags: ["models", "marketplace", "free", "assets"],
    color: "#f1f3f5"
  },
  {
    id: "poly-pizza",
    title: "Poly Pizza",
    url: "https://poly.pizza",
    category: "Asset Pipeline",
    field: "Low-poly models",
    kind: "asset",
    status: "production",
    description:
      "Friendly low-poly model library with many free downloadable assets for web and games.",
    bestFor: "Stylized games, prototypes, and quick R3F scene dressing.",
    tags: ["models", "low poly", "game assets", "free"],
    color: "#ffd166"
  },
  {
    id: "smithsonian-3d",
    title: "Smithsonian 3D",
    url: "https://3d.si.edu",
    category: "Asset Pipeline",
    field: "Museum scans",
    kind: "asset",
    status: "production",
    description:
      "Digitized cultural, scientific, and historical 3D objects from the Smithsonian collection.",
    bestFor: "Reference scans, educational experiences, museum-like R3F projects, and public-domain research.",
    tags: ["scans", "museum", "models", "education"],
    color: "#e9edc9"
  },
  {
    id: "nasa-3d",
    title: "NASA 3D Resources",
    url: "https://nasa3d.arc.nasa.gov",
    category: "Asset Pipeline",
    field: "Space models",
    kind: "asset",
    status: "production",
    description:
      "NASA-hosted models, textures, and imagery for spacecraft, terrain, planets, and science visualization.",
    bestFor: "Space scenes, educational visualization, and public-domain reference assets.",
    tags: ["space", "models", "nasa", "textures"],
    color: "#a2d2ff"
  },
  {
    id: "blenderkit",
    title: "BlenderKit",
    url: "https://www.blenderkit.com",
    category: "Asset Pipeline",
    field: "Blender assets",
    kind: "asset",
    status: "production",
    description:
      "Asset library integrated into Blender with models, materials, brushes, and scene elements.",
    bestFor: "Sourcing or staging assets before exporting optimized glTF for R3F.",
    tags: ["blender", "models", "materials", "assets"],
    color: "#f4a261"
  },
  {
    id: "cgbookcase",
    title: "CGBookcase",
    url: "https://www.cgbookcase.com",
    category: "Asset Pipeline",
    field: "PBR textures",
    kind: "asset",
    status: "production",
    description:
      "Free PBR texture library with clean categories and maps for web material workflows.",
    bestFor: "Quickly adding believable surfaces to product and environment scenes.",
    tags: ["textures", "pbr", "free", "materials"],
    color: "#d4a373"
  },
  {
    id: "sharetextures",
    title: "ShareTextures",
    url: "https://www.sharetextures.com",
    category: "Asset Pipeline",
    field: "PBR textures",
    kind: "asset",
    status: "production",
    description:
      "Library of free PBR textures and materials for real-time rendering workflows.",
    bestFor: "Material studies, environment dressing, and replacing bland placeholder surfaces.",
    tags: ["textures", "pbr", "free", "materials"],
    color: "#b0c4b1"
  },
  {
    id: "texturecan",
    title: "TextureCan",
    url: "https://www.texturecan.com",
    category: "Asset Pipeline",
    field: "PBR textures",
    kind: "asset",
    status: "production",
    description:
      "Free seamless PBR textures with maps suitable for Three.js material setups.",
    bestFor: "Finding quick material sources for walls, fabric, ground, and product props.",
    tags: ["textures", "pbr", "seamless", "free"],
    color: "#ccd5ae"
  },
  {
    id: "freepbr",
    title: "FreePBR",
    url: "https://freepbr.com",
    category: "Asset Pipeline",
    field: "PBR textures",
    kind: "asset",
    status: "production",
    description:
      "Free PBR material maps for game engines and real-time web scenes.",
    bestFor: "Prototype material libraries and quick R3F environment passes.",
    tags: ["textures", "pbr", "free", "materials"],
    color: "#faedcd"
  },
  {
    id: "3dtextures",
    title: "3D Textures",
    url: "https://3dtextures.me",
    category: "Asset Pipeline",
    field: "PBR textures",
    kind: "asset",
    status: "production",
    description:
      "Free seamless PBR texture library with organized material categories.",
    bestFor: "Adding detail to stylized or realistic R3F scenes with minimal sourcing friction.",
    tags: ["textures", "pbr", "seamless", "materials"],
    color: "#fefae0"
  },
  {
    id: "freesound",
    title: "Freesound",
    url: "https://freesound.org",
    category: "Asset Pipeline",
    field: "Audio assets",
    kind: "asset",
    status: "production",
    description:
      "Massive collaborative database of sound effects, recordings, and audio snippets under varied licenses.",
    bestFor: "Adding sonic texture to games, XR scenes, installations, and interactive toys.",
    tags: ["audio", "sound effects", "free", "games"],
    color: "#e0fbfc"
  },
  {
    id: "mixkit",
    title: "Mixkit",
    url: "https://mixkit.co/free-sound-effects/",
    category: "Asset Pipeline",
    field: "Audio assets",
    kind: "asset",
    status: "production",
    description:
      "Free sound effects and music clips that can quickly make prototypes feel more complete.",
    bestFor: "UI sounds, game feedback, ambient layers, and fast audio prototyping.",
    tags: ["audio", "sound effects", "free", "music"],
    color: "#ffcad4"
  },
  {
    id: "opengameart-audio",
    title: "OpenGameArt Audio",
    url: "https://opengameart.org/art-search-advanced?field_art_type_tid%5B%5D=13",
    category: "Asset Pipeline",
    field: "Game audio",
    kind: "asset",
    status: "production",
    description:
      "OpenGameArt's music and sound-effect archive for game prototypes and finished small projects.",
    bestFor: "Finding cohesive audio packs for browser games and interactive R3F demos.",
    tags: ["audio", "games", "open assets", "free"],
    color: "#ffd6a5"
  },
  {
    id: "cmu-mocap",
    title: "CMU Motion Capture Database",
    url: "http://mocap.cs.cmu.edu",
    category: "Asset Pipeline",
    field: "Motion capture",
    kind: "asset",
    status: "production",
    description:
      "Large academic motion-capture database with many motion categories for character animation research.",
    bestFor: "Finding movement data for experiments, retargeting, and animation studies.",
    tags: ["mocap", "animation", "characters", "free"],
    color: "#d7e3fc"
  },
  {
    id: "freemocap",
    title: "FreeMoCap",
    url: "https://freemocap.org",
    github: "https://github.com/freemocap/freemocap",
    category: "Asset Pipeline",
    field: "Motion capture",
    kind: "tool",
    status: "production",
    description:
      "Open-source markerless motion-capture software for capturing human motion with consumer cameras.",
    bestFor: "Creating custom movement data for avatars, characters, and physical interaction studies.",
    tags: ["mocap", "open source", "animation", "characters"],
    color: "#bde0fe"
  },
  {
    id: "accurig",
    title: "AccuRIG",
    url: "https://actorcore.reallusion.com/auto-rig",
    category: "Asset Pipeline",
    field: "Auto rigging",
    kind: "tool",
    status: "production",
    description:
      "Free auto-rigging tool for humanoid characters, useful before animation retargeting and glTF export.",
    bestFor: "Preparing character meshes for R3F games and avatar experiments.",
    tags: ["rigging", "characters", "animation", "avatars"],
    color: "#f1c0e8"
  },
  {
    id: "makehuman",
    title: "MakeHuman",
    url: "http://www.makehumancommunity.org",
    github: "https://github.com/makehumancommunity/makehuman",
    category: "Asset Pipeline",
    field: "Character creation",
    kind: "tool",
    status: "production",
    description:
      "Open-source human character creation tool for generating base meshes and riggable humanoids.",
    bestFor: "Creating custom characters before Blender cleanup and web optimization.",
    tags: ["characters", "avatars", "open source", "models"],
    color: "#ffddd2"
  },
  {
    id: "mixamo-to-gltf",
    title: "Mixamo to glTF",
    url: "https://github.com/donmccurdy/mixamo-gltf",
    github: "https://github.com/donmccurdy/mixamo-gltf",
    category: "Asset Pipeline",
    field: "Animation conversion",
    kind: "tool",
    status: "production",
    description:
      "Utility for converting Mixamo FBX animations into glTF-friendly workflows.",
    bestFor: "Moving character animation into R3F without keeping FBX as the runtime format.",
    tags: ["mixamo", "gltf", "animation", "conversion"],
    color: "#fbc4ab"
  },
  {
    id: "blender-gltf-exporter",
    title: "Blender glTF Exporter",
    url: "https://docs.blender.org/manual/en/latest/addons/import_export/scene_gltf2.html",
    github: "https://github.com/KhronosGroup/glTF-Blender-IO",
    category: "Asset Pipeline",
    field: "Exporting",
    kind: "tool",
    status: "core",
    description:
      "Official Blender glTF 2.0 importer/exporter documentation and implementation.",
    bestFor: "Understanding how Blender materials, animations, cameras, and lights move into web runtimes.",
    tags: ["blender", "gltf", "export", "khronos"],
    color: "#f4a261"
  },
  {
    id: "gltf-extensions",
    title: "glTF Extensions Registry",
    url: "https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0",
    github: "https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0",
    category: "Asset Pipeline",
    field: "Asset standards",
    kind: "reference",
    status: "core",
    description:
      "Registry of official and vendor glTF extensions for materials, compression, lights, variants, and metadata.",
    bestFor: "Knowing what a loader or exporter supports when advanced asset features break.",
    tags: ["gltf", "extensions", "khronos", "materials"],
    color: "#e9ecef"
  },
  {
    id: "babylon-sandbox",
    title: "Babylon.js Sandbox",
    url: "https://sandbox.babylonjs.com",
    github: "https://github.com/BabylonJS/Babylon.js",
    category: "Asset Pipeline",
    field: "Model inspection",
    kind: "tool",
    status: "production",
    description:
      "Drag-and-drop scene/model viewer that is useful for cross-checking glTF rendering outside Three.js.",
    bestFor: "Diagnosing whether a glTF issue is asset-specific or Three.js/R3F-specific.",
    tags: ["gltf", "viewer", "babylon.js", "debug"],
    color: "#bb3e03"
  },
  {
    id: "filament-viewer",
    title: "Filament glTF Viewer",
    url: "https://google.github.io/filament/Materials.html",
    github: "https://github.com/google/filament",
    category: "Asset Pipeline",
    field: "PBR reference",
    kind: "reference",
    status: "production",
    description:
      "Google Filament material documentation and viewer ecosystem for physically based rendering reference.",
    bestFor: "Understanding PBR material behavior and comparing real-time rendering expectations.",
    tags: ["pbr", "materials", "gltf", "reference"],
    color: "#cce3de"
  },
  {
    id: "modelviewer-editor",
    title: "model-viewer Editor",
    url: "https://modelviewer.dev/editor/",
    github: "https://github.com/google/model-viewer",
    category: "Asset Pipeline",
    field: "Model presentation",
    kind: "tool",
    status: "production",
    description:
      "Visual editor for configuring model-viewer settings, camera, environment, AR, and poster behavior.",
    bestFor: "Benchmarking model presentation defaults before rebuilding similar interactions in R3F.",
    tags: ["gltf", "viewer", "ar", "product"],
    color: "#fefae0"
  },
  {
    id: "gamepad-api",
    title: "MDN Gamepad API",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API",
    category: "Gaming & Physics",
    field: "Input",
    kind: "docs",
    status: "production",
    description:
      "Browser API reference for reading gamepad state, buttons, axes, and controller input.",
    bestFor: "Adding controller support to R3F games and XR-adjacent browser experiences.",
    tags: ["gamepad", "input", "browser", "games"],
    color: "#d7e3fc"
  },
  {
    id: "pointer-lock-api",
    title: "MDN Pointer Lock API",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API",
    category: "Gaming & Physics",
    field: "Input",
    kind: "docs",
    status: "core",
    description:
      "Browser API for first-person mouse capture, used by many Three.js and R3F game controls.",
    bestFor: "First-person cameras, editors, shooters, and immersive desktop navigation.",
    tags: ["pointer lock", "input", "browser", "games"],
    color: "#e0fbfc"
  },
  {
    id: "keyboardjs",
    title: "KeyboardJS",
    url: "https://github.com/RobertWHurst/KeyboardJS",
    github: "https://github.com/RobertWHurst/KeyboardJS",
    category: "Gaming & Physics",
    field: "Input",
    kind: "library",
    status: "production",
    description:
      "Keyboard binding library for combos, key sequences, and game-like input handling.",
    bestFor: "R3F tools and games with complex keyboard shortcuts or control schemes.",
    tags: ["keyboard", "input", "games", "shortcuts"],
    color: "#f1f3f5"
  },
  {
    id: "enable3d",
    title: "enable3d",
    url: "https://enable3d.io",
    github: "https://github.com/enable3d/enable3d",
    category: "Gaming & Physics",
    field: "3D game framework",
    kind: "library",
    status: "production",
    description:
      "Three.js plus Ammo.js framework aimed at browser games, physics, and Phaser integration.",
    bestFor: "Studying game-engine structure around Three.js scenes and physics.",
    tags: ["games", "physics", "three.js", "ammo"],
    color: "#ffb703"
  },
  {
    id: "rogue-engine",
    title: "Rogue Engine",
    url: "https://rogueengine.io",
    github: "https://github.com/beemsoft/rogue-engine",
    category: "Gaming & Physics",
    field: "Three.js editor",
    kind: "tool",
    status: "production",
    description:
      "Three.js game engine and editor with components, scenes, scripting, and browser deployment.",
    bestFor: "Comparing editor-first Three.js workflows against React-authored games.",
    tags: ["games", "editor", "three.js", "engine"],
    color: "#cdb4db"
  },
  {
    id: "playcanvas-engine",
    title: "PlayCanvas Engine",
    url: "https://playcanvas.com",
    github: "https://github.com/playcanvas/engine",
    category: "Gaming & Physics",
    field: "Web game engine",
    kind: "library",
    status: "production",
    description:
      "Open-source browser 3D engine with editor ecosystem, WebGPU work, physics, animation, and production game features.",
    bestFor: "Benchmarking web game engine capabilities and learning asset/runtime architecture.",
    tags: ["games", "engine", "webgl", "webgpu"],
    color: "#e76f51"
  },
  {
    id: "kaboom",
    title: "Kaboom.js",
    url: "https://kaboomjs.com",
    github: "https://github.com/replit/kaboom",
    category: "Gaming & Physics",
    field: "2D game engine",
    kind: "library",
    status: "production",
    description:
      "Friendly JavaScript game library for rapid 2D game prototyping and playful interaction patterns.",
    bestFor: "Borrowing simple game-loop and entity ideas for R3F prototypes.",
    tags: ["games", "2d", "prototyping", "javascript"],
    color: "#ffdd00"
  },
  {
    id: "excaliburjs",
    title: "Excalibur.js",
    url: "https://excaliburjs.com",
    github: "https://github.com/excaliburjs/Excalibur",
    category: "Gaming & Physics",
    field: "2D game engine",
    kind: "library",
    status: "production",
    description:
      "TypeScript game engine for browser games with scenes, actors, input, physics, and tilemaps.",
    bestFor: "Learning robust browser-game architecture outside the 3D rendering layer.",
    tags: ["games", "typescript", "engine", "2d"],
    color: "#ffd166"
  },
  {
    id: "nape-physics",
    title: "Nape Physics",
    url: "https://github.com/deltaluca/nape",
    github: "https://github.com/deltaluca/nape",
    category: "Gaming & Physics",
    field: "Physics reference",
    kind: "library",
    status: "learning",
    description:
      "Older 2D physics engine whose concepts and constraints still help when learning simulation.",
    bestFor: "Physics mental models, especially if building small toy systems or custom interactions.",
    tags: ["physics", "2d", "simulation", "learning"],
    color: "#e9edc9"
  },
  {
    id: "nakama",
    title: "Nakama",
    url: "https://heroiclabs.com/nakama/",
    github: "https://github.com/heroiclabs/nakama",
    category: "Gaming & Physics",
    field: "Game backend",
    kind: "tool",
    status: "production",
    description:
      "Open-source game server for authentication, realtime multiplayer, storage, matchmaking, leaderboards, and social systems.",
    bestFor: "R3F games that need a real backend beyond quick room prototypes.",
    tags: ["multiplayer", "backend", "games", "server"],
    color: "#bde0fe"
  },
  {
    id: "partykit",
    title: "PartyKit",
    url: "https://www.partykit.io",
    github: "https://github.com/partykit/partykit",
    category: "Gaming & Physics",
    field: "Realtime backend",
    kind: "tool",
    status: "production",
    description:
      "Realtime multiplayer and collaboration backend for small rooms, presence, and state synchronization.",
    bestFor: "Shared R3F toys, collaborative editors, rooms, cursors, and lightweight multiplayer.",
    tags: ["multiplayer", "realtime", "collaboration", "rooms"],
    color: "#ffc8dd"
  },
  {
    id: "liveblocks",
    title: "Liveblocks",
    url: "https://liveblocks.io",
    github: "https://github.com/liveblocks/liveblocks",
    category: "Gaming & Physics",
    field: "Collaboration backend",
    kind: "tool",
    status: "production",
    description:
      "Realtime collaboration platform for presence, comments, storage, notifications, and multiplayer app features.",
    bestFor: "Collaborative R3F editors, spatial canvases, product configurators, and design tools.",
    tags: ["collaboration", "presence", "realtime", "editors"],
    color: "#c8b6ff"
  },
  {
    id: "peerjs",
    title: "PeerJS",
    url: "https://peerjs.com",
    github: "https://github.com/peers/peerjs",
    category: "Gaming & Physics",
    field: "Peer networking",
    kind: "library",
    status: "production",
    description:
      "WebRTC peer-to-peer wrapper for browser data and media connections.",
    bestFor: "Small peer-driven R3F experiments, shared rooms, voice prototypes, and local multiplayer toys.",
    tags: ["webrtc", "peer-to-peer", "multiplayer", "networking"],
    color: "#9bf6ff"
  },
  {
    id: "simple-peer",
    title: "simple-peer",
    url: "https://github.com/feross/simple-peer",
    github: "https://github.com/feross/simple-peer",
    category: "Gaming & Physics",
    field: "Peer networking",
    kind: "library",
    status: "production",
    description:
      "Small WebRTC data/video/audio peer connection wrapper for browser and Node.",
    bestFor: "Custom networking prototypes where you want direct control over signaling.",
    tags: ["webrtc", "networking", "multiplayer", "browser"],
    color: "#a9def9"
  },
  {
    id: "web-audio-api",
    title: "MDN Web Audio API",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API",
    category: "Gaming & Physics",
    field: "Audio",
    kind: "docs",
    status: "core",
    description:
      "Browser API reference for synthesis, spatialization, analysis, effects, and audio graph processing.",
    bestFor: "Audio-reactive R3F art, game sound, XR soundscapes, and procedural instruments.",
    tags: ["audio", "browser", "synthesis", "spatial"],
    color: "#e0fbfc"
  },
  {
    id: "web-audio-school",
    title: "Web Audio School",
    url: "https://mmckegg.github.io/web-audio-school/",
    github: "https://github.com/mmckegg/web-audio-school",
    category: "Learning & Theory",
    field: "Audio learning",
    kind: "course",
    status: "learning",
    description:
      "Interactive lessons for learning Web Audio API concepts and sound synthesis in the browser.",
    bestFor: "Adding stronger audio literacy to visual and game-like R3F work.",
    tags: ["audio", "learning", "browser", "synthesis"],
    color: "#ffcad4"
  },
  {
    id: "webxr-hand-input",
    title: "WebXR Hand Input",
    url: "https://immersive-web.github.io/webxr-hand-input/",
    github: "https://github.com/immersive-web/webxr-hand-input",
    category: "XR, AR & VR",
    field: "Hand tracking",
    kind: "reference",
    status: "core",
    description:
      "Specification explainer for articulated hand tracking in WebXR.",
    bestFor: "Understanding hand joint data, poses, and browser-level XR hand input before using abstractions.",
    tags: ["webxr", "hands", "tracking", "standards"],
    color: "#bde0fe"
  },
  {
    id: "webxr-hit-test",
    title: "WebXR Hit Test",
    url: "https://immersive-web.github.io/hit-test/",
    github: "https://github.com/immersive-web/hit-test",
    category: "XR, AR & VR",
    field: "AR placement",
    kind: "reference",
    status: "core",
    description:
      "Spec work and explainer for AR hit testing, used to place virtual objects on real-world surfaces.",
    bestFor: "AR object placement, world understanding, and R3F AR scene design.",
    tags: ["webxr", "ar", "hit test", "standards"],
    color: "#d0f4de"
  },
  {
    id: "webxr-anchors",
    title: "WebXR Anchors",
    url: "https://immersive-web.github.io/anchors/",
    github: "https://github.com/immersive-web/anchors",
    category: "XR, AR & VR",
    field: "AR persistence",
    kind: "reference",
    status: "learning",
    description:
      "Explainer for persistent or semi-persistent anchors in WebXR AR sessions.",
    bestFor: "Thinking through anchored content and real-world placement beyond a single frame.",
    tags: ["webxr", "ar", "anchors", "standards"],
    color: "#caf0f8"
  },
  {
    id: "webxr-depth-sensing",
    title: "WebXR Depth Sensing",
    url: "https://immersive-web.github.io/depth-sensing/",
    github: "https://github.com/immersive-web/depth-sensing",
    category: "XR, AR & VR",
    field: "AR occlusion",
    kind: "reference",
    status: "learning",
    description:
      "WebXR module for depth data, occlusion, and environment understanding in immersive AR.",
    bestFor: "AR scenes where virtual content should sit behind or interact with real-world geometry.",
    tags: ["webxr", "ar", "depth", "occlusion"],
    color: "#a2d2ff"
  },
  {
    id: "webxr-lighting-estimation",
    title: "WebXR Lighting Estimation",
    url: "https://immersive-web.github.io/lighting-estimation/",
    github: "https://github.com/immersive-web/lighting-estimation",
    category: "XR, AR & VR",
    field: "AR lighting",
    kind: "reference",
    status: "learning",
    description:
      "Spec explainer for estimating real-world lighting in AR sessions.",
    bestFor: "Making AR objects feel less pasted-on through environmental lighting cues.",
    tags: ["webxr", "ar", "lighting", "standards"],
    color: "#ffd6a5"
  },
  {
    id: "model-viewer-ar",
    title: "model-viewer AR",
    url: "https://modelviewer.dev/examples/augmentedreality/",
    github: "https://github.com/google/model-viewer",
    category: "XR, AR & VR",
    field: "AR examples",
    kind: "showcase",
    status: "production",
    description:
      "Practical examples of web-based model AR handoff, placement, and product viewing patterns.",
    bestFor: "Studying product AR expectations before rebuilding custom R3F AR flows.",
    tags: ["ar", "gltf", "product", "examples"],
    color: "#fefae0"
  },
  {
    id: "playcanvas-webxr",
    title: "PlayCanvas WebXR Examples",
    url: "https://playcanvas.github.io/#/xr",
    github: "https://github.com/playcanvas/engine",
    category: "XR, AR & VR",
    field: "XR examples",
    kind: "showcase",
    status: "production",
    description:
      "Collection of PlayCanvas XR examples covering AR, VR, input, anchors, hit testing, and rendering patterns.",
    bestFor: "Comparing headset and AR behavior with another mature web engine.",
    tags: ["webxr", "examples", "playcanvas", "ar"],
    color: "#e76f51"
  },
  {
    id: "threejs-webxr-examples",
    title: "Three.js WebXR Examples",
    url: "https://threejs.org/examples/?q=webxr#webxr_vr_ballshooter",
    github: "https://github.com/mrdoob/three.js/tree/dev/examples",
    category: "XR, AR & VR",
    field: "XR examples",
    kind: "showcase",
    status: "core",
    description:
      "Official Three.js WebXR examples for VR, AR, controllers, hands, hit tests, and immersive interactions.",
    bestFor: "Finding raw engine examples to translate into R3F or React Three XR patterns.",
    tags: ["webxr", "three.js", "examples", "vr"],
    color: "#e5e5e5"
  },
  {
    id: "immersive-web-weekly",
    title: "Immersive Web Weekly",
    url: "https://immersivewebweekly.com",
    category: "XR, AR & VR",
    field: "XR newsletter",
    kind: "community",
    status: "learning",
    description:
      "Newsletter tracking WebXR, immersive web demos, standards, tools, and browser/platform movement.",
    bestFor: "Following the wider XR web ecosystem without watching every standards repo manually.",
    tags: ["webxr", "newsletter", "community", "standards"],
    color: "#cdb4db"
  },
  {
    id: "spatialpixels",
    title: "Spatial Pixels",
    url: "https://spatialpixels.com",
    category: "XR, AR & VR",
    field: "Spatial design",
    kind: "community",
    status: "creative",
    description:
      "Resource and community lens on spatial design, XR interfaces, Apple Vision Pro, and immersive product thinking.",
    bestFor: "Getting beyond technical demos into spatial interface design quality.",
    tags: ["spatial", "xr", "design", "vision pro"],
    color: "#f1f3f5"
  },
  {
    id: "visionos-design",
    title: "Apple visionOS Design",
    url: "https://developer.apple.com/design/human-interface-guidelines/designing-for-visionos",
    category: "XR, AR & VR",
    field: "Spatial design",
    kind: "docs",
    status: "learning",
    description:
      "Apple's spatial interface guidance for depth, focus, windows, immersion, and interaction.",
    bestFor: "Borrowing mature spatial UX principles for WebXR and R3F spatial UI.",
    tags: ["spatial", "visionos", "design", "xr"],
    color: "#ffffff"
  },
  {
    id: "meta-presence-platform",
    title: "Meta Presence Platform",
    url: "https://developers.meta.com/horizon/documentation/unity/unity-isdk-interaction-sdk-overview/",
    category: "XR, AR & VR",
    field: "Interaction design",
    kind: "docs",
    status: "learning",
    description:
      "Meta's interaction SDK concepts for hands, controllers, grab, poke, ray, and object interaction.",
    bestFor: "Learning interaction primitives to reinterpret in web-based XR projects.",
    tags: ["xr", "interaction", "hands", "quest"],
    color: "#bde0fe"
  },
  {
    id: "html-to-image",
    title: "html-to-image",
    url: "https://github.com/bubkoo/html-to-image",
    github: "https://github.com/bubkoo/html-to-image",
    category: "Web Experiences",
    field: "Export tooling",
    kind: "library",
    status: "production",
    description:
      "Generate images from DOM nodes, useful for sharing cards, thumbnails, snapshots, and editor exports around R3F apps.",
    bestFor: "Saving configurator states, thumbnails, or presentation cards from hybrid DOM/canvas interfaces.",
    tags: ["export", "screenshots", "dom", "tools"],
    color: "#d7e3fc"
  },
  {
    id: "canvas-confetti",
    title: "canvas-confetti",
    url: "https://github.com/catdad/canvas-confetti",
    github: "https://github.com/catdad/canvas-confetti",
    category: "Web Experiences",
    field: "Micro effects",
    kind: "library",
    status: "production",
    description:
      "Tiny canvas confetti effect library for moments of reward and lightweight visual feedback.",
    bestFor: "Adding satisfying feedback around R3F UI without overbuilding a particle system.",
    tags: ["effects", "canvas", "ui", "feedback"],
    color: "#ffd6a5"
  },
  {
    id: "rive",
    title: "Rive",
    url: "https://rive.app",
    github: "https://github.com/rive-app/rive",
    category: "Web Experiences",
    field: "Interactive animation",
    kind: "tool",
    status: "production",
    description:
      "Interactive vector animation tool and runtime, often useful for UI around 3D scenes.",
    bestFor: "Pairing expressive 2D interface animation with heavier R3F canvas content.",
    tags: ["animation", "ui", "interactive", "runtime"],
    color: "#b8c0ff"
  },
  {
    id: "lottie",
    title: "Lottie",
    url: "https://airbnb.io/lottie/#/",
    github: "https://github.com/airbnb/lottie-web",
    category: "Web Experiences",
    field: "Animation",
    kind: "library",
    status: "production",
    description:
      "Web runtime for After Effects vector animations exported through Bodymovin.",
    bestFor: "Lightweight motion accents and loading states around 3D experiences.",
    tags: ["animation", "after effects", "ui", "web"],
    color: "#c8f7dc"
  },
  {
    id: "dora",
    title: "Dora",
    url: "https://www.dora.run",
    category: "Web Experiences",
    field: "No-code 3D sites",
    kind: "tool",
    status: "production",
    description:
      "Visual web design tool with 3D, animation, and interaction capabilities.",
    bestFor: "Studying expectations from design-led 3D website tools and quick visual prototyping.",
    tags: ["websites", "3d tool", "design", "animation"],
    color: "#f1c0e8"
  },
  {
    id: "unicorn-studio",
    title: "Unicorn Studio",
    url: "https://www.unicorn.studio",
    category: "Web Experiences",
    field: "Interactive backgrounds",
    kind: "tool",
    status: "creative",
    description:
      "No-code animated WebGL background tool for interactive gradients, particles, and visual effects.",
    bestFor: "Understanding the kind of lightweight WebGL motion clients expect on modern sites.",
    tags: ["webgl", "backgrounds", "design", "effects"],
    color: "#cdb4db"
  },
  {
    id: "spline-community",
    title: "Spline Community",
    url: "https://app.spline.design/community",
    category: "Web Experiences",
    field: "3D examples",
    kind: "showcase",
    status: "creative",
    description:
      "Community gallery of Spline-authored 3D scenes, components, and interface ideas.",
    bestFor: "Visual references for accessible 3D site patterns and designer-friendly scene composition.",
    tags: ["spline", "community", "3d design", "examples"],
    color: "#d0f4de"
  },
  {
    id: "r3f-portfolio-starter",
    title: "R3F Portfolio Starter",
    url: "https://github.com/wass08/r3f-portfolio-starter",
    github: "https://github.com/wass08/r3f-portfolio-starter",
    category: "Web Experiences",
    field: "Starter",
    kind: "starter",
    status: "production",
    description:
      "Starter pattern for a portfolio that combines React Three Fiber with web sections and modern frontend tooling.",
    bestFor: "Studying common portfolio architecture before making a more original build.",
    tags: ["starter", "portfolio", "r3f", "websites"],
    color: "#e5e5e5"
  },
  {
    id: "webflow-3d",
    title: "Webflow 3D Transform",
    url: "https://university.webflow.com/lesson/3d-transforms-and-animations",
    category: "Web Experiences",
    field: "Design reference",
    kind: "course",
    status: "learning",
    description:
      "Designer-facing 3D transform and animation lessons, useful for understanding non-WebGL spatial UI expectations.",
    bestFor: "Bridging designer language and R3F implementation for web experiences.",
    tags: ["design", "3d", "animation", "websites"],
    color: "#d7e3fc"
  },
  {
    id: "css-tricks-webgl",
    title: "CSS-Tricks WebGL",
    url: "https://css-tricks.com/tag/webgl/",
    category: "Learning & Theory",
    field: "Articles",
    kind: "article",
    status: "learning",
    description:
      "WebGL-tagged articles and tutorials from CSS-Tricks, often bridging frontend concerns and graphics.",
    bestFor: "Learning how WebGL ideas fit into broader frontend implementation.",
    tags: ["webgl", "articles", "frontend", "learning"],
    color: "#fefae0"
  },
  {
    id: "smashing-webgl",
    title: "Smashing Magazine WebGL",
    url: "https://www.smashingmagazine.com/tag/webgl/",
    category: "Learning & Theory",
    field: "Articles",
    kind: "article",
    status: "learning",
    description:
      "Design and frontend-focused articles touching WebGL, animation, performance, and interactive experiences.",
    bestFor: "Connecting production frontend practice with visual experimentation.",
    tags: ["webgl", "articles", "frontend", "design"],
    color: "#ffddd2"
  },
  {
    id: "yuri-artiukh",
    title: "Yuri Artiukh",
    url: "https://www.youtube.com/@akella_",
    github: "https://github.com/akella",
    category: "Learning & Theory",
    field: "Creative WebGL",
    kind: "course",
    status: "creative",
    description:
      "Deep creative coding and WebGL livestreams covering Three.js, shaders, scroll effects, and modern site recreations.",
    bestFor: "Seeing production-quality visual ideas built from scratch with expert commentary.",
    tags: ["webgl", "three.js", "shaders", "video"],
    color: "#f6bd60"
  },
  {
    id: "creative-coding-club",
    title: "Creative Coding Club",
    url: "https://www.creativecodingclub.com",
    category: "Learning & Theory",
    field: "GSAP and Three.js",
    kind: "course",
    status: "learning",
    description:
      "Courses and tutorials for GSAP, Three.js, and creative frontend animation.",
    bestFor: "Learning timeline-driven motion and visual frontend techniques around 3D sites.",
    tags: ["gsap", "three.js", "animation", "course"],
    color: "#b7e4c7"
  },
  {
    id: "threejs-webpack-starter",
    title: "Three.js Starter",
    url: "https://github.com/brunosimon/threejs-template-complex",
    github: "https://github.com/brunosimon/threejs-template-complex",
    category: "Learning & Theory",
    field: "Starter",
    kind: "starter",
    status: "learning",
    description:
      "Bruno Simon's older but instructive complex Three.js project template.",
    bestFor: "Understanding how Three.js projects were organized before Vite/R3F became common defaults.",
    tags: ["three.js", "starter", "learning", "workflow"],
    color: "#f4f0e8"
  },
  {
    id: "math-for-3d",
    title: "3D Math Primer",
    url: "https://gamemath.com/book/",
    category: "Learning & Theory",
    field: "3D math",
    kind: "course",
    status: "learning",
    description:
      "Free online book about vectors, matrices, transforms, orientation, geometry, and game math.",
    bestFor: "Strengthening the math behind cameras, controls, object transforms, and physics.",
    tags: ["math", "3d", "games", "transforms"],
    color: "#e9edc9"
  },
  {
    id: "red-blob-games",
    title: "Red Blob Games",
    url: "https://www.redblobgames.com",
    github: "https://github.com/redblobgames",
    category: "Learning & Theory",
    field: "Interactive algorithms",
    kind: "course",
    status: "learning",
    description:
      "Excellent interactive explanations of pathfinding, grids, maps, procedural generation, and game algorithms.",
    bestFor: "Building smarter maps, AI, terrain, and game systems around R3F visuals.",
    tags: ["algorithms", "games", "maps", "interactive"],
    color: "#ffcad4"
  },
  {
    id: "easing-functions",
    title: "Easings.net",
    url: "https://easings.net",
    github: "https://github.com/ai/easings.net",
    category: "Learning & Theory",
    field: "Motion reference",
    kind: "reference",
    status: "learning",
    description:
      "Visual reference for common easing functions used in UI, animation, shaders, and camera moves.",
    bestFor: "Choosing animation curves intentionally instead of relying on default easing.",
    tags: ["animation", "easing", "motion", "reference"],
    color: "#c8b6ff"
  },
  {
    id: "easings-cheat-sheet",
    title: "Robert Penner Easing",
    url: "https://robertpenner.com/easing/",
    category: "Learning & Theory",
    field: "Motion theory",
    kind: "reference",
    status: "learning",
    description:
      "Original easing equations reference that still underpins a lot of animation vocabulary.",
    bestFor: "Understanding the math behind common motion curves used in JS and GLSL.",
    tags: ["animation", "math", "easing", "reference"],
    color: "#dee2ff"
  },
  {
    id: "noise-functions",
    title: "Noise Functions",
    url: "https://thebookofshaders.com/11/",
    github: "https://github.com/patriciogonzalezvivo/thebookofshaders",
    category: "Learning & Theory",
    field: "Shader theory",
    kind: "article",
    status: "learning",
    description:
      "The Book of Shaders chapter on noise, one of the most useful ideas in procedural shader work.",
    bestFor: "Making materials, terrain, motion, and masks feel organic.",
    tags: ["noise", "shaders", "procedural", "learning"],
    color: "#fee440"
  },
  {
    id: "ronja-tutorials",
    title: "Ronja's Tutorials",
    url: "https://www.ronja-tutorials.com",
    github: "https://github.com/ronja-tutorials/ShaderTutorials",
    category: "Learning & Theory",
    field: "Shader learning",
    kind: "course",
    status: "learning",
    description:
      "Clear shader tutorials originally focused on Unity, but full of transferable visual and math explanations.",
    bestFor: "Learning shader concepts through approachable visual examples.",
    tags: ["shaders", "learning", "math", "graphics"],
    color: "#ffc8dd"
  },
  {
    id: "catlikecoding",
    title: "Catlike Coding",
    url: "https://catlikecoding.com",
    category: "Learning & Theory",
    field: "Rendering learning",
    kind: "course",
    status: "learning",
    description:
      "Deep tutorials on rendering, procedural mesh generation, noise, splines, and game math.",
    bestFor: "Translating strong rendering and procedural concepts into Three.js/R3F.",
    tags: ["rendering", "procedural", "math", "learning"],
    color: "#fefae0"
  },
  {
    id: "iquilez-youtube",
    title: "Inigo Quilez YouTube",
    url: "https://www.youtube.com/@InigoQuilez",
    category: "Learning & Theory",
    field: "Shader learning",
    kind: "course",
    status: "learning",
    description:
      "Video explanations from one of the most influential shader artists and demoscene educators.",
    bestFor: "Learning raymarching, SDFs, palettes, procedural modeling, and shader problem solving.",
    tags: ["shaders", "raymarching", "sdf", "video"],
    color: "#ff006e"
  },
  {
    id: "patricio-gonzalez-vivo",
    title: "Patricio Gonzalez Vivo",
    url: "https://patriciogonzalezvivo.com",
    github: "https://github.com/patriciogonzalezvivo",
    category: "Showcases & Inspiration",
    field: "Shader artist",
    kind: "showcase",
    status: "creative",
    description:
      "Artist, educator, and toolmaker behind The Book of Shaders and LYGIA.",
    bestFor: "Studying the bridge between poetic visuals, open tools, and shader education.",
    tags: ["artist", "shaders", "creative coding", "learning"],
    color: "#f15bb5"
  },
  {
    id: "matt-deslauriers",
    title: "Matt DesLauriers",
    url: "https://mattdesl.com",
    github: "https://github.com/mattdesl",
    category: "Showcases & Inspiration",
    field: "Generative artist",
    kind: "showcase",
    status: "creative",
    description:
      "Generative artist and toolmaker with extensive creative coding, WebGL, and plotting work.",
    bestFor: "Studying elegant generative systems, art tooling, and code-as-art discipline.",
    tags: ["artist", "generative", "webgl", "creative coding"],
    color: "#fdfcdc"
  },
  {
    id: "tim-holman",
    title: "Tim Holman",
    url: "https://tholman.com",
    github: "https://github.com/tholman",
    category: "Showcases & Inspiration",
    field: "Creative technologist",
    kind: "showcase",
    status: "creative",
    description:
      "Playful web experiments, tiny tools, and creative frontend projects.",
    bestFor: "Remembering that small interactions can be more memorable than huge scenes.",
    tags: ["creative coding", "experiments", "frontend", "playful"],
    color: "#ffd6a5"
  },
  {
    id: "david-li",
    title: "David Li",
    url: "https://david.li",
    github: "https://github.com/dli",
    category: "Showcases & Inspiration",
    field: "Interactive simulations",
    kind: "showcase",
    status: "creative",
    description:
      "Interactive web experiments, simulations, and playful graphics systems.",
    bestFor: "Studying direct-manipulation interaction with visual simulations.",
    tags: ["simulation", "interactive", "webgl", "inspiration"],
    color: "#bde0fe"
  },
  {
    id: "george-francis",
    title: "George Francis",
    url: "https://georgefrancis.dev",
    github: "https://github.com/georgedoescode",
    category: "Showcases & Inspiration",
    field: "Generative design",
    kind: "showcase",
    status: "creative",
    description:
      "Generative art, shaders, creative coding tutorials, and approachable visual experiments.",
    bestFor: "Learning expressive generative ideas that can move between SVG, Canvas, and WebGL.",
    tags: ["generative", "creative coding", "shaders", "artist"],
    color: "#caffbf"
  },
  {
    id: "anderson-mancini",
    title: "Anderson Mancini",
    url: "https://andersonmancini.dev",
    github: "https://github.com/ektogamat",
    category: "Showcases & Inspiration",
    field: "R3F creator",
    kind: "showcase",
    status: "creative",
    description:
      "React Three Fiber demos, experiments, and polished interactive UI/3D examples.",
    bestFor: "Seeing practical R3F scenes with strong visual polish and accessible source ideas.",
    tags: ["r3f", "demos", "creative", "three.js"],
    color: "#d0f4de"
  },
  {
    id: "paul-henschel",
    title: "Paul Henschel",
    url: "https://twitter.com/0xca0a",
    github: "https://github.com/drcmda",
    category: "Showcases & Inspiration",
    field: "R3F ecosystem",
    kind: "showcase",
    status: "core",
    description:
      "Creator behind React Three Fiber and many pmndrs libraries, with a deep trail of demos and ecosystem work.",
    bestFor: "Following the source of many idiomatic R3F patterns and experiments.",
    tags: ["r3f", "pmndrs", "ecosystem", "demos"],
    color: "#111111"
  },
  {
    id: "hmans",
    title: "Hendrik Mans",
    url: "https://github.com/hmans",
    github: "https://github.com/hmans",
    category: "Showcases & Inspiration",
    field: "R3F tools",
    kind: "showcase",
    status: "creative",
    description:
      "Developer behind Miniplex, shader-composer, and many R3F/game-oriented experiments.",
    bestFor: "Studying small, sharp tools for games, shaders, and React Three patterns.",
    tags: ["r3f", "games", "shaders", "tools"],
    color: "#a0c4ff"
  },
  {
    id: "pmndrs-market",
    title: "pmndrs Market",
    url: "https://market.pmnd.rs",
    github: "https://github.com/pmndrs",
    category: "Showcases & Inspiration",
    field: "R3F demos",
    kind: "showcase",
    status: "creative",
    description:
      "pmndrs demo and example marketplace for scenes, components, and ecosystem experiments.",
    bestFor: "Finding source-backed R3F inspiration with modern pmndrs patterns.",
    tags: ["pmndrs", "r3f", "examples", "showcase"],
    color: "#f4f0e8"
  },
  {
    id: "aerotwist",
    title: "Aerotwist",
    url: "https://aerotwist.com",
    github: "https://github.com/paullewis",
    category: "Showcases & Inspiration",
    field: "Frontend graphics",
    kind: "article",
    status: "learning",
    description:
      "Paul Lewis's archive of web animation, performance, Canvas, WebGL, and interaction writing.",
    bestFor: "Older but still useful thinking on performant visual frontend work.",
    tags: ["performance", "webgl", "animation", "articles"],
    color: "#fefae0"
  },
  {
    id: "robin-dela",
    title: "Robin Delaporte",
    url: "https://robindelaporte.fr",
    github: "https://github.com/robin-dela",
    category: "Showcases & Inspiration",
    field: "Creative developer",
    kind: "showcase",
    status: "creative",
    description:
      "Creative developer with polished WebGL, animation, and interactive site work.",
    bestFor: "Studying refined interaction and visual composition in modern portfolios.",
    tags: ["portfolio", "webgl", "creative developer", "inspiration"],
    color: "#e0fbfc"
  },
  {
    id: "aristide-benoist",
    title: "Aristide Benoist",
    url: "https://aristidebenoist.com",
    github: "https://github.com/AristideB",
    category: "Showcases & Inspiration",
    field: "Creative developer",
    kind: "showcase",
    status: "creative",
    description:
      "High-end creative development portfolio with strong motion, typography, and interactive web sensibility.",
    bestFor: "Taste reference for transitions, pacing, and polished digital craft.",
    tags: ["portfolio", "animation", "websites", "inspiration"],
    color: "#e5e5e5"
  },
  {
    id: "zajno",
    title: "Zajno",
    url: "https://zajno.com",
    category: "Showcases & Inspiration",
    field: "Studio",
    kind: "showcase",
    status: "creative",
    description:
      "Digital studio known for visually rich websites, motion, 3D, and interactive product storytelling.",
    bestFor: "Brand and product references for polished visual systems.",
    tags: ["studio", "websites", "3d", "inspiration"],
    color: "#111111"
  },
  {
    id: "immersive-garden",
    title: "Immersive Garden",
    url: "https://immersive-g.com",
    category: "Showcases & Inspiration",
    field: "Studio",
    kind: "showcase",
    status: "creative",
    description:
      "Award-winning digital production studio with immersive, animated, and WebGL-heavy experiences.",
    bestFor: "Studying production polish, interaction detail, and brand-forward web 3D.",
    tags: ["studio", "webgl", "brand", "inspiration"],
    color: "#c8f7dc"
  },
  {
    id: "makemepulse",
    title: "makemepulse",
    url: "https://www.makemepulse.com",
    category: "Showcases & Inspiration",
    field: "Studio",
    kind: "showcase",
    status: "creative",
    description:
      "Interactive studio creating immersive websites, installations, narrative experiences, and brand work.",
    bestFor: "References for experiential storytelling and technically ambitious frontend production.",
    tags: ["studio", "interactive", "webgl", "storytelling"],
    color: "#ffcad4"
  },
  {
    id: "merci-michel",
    title: "Merci-Michel",
    url: "https://www.merci-michel.com",
    category: "Showcases & Inspiration",
    field: "Studio",
    kind: "showcase",
    status: "creative",
    description:
      "French digital studio known for interactive experiences, games, and playful brand work.",
    bestFor: "Game-like web references with charm and production craft.",
    tags: ["studio", "games", "interactive", "inspiration"],
    color: "#ffd166"
  },
  {
    id: "unit9",
    title: "UNIT9",
    url: "https://www.unit9.com",
    category: "Showcases & Inspiration",
    field: "Production studio",
    kind: "showcase",
    status: "creative",
    description:
      "Global production studio working across interactive, experiential, AR, VR, installations, and creative technology.",
    bestFor: "Seeing how web, XR, installation, and brand tech converge in large-scale projects.",
    tags: ["studio", "xr", "installations", "creative technology"],
    color: "#d7e3fc"
  },
  {
    id: "field-io",
    title: "FIELD.IO",
    url: "https://field.io",
    category: "Showcases & Inspiration",
    field: "Digital art studio",
    kind: "showcase",
    status: "creative",
    description:
      "Creative studio working across generative art, real-time systems, installations, and visual identities.",
    bestFor: "References for serious computational art and brand-scale generative systems.",
    tags: ["generative", "studio", "installations", "art"],
    color: "#e9edc9"
  },
  {
    id: "onformative",
    title: "onformative",
    url: "https://onformative.com",
    category: "Showcases & Inspiration",
    field: "Generative studio",
    kind: "showcase",
    status: "creative",
    description:
      "Studio for generative design, data-driven art, real-time visuals, and computational brand systems.",
    bestFor: "Studying tasteful generative systems that go beyond demo aesthetics.",
    tags: ["generative", "studio", "data", "art"],
    color: "#ccd5ae"
  },
  {
    id: "manvs-machine",
    title: "ManvsMachine",
    url: "https://manvsmachine.co.uk",
    category: "Showcases & Inspiration",
    field: "Motion studio",
    kind: "showcase",
    status: "creative",
    description:
      "Motion and design studio with high-end 3D art direction and brand storytelling.",
    bestFor: "Visual references for material, lighting, rhythm, and premium product motion.",
    tags: ["motion", "3d", "brand", "inspiration"],
    color: "#f1f3f5"
  },
  {
    id: "beeple-crap",
    title: "Beeple",
    url: "https://www.beeple-crap.com",
    category: "Showcases & Inspiration",
    field: "Digital art",
    kind: "showcase",
    status: "creative",
    description:
      "Massive digital art archive and daily render practice, useful as a reference for visual ambition and worldbuilding.",
    bestFor: "Art direction, composition, scale, and sci-fi/graphic reference for 3D scenes.",
    tags: ["digital art", "3d", "composition", "inspiration"],
    color: "#ffb703"
  },
  {
    id: "siggraph",
    title: "SIGGRAPH",
    url: "https://www.siggraph.org",
    category: "Learning & Theory",
    field: "Graphics community",
    kind: "community",
    status: "learning",
    description:
      "The major computer graphics conference and community for research, production, art, and emerging techniques.",
    bestFor: "Tracking the deep graphics world behind real-time web techniques.",
    tags: ["graphics", "research", "community", "conference"],
    color: "#e5e5e5"
  },
  {
    id: "the-realtime-conference",
    title: "The Realtime Conference",
    url: "https://realtimeconference.com",
    category: "Learning & Theory",
    field: "Realtime graphics",
    kind: "community",
    status: "learning",
    description:
      "Conference and talks about real-time technologies across graphics, virtual production, games, XR, and web.",
    bestFor: "Understanding where real-time media industries are heading.",
    tags: ["realtime", "conference", "xr", "graphics"],
    color: "#d8e2dc"
  },
  {
    id: "webgl-monthly",
    title: "WebGL Monthly Archive",
    url: "https://webglfundamentals.org/webgl/lessons/resources/webgl-state-diagram.html",
    github: "https://github.com/gfxfundamentals/webgl-fundamentals",
    category: "Learning & Theory",
    field: "WebGL reference",
    kind: "reference",
    status: "learning",
    description:
      "The WebGL state diagram is a compact reference for understanding the state machine underneath higher-level libraries.",
    bestFor: "Debugging when WebGL state leaks or assumptions become visible through Three.js behavior.",
    tags: ["webgl", "state", "reference", "debug"],
    color: "#f08b51"
  },
  {
    id: "webgpu-samples",
    title: "WebGPU Samples",
    url: "https://webgpu.github.io/webgpu-samples/",
    github: "https://github.com/webgpu/webgpu-samples",
    category: "Foundations",
    field: "WebGPU examples",
    kind: "showcase",
    status: "learning",
    description:
      "Official-ish WebGPU sample gallery for compute, rendering, textures, shadows, particles, and modern GPU patterns.",
    bestFor: "Learning browser GPU techniques that will shape future Three.js/R3F rendering.",
    tags: ["webgpu", "examples", "gpu", "future"],
    color: "#b8f2e6"
  },
  {
    id: "wgpu",
    title: "wgpu",
    url: "https://wgpu.rs",
    github: "https://github.com/gfx-rs/wgpu",
    category: "Foundations",
    field: "GPU abstraction",
    kind: "library",
    status: "learning",
    description:
      "Rust GPU abstraction that informs modern graphics thinking and WebGPU-adjacent tooling.",
    bestFor: "Understanding the ecosystem around WebGPU and cross-platform GPU pipelines.",
    tags: ["webgpu", "rust", "gpu", "graphics"],
    color: "#cce3de"
  },
  {
    id: "webgpu-explainer",
    title: "WebGPU Explainer",
    url: "https://gpuweb.github.io/gpuweb/explainer/",
    github: "https://github.com/gpuweb/gpuweb",
    category: "Foundations",
    field: "WebGPU standard",
    kind: "reference",
    status: "learning",
    description:
      "Explainer and standards repository for WebGPU, the modern browser GPU API.",
    bestFor: "Knowing why WebGPU is different from WebGL and what capabilities it unlocks.",
    tags: ["webgpu", "standards", "gpu", "browser"],
    color: "#d0f4de"
  }
];
