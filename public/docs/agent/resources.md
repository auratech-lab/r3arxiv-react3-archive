# R3ARXIV Resource Catalog

> Agent-ready archive of React Three Fiber, Three.js, WebGL, WebGPU, XR, asset-pipeline, shader, game, and creative-web resources.

Generated: 2026-06-04T20:28:53.647Z
Resources: 567

Use this Markdown catalog when an agent needs readable context with source URLs and concise use guidance. Use `docs/agent/catalog.json` or `/agent/catalog.json` when a tool can parse JSON.

## Foundations

The renderer, Three.js base layer, docs, and mental models.

### React Three Fiber

- ID: `r3f`
- Field: 3D renderer
- Kind / status / priority: library / core / canonical
- Best for: Any serious React-based 3D, WebGL, XR, game, or creative coding project.
- Description: The React renderer for Three.js. It lets scenes be composed declaratively while keeping direct access to the Three.js object graph.
- Tags: `renderer`, `three.js`, `react`, `canvas`, `pmndrs`
- URL: https://r3f.docs.pmnd.rs
- GitHub: https://github.com/pmndrs/react-three-fiber
- Preview: /screenshots/r3f-docs.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration, learning-theory

### Three.js

- ID: `threejs`
- Field: WebGL engine
- Kind / status / priority: library / core / canonical
- Best for: Understanding what every R3F JSX element becomes at runtime.
- Description: The rendering engine underneath most React Three Fiber work: materials, loaders, cameras, animation, WebXR, and examples.
- Tags: `webgl`, `webgpu`, `engine`, `examples`, `materials`
- URL: https://threejs.org
- GitHub: https://github.com/mrdoob/three.js
- Preview: /screenshots/threejs.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, learning-theory, web-experiences

### R3F Docs and API

- ID: `r3f-docs`
- Field: Documentation
- Kind / status / priority: docs / core / canonical
- Best for: Resolving API details and checking recommended R3F patterns.
- Description: The canonical source for Canvas, hooks, events, loaders, performance patterns, and reconciler behavior.
- Tags: `docs`, `api`, `hooks`, `events`
- URL: https://r3f.docs.pmnd.rs/getting-started/introduction
- GitHub: https://github.com/pmndrs/react-three-fiber
- Preview: /screenshots/r3f-docs.webp
- Agent routes: start-r3f-app, performance-debug, data-maps-ai, learning-theory

### Three.js Docs

- ID: `threejs-docs`
- Field: Documentation
- Kind / status / priority: docs / core / canonical
- Best for: Looking up props, constructor arguments, and engine-level behavior.
- Description: Reference for every class R3F can instantiate: Mesh, BufferGeometry, Object3D, WebGLRenderer, materials, loaders, and math primitives.
- Tags: `docs`, `reference`, `classes`, `math`
- URL: https://threejs.org/docs/
- GitHub: https://github.com/mrdoob/three.js
- Preview: /screenshots/threejs-docs.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, learning-theory

### Three.js Examples

- ID: `three-examples`
- Field: Examples
- Kind / status / priority: showcase / core / production
- Best for: Finding raw techniques for loaders, postprocessing, WebXR, materials, controls, and shaders.
- Description: A huge gallery of engine examples that can be translated into React components when Drei does not already wrap them.
- Tags: `examples`, `engine`, `patterns`, `webxr`
- URL: https://threejs.org/examples/
- GitHub: https://github.com/mrdoob/three.js/tree/dev/examples
- Preview: /screenshots/three-examples.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration, learning-theory

### React Docs

- ID: `react-docs`
- Field: React
- Kind / status / priority: docs / core / canonical
- Best for: Keeping scene components predictable and avoiding render-loop state mistakes.
- Description: The React model still matters in R3F: composition, refs, effects, memoization, transitions, and state boundaries.
- Tags: `react`, `hooks`, `state`, `refs`
- URL: https://react.dev
- GitHub: https://github.com/reactjs/react.dev
- Preview: /screenshots/react-docs.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, learning-theory

### Vite

- ID: `vite`
- Field: Build tooling
- Kind / status / priority: tool / production / production
- Best for: Starting fast R3F prototypes and production apps.
- Description: Fast local development and bundling for React Three projects, including GLSL, workers, WASM, and asset pipelines via plugins.
- Tags: `build`, `dev-server`, `bundler`, `wasm`
- URL: https://vite.dev
- GitHub: https://github.com/vitejs/vite
- Preview: /screenshots/vite.webp
- Agent routes: start-r3f-app, shader-effects, performance-debug, xr-ar-vr, learning-theory

### TypeScript

- ID: `typescript`
- Field: Language
- Kind / status / priority: tool / production / production
- Best for: Larger R3F apps where ref and asset types become hard to track.
- Description: Type safety for scene props, GLTF components, ECS state, physics handles, refs, and shader uniform contracts.
- Tags: `types`, `tooling`, `maintainability`
- URL: https://www.typescriptlang.org
- GitHub: https://github.com/microsoft/TypeScript
- Preview: /screenshots/typescript.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, physics-games, data-maps-ai, learning-theory

### pmndrs

- ID: `pmndrs`
- Field: Ecosystem
- Kind / status / priority: community / core / production
- Best for: Following the center of gravity for modern React 3D tooling.
- Description: The collective behind R3F, Drei, Zustand, Jotai, Valtio, Leva, React Spring, XR, Rapier bindings, and many companion tools.
- Tags: `pmndrs`, `community`, `ecosystem`
- URL: https://pmnd.rs
- GitHub: https://github.com/pmndrs
- Preview: /screenshots/pmndrs.webp
- Agent routes: start-r3f-app, xr-ar-vr, data-maps-ai, learning-theory

### WebGL Fundamentals

- ID: `webgl-fundamentals`
- Field: Graphics basics
- Kind / status / priority: course / learning / specialized
- Best for: Debugging when Three.js abstractions stop being enough.
- Description: Low-level explanations of shaders, buffers, textures, matrix math, and GPU draw calls behind the abstractions.
- Tags: `webgl`, `gpu`, `math`, `shaders`
- URL: https://webglfundamentals.org
- GitHub: https://github.com/gfxfundamentals/webgl-fundamentals
- Preview: /screenshots/webgl-fundamentals.webp
- Agent routes: start-r3f-app, asset-pipeline, shader-effects, performance-debug, xr-ar-vr, learning-theory

### Three.js Manual

- ID: `three-manual`
- Field: Engine learning
- Kind / status / priority: docs / core / canonical
- Best for: Turning R3F JSX back into engine concepts when something needs lower-level debugging.
- Description: Narrative manual for cameras, lights, textures, loading, render targets, optimization, and WebXR in Three.js.
- Tags: `three.js`, `manual`, `learning`, `engine`
- URL: https://threejs.org/manual/
- GitHub: https://github.com/mrdoob/three.js
- Preview: /screenshots/three-manual.webp
- Agent routes: start-r3f-app, asset-pipeline, performance-debug, xr-ar-vr, learning-theory

### MDN WebGL

- ID: `mdn-webgl`
- Field: Browser API
- Kind / status / priority: docs / core / canonical
- Best for: Understanding platform constraints underneath Three.js and R3F.
- Description: Browser-level reference for WebGL concepts, context creation, extensions, textures, buffers, and compatibility.
- Tags: `webgl`, `mdn`, `browser`, `reference`
- URL: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API
- GitHub: none
- Preview: /screenshots/mdn-webgl.webp
- Agent routes: start-r3f-app, asset-pipeline, data-maps-ai, learning-theory

### MDN WebGPU

- ID: `mdn-webgpu`
- Field: Browser API
- Kind / status / priority: docs / learning / specialized
- Best for: Learning the vocabulary around adapters, devices, pipelines, buffers, and compute.
- Description: Reference for the next browser graphics API, useful as Three.js and R3F workflows move toward WebGPU renderers.
- Tags: `webgpu`, `browser`, `gpu`, `future`
- URL: https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API
- GitHub: none
- Preview: /screenshots/mdn-webgpu.webp
- Agent routes: start-r3f-app, xr-ar-vr, learning-theory

### WebGPU Fundamentals

- ID: `webgpu-fundamentals`
- Field: Graphics learning
- Kind / status / priority: course / learning / specialized
- Best for: Preparing for custom compute, storage buffers, and post-WebGL rendering patterns.
- Description: Practical WebGPU lessons from the same lineage as WebGL Fundamentals, covering modern GPU programming in browsers.
- Tags: `webgpu`, `gpu`, `learning`, `graphics`
- URL: https://webgpufundamentals.org
- GitHub: https://github.com/gfxfundamentals/webgpufundamentals
- Preview: /screenshots/webgpu-fundamentals.webp
- Agent routes: start-r3f-app, xr-ar-vr, learning-theory

### Khronos glTF

- ID: `khronos-gltf`
- Field: 3D asset standard
- Kind / status / priority: reference / core / canonical
- Best for: Understanding what exporters, loaders, validators, compression tools, and model viewers agree on.
- Description: The official home of glTF, the runtime 3D asset format most R3F model workflows depend on.
- Tags: `gltf`, `khronos`, `standard`, `assets`
- URL: https://www.khronos.org/gltf/
- GitHub: https://github.com/KhronosGroup/glTF
- Preview: /screenshots/khronos-gltf.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, learning-theory

### WebGL2 Fundamentals

- ID: `webgl2-fundamentals`
- Field: Graphics learning
- Kind / status / priority: course / learning / specialized
- Best for: Learning instancing, transform feedback, 3D textures, and render target techniques.
- Description: A focused companion to WebGL Fundamentals for the WebGL2 features that modern Three.js scenes often rely on.
- Tags: `webgl2`, `gpu`, `learning`, `shaders`
- URL: https://webgl2fundamentals.org
- GitHub: https://github.com/gfxfundamentals/webgl2-fundamentals
- Preview: /screenshots/webgl2-fundamentals.webp
- Agent routes: start-r3f-app, asset-pipeline, shader-effects, xr-ar-vr, learning-theory

### React Compiler Docs

- ID: `react-compiler`
- Field: React performance
- Kind / status / priority: docs / learning / specialized
- Best for: Keeping React app structure modern around an R3F canvas without accidental render churn.
- Description: Official React guidance for compiler-era React, useful when heavy canvas pages also contain complex DOM interfaces.
- Tags: `react`, `compiler`, `performance`, `docs`
- URL: https://react.dev/learn/react-compiler
- GitHub: https://github.com/facebook/react
- Preview: /screenshots/react-compiler.webp
- Agent routes: start-r3f-app, performance-debug, xr-ar-vr, data-maps-ai, learning-theory

### TanStack Query

- ID: `tanstack-query`
- Field: Async state
- Kind / status / priority: library / production / production
- Best for: Fetching catalogs, configuration, scores, geodata, and user-generated assets around a scene.
- Description: Server-state toolkit for resource libraries, asset browsers, multiplayer metadata, and 3D apps backed by APIs.
- Tags: `react`, `async`, `data`, `state`
- URL: https://tanstack.com/query/latest
- GitHub: https://github.com/TanStack/query
- Preview: /screenshots/tanstack-query.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, physics-games, data-maps-ai, learning-theory

### WebGPU Samples

- ID: `webgpu-samples`
- Field: WebGPU examples
- Kind / status / priority: showcase / learning / learning
- Best for: Learning browser GPU techniques that will shape future Three.js/R3F rendering.
- Description: Official-ish WebGPU sample gallery for compute, rendering, textures, shadows, particles, and modern GPU patterns.
- Tags: `webgpu`, `examples`, `gpu`, `future`
- URL: https://webgpu.github.io/webgpu-samples/
- GitHub: https://github.com/webgpu/webgpu-samples
- Preview: /screenshots/webgpu-samples.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, visual-inspiration, learning-theory

### wgpu

- ID: `wgpu`
- Field: GPU abstraction
- Kind / status / priority: library / learning / specialized
- Best for: Understanding the ecosystem around WebGPU and cross-platform GPU pipelines.
- Description: Rust GPU abstraction that informs modern graphics thinking and WebGPU-adjacent tooling.
- Tags: `webgpu`, `rust`, `gpu`, `graphics`
- URL: https://wgpu.rs
- GitHub: https://github.com/gfx-rs/wgpu
- Preview: /screenshots/wgpu.webp
- Agent routes: start-r3f-app, xr-ar-vr, learning-theory

### WebGPU Explainer

- ID: `webgpu-explainer`
- Field: WebGPU standard
- Kind / status / priority: reference / learning / specialized
- Best for: Knowing why WebGPU is different from WebGL and what capabilities it unlocks.
- Description: Explainer and standards repository for WebGPU, the modern browser GPU API.
- Tags: `webgpu`, `standards`, `gpu`, `browser`
- URL: https://gpuweb.github.io/gpuweb/explainer/
- GitHub: https://github.com/gpuweb/gpuweb
- Preview: /screenshots/webgpu-explainer.webp
- Agent routes: start-r3f-app, xr-ar-vr, data-maps-ai, learning-theory

### R3F WebGPU Postprocessing

- ID: `r3f-webgpu-postprocessing`
- Field: WebGPU starter
- Kind / status / priority: starter / experimental / experimental
- Best for: Learning how emerging WebGPU rendering paths change R3F effects and setup code.
- Description: Starter/demo project for React Three Fiber with WebGPU-oriented postprocessing experiments.
- Tags: `r3f`, `webgpu`, `postprocessing`, `starter`
- URL: https://r3f-webgpu-post-processing.vercel.app/
- GitHub: https://github.com/ektogamat/r3f-webgpu-post-processing
- Preview: /screenshots/r3f-webgpu-postprocessing.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, learning-theory

### TypeGPU

- ID: `typegpu`
- Field: Typed WebGPU
- Kind / status / priority: library / experimental / learning
- Best for: R3F developers exploring future WebGPU pipelines and lower-level GPU code.
- Description: TypeScript-first WebGPU abstraction focused on type-safe GPU resources and shaders.
- Tags: `webgpu`, `typescript`, `gpu`, `shaders`
- URL: https://docs.swmansion.com/TypeGPU/
- GitHub: https://github.com/software-mansion/TypeGPU
- Preview: /screenshots/typegpu.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, learning-theory

### webgpu-utils

- ID: `webgpu-utils`
- Field: WebGPU helpers
- Kind / status / priority: library / production / production
- Best for: Reducing boilerplate in raw WebGPU prototypes before integrating with higher-level renderers.
- Description: Small helpers for buffers, bind groups, typed arrays, and common WebGPU setup.
- Tags: `webgpu`, `utilities`, `buffers`, `gpu`
- URL: https://greggman.github.io/webgpu-utils/
- GitHub: https://github.com/greggman/webgpu-utils
- Preview: /screenshots/webgpu-utils.webp
- Agent routes: start-r3f-app, xr-ar-vr, learning-theory

### wgpu-matrix

- ID: `wgpu-matrix`
- Field: GPU math
- Kind / status / priority: library / production / production
- Best for: Low-level WebGPU experiments and shader math support.
- Description: Matrix and vector math helpers aimed at WebGPU examples and engines.
- Tags: `webgpu`, `math`, `matrices`, `utilities`
- URL: https://wgpu-matrix.org/
- GitHub: https://github.com/greggman/wgpu-matrix
- Preview: /screenshots/wgpu-matrix.webp
- Agent routes: start-r3f-app, xr-ar-vr, data-maps-ai, learning-theory

### WebGPU Specification

- ID: `webgpu-spec`
- Field: WebGPU standard
- Kind / status / priority: reference / core / canonical
- Best for: Understanding the low-level capabilities behind future Three.js and R3F rendering.
- Description: W3C WebGPU specification defining the modern browser GPU API.
- Tags: `webgpu`, `standard`, `gpu`, `browser`
- URL: https://www.w3.org/TR/webgpu/
- GitHub: https://github.com/gpuweb/gpuweb
- Preview: /screenshots/webgpu-spec.webp
- Agent routes: start-r3f-app, xr-ar-vr, learning-theory

## Ecosystem Libraries

Production helpers from pmndrs and adjacent React 3D tools.

### Drei

- ID: `drei`
- Field: Helpers
- Kind / status / priority: library / core / canonical
- Best for: Shipping faster without rebuilding common Three.js patterns.
- Description: The kitchen sink of R3F helpers: cameras, controls, loaders, staging, text, HTML, environment maps, shader materials, views, and abstractions.
- Tags: `helpers`, `controls`, `loaders`, `staging`, `pmndrs`
- URL: https://drei.docs.pmnd.rs
- GitHub: https://github.com/pmndrs/drei
- Preview: /screenshots/drei-docs.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, data-maps-ai

### gltfjsx

- ID: `gltfjsx`
- Field: Model conversion
- Kind / status / priority: tool / core / canonical
- Best for: Turning Blender, Spline, Sketchfab, or scanned assets into maintainable scene components.
- Description: Transforms GLTF and GLB files into typed JSX components, keeping model structure editable inside React.
- Tags: `gltf`, `assets`, `jsx`, `cli`
- URL: https://gltf.pmnd.rs
- GitHub: https://github.com/pmndrs/gltfjsx
- Preview: /screenshots/gltfjsx.webp
- Agent routes: start-r3f-app, asset-pipeline, shader-effects, xr-ar-vr, data-maps-ai

### React Postprocessing

- ID: `react-postprocessing`
- Field: Post effects
- Kind / status / priority: library / production / production
- Best for: Giving scenes a finished art direction without manual composer plumbing.
- Description: Declarative wrapper around the postprocessing library for bloom, depth of field, outlines, SSAO, noise, LUTs, and custom passes.
- Tags: `postprocessing`, `effects`, `bloom`, `dof`
- URL: https://react-postprocessing.docs.pmnd.rs
- GitHub: https://github.com/pmndrs/react-postprocessing
- Preview: /screenshots/react-postprocessing.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr

### React Three Rapier

- ID: `react-three-rapier`
- Field: Physics
- Kind / status / priority: library / production / production
- Best for: Games, product configurators, toys, XR interactions, and believable motion.
- Description: R3F bindings for the Rapier physics engine, with rigid bodies, colliders, joints, sensors, and debug rendering.
- Tags: `physics`, `rapier`, `collisions`, `wasm`
- URL: https://pmndrs.github.io/react-three-rapier/
- GitHub: https://github.com/pmndrs/react-three-rapier
- Preview: /screenshots/rapier-docs.webp
- Agent routes: start-r3f-app, shader-effects, performance-debug, xr-ar-vr, physics-games

### React Three XR

- ID: `react-three-xr`
- Field: WebXR
- Kind / status / priority: library / production / production
- Best for: Meta Quest, Vision Pro browser, AR hit testing, room-scale demos, and headset interfaces.
- Description: React and vanilla Three tools for VR and AR sessions, controllers, hand tracking, pointer events, and XR-friendly scene structure.
- Tags: `webxr`, `vr`, `ar`, `controllers`, `pmndrs`
- URL: https://pmndrs.github.io/xr/docs/getting-started/introduction
- GitHub: https://github.com/pmndrs/xr
- Preview: /screenshots/xr-docs.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr

### React Three UIKit

- ID: `react-three-uikit`
- Field: Spatial UI
- Kind / status / priority: library / production / production
- Best for: XR menus, in-scene dashboards, HUDs, panels, and 3D app controls.
- Description: WebGL-rendered UI primitives for Three.js and R3F, including layout, text, interaction, and kit packages.
- Tags: `ui`, `webxr`, `layout`, `text`
- URL: https://pmndrs.github.io/uikit/docs/getting-started/introduction
- GitHub: https://github.com/pmndrs/uikit
- Preview: /screenshots/uikit-docs.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, learning-theory

### React Three Flex

- ID: `react-three-flex`
- Field: 3D layout
- Kind / status / priority: library / production / production
- Best for: Keeping scene UI and product configurator layouts from becoming hard-coded coordinates.
- Description: Flexbox-like layout for R3F scenes using Yoga, useful when arranging panels, labels, grids, and spatial UI.
- Tags: `layout`, `flexbox`, `ui`, `yoga`
- URL: https://github.com/pmndrs/react-three-flex
- GitHub: https://github.com/pmndrs/react-three-flex
- Preview: /screenshots/react-three-flex.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr

### React Three CSG

- ID: `react-three-csg`
- Field: Geometry
- Kind / status / priority: library / production / production
- Best for: CAD-like cuts, holes, procedural product parts, and editable shapes.
- Description: Constructive solid geometry components for boolean operations on meshes, powered by the three-bvh-csg ecosystem.
- Tags: `csg`, `geometry`, `cad`, `boolean`
- URL: https://github.com/pmndrs/react-three-csg
- GitHub: https://github.com/pmndrs/react-three-csg
- Preview: /screenshots/react-three-csg.webp
- Agent routes: start-r3f-app, shader-effects, performance-debug, xr-ar-vr

### React Three A11y

- ID: `react-three-a11y`
- Field: Accessibility
- Kind / status / priority: library / production / production
- Best for: Making interactive canvas content less hostile to non-pointer workflows.
- Description: Accessibility helpers for canvas experiences, giving screen readers and keyboard users meaningful access to 3D interactions.
- Tags: `accessibility`, `a11y`, `keyboard`, `semantics`
- URL: https://github.com/pmndrs/react-three-a11y
- GitHub: https://github.com/pmndrs/react-three-a11y
- Preview: /screenshots/react-three-a11y.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr

### React Three Offscreen

- ID: `react-three-offscreen`
- Field: Workers
- Kind / status / priority: library / experimental / learning
- Best for: Heavy visual apps that need to keep the main thread available for DOM and interaction.
- Description: Runs R3F rendering in a worker through OffscreenCanvas where browser support and project constraints allow it.
- Tags: `offscreen`, `worker`, `performance`, `canvas`
- URL: https://github.com/pmndrs/react-three-offscreen
- GitHub: https://github.com/pmndrs/react-three-offscreen
- Preview: /screenshots/react-three-offscreen.webp
- Agent routes: start-r3f-app, shader-effects, performance-debug, xr-ar-vr, data-maps-ai

### React Three GPU Pathtracer

- ID: `gpu-pathtracer`
- Field: Rendering
- Kind / status / priority: library / creative / specialized
- Best for: Photoreal product configurators, material studies, and render-mode toggles.
- Description: R3F integration for physically based GPU path tracing, useful for high-end product visuals and still-quality previews.
- Tags: `path tracing`, `rendering`, `photoreal`, `materials`
- URL: https://github.com/pmndrs/react-three-gpu-pathtracer
- GitHub: https://github.com/pmndrs/react-three-gpu-pathtracer
- Preview: /screenshots/gpu-pathtracer.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration

### Lamina

- ID: `lamina`
- Field: Materials
- Kind / status / priority: library / creative / specialized
- Best for: Art-directed materials without writing full custom GLSL from scratch.
- Description: Layer-based shader materials for R3F that make gradients, fresnel, noise, depth, and matcap looks easier to compose.
- Tags: `materials`, `shader`, `layers`, `noise`
- URL: https://github.com/pmndrs/lamina
- GitHub: https://github.com/pmndrs/lamina
- Preview: /screenshots/lamina.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration

### Maath

- ID: `maath`
- Field: Math utilities
- Kind / status / priority: library / production / production
- Best for: Natural motion, procedural placement, camera smoothing, and interactive transitions.
- Description: Animation-friendly math utilities for easing, damping, random distributions, buffers, geometry helpers, and vector operations.
- Tags: `math`, `damping`, `animation`, `procedural`
- URL: https://github.com/pmndrs/maath
- GitHub: https://github.com/pmndrs/maath
- Preview: /screenshots/maath.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, learning-theory, web-experiences

### Zustand

- ID: `zustand`
- Field: State
- Kind / status / priority: library / production / production
- Best for: Scene state that needs to be read in useFrame without constantly re-rendering React.
- Description: Small state store that works well outside React renders, making it a common choice for R3F controls, games, and editors.
- Tags: `state`, `store`, `games`, `controls`
- URL: https://zustand.docs.pmnd.rs
- GitHub: https://github.com/pmndrs/zustand
- Preview: /screenshots/zustand.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, physics-games

### Valtio

- ID: `valtio`
- Field: State
- Kind / status / priority: library / production / production
- Best for: Configurator state, editor panels, and object graphs that map naturally to mutable objects.
- Description: Proxy state for mutable-feeling scene and editor data that can still drive React updates where needed.
- Tags: `state`, `proxy`, `editor`, `configurator`
- URL: https://valtio.dev
- GitHub: https://github.com/pmndrs/valtio
- Preview: /screenshots/valtio.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, data-maps-ai

### Jotai

- ID: `jotai`
- Field: State
- Kind / status / priority: library / production / production
- Best for: Complex interfaces around a canvas where individual controls should update independently.
- Description: Atomic state model for composing small pieces of UI and scene state with minimal coupling.
- Tags: `state`, `atoms`, `react`, `ui`
- URL: https://jotai.org
- GitHub: https://github.com/pmndrs/jotai
- Preview: /screenshots/jotai.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, data-maps-ai

### three-stdlib

- ID: `three-stdlib`
- Field: Three.js addons
- Kind / status / priority: library / production / production
- Best for: Using controls, loaders, modifiers, and utilities without relying directly on examples paths.
- Description: Standalone, tree-shakeable exports of Three.js examples utilities, maintained for modern npm workflows.
- Tags: `three.js`, `stdlib`, `loaders`, `controls`
- URL: https://github.com/pmndrs/three-stdlib
- GitHub: https://github.com/pmndrs/three-stdlib
- Preview: /screenshots/three-stdlib.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, data-maps-ai

### camera-controls

- ID: `camera-controls`
- Field: Camera control
- Kind / status / priority: library / production / production
- Best for: Orbit-style camera motion with damping, bounds, fit-to-box, and polished transitions.
- Description: Smooth, production-grade camera controller for Three.js, wrapped by Drei and widely used for product viewers.
- Tags: `camera`, `controls`, `three.js`, `drei`
- URL: https://github.com/yomotsu/camera-controls
- GitHub: https://github.com/yomotsu/camera-controls
- Preview: /screenshots/camera-controls.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr

### React Three Test Renderer

- ID: `react-three-test-renderer`
- Field: Testing
- Kind / status / priority: library / production / production
- Best for: Testing scene composition, props, handlers, and state-driven object creation in Node.
- Description: Test renderer for React Three Fiber scenes that lets unit tests inspect the rendered Three.js object graph.
- Tags: `testing`, `r3f`, `react`, `pmndrs`
- URL: https://github.com/pmndrs/react-three-fiber/tree/master/packages/test-renderer
- GitHub: https://github.com/pmndrs/react-three-fiber/tree/master/packages/test-renderer
- Preview: /screenshots/react-three-test-renderer.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr

### three-custom-shader-material

- ID: `three-custom-shader-material`
- Field: Shader materials
- Kind / status / priority: library / production / production
- Best for: Adding deformation and stylized effects without rewriting MeshStandardMaterial from scratch.
- Description: Extend built-in Three.js materials with custom shader code while preserving lighting, maps, shadows, and material features.
- Tags: `shader`, `materials`, `three.js`, `lighting`
- URL: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial
- GitHub: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial
- Preview: /screenshots/three-custom-shader-material.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, data-maps-ai

### three-nebula

- ID: `three-nebula`
- Field: Particles
- Kind / status / priority: library / production / production
- Best for: Fire, dust, sparks, magic effects, and environmental motion in R3F scenes.
- Description: Particle engine for Three.js with emitters, initializers, behaviours, renderers, and zone-based spawning.
- Tags: `particles`, `effects`, `three.js`, `games`
- URL: https://github.com/creativelifeform/three-nebula
- GitHub: https://github.com/creativelifeform/three-nebula
- Preview: /screenshots/three-nebula.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, physics-games

### three.quarks

- ID: `three.quarks`
- Field: Particles
- Kind / status / priority: library / production / production
- Best for: Richer particle effects than hand-authored Points systems can comfortably support.
- Description: GPU-friendly particle system for Three.js with editor tooling and runtime effects for games and experiences.
- Tags: `particles`, `vfx`, `games`, `three.js`
- URL: https://github.com/Alchemist0823/three.quarks
- GitHub: https://github.com/Alchemist0823/three.quarks
- Preview: /screenshots/three.quarks.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, physics-games

### three-bmfont-text

- ID: `three-bmfont-text`
- Field: Typography
- Kind / status / priority: library / production / production
- Best for: Text meshes where texture atlas control and shader effects matter.
- Description: Bitmap font geometry for Three.js, still useful for stylized text, older projects, and shader-driven typography.
- Tags: `text`, `typography`, `bmfont`, `three.js`
- URL: https://github.com/Jam3/three-bmfont-text
- GitHub: https://github.com/Jam3/three-bmfont-text
- Preview: /screenshots/three-bmfont-text.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr

### Instanced Uniforms Mesh

- ID: `three-instanced-uniforms-mesh`
- Field: Instancing
- Kind / status / priority: library / production / production
- Best for: Crowds, forests, particles, and product grids with per-instance material differences.
- Description: Adds per-instance uniform-like attributes to InstancedMesh workflows for richer variation at scale.
- Tags: `instancing`, `performance`, `materials`, `three.js`
- URL: https://github.com/protectwise/troika/tree/main/packages/three-instanced-uniforms-mesh
- GitHub: https://github.com/protectwise/troika/tree/main/packages/three-instanced-uniforms-mesh
- Preview: /screenshots/three-instanced-uniforms-mesh.webp
- Agent routes: start-r3f-app, shader-effects, performance-debug, xr-ar-vr

### three-mesh-ui

- ID: `three-mesh-ui`
- Field: Spatial UI
- Kind / status / priority: library / production / production
- Best for: In-scene panels, VR menus, kiosks, HUDs, and UI experiments that need to exist inside the 3D world.
- Description: Block, text, layout, and interaction primitives for building mesh-based user interfaces in Three.js.
- Tags: `ui`, `webxr`, `three.js`, `layout`
- URL: https://felixmariotto.github.io/three-mesh-ui/
- GitHub: https://github.com/felixmariotto/three-mesh-ui
- Preview: /screenshots/three-mesh-ui.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr

### Troika

- ID: `troika-3d`
- Field: 3D utilities
- Kind / status / priority: library / production / production
- Best for: Borrowing mature pieces for text-heavy, instanced, or worker-backed Three.js scenes.
- Description: A suite of Three.js utilities including SDF text, instanced uniforms, derived materials, workers, and supporting tools.
- Tags: `text`, `materials`, `instancing`, `workers`
- URL: https://protectwise.github.io/troika/
- GitHub: https://github.com/protectwise/troika
- Preview: /screenshots/troika-3d.webp
- Agent routes: start-r3f-app, shader-effects, performance-debug, xr-ar-vr

### troika-three-utils

- ID: `troika-derived-material`
- Field: Material utilities
- Kind / status / priority: library / production / production
- Best for: Understanding advanced material patching patterns used by production-quality Three.js libraries.
- Description: Material derivation and utility helpers used across Troika packages for extending Three.js material behavior.
- Tags: `materials`, `shaders`, `three.js`, `utilities`
- URL: https://protectwise.github.io/troika/troika-three-utils/
- GitHub: https://github.com/protectwise/troika/tree/main/packages/troika-three-utils
- Preview: /screenshots/troika-derived-material.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr

### three-projected-material

- ID: `three-projected-material`
- Field: Projection mapping
- Kind / status / priority: library / creative / specialized
- Best for: Art-directed product reveals, projection-mapped scenes, and texture effects that need to follow a view.
- Description: Project a texture from a camera onto meshes, enabling decals, projector looks, and camera-mapped effects.
- Tags: `projection`, `materials`, `camera`, `effects`
- URL: https://github.com/marcofugaro/three-projected-material
- GitHub: https://github.com/marcofugaro/three-projected-material
- Preview: /screenshots/three-projected-material.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration

### three-viewport-gizmo

- ID: `three-viewport-gizmo`
- Field: Editor controls
- Kind / status / priority: library / production / production
- Best for: Building scene editors, model viewers, CAD interfaces, and spatial tools with clear orientation feedback.
- Description: Viewport orientation gizmo for Three.js editors and CAD-like tools.
- Tags: `editor`, `gizmo`, `camera`, `tools`
- URL: https://github.com/Fennec-hub/three-viewport-gizmo
- GitHub: https://github.com/Fennec-hub/three-viewport-gizmo
- Preview: /screenshots/three-viewport-gizmo.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr

### three-transform-controls

- ID: `three-gizmo`
- Field: Scene editing
- Kind / status / priority: library / core / canonical
- Best for: Any R3F editor or builder that needs object manipulation in the viewport.
- Description: Three.js TransformControls example for translating, rotating, and scaling objects with familiar editor handles.
- Tags: `editor`, `controls`, `transform`, `three.js`
- URL: https://threejs.org/examples/#misc_controls_transform
- GitHub: https://github.com/mrdoob/three.js/blob/dev/examples/jsm/controls/TransformControls.js
- Preview: /screenshots/three-gizmo.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr

### MeshLine Examples

- ID: `three-meshline-examples`
- Field: Line rendering
- Kind / status / priority: library / creative / specialized
- Best for: Trails, paths, graphs, signatures, strokes, and code-art line systems.
- Description: Examples for textured, thick, animated mesh-based lines that avoid native WebGL line limitations.
- Tags: `lines`, `trails`, `pmndrs`, `effects`
- URL: https://pmndrs.github.io/meshline/
- GitHub: https://github.com/pmndrs/meshline
- Preview: /screenshots/three-meshline-examples.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration, data-maps-ai, learning-theory

### three-subdivide

- ID: `three-subdivide`
- Field: Geometry
- Kind / status / priority: library / production / production
- Best for: Generative geometry, smoothing rough meshes, and experimenting with sculptural forms.
- Description: Subdivision surface modifier for Three.js geometries, useful for smoothing and procedural mesh workflows.
- Tags: `geometry`, `subdivision`, `mesh`, `procedural`
- URL: https://github.com/stevinz/three-subdivide
- GitHub: https://github.com/stevinz/three-subdivide
- Preview: /screenshots/three-subdivide.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr

### Three.js Fat Lines

- ID: `three-fatline`
- Field: Line rendering
- Kind / status / priority: library / core / canonical
- Best for: Graph lines, routes, wire visuals, and annotations that need consistent screen-space thickness.
- Description: Official Three.js wide-line examples using Line2, LineGeometry, and LineMaterial.
- Tags: `lines`, `three.js`, `examples`, `geometry`
- URL: https://threejs.org/examples/#webgl_lines_fat
- GitHub: https://github.com/mrdoob/three.js/tree/dev/examples/jsm/lines
- Preview: /screenshots/three-fatline.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr

### Use.GPU

- ID: `use-gpu`
- Field: WebGPU UI
- Kind / status / priority: library / experimental / learning
- Best for: Studying what React-shaped GPU programming can become beyond WebGL.
- Description: React-like live-computed WebGPU rendering system for UI, plots, layout, and shader-driven components.
- Tags: `webgpu`, `react`, `gpu`, `experimental`
- URL: https://usegpu.live
- GitHub: https://github.com/iamwilhelm/use.gpu
- Preview: /screenshots/use-gpu.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, learning-theory

### Threlte

- ID: `threlte`
- Field: Declarative Three.js
- Kind / status / priority: library / production / production
- Best for: Comparing R3F architecture against another polished component-based Three.js framework.
- Description: Svelte renderer and ecosystem for Three.js, useful as a sibling reference for declarative 3D patterns.
- Tags: `three.js`, `svelte`, `declarative`, `ecosystem`
- URL: https://threlte.xyz
- GitHub: https://github.com/threlte/threlte
- Preview: /screenshots/threlte.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, data-maps-ai

### TresJS

- ID: `tresjs`
- Field: Declarative Three.js
- Kind / status / priority: library / production / production
- Best for: Seeing how other frontend ecosystems solve familiar scene composition problems.
- Description: Vue ecosystem for declarative Three.js, with companion packages and patterns adjacent to the R3F world.
- Tags: `three.js`, `vue`, `declarative`, `ecosystem`
- URL: https://tresjs.org
- GitHub: https://github.com/Tresjs/tres
- Preview: /screenshots/tresjs.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr

### react-ogl

- ID: `ogl-react`
- Field: Alternative renderer
- Kind / status / priority: library / experimental / learning
- Best for: Studying renderer design and lightweight creative-coding alternatives to Three.js.
- Description: pmndrs experiment bringing React renderer ideas to OGL, a smaller WebGL library than Three.js.
- Tags: `react`, `ogl`, `renderer`, `experimental`
- URL: https://github.com/pmndrs/react-ogl
- GitHub: https://github.com/pmndrs/react-ogl
- Preview: /screenshots/ogl-react.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration, learning-theory

### Drei Stage

- ID: `drei-stage`
- Field: Staging
- Kind / status / priority: library / core / canonical
- Best for: Making imported models look presentable without building a full studio setup first.
- Description: Drei abstraction for quickly staging models with lighting, environment, shadows, and camera framing.
- Tags: `staging`, `lighting`, `models`, `drei`
- URL: https://drei.docs.pmnd.rs/staging/stage
- GitHub: https://github.com/pmndrs/drei
- Preview: /screenshots/drei-stage.webp
- Agent routes: start-r3f-app, asset-pipeline, shader-effects, xr-ar-vr, visual-inspiration

### Drei Environment

- ID: `drei-environment`
- Field: Lighting
- Kind / status / priority: library / core / canonical
- Best for: Fast product lighting, reflective materials, and visual context for GLTF scenes.
- Description: Environment-map helper for presets, HDRIs, ground projection, and scene lighting in R3F.
- Tags: `lighting`, `hdri`, `environment`, `drei`
- URL: https://drei.docs.pmnd.rs/staging/environment
- GitHub: https://github.com/pmndrs/drei
- Preview: /screenshots/drei-environment.webp
- Agent routes: start-r3f-app, asset-pipeline, shader-effects, xr-ar-vr

### react-three-lightmap

- ID: `react-three-lightmap`
- Field: Baked lighting
- Kind / status / priority: library / experimental / learning
- Best for: Exploring baked-lighting workflows for performant architectural, product, and game scenes.
- Description: pmndrs experiment for using lightmaps in React Three Fiber scenes.
- Tags: `r3f`, `lightmaps`, `baking`, `pmndrs`
- URL: https://github.com/pmndrs/react-three-lightmap
- GitHub: https://github.com/pmndrs/react-three-lightmap
- Preview: /screenshots/react-three-lightmap.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, data-maps-ai

### ThreePipe

- ID: `threepipe`
- Field: Viewer framework
- Kind / status / priority: library / production / production
- Best for: Product viewers and configurable 3D applications that need a plugin-oriented architecture.
- Description: Three.js framework for model viewers, plugins, asset loading, and production rendering pipelines.
- Tags: `viewer`, `three.js`, `plugins`, `pipeline`
- URL: https://threepipe.org/
- GitHub: https://github.com/repalash/threepipe
- Preview: /screenshots/threepipe.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr

## Asset Pipeline

Model conversion, compression, avatars, materials, and sources.

### glTF Transform

- ID: `gltf-transform`
- Field: Optimization
- Kind / status / priority: tool / production / production
- Best for: Shrinking models, deduplicating textures, adding KTX2, Draco, meshopt, and fixing asset hygiene.
- Description: A CLI and SDK for inspecting, optimizing, compressing, converting, and transforming glTF assets before they reach R3F.
- Tags: `gltf`, `optimization`, `compression`, `cli`
- URL: https://gltf-transform.dev
- GitHub: https://github.com/donmccurdy/glTF-Transform
- Preview: /screenshots/gltf-transform.webp
- Agent routes: start-r3f-app, asset-pipeline

### glTF Report

- ID: `gltf-report`
- Field: Inspection
- Kind / status / priority: tool / production / production
- Best for: Diagnosing why a model is heavy, broken, unlit, oversized, or animation-hostile.
- Description: Browser-based model inspection with scene stats, textures, animations, materials, validation, and optimization hints.
- Tags: `gltf`, `inspection`, `validation`, `assets`
- URL: https://gltf.report
- GitHub: https://github.com/donmccurdy/glTF-Report
- Preview: /screenshots/gltf-report.webp
- Agent routes: asset-pipeline, shader-effects, web-experiences

### glTF Validator

- ID: `gltf-validator`
- Field: Validation
- Kind / status / priority: tool / production / production
- Best for: Checking export correctness from Blender, Spline, CAD, or marketplace assets.
- Description: Official validation for glTF 2.0 assets, useful before blaming R3F for a malformed model.
- Tags: `gltf`, `validator`, `khronos`, `assets`
- URL: https://github.khronos.org/glTF-Validator/
- GitHub: https://github.com/KhronosGroup/glTF-Validator
- Preview: /screenshots/gltf-validator.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr

### Blender

- ID: `blender`
- Field: 3D creation
- Kind / status / priority: tool / production / production
- Best for: Owning the asset pipeline instead of depending only on downloaded models.
- Description: The open-source 3D creation suite for modeling, rigging, animation, UVs, materials, baking, and glTF export.
- Tags: `modeling`, `animation`, `gltf`, `rigging`
- URL: https://www.blender.org
- GitHub: https://github.com/blender/blender
- Preview: /screenshots/blender.webp
- Agent routes: asset-pipeline, shader-effects, web-experiences

### Poly Haven

- ID: `polyhaven`
- Field: Assets
- Kind / status / priority: asset / production / production
- Best for: Fast, legal environment maps and PBR texture sources.
- Description: Free public-domain HDRIs, textures, and models that are excellent for environment lighting and material studies.
- Tags: `hdri`, `textures`, `models`, `cc0`
- URL: https://polyhaven.com
- GitHub: https://github.com/Poly-Haven
- Preview: /screenshots/polyhaven.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai

### Sketchfab

- ID: `sketchfab`
- Field: Marketplace
- Kind / status / priority: asset / production / production
- Best for: Finding reference models, scanned objects, props, and prototype assets.
- Description: Large library of 3D models across licenses, often available as glTF or convertible into glTF workflows.
- Tags: `models`, `marketplace`, `gltf`, `scans`
- URL: https://sketchfab.com
- GitHub: none
- Preview: /screenshots/sketchfab.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai

### Ready Player Me

- ID: `ready-player-me`
- Field: Avatars
- Kind / status / priority: asset / production / production
- Best for: Humanoid avatars, profile-driven characters, and quick multiplayer identity.
- Description: Avatar creation and integration platform frequently used in R3F and WebXR social experiences.
- Tags: `avatars`, `gltf`, `characters`, `xr`
- URL: https://readyplayer.me
- GitHub: https://github.com/readyplayerme
- Preview: /screenshots/ready-player-me.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, physics-games

### Mixamo

- ID: `mixamo`
- Field: Animation
- Kind / status / priority: asset / production / production
- Best for: Rapid prototyping for third-person characters and NPCs.
- Description: Character rigging and motion library that can feed Blender and GLTF character animation workflows.
- Tags: `animation`, `characters`, `rigging`, `fbx`
- URL: https://www.mixamo.com
- GitHub: none
- Preview: /screenshots/mixamo.webp
- Agent routes: asset-pipeline, xr-ar-vr, web-experiences

### Draco

- ID: `draco`
- Field: Compression
- Kind / status / priority: tool / production / production
- Best for: Reducing model download size when decode cost is acceptable.
- Description: Geometry compression used by many GLTF pipelines to shrink mesh payloads.
- Tags: `compression`, `geometry`, `gltf`, `google`
- URL: https://google.github.io/draco/
- GitHub: https://github.com/google/draco
- Preview: /screenshots/draco.webp
- Agent routes: asset-pipeline

### KTX Software

- ID: `ktx`
- Field: Texture compression
- Kind / status / priority: tool / production / production
- Best for: Compressing textures so a beautiful scene does not collapse on phones and headsets.
- Description: Texture compression tooling for KTX2 and Basis Universal, critical for mobile and XR memory budgets.
- Tags: `textures`, `ktx2`, `basis`, `compression`
- URL: https://github.khronos.org/KTX-Software/
- GitHub: https://github.com/KhronosGroup/KTX-Software
- Preview: /screenshots/ktx.webp
- Agent routes: asset-pipeline, xr-ar-vr

### meshoptimizer

- ID: `meshoptimizer`
- Field: Mesh compression
- Kind / status / priority: tool / production / production
- Best for: High-volume models, scanned meshes, and performance-conscious delivery.
- Description: Mesh optimization and compression library used in glTF pipelines for smaller and faster geometry.
- Tags: `meshopt`, `compression`, `geometry`, `gltf`
- URL: https://meshoptimizer.org
- GitHub: https://github.com/zeux/meshoptimizer
- Preview: /screenshots/meshoptimizer.webp
- Agent routes: asset-pipeline, performance-debug, xr-ar-vr

### Spline

- ID: `spline`
- Field: No-code 3D
- Kind / status / priority: tool / production / production
- Best for: Design-led teams that need 3D layouts before investing in a full code pipeline.
- Description: Browser-based 3D design tool with React integration, useful for fast art-directed scenes and lightweight interactive assets.
- Tags: `design`, `react`, `3d tool`, `interactive`
- URL: https://spline.design
- GitHub: https://github.com/splinetool/react-spline
- Preview: /screenshots/spline.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr

### model-viewer

- ID: `model-viewer`
- Field: Model display
- Kind / status / priority: library / production / production
- Best for: Comparing R3F viewers to a battle-tested model presentation component.
- Description: A web component for glTF display and AR handoff. Not R3F, but useful as a benchmark and fallback for product viewers.
- Tags: `gltf`, `ar`, `web component`, `viewer`
- URL: https://modelviewer.dev
- GitHub: https://github.com/google/model-viewer
- Preview: /screenshots/model-viewer.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr

### glTF Sample Assets

- ID: `gltf-sample-assets`
- Field: Reference models
- Kind / status / priority: asset / core / production
- Best for: Checking whether a rendering issue is your model, your exporter, or your scene setup.
- Description: Official sample glTF assets used for testing loaders, materials, animation, extensions, and viewer behavior.
- Tags: `gltf`, `samples`, `testing`, `khronos`
- URL: https://github.com/KhronosGroup/glTF-Sample-Assets
- GitHub: https://github.com/KhronosGroup/glTF-Sample-Assets
- Preview: /screenshots/gltf-sample-assets.webp
- Agent routes: asset-pipeline, shader-effects, web-experiences

### Don McCurdy glTF Viewer

- ID: `gltf-viewer`
- Field: Model inspection
- Kind / status / priority: tool / production / production
- Best for: Comparing how a model looks in a known-good viewer before debugging R3F code.
- Description: Fast Three.js-based glTF viewer for inspecting lighting, animations, materials, wireframes, skeletons, and variants.
- Tags: `gltf`, `viewer`, `materials`, `animation`
- URL: https://gltf-viewer.donmccurdy.com
- GitHub: https://github.com/donmccurdy/three-gltf-viewer
- Preview: /screenshots/gltf-viewer.webp
- Agent routes: start-r3f-app, asset-pipeline, shader-effects, performance-debug, xr-ar-vr, web-experiences

### gltfpack

- ID: `gltfpack`
- Field: Model optimization
- Kind / status / priority: tool / production / production
- Best for: Making models web-sized before they reach a Vite build or CDN.
- Description: glTF optimizer from the meshoptimizer project for compression, simplification, quantization, and texture workflows.
- Tags: `gltf`, `optimization`, `meshopt`, `compression`
- URL: https://meshoptimizer.org/gltf/
- GitHub: https://github.com/zeux/meshoptimizer/tree/master/gltf
- Preview: /screenshots/gltfpack.webp
- Agent routes: asset-pipeline

### ambientCG

- ID: `ambientcg`
- Field: PBR textures
- Kind / status / priority: asset / production / production
- Best for: Finding legal, tileable material maps for product shots and environment studies.
- Description: Large library of public-domain PBR materials, HDRIs, and models for physically based scenes.
- Tags: `textures`, `pbr`, `cc0`, `materials`
- URL: https://ambientcg.com
- GitHub: none
- Preview: /screenshots/ambientcg.webp
- Agent routes: asset-pipeline, shader-effects, xr-ar-vr, data-maps-ai

### Matcaps

- ID: `matcaps`
- Field: Material assets
- Kind / status / priority: asset / creative / specialized
- Best for: Quick sculptural looks, prototype materials, and Drei MeshMatcapMaterial workflows.
- Description: Open collection of matcap textures for stylized lighting and fast material exploration.
- Tags: `matcap`, `materials`, `textures`, `stylized`
- URL: https://github.com/nidorx/matcaps
- GitHub: https://github.com/nidorx/matcaps
- Preview: /screenshots/matcaps.webp
- Agent routes: asset-pipeline, shader-effects, visual-inspiration

### Kenney Assets

- ID: `kenney-assets`
- Field: Game assets
- Kind / status / priority: asset / production / production
- Best for: Rapid R3F game prototyping without waiting on custom art.
- Description: Huge library of clean game-ready 2D and 3D assets with permissive licensing and consistent style.
- Tags: `game assets`, `models`, `prototype`, `low poly`
- URL: https://kenney.nl/assets
- GitHub: none
- Preview: /screenshots/kenney-assets.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai

### Quaternius

- ID: `quaternius`
- Field: Game models
- Kind / status / priority: asset / production / production
- Best for: Building cohesive R3F game scenes quickly with low-poly assets.
- Description: Free stylized 3D model packs for games, characters, props, environments, and fantasy worlds.
- Tags: `models`, `game assets`, `characters`, `low poly`
- URL: https://quaternius.com
- GitHub: none
- Preview: /screenshots/quaternius.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, physics-games

### OpenGameArt

- ID: `opengameart`
- Field: Open game assets
- Kind / status / priority: asset / production / production
- Best for: Finding placeholder or production-friendly game assets while watching license details.
- Description: Community repository for game art, sound, textures, models, sprites, and music across multiple licenses.
- Tags: `game assets`, `audio`, `models`, `textures`
- URL: https://opengameart.org
- GitHub: none
- Preview: /screenshots/opengameart.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai

### Fab

- ID: `fab`
- Field: Marketplace
- Kind / status / priority: asset / production / production
- Best for: Finding higher-fidelity assets that may need conversion and optimization for web delivery.
- Description: Epic's marketplace for 3D models, materials, environments, plugins, and game-ready art.
- Tags: `marketplace`, `models`, `materials`, `assets`
- URL: https://www.fab.com
- GitHub: none
- Preview: /screenshots/fab.webp
- Agent routes: asset-pipeline, shader-effects, xr-ar-vr

### Polycam

- ID: `polycam`
- Field: 3D scanning
- Kind / status / priority: tool / production / production
- Best for: Capturing real-world objects and spaces for later cleanup and R3F presentation.
- Description: 3D capture app for LiDAR, photogrammetry, Gaussian splats, and model export workflows.
- Tags: `scan`, `photogrammetry`, `splats`, `capture`
- URL: https://poly.cam
- GitHub: none
- Preview: /screenshots/polycam.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai

### Meshroom

- ID: `meshroom`
- Field: Photogrammetry
- Kind / status / priority: tool / production / production
- Best for: Producing scan assets that can be retopologized, compressed, and displayed in R3F.
- Description: Open-source photogrammetry software for reconstructing textured meshes from image sets.
- Tags: `photogrammetry`, `scan`, `models`, `open source`
- URL: https://alicevision.org/#meshroom
- GitHub: https://github.com/alicevision/Meshroom
- Preview: /screenshots/meshroom.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr

### MeshLab

- ID: `meshlab`
- Field: Mesh processing
- Kind / status / priority: tool / production / production
- Best for: Repairing scanned or marketplace meshes before web optimization.
- Description: Open-source system for processing, cleaning, decimating, inspecting, and converting 3D triangular meshes.
- Tags: `mesh`, `repair`, `decimation`, `models`
- URL: https://www.meshlab.net
- GitHub: https://github.com/cnr-isti-vclab/meshlab
- Preview: /screenshots/meshlab.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai

### Instant Meshes

- ID: `instant-meshes`
- Field: Retopology
- Kind / status / priority: tool / production / production
- Best for: Creating lighter, more usable assets from dense scan meshes.
- Description: Automatic field-aligned mesh retopology tool for turning messy scans into cleaner geometry.
- Tags: `retopology`, `mesh`, `optimization`, `scan`
- URL: https://github.com/wjakob/instant-meshes
- GitHub: https://github.com/wjakob/instant-meshes
- Preview: /screenshots/instant-meshes.webp
- Agent routes: asset-pipeline

### Material Maker

- ID: `material-maker`
- Field: Procedural materials
- Kind / status / priority: tool / creative / specialized
- Best for: Creating custom tileable textures for stylized and physically based R3F scenes.
- Description: Open-source procedural PBR material authoring tool inspired by node-based texture workflows.
- Tags: `materials`, `textures`, `procedural`, `pbr`
- URL: https://www.materialmaker.org
- GitHub: https://github.com/RodZill4/material-maker
- Preview: /screenshots/material-maker.webp
- Agent routes: start-r3f-app, asset-pipeline, shader-effects, visual-inspiration

### ArmorPaint

- ID: `armorpaint`
- Field: Texture painting
- Kind / status / priority: tool / production / production
- Best for: Customizing GLTF assets before export and web compression.
- Description: Standalone physically based texture painting tool for authoring maps on 3D models.
- Tags: `texture painting`, `materials`, `pbr`, `models`
- URL: https://armorpaint.org
- GitHub: https://github.com/armory3d/armorpaint
- Preview: /screenshots/armorpaint.webp
- Agent routes: asset-pipeline, shader-effects, xr-ar-vr, data-maps-ai

### Cascadeur

- ID: `cascadeur`
- Field: Character animation
- Kind / status / priority: tool / production / production
- Best for: Making character animation feel less generic before exporting to GLTF pipelines.
- Description: Physics-assisted character animation software for creating and refining humanoid movement.
- Tags: `animation`, `characters`, `rigging`, `game assets`
- URL: https://cascadeur.com
- GitHub: none
- Preview: /screenshots/cascadeur.webp
- Agent routes: asset-pipeline, xr-ar-vr, physics-games, web-experiences

### Rokoko

- ID: `rokoko`
- Field: Motion capture
- Kind / status / priority: tool / production / production
- Best for: Bringing believable body movement into R3F avatar and game workflows.
- Description: Motion capture tools and marketplace for character animation pipelines.
- Tags: `mocap`, `animation`, `characters`, `avatars`
- URL: https://www.rokoko.com
- GitHub: none
- Preview: /screenshots/rokoko.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, web-experiences

### Free3D

- ID: `free3d`
- Field: Model marketplace
- Kind / status / priority: asset / production / production
- Best for: Finding prototype models while checking licenses and cleaning assets before web use.
- Description: Large library of free and paid 3D models across formats and quality levels.
- Tags: `models`, `marketplace`, `free`, `assets`
- URL: https://free3d.com
- GitHub: none
- Preview: /screenshots/free3d.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai

### CGTrader Free Models

- ID: `cgtrader-free`
- Field: Model marketplace
- Kind / status / priority: asset / production / production
- Best for: Finding high-quality placeholder or production assets for optimization experiments.
- Description: Free section of a large 3D model marketplace, with mixed licenses and formats.
- Tags: `models`, `marketplace`, `free`, `assets`
- URL: https://www.cgtrader.com/free-3d-models
- GitHub: none
- Preview: /screenshots/cgtrader-free.webp
- Agent routes: asset-pipeline, xr-ar-vr

### Poly Pizza

- ID: `poly-pizza`
- Field: Low-poly models
- Kind / status / priority: asset / production / production
- Best for: Stylized games, prototypes, and quick R3F scene dressing.
- Description: Friendly low-poly model library with many free downloadable assets for web and games.
- Tags: `models`, `low poly`, `game assets`, `free`
- URL: https://poly.pizza
- GitHub: none
- Preview: /screenshots/poly-pizza.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, physics-games

### Smithsonian 3D

- ID: `smithsonian-3d`
- Field: Museum scans
- Kind / status / priority: asset / production / production
- Best for: Reference scans, educational experiences, museum-like R3F projects, and public-domain research.
- Description: Digitized cultural, scientific, and historical 3D objects from the Smithsonian collection.
- Tags: `scans`, `museum`, `models`, `education`
- URL: https://3d.si.edu
- GitHub: none
- Preview: /screenshots/smithsonian-3d.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai

### NASA 3D Resources

- ID: `nasa-3d`
- Field: Space models
- Kind / status / priority: asset / production / production
- Best for: Space scenes, educational visualization, and public-domain reference assets.
- Description: NASA-hosted models, textures, and imagery for spacecraft, terrain, planets, and science visualization.
- Tags: `space`, `models`, `nasa`, `textures`
- URL: https://nasa3d.arc.nasa.gov
- GitHub: none
- Preview: /screenshots/nasa-3d.webp
- Agent routes: asset-pipeline, data-maps-ai

### BlenderKit

- ID: `blenderkit`
- Field: Blender assets
- Kind / status / priority: asset / production / production
- Best for: Sourcing or staging assets before exporting optimized glTF for R3F.
- Description: Asset library integrated into Blender with models, materials, brushes, and scene elements.
- Tags: `blender`, `models`, `materials`, `assets`
- URL: https://www.blenderkit.com
- GitHub: none
- Preview: /screenshots/blenderkit.webp
- Agent routes: start-r3f-app, asset-pipeline, shader-effects, xr-ar-vr

### CGBookcase

- ID: `cgbookcase`
- Field: PBR textures
- Kind / status / priority: asset / production / production
- Best for: Quickly adding believable surfaces to product and environment scenes.
- Description: Free PBR texture library with clean categories and maps for web material workflows.
- Tags: `textures`, `pbr`, `free`, `materials`
- URL: https://www.cgbookcase.com
- GitHub: none
- Preview: /screenshots/cgbookcase.webp
- Agent routes: asset-pipeline, shader-effects, xr-ar-vr, data-maps-ai

### ShareTextures

- ID: `sharetextures`
- Field: PBR textures
- Kind / status / priority: asset / production / production
- Best for: Material studies, environment dressing, and replacing bland placeholder surfaces.
- Description: Library of free PBR textures and materials for real-time rendering workflows.
- Tags: `textures`, `pbr`, `free`, `materials`
- URL: https://www.sharetextures.com
- GitHub: none
- Preview: /screenshots/sharetextures.webp
- Agent routes: asset-pipeline, shader-effects, xr-ar-vr

### TextureCan

- ID: `texturecan`
- Field: PBR textures
- Kind / status / priority: asset / production / production
- Best for: Finding quick material sources for walls, fabric, ground, and product props.
- Description: Free seamless PBR textures with maps suitable for Three.js material setups.
- Tags: `textures`, `pbr`, `seamless`, `free`
- URL: https://www.texturecan.com
- GitHub: none
- Preview: /screenshots/texturecan.webp
- Agent routes: start-r3f-app, asset-pipeline, data-maps-ai

### FreePBR

- ID: `freepbr`
- Field: PBR textures
- Kind / status / priority: asset / production / production
- Best for: Prototype material libraries and quick R3F environment passes.
- Description: Free PBR material maps for game engines and real-time web scenes.
- Tags: `textures`, `pbr`, `free`, `materials`
- URL: https://freepbr.com
- GitHub: none
- Preview: /screenshots/freepbr.webp
- Agent routes: start-r3f-app, asset-pipeline, shader-effects, xr-ar-vr, data-maps-ai

### 3D Textures

- ID: `3dtextures`
- Field: PBR textures
- Kind / status / priority: asset / production / production
- Best for: Adding detail to stylized or realistic R3F scenes with minimal sourcing friction.
- Description: Free seamless PBR texture library with organized material categories.
- Tags: `textures`, `pbr`, `seamless`, `materials`
- URL: https://3dtextures.me
- GitHub: none
- Preview: /screenshots/3dtextures.webp
- Agent routes: start-r3f-app, asset-pipeline, shader-effects, xr-ar-vr, data-maps-ai

### Freesound

- ID: `freesound`
- Field: Audio assets
- Kind / status / priority: asset / production / production
- Best for: Adding sonic texture to games, XR scenes, installations, and interactive toys.
- Description: Massive collaborative database of sound effects, recordings, and audio snippets under varied licenses.
- Tags: `audio`, `sound effects`, `free`, `games`
- URL: https://freesound.org
- GitHub: none
- Preview: /screenshots/freesound.webp
- Agent routes: asset-pipeline, shader-effects, xr-ar-vr, physics-games, data-maps-ai

### Mixkit

- ID: `mixkit`
- Field: Audio assets
- Kind / status / priority: asset / production / production
- Best for: UI sounds, game feedback, ambient layers, and fast audio prototyping.
- Description: Free sound effects and music clips that can quickly make prototypes feel more complete.
- Tags: `audio`, `sound effects`, `free`, `music`
- URL: https://mixkit.co/free-sound-effects/
- GitHub: none
- Preview: /screenshots/mixkit.webp
- Agent routes: asset-pipeline, shader-effects

### OpenGameArt Audio

- ID: `opengameart-audio`
- Field: Game audio
- Kind / status / priority: asset / production / production
- Best for: Finding cohesive audio packs for browser games and interactive R3F demos.
- Description: OpenGameArt's music and sound-effect archive for game prototypes and finished small projects.
- Tags: `audio`, `games`, `open assets`, `free`
- URL: https://opengameart.org/art-search-advanced?field_art_type_tid%5B%5D=13
- GitHub: none
- Preview: /screenshots/opengameart-audio.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, physics-games

### CMU Motion Capture Database

- ID: `cmu-mocap`
- Field: Motion capture
- Kind / status / priority: asset / production / production
- Best for: Finding movement data for experiments, retargeting, and animation studies.
- Description: Large academic motion-capture database with many motion categories for character animation research.
- Tags: `mocap`, `animation`, `characters`, `free`
- URL: http://mocap.cs.cmu.edu
- GitHub: none
- Preview: /screenshots/cmu-mocap.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai, web-experiences

### FreeMoCap

- ID: `freemocap`
- Field: Motion capture
- Kind / status / priority: tool / production / production
- Best for: Creating custom movement data for avatars, characters, and physical interaction studies.
- Description: Open-source markerless motion-capture software for capturing human motion with consumer cameras.
- Tags: `mocap`, `open source`, `animation`, `characters`
- URL: https://freemocap.org
- GitHub: https://github.com/freemocap/freemocap
- Preview: /screenshots/freemocap.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai, web-experiences

### AccuRIG

- ID: `accurig`
- Field: Auto rigging
- Kind / status / priority: tool / production / production
- Best for: Preparing character meshes for R3F games and avatar experiments.
- Description: Free auto-rigging tool for humanoid characters, useful before animation retargeting and glTF export.
- Tags: `rigging`, `characters`, `animation`, `avatars`
- URL: https://actorcore.reallusion.com/auto-rig
- GitHub: none
- Preview: /screenshots/accurig.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, physics-games, web-experiences

### MakeHuman

- ID: `makehuman`
- Field: Character creation
- Kind / status / priority: tool / production / production
- Best for: Creating custom characters before Blender cleanup and web optimization.
- Description: Open-source human character creation tool for generating base meshes and riggable humanoids.
- Tags: `characters`, `avatars`, `open source`, `models`
- URL: http://www.makehumancommunity.org
- GitHub: https://github.com/makehumancommunity/makehuman
- Preview: /screenshots/makehuman.webp
- Agent routes: asset-pipeline, xr-ar-vr

### Mixamo to glTF

- ID: `mixamo-to-gltf`
- Field: Animation conversion
- Kind / status / priority: tool / production / production
- Best for: Moving character animation into R3F without keeping FBX as the runtime format.
- Description: Utility for converting Mixamo FBX animations into glTF-friendly workflows.
- Tags: `mixamo`, `gltf`, `animation`, `conversion`
- URL: https://github.com/donmccurdy/mixamo-gltf
- GitHub: https://github.com/donmccurdy/mixamo-gltf
- Preview: /screenshots/mixamo-to-gltf.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, web-experiences

### Blender glTF Exporter

- ID: `blender-gltf-exporter`
- Field: Exporting
- Kind / status / priority: tool / core / canonical
- Best for: Understanding how Blender materials, animations, cameras, and lights move into web runtimes.
- Description: Official Blender glTF 2.0 importer/exporter documentation and implementation.
- Tags: `blender`, `gltf`, `export`, `khronos`
- URL: https://docs.blender.org/manual/en/latest/addons/import_export/scene_gltf2.html
- GitHub: https://github.com/KhronosGroup/glTF-Blender-IO
- Preview: /screenshots/blender-gltf-exporter.webp
- Agent routes: asset-pipeline, shader-effects, web-experiences

### glTF Extensions Registry

- ID: `gltf-extensions`
- Field: Asset standards
- Kind / status / priority: reference / core / canonical
- Best for: Knowing what a loader or exporter supports when advanced asset features break.
- Description: Registry of official and vendor glTF extensions for materials, compression, lights, variants, and metadata.
- Tags: `gltf`, `extensions`, `khronos`, `materials`
- URL: https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0
- GitHub: https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0
- Preview: /screenshots/gltf-extensions.webp
- Agent routes: asset-pipeline, shader-effects, xr-ar-vr, data-maps-ai

### Babylon.js Sandbox

- ID: `babylon-sandbox`
- Field: Model inspection
- Kind / status / priority: tool / production / production
- Best for: Diagnosing whether a glTF issue is asset-specific or Three.js/R3F-specific.
- Description: Drag-and-drop scene/model viewer that is useful for cross-checking glTF rendering outside Three.js.
- Tags: `gltf`, `viewer`, `babylon.js`, `debug`
- URL: https://sandbox.babylonjs.com
- GitHub: https://github.com/BabylonJS/Babylon.js
- Preview: /screenshots/babylon-sandbox.webp
- Agent routes: start-r3f-app, asset-pipeline, performance-debug

### Filament glTF Viewer

- ID: `filament-viewer`
- Field: PBR reference
- Kind / status / priority: reference / production / production
- Best for: Understanding PBR material behavior and comparing real-time rendering expectations.
- Description: Google Filament material documentation and viewer ecosystem for physically based rendering reference.
- Tags: `pbr`, `materials`, `gltf`, `reference`
- URL: https://google.github.io/filament/Materials.html
- GitHub: https://github.com/google/filament
- Preview: /screenshots/filament-viewer.webp
- Agent routes: asset-pipeline, shader-effects, xr-ar-vr

### model-viewer Editor

- ID: `modelviewer-editor`
- Field: Model presentation
- Kind / status / priority: tool / production / production
- Best for: Benchmarking model presentation defaults before rebuilding similar interactions in R3F.
- Description: Visual editor for configuring model-viewer settings, camera, environment, AR, and poster behavior.
- Tags: `gltf`, `viewer`, `ar`, `product`
- URL: https://modelviewer.dev/editor/
- GitHub: https://github.com/google/model-viewer
- Preview: /screenshots/modelviewer-editor.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr

### three-shader-baker

- ID: `three-shader-baker`
- Field: Shader baking
- Kind / status / priority: tool / experimental / experimental
- Best for: Moving expensive procedural looks into cheaper textures when performance matters.
- Description: Bake shader outputs and material looks for Three.js-oriented workflows.
- Tags: `baking`, `shaders`, `materials`, `optimization`
- URL: https://github.com/repalash/three-shader-baker
- GitHub: https://github.com/repalash/three-shader-baker
- Preview: /screenshots/three-shader-baker.webp
- Agent routes: start-r3f-app, asset-pipeline, shader-effects, performance-debug

### three-material-editor

- ID: `three-material-editor`
- Field: Material editing
- Kind / status / priority: tool / experimental / experimental
- Best for: Tweaking, debugging, and comparing Three.js material settings visually.
- Description: Material inspection and editing tooling for Three.js projects.
- Tags: `materials`, `editor`, `three.js`, `tools`
- URL: https://github.com/repalash/three-material-editor
- GitHub: https://github.com/repalash/three-material-editor
- Preview: /screenshots/three-material-editor.webp
- Agent routes: start-r3f-app, asset-pipeline, shader-effects, performance-debug, xr-ar-vr

### loaders.gl

- ID: `loaders-gl`
- Field: Data loaders
- Kind / status / priority: library / production / production
- Best for: Feeding serious spatial data and large assets into WebGL/WebGPU applications.
- Description: Large loader ecosystem for 3D tiles, point clouds, geospatial data, images, and binary formats.
- Tags: `loaders`, `geospatial`, `3d-tiles`, `point-clouds`
- URL: https://loaders.gl/
- GitHub: https://github.com/visgl/loaders.gl
- Preview: /screenshots/loaders-gl.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai, learning-theory

### web-ifc-viewer

- ID: `web-ifc-viewer`
- Field: BIM viewer
- Kind / status / priority: library / production / production
- Best for: AEC, architecture, and building-data viewers using Three.js workflows.
- Description: Open IFC/BIM viewer tooling for loading architectural models in the browser.
- Tags: `ifc`, `bim`, `architecture`, `viewer`
- URL: https://ifcjs.github.io/web-ifc-viewer/
- GitHub: https://github.com/IFCjs/web-ifc-viewer
- Preview: /screenshots/web-ifc-viewer.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai

### Google Scanned Objects

- ID: `google-scanned-objects`
- Field: Free 3D dataset
- Kind / status / priority: asset / production / production
- Best for: Real-world object references, dataset experiments, and asset prototyping.
- Description: Large dataset of scanned household objects for research and prototyping.
- Tags: `3d-assets`, `scans`, `dataset`, `objects`
- URL: https://research.google/resources/datasets/scanned-objects-google-research/
- GitHub: none
- Preview: /screenshots/google-scanned-objects.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai

### Amazon Berkeley Objects

- ID: `amazon-berkeley-objects`
- Field: Free 3D dataset
- Kind / status / priority: asset / production / production
- Best for: Object-recognition, ecommerce, and 3D product prototype datasets.
- Description: Amazon/Berkeley dataset of product object scans, metadata, and imagery.
- Tags: `3d-assets`, `dataset`, `objects`, `products`
- URL: https://amazon-berkeley-objects.s3.amazonaws.com/index.html
- GitHub: none
- Preview: /screenshots/amazon-berkeley-objects.webp
- Agent routes: asset-pipeline, data-maps-ai

### Objaverse XL

- ID: `objaverse-xl`
- Field: Massive 3D dataset
- Kind / status / priority: asset / production / production
- Best for: Large-scale asset research, AI-era 3D workflows, and dataset exploration.
- Description: Massive open dataset of 3D objects used for research into 3D understanding and generation.
- Tags: `3d-assets`, `dataset`, `ai`, `research`
- URL: https://objaverse.allenai.org/
- GitHub: https://github.com/allenai/objaverse-xl
- Preview: /screenshots/objaverse-xl.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai

### Thingi10K

- ID: `thingi10k`
- Field: Mesh dataset
- Kind / status / priority: asset / learning / learning
- Best for: Testing mesh cleanup, decimation, repair, and conversion pipelines.
- Description: Dataset of 10,000 3D-printable models useful for geometry processing research.
- Tags: `meshes`, `dataset`, `3d-printing`, `geometry`
- URL: https://ten-thousand-models.appspot.com/
- GitHub: none
- Preview: /screenshots/thingi10k.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai, learning-theory

### ShapeNet

- ID: `shapenet`
- Field: 3D shape dataset
- Kind / status / priority: asset / learning / learning
- Best for: AI, geometry processing, and shape-classification experiments.
- Description: Research dataset of categorized 3D shapes and annotations.
- Tags: `3d-assets`, `dataset`, `research`, `shapes`
- URL: https://shapenet.org/
- GitHub: none
- Preview: /screenshots/shapenet.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai, learning-theory

### ModelNet

- ID: `modelnet`
- Field: 3D model dataset
- Kind / status / priority: asset / learning / learning
- Best for: Testing point-cloud, mesh, and object-classification algorithms.
- Description: Princeton dataset of CAD models used heavily in 3D recognition research.
- Tags: `dataset`, `cad`, `research`, `3d-models`
- URL: https://modelnet.cs.princeton.edu/
- GitHub: none
- Preview: /screenshots/modelnet.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai, learning-theory

### Scan the World

- ID: `scan-the-world`
- Field: Cultural scans
- Kind / status / priority: asset / production / production
- Best for: Public-domain-style sculptural assets, museum references, and educational scenes.
- Description: Archive of 3D-scanned sculptures, artifacts, and cultural heritage objects.
- Tags: `scans`, `culture`, `sculpture`, `3d-assets`
- URL: https://www.myminifactory.com/scantheworld/
- GitHub: none
- Preview: /screenshots/scan-the-world.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai

### Thingiverse

- ID: `thingiverse`
- Field: Model marketplace
- Kind / status / priority: asset / production / production
- Best for: Prototype meshes, props, and mechanical references that may need cleanup before web use.
- Description: Large community archive of printable 3D models, parts, props, and experiments.
- Tags: `3d-printing`, `models`, `community`, `assets`
- URL: https://www.thingiverse.com/
- GitHub: none
- Preview: /screenshots/thingiverse.webp
- Agent routes: asset-pipeline, xr-ar-vr

### Printables

- ID: `printables`
- Field: Model marketplace
- Kind / status / priority: asset / production / production
- Best for: Finding mechanical, hobby, and prop meshes to retopologize or optimize for web scenes.
- Description: Community 3D model library with lots of printable objects and practical props.
- Tags: `3d-printing`, `models`, `community`, `assets`
- URL: https://www.printables.com/model
- GitHub: none
- Preview: /screenshots/printables.webp
- Agent routes: asset-pipeline, xr-ar-vr

### itch.io Free 3D Assets

- ID: `itch-free-3d-assets`
- Field: Game assets
- Kind / status / priority: asset / production / production
- Best for: Fast prototyping with stylized characters, props, environments, and game-ready pieces.
- Description: Free 3D game asset packs from independent artists and toolmakers.
- Tags: `assets`, `games`, `free`, `itch`
- URL: https://itch.io/game-assets/free/tag-3d
- GitHub: none
- Preview: /screenshots/itch-free-3d-assets.webp
- Agent routes: asset-pipeline, xr-ar-vr, physics-games

### KayKit

- ID: `kaykit`
- Field: Game asset packs
- Kind / status / priority: asset / production / production
- Best for: Cohesive prototype worlds, characters, vehicles, and props for R3F games.
- Description: Polished low-poly and stylized game asset packs, many with free options.
- Tags: `assets`, `low-poly`, `games`, `characters`
- URL: https://kaylousberg.itch.io/
- GitHub: none
- Preview: /screenshots/kaykit.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, physics-games

### CraftPix Freebies

- ID: `craftpix-freebies`
- Field: Game assets
- Kind / status / priority: asset / production / production
- Best for: Filling out prototypes with matching game UI and supporting art.
- Description: Free game asset packs including UI, sprites, and some 3D-adjacent resources.
- Tags: `assets`, `games`, `free`, `ui`
- URL: https://craftpix.net/freebies/
- GitHub: none
- Preview: /screenshots/craftpix-freebies.webp
- Agent routes: asset-pipeline, xr-ar-vr, physics-games

### LazyTextures

- ID: `lazytextures`
- Field: Textures
- Kind / status / priority: asset / production / production
- Best for: Quick material exploration and texture references for web-optimized assets.
- Description: Texture library with free and paid materials for 3D scenes.
- Tags: `textures`, `materials`, `assets`, `pbr`
- URL: https://lazytextures.com/
- GitHub: none
- Preview: /screenshots/lazytextures.webp
- Agent routes: asset-pipeline, shader-effects, xr-ar-vr, data-maps-ai

### Poliigon Free

- ID: `poliigon-free`
- Field: PBR materials
- Kind / status / priority: asset / production / production
- Best for: High-quality PBR material references and selected production assets.
- Description: Free tier of Poliigon materials, HDRIs, and model assets.
- Tags: `pbr`, `textures`, `materials`, `hdri`
- URL: https://www.poliigon.com/search/free
- GitHub: none
- Preview: /screenshots/poliigon-free.webp
- Agent routes: asset-pipeline, shader-effects

### LotPixel

- ID: `lotpixel`
- Field: Textures and models
- Kind / status / priority: asset / production / production
- Best for: Supplementing environment and product work with ready references.
- Description: Asset library with textures, models, and materials for 3D scenes.
- Tags: `textures`, `models`, `materials`, `assets`
- URL: https://lotpixel.com/
- GitHub: none
- Preview: /screenshots/lotpixel.webp
- Agent routes: asset-pipeline, shader-effects, xr-ar-vr

### CGEES HDRI

- ID: `cgees-hdri`
- Field: HDRI library
- Kind / status / priority: asset / production / production
- Best for: Finding environment lighting that fits product, automotive, and architectural scenes.
- Description: HDRI and environment resources for lighting 3D scenes.
- Tags: `hdri`, `lighting`, `environment`, `assets`
- URL: https://cgees.com/
- GitHub: none
- Preview: /screenshots/cgees-hdri.webp
- Agent routes: asset-pipeline, xr-ar-vr

### Open HDRI

- ID: `open-hdri`
- Field: Free HDRIs
- Kind / status / priority: asset / production / production
- Best for: Lighting R3F scenes with real captured environments.
- Description: Free HDRI environment maps for 3D rendering and scene lighting.
- Tags: `hdri`, `lighting`, `environment`, `free`
- URL: https://open-hdri.com/
- GitHub: none
- Preview: /screenshots/open-hdri.webp
- Agent routes: start-r3f-app, asset-pipeline, data-maps-ai

### HDRMAPS Freebies

- ID: `hdrmaps-freebies`
- Field: HDRI library
- Kind / status / priority: asset / production / production
- Best for: Testing lighting setups before committing to paid HDRI packs.
- Description: Free HDRI samples from HDRMAPS for environment lighting and reflections.
- Tags: `hdri`, `lighting`, `free`, `environment`
- URL: https://hdrmaps.com/freebies/
- GitHub: none
- Preview: /screenshots/hdrmaps-freebies.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai

### OpenFootage

- ID: `openfootage`
- Field: HDRI and footage
- Kind / status / priority: asset / production / production
- Best for: Environment lighting, background plates, and material references.
- Description: HDRI panoramas, textures, and footage resources for visual effects and rendering.
- Tags: `hdri`, `textures`, `footage`, `vfx`
- URL: https://www.openfootage.net/
- GitHub: none
- Preview: /screenshots/openfootage.webp
- Agent routes: asset-pipeline, shader-effects

### sIBL Archive

- ID: `sibl-archive`
- Field: HDRI archive
- Kind / status / priority: asset / learning / learning
- Best for: Understanding image-based lighting workflows and finding older free lighting sets.
- Description: Historic archive of smart image-based lighting sets and HDR environments.
- Tags: `hdri`, `ibl`, `lighting`, `archive`
- URL: http://www.hdrlabs.com/sibl/archive.html
- GitHub: none
- Preview: /screenshots/sibl-archive.webp
- Agent routes: asset-pipeline, xr-ar-vr, learning-theory

### Pixar One Twenty Eight

- ID: `pixar-one-twenty-eight`
- Field: Texture library
- Kind / status / priority: asset / production / production
- Best for: Material study, procedural texture references, and high-quality lookdev inspiration.
- Description: Pixar texture library with 128 production-inspired materials.
- Tags: `textures`, `pixar`, `materials`, `lookdev`
- URL: https://renderman.pixar.com/one-twenty-eight
- GitHub: none
- Preview: /screenshots/pixar-one-twenty-eight.webp
- Agent routes: asset-pipeline, shader-effects, xr-ar-vr, visual-inspiration

### Iconify

- ID: `iconify`
- Field: Icon system
- Kind / status / priority: asset / production / production
- Best for: Toolbars, spatial UI labels, editor controls, and app chrome around 3D tools.
- Description: Massive icon framework and API aggregating many open icon sets.
- Tags: `icons`, `ui`, `assets`, `svg`
- URL: https://iconify.design/
- GitHub: https://github.com/iconify/iconify
- Preview: /screenshots/iconify.webp
- Agent routes: asset-pipeline, xr-ar-vr

### Game-icons.net

- ID: `game-icons`
- Field: Game icons
- Kind / status / priority: asset / production / production
- Best for: Inventory systems, HUDs, prototypes, and game/editor affordances.
- Description: Huge library of game-oriented SVG icons for actions, items, abilities, and interface states.
- Tags: `icons`, `games`, `svg`, `ui`
- URL: https://game-icons.net/
- GitHub: https://github.com/game-icons/icons
- Preview: /screenshots/game-icons.webp
- Agent routes: asset-pipeline, xr-ar-vr, physics-games

### OpenMoji

- ID: `openmoji`
- Field: Emoji assets
- Kind / status / priority: asset / production / production
- Best for: Friendly UI markers, placeholder art, and social/spatial app interface language.
- Description: Open-source emoji library with SVG and PNG assets.
- Tags: `emoji`, `icons`, `svg`, `assets`
- URL: https://openmoji.org/
- GitHub: https://github.com/hfg-gmuend/openmoji
- Preview: /screenshots/openmoji.webp
- Agent routes: asset-pipeline, xr-ar-vr

### Sonniss GDC Game Audio

- ID: `sonniss-gdc`
- Field: Sound effects
- Kind / status / priority: asset / production / production
- Best for: Stocking prototypes with higher-quality game and UI sound effects.
- Description: Large annual free game audio bundles released around GDC.
- Tags: `audio`, `sfx`, `games`, `free`
- URL: https://sonniss.com/gameaudiogdc
- GitHub: none
- Preview: /screenshots/sonniss-gdc.webp
- Agent routes: asset-pipeline, shader-effects, xr-ar-vr, physics-games

### Pixabay Sound Effects

- ID: `pixabay-sound-effects`
- Field: Sound effects
- Kind / status / priority: asset / production / production
- Best for: Quick audio passes for demos, UI feedback, and lightweight game prototypes.
- Description: Searchable library of royalty-free sound effects and short audio clips.
- Tags: `audio`, `sfx`, `free`, `royalty-free`
- URL: https://pixabay.com/sound-effects/
- GitHub: none
- Preview: /screenshots/pixabay-sound-effects.webp
- Agent routes: asset-pipeline, shader-effects, xr-ar-vr

### BBC Sound Effects

- ID: `bbc-sound-effects`
- Field: Sound archive
- Kind / status / priority: asset / learning / learning
- Best for: Ambience, environmental reference, and sound design research.
- Description: BBC archive of sound effects and field recordings for reference and permitted uses.
- Tags: `audio`, `sfx`, `archive`, `field-recording`
- URL: https://sound-effects.bbcrewind.co.uk/
- GitHub: none
- Preview: /screenshots/bbc-sound-effects.webp
- Agent routes: asset-pipeline, shader-effects, xr-ar-vr, learning-theory

### LAFAN1

- ID: `lafan1`
- Field: Animation dataset
- Kind / status / priority: asset / learning / learning
- Best for: Animation ML, locomotion tests, and motion blending references.
- Description: Ubisoft La Forge animation dataset for motion prediction and character animation research.
- Tags: `mocap`, `animation`, `dataset`, `characters`
- URL: https://github.com/ubisoft/ubisoft-laforge-animation-dataset
- GitHub: https://github.com/ubisoft/ubisoft-laforge-animation-dataset
- Preview: /screenshots/lafan1.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai, learning-theory, web-experiences

### AMASS

- ID: `amass`
- Field: Human motion dataset
- Kind / status / priority: asset / learning / learning
- Best for: Research-grade human motion, retargeting, and avatar animation pipelines.
- Description: Large archive of human motion datasets represented in a common body model format.
- Tags: `mocap`, `human-motion`, `dataset`, `research`
- URL: https://amass.is.tue.mpg.de/
- GitHub: none
- Preview: /screenshots/amass.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai, learning-theory, web-experiences

### bvhacker

- ID: `bvhacker`
- Field: BVH editing
- Kind / status / priority: tool / learning / specialized
- Best for: Cleaning legacy mocap before retargeting to web characters.
- Description: Tool for viewing, trimming, repairing, and preparing BVH motion-capture files.
- Tags: `mocap`, `bvh`, `animation`, `tool`
- URL: https://www.bvhacker.com/
- GitHub: none
- Preview: /screenshots/bvhacker.webp
- Agent routes: asset-pipeline, performance-debug, xr-ar-vr, data-maps-ai, learning-theory, web-experiences

### VRoid Studio

- ID: `vroid-studio`
- Field: Avatar authoring
- Kind / status / priority: tool / production / production
- Best for: Creating stylized characters for three-vrm, XR worlds, and avatar demos.
- Description: Free avatar creation tool for VRM-compatible humanoid characters.
- Tags: `avatars`, `vrm`, `characters`, `authoring`
- URL: https://vroid.com/en/studio
- GitHub: none
- Preview: /screenshots/vroid-studio.webp
- Agent routes: asset-pipeline, xr-ar-vr, visual-inspiration

### VRM Specification

- ID: `vrm-spec`
- Field: Avatar standard
- Kind / status / priority: reference / core / canonical
- Best for: Understanding avatar rigs, expressions, spring bones, metadata, and compatibility.
- Description: Official VRM specification and documentation for humanoid avatar exchange.
- Tags: `vrm`, `avatars`, `standard`, `characters`
- URL: https://vrm.dev/en/
- GitHub: https://github.com/vrm-c/vrm-specification
- Preview: /screenshots/vrm-spec.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai

### VRM Add-on for Blender

- ID: `vrm-blender-addon`
- Field: Avatar export
- Kind / status / priority: tool / production / production
- Best for: Preparing VRM characters for Three.js, R3F, and avatar applications.
- Description: Blender add-on for importing, editing, and exporting VRM avatars.
- Tags: `vrm`, `blender`, `avatars`, `export`
- URL: https://github.com/saturday06/VRM-Addon-for-Blender
- GitHub: https://github.com/saturday06/VRM-Addon-for-Blender
- Preview: /screenshots/vrm-blender-addon.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr

### UniVRM

- ID: `univrm`
- Field: VRM tooling
- Kind / status / priority: tool / production / production
- Best for: Cross-checking avatar behavior between Unity, VRM authoring, and web runtimes.
- Description: Unity VRM import/export tooling that defines many practical VRM workflows.
- Tags: `vrm`, `unity`, `avatars`, `tooling`
- URL: https://github.com/vrm-c/UniVRM
- GitHub: https://github.com/vrm-c/UniVRM
- Preview: /screenshots/univrm.webp
- Agent routes: asset-pipeline, xr-ar-vr

### COLMAP

- ID: `colmap`
- Field: Photogrammetry
- Kind / status / priority: tool / production / production
- Best for: Turning photos into cameras, sparse clouds, dense reconstructions, and splat/mesh inputs.
- Description: Structure-from-motion and multi-view stereo pipeline for photogrammetry reconstruction.
- Tags: `photogrammetry`, `reconstruction`, `3d-scan`, `sfm`
- URL: https://colmap.github.io/
- GitHub: https://github.com/colmap/colmap
- Preview: /screenshots/colmap.webp
- Agent routes: asset-pipeline, xr-ar-vr

### OpenMVG

- ID: `openmvg`
- Field: Photogrammetry
- Kind / status / priority: tool / production / production
- Best for: Photogrammetry research, camera reconstruction, and custom capture workflows.
- Description: Open multiple-view geometry library for structure-from-motion pipelines.
- Tags: `photogrammetry`, `sfm`, `geometry`, `reconstruction`
- URL: https://openmvg.readthedocs.io/
- GitHub: https://github.com/openMVG/openMVG
- Preview: /screenshots/openmvg.webp
- Agent routes: asset-pipeline, xr-ar-vr

### OpenMVS

- ID: `openmvs`
- Field: Dense reconstruction
- Kind / status / priority: tool / production / production
- Best for: Completing photogrammetry pipelines after camera reconstruction.
- Description: Open multi-view stereo library for dense point clouds, meshes, and textured reconstructions.
- Tags: `photogrammetry`, `mvs`, `meshes`, `reconstruction`
- URL: https://cdcseacave.github.io/openMVS/
- GitHub: https://github.com/cdcseacave/openMVS
- Preview: /screenshots/openmvs.webp
- Agent routes: asset-pipeline, xr-ar-vr

### AliceVision

- ID: `alicevision`
- Field: Photogrammetry
- Kind / status / priority: tool / production / production
- Best for: Open photogrammetry pipelines and visual reconstruction workflows.
- Description: Computer vision photogrammetry framework powering Meshroom.
- Tags: `photogrammetry`, `computer-vision`, `meshroom`, `reconstruction`
- URL: https://alicevision.org/
- GitHub: https://github.com/alicevision/AliceVision
- Preview: /screenshots/alicevision.webp
- Agent routes: asset-pipeline

### OpenDroneMap

- ID: `opendronemap`
- Field: Drone mapping
- Kind / status / priority: tool / production / production
- Best for: Geospatial capture, terrain references, and 3D map generation pipelines.
- Description: Open toolkit for processing aerial imagery into maps, point clouds, meshes, and terrain outputs.
- Tags: `photogrammetry`, `drones`, `maps`, `terrain`
- URL: https://www.opendronemap.org/
- GitHub: https://github.com/OpenDroneMap/ODM
- Preview: /screenshots/opendronemap.webp
- Agent routes: asset-pipeline, data-maps-ai

### Open3D

- ID: `open3d`
- Field: 3D data processing
- Kind / status / priority: tool / production / production
- Best for: Cleaning scans, analyzing point clouds, and preparing spatial data for web display.
- Description: Open-source library for processing point clouds, meshes, RGB-D data, and 3D ML workflows.
- Tags: `point-clouds`, `meshes`, `3d-data`, `processing`
- URL: https://www.open3d.org/
- GitHub: https://github.com/isl-org/Open3D
- Preview: /screenshots/open3d.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai

### CloudCompare

- ID: `cloudcompare`
- Field: Point cloud tool
- Kind / status / priority: tool / production / production
- Best for: Inspecting, cleaning, aligning, and simplifying scanned spatial datasets.
- Description: Open-source point cloud and mesh processing application.
- Tags: `point-clouds`, `meshes`, `scans`, `tool`
- URL: https://www.cloudcompare.org/
- GitHub: none
- Preview: /screenshots/cloudcompare.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai

### Point Cloud Library

- ID: `pcl`
- Field: Point cloud processing
- Kind / status / priority: library / production / production
- Best for: Understanding the algorithms behind scan cleanup and spatial data preparation.
- Description: Foundational C++ library for point cloud filtering, segmentation, registration, and geometry processing.
- Tags: `point-clouds`, `geometry`, `processing`, `library`
- URL: https://pointclouds.org/
- GitHub: https://github.com/PointCloudLibrary/pcl
- Preview: /screenshots/pcl.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai

### gltf-pipeline

- ID: `gltf-pipeline`
- Field: glTF optimization
- Kind / status / priority: tool / production / production
- Best for: Batch optimization, Draco compression, and legacy glTF pipeline tasks.
- Description: Cesium command-line tool for converting and optimizing glTF assets.
- Tags: `gltf`, `optimization`, `conversion`, `cesium`
- URL: https://github.com/CesiumGS/gltf-pipeline
- GitHub: https://github.com/CesiumGS/gltf-pipeline
- Preview: /screenshots/gltf-pipeline.webp
- Agent routes: asset-pipeline

### obj2gltf

- ID: `obj2gltf`
- Field: Model conversion
- Kind / status / priority: tool / production / production
- Best for: Cleaning up older OBJ asset libraries before using GLTFLoader or R3F.
- Description: Convert OBJ assets to glTF for modern web 3D pipelines.
- Tags: `obj`, `gltf`, `conversion`, `assets`
- URL: https://github.com/CesiumGS/obj2gltf
- GitHub: https://github.com/CesiumGS/obj2gltf
- Preview: /screenshots/obj2gltf.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr

### FBX2glTF

- ID: `fbx2gltf`
- Field: Model conversion
- Kind / status / priority: tool / production / production
- Best for: Migrating FBX character, animation, and environment assets into web-friendly glTF.
- Description: Command-line FBX to glTF converter from Facebook Incubator.
- Tags: `fbx`, `gltf`, `conversion`, `animation`
- URL: https://github.com/facebookincubator/FBX2glTF
- GitHub: https://github.com/facebookincubator/FBX2glTF
- Preview: /screenshots/fbx2gltf.webp
- Agent routes: asset-pipeline, xr-ar-vr, web-experiences

### Assimp

- ID: `assimp`
- Field: Model import/export
- Kind / status / priority: tool / production / production
- Best for: Understanding and converting obscure legacy 3D formats before web optimization.
- Description: Open Asset Import Library supporting many 3D file formats.
- Tags: `conversion`, `formats`, `3d-assets`, `pipeline`
- URL: https://github.com/assimp/assimp
- GitHub: https://github.com/assimp/assimp
- Preview: /screenshots/assimp.webp
- Agent routes: asset-pipeline, xr-ar-vr

### BlenderGIS

- ID: `blendergis`
- Field: GIS in Blender
- Kind / status / priority: tool / production / production
- Best for: Preparing map, terrain, and city assets before optimizing for R3F.
- Description: Blender add-on for importing geospatial raster, vector, and terrain data.
- Tags: `blender`, `gis`, `terrain`, `maps`
- URL: https://github.com/domlysz/BlenderGIS
- GitHub: https://github.com/domlysz/BlenderGIS
- Preview: /screenshots/blendergis.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai

### Blosm

- ID: `blosm`
- Field: OpenStreetMap import
- Kind / status / priority: tool / production / production
- Best for: Creating city and terrain base meshes for web scenes.
- Description: Blender add-on for importing OpenStreetMap buildings, terrain, and map data.
- Tags: `blender`, `osm`, `cities`, `terrain`
- URL: https://github.com/vvoovv/blosm
- GitHub: https://github.com/vvoovv/blosm
- Preview: /screenshots/blosm.webp
- Agent routes: asset-pipeline, data-maps-ai

### BlenderProc

- ID: `blenderproc`
- Field: Synthetic data
- Kind / status / priority: tool / production / production
- Best for: AI data generation, automated render passes, and scalable asset staging.
- Description: Procedural Blender pipeline for rendering synthetic datasets and scene variations.
- Tags: `blender`, `synthetic-data`, `ai`, `pipeline`
- URL: https://github.com/DLR-RM/BlenderProc
- GitHub: https://github.com/DLR-RM/BlenderProc
- Preview: /screenshots/blenderproc.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai

### r3f-spline

- ID: `r3f-spline`
- Field: Spline import
- Kind / status / priority: library / production / production
- Best for: Moving Spline-authored scenes and assets into custom R3F applications.
- Description: React Three Fiber integration for loading and using Spline scenes.
- Tags: `r3f`, `spline`, `import`, `design-tools`
- URL: https://github.com/splinetool/r3f-spline
- GitHub: https://github.com/splinetool/r3f-spline
- Preview: /screenshots/r3f-spline.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr

### Three.js Editor

- ID: `threejs-editor`
- Field: Scene editor
- Kind / status / priority: tool / core / canonical
- Best for: Quick scene inspection, exporter checks, and understanding Three.js object structure.
- Description: Official Three.js browser editor for arranging scenes, lights, materials, and objects.
- Tags: `three.js`, `editor`, `scene`, `tools`
- URL: https://threejs.org/editor/
- GitHub: https://github.com/mrdoob/three.js/tree/dev/editor
- Preview: /screenshots/threejs-editor.webp
- Agent routes: start-r3f-app, asset-pipeline, shader-effects, xr-ar-vr

### Khronos glTF Sample Viewer

- ID: `gltf-sample-viewer`
- Field: glTF validation
- Kind / status / priority: tool / core / canonical
- Best for: Debugging PBR, extensions, lighting, animation, and loader differences.
- Description: Reference glTF sample viewer for checking how assets render against Khronos expectations.
- Tags: `gltf`, `viewer`, `khronos`, `validation`
- URL: https://github.khronos.org/glTF-Sample-Viewer-Release/
- GitHub: https://github.com/KhronosGroup/glTF-Sample-Viewer
- Preview: /screenshots/gltf-sample-viewer.webp
- Agent routes: asset-pipeline, performance-debug, data-maps-ai, web-experiences

## Interaction & UI

Controls, panels, spatial UI, timelines, and interface glue.

### React Spring

- ID: `react-spring`
- Field: Animation
- Kind / status / priority: library / production / production
- Best for: Declarative animations that need continuity instead of keyframe jumps.
- Description: Spring animation primitives with R3F support, useful for UI transitions, camera-ish motion, and physical-feeling values.
- Tags: `animation`, `springs`, `transitions`, `pmndrs`
- URL: https://www.react-spring.dev
- GitHub: https://github.com/pmndrs/react-spring
- Preview: /screenshots/react-spring.webp
- Agent routes: start-r3f-app, xr-ar-vr, web-experiences

### Leva

- ID: `leva`
- Field: Controls
- Kind / status / priority: tool / production / production
- Best for: Rapidly art-directing scenes and exposing internal controls during development.
- Description: Beautiful debug controls for numbers, colors, vectors, folders, toggles, and live-tuning shader or physics parameters.
- Tags: `controls`, `debug`, `tweaks`, `parameters`
- URL: https://leva.pmnd.rs
- GitHub: https://github.com/pmndrs/leva
- Preview: /screenshots/leva.webp
- Agent routes: performance-debug, xr-ar-vr, physics-games

### Theatre.js

- ID: `theatre`
- Field: Timeline
- Kind / status / priority: tool / production / production
- Best for: Cinematic product reveals, camera paths, story moments, and reusable animation systems.
- Description: A timeline and sequencing environment for animating Three.js and R3F scenes with editable keyframes.
- Tags: `timeline`, `animation`, `keyframes`, `editor`
- URL: https://www.theatrejs.com
- GitHub: https://github.com/theatre-js/theatre
- Preview: /screenshots/theatre.webp
- Agent routes: start-r3f-app, web-experiences

### Tweakpane

- ID: `tweakpane`
- Field: Controls
- Kind / status / priority: tool / production / production
- Best for: Creative coding sketches that need a small, framework-agnostic control surface.
- Description: A compact parameter panel for tuning visuals, shaders, post effects, procedural generation, and animation values.
- Tags: `controls`, `debug`, `creative coding`, `parameters`
- URL: https://tweakpane.github.io/docs/
- GitHub: https://github.com/cocopon/tweakpane
- Preview: /screenshots/tweakpane.webp
- Agent routes: shader-effects, performance-debug, xr-ar-vr, visual-inspiration, web-experiences

### Drei Controls

- ID: `drei-controls`
- Field: Camera controls
- Kind / status / priority: library / core / canonical
- Best for: Choosing the right camera interaction for editors, games, galleries, and object viewers.
- Description: Drei wraps common Three.js controls including OrbitControls, CameraControls, PointerLockControls, PresentationControls, and more.
- Tags: `camera`, `controls`, `orbit`, `presentation`
- URL: https://drei.docs.pmnd.rs/controls/introduction
- GitHub: https://github.com/pmndrs/drei
- Preview: /screenshots/drei-controls.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games

### Drei Html

- ID: `drei-html`
- Field: DOM overlays
- Kind / status / priority: library / core / canonical
- Best for: Mixing accessible HTML UI with spatial scene anchors.
- Description: Projects DOM into a 3D scene with occlusion options, making labels, controls, popovers, and hybrid interfaces possible.
- Tags: `html`, `labels`, `dom`, `hybrid ui`
- URL: https://drei.docs.pmnd.rs/misc/html
- GitHub: https://github.com/pmndrs/drei
- Preview: /screenshots/drei-html.webp
- Agent routes: xr-ar-vr

### Drei View

- ID: `drei-view`
- Field: Multi-view canvas
- Kind / status / priority: library / production / production
- Best for: Product grids, editorial pages, and dashboards with many 3D previews.
- Description: Lets a single canvas render multiple viewports tied to DOM regions, avoiding multiple WebGL context limits.
- Tags: `viewport`, `dom`, `single canvas`, `performance`
- URL: https://drei.docs.pmnd.rs/portals/view
- GitHub: https://github.com/pmndrs/drei
- Preview: /screenshots/drei-view.webp
- Agent routes: performance-debug, xr-ar-vr, learning-theory

### @use-gesture/react

- ID: `use-gesture`
- Field: Gestures
- Kind / status / priority: library / production / production
- Best for: Touch-friendly model viewers, sliders, map-like controls, and custom canvas tools.
- Description: Gesture primitives for drag, pinch, wheel, scroll, hover, and move interactions that pair well with R3F and React Spring.
- Tags: `gestures`, `touch`, `interaction`, `pmndrs`
- URL: https://use-gesture.netlify.app
- GitHub: https://github.com/pmndrs/use-gesture
- Preview: /screenshots/use-gesture.webp
- Agent routes: start-r3f-app, xr-ar-vr, data-maps-ai, web-experiences

### react-use-measure

- ID: `react-use-measure`
- Field: Layout measurement
- Kind / status / priority: library / production / production
- Best for: Hybrid DOM/WebGL layouts, galleries, previews, and scroll-linked R3F sections.
- Description: ResizeObserver hook from pmndrs that helps coordinate DOM layout with responsive canvas and view calculations.
- Tags: `layout`, `measure`, `react`, `dom`
- URL: https://github.com/pmndrs/react-use-measure
- GitHub: https://github.com/pmndrs/react-use-measure
- Preview: /screenshots/react-use-measure.webp
- Agent routes: start-r3f-app, xr-ar-vr, learning-theory, web-experiences

### tunnel-rat

- ID: `tunnel-rat`
- Field: Portals
- Kind / status / priority: library / production / production
- Best for: Complex layout systems where scene content and app chrome need clean ownership boundaries.
- Description: Small portal/tunnel utility for transporting React children between tree locations, useful in canvas and DOM composition.
- Tags: `portals`, `react`, `pmndrs`, `composition`
- URL: https://github.com/pmndrs/tunnel-rat
- GitHub: https://github.com/pmndrs/tunnel-rat
- Preview: /screenshots/tunnel-rat.webp
- Agent routes: start-r3f-app, xr-ar-vr

### XState

- ID: `xstate`
- Field: State machines
- Kind / status / priority: library / production / production
- Best for: Preventing complex R3F tools from becoming boolean-state soup.
- Description: State machine and actor model library for explicit interaction flows, game states, editors, and XR modes.
- Tags: `state`, `machines`, `interaction`, `tools`
- URL: https://stately.ai/docs
- GitHub: https://github.com/statelyai/xstate
- Preview: /screenshots/xstate.webp
- Agent routes: start-r3f-app, xr-ar-vr

### lil-gui

- ID: `lil-gui`
- Field: Controls
- Kind / status / priority: tool / production / production
- Best for: Framework-light parameter tuning when Leva is too React-specific.
- Description: Tiny controller panel descended from dat.GUI, still common in Three.js and shader experiments.
- Tags: `controls`, `debug`, `parameters`, `three.js`
- URL: https://lil-gui.georgealways.com
- GitHub: https://github.com/georgealways/lil-gui
- Preview: /screenshots/lil-gui.webp
- Agent routes: start-r3f-app, performance-debug, xr-ar-vr

### Floating UI

- ID: `floating-ui`
- Field: DOM overlays
- Kind / status / priority: library / production / production
- Best for: Polished DOM overlays anchored to controls, thumbnails, and scene metadata.
- Description: Positioning primitives for popovers, tooltips, menus, and inspectors around canvas-heavy interfaces.
- Tags: `ui`, `popovers`, `tooltips`, `dom`
- URL: https://floating-ui.com
- GitHub: https://github.com/floating-ui/floating-ui
- Preview: /screenshots/floating-ui.webp
- Agent routes: xr-ar-vr, data-maps-ai

### Radix UI

- ID: `radix-ui`
- Field: Accessible UI
- Kind / status / priority: library / production / production
- Best for: Menus, dialogs, popovers, tabs, sliders, and toggles around R3F without rebuilding accessibility.
- Description: Accessible React primitives for the non-canvas controls surrounding serious 3D apps and editor interfaces.
- Tags: `ui`, `accessibility`, `react`, `controls`
- URL: https://www.radix-ui.com/primitives
- GitHub: https://github.com/radix-ui/primitives
- Preview: /screenshots/radix-ui.webp
- Agent routes: start-r3f-app, xr-ar-vr

### r3f-form

- ID: `r3f-form`
- Field: 3D forms
- Kind / status / priority: library / experimental / learning
- Best for: Diegetic UI, debug panels, in-world forms, and spatial input controls.
- Description: Form controls rendered inside React Three Fiber scenes.
- Tags: `r3f`, `forms`, `ui`, `spatial`
- URL: https://github.com/jmberesford/r3f-form
- GitHub: https://github.com/jmberesford/r3f-form
- Preview: /screenshots/r3f-form.webp
- Agent routes: start-r3f-app, performance-debug, xr-ar-vr

### Motion for React Three Fiber

- ID: `motion-react-three-fiber`
- Field: Animation
- Kind / status / priority: docs / production / production
- Best for: Declarative object animation, transitions, hover states, and UI-like scene motion.
- Description: Motion documentation for animating React Three Fiber objects with familiar React animation patterns.
- Tags: `animation`, `r3f`, `motion`, `react`
- URL: https://motion.dev/docs/react-three-fiber
- GitHub: none
- Preview: /screenshots/motion-react-three-fiber.webp
- Agent routes: start-r3f-app, xr-ar-vr, web-experiences

## Gaming & Physics

Physics, character rigs, ECS, navigation, netcode, and game loops.

### Rapier

- ID: `rapier`
- Field: Physics engine
- Kind / status / priority: library / production / production
- Best for: Understanding engine-level physics features beyond the React wrapper.
- Description: Rust and WASM physics engine behind React Three Rapier, with rigid bodies, joints, colliders, and queries.
- Tags: `physics`, `wasm`, `collisions`, `rapier`
- URL: https://rapier.rs
- GitHub: https://github.com/dimforge/rapier
- Preview: /screenshots/rapier.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games

### cannon-es

- ID: `cannon-es`
- Field: Physics engine
- Kind / status / priority: library / production / production
- Best for: Existing Cannon workflows or lighter physics demos where Rapier is not required.
- Description: Maintained ES module fork of Cannon.js and the physics base for @react-three/cannon projects.
- Tags: `physics`, `cannon`, `rigid bodies`
- URL: https://pmndrs.github.io/cannon-es/
- GitHub: https://github.com/pmndrs/cannon-es
- Preview: /screenshots/cannon-es.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games, data-maps-ai

### React Three Cannon

- ID: `react-three-cannon`
- Field: Physics
- Kind / status / priority: library / production / production
- Best for: Projects already built around Cannon or examples using useBox, useSphere, and constraints.
- Description: Hooks-based R3F bindings for Cannon physics, with worker support and a mature example set.
- Tags: `physics`, `cannon`, `worker`, `hooks`
- URL: https://github.com/pmndrs/use-cannon
- GitHub: https://github.com/pmndrs/use-cannon
- Preview: /screenshots/react-three-cannon.webp
- Agent routes: start-r3f-app, performance-debug, xr-ar-vr, physics-games, data-maps-ai

### Ecctrl

- ID: `ecctrl`
- Field: Character controller
- Kind / status / priority: library / production / production
- Best for: Jump-starting platformers, walking demos, avatar worlds, and portfolio games.
- Description: Floating rigid-body character controller built on R3F and React Three Rapier for third-person movement.
- Tags: `character`, `controller`, `rapier`, `games`
- URL: https://github.com/pmndrs/ecctrl
- GitHub: https://github.com/pmndrs/ecctrl
- Preview: /screenshots/ecctrl.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games, visual-inspiration, web-experiences

### Koota

- ID: `koota`
- Field: ECS state
- Kind / status / priority: library / experimental / learning
- Best for: Game-like scenes where objects and behaviors should be modeled as systems.
- Description: Entity-component state management optimized for real-time apps, games, XR experiences, and React integration.
- Tags: `ecs`, `state`, `games`, `xr`
- URL: https://github.com/pmndrs/koota
- GitHub: https://github.com/pmndrs/koota
- Preview: /screenshots/koota.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games

### Miniplex

- ID: `miniplex`
- Field: ECS
- Kind / status / priority: library / production / production
- Best for: Game prototypes that outgrow component-local React state.
- Description: Small ECS library that has been used in R3F game experiments and keeps entity queries ergonomic.
- Tags: `ecs`, `entities`, `games`, `state`
- URL: https://github.com/hmans/miniplex
- GitHub: https://github.com/hmans/miniplex
- Preview: /screenshots/miniplex.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games

### bitECS

- ID: `bitecs`
- Field: ECS
- Kind / status / priority: library / production / production
- Best for: High-entity-count simulations where cache-friendly data layout matters.
- Description: Data-oriented ECS for JavaScript with an emphasis on performance and game-style simulations.
- Tags: `ecs`, `data-oriented`, `games`, `simulation`
- URL: https://github.com/NateTheGreatt/bitECS
- GitHub: https://github.com/NateTheGreatt/bitECS
- Preview: /screenshots/bitecs.webp
- Agent routes: performance-debug, xr-ar-vr, physics-games, data-maps-ai

### Yuka

- ID: `yuka`
- Field: Game AI
- Kind / status / priority: library / production / production
- Best for: NPC movement, flocking, steering, and AI behaviors in R3F games.
- Description: JavaScript game AI library with steering behaviors, nav meshes, pathfinding, fuzzy logic, and state machines.
- Tags: `ai`, `pathfinding`, `npc`, `steering`
- URL: https://mugen87.github.io/yuka/
- GitHub: https://github.com/Mugen87/yuka
- Preview: /screenshots/yuka.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games, data-maps-ai

### three-pathfinding

- ID: `three-pathfinding`
- Field: Navigation
- Kind / status / priority: library / production / production
- Best for: NPC route finding in GLTF environments and game maps.
- Description: Navigation mesh pathfinding toolkit for Three.js scenes, useful when characters need to move through authored levels.
- Tags: `navmesh`, `pathfinding`, `npc`, `three.js`
- URL: https://github.com/donmccurdy/three-pathfinding
- GitHub: https://github.com/donmccurdy/three-pathfinding
- Preview: /screenshots/three-pathfinding.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, physics-games, data-maps-ai

### recast-navigation-js

- ID: `recast-navigation`
- Field: Navigation
- Kind / status / priority: library / production / production
- Best for: More serious AI navigation than hand-authored paths can support.
- Description: WASM port of Recast Navigation for generating and querying navigation meshes in JavaScript.
- Tags: `navmesh`, `wasm`, `pathfinding`, `games`
- URL: https://github.com/isaac-mason/recast-navigation-js
- GitHub: https://github.com/isaac-mason/recast-navigation-js
- Preview: /screenshots/recast-navigation.webp
- Agent routes: xr-ar-vr, physics-games, data-maps-ai

### geckos.io

- ID: `geckos`
- Field: Networking
- Kind / status / priority: library / production / production
- Best for: Low-latency multiplayer experiments without immediately building a native stack.
- Description: Real-time client-server networking over WebRTC data channels, built with browser games in mind.
- Tags: `multiplayer`, `webrtc`, `networking`, `games`
- URL: https://geckos.io
- GitHub: https://github.com/geckosio/geckos.io
- Preview: /screenshots/geckos.webp
- Agent routes: xr-ar-vr, physics-games, data-maps-ai

### Colyseus

- ID: `colyseus`
- Field: Multiplayer
- Kind / status / priority: library / production / production
- Best for: R3F games that need authoritative rooms and repeatable multiplayer state.
- Description: Node.js multiplayer framework with rooms, state sync, matchmaking, and clients for browser games.
- Tags: `multiplayer`, `rooms`, `state sync`, `server`
- URL: https://colyseus.io
- GitHub: https://github.com/colyseus/colyseus
- Preview: /screenshots/colyseus.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games

### PlayroomKit

- ID: `playroom`
- Field: Multiplayer
- Kind / status / priority: library / production / production
- Best for: Playable R3F prototypes where setup friction matters more than full backend control.
- Description: Fast multiplayer prototyping layer used by many web game demos for room joins, player state, and quick sharing.
- Tags: `multiplayer`, `prototype`, `rooms`, `games`
- URL: https://joinplayroom.com
- GitHub: https://github.com/asadm/playroom
- Preview: /screenshots/playroom.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games

### nipplejs

- ID: `r3f-virtual-joystick`
- Field: Touch controls
- Kind / status / priority: library / production / production
- Best for: Mobile R3F games and avatar demos that need touch movement controls.
- Description: Virtual joystick library often used for browser games and mobile character controllers.
- Tags: `mobile`, `joystick`, `controls`, `games`
- URL: https://yoannmoi.net/nipplejs/
- GitHub: https://github.com/yoannmoinet/nipplejs
- Preview: /screenshots/r3f-virtual-joystick.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games

### PathFinding.js

- ID: `pathfinding-js`
- Field: Pathfinding
- Kind / status / priority: library / production / production
- Best for: Tile-based R3F games, tactical prototypes, and pathfinding education.
- Description: Classic grid pathfinding library with multiple algorithms and a visual demo.
- Tags: `pathfinding`, `grid`, `games`, `ai`
- URL: https://qiao.github.io/PathFinding.js/visual/
- GitHub: https://github.com/qiao/PathFinding.js
- Preview: /screenshots/pathfinding-js.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games, data-maps-ai

### EasyStar.js

- ID: `easystarjs`
- Field: Pathfinding
- Kind / status / priority: library / production / production
- Best for: Simple grid navigation where a navmesh would be overkill.
- Description: Asynchronous A-star pathfinding for JavaScript tilemaps, useful for lightweight browser games.
- Tags: `pathfinding`, `astar`, `tilemap`, `games`
- URL: https://github.com/prettymuchbryce/easystarjs
- GitHub: https://github.com/prettymuchbryce/easystarjs
- Preview: /screenshots/easystarjs.webp
- Agent routes: xr-ar-vr, physics-games, data-maps-ai

### three-csg-ts

- ID: `three-csg-ts`
- Field: Level geometry
- Kind / status / priority: library / production / production
- Best for: Prototype destructible-looking or generated geometry before moving to more advanced BVH CSG.
- Description: TypeScript-friendly CSG implementation for Three.js that can help with procedural level and object geometry.
- Tags: `csg`, `geometry`, `levels`, `three.js`
- URL: https://github.com/samalexander/three-csg-ts
- GitHub: https://github.com/samalexander/three-csg-ts
- Preview: /screenshots/three-csg-ts.webp
- Agent routes: start-r3f-app, performance-debug, xr-ar-vr, physics-games

### Howler.js

- ID: `howler`
- Field: Audio
- Kind / status / priority: library / production / production
- Best for: Adding reliable sound effects and music to R3F games and interactive scenes.
- Description: Web audio library for sprites, spatial-ish effects, playback control, and cross-browser game audio basics.
- Tags: `audio`, `games`, `sound`, `web audio`
- URL: https://howlerjs.com
- GitHub: https://github.com/goldfire/howler.js
- Preview: /screenshots/howler.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, physics-games

### Tone.js

- ID: `tonejs`
- Field: Audio synthesis
- Kind / status / priority: library / creative / specialized
- Best for: Audio-reactive R3F art, interactive instruments, rhythm toys, and generative sound.
- Description: Web audio framework for synthesis, sequencing, effects, and musical timing.
- Tags: `audio`, `music`, `generative`, `creative coding`
- URL: https://tonejs.github.io
- GitHub: https://github.com/Tonejs/Tone.js
- Preview: /screenshots/tonejs.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, physics-games, visual-inspiration

### Phaser

- ID: `phaser`
- Field: Game engine
- Kind / status / priority: library / production / production
- Best for: Borrowing proven browser-game concepts for R3F projects.
- Description: Mature 2D browser game engine. Not R3F, but valuable for game architecture, asset loading, input, and scenes.
- Tags: `games`, `engine`, `2d`, `architecture`
- URL: https://phaser.io
- GitHub: https://github.com/phaserjs/phaser
- Preview: /screenshots/phaser.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games

### Matter.js

- ID: `matter-js`
- Field: 2D physics
- Kind / status / priority: library / production / production
- Best for: Flat physics overlays and simple games where full 3D Rapier is unnecessary.
- Description: 2D rigid-body physics engine that can drive UI toys, mini games, and hybrid 2D/3D interactions.
- Tags: `physics`, `2d`, `games`, `simulation`
- URL: https://brm.io/matter-js/
- GitHub: https://github.com/liabru/matter-js
- Preview: /screenshots/matter-js.webp
- Agent routes: xr-ar-vr, physics-games

### Ammo.js

- ID: `ammojs`
- Field: Physics engine
- Kind / status / priority: library / production / production
- Best for: Understanding older Three.js physics examples and complex rigid-body features.
- Description: JavaScript/WASM port of Bullet Physics, historically used in Three.js physics demos and engines.
- Tags: `physics`, `bullet`, `wasm`, `three.js`
- URL: https://github.com/kripken/ammo.js
- GitHub: https://github.com/kripken/ammo.js
- Preview: /screenshots/ammojs.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games

### Socket.IO

- ID: `socket-io`
- Field: Networking
- Kind / status / priority: library / production / production
- Best for: Chat, presence, editor collaboration, and less latency-critical multiplayer R3F projects.
- Description: Real-time bidirectional communication library used in many browser multiplayer prototypes and collaborative tools.
- Tags: `networking`, `multiplayer`, `realtime`, `server`
- URL: https://socket.io
- GitHub: https://github.com/socketio/socket.io
- Preview: /screenshots/socket-io.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games

### Yjs

- ID: `yjs`
- Field: Collaboration
- Kind / status / priority: library / production / production
- Best for: Shared object transforms, level editors, whiteboards, and multiplayer creative spaces.
- Description: CRDT framework for real-time shared documents, useful for collaborative scene editors and multiplayer creation tools.
- Tags: `collaboration`, `crdt`, `multiplayer`, `editors`
- URL: https://docs.yjs.dev
- GitHub: https://github.com/yjs/yjs
- Preview: /screenshots/yjs.webp
- Agent routes: xr-ar-vr, physics-games, visual-inspiration

### MDN Gamepad API

- ID: `gamepad-api`
- Field: Input
- Kind / status / priority: docs / production / production
- Best for: Adding controller support to R3F games and XR-adjacent browser experiences.
- Description: Browser API reference for reading gamepad state, buttons, axes, and controller input.
- Tags: `gamepad`, `input`, `browser`, `games`
- URL: https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API
- GitHub: none
- Preview: /screenshots/gamepad-api.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games

### MDN Pointer Lock API

- ID: `pointer-lock-api`
- Field: Input
- Kind / status / priority: docs / core / canonical
- Best for: First-person cameras, editors, shooters, and immersive desktop navigation.
- Description: Browser API for first-person mouse capture, used by many Three.js and R3F game controls.
- Tags: `pointer lock`, `input`, `browser`, `games`
- URL: https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API
- GitHub: none
- Preview: /screenshots/pointer-lock-api.webp
- Agent routes: start-r3f-app, physics-games

### KeyboardJS

- ID: `keyboardjs`
- Field: Input
- Kind / status / priority: library / production / production
- Best for: R3F tools and games with complex keyboard shortcuts or control schemes.
- Description: Keyboard binding library for combos, key sequences, and game-like input handling.
- Tags: `keyboard`, `input`, `games`, `shortcuts`
- URL: https://github.com/RobertWHurst/KeyboardJS
- GitHub: https://github.com/RobertWHurst/KeyboardJS
- Preview: /screenshots/keyboardjs.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games

### enable3d

- ID: `enable3d`
- Field: 3D game framework
- Kind / status / priority: library / production / production
- Best for: Studying game-engine structure around Three.js scenes and physics.
- Description: Three.js plus Ammo.js framework aimed at browser games, physics, and Phaser integration.
- Tags: `games`, `physics`, `three.js`, `ammo`
- URL: https://enable3d.io
- GitHub: https://github.com/enable3d/enable3d
- Preview: /screenshots/enable3d.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games, data-maps-ai

### Rogue Engine

- ID: `rogue-engine`
- Field: Three.js editor
- Kind / status / priority: tool / production / production
- Best for: Comparing editor-first Three.js workflows against React-authored games.
- Description: Three.js game engine and editor with components, scenes, scripting, and browser deployment.
- Tags: `games`, `editor`, `three.js`, `engine`
- URL: https://rogueengine.io
- GitHub: https://github.com/beemsoft/rogue-engine
- Preview: /screenshots/rogue-engine.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games, data-maps-ai

### PlayCanvas Engine

- ID: `playcanvas-engine`
- Field: Web game engine
- Kind / status / priority: library / production / production
- Best for: Benchmarking web game engine capabilities and learning asset/runtime architecture.
- Description: Open-source browser 3D engine with editor ecosystem, WebGPU work, physics, animation, and production game features.
- Tags: `games`, `engine`, `webgl`, `webgpu`
- URL: https://playcanvas.com
- GitHub: https://github.com/playcanvas/engine
- Preview: /screenshots/playcanvas-engine.webp
- Agent routes: xr-ar-vr, physics-games, learning-theory, web-experiences

### Kaboom.js

- ID: `kaboom`
- Field: 2D game engine
- Kind / status / priority: library / production / production
- Best for: Borrowing simple game-loop and entity ideas for R3F prototypes.
- Description: Friendly JavaScript game library for rapid 2D game prototyping and playful interaction patterns.
- Tags: `games`, `2d`, `prototyping`, `javascript`
- URL: https://kaboomjs.com
- GitHub: https://github.com/replit/kaboom
- Preview: /screenshots/kaboom.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games

### Excalibur.js

- ID: `excaliburjs`
- Field: 2D game engine
- Kind / status / priority: library / production / production
- Best for: Learning robust browser-game architecture outside the 3D rendering layer.
- Description: TypeScript game engine for browser games with scenes, actors, input, physics, and tilemaps.
- Tags: `games`, `typescript`, `engine`, `2d`
- URL: https://excaliburjs.com
- GitHub: https://github.com/excaliburjs/Excalibur
- Preview: /screenshots/excaliburjs.webp
- Agent routes: xr-ar-vr, physics-games, data-maps-ai, learning-theory

### Nape Physics

- ID: `nape-physics`
- Field: Physics reference
- Kind / status / priority: library / learning / specialized
- Best for: Physics mental models, especially if building small toy systems or custom interactions.
- Description: Older 2D physics engine whose concepts and constraints still help when learning simulation.
- Tags: `physics`, `2d`, `simulation`, `learning`
- URL: https://github.com/deltaluca/nape
- GitHub: https://github.com/deltaluca/nape
- Preview: /screenshots/nape-physics.webp
- Agent routes: asset-pipeline, xr-ar-vr, physics-games, data-maps-ai, learning-theory

### Nakama

- ID: `nakama`
- Field: Game backend
- Kind / status / priority: tool / production / production
- Best for: R3F games that need a real backend beyond quick room prototypes.
- Description: Open-source game server for authentication, realtime multiplayer, storage, matchmaking, leaderboards, and social systems.
- Tags: `multiplayer`, `backend`, `games`, `server`
- URL: https://heroiclabs.com/nakama/
- GitHub: https://github.com/heroiclabs/nakama
- Preview: /screenshots/nakama.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games

### PartyKit

- ID: `partykit`
- Field: Realtime backend
- Kind / status / priority: tool / production / production
- Best for: Shared R3F toys, collaborative editors, rooms, cursors, and lightweight multiplayer.
- Description: Realtime multiplayer and collaboration backend for small rooms, presence, and state synchronization.
- Tags: `multiplayer`, `realtime`, `collaboration`, `rooms`
- URL: https://www.partykit.io
- GitHub: https://github.com/partykit/partykit
- Preview: /screenshots/partykit.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games

### Liveblocks

- ID: `liveblocks`
- Field: Collaboration backend
- Kind / status / priority: tool / production / production
- Best for: Collaborative R3F editors, spatial canvases, product configurators, and design tools.
- Description: Realtime collaboration platform for presence, comments, storage, notifications, and multiplayer app features.
- Tags: `collaboration`, `presence`, `realtime`, `editors`
- URL: https://liveblocks.io
- GitHub: https://github.com/liveblocks/liveblocks
- Preview: /screenshots/liveblocks.webp
- Agent routes: start-r3f-app, physics-games

### PeerJS

- ID: `peerjs`
- Field: Peer networking
- Kind / status / priority: library / production / production
- Best for: Small peer-driven R3F experiments, shared rooms, voice prototypes, and local multiplayer toys.
- Description: WebRTC peer-to-peer wrapper for browser data and media connections.
- Tags: `webrtc`, `peer-to-peer`, `multiplayer`, `networking`
- URL: https://peerjs.com
- GitHub: https://github.com/peers/peerjs
- Preview: /screenshots/peerjs.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games, data-maps-ai

### simple-peer

- ID: `simple-peer`
- Field: Peer networking
- Kind / status / priority: library / production / production
- Best for: Custom networking prototypes where you want direct control over signaling.
- Description: Small WebRTC data/video/audio peer connection wrapper for browser and Node.
- Tags: `webrtc`, `networking`, `multiplayer`, `browser`
- URL: https://github.com/feross/simple-peer
- GitHub: https://github.com/feross/simple-peer
- Preview: /screenshots/simple-peer.webp
- Agent routes: xr-ar-vr, physics-games, data-maps-ai

### MDN Web Audio API

- ID: `web-audio-api`
- Field: Audio
- Kind / status / priority: docs / core / canonical
- Best for: Audio-reactive R3F art, game sound, XR soundscapes, and procedural instruments.
- Description: Browser API reference for synthesis, spatialization, analysis, effects, and audio graph processing.
- Tags: `audio`, `browser`, `synthesis`, `spatial`
- URL: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
- GitHub: none
- Preview: /screenshots/web-audio-api.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, physics-games

### Viber3D

- ID: `viber3d`
- Field: R3F game framework
- Kind / status / priority: library / experimental / learning
- Best for: Starting game-like R3F scenes without assembling every runtime convention from scratch.
- Description: React Three Fiber game-building layer focused on levels, interaction, scene structure, and fast prototyping.
- Tags: `r3f`, `games`, `framework`, `levels`
- URL: https://viber3d.instructa.ai
- GitHub: https://github.com/instructa/viber3d
- Preview: /screenshots/viber3d.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games

### three-vrm

- ID: `three-vrm`
- Field: VRM avatars
- Kind / status / priority: library / production / production
- Best for: Avatar projects, VTuber prototypes, social spaces, and character-heavy R3F scenes.
- Description: Three.js loader and runtime for VRM humanoid avatars, expressions, spring bones, and look-at behavior.
- Tags: `vrm`, `avatars`, `characters`, `three.js`
- URL: https://pixiv.github.io/three-vrm/
- GitHub: https://github.com/pixiv/three-vrm
- Preview: /screenshots/three-vrm.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games

### Kalidokit

- ID: `kalidokit`
- Field: Avatar animation
- Kind / status / priority: library / production / production
- Best for: Animating VRM characters from webcam or mediapipe-style body tracking.
- Description: Pose, face, and hand solving helpers for driving avatars from tracking data.
- Tags: `avatars`, `tracking`, `animation`, `vrm`
- URL: https://yeemachine.github.io/kalidokit/
- GitHub: https://github.com/yeemachine/kalidokit
- Preview: /screenshots/kalidokit.webp
- Agent routes: xr-ar-vr, physics-games, data-maps-ai, web-experiences

### Sketchbook

- ID: `sketchbook-threejs`
- Field: Character controller
- Kind / status / priority: showcase / production / production
- Best for: Studying third-person movement, animation blending, vehicles, and game-scene architecture.
- Description: Open-source Three.js character controller and world sandbox with vehicles, animation, physics, and input.
- Tags: `three.js`, `characters`, `vehicles`, `controls`
- URL: https://github.com/swift502/Sketchbook
- GitHub: https://github.com/swift502/Sketchbook
- Preview: /screenshots/sketchbook-threejs.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games, visual-inspiration, web-experiences

### JoltPhysics.js

- ID: `joltphysics-js`
- Field: 3D physics
- Kind / status / priority: library / production / production
- Best for: Modern physics experiments, stacks, vehicles, constraints, and game prototypes.
- Description: JavaScript and WebAssembly build of Jolt Physics for high-performance rigid body simulation.
- Tags: `physics`, `wasm`, `jolt`, `rigid-body`
- URL: https://github.com/jrouwe/JoltPhysics.js
- GitHub: https://github.com/jrouwe/JoltPhysics.js
- Preview: /screenshots/joltphysics-js.webp
- Agent routes: performance-debug, xr-ar-vr, physics-games, data-maps-ai

### react-three-jolt

- ID: `react-three-jolt`
- Field: R3F physics
- Kind / status / priority: library / experimental / learning
- Best for: Testing a modern rigid-body alternative in R3F projects.
- Description: React Three Fiber bindings around Jolt Physics from the pmndrs ecosystem.
- Tags: `r3f`, `physics`, `jolt`, `pmndrs`
- URL: https://github.com/pmndrs/react-three-jolt
- GitHub: https://github.com/pmndrs/react-three-jolt
- Preview: /screenshots/react-three-jolt.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games

### three-to-cannon

- ID: `three-to-cannon`
- Field: Physics shapes
- Kind / status / priority: library / production / production
- Best for: Generating collision proxies from meshes in older Cannon and use-cannon workflows.
- Description: Convert Three.js geometry into Cannon-compatible physics shapes.
- Tags: `physics`, `cannon`, `geometry`, `pmndrs`
- URL: https://github.com/pmndrs/three-to-cannon
- GitHub: https://github.com/pmndrs/three-to-cannon
- Preview: /screenshots/three-to-cannon.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games

### Oimo.js

- ID: `oimo-js`
- Field: 3D physics
- Kind / status / priority: library / learning / specialized
- Best for: Simple physics sketches and historical browser physics patterns.
- Description: Lightweight JavaScript rigid-body physics engine with classic Three.js demos.
- Tags: `physics`, `three.js`, `rigid-body`, `demos`
- URL: https://lo-th.github.io/Oimo.js/
- GitHub: https://github.com/lo-th/Oimo.js
- Preview: /screenshots/oimo-js.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games, learning-theory

### box2d-wasm

- ID: `box2d-wasm`
- Field: 2D physics
- Kind / status / priority: library / production / production
- Best for: 2D collision, platformer mechanics, and hybrid 2.5D gameplay under R3F scenes.
- Description: WebAssembly Box2D bindings for browser games and interactive simulations.
- Tags: `physics`, `box2d`, `wasm`, `2d`
- URL: https://birch-san.github.io/box2d-wasm/
- GitHub: https://github.com/Birch-san/box2d-wasm
- Preview: /screenshots/box2d-wasm.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games

### Planck.js

- ID: `planck-js`
- Field: 2D physics
- Kind / status / priority: library / production / production
- Best for: Fast 2D gameplay physics, collision experiments, and testbed learning.
- Description: JavaScript rewrite of Box2D with a friendly API and browser demos.
- Tags: `physics`, `box2d`, `2d`, `games`
- URL: https://piqnt.com/planck.js/
- GitHub: https://github.com/piqnt/planck.js
- Preview: /screenshots/planck-js.webp
- Agent routes: xr-ar-vr, physics-games, learning-theory

### p2-es

- ID: `p2-es`
- Field: 2D physics
- Kind / status / priority: library / production / production
- Best for: 2D collision and constraints in browser games with pmndrs-adjacent maintenance.
- Description: Modern maintained fork of p2.js for 2D rigid body physics.
- Tags: `physics`, `2d`, `collision`, `pmndrs`
- URL: https://github.com/pmndrs/p2-es
- GitHub: https://github.com/pmndrs/p2-es
- Preview: /screenshots/p2-es.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games, data-maps-ai

### navmesh

- ID: `navmesh`
- Field: Navigation
- Kind / status / priority: library / production / production
- Best for: Top-down movement, RTS-like agents, and level navigation prototypes.
- Description: 2D navigation mesh pathfinding library with useful polygon-path examples.
- Tags: `navigation`, `pathfinding`, `navmesh`, `ai`
- URL: https://github.com/mikewesthad/navmesh
- GitHub: https://github.com/mikewesthad/navmesh
- Preview: /screenshots/navmesh.webp
- Agent routes: xr-ar-vr, physics-games, data-maps-ai

### Behavior3JS

- ID: `behavior3js`
- Field: Game AI
- Kind / status / priority: library / learning / specialized
- Best for: NPC decision logic, stateful agent behavior, and readable AI experiments.
- Description: Behavior tree implementation for JavaScript games and simulations.
- Tags: `ai`, `behavior-tree`, `npc`, `games`
- URL: https://github.com/behavior3/behavior3js
- GitHub: https://github.com/behavior3/behavior3js
- Preview: /screenshots/behavior3js.webp
- Agent routes: xr-ar-vr, physics-games, data-maps-ai, learning-theory

### Fluent Behavior Tree

- ID: `fluent-behavior-tree`
- Field: Game AI
- Kind / status / priority: library / production / production
- Best for: Readable AI behavior definitions for agents, enemies, and scripted interactions.
- Description: Composable behavior tree library for JavaScript and TypeScript.
- Tags: `ai`, `behavior-tree`, `typescript`, `npc`
- URL: https://github.com/codecapers/Fluent-Behaviour-Tree
- GitHub: https://github.com/codecapers/Fluent-Behaviour-Tree
- Preview: /screenshots/fluent-behavior-tree.webp
- Agent routes: xr-ar-vr, physics-games, data-maps-ai

### Ape-ECS

- ID: `ape-ecs`
- Field: ECS
- Kind / status / priority: library / production / production
- Best for: Traditional ECS architecture in browser games and large interactive scenes.
- Description: Entity component system for JavaScript with queries, components, and simulation-oriented structure.
- Tags: `ecs`, `entities`, `simulation`, `games`
- URL: https://github.com/fritzy/ape-ecs
- GitHub: https://github.com/fritzy/ape-ecs
- Preview: /screenshots/ape-ecs.webp
- Agent routes: xr-ar-vr, physics-games

### Becsy

- ID: `becsy`
- Field: ECS
- Kind / status / priority: library / production / production
- Best for: Large entity counts, simulation-heavy games, and typed ECS experiments.
- Description: TypeScript ECS focused on performance, correctness, and structured simulation code.
- Tags: `ecs`, `typescript`, `performance`, `simulation`
- URL: https://lastolivegames.github.io/becsy/
- GitHub: https://github.com/LastOliveGames/becsy
- Preview: /screenshots/becsy.webp
- Agent routes: performance-debug, xr-ar-vr, physics-games

### ECSY

- ID: `ecsy`
- Field: ECS
- Kind / status / priority: library / learning / specialized
- Best for: Studying ECS patterns for immersive and browser game projects.
- Description: Mozilla-originated entity component system used in WebXR-era experiments.
- Tags: `ecs`, `webxr`, `mozilla`, `architecture`
- URL: https://ecsyjs.github.io/ecsy/
- GitHub: https://github.com/ecsyjs/ecsy
- Preview: /screenshots/ecsy.webp
- Agent routes: xr-ar-vr, physics-games, learning-theory

### Geotic

- ID: `geotic`
- Field: ECS
- Kind / status / priority: library / learning / specialized
- Best for: Small games that need ECS concepts without a heavy engine.
- Description: Simple ECS focused on ergonomic JavaScript entity modeling.
- Tags: `ecs`, `javascript`, `entities`, `architecture`
- URL: https://github.com/ddmills/geotic
- GitHub: https://github.com/ddmills/geotic
- Preview: /screenshots/geotic.webp
- Agent routes: xr-ar-vr, physics-games, learning-theory

### MavonEngine

- ID: `mavonengine`
- Field: R3F game engine
- Kind / status / priority: library / experimental / learning
- Best for: Starting actual R3F games instead of one-off demos.
- Description: Opinionated React Three Fiber game-engine layer with scenes, input, physics-oriented structure, and examples.
- Tags: `r3f`, `game-engine`, `physics`, `controls`
- URL: https://mavonengine.github.io/
- GitHub: https://github.com/MavonEngine/Core
- Preview: /screenshots/mavonengine.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games

### react-three-game

- ID: `react-three-game`
- Field: R3F game framework
- Kind / status / priority: library / experimental / learning
- Best for: Turning R3F demos into maintainable game-like projects.
- Description: Composable helpers for building game loops, entities, input, and scene architecture in React Three Fiber.
- Tags: `r3f`, `games`, `framework`, `entities`
- URL: https://github.com/prnthh/react-three-game
- GitHub: https://github.com/prnthh/react-three-game
- Preview: /screenshots/react-three-game.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games, data-maps-ai

### React Game Engine

- ID: `react-game-engine`
- Field: React game loops
- Kind / status / priority: library / learning / specialized
- Best for: Understanding React-driven update loops, systems, and entity architecture.
- Description: Older but useful React entity and game-loop library.
- Tags: `react`, `game-loop`, `entities`, `architecture`
- URL: https://github.com/bberak/react-game-engine
- GitHub: https://github.com/bberak/react-game-engine
- Preview: /screenshots/react-game-engine.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games, learning-theory

### Replay

- ID: `replay-js`
- Field: Web game framework
- Kind / status / priority: library / production / production
- Best for: Borrowing browser game architecture ideas that can transfer into R3F.
- Description: Cross-platform JavaScript game framework with deterministic game patterns.
- Tags: `games`, `typescript`, `deterministic`, `canvas`
- URL: https://replay.js.org/
- GitHub: https://github.com/edbentley/replay
- Preview: /screenshots/replay-js.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games

### Trystero

- ID: `trystero`
- Field: P2P networking
- Kind / status / priority: library / production / production
- Best for: Small multiplayer rooms, co-presence, collaborative 3D spaces, and quick network experiments.
- Description: Peer-to-peer WebRTC library with multiple signaling backends.
- Tags: `webrtc`, `p2p`, `multiplayer`, `networking`
- URL: https://github.com/dmotz/trystero
- GitHub: https://github.com/dmotz/trystero
- Preview: /screenshots/trystero.webp
- Agent routes: xr-ar-vr, physics-games

### Lance.gg

- ID: `lance-gg`
- Field: Realtime networking
- Kind / status / priority: library / learning / specialized
- Best for: Learning authoritative multiplayer architecture before implementing your own stack.
- Description: Multiplayer game networking engine with client prediction and synchronization concepts.
- Tags: `networking`, `multiplayer`, `prediction`, `sync`
- URL: https://lance-gg.github.io/
- GitHub: https://github.com/lance-gg/lance
- Preview: /screenshots/lance-gg.webp
- Agent routes: xr-ar-vr, physics-games, learning-theory

### NetplayJS

- ID: `netplayjs`
- Field: Rollback networking
- Kind / status / priority: library / production / production
- Best for: Fighting-game, arcade, and synchronized multiplayer experiments.
- Description: JavaScript rollback netcode library for deterministic browser games.
- Tags: `rollback`, `networking`, `multiplayer`, `deterministic`
- URL: https://netplayjs.org/
- GitHub: https://github.com/rameshvarun/netplayjs
- Preview: /screenshots/netplayjs.webp
- Agent routes: xr-ar-vr, physics-games

### Resonance Audio Web SDK

- ID: `resonance-audio-web`
- Field: Spatial audio
- Kind / status / priority: library / learning / specialized
- Best for: Learning positional sound design for XR, games, and 3D web spaces.
- Description: Google spatial audio SDK for Web Audio, ambisonics, and room-aware rendering.
- Tags: `audio`, `spatial-audio`, `web-audio`, `xr`
- URL: https://resonance-audio.github.io/resonance-audio/
- GitHub: https://github.com/resonance-audio/resonance-audio-web-sdk
- Preview: /screenshots/resonance-audio-web.webp
- Agent routes: xr-ar-vr, physics-games, learning-theory

### Omnitone

- ID: `omnitone`
- Field: Ambisonic audio
- Kind / status / priority: library / learning / specialized
- Best for: 360 video, sound fields, XR audio references, and spatial music experiments.
- Description: Ambisonic spatial audio renderer for Web Audio.
- Tags: `audio`, `ambisonics`, `web-audio`, `xr`
- URL: https://googlechrome.github.io/omnitone/
- GitHub: https://github.com/GoogleChrome/omnitone
- Preview: /screenshots/omnitone.webp
- Agent routes: xr-ar-vr, physics-games, learning-theory

### JSAmbisonics

- ID: `jsambisonics`
- Field: Spatial audio
- Kind / status / priority: library / learning / specialized
- Best for: Advanced XR sound design, spatial audio experiments, and research prototypes.
- Description: JavaScript ambisonic audio processing toolkit.
- Tags: `audio`, `ambisonics`, `spatial`, `research`
- URL: https://github.com/polarch/JSAmbisonics
- GitHub: https://github.com/polarch/JSAmbisonics
- Preview: /screenshots/jsambisonics.webp
- Agent routes: xr-ar-vr, physics-games, learning-theory

## Creative Coding & Shaders

GLSL, post effects, procedural visuals, text, and code art.

### Shader Park

- ID: `shader-park`
- Field: Procedural shaders
- Kind / status / priority: tool / creative / specialized
- Best for: Organic forms, audio-reactive visuals, and shader art without starting from raw GLSL.
- Description: A code-based procedural shader environment with a React Three Fiber integration for expressive sculptural visuals.
- Tags: `shaders`, `procedural`, `code art`, `r3f`
- URL: https://shaderpark.com
- GitHub: https://github.com/shader-park
- Preview: /screenshots/shader-park.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration

### The Book of Shaders

- ID: `book-of-shaders`
- Field: GLSL learning
- Kind / status / priority: course / learning / specialized
- Best for: Learning enough GLSL to customize R3F materials and post effects with confidence.
- Description: A durable, visual introduction to fragment shaders, shaping functions, color, noise, patterns, and generative thinking.
- Tags: `glsl`, `shaders`, `learning`, `generative`
- URL: https://thebookofshaders.com
- GitHub: https://github.com/patriciogonzalezvivo/thebookofshaders
- Preview: /screenshots/book-of-shaders.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration, learning-theory

### Shadertoy

- ID: `shadertoy`
- Field: Shader archive
- Kind / status / priority: showcase / creative / specialized
- Best for: Studying techniques that can be adapted into custom ShaderMaterial or postprocessing passes.
- Description: Massive archive of fragment shader techniques, raymarching, procedural materials, particles, and visual experiments.
- Tags: `glsl`, `raymarching`, `procedural`, `reference`
- URL: https://www.shadertoy.com
- GitHub: none
- Preview: /screenshots/shadertoy.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration

### vite-plugin-glsl

- ID: `vite-plugin-glsl`
- Field: Shader imports
- Kind / status / priority: tool / production / production
- Best for: Keeping shader code out of string literals and closer to normal source files.
- Description: Vite plugin for importing, compressing, and composing GLSL shader files in modern frontend projects.
- Tags: `vite`, `glsl`, `shader`, `tooling`
- URL: https://github.com/UstymUkhman/vite-plugin-glsl
- GitHub: https://github.com/UstymUkhman/vite-plugin-glsl
- Preview: /screenshots/vite-plugin-glsl.webp
- Agent routes: shader-effects, visual-inspiration

### glslify

- ID: `glslify`
- Field: Shader modules
- Kind / status / priority: tool / production / production
- Best for: Borrowing and composing battle-tested GLSL snippets.
- Description: Module system for GLSL that makes reusable shader functions and shader package composition practical.
- Tags: `glsl`, `modules`, `shader`, `npm`
- URL: https://github.com/glslify/glslify
- GitHub: https://github.com/glslify/glslify
- Preview: /screenshots/glslify.webp
- Agent routes: shader-effects, visual-inspiration

### postprocessing

- ID: `postprocessing`
- Field: Effects engine
- Kind / status / priority: library / production / production
- Best for: Writing custom effect passes when the React wrapper is not enough.
- Description: The lower-level effects engine underneath React Postprocessing, useful for custom effects and deeper composer work.
- Tags: `effects`, `postprocessing`, `composer`, `shader`
- URL: https://pmndrs.github.io/postprocessing/public/docs/
- GitHub: https://github.com/pmndrs/postprocessing
- Preview: /screenshots/postprocessing.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration

### n8ao

- ID: `n8ao`
- Field: Ambient occlusion
- Kind / status / priority: library / production / production
- Best for: Adding depth and contact shadows to stylized and product scenes.
- Description: Screen-space ambient occlusion effect for Three.js and postprocessing pipelines with strong visual payoff.
- Tags: `ssao`, `postprocessing`, `lighting`, `depth`
- URL: https://github.com/N8python/n8ao
- GitHub: https://github.com/N8python/n8ao
- Preview: /screenshots/n8ao.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration

### troika-three-text

- ID: `troika-text`
- Field: Text rendering
- Kind / status / priority: library / production / production
- Best for: Crisp 3D typography, labels, title cards, and data annotation.
- Description: High-quality SDF text rendering for Three.js, also used through Drei Text abstractions.
- Tags: `text`, `sdf`, `typography`, `drei`
- URL: https://protectwise.github.io/troika/troika-three-text/
- GitHub: https://github.com/protectwise/troika
- Preview: /screenshots/troika-text.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration, data-maps-ai

### MeshLine

- ID: `meshline`
- Field: Lines
- Kind / status / priority: library / production / production
- Best for: Trails, paths, drawings, graphs, signatures, and stylized outlines.
- Description: Triangle-based line rendering for thick, textured, animated lines beyond WebGL native line limits.
- Tags: `lines`, `trails`, `geometry`, `drawing`
- URL: https://github.com/pmndrs/meshline
- GitHub: https://github.com/pmndrs/meshline
- Preview: /screenshots/meshline.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration, data-maps-ai, learning-theory

### canvas-sketch

- ID: `canvas-sketch`
- Field: Sketching
- Kind / status / priority: tool / creative / specialized
- Best for: Building a habit of small visual experiments before turning them into React components.
- Description: A creative coding toolkit for rapid sketches, exports, and generative studies that translate well into R3F thinking.
- Tags: `creative coding`, `sketches`, `generative`, `canvas`
- URL: https://github.com/mattdesl/canvas-sketch
- GitHub: https://github.com/mattdesl/canvas-sketch
- Preview: /screenshots/canvas-sketch.webp
- Agent routes: start-r3f-app, shader-effects, visual-inspiration

### p5.js

- ID: `p5`
- Field: Creative coding
- Kind / status / priority: library / learning / specialized
- Best for: Developing artistic instincts that transfer into procedural R3F scenes.
- Description: Friendly creative coding library and community. Not R3F, but excellent for learning generative systems and visual algorithms.
- Tags: `creative coding`, `generative`, `learning`, `art`
- URL: https://p5js.org
- GitHub: https://github.com/processing/p5.js
- Preview: /screenshots/p5.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration, learning-theory

### Hydra

- ID: `hydra`
- Field: Live visuals
- Kind / status / priority: tool / creative / specialized
- Best for: Visual performance ideas and shader-like composition patterns.
- Description: Live-coded visual synthesizer that builds intuition for feedback, texture processing, and procedural composition.
- Tags: `live coding`, `feedback`, `visuals`, `generative`
- URL: https://hydra.ojack.xyz
- GitHub: https://github.com/hydra-synth/hydra
- Preview: /screenshots/hydra.webp
- Agent routes: shader-effects, performance-debug, visual-inspiration

### regl

- ID: `regl`
- Field: WebGL abstraction
- Kind / status / priority: library / learning / specialized
- Best for: Learning GPU patterns below Three.js without dropping to raw WebGL immediately.
- Description: Functional WebGL library with excellent examples for understanding draw calls, buffers, and shader programs.
- Tags: `webgl`, `learning`, `draw calls`, `shaders`
- URL: https://regl.party
- GitHub: https://github.com/regl-project/regl
- Preview: /screenshots/regl.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration, learning-theory

### LYGIA Shader Library

- ID: `lygia`
- Field: Shader modules
- Kind / status / priority: library / creative / specialized
- Best for: Building richer custom ShaderMaterial and postprocessing effects faster.
- Description: A large, reusable shader function library for noise, color, SDFs, generative patterns, lighting, and filters.
- Tags: `glsl`, `shaders`, `noise`, `sdf`
- URL: https://lygia.xyz
- GitHub: https://github.com/patriciogonzalezvivo/lygia
- Preview: /screenshots/lygia.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration

### Inigo Quilez Articles

- ID: `iq-articles`
- Field: Shader theory
- Kind / status / priority: article / learning / learning
- Best for: Leveling up shader art beyond copied snippets.
- Description: Essential articles on distance fields, raymarching, noise, fractals, palettes, lighting, and demoscene techniques.
- Tags: `raymarching`, `sdf`, `shaders`, `math`
- URL: https://iquilezles.org/articles/
- GitHub: none
- Preview: /screenshots/iq-articles.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration, learning-theory

### hg_sdf

- ID: `hg-sdf`
- Field: Signed distance fields
- Kind / status / priority: reference / creative / specialized
- Best for: Raymarched shapes, smooth boolean operations, and procedural shader sculpture.
- Description: Classic GLSL distance-field library and article set for building procedural geometry with SDF operations.
- Tags: `sdf`, `glsl`, `raymarching`, `procedural`
- URL: http://mercury.sexy/hg_sdf/
- GitHub: https://github.com/mercury-hg/hg_sdf
- Preview: /screenshots/hg-sdf.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration

### Mercury Workshop

- ID: `mercury-demoscene`
- Field: Demoscene
- Kind / status / priority: showcase / creative / specialized
- Best for: Understanding compact, high-impact procedural visuals.
- Description: Demoscene studio whose technical writeups and shader techniques influence modern procedural WebGL work.
- Tags: `demoscene`, `procedural`, `shaders`, `inspiration`
- URL: http://mercury.sexy
- GitHub: none
- Preview: /screenshots/mercury-demoscene.webp
- Agent routes: shader-effects, visual-inspiration, learning-theory

### Curtains.js

- ID: `curtainsjs`
- Field: DOM WebGL
- Kind / status / priority: library / creative / specialized
- Best for: Learning DOM-to-WebGL image effects that can later be rebuilt in R3F.
- Description: WebGL planes synced to DOM images and videos, useful inspiration for shader-rich editorial pages.
- Tags: `webgl`, `dom`, `images`, `shaders`
- URL: https://www.curtainsjs.com
- GitHub: https://github.com/martinlaxenaire/curtainsjs
- Preview: /screenshots/curtainsjs.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration, data-maps-ai, learning-theory

### OGL

- ID: `ogl`
- Field: WebGL library
- Kind / status / priority: library / creative / specialized
- Best for: Studying lean WebGL patterns outside Three.js before translating ideas into R3F.
- Description: Minimal WebGL library with elegant examples, often used for creative coding and interaction experiments.
- Tags: `webgl`, `creative coding`, `shaders`, `examples`
- URL: https://oframe.github.io/ogl/
- GitHub: https://github.com/oframe/ogl
- Preview: /screenshots/ogl.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration, learning-theory

### gl-react

- ID: `gl-react`
- Field: React shaders
- Kind / status / priority: library / creative / specialized
- Best for: Thinking about shader graphs and render passes through React composition.
- Description: React library for composing fragment shaders as components, historically influential for React-based GPU work.
- Tags: `react`, `glsl`, `shaders`, `composition`
- URL: https://github.com/gre/gl-react
- GitHub: https://github.com/gre/gl-react
- Preview: /screenshots/gl-react.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration

### React Shader Fiber

- ID: `react-shader-fiber`
- Field: Shader experiments
- Kind / status / priority: library / experimental / learning
- Best for: Following where React-driven shader workflows might go next.
- Description: Experimental pmndrs exploration around shader composition and React-style GPU programming.
- Tags: `shaders`, `react`, `experimental`, `pmndrs`
- URL: https://github.com/pmndrs/react-shader-fiber
- GitHub: https://github.com/pmndrs/react-shader-fiber
- Preview: /screenshots/react-shader-fiber.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration

### Fragment Foundry

- ID: `fragment-foundry`
- Field: Shader tooling
- Kind / status / priority: tool / experimental / experimental
- Best for: Watching the future edge of React and shader composition tooling.
- Description: pmndrs shader-oriented tooling experiment, useful as a signal for emerging GPU authoring workflows.
- Tags: `shader`, `tooling`, `pmndrs`, `experimental`
- URL: https://github.com/pmndrs/fragment-foundry
- GitHub: https://github.com/pmndrs/fragment-foundry
- Preview: /screenshots/fragment-foundry.webp
- Agent routes: start-r3f-app, shader-effects, visual-inspiration

### OpenProcessing

- ID: `openprocessing`
- Field: Sketch archive
- Kind / status / priority: showcase / creative / specialized
- Best for: Finding algorithms, compositions, and interactive studies to reinterpret in 3D.
- Description: Large creative coding sketch archive, mostly Processing and p5.js, full of generative ideas transferable to R3F.
- Tags: `creative coding`, `generative`, `sketches`, `inspiration`
- URL: https://openprocessing.org
- GitHub: none
- Preview: /screenshots/openprocessing.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration

### GPUComputationRenderer

- ID: `three-gpucomputationrender`
- Field: GPGPU simulation
- Kind / status / priority: reference / creative / specialized
- Best for: Learning how to build GPU particles, fluid-ish systems, and simulation textures in R3F.
- Description: Classic Three.js utility and examples for texture-backed GPU particle and flocking simulations.
- Tags: `gpgpu`, `particles`, `simulation`, `three.js`
- URL: https://threejs.org/examples/#webgl_gpgpu_birds
- GitHub: https://github.com/mrdoob/three.js/blob/dev/examples/jsm/misc/GPUComputationRenderer.js
- Preview: /screenshots/three-gpucomputationrender.webp
- Agent routes: start-r3f-app, asset-pipeline, shader-effects, xr-ar-vr, visual-inspiration, learning-theory

### Drei MeshTransmissionMaterial

- ID: `drei-meshtransmission`
- Field: Glass material
- Kind / status / priority: library / creative / specialized
- Best for: Glass, gems, transparent objects, luxury product shots, and art-directed refraction.
- Description: High-quality transmissive glass material helper from Drei for refraction-heavy stylized and product scenes.
- Tags: `materials`, `glass`, `refraction`, `drei`
- URL: https://drei.docs.pmnd.rs/shaders/mesh-transmission-material
- GitHub: https://github.com/pmndrs/drei
- Preview: /screenshots/drei-meshtransmission.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration

### Drei MeshReflectorMaterial

- ID: `drei-meshreflector`
- Field: Reflection material
- Kind / status / priority: library / creative / specialized
- Best for: Studio floors, mirrors, gallery scenes, and quick visual depth.
- Description: Material helper for blurred planar reflections, common in polished landing pages and product floors.
- Tags: `materials`, `reflection`, `drei`, `product`
- URL: https://drei.docs.pmnd.rs/shaders/mesh-reflector-material
- GitHub: https://github.com/pmndrs/drei
- Preview: /screenshots/drei-meshreflector.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration

### Drei shaderMaterial

- ID: `drei-shadermaterial`
- Field: Shader helper
- Kind / status / priority: library / core / canonical
- Best for: Authoring custom shader materials in a React-friendly style.
- Description: Drei helper that turns uniforms and GLSL into reusable typed React material components.
- Tags: `shader`, `materials`, `glsl`, `drei`
- URL: https://drei.docs.pmnd.rs/shaders/shader-material
- GitHub: https://github.com/pmndrs/drei
- Preview: /screenshots/drei-shadermaterial.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration

### Shader Composer

- ID: `shader-composer`
- Field: Shader composition
- Kind / status / priority: library / creative / specialized
- Best for: Building shader effects from reusable pieces instead of isolated string blobs.
- Description: Composable shader building blocks and material helpers for Three.js and R3F experiments.
- Tags: `shaders`, `composition`, `materials`, `r3f`
- URL: https://github.com/hmans/shader-composer
- GitHub: https://github.com/hmans/shader-composer
- Preview: /screenshots/shader-composer.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration

### ShaderGradient

- ID: `shadergradient`
- Field: Gradient scenes
- Kind / status / priority: tool / creative / specialized
- Best for: Fast art-directed backgrounds and learning how simple shader scenes become reusable components.
- Description: Interactive shader-gradient tool and React package for animated 3D gradient backgrounds.
- Tags: `shader`, `gradient`, `react`, `backgrounds`
- URL: https://www.shadergradient.co
- GitHub: https://github.com/ruucm/shadergradient
- Preview: /screenshots/shadergradient.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration, learning-theory

### glsl-noise

- ID: `glsl-noise`
- Field: Shader functions
- Kind / status / priority: library / production / production
- Best for: Adding procedural texture, displacement, clouds, terrain, and organic motion to custom materials.
- Description: Classic GLSL noise functions packaged for shader workflows.
- Tags: `glsl`, `noise`, `procedural`, `shaders`
- URL: https://github.com/hughsk/glsl-noise
- GitHub: https://github.com/hughsk/glsl-noise
- Preview: /screenshots/glsl-noise.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration, data-maps-ai

### glsl-easings

- ID: `glsl-easings`
- Field: Shader functions
- Kind / status / priority: library / production / production
- Best for: Shader transitions, reveals, procedural animation curves, and polished motion inside materials.
- Description: Robert Penner-style easing functions for GLSL, packaged for glslify.
- Tags: `glsl`, `animation`, `easing`, `shaders`
- URL: https://github.com/glslify/glsl-easings
- GitHub: https://github.com/glslify/glsl-easings
- Preview: /screenshots/glsl-easings.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration, web-experiences

### glsl-aastep

- ID: `glsl-aastep`
- Field: Shader functions
- Kind / status / priority: library / production / production
- Best for: Crisp SDF shapes, masks, line art, and procedural patterns.
- Description: Anti-aliased step function for cleaner procedural edges in fragment shaders.
- Tags: `glsl`, `sdf`, `antialiasing`, `patterns`
- URL: https://github.com/glslify/glsl-aastep
- GitHub: https://github.com/glslify/glsl-aastep
- Preview: /screenshots/glsl-aastep.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration

### nannou

- ID: `nannou`
- Field: Creative coding
- Kind / status / priority: library / creative / specialized
- Best for: Studying creative coding structure, generative methods, and graphics ideas to port to R3F.
- Description: Rust creative-coding framework for artists and designers, useful context for generative systems beyond JavaScript.
- Tags: `creative coding`, `rust`, `generative`, `art`
- URL: https://nannou.cc
- GitHub: https://github.com/nannou-org/nannou
- Preview: /screenshots/nannou.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration, learning-theory

### openFrameworks

- ID: `openframeworks`
- Field: Creative coding
- Kind / status / priority: library / creative / specialized
- Best for: Understanding installation-grade creative technology patterns that can inspire web work.
- Description: C++ toolkit for creative coding, interactive installations, computational art, and live visuals.
- Tags: `creative coding`, `installations`, `art`, `c++`
- URL: https://openframeworks.cc
- GitHub: https://github.com/openframeworks/openFrameworks
- Preview: /screenshots/openframeworks.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration

### cables.gl

- ID: `cables`
- Field: Visual patching
- Kind / status / priority: tool / creative / specialized
- Best for: Prototyping visual systems and studying node-based interaction graphs.
- Description: Browser-based visual programming environment for interactive WebGL, shaders, data, and audio-reactive pieces.
- Tags: `webgl`, `visual programming`, `interactive`, `creative`
- URL: https://cables.gl
- GitHub: https://github.com/cables-gl/cables
- Preview: /screenshots/cables.webp
- Agent routes: start-r3f-app, shader-effects, visual-inspiration, data-maps-ai, learning-theory

### TouchDesigner

- ID: `touchdesigner`
- Field: Visual programming
- Kind / status / priority: tool / creative / specialized
- Best for: Learning how artists build rich interaction systems that can inspire web versions.
- Description: Node-based real-time visual environment for installations, live visuals, sensors, shaders, and generative systems.
- Tags: `creative coding`, `installations`, `visual programming`, `shaders`
- URL: https://derivative.ca
- GitHub: none
- Preview: /screenshots/touchdesigner.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration, learning-theory

### vvvv gamma

- ID: `vvvv`
- Field: Visual programming
- Kind / status / priority: tool / creative / specialized
- Best for: Studying patch-based systems and interaction architecture from creative technologists.
- Description: Visual live-programming environment for real-time graphics, data, interaction, and media systems.
- Tags: `visual programming`, `creative coding`, `installations`, `graphics`
- URL: https://visualprogramming.net
- GitHub: https://github.com/vvvv
- Preview: /screenshots/vvvv.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration, data-maps-ai, learning-theory

### MadMapper

- ID: `madmapper`
- Field: Projection mapping
- Kind / status / priority: tool / creative / specialized
- Best for: Understanding real-world spatial media workflows that web 3D sometimes emulates.
- Description: Projection mapping and LED mapping tool used in installations, scenography, and live visual production.
- Tags: `projection`, `installations`, `spatial`, `visuals`
- URL: https://madmapper.com
- GitHub: none
- Preview: /screenshots/madmapper.webp
- Agent routes: shader-effects, visual-inspiration

### Resolume

- ID: `resolume`
- Field: Live visuals
- Kind / status / priority: tool / creative / specialized
- Best for: Learning how visual performance interfaces think about clips, layers, effects, and control.
- Description: Live VJ and audiovisual performance software with effects, clips, mapping, and real-time control.
- Tags: `live visuals`, `vj`, `performance`, `effects`
- URL: https://resolume.com
- GitHub: none
- Preview: /screenshots/resolume.webp
- Agent routes: shader-effects, performance-debug, xr-ar-vr, visual-inspiration, learning-theory

### OBS Shaderfilter

- ID: `obs-shaderfilter`
- Field: Shader performance
- Kind / status / priority: tool / creative / specialized
- Best for: Testing shader looks in broadcast-style workflows and live visual systems.
- Description: OBS plugin for applying custom shaders to sources, useful for live visual and stream experiments.
- Tags: `shaders`, `obs`, `live visuals`, `effects`
- URL: https://github.com/exeldro/obs-shaderfilter
- GitHub: https://github.com/exeldro/obs-shaderfilter
- Preview: /screenshots/obs-shaderfilter.webp
- Agent routes: shader-effects, performance-debug, visual-inspiration

### use-shader-fx

- ID: `use-shader-fx`
- Field: R3F shader effects
- Kind / status / priority: library / creative / specialized
- Best for: Dropping stylized transitions, distortions, and visual treatments into R3F projects quickly.
- Description: A collection of ready-made shader effects and hooks for React Three Fiber scenes.
- Tags: `r3f`, `shaders`, `effects`, `hooks`
- URL: https://use-shader-fx.vercel.app
- GitHub: https://github.com/FunTechInc/use-shader-fx
- Preview: /screenshots/use-shader-fx.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration

### component-material

- ID: `component-material`
- Field: Material composition
- Kind / status / priority: library / experimental / learning
- Best for: Studying how declarative composition can make advanced material systems easier to author.
- Description: Composable material experiments from pmndrs for building shader behavior out of React-style pieces.
- Tags: `materials`, `r3f`, `shaders`, `pmndrs`
- URL: https://github.com/pmndrs/component-material
- GitHub: https://github.com/pmndrs/component-material
- Preview: /screenshots/component-material.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration

### Ultimate Lens Flare

- ID: `ultimate-lens-flare`
- Field: Lens effects
- Kind / status / priority: tool / creative / specialized
- Best for: Adding cinematic flare language to space, product, vehicle, and sci-fi scenes.
- Description: Interactive Three.js/R3F-style lens flare effect reference with tuned bloom and flare controls.
- Tags: `lens-flare`, `postprocessing`, `three.js`, `vfx`
- URL: https://ultimate-lens-flare.vercel.app/
- GitHub: none
- Preview: /screenshots/ultimate-lens-flare.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration

### AutoFocusDOF

- ID: `autofocus-dof`
- Field: Depth of field
- Kind / status / priority: tool / creative / specialized
- Best for: Product shots, cinematic web scenes, and focus-pull experiments.
- Description: Depth-of-field demo that automatically focuses camera blur around scene targets.
- Tags: `dof`, `camera`, `postprocessing`, `focus`
- URL: https://autofocusdof.vercel.app/
- GitHub: none
- Preview: /screenshots/autofocus-dof.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration

### Wawa VFX

- ID: `wawa-vfx`
- Field: R3F effects
- Kind / status / priority: library / creative / specialized
- Best for: Adding readable visual feedback and motion energy to R3F games and demos.
- Description: React Three Fiber visual-effects helpers for game-like particles, trails, transitions, and scene polish.
- Tags: `r3f`, `vfx`, `particles`, `games`
- URL: https://wawa-vfx.wawasensei.dev
- GitHub: https://github.com/wass08/r3f-vfx
- Preview: /screenshots/wawa-vfx.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, physics-games, visual-inspiration, data-maps-ai

### Water Surface

- ID: `water-surface`
- Field: Water shader
- Kind / status / priority: showcase / creative / specialized
- Best for: Learning the pieces of stylized or semi-realistic water in a small scene.
- Description: A focused realtime water-surface shader demo with reflections, animated waves, and material tuning.
- Tags: `water`, `shader`, `three.js`, `materials`
- URL: https://water-surface.vercel.app
- GitHub: none
- Preview: /screenshots/water-surface.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration, learning-theory

### Three.js Holographic Material

- ID: `holographic-material`
- Field: Hologram material
- Kind / status / priority: tool / creative / specialized
- Best for: Sci-fi interfaces, ghosted previews, selected-object states, and avatar effects.
- Description: Shader material demo for scanline, fresnel, and additive hologram-style rendering.
- Tags: `hologram`, `shader`, `fresnel`, `materials`
- URL: https://threejs-holographic-material.vercel.app/
- GitHub: none
- Preview: /screenshots/holographic-material.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration

### R3F Fake Glow Material

- ID: `fake-glow-material`
- Field: Glow material
- Kind / status / priority: tool / creative / specialized
- Best for: Selections, powerups, holograms, UI affordances, and cheap stylized rim lighting.
- Description: Lightweight glow/fresnel material approach for giving meshes a readable aura without a full post stack.
- Tags: `r3f`, `glow`, `fresnel`, `materials`
- URL: https://r3f-fake-glow-material.vercel.app/
- GitHub: none
- Preview: /screenshots/fake-glow-material.webp
- Agent routes: start-r3f-app, shader-effects, visual-inspiration

### Flow Shield Effect

- ID: `flow-shield-effect`
- Field: Shield shader
- Kind / status / priority: showcase / creative / specialized
- Best for: Game shields, hit feedback, portals, and protective-volume effects.
- Description: Animated force-field material demo with flowing highlights and transparent energy-shell behavior.
- Tags: `shader`, `shield`, `vfx`, `games`
- URL: https://flow-shield-effect.vercel.app
- GitHub: none
- Preview: /screenshots/flow-shield-effect.webp
- Agent routes: shader-effects, xr-ar-vr, physics-games, visual-inspiration

### Stylized Water

- ID: `stylized-water`
- Field: Stylized water
- Kind / status / priority: showcase / creative / specialized
- Best for: Cartoon, cozy, and low-poly game environments.
- Description: A compact stylized-water scene useful for studying color bands, foam, motion, and readable waves.
- Tags: `water`, `stylized`, `shader`, `games`
- URL: https://stylized-water.vercel.app
- GitHub: none
- Preview: /screenshots/stylized-water.webp
- Agent routes: shader-effects, xr-ar-vr, physics-games, visual-inspiration

### react-three-fluid-distortion

- ID: `react-fluid-distortion`
- Field: Fluid distortion
- Kind / status / priority: library / experimental / learning
- Best for: Interactive landing pages, image reveals, and tactile shader feedback.
- Description: pmndrs fluid distortion component for cursor-driven warping and liquid-style post effects.
- Tags: `r3f`, `fluid`, `distortion`, `pmndrs`
- URL: https://github.com/pmndrs/react-three-fluid-distortion
- GitHub: https://github.com/pmndrs/react-three-fluid-distortion
- Preview: /screenshots/react-fluid-distortion.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration

### Realism Effects

- ID: `realism-effects`
- Field: Post effects
- Kind / status / priority: tool / creative / specialized
- Best for: Tuning bloom, tone, blur, grain, and screen-space details for polished R3F scenes.
- Description: Realtime postprocessing reference for stacking photographic and cinematic scene treatments.
- Tags: `postprocessing`, `realism`, `r3f`, `cinematic`
- URL: https://realism-effects.vercel.app/
- GitHub: none
- Preview: /screenshots/realism-effects.webp
- Agent routes: start-r3f-app, shader-effects, visual-inspiration, data-maps-ai

### Enhance Shader Lighting

- ID: `enhance-shader-lighting`
- Field: Shader lighting
- Kind / status / priority: library / experimental / learning
- Best for: Custom ShaderMaterial work that still needs convincing light response.
- Description: Utility approach for improving custom shader lighting so bespoke materials fit better into lit scenes.
- Tags: `shaders`, `lighting`, `materials`, `three.js`
- URL: https://github.com/N8python/enhance-shader-lighting
- GitHub: https://github.com/N8python/enhance-shader-lighting
- Preview: /screenshots/enhance-shader-lighting.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration

### Vanta.js

- ID: `vanta-js`
- Field: Background effects
- Kind / status / priority: library / creative / specialized
- Best for: Studying compact, reusable effect modules and quick atmospheric backgrounds.
- Description: Classic animated WebGL background effect library built on Three.js.
- Tags: `three.js`, `backgrounds`, `effects`, `webgl`
- URL: https://www.vantajs.com/
- GitHub: https://github.com/tengbao/vanta
- Preview: /screenshots/vanta-js.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration, learning-theory

### THREE.js PathTracing Renderer

- ID: `three-pathtracing-renderer`
- Field: Path tracing
- Kind / status / priority: showcase / creative / specialized
- Best for: Learning realistic lighting ideas before adapting them to interactive R3F scenes.
- Description: Long-running Three.js path-tracing renderer with many physically inspired realtime examples.
- Tags: `path-tracing`, `lighting`, `three.js`, `rendering`
- URL: https://erichlof.github.io/THREE.js-PathTracing-Renderer/
- GitHub: https://github.com/erichlof/THREE.js-PathTracing-Renderer
- Preview: /screenshots/three-pathtracing-renderer.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration, learning-theory

### WGSL Specification

- ID: `wgsl-spec`
- Field: WebGPU shaders
- Kind / status / priority: reference / core / canonical
- Best for: Learning the shader language that underpins WebGPU rendering and compute.
- Description: W3C specification for WebGPU Shading Language.
- Tags: `wgsl`, `webgpu`, `shaders`, `standard`
- URL: https://www.w3.org/TR/WGSL/
- GitHub: https://github.com/gpuweb/gpuweb
- Preview: /screenshots/wgsl-spec.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration, learning-theory

### GLSL Sandbox

- ID: `glsl-sandbox`
- Field: Shader gallery
- Kind / status / priority: showcase / learning / learning
- Best for: Mining fragment shader ideas and studying compact GLSL sketches.
- Description: Classic browser shader sketch gallery and live editor.
- Tags: `glsl`, `shaders`, `gallery`, `editor`
- URL: http://glslsandbox.com/
- GitHub: none
- Preview: /screenshots/glsl-sandbox.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration, learning-theory

### Dwitter

- ID: `dwitter`
- Field: Tiny code art
- Kind / status / priority: community / creative / specialized
- Best for: Studying compressed visual ideas, math tricks, and procedural animation.
- Description: Community for 140-character JavaScript canvas sketches.
- Tags: `creative-coding`, `canvas`, `tiny-code`, `community`
- URL: https://www.dwitter.net/
- GitHub: none
- Preview: /screenshots/dwitter.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration, learning-theory, web-experiences

### tixy.land

- ID: `tixy-land`
- Field: Tiny code art
- Kind / status / priority: tool / creative / specialized
- Best for: Practicing compact math-driven animation ideas.
- Description: Minimal creative coding playground for tiny grid-based visual expressions.
- Tags: `creative-coding`, `math`, `animation`, `playground`
- URL: https://tixy.land/
- GitHub: none
- Preview: /screenshots/tixy-land.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration, learning-theory, web-experiences

### ShaderFrog

- ID: `shaderfrog`
- Field: Shader editor
- Kind / status / priority: tool / learning / specialized
- Best for: Learning shader composition and porting material ideas into Three.js.
- Description: Visual shader editor and shader library for WebGL-era material experiments.
- Tags: `shaders`, `editor`, `webgl`, `materials`
- URL: https://shaderfrog.com/
- GitHub: none
- Preview: /screenshots/shaderfrog.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration, learning-theory

### NodeToy

- ID: `nodetoy`
- Field: Node shaders
- Kind / status / priority: tool / creative / specialized
- Best for: Designing procedural materials visually before integrating into Three.js/R3F.
- Description: Node-based shader and material authoring tool for web-friendly visual effects.
- Tags: `shaders`, `nodes`, `materials`, `tool`
- URL: https://nodetoy.co/
- GitHub: none
- Preview: /screenshots/nodetoy.webp
- Agent routes: start-r3f-app, shader-effects, visual-inspiration

### Polygonjs

- ID: `polygonjs`
- Field: Procedural 3D tool
- Kind / status / priority: tool / production / production
- Best for: Node-based procedural scene authoring and exporting interactive web experiences.
- Description: Procedural WebGL design tool and runtime for creating interactive 3D scenes.
- Tags: `procedural`, `nodes`, `webgl`, `tool`
- URL: https://polygonjs.com/
- GitHub: https://github.com/polygonjs/polygonjs
- Preview: /screenshots/polygonjs.webp
- Agent routes: shader-effects, visual-inspiration, learning-theory

### GENUARY

- ID: `genuary`
- Field: Creative coding challenge
- Kind / status / priority: community / creative / specialized
- Best for: Idea prompts and creative constraints for shader, geometry, and procedural scene studies.
- Description: Annual generative art challenge with daily prompts and a large community archive.
- Tags: `generative-art`, `community`, `prompts`, `creative-coding`
- URL: https://genuary.art/
- GitHub: none
- Preview: /screenshots/genuary.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration, data-maps-ai

## XR, AR & VR

WebXR, headset workflows, hand input, AR targets, and standards.

### WebXR Samples

- ID: `webxr-samples`
- Field: Standards examples
- Kind / status / priority: showcase / core / production
- Best for: Understanding what the browser platform supports before adding React abstractions.
- Description: Official sample collection for WebXR capabilities, including immersive VR, AR, anchors, hit tests, layers, and input.
- Tags: `webxr`, `standards`, `samples`, `vr`, `ar`
- URL: https://immersive-web.github.io/webxr-samples/
- GitHub: https://github.com/immersive-web/webxr-samples
- Preview: /screenshots/webxr-samples.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration

### Immersive Web WG

- ID: `immersive-web`
- Field: Standards
- Kind / status / priority: reference / core / canonical
- Best for: Tracking browser-level XR capabilities and constraints.
- Description: Home for WebXR standards work, explainer documents, samples, and links into device/input specifications.
- Tags: `webxr`, `standards`, `browser`, `spec`
- URL: https://immersiveweb.dev
- GitHub: https://github.com/immersive-web
- Preview: /screenshots/immersive-web.webp
- Agent routes: xr-ar-vr, data-maps-ai

### MDN WebXR

- ID: `mdn-webxr`
- Field: Reference
- Kind / status / priority: docs / core / canonical
- Best for: Grounding R3F XR behavior in platform vocabulary.
- Description: Practical reference for WebXR concepts, sessions, spaces, frame loops, inputs, and browser support.
- Tags: `webxr`, `mdn`, `reference`, `browser`
- URL: https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API
- GitHub: none
- Preview: /screenshots/mdn-webxr.webp
- Agent routes: start-r3f-app, xr-ar-vr

### Three.js WebXR Manual

- ID: `three-webxr`
- Field: Three.js XR
- Kind / status / priority: docs / core / canonical
- Best for: Debugging what R3F and React Three XR configure for you.
- Description: Three.js explanation of enabling XR rendering and controller interaction at the engine level.
- Tags: `webxr`, `three.js`, `manual`, `controllers`
- URL: https://threejs.org/manual/#en/webxr-basics
- GitHub: https://github.com/mrdoob/three.js
- Preview: /screenshots/three-webxr.webp
- Agent routes: start-r3f-app, performance-debug, xr-ar-vr

### A-Frame

- ID: `aframe`
- Field: WebXR framework
- Kind / status / priority: library / production / production
- Best for: Studying approachable XR patterns and comparing declarative scene models.
- Description: HTML-like WebXR framework built on Three.js. Not React, but important context for declarative XR on the web.
- Tags: `webxr`, `vr`, `ar`, `three.js`
- URL: https://aframe.io
- GitHub: https://github.com/aframevr/aframe
- Preview: /screenshots/aframe.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr

### MindAR

- ID: `mindar`
- Field: Image tracking AR
- Kind / status / priority: library / production / production
- Best for: Marker-like AR prototypes that do not require full WebXR device support.
- Description: Web AR library for image tracking and face tracking with Three.js examples.
- Tags: `ar`, `image tracking`, `face tracking`, `three.js`
- URL: https://hiukim.github.io/mind-ar-js-doc/
- GitHub: https://github.com/hiukim/mind-ar-js
- Preview: /screenshots/mindar.webp
- Agent routes: start-r3f-app, xr-ar-vr

### WebXR Input Profiles

- ID: `webxr-input-profiles`
- Field: Controller assets
- Kind / status / priority: asset / core / production
- Best for: Controller models, button mappings, and cross-device XR input handling.
- Description: Controller profile registry and assets used to represent XR input devices consistently across platforms.
- Tags: `webxr`, `controllers`, `input`, `assets`
- URL: https://immersive-web.github.io/webxr-input-profiles/
- GitHub: https://github.com/immersive-web/webxr-input-profiles
- Preview: /screenshots/webxr-input-profiles.webp
- Agent routes: asset-pipeline, xr-ar-vr

### Awesome WebXR Development

- ID: `awesome-webxr`
- Field: Resource list
- Kind / status / priority: community / learning / learning
- Best for: Branching beyond React Three into the wider immersive web ecosystem.
- Description: Large, categorized list of engines, frameworks, optimization resources, input, assets, audio, and learning links for WebXR.
- Tags: `webxr`, `resources`, `awesome`, `xr`
- URL: https://github.com/Pico-Developer/awesome-webxr-development
- GitHub: https://github.com/Pico-Developer/awesome-webxr-development
- Preview: /screenshots/awesome-webxr.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, learning-theory

### WebXR API Emulator

- ID: `webxr-emulator`
- Field: Development tool
- Kind / status / priority: tool / production / production
- Best for: Testing R3F XR interaction loops before repeatedly putting on a headset.
- Description: Browser extension for emulating WebXR devices, poses, controllers, and sessions during development.
- Tags: `webxr`, `debug`, `emulator`, `controllers`
- URL: https://github.com/meta-quest/immersive-web-emulator
- GitHub: https://github.com/meta-quest/immersive-web-emulator
- Preview: /screenshots/webxr-emulator.webp
- Agent routes: start-r3f-app, performance-debug, xr-ar-vr

### Meta Quest WebXR

- ID: `meta-webxr`
- Field: Platform docs
- Kind / status / priority: docs / production / production
- Best for: Shipping R3F XR experiences that actually behave well on Quest hardware.
- Description: Meta's WebXR guidance for Quest browsers, performance expectations, input, and immersive web deployment.
- Tags: `quest`, `webxr`, `vr`, `platform`
- URL: https://developers.meta.com/horizon/documentation/web/webxr-overview/
- GitHub: none
- Preview: /screenshots/meta-webxr.webp
- Agent routes: start-r3f-app, performance-debug, xr-ar-vr

### Zappar for Three.js

- ID: `zappar`
- Field: AR tracking
- Kind / status / priority: library / production / production
- Best for: Commercial AR projects that need reliable tracking beyond baseline WebXR support.
- Description: AR tracking SDK with Three.js integrations for image, face, and world tracking workflows.
- Tags: `ar`, `tracking`, `three.js`, `sdk`
- URL: https://docs.zap.works/universal-ar/javascript/threejs/
- GitHub: https://github.com/zappar-xr/zappar-threejs
- Preview: /screenshots/zappar.webp
- Agent routes: start-r3f-app, xr-ar-vr

### AR.js

- ID: `ar-js`
- Field: Marker AR
- Kind / status / priority: library / production / production
- Best for: Lightweight marker AR and location-based experiments.
- Description: Open-source web AR toolkit for marker, location, and image-tracking experiences with Three.js/A-Frame roots.
- Tags: `ar`, `marker`, `location`, `three.js`
- URL: https://ar-js-org.github.io/AR.js-Docs/
- GitHub: https://github.com/AR-js-org/AR.js
- Preview: /screenshots/ar-js.webp
- Agent routes: start-r3f-app, xr-ar-vr

### 8th Wall

- ID: `8th-wall`
- Field: Commercial AR
- Kind / status / priority: tool / production / production
- Best for: Client AR work where support, tracking quality, and deployment tooling outweigh open-source purity.
- Description: Commercial web AR platform used for branded camera effects, image targets, face effects, and world tracking.
- Tags: `ar`, `commercial`, `tracking`, `webxr`
- URL: https://www.8thwall.com
- GitHub: none
- Preview: /screenshots/8th-wall.webp
- Agent routes: shader-effects, xr-ar-vr

### Wonderland Engine

- ID: `wonderland-engine`
- Field: WebXR engine
- Kind / status / priority: tool / production / production
- Best for: Understanding optimization expectations for VR on standalone headsets.
- Description: Performance-focused WebXR engine and editor. Not R3F, but a useful benchmark for headset-first web experiences.
- Tags: `webxr`, `vr`, `engine`, `performance`
- URL: https://wonderlandengine.com
- GitHub: https://github.com/WonderlandEngine
- Preview: /screenshots/wonderland-engine.webp
- Agent routes: start-r3f-app, performance-debug, xr-ar-vr

### Needle Engine

- ID: `needle-engine`
- Field: 3D web engine
- Kind / status / priority: tool / production / production
- Best for: Comparing editor-driven pipelines against React-authored R3F experiences.
- Description: Unity-to-web and glTF-centric engine for interactive 3D, AR, VR, and spatial web publishing.
- Tags: `webxr`, `gltf`, `unity`, `engine`
- URL: https://engine.needle.tools
- GitHub: https://github.com/needle-tools/needle-engine-support
- Preview: /screenshots/needle-engine.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai

### Babylon.js

- ID: `babylonjs`
- Field: 3D engine
- Kind / status / priority: library / production / production
- Best for: Benchmarking what a batteries-included engine offers compared with R3F's composable ecosystem.
- Description: Full-featured web 3D engine with strong WebXR, tooling, inspector, physics, GUI, and WebGPU support.
- Tags: `webxr`, `engine`, `webgpu`, `three.js alternative`
- URL: https://www.babylonjs.com
- GitHub: https://github.com/BabylonJS/Babylon.js
- Preview: /screenshots/babylonjs.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games, learning-theory

### WebXR Layers Explainer

- ID: `webxr-layers`
- Field: Standards
- Kind / status / priority: reference / learning / specialized
- Best for: Understanding where crisp XR UI and video rendering are heading.
- Description: Standards explainer for efficient XR composition layers, important for high-resolution panels and media in headsets.
- Tags: `webxr`, `layers`, `standards`, `performance`
- URL: https://immersive-web.github.io/layers/
- GitHub: https://github.com/immersive-web/layers
- Preview: /screenshots/webxr-layers.webp
- Agent routes: performance-debug, xr-ar-vr, data-maps-ai, learning-theory

### WebXR Hand Input

- ID: `webxr-hand-input`
- Field: Hand tracking
- Kind / status / priority: reference / core / canonical
- Best for: Understanding hand joint data, poses, and browser-level XR hand input before using abstractions.
- Description: Specification explainer for articulated hand tracking in WebXR.
- Tags: `webxr`, `hands`, `tracking`, `standards`
- URL: https://immersive-web.github.io/webxr-hand-input/
- GitHub: https://github.com/immersive-web/webxr-hand-input
- Preview: /screenshots/webxr-hand-input.webp
- Agent routes: xr-ar-vr, data-maps-ai

### WebXR Hit Test

- ID: `webxr-hit-test`
- Field: AR placement
- Kind / status / priority: reference / core / canonical
- Best for: AR object placement, world understanding, and R3F AR scene design.
- Description: Spec work and explainer for AR hit testing, used to place virtual objects on real-world surfaces.
- Tags: `webxr`, `ar`, `hit test`, `standards`
- URL: https://immersive-web.github.io/hit-test/
- GitHub: https://github.com/immersive-web/hit-test
- Preview: /screenshots/webxr-hit-test.webp
- Agent routes: start-r3f-app, xr-ar-vr, data-maps-ai

### WebXR Anchors

- ID: `webxr-anchors`
- Field: AR persistence
- Kind / status / priority: reference / learning / specialized
- Best for: Thinking through anchored content and real-world placement beyond a single frame.
- Description: Explainer for persistent or semi-persistent anchors in WebXR AR sessions.
- Tags: `webxr`, `ar`, `anchors`, `standards`
- URL: https://immersive-web.github.io/anchors/
- GitHub: https://github.com/immersive-web/anchors
- Preview: /screenshots/webxr-anchors.webp
- Agent routes: xr-ar-vr, data-maps-ai, learning-theory

### WebXR Depth Sensing

- ID: `webxr-depth-sensing`
- Field: AR occlusion
- Kind / status / priority: reference / learning / specialized
- Best for: AR scenes where virtual content should sit behind or interact with real-world geometry.
- Description: WebXR module for depth data, occlusion, and environment understanding in immersive AR.
- Tags: `webxr`, `ar`, `depth`, `occlusion`
- URL: https://immersive-web.github.io/depth-sensing/
- GitHub: https://github.com/immersive-web/depth-sensing
- Preview: /screenshots/webxr-depth-sensing.webp
- Agent routes: xr-ar-vr, data-maps-ai, learning-theory

### WebXR Lighting Estimation

- ID: `webxr-lighting-estimation`
- Field: AR lighting
- Kind / status / priority: reference / learning / specialized
- Best for: Making AR objects feel less pasted-on through environmental lighting cues.
- Description: Spec explainer for estimating real-world lighting in AR sessions.
- Tags: `webxr`, `ar`, `lighting`, `standards`
- URL: https://immersive-web.github.io/lighting-estimation/
- GitHub: https://github.com/immersive-web/lighting-estimation
- Preview: /screenshots/webxr-lighting-estimation.webp
- Agent routes: xr-ar-vr, data-maps-ai, learning-theory

### model-viewer AR

- ID: `model-viewer-ar`
- Field: AR examples
- Kind / status / priority: showcase / production / production
- Best for: Studying product AR expectations before rebuilding custom R3F AR flows.
- Description: Practical examples of web-based model AR handoff, placement, and product viewing patterns.
- Tags: `ar`, `gltf`, `product`, `examples`
- URL: https://modelviewer.dev/examples/augmentedreality/
- GitHub: https://github.com/google/model-viewer
- Preview: /screenshots/model-viewer-ar.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, visual-inspiration

### PlayCanvas WebXR Examples

- ID: `playcanvas-webxr`
- Field: XR examples
- Kind / status / priority: showcase / production / production
- Best for: Comparing headset and AR behavior with another mature web engine.
- Description: Collection of PlayCanvas XR examples covering AR, VR, input, anchors, hit testing, and rendering patterns.
- Tags: `webxr`, `examples`, `playcanvas`, `ar`
- URL: https://playcanvas.github.io/#/xr
- GitHub: https://github.com/playcanvas/engine
- Preview: /screenshots/playcanvas-webxr.webp
- Agent routes: xr-ar-vr, visual-inspiration

### Three.js WebXR Examples

- ID: `threejs-webxr-examples`
- Field: XR examples
- Kind / status / priority: showcase / core / production
- Best for: Finding raw engine examples to translate into R3F or React Three XR patterns.
- Description: Official Three.js WebXR examples for VR, AR, controllers, hands, hit tests, and immersive interactions.
- Tags: `webxr`, `three.js`, `examples`, `vr`
- URL: https://threejs.org/examples/?q=webxr#webxr_vr_ballshooter
- GitHub: https://github.com/mrdoob/three.js/tree/dev/examples
- Preview: /screenshots/threejs-webxr-examples.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration

### Immersive Web Weekly

- ID: `immersive-web-weekly`
- Field: XR newsletter
- Kind / status / priority: community / learning / learning
- Best for: Following the wider XR web ecosystem without watching every standards repo manually.
- Description: Newsletter tracking WebXR, immersive web demos, standards, tools, and browser/platform movement.
- Tags: `webxr`, `newsletter`, `community`, `standards`
- URL: https://immersivewebweekly.com
- GitHub: none
- Preview: /screenshots/immersive-web-weekly.webp
- Agent routes: xr-ar-vr, learning-theory

### Spatial Pixels

- ID: `spatialpixels`
- Field: Spatial design
- Kind / status / priority: community / creative / specialized
- Best for: Getting beyond technical demos into spatial interface design quality.
- Description: Resource and community lens on spatial design, XR interfaces, Apple Vision Pro, and immersive product thinking.
- Tags: `spatial`, `xr`, `design`, `vision pro`
- URL: https://spatialpixels.com
- GitHub: none
- Preview: /screenshots/spatialpixels.webp
- Agent routes: xr-ar-vr, visual-inspiration

### Apple visionOS Design

- ID: `visionos-design`
- Field: Spatial design
- Kind / status / priority: docs / learning / specialized
- Best for: Borrowing mature spatial UX principles for WebXR and R3F spatial UI.
- Description: Apple's spatial interface guidance for depth, focus, windows, immersion, and interaction.
- Tags: `spatial`, `visionos`, `design`, `xr`
- URL: https://developer.apple.com/design/human-interface-guidelines/designing-for-visionos
- GitHub: none
- Preview: /screenshots/visionos-design.webp
- Agent routes: start-r3f-app, xr-ar-vr, learning-theory

### Meta Presence Platform

- ID: `meta-presence-platform`
- Field: Interaction design
- Kind / status / priority: docs / learning / specialized
- Best for: Learning interaction primitives to reinterpret in web-based XR projects.
- Description: Meta's interaction SDK concepts for hands, controllers, grab, poke, ray, and object interaction.
- Tags: `xr`, `interaction`, `hands`, `quest`
- URL: https://developers.meta.com/horizon/documentation/unity/unity-isdk-interaction-sdk-overview/
- GitHub: none
- Preview: /screenshots/meta-presence-platform.webp
- Agent routes: xr-ar-vr, learning-theory

### react-three-arjs

- ID: `react-three-arjs`
- Field: Marker AR
- Kind / status / priority: library / experimental / learning
- Best for: Quick marker AR prototypes when WebXR hit-test support is not the right fit.
- Description: React Three Fiber integration for AR.js marker-based augmented reality.
- Tags: `r3f`, `ar`, `markers`, `arjs`
- URL: https://github.com/artcom/react-three-arjs
- GitHub: https://github.com/artcom/react-three-arjs
- Preview: /screenshots/react-three-arjs.webp
- Agent routes: start-r3f-app, xr-ar-vr

### Zappar React Three Fiber

- ID: `zappar-react-three-fiber`
- Field: Web AR
- Kind / status / priority: library / production / production
- Best for: Commercial WebAR projects that need tracking primitives and a React scene model.
- Description: Zappar components for face, image, and world tracking inside React Three Fiber.
- Tags: `r3f`, `ar`, `tracking`, `zappar`
- URL: https://github.com/zappar-xr/react-three-fiber
- GitHub: https://github.com/zappar-xr/react-three-fiber
- Preview: /screenshots/zappar-react-three-fiber.webp
- Agent routes: start-r3f-app, xr-ar-vr

### Third Room

- ID: `third-room`
- Field: Social XR
- Kind / status / priority: showcase / experimental / experimental
- Best for: Architecture reference for networked 3D rooms, avatars, and spatial presence.
- Description: Open social 3D/WebXR world built around Matrix and web technologies.
- Tags: `webxr`, `social`, `matrix`, `multiplayer`
- URL: https://thirdroom.io/
- GitHub: https://github.com/matrix-org/thirdroom
- Preview: /screenshots/third-room.webp
- Agent routes: xr-ar-vr, physics-games, visual-inspiration

### Mozilla Hubs

- ID: `mozilla-hubs`
- Field: Social VR
- Kind / status / priority: showcase / learning / learning
- Best for: Studying rooms, avatars, WebRTC, spatial UX, and production-scale immersive web code.
- Description: Large open-source WebXR social-space codebase, valuable as a reference even after the hosted product era.
- Tags: `webxr`, `social-vr`, `avatars`, `webrtc`
- URL: https://github.com/mozilla/hubs
- GitHub: https://github.com/mozilla/hubs
- Preview: /screenshots/mozilla-hubs.webp
- Agent routes: xr-ar-vr, visual-inspiration, learning-theory

### @coconut-xr/koestlich

- ID: `coconut-xr-koestlich`
- Field: Spatial UI
- Kind / status / priority: library / production / production
- Best for: Building actual XR panels, controls, and 3D app interfaces.
- Description: Spatial UI primitives for React Three Fiber and WebXR interfaces.
- Tags: `r3f`, `spatial-ui`, `webxr`, `ui`
- URL: https://github.com/coconut-xr/koestlich
- GitHub: https://github.com/coconut-xr/koestlich
- Preview: /screenshots/coconut-xr-koestlich.webp
- Agent routes: start-r3f-app, xr-ar-vr

### RATK

- ID: `ratk`
- Field: XR toolkit
- Kind / status / priority: library / experimental / learning
- Best for: Controller, hand, and object-interaction experiments in immersive scenes.
- Description: Reality Accelerator Toolkit for WebXR interaction patterns and prototyping.
- Tags: `webxr`, `toolkit`, `interaction`, `prototyping`
- URL: https://github.com/ratk-org/ratk
- GitHub: https://github.com/ratk-org/ratk
- Preview: /screenshots/ratk.webp
- Agent routes: xr-ar-vr

### Handy.js

- ID: `handy-js`
- Field: Hand tracking
- Kind / status / priority: library / experimental / learning
- Best for: Testing hand-joint and gesture workflows in immersive web scenes.
- Description: WebXR hand-tracking helper library for hand input experiments.
- Tags: `webxr`, `hands`, `tracking`, `input`
- URL: https://github.com/stspanho/handy.js
- GitHub: https://github.com/stspanho/handy.js
- Preview: /screenshots/handy-js.webp
- Agent routes: xr-ar-vr

### mr.js

- ID: `mr-js`
- Field: Spatial web
- Kind / status / priority: library / experimental / learning
- Best for: Thinking beyond canvas-only XR into spatial DOM-style authoring.
- Description: HTML-like spatial web framework for mixed reality interfaces.
- Tags: `webxr`, `spatial-web`, `mixed-reality`, `ui`
- URL: https://mrjs.io/
- GitHub: https://github.com/Volumetrics-io/mrjs
- Preview: /screenshots/mr-js.webp
- Agent routes: xr-ar-vr

### JSAR Runtime

- ID: `jsar-runtime`
- Field: Spatial runtime
- Kind / status / priority: tool / experimental / experimental
- Best for: Future-facing research into XR runtimes, spatial browsing, and app containers.
- Description: Spatial computing runtime exploring browser-like XR app execution.
- Tags: `xr`, `runtime`, `spatial-computing`, `browser`
- URL: https://github.com/M-CreativeLab/jsar-runtime
- GitHub: https://github.com/M-CreativeLab/jsar-runtime
- Preview: /screenshots/jsar-runtime.webp
- Agent routes: xr-ar-vr, data-maps-ai

### XR Blocks

- ID: `xr-blocks`
- Field: XR prototyping
- Kind / status / priority: tool / experimental / experimental
- Best for: Approachable XR authoring ideas, education workflows, and rapid spatial sketches.
- Description: Google research project for building XR experiences with block-based tools.
- Tags: `webxr`, `education`, `blocks`, `prototyping`
- URL: https://xrblocks.github.io/gem/
- GitHub: https://github.com/google/xrblocks
- Preview: /screenshots/xr-blocks.webp
- Agent routes: xr-ar-vr

### WebXR DOM Overlays Module

- ID: `webxr-dom-overlays`
- Field: WebXR UI standard
- Kind / status / priority: reference / core / canonical
- Best for: Mixing React DOM controls with AR experiences.
- Description: Spec for DOM UI overlays inside immersive AR sessions.
- Tags: `webxr`, `dom`, `ar`, `ui`
- URL: https://immersive-web.github.io/dom-overlays/
- GitHub: https://github.com/immersive-web/dom-overlays
- Preview: /screenshots/webxr-dom-overlays.webp
- Agent routes: start-r3f-app, xr-ar-vr

### WebXR Device API

- ID: `webxr-spec`
- Field: WebXR standard
- Kind / status / priority: reference / core / canonical
- Best for: Understanding sessions, reference spaces, frame loops, input sources, and browser capabilities.
- Description: Core WebXR Device API specification for immersive VR and AR sessions in browsers.
- Tags: `webxr`, `standard`, `vr`, `ar`
- URL: https://immersive-web.github.io/webxr/
- GitHub: https://github.com/immersive-web/webxr
- Preview: /screenshots/webxr-spec.webp
- Agent routes: xr-ar-vr

## Web Experiences

Scroll, editorial WebGL, portfolio systems, and app starters.

### R3F Scroll Rig

- ID: `r3f-scroll-rig`
- Field: DOM and WebGL sync
- Kind / status / priority: library / production / production
- Best for: Editorial sites, portfolios, product pages, and grids that blend DOM layout with 3D.
- Description: Global canvas and scroll synchronization system for progressively enhancing React websites with WebGL.
- Tags: `scroll`, `global canvas`, `dom`, `websites`
- URL: https://github.com/14islands/r3f-scroll-rig
- GitHub: https://github.com/14islands/r3f-scroll-rig
- Preview: /screenshots/r3f-scroll-rig.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration, learning-theory, web-experiences

### Triplex

- ID: `triplex`
- Field: Visual editor
- Kind / status / priority: tool / production / production
- Best for: Designing 2D and 3D components visually without leaving a code-centric workflow.
- Description: Open-source visual workspace for React and Three Fiber components where code remains the source of truth.
- Tags: `editor`, `visual`, `r3f`, `code`
- URL: https://triplex.dev
- GitHub: https://github.com/pmndrs/triplex
- Preview: /screenshots/triplex.webp
- Agent routes: start-r3f-app, visual-inspiration, data-maps-ai, web-experiences

### React Three Next

- ID: `react-three-next`
- Field: Starter
- Kind / status / priority: starter / production / production
- Best for: Full website builds where SSR routes, HTML sections, and R3F views need to coexist.
- Description: Next.js starter for React Three Fiber with common setup patterns for hybrid web and canvas apps.
- Tags: `starter`, `next.js`, `websites`, `r3f`
- URL: https://github.com/pmndrs/react-three-next
- GitHub: https://github.com/pmndrs/react-three-next
- Preview: /screenshots/react-three-next.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration, web-experiences

### Lenis

- ID: `lenis`
- Field: Scrolling
- Kind / status / priority: library / production / production
- Best for: Polished scroll narratives where DOM and WebGL motion need to feel connected.
- Description: Smooth scrolling library commonly paired with editorial R3F experiences and scroll-linked animation systems.
- Tags: `scroll`, `motion`, `websites`, `interaction`
- URL: https://lenis.darkroom.engineering
- GitHub: https://github.com/darkroomengineering/lenis
- Preview: /screenshots/lenis.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration, data-maps-ai, learning-theory, web-experiences

### GSAP

- ID: `gsap`
- Field: Animation
- Kind / status / priority: library / production / production
- Best for: When designers expect exact timeline control across DOM and WebGL.
- Description: Animation platform often used for timeline-driven DOM and Three.js values, scroll triggers, and product reveals.
- Tags: `animation`, `timeline`, `scroll`, `websites`
- URL: https://gsap.com
- GitHub: https://github.com/greensock/GSAP
- Preview: /screenshots/gsap.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration, learning-theory, web-experiences

### Motion

- ID: `framer-motion`
- Field: Animation
- Kind / status / priority: library / production / production
- Best for: The DOM half of hybrid R3F websites, panels, modals, and transitions.
- Description: React animation library for UI around canvas experiences, formerly Framer Motion.
- Tags: `animation`, `react`, `ui`, `motion`
- URL: https://motion.dev
- GitHub: https://github.com/motiondivision/motion
- Preview: /screenshots/framer-motion.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration, web-experiences

### Codrops WebGL

- ID: `codrops-webgl`
- Field: Editorial tutorials
- Kind / status / priority: article / creative / specialized
- Best for: Seeing how visual ideas are packaged into web-native experiences.
- Description: A long-running source of polished WebGL, Three.js, shader, scroll, and interaction breakdowns.
- Tags: `tutorials`, `webgl`, `interaction`, `websites`
- URL: https://tympanus.net/codrops/tag/webgl/
- GitHub: none
- Preview: /screenshots/codrops.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration, learning-theory, web-experiences

### Next.js

- ID: `nextjs`
- Field: React framework
- Kind / status / priority: tool / production / production
- Best for: Portfolio sites, product pages, galleries, and content-driven 3D experiences.
- Description: React framework commonly used for production R3F websites that need routing, metadata, server components, and deployment.
- Tags: `react`, `framework`, `websites`, `routing`
- URL: https://nextjs.org
- GitHub: https://github.com/vercel/next.js
- Preview: /screenshots/nextjs.webp
- Agent routes: start-r3f-app, visual-inspiration, data-maps-ai, web-experiences

### React Router Framework

- ID: `remix`
- Field: React framework
- Kind / status / priority: tool / production / production
- Best for: 3D tools, dashboards, and editors that need robust routing and nested layouts.
- Description: Full-stack React framework path from the React Router team, useful for app-like R3F experiences with data routes.
- Tags: `react`, `routing`, `framework`, `apps`
- URL: https://reactrouter.com/start/framework/installation
- GitHub: https://github.com/remix-run/react-router
- Preview: /screenshots/remix.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration, data-maps-ai, web-experiences

### Astro

- ID: `astro`
- Field: Content framework
- Kind / status / priority: tool / production / production
- Best for: Fast content sites where only parts of the page need interactive 3D.
- Description: Content-first web framework that can host React islands, useful for editorial pages with selective R3F moments.
- Tags: `content`, `islands`, `react`, `websites`
- URL: https://astro.build
- GitHub: https://github.com/withastro/astro
- Preview: /screenshots/astro.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration, web-experiences

### GSAP ScrollTrigger

- ID: `gsap-scrolltrigger`
- Field: Scroll animation
- Kind / status / priority: library / production / production
- Best for: Editorial R3F storytelling and product launches with exact scroll choreography.
- Description: Scroll-linked animation plugin frequently used to coordinate DOM timelines, camera motion, and scene transitions.
- Tags: `scroll`, `animation`, `timeline`, `websites`
- URL: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- GitHub: https://github.com/greensock/GSAP
- Preview: /screenshots/gsap-scrolltrigger.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration, web-experiences

### Locomotive Scroll

- ID: `locomotive-scroll`
- Field: Scrolling
- Kind / status / priority: library / production / production
- Best for: Studying older but influential scroll-driven creative site patterns.
- Description: Smooth scrolling and parallax library used across many creative web portfolios and WebGL pages.
- Tags: `scroll`, `parallax`, `websites`, `creative`
- URL: https://github.com/locomotivemtl/locomotive-scroll
- GitHub: https://github.com/locomotivemtl/locomotive-scroll
- Preview: /screenshots/locomotive-scroll.webp
- Agent routes: xr-ar-vr, visual-inspiration, learning-theory, web-experiences

### Barba.js

- ID: `barba`
- Field: Page transitions
- Kind / status / priority: library / production / production
- Best for: Keeping transitions smooth when pages and WebGL scenes share visual continuity.
- Description: Page transition library often seen in creative sites, useful reference for route changes around persistent canvases.
- Tags: `transitions`, `routing`, `websites`, `animation`
- URL: https://barba.js.org
- GitHub: https://github.com/barbajs/barba
- Preview: /screenshots/barba.webp
- Agent routes: xr-ar-vr, visual-inspiration, learning-theory, web-experiences

### Storybook

- ID: `storybook`
- Field: Component workshop
- Kind / status / priority: tool / production / production
- Best for: Designing the app shell around canvas experiences without launching the whole product.
- Description: Component workshop that can document UI around R3F and isolate complex controls, panels, and visual states.
- Tags: `components`, `documentation`, `react`, `ui`
- URL: https://storybook.js.org
- GitHub: https://github.com/storybookjs/storybook
- Preview: /screenshots/storybook.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration, web-experiences

### Chromatic

- ID: `chromatic`
- Field: Visual testing
- Kind / status / priority: tool / production / production
- Best for: Preventing interface regressions in tool-heavy R3F products.
- Description: Visual review and regression testing for Storybook, useful for DOM UI around 3D experiences.
- Tags: `visual testing`, `storybook`, `ui`, `qa`
- URL: https://www.chromatic.com
- GitHub: https://github.com/chromaui
- Preview: /screenshots/chromatic.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration, web-experiences

### Playwright

- ID: `playwright`
- Field: Browser testing
- Kind / status / priority: tool / production / production
- Best for: Testing R3F apps as real browser experiences instead of only unit-testing components.
- Description: Browser automation and test framework for checking canvas pages, responsive layout, screenshots, and user flows.
- Tags: `testing`, `browser`, `screenshots`, `qa`
- URL: https://playwright.dev
- GitHub: https://github.com/microsoft/playwright
- Preview: /screenshots/playwright.webp
- Agent routes: start-r3f-app, visual-inspiration, web-experiences

### Vercel

- ID: `vercel`
- Field: Deployment
- Kind / status / priority: tool / production / production
- Best for: Shipping polished web experiences with previews and edge delivery.
- Description: Deployment platform commonly used for React, Next.js, and R3F portfolios, demos, and product sites.
- Tags: `deployment`, `next.js`, `websites`, `previews`
- URL: https://vercel.com
- GitHub: https://github.com/vercel
- Preview: /screenshots/vercel.webp
- Agent routes: start-r3f-app, visual-inspiration, web-experiences

### Netlify

- ID: `netlify`
- Field: Deployment
- Kind / status / priority: tool / production / production
- Best for: Fast preview deploys and static creative web projects.
- Description: Static and full-stack deployment platform well suited for Vite, Astro, and portfolio-style R3F builds.
- Tags: `deployment`, `vite`, `websites`, `static`
- URL: https://www.netlify.com
- GitHub: https://github.com/netlify
- Preview: /screenshots/netlify.webp
- Agent routes: start-r3f-app, visual-inspiration, web-experiences

### html-to-image

- ID: `html-to-image`
- Field: Export tooling
- Kind / status / priority: library / production / production
- Best for: Saving configurator states, thumbnails, or presentation cards from hybrid DOM/canvas interfaces.
- Description: Generate images from DOM nodes, useful for sharing cards, thumbnails, snapshots, and editor exports around R3F apps.
- Tags: `export`, `screenshots`, `dom`, `tools`
- URL: https://github.com/bubkoo/html-to-image
- GitHub: https://github.com/bubkoo/html-to-image
- Preview: /screenshots/html-to-image.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration, data-maps-ai, web-experiences

### canvas-confetti

- ID: `canvas-confetti`
- Field: Micro effects
- Kind / status / priority: library / production / production
- Best for: Adding satisfying feedback around R3F UI without overbuilding a particle system.
- Description: Tiny canvas confetti effect library for moments of reward and lightweight visual feedback.
- Tags: `effects`, `canvas`, `ui`, `feedback`
- URL: https://github.com/catdad/canvas-confetti
- GitHub: https://github.com/catdad/canvas-confetti
- Preview: /screenshots/canvas-confetti.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration, web-experiences

### Rive

- ID: `rive`
- Field: Interactive animation
- Kind / status / priority: tool / production / production
- Best for: Pairing expressive 2D interface animation with heavier R3F canvas content.
- Description: Interactive vector animation tool and runtime, often useful for UI around 3D scenes.
- Tags: `animation`, `ui`, `interactive`, `runtime`
- URL: https://rive.app
- GitHub: https://github.com/rive-app/rive
- Preview: /screenshots/rive.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration, data-maps-ai, web-experiences

### Lottie

- ID: `lottie`
- Field: Animation
- Kind / status / priority: library / production / production
- Best for: Lightweight motion accents and loading states around 3D experiences.
- Description: Web runtime for After Effects vector animations exported through Bodymovin.
- Tags: `animation`, `after effects`, `ui`, `web`
- URL: https://airbnb.io/lottie/#/
- GitHub: https://github.com/airbnb/lottie-web
- Preview: /screenshots/lottie.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration, web-experiences

### Dora

- ID: `dora`
- Field: No-code 3D sites
- Kind / status / priority: tool / production / production
- Best for: Studying expectations from design-led 3D website tools and quick visual prototyping.
- Description: Visual web design tool with 3D, animation, and interaction capabilities.
- Tags: `websites`, `3d tool`, `design`, `animation`
- URL: https://www.dora.run
- GitHub: none
- Preview: /screenshots/dora.webp
- Agent routes: visual-inspiration, web-experiences

### Unicorn Studio

- ID: `unicorn-studio`
- Field: Interactive backgrounds
- Kind / status / priority: tool / creative / specialized
- Best for: Understanding the kind of lightweight WebGL motion clients expect on modern sites.
- Description: No-code animated WebGL background tool for interactive gradients, particles, and visual effects.
- Tags: `webgl`, `backgrounds`, `design`, `effects`
- URL: https://www.unicorn.studio
- GitHub: none
- Preview: /screenshots/unicorn-studio.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration, learning-theory, web-experiences

### Spline Community

- ID: `spline-community`
- Field: 3D examples
- Kind / status / priority: showcase / creative / specialized
- Best for: Visual references for accessible 3D site patterns and designer-friendly scene composition.
- Description: Community gallery of Spline-authored 3D scenes, components, and interface ideas.
- Tags: `spline`, `community`, `3d design`, `examples`
- URL: https://app.spline.design/community
- GitHub: none
- Preview: /screenshots/spline-community.webp
- Agent routes: visual-inspiration, web-experiences

### R3F Portfolio Starter

- ID: `r3f-portfolio-starter`
- Field: Starter
- Kind / status / priority: starter / production / production
- Best for: Studying common portfolio architecture before making a more original build.
- Description: Starter pattern for a portfolio that combines React Three Fiber with web sections and modern frontend tooling.
- Tags: `starter`, `portfolio`, `r3f`, `websites`
- URL: https://github.com/wass08/r3f-portfolio-starter
- GitHub: https://github.com/wass08/r3f-portfolio-starter
- Preview: /screenshots/r3f-portfolio-starter.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration, web-experiences

### Webflow 3D Transform

- ID: `webflow-3d`
- Field: Design reference
- Kind / status / priority: course / learning / specialized
- Best for: Bridging designer language and R3F implementation for web experiences.
- Description: Designer-facing 3D transform and animation lessons, useful for understanding non-WebGL spatial UI expectations.
- Tags: `design`, `3d`, `animation`, `websites`
- URL: https://university.webflow.com/lesson/3d-transforms-and-animations
- GitHub: none
- Preview: /screenshots/webflow-3d.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration, learning-theory, web-experiences

### gpu-curtains

- ID: `gpu-curtains`
- Field: WebGPU effects
- Kind / status / priority: library / creative / specialized
- Best for: DOM-integrated WebGPU planes, scroll effects, displacement, and creative site transitions.
- Description: WebGPU rendering and effects library by the Curtains.js author.
- Tags: `webgpu`, `dom`, `effects`, `creative-coding`
- URL: https://martinlaxenaire.github.io/gpu-curtains/
- GitHub: https://github.com/martinlaxenaire/gpu-curtains
- Preview: /screenshots/gpu-curtains.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration, data-maps-ai, learning-theory, web-experiences

## Performance & Debug

Profiling, BVHs, GPU limits, workers, compression, and diagnostics.

### R3F Perf

- ID: `r3f-perf`
- Field: Profiling
- Kind / status / priority: tool / production / production
- Best for: Seeing exactly when a scene becomes too expensive.
- Description: In-scene performance monitor for R3F with FPS, memory, draw calls, geometries, textures, shaders, and graphs.
- Tags: `performance`, `profiling`, `fps`, `draw calls`
- URL: https://github.com/utsuboco/r3f-perf
- GitHub: https://github.com/utsuboco/r3f-perf
- Preview: /screenshots/r3f-perf.webp
- Agent routes: start-r3f-app, asset-pipeline, shader-effects, performance-debug

### stats-gl

- ID: `stats-gl`
- Field: Profiling
- Kind / status / priority: tool / production / production
- Best for: Lightweight runtime monitoring in plain Three.js or R3F scenes.
- Description: Modern WebGL performance panel for GPU and CPU timing, memory, and frame diagnostics.
- Tags: `performance`, `profiling`, `webgl`, `gpu`
- URL: https://github.com/RenaudRohlinger/stats-gl
- GitHub: https://github.com/RenaudRohlinger/stats-gl
- Preview: /screenshots/stats-gl.webp
- Agent routes: start-r3f-app, performance-debug, data-maps-ai, learning-theory

### Spector.js

- ID: `spector`
- Field: Frame capture
- Kind / status / priority: tool / production / production
- Best for: Finding what the GPU is actually drawing when abstractions hide too much.
- Description: WebGL frame inspection tool for draw calls, shader programs, textures, uniforms, and render-state debugging.
- Tags: `webgl`, `debug`, `frame capture`, `gpu`
- URL: https://spector.babylonjs.com
- GitHub: https://github.com/BabylonJS/Spector.js
- Preview: /screenshots/spector.webp
- Agent routes: asset-pipeline, performance-debug, learning-theory

### three-mesh-bvh

- ID: `three-mesh-bvh`
- Field: Spatial acceleration
- Kind / status / priority: library / production / production
- Best for: Large meshes, picking, collision-like tests, CSG, and path tracing support.
- Description: Bounding volume hierarchy acceleration for raycasting, collision queries, shapecasts, and geometry operations.
- Tags: `bvh`, `raycasting`, `geometry`, `performance`
- URL: https://github.com/gkjohnson/three-mesh-bvh
- GitHub: https://github.com/gkjohnson/three-mesh-bvh
- Preview: /screenshots/three-mesh-bvh.webp
- Agent routes: performance-debug, xr-ar-vr

### three-bvh-csg

- ID: `three-bvh-csg`
- Field: Geometry
- Kind / status / priority: library / production / production
- Best for: Procedural CAD-like features and user-authored boolean editing.
- Description: Fast CSG implementation built on top of three-mesh-bvh for dynamic boolean mesh operations.
- Tags: `csg`, `bvh`, `geometry`, `cad`
- URL: https://github.com/gkjohnson/three-bvh-csg
- GitHub: https://github.com/gkjohnson/three-bvh-csg
- Preview: /screenshots/three-bvh-csg.webp
- Agent routes: performance-debug, xr-ar-vr

### detect-gpu

- ID: `detect-gpu`
- Field: Capability detection
- Kind / status / priority: library / production / production
- Best for: Avoiding a single heavy art direction for every device.
- Description: Classifies client GPU capability so apps can choose quality levels, effects, and fallbacks responsibly.
- Tags: `gpu`, `fallbacks`, `quality`, `performance`
- URL: https://github.com/pmndrs/detect-gpu
- GitHub: https://github.com/pmndrs/detect-gpu
- Preview: /screenshots/detect-gpu.webp
- Agent routes: shader-effects, performance-debug, xr-ar-vr

### WebGL Report

- ID: `webgl-report`
- Field: Capabilities
- Kind / status / priority: tool / production / production
- Best for: Checking device limits when debugging user reports.
- Description: Simple inspection of browser WebGL capabilities, extensions, limits, and renderer details.
- Tags: `webgl`, `capabilities`, `limits`, `debug`
- URL: https://webglreport.com
- GitHub: none
- Preview: /screenshots/webgl-report.webp
- Agent routes: performance-debug, data-maps-ai, learning-theory

### Drei PerformanceMonitor

- ID: `drei-performance-monitor`
- Field: Adaptive quality
- Kind / status / priority: library / production / production
- Best for: Automatically protecting users on weak devices without removing visual ambition for everyone.
- Description: Drei helper for detecting performance changes and adapting DPR, effects, geometry density, or quality tiers.
- Tags: `performance`, `adaptive`, `drei`, `quality`
- URL: https://drei.docs.pmnd.rs/performances/performance-monitor
- GitHub: https://github.com/pmndrs/drei
- Preview: /screenshots/drei-performance-monitor.webp
- Agent routes: shader-effects, performance-debug, xr-ar-vr

### Drei Instances

- ID: `drei-instances`
- Field: Instancing
- Kind / status / priority: library / production / production
- Best for: Forests, repeated products, particles-as-meshes, crowds, grids, and background detail.
- Description: Declarative instancing abstraction for drawing many similar meshes through fewer draw calls.
- Tags: `instancing`, `performance`, `drei`, `draw calls`
- URL: https://drei.docs.pmnd.rs/performances/instances
- GitHub: https://github.com/pmndrs/drei
- Preview: /screenshots/drei-instances.webp
- Agent routes: performance-debug, xr-ar-vr, data-maps-ai

### Drei BakeShadows

- ID: `drei-bake-shadows`
- Field: Lighting optimization
- Kind / status / priority: library / production / production
- Best for: Product scenes and portfolios where dynamic shadows are visually unnecessary after setup.
- Description: Freezes shadow maps after an initial render, reducing runtime cost for mostly static staged scenes.
- Tags: `shadows`, `performance`, `lighting`, `drei`
- URL: https://drei.docs.pmnd.rs/performances/bake-shadows
- GitHub: https://github.com/pmndrs/drei
- Preview: /screenshots/drei-bake-shadows.webp
- Agent routes: performance-debug, xr-ar-vr, visual-inspiration, data-maps-ai, web-experiences

### Drei Merged

- ID: `drei-merged`
- Field: Geometry batching
- Kind / status / priority: library / production / production
- Best for: Model-heavy worlds, shelves, product grids, and repeated props.
- Description: Helper for reusing and merging GLTF nodes to reduce overhead when many repeated model parts appear in a scene.
- Tags: `gltf`, `performance`, `batching`, `drei`
- URL: https://drei.docs.pmnd.rs/performances/merged
- GitHub: https://github.com/pmndrs/drei
- Preview: /screenshots/drei-merged.webp
- Agent routes: asset-pipeline, performance-debug, xr-ar-vr

### stats.js

- ID: `stats-js`
- Field: FPS monitor
- Kind / status / priority: tool / production / production
- Best for: A first quick signal before deeper profiling with Spector or browser dev tools.
- Description: Tiny classic FPS and memory monitor used in many Three.js examples and quick prototypes.
- Tags: `fps`, `performance`, `debug`, `three.js`
- URL: https://github.com/mrdoob/stats.js
- GitHub: https://github.com/mrdoob/stats.js
- Preview: /screenshots/stats-js.webp
- Agent routes: start-r3f-app, performance-debug

### rollup-plugin-visualizer

- ID: `rollup-plugin-visualizer`
- Field: Bundle analysis
- Kind / status / priority: tool / production / production
- Best for: Finding heavy imports, accidental whole-library pulls, and optimization targets.
- Description: Bundle visualization tool for Vite/Rollup projects, useful when Three.js addons and asset tooling inflate payloads.
- Tags: `bundle`, `vite`, `performance`, `analysis`
- URL: https://github.com/btd/rollup-plugin-visualizer
- GitHub: https://github.com/btd/rollup-plugin-visualizer
- Preview: /screenshots/rollup-plugin-visualizer.webp
- Agent routes: start-r3f-app, performance-debug, xr-ar-vr

### vite-plugin-compression

- ID: `vite-plugin-compression`
- Field: Compression
- Kind / status / priority: tool / production / production
- Best for: Ensuring models, scripts, and app shells are delivered with modern compression.
- Description: Vite plugin for producing compressed assets, helpful for self-hosted static R3F apps and heavy bundles.
- Tags: `vite`, `compression`, `bundle`, `performance`
- URL: https://github.com/vbenjs/vite-plugin-compression
- GitHub: https://github.com/vbenjs/vite-plugin-compression
- Preview: /screenshots/vite-plugin-compression.webp
- Agent routes: start-r3f-app, asset-pipeline, performance-debug, xr-ar-vr

### Chrome Performance Panel

- ID: `chrome-performance`
- Field: Browser profiling
- Kind / status / priority: docs / production / production
- Best for: Finding whether lag is React, asset decode, layout, JavaScript, or GPU pressure.
- Description: Official DevTools profiling guide for main-thread work, frames, memory, interactions, and rendering performance.
- Tags: `devtools`, `performance`, `browser`, `profiling`
- URL: https://developer.chrome.com/docs/devtools/performance
- GitHub: none
- Preview: /screenshots/chrome-performance.webp
- Agent routes: start-r3f-app, performance-debug, data-maps-ai

## Learning & Theory

Courses, references, graphics fundamentals, and durable tutorials.

### Three.js Journey

- ID: `threejs-journey`
- Field: Course
- Kind / status / priority: course / learning / specialized
- Best for: Going from beginner to fluent through structured exercises and production-minded examples.
- Description: Deep paid course by Bruno Simon covering Three.js and modern workflows, with a React Three Fiber chapter.
- Tags: `course`, `three.js`, `r3f`, `bruno simon`
- URL: https://threejs-journey.com
- GitHub: none
- Preview: /screenshots/threejs-journey.webp
- Agent routes: start-r3f-app, xr-ar-vr, data-maps-ai, learning-theory

### SBCode R3F Tutorials

- ID: `sbcode`
- Field: Tutorials
- Kind / status / priority: course / learning / specialized
- Best for: Looking up a focused example when you need one concept quickly.
- Description: Large set of practical React Three Fiber tutorials covering basics, Drei helpers, physics, loaders, shaders, and patterns.
- Tags: `tutorials`, `r3f`, `examples`, `learning`
- URL: https://sbcode.net/react-three-fiber/
- GitHub: none
- Preview: /screenshots/sbcode.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, physics-games, learning-theory

### Discover Three.js

- ID: `discover-three`
- Field: Book
- Kind / status / priority: course / learning / specialized
- Best for: Building a solid foundation before abstracting everything through React.
- Description: Readable Three.js book with best practices and mental models that map directly into R3F development.
- Tags: `three.js`, `book`, `best practices`, `learning`
- URL: https://discoverthreejs.com
- GitHub: https://github.com/looeee/discoverthreejs-site
- Preview: /screenshots/discover-three.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, learning-theory

### Three.js Fundamentals

- ID: `threejs-fundamentals`
- Field: Tutorials
- Kind / status / priority: course / learning / specialized
- Best for: Understanding the engine behaviors R3F exposes as JSX.
- Description: Extensive, example-heavy explanations of Three.js cameras, lights, textures, geometry, render targets, and more.
- Tags: `three.js`, `fundamentals`, `examples`, `learning`
- URL: https://threejsfundamentals.org
- GitHub: https://github.com/gfxfundamentals/threejsfundamentals
- Preview: /screenshots/threejs-fundamentals.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, learning-theory

### Maxime Heckel

- ID: `maxime-heckel`
- Field: Articles
- Kind / status / priority: article / creative / specialized
- Best for: Deep dives that connect code, visuals, and graphics concepts clearly.
- Description: High-quality articles on shaders, R3F, lighting, render targets, effects, and interaction patterns.
- Tags: `articles`, `shaders`, `r3f`, `graphics`
- URL: https://blog.maximeheckel.com
- GitHub: https://github.com/MaximeHeckel
- Preview: /screenshots/maxime-heckel.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration, learning-theory

### Awesome React Three Fiber

- ID: `awesome-r3f`
- Field: Resource list
- Kind / status / priority: community / learning / learning
- Best for: Going down rabbit holes and finding older gems that do not surface in docs.
- Description: Loose collection of R3F links, demos, tutorials, people, and experiments from the broader community.
- Tags: `awesome`, `links`, `community`, `r3f`
- URL: https://github.com/gsimone/awesome-react-three-fiber
- GitHub: https://github.com/gsimone/awesome-react-three-fiber
- Preview: /screenshots/awesome-r3f.webp
- Agent routes: start-r3f-app, xr-ar-vr, learning-theory

### GPU Gems

- ID: `gpu-gems`
- Field: Graphics theory
- Kind / status / priority: reference / learning / specialized
- Best for: Understanding where many modern shader and rendering techniques came from.
- Description: Classic GPU programming articles. Older, but still full of durable ideas for particles, lighting, simulation, and shaders.
- Tags: `graphics`, `gpu`, `shaders`, `theory`
- URL: https://developer.nvidia.com/gpugems/gpugems/contributors
- GitHub: none
- Preview: /screenshots/gpu-gems.webp
- Agent routes: shader-effects, xr-ar-vr, learning-theory

### The Nature of Code

- ID: `nature-of-code`
- Field: Generative systems
- Kind / status / priority: course / learning / specialized
- Best for: Making R3F scenes feel alive instead of merely rendered.
- Description: Creative coding book about vectors, forces, particles, agents, autonomous behavior, physics, and generative systems.
- Tags: `generative`, `physics`, `agents`, `creative coding`
- URL: https://natureofcode.com
- GitHub: https://github.com/nature-of-code/noc-book-2
- Preview: /screenshots/nature-of-code.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games, visual-inspiration, learning-theory

### LearnOpenGL

- ID: `learnopengl`
- Field: Graphics theory
- Kind / status / priority: course / learning / specialized
- Best for: Understanding the graphics theory behind Three.js abstractions.
- Description: OpenGL tutorial series that explains lighting, materials, framebuffers, cubemaps, PBR, and advanced rendering.
- Tags: `opengl`, `graphics`, `lighting`, `pbr`
- URL: https://learnopengl.com
- GitHub: https://github.com/JoeyDeVries/LearnOpenGL
- Preview: /screenshots/learnopengl.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, data-maps-ai, learning-theory

### Scratchapixel

- ID: `scratchapixel`
- Field: Rendering theory
- Kind / status / priority: course / learning / specialized
- Best for: Building serious graphics intuition that pays off in shaders and scene design.
- Description: Detailed lessons on ray tracing, rasterization, shading, cameras, sampling, and rendering math.
- Tags: `rendering`, `math`, `ray tracing`, `graphics`
- URL: https://www.scratchapixel.com
- GitHub: none
- Preview: /screenshots/scratchapixel.webp
- Agent routes: shader-effects, xr-ar-vr, data-maps-ai, learning-theory

### Real-Time Rendering

- ID: `real-time-rendering`
- Field: Rendering reference
- Kind / status / priority: reference / learning / specialized
- Best for: Going beyond tutorials into the vocabulary used by graphics engineers.
- Description: Book site and reference hub for modern real-time rendering techniques, papers, links, and updates.
- Tags: `rendering`, `graphics`, `reference`, `papers`
- URL: https://www.realtimerendering.com
- GitHub: none
- Preview: /screenshots/real-time-rendering.webp
- Agent routes: xr-ar-vr, learning-theory

### The Graphics Codex

- ID: `the-graphics-codex`
- Field: Graphics reference
- Kind / status / priority: reference / learning / specialized
- Best for: Clarifying math and rendering concepts while building shader-heavy R3F work.
- Description: Compact reference for computer graphics concepts, algorithms, notation, and visual explanations.
- Tags: `graphics`, `math`, `reference`, `rendering`
- URL: https://graphicscodex.com
- GitHub: none
- Preview: /screenshots/the-graphics-codex.webp
- Agent routes: start-r3f-app, xr-ar-vr, learning-theory

### SimonDev

- ID: `simondev`
- Field: Video tutorials
- Kind / status / priority: course / learning / specialized
- Best for: Learning game and graphics patterns that can be adapted to R3F.
- Description: Practical Three.js, game programming, graphics, and engine-style tutorials with code-heavy explanations.
- Tags: `three.js`, `games`, `video`, `learning`
- URL: https://www.youtube.com/@simondev758
- GitHub: https://github.com/simondevyoutube
- Preview: /screenshots/simondev.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games, learning-theory

### Wael Yasmina

- ID: `wael-yasmina`
- Field: Tutorials
- Kind / status / priority: course / learning / specialized
- Best for: Filling gaps between docs and finished interactive demos.
- Description: Three.js and R3F learning material with approachable project-based examples and visual walkthroughs.
- Tags: `three.js`, `r3f`, `tutorials`, `learning`
- URL: https://waelyasmina.net
- GitHub: https://github.com/WaelYasmina
- Preview: /screenshots/wael-yasmina.webp
- Agent routes: start-r3f-app, xr-ar-vr, learning-theory

### R3F by Example

- ID: `r3f-workshop`
- Field: Examples
- Kind / status / priority: course / learning / specialized
- Best for: Finding a minimal R3F example before building a full feature.
- Description: Example-driven React Three Fiber reference covering many small patterns in focused, inspectable projects.
- Tags: `r3f`, `examples`, `learning`, `patterns`
- URL: https://onion2k.github.io/r3f-by-example/
- GitHub: https://github.com/onion2k/r3f-by-example
- Preview: /screenshots/r3f-workshop.webp
- Agent routes: start-r3f-app, xr-ar-vr, learning-theory

### Three.js Resources

- ID: `threejs-resources`
- Field: Resource index
- Kind / status / priority: reference / learning / specialized
- Best for: Checking the broader ecosystem from the official project perspective.
- Description: Official useful links page for Three.js ecosystem resources, communities, books, courses, and tools.
- Tags: `three.js`, `resources`, `official`, `learning`
- URL: https://threejs.org/docs/#manual/en/introduction/Useful-links
- GitHub: https://github.com/mrdoob/three.js
- Preview: /screenshots/threejs-resources.webp
- Agent routes: start-r3f-app, xr-ar-vr, learning-theory

### Web Audio School

- ID: `web-audio-school`
- Field: Audio learning
- Kind / status / priority: course / learning / specialized
- Best for: Adding stronger audio literacy to visual and game-like R3F work.
- Description: Interactive lessons for learning Web Audio API concepts and sound synthesis in the browser.
- Tags: `audio`, `learning`, `browser`, `synthesis`
- URL: https://mmckegg.github.io/web-audio-school/
- GitHub: https://github.com/mmckegg/web-audio-school
- Preview: /screenshots/web-audio-school.webp
- Agent routes: start-r3f-app, xr-ar-vr, learning-theory

### CSS-Tricks WebGL

- ID: `css-tricks-webgl`
- Field: Articles
- Kind / status / priority: article / learning / learning
- Best for: Learning how WebGL ideas fit into broader frontend implementation.
- Description: WebGL-tagged articles and tutorials from CSS-Tricks, often bridging frontend concerns and graphics.
- Tags: `webgl`, `articles`, `frontend`, `learning`
- URL: https://css-tricks.com/tag/webgl/
- GitHub: none
- Preview: /screenshots/css-tricks-webgl.webp
- Agent routes: xr-ar-vr, learning-theory

### Smashing Magazine WebGL

- ID: `smashing-webgl`
- Field: Articles
- Kind / status / priority: article / learning / learning
- Best for: Connecting production frontend practice with visual experimentation.
- Description: Design and frontend-focused articles touching WebGL, animation, performance, and interactive experiences.
- Tags: `webgl`, `articles`, `frontend`, `design`
- URL: https://www.smashingmagazine.com/tag/webgl/
- GitHub: none
- Preview: /screenshots/smashing-webgl.webp
- Agent routes: performance-debug, xr-ar-vr, learning-theory, web-experiences

### Yuri Artiukh

- ID: `yuri-artiukh`
- Field: Creative WebGL
- Kind / status / priority: course / creative / specialized
- Best for: Seeing production-quality visual ideas built from scratch with expert commentary.
- Description: Deep creative coding and WebGL livestreams covering Three.js, shaders, scroll effects, and modern site recreations.
- Tags: `webgl`, `three.js`, `shaders`, `video`
- URL: https://www.youtube.com/@akella_
- GitHub: https://github.com/akella
- Preview: /screenshots/yuri-artiukh.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration, learning-theory, web-experiences

### Creative Coding Club

- ID: `creative-coding-club`
- Field: GSAP and Three.js
- Kind / status / priority: course / learning / specialized
- Best for: Learning timeline-driven motion and visual frontend techniques around 3D sites.
- Description: Courses and tutorials for GSAP, Three.js, and creative frontend animation.
- Tags: `gsap`, `three.js`, `animation`, `course`
- URL: https://www.creativecodingclub.com
- GitHub: none
- Preview: /screenshots/creative-coding-club.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration, learning-theory, web-experiences

### Three.js Starter

- ID: `threejs-webpack-starter`
- Field: Starter
- Kind / status / priority: starter / learning / specialized
- Best for: Understanding how Three.js projects were organized before Vite/R3F became common defaults.
- Description: Bruno Simon's older but instructive complex Three.js project template.
- Tags: `three.js`, `starter`, `learning`, `workflow`
- URL: https://github.com/brunosimon/threejs-template-complex
- GitHub: https://github.com/brunosimon/threejs-template-complex
- Preview: /screenshots/threejs-webpack-starter.webp
- Agent routes: start-r3f-app, xr-ar-vr, learning-theory

### 3D Math Primer

- ID: `math-for-3d`
- Field: 3D math
- Kind / status / priority: course / learning / specialized
- Best for: Strengthening the math behind cameras, controls, object transforms, and physics.
- Description: Free online book about vectors, matrices, transforms, orientation, geometry, and game math.
- Tags: `math`, `3d`, `games`, `transforms`
- URL: https://gamemath.com/book/
- GitHub: none
- Preview: /screenshots/math-for-3d.webp
- Agent routes: xr-ar-vr, physics-games, learning-theory

### Red Blob Games

- ID: `red-blob-games`
- Field: Interactive algorithms
- Kind / status / priority: course / learning / specialized
- Best for: Building smarter maps, AI, terrain, and game systems around R3F visuals.
- Description: Excellent interactive explanations of pathfinding, grids, maps, procedural generation, and game algorithms.
- Tags: `algorithms`, `games`, `maps`, `interactive`
- URL: https://www.redblobgames.com
- GitHub: https://github.com/redblobgames
- Preview: /screenshots/red-blob-games.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games, data-maps-ai, learning-theory

### Easings.net

- ID: `easing-functions`
- Field: Motion reference
- Kind / status / priority: reference / learning / specialized
- Best for: Choosing animation curves intentionally instead of relying on default easing.
- Description: Visual reference for common easing functions used in UI, animation, shaders, and camera moves.
- Tags: `animation`, `easing`, `motion`, `reference`
- URL: https://easings.net
- GitHub: https://github.com/ai/easings.net
- Preview: /screenshots/easing-functions.webp
- Agent routes: shader-effects, xr-ar-vr, learning-theory, web-experiences

### Robert Penner Easing

- ID: `easings-cheat-sheet`
- Field: Motion theory
- Kind / status / priority: reference / learning / specialized
- Best for: Understanding the math behind common motion curves used in JS and GLSL.
- Description: Original easing equations reference that still underpins a lot of animation vocabulary.
- Tags: `animation`, `math`, `easing`, `reference`
- URL: https://robertpenner.com/easing/
- GitHub: none
- Preview: /screenshots/easings-cheat-sheet.webp
- Agent routes: shader-effects, xr-ar-vr, learning-theory, web-experiences

### Noise Functions

- ID: `noise-functions`
- Field: Shader theory
- Kind / status / priority: article / learning / learning
- Best for: Making materials, terrain, motion, and masks feel organic.
- Description: The Book of Shaders chapter on noise, one of the most useful ideas in procedural shader work.
- Tags: `noise`, `shaders`, `procedural`, `learning`
- URL: https://thebookofshaders.com/11/
- GitHub: https://github.com/patriciogonzalezvivo/thebookofshaders
- Preview: /screenshots/noise-functions.webp
- Agent routes: shader-effects, xr-ar-vr, data-maps-ai, learning-theory

### Ronja's Tutorials

- ID: `ronja-tutorials`
- Field: Shader learning
- Kind / status / priority: course / learning / specialized
- Best for: Learning shader concepts through approachable visual examples.
- Description: Clear shader tutorials originally focused on Unity, but full of transferable visual and math explanations.
- Tags: `shaders`, `learning`, `math`, `graphics`
- URL: https://www.ronja-tutorials.com
- GitHub: https://github.com/ronja-tutorials/ShaderTutorials
- Preview: /screenshots/ronja-tutorials.webp
- Agent routes: shader-effects, xr-ar-vr, learning-theory

### Catlike Coding

- ID: `catlikecoding`
- Field: Rendering learning
- Kind / status / priority: course / learning / specialized
- Best for: Translating strong rendering and procedural concepts into Three.js/R3F.
- Description: Deep tutorials on rendering, procedural mesh generation, noise, splines, and game math.
- Tags: `rendering`, `procedural`, `math`, `learning`
- URL: https://catlikecoding.com
- GitHub: none
- Preview: /screenshots/catlikecoding.webp
- Agent routes: start-r3f-app, xr-ar-vr, learning-theory

### Inigo Quilez YouTube

- ID: `iquilez-youtube`
- Field: Shader learning
- Kind / status / priority: course / learning / specialized
- Best for: Learning raymarching, SDFs, palettes, procedural modeling, and shader problem solving.
- Description: Video explanations from one of the most influential shader artists and demoscene educators.
- Tags: `shaders`, `raymarching`, `sdf`, `video`
- URL: https://www.youtube.com/@InigoQuilez
- GitHub: none
- Preview: /screenshots/iquilez-youtube.webp
- Agent routes: shader-effects, xr-ar-vr, learning-theory

### SIGGRAPH

- ID: `siggraph`
- Field: Graphics community
- Kind / status / priority: community / learning / learning
- Best for: Tracking the deep graphics world behind real-time web techniques.
- Description: The major computer graphics conference and community for research, production, art, and emerging techniques.
- Tags: `graphics`, `research`, `community`, `conference`
- URL: https://www.siggraph.org
- GitHub: none
- Preview: /screenshots/siggraph.webp
- Agent routes: xr-ar-vr, learning-theory

### The Realtime Conference

- ID: `the-realtime-conference`
- Field: Realtime graphics
- Kind / status / priority: community / learning / learning
- Best for: Understanding where real-time media industries are heading.
- Description: Conference and talks about real-time technologies across graphics, virtual production, games, XR, and web.
- Tags: `realtime`, `conference`, `xr`, `graphics`
- URL: https://realtimeconference.com
- GitHub: none
- Preview: /screenshots/the-realtime-conference.webp
- Agent routes: xr-ar-vr, physics-games, learning-theory

### WebGL Monthly Archive

- ID: `webgl-monthly`
- Field: WebGL reference
- Kind / status / priority: reference / learning / specialized
- Best for: Debugging when WebGL state leaks or assumptions become visible through Three.js behavior.
- Description: The WebGL state diagram is a compact reference for understanding the state machine underneath higher-level libraries.
- Tags: `webgl`, `state`, `reference`, `debug`
- URL: https://webglfundamentals.org/webgl/lessons/resources/webgl-state-diagram.html
- GitHub: https://github.com/gfxfundamentals/webgl-fundamentals
- Preview: /screenshots/webgl-monthly.webp
- Agent routes: start-r3f-app, performance-debug, xr-ar-vr, learning-theory

### Game AI Pro Online

- ID: `game-ai-pro-online`
- Field: Game AI
- Kind / status / priority: reference / learning / specialized
- Best for: Serious AI design ideas for game characters and simulations.
- Description: Free online chapters from the Game AI Pro series covering agents, tactics, steering, and decision systems.
- Tags: `game-ai`, `npc`, `steering`, `books`
- URL: https://www.gameaipro.com/
- GitHub: none
- Preview: /screenshots/game-ai-pro-online.webp
- Agent routes: xr-ar-vr, data-maps-ai, learning-theory

### Game Programming Patterns

- ID: `game-programming-patterns`
- Field: Game architecture
- Kind / status / priority: course / learning / specialized
- Best for: Architecture decisions before an R3F game grows beyond a prototype.
- Description: Free online book covering game loops, components, spatial partitioning, event queues, and more.
- Tags: `architecture`, `patterns`, `game-loop`, `ecs`
- URL: https://gameprogrammingpatterns.com/
- GitHub: https://github.com/munificent/game-programming-patterns
- Preview: /screenshots/game-programming-patterns.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games, learning-theory

### MDN Web Audio Spatialization

- ID: `mdn-web-audio-spatialization`
- Field: Spatial audio
- Kind / status / priority: course / learning / specialized
- Best for: Adding positional sound to R3F games without heavy dependencies.
- Description: Practical browser spatial audio primer using PannerNode and Web Audio.
- Tags: `audio`, `web-audio`, `panner`, `tutorial`
- URL: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics
- GitHub: https://github.com/mdn/webaudio-examples
- Preview: /screenshots/mdn-web-audio-spatialization.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games, learning-theory

### Wawa Sensei

- ID: `wawa-sensei`
- Field: R3F learning
- Kind / status / priority: course / learning / specialized
- Best for: Practical R3F game and character workflows with approachable examples.
- Description: React Three Fiber lessons and example projects with a strong game, character, and shader focus.
- Tags: `r3f`, `course`, `characters`, `games`
- URL: https://wawasensei.dev/
- GitHub: https://github.com/wass08
- Preview: /screenshots/wawa-sensei.webp
- Agent routes: start-r3f-app, xr-ar-vr, physics-games, learning-theory

### Three.js Migration Guide

- ID: `threejs-migration-guide`
- Field: Version upgrades
- Kind / status / priority: reference / core / canonical
- Best for: Upgrading R3F and Three.js projects without missing renderer, color, or API changes.
- Description: Official wiki notes for breaking changes and migration steps between Three.js releases.
- Tags: `three.js`, `migration`, `versions`, `reference`
- URL: https://github.com/mrdoob/three.js/wiki/Migration-Guide
- GitHub: https://github.com/mrdoob/three.js
- Preview: /screenshots/threejs-migration-guide.webp
- Agent routes: start-r3f-app, xr-ar-vr, learning-theory

### Three.js Forum

- ID: `threejs-forum`
- Field: Community support
- Kind / status / priority: community / core / production
- Best for: Solving real rendering, material, loader, and performance problems.
- Description: Official Three.js community forum with deep debugging threads, examples, and release discussions.
- Tags: `three.js`, `community`, `debugging`, `support`
- URL: https://discourse.threejs.org/
- GitHub: none
- Preview: /screenshots/threejs-forum.webp
- Agent routes: start-r3f-app, performance-debug, xr-ar-vr, learning-theory

### Stack Overflow three.js

- ID: `stackoverflow-threejs`
- Field: Q&A archive
- Kind / status / priority: community / learning / learning
- Best for: Finding edge-case fixes and implementation details from real user problems.
- Description: Stack Overflow tag archive for Three.js questions and practical debugging answers.
- Tags: `three.js`, `q&a`, `debugging`, `community`
- URL: https://stackoverflow.com/questions/tagged/three.js
- GitHub: none
- Preview: /screenshots/stackoverflow-threejs.webp
- Agent routes: start-r3f-app, performance-debug, xr-ar-vr, data-maps-ai, learning-theory

### Stemkoski Three.js Examples

- ID: `stemkoski-threejs`
- Field: Three.js examples
- Kind / status / priority: course / learning / specialized
- Best for: Learning older but still useful Three.js concepts in bite-size demos.
- Description: Classic collection of small Three.js examples covering materials, geometry, controls, particles, and shaders.
- Tags: `three.js`, `examples`, `learning`, `webgl`
- URL: https://stemkoski.github.io/Three.js/
- GitHub: https://github.com/stemkoski/stemkoski.github.com
- Preview: /screenshots/stemkoski-threejs.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, learning-theory

### Acko.net

- ID: `acko`
- Field: Graphics essays
- Kind / status / priority: article / learning / learning
- Best for: Deep conceptual grounding for visual math, rendering, and exploratory graphics.
- Description: Steven Wittens archive of essays and experiments on math, graphics, presentations, and WebGL.
- Tags: `graphics`, `math`, `webgl`, `essays`
- URL: https://acko.net/
- GitHub: none
- Preview: /screenshots/acko.webp
- Agent routes: xr-ar-vr, learning-theory

### Chrome WebGPU Docs

- ID: `chrome-webgpu-docs`
- Field: WebGPU learning
- Kind / status / priority: docs / learning / specialized
- Best for: Practical WebGPU setup, browser support, debugging, and feature guidance.
- Description: Chrome documentation and guides for using WebGPU in modern browsers.
- Tags: `webgpu`, `chrome`, `docs`, `browser`
- URL: https://developer.chrome.com/docs/web-platform/webgpu
- GitHub: none
- Preview: /screenshots/chrome-webgpu-docs.webp
- Agent routes: performance-debug, xr-ar-vr, learning-theory

### WebGL Academy

- ID: `webgl-academy`
- Field: WebGL course
- Kind / status / priority: course / learning / specialized
- Best for: Understanding what Three.js abstracts away and how GPU draw calls actually work.
- Description: Interactive course that teaches raw WebGL concepts step by step.
- Tags: `webgl`, `course`, `graphics`, `learning`
- URL: https://www.webglacademy.com/
- GitHub: none
- Preview: /screenshots/webgl-academy.webp
- Agent routes: start-r3f-app, xr-ar-vr, learning-theory

### PlayCanvas Examples

- ID: `playcanvas-examples`
- Field: WebGL engine examples
- Kind / status / priority: showcase / learning / learning
- Best for: Borrowing engine-level ideas and comparing patterns with Three.js/R3F.
- Description: Interactive examples for a mature browser 3D engine, covering cameras, materials, physics, UI, and rendering.
- Tags: `playcanvas`, `examples`, `webgl`, `engine`
- URL: https://playcanvas.github.io/
- GitHub: https://github.com/playcanvas/engine
- Preview: /screenshots/playcanvas-examples.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, physics-games, visual-inspiration, learning-theory

### VertexFragment

- ID: `vertexfragment`
- Field: Shader tutorials
- Kind / status / priority: course / learning / specialized
- Best for: Building shader intuition before writing custom Three.js materials.
- Description: Shader, graphics, and realtime rendering tutorials with approachable explanations.
- Tags: `shaders`, `graphics`, `tutorials`, `rendering`
- URL: https://www.vertexfragment.com/
- GitHub: none
- Preview: /screenshots/vertexfragment.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, learning-theory

### GM Shaders Mini

- ID: `gmshaders`
- Field: Shader course
- Kind / status / priority: course / learning / specialized
- Best for: Getting comfortable with shader fundamentals and procedural effects.
- Description: Friendly shader learning resource with compact lessons and visual explanations.
- Tags: `shaders`, `learning`, `graphics`, `glsl`
- URL: https://mini.gmshaders.com/
- GitHub: none
- Preview: /screenshots/gmshaders.webp
- Agent routes: shader-effects, xr-ar-vr, learning-theory

### Graphics Compendium

- ID: `graphics-compendium`
- Field: Graphics fundamentals
- Kind / status / priority: course / learning / specialized
- Best for: Building durable mental models for cameras, lighting, rasterization, and rendering.
- Description: Free computer graphics learning resource covering rendering foundations.
- Tags: `graphics`, `rendering`, `fundamentals`, `course`
- URL: https://graphicscompendium.com/
- GitHub: none
- Preview: /screenshots/graphics-compendium.webp
- Agent routes: asset-pipeline, xr-ar-vr, learning-theory

### Ray Tracing in One Weekend

- ID: `raytracing-weekend`
- Field: Rendering book
- Kind / status / priority: course / learning / specialized
- Best for: Understanding light transport concepts that inform realistic realtime rendering.
- Description: Free book series teaching ray tracing and rendering from first principles.
- Tags: `ray-tracing`, `rendering`, `graphics`, `book`
- URL: https://raytracing.github.io/
- GitHub: https://github.com/RayTracing/raytracing.github.io
- Preview: /screenshots/raytracing-weekend.webp
- Agent routes: xr-ar-vr, learning-theory

### Physically Based Rendering

- ID: `pbr-book`
- Field: Rendering book
- Kind / status / priority: reference / learning / specialized
- Best for: Deep rendering knowledge behind materials, light transport, sampling, and cameras.
- Description: Authoritative free online book on physically based rendering.
- Tags: `pbr`, `rendering`, `graphics`, `book`
- URL: https://www.pbr-book.org/
- GitHub: https://github.com/mmp/pbrt-v4
- Preview: /screenshots/pbr-book.webp
- Agent routes: shader-effects, xr-ar-vr, learning-theory

### The Algorithm Archive

- ID: `algorithm-archive`
- Field: Algorithms
- Kind / status / priority: reference / learning / specialized
- Best for: Implementing pathfinding, noise, geometry, and simulation ideas with stronger grounding.
- Description: Open algorithm reference with explanations useful for procedural and simulation work.
- Tags: `algorithms`, `procedural`, `math`, `reference`
- URL: https://www.algorithm-archive.org/
- GitHub: https://github.com/algorithm-archivists/algorithm-archive
- Preview: /screenshots/algorithm-archive.webp
- Agent routes: xr-ar-vr, learning-theory

### The Coding Train

- ID: `the-coding-train`
- Field: Creative coding education
- Kind / status / priority: course / learning / specialized
- Best for: Procedural thinking, simulation sketches, and generative ideas transferable to R3F.
- Description: Large creative coding learning archive covering p5.js, algorithms, simulations, and visual systems.
- Tags: `creative-coding`, `education`, `algorithms`, `generative`
- URL: https://thecodingtrain.com/
- GitHub: https://github.com/CodingTrain
- Preview: /screenshots/the-coding-train.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration, data-maps-ai, learning-theory

### Shaderism

- ID: `shaderism`
- Field: Shader learning
- Kind / status / priority: course / learning / specialized
- Best for: Exploring shader concepts through art-oriented examples.
- Description: Shader learning resource focused on visual experimentation and creative coding.
- Tags: `shaders`, `creative-coding`, `learning`, `glsl`
- URL: https://shaderism.com/
- GitHub: none
- Preview: /screenshots/shaderism.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration, learning-theory

### Processing Examples

- ID: `processing-examples`
- Field: Creative coding examples
- Kind / status / priority: course / learning / specialized
- Best for: Borrowing simple visual-system ideas and translating them into WebGL/R3F.
- Description: Canonical Processing examples for form, motion, interaction, image, and simulation.
- Tags: `processing`, `creative-coding`, `examples`, `education`
- URL: https://processing.org/examples/
- GitHub: https://github.com/processing/processing-docs
- Preview: /screenshots/processing-examples.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration, learning-theory

### glTF Tutorials

- ID: `gltf-tutorials`
- Field: glTF learning
- Kind / status / priority: course / core / canonical
- Best for: Understanding what is inside assets loaded by GLTFLoader and useGLTF.
- Description: Khronos tutorials explaining glTF structure, buffers, scenes, materials, skins, and animation.
- Tags: `gltf`, `assets`, `khronos`, `learning`
- URL: https://github.com/KhronosGroup/glTF-Tutorials
- GitHub: https://github.com/KhronosGroup/glTF-Tutorials
- Preview: /screenshots/gltf-tutorials.webp
- Agent routes: asset-pipeline, shader-effects, xr-ar-vr, data-maps-ai, learning-theory, web-experiences

## Showcases & Inspiration

Reference work, studios, experiments, and visual taste builders.

### pmndrs Examples

- ID: `examples-pmndrs`
- Field: Demos
- Kind / status / priority: showcase / creative / specialized
- Best for: Reverse-engineering complete scene patterns and visual polish.
- Description: Collection of polished demos from the pmndrs ecosystem showing what R3F, Drei, Rapier, and postprocessing can do together.
- Tags: `examples`, `demos`, `pmndrs`, `r3f`
- URL: https://examples.pmnd.rs
- GitHub: https://github.com/pmndrs
- Preview: /screenshots/examples-pmndrs.webp
- Agent routes: start-r3f-app, shader-effects, visual-inspiration

### Bruno Simon Portfolio

- ID: `bruno-simon`
- Field: Portfolio
- Kind / status / priority: showcase / creative / specialized
- Best for: Studying taste, interaction density, and game-like navigation in a website.
- Description: Benchmark interactive 3D portfolio that shaped many developers' idea of what a playful web experience can be.
- Tags: `portfolio`, `interactive`, `game`, `inspiration`
- URL: https://bruno-simon.com
- GitHub: none
- Preview: /screenshots/bruno-simon.webp
- Agent routes: xr-ar-vr, physics-games, visual-inspiration, web-experiences

### Awwwards WebGL

- ID: `awwwards-webgl`
- Field: Gallery
- Kind / status / priority: showcase / creative / specialized
- Best for: Art direction references and interaction patterns outside the code-library bubble.
- Description: Gallery of high-end WebGL sites across agencies, brands, product launches, and experimental storytelling.
- Tags: `gallery`, `webgl`, `websites`, `inspiration`
- URL: https://www.awwwards.com/websites/webgl/
- GitHub: none
- Preview: /screenshots/awwwards-webgl.webp
- Agent routes: xr-ar-vr, visual-inspiration, learning-theory, web-experiences

### Lusion

- ID: `lusion`
- Field: Studio
- Kind / status / priority: showcase / creative / specialized
- Best for: Seeing how far creative frontend engineering can be pushed.
- Description: Studio known for technical, art-directed WebGL, interactive brand work, and experimental web experiences.
- Tags: `studio`, `webgl`, `brand`, `inspiration`
- URL: https://lusion.co
- GitHub: https://github.com/lusionltd
- Preview: /screenshots/lusion.webp
- Agent routes: xr-ar-vr, visual-inspiration, learning-theory

### Active Theory

- ID: `active-theory`
- Field: Studio
- Kind / status / priority: showcase / creative / specialized
- Best for: High-end interaction references, not necessarily R3F-specific.
- Description: Interactive studio focused on immersive websites, installations, real-time graphics, and experience design.
- Tags: `studio`, `immersive`, `webgl`, `inspiration`
- URL: https://activetheory.net
- GitHub: none
- Preview: /screenshots/active-theory.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration, learning-theory, web-experiences

### Frontend Horse

- ID: `frontend-horse`
- Field: Community inspiration
- Kind / status / priority: community / creative / specialized
- Best for: Finding visually ambitious web work and process notes.
- Description: Creative frontend community and newsletter with frequent WebGL, animation, and delightful UI references.
- Tags: `community`, `frontend`, `creative`, `inspiration`
- URL: https://frontend.horse
- GitHub: none
- Preview: /screenshots/frontend-horse.webp
- Agent routes: visual-inspiration, learning-theory, web-experiences

### Little Workshop

- ID: `little-workshop`
- Field: Studio
- Kind / status / priority: showcase / creative / specialized
- Best for: Studying charm, interaction, and performance-aware visual polish.
- Description: Small studio known for carefully crafted interactive 3D web experiences, games, and playful product work.
- Tags: `studio`, `webgl`, `games`, `inspiration`
- URL: https://www.littleworkshop.fr
- GitHub: none
- Preview: /screenshots/little-workshop.webp
- Agent routes: performance-debug, xr-ar-vr, physics-games, visual-inspiration, learning-theory

### Unseen Studio

- ID: `unseen-studio`
- Field: Studio
- Kind / status / priority: showcase / creative / specialized
- Best for: Taste references for luxury, editorial, and brand-forward 3D websites.
- Description: Creative studio with polished motion, WebGL, brand systems, and high-end interactive site work.
- Tags: `studio`, `webgl`, `brand`, `inspiration`
- URL: https://unseen.co
- GitHub: none
- Preview: /screenshots/unseen-studio.webp
- Agent routes: xr-ar-vr, visual-inspiration, learning-theory, web-experiences

### Resn

- ID: `resn`
- Field: Studio
- Kind / status / priority: showcase / creative / specialized
- Best for: Finding references that feel less template-like and more authored.
- Description: Long-running interactive studio with experimental, surreal, and technically ambitious web work.
- Tags: `studio`, `interactive`, `webgl`, `inspiration`
- URL: https://resn.co.nz
- GitHub: none
- Preview: /screenshots/resn.webp
- Agent routes: visual-inspiration, learning-theory

### Dogstudio

- ID: `dogstudio`
- Field: Studio
- Kind / status / priority: showcase / creative / specialized
- Best for: Studying pacing, transitions, and brand storytelling around interactive visuals.
- Description: Digital studio with a strong history of motion-rich, art-directed, interactive web experiences.
- Tags: `studio`, `motion`, `websites`, `inspiration`
- URL: https://dogstudio.co
- GitHub: none
- Preview: /screenshots/dogstudio.webp
- Agent routes: xr-ar-vr, visual-inspiration, web-experiences

### Hello Monday

- ID: `hello-monday`
- Field: Studio
- Kind / status / priority: showcase / creative / specialized
- Best for: Learning how high-end digital experiences balance storytelling and usability.
- Description: Experience design studio producing polished interactive work, games, installations, and brand systems.
- Tags: `studio`, `interactive`, `brand`, `inspiration`
- URL: https://www.hellomonday.com
- GitHub: none
- Preview: /screenshots/hello-monday.webp
- Agent routes: xr-ar-vr, physics-games, visual-inspiration, learning-theory

### Nicky Case

- ID: `nicky-case`
- Field: Explorable explanations
- Kind / status / priority: showcase / creative / specialized
- Best for: Designing meaningful interaction, not just impressive rendering.
- Description: Interactive explainers that demonstrate how systems, simulations, and visual storytelling can teach complex ideas.
- Tags: `interactive`, `explainers`, `simulation`, `inspiration`
- URL: https://ncase.me
- GitHub: https://github.com/ncase
- Preview: /screenshots/nicky-case.webp
- Agent routes: visual-inspiration, data-maps-ai

### Digital Art Museum

- ID: `digital-art-museum`
- Field: Art history
- Kind / status / priority: reference / creative / specialized
- Best for: Understanding the lineage behind generative and computational art.
- Description: Archive and context for digital art history, useful for grounding creative coding beyond current web trends.
- Tags: `digital art`, `history`, `creative coding`, `reference`
- URL: https://dam.org
- GitHub: none
- Preview: /screenshots/digital-art-museum.webp
- Agent routes: xr-ar-vr, visual-inspiration

### CreativeApplications.Net

- ID: `new-aesthetic`
- Field: Creative technology
- Kind / status / priority: community / creative / specialized
- Best for: Finding artistic context and references beyond frontend portfolios.
- Description: Long-running publication covering creative coding, installations, generative art, data art, and toolmaking.
- Tags: `creative technology`, `art`, `installations`, `inspiration`
- URL: https://www.creativeapplications.net
- GitHub: none
- Preview: /screenshots/new-aesthetic.webp
- Agent routes: xr-ar-vr, visual-inspiration, data-maps-ai, web-experiences

### Patricio Gonzalez Vivo

- ID: `patricio-gonzalez-vivo`
- Field: Shader artist
- Kind / status / priority: showcase / creative / specialized
- Best for: Studying the bridge between poetic visuals, open tools, and shader education.
- Description: Artist, educator, and toolmaker behind The Book of Shaders and LYGIA.
- Tags: `artist`, `shaders`, `creative coding`, `learning`
- URL: https://patriciogonzalezvivo.com
- GitHub: https://github.com/patriciogonzalezvivo
- Preview: /screenshots/patricio-gonzalez-vivo.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration, learning-theory

### Matt DesLauriers

- ID: `matt-deslauriers`
- Field: Generative artist
- Kind / status / priority: showcase / creative / specialized
- Best for: Studying elegant generative systems, art tooling, and code-as-art discipline.
- Description: Generative artist and toolmaker with extensive creative coding, WebGL, and plotting work.
- Tags: `artist`, `generative`, `webgl`, `creative coding`
- URL: https://mattdesl.com
- GitHub: https://github.com/mattdesl
- Preview: /screenshots/matt-deslauriers.webp
- Agent routes: xr-ar-vr, visual-inspiration, learning-theory

### Tim Holman

- ID: `tim-holman`
- Field: Creative technologist
- Kind / status / priority: showcase / creative / specialized
- Best for: Remembering that small interactions can be more memorable than huge scenes.
- Description: Playful web experiments, tiny tools, and creative frontend projects.
- Tags: `creative coding`, `experiments`, `frontend`, `playful`
- URL: https://tholman.com
- GitHub: https://github.com/tholman
- Preview: /screenshots/tim-holman.webp
- Agent routes: visual-inspiration

### David Li

- ID: `david-li`
- Field: Interactive simulations
- Kind / status / priority: showcase / creative / specialized
- Best for: Studying direct-manipulation interaction with visual simulations.
- Description: Interactive web experiments, simulations, and playful graphics systems.
- Tags: `simulation`, `interactive`, `webgl`, `inspiration`
- URL: https://david.li
- GitHub: https://github.com/dli
- Preview: /screenshots/david-li.webp
- Agent routes: visual-inspiration, learning-theory

### George Francis

- ID: `george-francis`
- Field: Generative design
- Kind / status / priority: showcase / creative / specialized
- Best for: Learning expressive generative ideas that can move between SVG, Canvas, and WebGL.
- Description: Generative art, shaders, creative coding tutorials, and approachable visual experiments.
- Tags: `generative`, `creative coding`, `shaders`, `artist`
- URL: https://georgefrancis.dev
- GitHub: https://github.com/georgedoescode
- Preview: /screenshots/george-francis.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration, learning-theory

### Anderson Mancini

- ID: `anderson-mancini`
- Field: R3F creator
- Kind / status / priority: showcase / creative / specialized
- Best for: Seeing practical R3F scenes with strong visual polish and accessible source ideas.
- Description: React Three Fiber demos, experiments, and polished interactive UI/3D examples.
- Tags: `r3f`, `demos`, `creative`, `three.js`
- URL: https://andersonmancini.dev
- GitHub: https://github.com/ektogamat
- Preview: /screenshots/anderson-mancini.webp
- Agent routes: start-r3f-app, visual-inspiration

### Paul Henschel

- ID: `paul-henschel`
- Field: R3F ecosystem
- Kind / status / priority: showcase / core / production
- Best for: Following the source of many idiomatic R3F patterns and experiments.
- Description: Creator behind React Three Fiber and many pmndrs libraries, with a deep trail of demos and ecosystem work.
- Tags: `r3f`, `pmndrs`, `ecosystem`, `demos`
- URL: https://twitter.com/0xca0a
- GitHub: https://github.com/drcmda
- Preview: /screenshots/paul-henschel.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration, data-maps-ai

### Hendrik Mans

- ID: `hmans`
- Field: R3F tools
- Kind / status / priority: showcase / creative / specialized
- Best for: Studying small, sharp tools for games, shaders, and React Three patterns.
- Description: Developer behind Miniplex, shader-composer, and many R3F/game-oriented experiments.
- Tags: `r3f`, `games`, `shaders`, `tools`
- URL: https://github.com/hmans
- GitHub: https://github.com/hmans
- Preview: /screenshots/hmans.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, physics-games, visual-inspiration

### pmndrs Market

- ID: `pmndrs-market`
- Field: R3F demos
- Kind / status / priority: showcase / creative / specialized
- Best for: Finding source-backed R3F inspiration with modern pmndrs patterns.
- Description: pmndrs demo and example marketplace for scenes, components, and ecosystem experiments.
- Tags: `pmndrs`, `r3f`, `examples`, `showcase`
- URL: https://market.pmnd.rs
- GitHub: https://github.com/pmndrs
- Preview: /screenshots/pmndrs-market.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration

### Aerotwist

- ID: `aerotwist`
- Field: Frontend graphics
- Kind / status / priority: article / learning / learning
- Best for: Older but still useful thinking on performant visual frontend work.
- Description: Paul Lewis's archive of web animation, performance, Canvas, WebGL, and interaction writing.
- Tags: `performance`, `webgl`, `animation`, `articles`
- URL: https://aerotwist.com
- GitHub: https://github.com/paullewis
- Preview: /screenshots/aerotwist.webp
- Agent routes: performance-debug, xr-ar-vr, visual-inspiration, learning-theory, web-experiences

### Robin Delaporte

- ID: `robin-dela`
- Field: Creative developer
- Kind / status / priority: showcase / creative / specialized
- Best for: Studying refined interaction and visual composition in modern portfolios.
- Description: Creative developer with polished WebGL, animation, and interactive site work.
- Tags: `portfolio`, `webgl`, `creative developer`, `inspiration`
- URL: https://robindelaporte.fr
- GitHub: https://github.com/robin-dela
- Preview: /screenshots/robin-dela.webp
- Agent routes: visual-inspiration, learning-theory, web-experiences

### Aristide Benoist

- ID: `aristide-benoist`
- Field: Creative developer
- Kind / status / priority: showcase / creative / specialized
- Best for: Taste reference for transitions, pacing, and polished digital craft.
- Description: High-end creative development portfolio with strong motion, typography, and interactive web sensibility.
- Tags: `portfolio`, `animation`, `websites`, `inspiration`
- URL: https://aristidebenoist.com
- GitHub: https://github.com/AristideB
- Preview: /screenshots/aristide-benoist.webp
- Agent routes: xr-ar-vr, visual-inspiration, web-experiences

### Zajno

- ID: `zajno`
- Field: Studio
- Kind / status / priority: showcase / creative / specialized
- Best for: Brand and product references for polished visual systems.
- Description: Digital studio known for visually rich websites, motion, 3D, and interactive product storytelling.
- Tags: `studio`, `websites`, `3d`, `inspiration`
- URL: https://zajno.com
- GitHub: none
- Preview: /screenshots/zajno.webp
- Agent routes: visual-inspiration, web-experiences

### Immersive Garden

- ID: `immersive-garden`
- Field: Studio
- Kind / status / priority: showcase / creative / specialized
- Best for: Studying production polish, interaction detail, and brand-forward web 3D.
- Description: Award-winning digital production studio with immersive, animated, and WebGL-heavy experiences.
- Tags: `studio`, `webgl`, `brand`, `inspiration`
- URL: https://immersive-g.com
- GitHub: none
- Preview: /screenshots/immersive-garden.webp
- Agent routes: xr-ar-vr, visual-inspiration, data-maps-ai, learning-theory

### makemepulse

- ID: `makemepulse`
- Field: Studio
- Kind / status / priority: showcase / creative / specialized
- Best for: References for experiential storytelling and technically ambitious frontend production.
- Description: Interactive studio creating immersive websites, installations, narrative experiences, and brand work.
- Tags: `studio`, `interactive`, `webgl`, `storytelling`
- URL: https://www.makemepulse.com
- GitHub: none
- Preview: /screenshots/makemepulse.webp
- Agent routes: xr-ar-vr, visual-inspiration, learning-theory, web-experiences

### Merci-Michel

- ID: `merci-michel`
- Field: Studio
- Kind / status / priority: showcase / creative / specialized
- Best for: Game-like web references with charm and production craft.
- Description: French digital studio known for interactive experiences, games, and playful brand work.
- Tags: `studio`, `games`, `interactive`, `inspiration`
- URL: https://www.merci-michel.com
- GitHub: none
- Preview: /screenshots/merci-michel.webp
- Agent routes: xr-ar-vr, physics-games, visual-inspiration

### UNIT9

- ID: `unit9`
- Field: Production studio
- Kind / status / priority: showcase / creative / specialized
- Best for: Seeing how web, XR, installation, and brand tech converge in large-scale projects.
- Description: Global production studio working across interactive, experiential, AR, VR, installations, and creative technology.
- Tags: `studio`, `xr`, `installations`, `creative technology`
- URL: https://www.unit9.com
- GitHub: none
- Preview: /screenshots/unit9.webp
- Agent routes: xr-ar-vr, visual-inspiration

### FIELD.IO

- ID: `field-io`
- Field: Digital art studio
- Kind / status / priority: showcase / creative / specialized
- Best for: References for serious computational art and brand-scale generative systems.
- Description: Creative studio working across generative art, real-time systems, installations, and visual identities.
- Tags: `generative`, `studio`, `installations`, `art`
- URL: https://field.io
- GitHub: none
- Preview: /screenshots/field-io.webp
- Agent routes: xr-ar-vr, visual-inspiration

### onformative

- ID: `onformative`
- Field: Generative studio
- Kind / status / priority: showcase / creative / specialized
- Best for: Studying tasteful generative systems that go beyond demo aesthetics.
- Description: Studio for generative design, data-driven art, real-time visuals, and computational brand systems.
- Tags: `generative`, `studio`, `data`, `art`
- URL: https://onformative.com
- GitHub: none
- Preview: /screenshots/onformative.webp
- Agent routes: xr-ar-vr, visual-inspiration, data-maps-ai

### ManvsMachine

- ID: `manvs-machine`
- Field: Motion studio
- Kind / status / priority: showcase / creative / specialized
- Best for: Visual references for material, lighting, rhythm, and premium product motion.
- Description: Motion and design studio with high-end 3D art direction and brand storytelling.
- Tags: `motion`, `3d`, `brand`, `inspiration`
- URL: https://manvsmachine.co.uk
- GitHub: none
- Preview: /screenshots/manvs-machine.webp
- Agent routes: xr-ar-vr, visual-inspiration

### Beeple

- ID: `beeple-crap`
- Field: Digital art
- Kind / status / priority: showcase / creative / specialized
- Best for: Art direction, composition, scale, and sci-fi/graphic reference for 3D scenes.
- Description: Massive digital art archive and daily render practice, useful as a reference for visual ambition and worldbuilding.
- Tags: `digital art`, `3d`, `composition`, `inspiration`
- URL: https://www.beeple-crap.com
- GitHub: none
- Preview: /screenshots/beeple-crap.webp
- Agent routes: xr-ar-vr, visual-inspiration, data-maps-ai

### R3F Cheers

- ID: `r3f-cheers`
- Field: R3F demo
- Kind / status / priority: showcase / creative / specialized
- Best for: Reference for small, delightful R3F experiences with strong presentation.
- Description: Polished React Three Fiber demo scene with characterful motion and interaction.
- Tags: `r3f`, `demo`, `motion`, `interaction`
- URL: https://r3f-cheers.netlify.app/
- GitHub: none
- Preview: /screenshots/r3f-cheers.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration

### Hoverstat.es

- ID: `hoverstates`
- Field: Website archive
- Kind / status / priority: showcase / creative / specialized
- Best for: Finding motion, layout, and interaction references before building a WebGL site.
- Description: Curated archive of interaction-heavy, art-directed websites with strong visual references.
- Tags: `inspiration`, `websites`, `interaction`, `archive`
- URL: https://www.hoverstat.es/
- GitHub: none
- Preview: /screenshots/hoverstates.webp
- Agent routes: xr-ar-vr, visual-inspiration, learning-theory, web-experiences

### Refs Gallery

- ID: `refs-gallery`
- Field: Reference gallery
- Kind / status / priority: showcase / creative / specialized
- Best for: Building taste boards for premium 3D and motion-led web experiences.
- Description: Visual reference gallery for polished digital design, web art, and interaction patterns.
- Tags: `references`, `design`, `websites`, `inspiration`
- URL: https://refs.gallery/
- GitHub: none
- Preview: /screenshots/refs-gallery.webp
- Agent routes: xr-ar-vr, visual-inspiration, web-experiences

### Godly

- ID: `godly-website`
- Field: Website inspiration
- Kind / status / priority: showcase / creative / specialized
- Best for: Scanning current visual directions for product, agency, and immersive sites.
- Description: Curated gallery of high-end web design and interactive sites.
- Tags: `inspiration`, `web-design`, `gallery`, `creative`
- URL: https://godly.website/
- GitHub: none
- Preview: /screenshots/godly-website.webp
- Agent routes: visual-inspiration

### The FWA

- ID: `the-fwa`
- Field: Award archive
- Kind / status / priority: showcase / creative / specialized
- Best for: Researching best-in-class interactive work and agency-level production values.
- Description: Long-running award archive for experimental, polished, and production-grade digital experiences.
- Tags: `awards`, `webgl`, `interactive`, `archive`
- URL: https://thefwa.com/
- GitHub: none
- Preview: /screenshots/the-fwa.webp
- Agent routes: xr-ar-vr, visual-inspiration, learning-theory

### GSAP Showcase

- ID: `gsap-showcase`
- Field: Motion showcase
- Kind / status / priority: showcase / creative / specialized
- Best for: Studying motion language that pairs well with R3F, ScrollTrigger, and editorial 3D sites.
- Description: Showcase of advanced web animation and scroll-driven interaction work.
- Tags: `animation`, `motion`, `gsap`, `websites`
- URL: https://gsap.com/showcase/
- GitHub: none
- Preview: /screenshots/gsap-showcase.webp
- Agent routes: start-r3f-app, visual-inspiration, data-maps-ai, web-experiences

### Chrome Experiments

- ID: `chrome-experiments`
- Field: Experiment archive
- Kind / status / priority: showcase / creative / specialized
- Best for: Finding durable ideas from the experimental web canon.
- Description: Historic and ongoing archive of browser experiments, many using WebGL, Web Audio, and interactive graphics.
- Tags: `experiments`, `webgl`, `google`, `archive`
- URL: https://experiments.withgoogle.com/collection/chrome
- GitHub: none
- Preview: /screenshots/chrome-experiments.webp
- Agent routes: xr-ar-vr, visual-inspiration, learning-theory

### HAS Studio

- ID: `has-studio`
- Field: Creative studio
- Kind / status / priority: showcase / creative / specialized
- Best for: Reference for polished interactive direction and studio-grade execution.
- Description: Creative technology studio with refined WebGL, motion, and digital product work.
- Tags: `studio`, `webgl`, `creative-tech`, `portfolio`
- URL: https://has.studio/
- GitHub: none
- Preview: /screenshots/has-studio.webp
- Agent routes: visual-inspiration, learning-theory, web-experiences

### 14islands

- ID: `fourteen-islands`
- Field: Creative studio
- Kind / status / priority: showcase / creative / specialized
- Best for: Studying how 3D details can support brand and product stories.
- Description: Studio known for immersive websites, WebGL craft, and experimental interfaces.
- Tags: `studio`, `webgl`, `r3f`, `interactive`
- URL: https://www.14islands.com/
- GitHub: none
- Preview: /screenshots/fourteen-islands.webp
- Agent routes: start-r3f-app, visual-inspiration, data-maps-ai, learning-theory, web-experiences

### Monogrid

- ID: `monogrid`
- Field: Creative studio
- Kind / status / priority: showcase / creative / specialized
- Best for: Reference for brand worlds, product experiences, and cinematic web presentation.
- Description: Interactive studio producing high-end 3D, WebGL, and experiential digital work.
- Tags: `studio`, `3d`, `webgl`, `experiential`
- URL: https://www.monogrid.com/
- GitHub: none
- Preview: /screenshots/monogrid.webp
- Agent routes: visual-inspiration, learning-theory

### B-Reel

- ID: `b-reel`
- Field: Creative studio
- Kind / status / priority: showcase / creative / specialized
- Best for: Understanding how interactive 3D fits broader campaign and brand ecosystems.
- Description: Global creative studio with strong interactive, film, product, and campaign work.
- Tags: `studio`, `interactive`, `brand`, `creative-tech`
- URL: https://www.b-reel.com/
- GitHub: none
- Preview: /screenshots/b-reel.webp
- Agent routes: visual-inspiration, data-maps-ai

### FutureDeluxe

- ID: `future-deluxe`
- Field: Design studio
- Kind / status / priority: showcase / creative / specialized
- Best for: Art direction, material taste, and motion references for product-led 3D sites.
- Description: Design and moving-image studio with premium visual systems, CGI, and interactive references.
- Tags: `studio`, `cgi`, `motion`, `art-direction`
- URL: https://futuredeluxe.com/
- GitHub: none
- Preview: /screenshots/future-deluxe.webp
- Agent routes: xr-ar-vr, visual-inspiration

### Rally Interactive

- ID: `rally-interactive`
- Field: Interactive studio
- Kind / status / priority: showcase / creative / specialized
- Best for: Studying refined interaction pacing and production-quality polish.
- Description: Studio portfolio with strong interaction, product, and experiential web work.
- Tags: `studio`, `interaction`, `websites`, `portfolio`
- URL: https://rallyinteractive.com/
- GitHub: none
- Preview: /screenshots/rally-interactive.webp
- Agent routes: visual-inspiration, web-experiences

### darkroom.engineering

- ID: `darkroom-engineering`
- Field: Development studio
- Kind / status / priority: showcase / creative / specialized
- Best for: Reference for crisp implementation and modern creative development craft.
- Description: Engineering-led creative studio with high-end motion, WebGL, and interaction work.
- Tags: `studio`, `engineering`, `webgl`, `motion`
- URL: https://darkroom.engineering/
- GitHub: none
- Preview: /screenshots/darkroom-engineering.webp
- Agent routes: xr-ar-vr, visual-inspiration, learning-theory

### Rezo Zero

- ID: `rezo-zero`
- Field: Creative studio
- Kind / status / priority: showcase / creative / specialized
- Best for: Editorial interaction, portfolio language, and tasteful 3D integration.
- Description: French creative studio with polished interactive, editorial, and WebGL-forward websites.
- Tags: `studio`, `editorial`, `webgl`, `portfolio`
- URL: https://www.rezo-zero.com/
- GitHub: none
- Preview: /screenshots/rezo-zero.webp
- Agent routes: xr-ar-vr, visual-inspiration, learning-theory, web-experiences

### Locomotive

- ID: `locomotive`
- Field: Digital agency
- Kind / status / priority: showcase / creative / specialized
- Best for: Pairing 3D moments with dense editorial and brand systems.
- Description: Award-winning digital agency with rich scrolling, motion, and interactive web experiences.
- Tags: `agency`, `scroll`, `motion`, `interactive`
- URL: https://locomotive.ca/
- GitHub: none
- Preview: /screenshots/locomotive.webp
- Agent routes: xr-ar-vr, visual-inspiration, data-maps-ai, web-experiences

### ykob Three.js Experiments

- ID: `ykob-threejs-experiments`
- Field: Three.js experiments
- Kind / status / priority: showcase / creative / specialized
- Best for: Compact references for procedural motion and visual coding ideas.
- Description: Archive of elegant Three.js experiments, particles, interactions, and shader studies.
- Tags: `three.js`, `experiments`, `particles`, `shaders`
- URL: https://ykob.github.io/
- GitHub: https://github.com/ykob
- Preview: /screenshots/ykob-threejs-experiments.webp
- Agent routes: start-r3f-app, shader-effects, xr-ar-vr, visual-inspiration

### Clicktorelease

- ID: `clicktorelease`
- Field: WebGL experiments
- Kind / status / priority: showcase / creative / specialized
- Best for: Studying practical creative coding patterns from early and modern WebGL work.
- Description: Jaume Sanchez Elias archive of influential WebGL, Three.js, and interactive graphics experiments.
- Tags: `webgl`, `three.js`, `experiments`, `creative-coding`
- URL: https://www.clicktorelease.com/
- GitHub: https://github.com/spite
- Preview: /screenshots/clicktorelease.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration, learning-theory

### Spite Codevember 2021

- ID: `spite-codevember-2021`
- Field: Daily WebGL sketches
- Kind / status / priority: showcase / creative / specialized
- Best for: Quick visual idea mining and compact implementation references.
- Description: Daily creative WebGL sketch collection with shader, particle, geometry, and postprocessing ideas.
- Tags: `codevember`, `webgl`, `sketches`, `shaders`
- URL: https://spite.github.io/codevember-2021/
- GitHub: https://github.com/spite/codevember-2021
- Preview: /screenshots/spite-codevember-2021.webp
- Agent routes: shader-effects, xr-ar-vr, visual-inspiration, data-maps-ai, learning-theory

### Tim Rodenbroeker

- ID: `tim-rodenbroeker`
- Field: Creative coding educator
- Kind / status / priority: showcase / creative / specialized
- Best for: Generative design taste, teaching references, and procedural visual language.
- Description: Artist and educator focused on generative design, creative coding, and visual systems.
- Tags: `generative`, `education`, `creative-coding`, `design`
- URL: https://timrodenbroeker.de/
- GitHub: none
- Preview: /screenshots/tim-rodenbroeker.webp
- Agent routes: xr-ar-vr, visual-inspiration

### Inconvergent

- ID: `inconvergent`
- Field: Generative art
- Kind / status / priority: showcase / creative / specialized
- Best for: Deep visual ideas for procedural geometry and algorithmic drawing.
- Description: Anders Hoff archive of generative algorithms, plotted forms, and computational aesthetics.
- Tags: `generative-art`, `algorithms`, `procedural`, `drawing`
- URL: https://inconvergent.net/
- GitHub: none
- Preview: /screenshots/inconvergent.webp
- Agent routes: xr-ar-vr, visual-inspiration

### Raven Kwok

- ID: `raven-kwok`
- Field: Generative art
- Kind / status / priority: showcase / creative / specialized
- Best for: High-density procedural motion and installation-scale visual references.
- Description: Artist portfolio of algorithmic visuals, music videos, installations, and generative systems.
- Tags: `generative-art`, `motion`, `installation`, `visuals`
- URL: https://ravenkwok.com/
- GitHub: none
- Preview: /screenshots/raven-kwok.webp
- Agent routes: xr-ar-vr, visual-inspiration, web-experiences

### Nicolas Barradeau

- ID: `nicolas-barradeau`
- Field: Creative coding
- Kind / status / priority: showcase / creative / specialized
- Best for: Mining elegant code-art ideas and small Three.js experiments.
- Description: Artist and developer archive of WebGL, procedural geometry, and graphics experiments.
- Tags: `creative-coding`, `webgl`, `experiments`, `generative`
- URL: https://barradeau.com/
- GitHub: https://github.com/nicoptere
- Preview: /screenshots/nicolas-barradeau.webp
- Agent routes: start-r3f-app, xr-ar-vr, visual-inspiration, learning-theory

### Makio135

- ID: `makio135`
- Field: Interactive experiments
- Kind / status / priority: showcase / creative / specialized
- Best for: Small interaction ideas and lively visual treatments.
- Description: Interactive developer portfolio and experiments with WebGL, particles, and playful motion.
- Tags: `webgl`, `experiments`, `particles`, `portfolio`
- URL: https://makio135.com/
- GitHub: https://github.com/makio135
- Preview: /screenshots/makio135.webp
- Agent routes: xr-ar-vr, visual-inspiration, learning-theory, web-experiences

### Marpi Studio

- ID: `marpi-studio`
- Field: Interactive art
- Kind / status / priority: showcase / creative / specialized
- Best for: Playful realtime visuals, particle worlds, and installation-grade interaction.
- Description: Marpi's interactive art, installations, experiments, and 3D web work.
- Tags: `interactive-art`, `particles`, `webgl`, `installation`
- URL: https://marpi.studio/
- GitHub: https://github.com/marpi
- Preview: /screenshots/marpi-studio.webp
- Agent routes: xr-ar-vr, visual-inspiration, learning-theory

### Joshua Davis

- ID: `joshua-davis`
- Field: Generative art
- Kind / status / priority: showcase / creative / specialized
- Best for: Historical and contemporary generative design references.
- Description: Pioneer of generative and computational design with a long-running visual archive.
- Tags: `generative-art`, `design`, `procedural`, `history`
- URL: https://joshuadavis.com/
- GitHub: none
- Preview: /screenshots/joshua-davis.webp
- Agent routes: xr-ar-vr, visual-inspiration

### Land Lines

- ID: `land-lines`
- Field: Interactive experiment
- Kind / status / priority: showcase / creative / specialized
- Best for: Reference for data, interaction, and visual search concepts.
- Description: Google Chrome Experiment that lets users draw gestures to explore satellite imagery.
- Tags: `google`, `maps`, `interaction`, `experiment`
- URL: https://lines.chromeexperiments.com/
- GitHub: none
- Preview: /screenshots/land-lines.webp
- Agent routes: xr-ar-vr, visual-inspiration, data-maps-ai

## Data, Maps & AI

Globes, maps, splats, generated assets, and spatial data.

### react-globe.gl

- ID: `react-globe-gl`
- Field: Globe data viz
- Kind / status / priority: library / production / production
- Best for: Fast spatial data visualization without building a globe engine from scratch.
- Description: React component for Three.js-powered globes with arcs, points, polygons, labels, tiles, heatmaps, and custom layers.
- Tags: `data viz`, `globe`, `maps`, `three.js`
- URL: https://vasturiano.github.io/react-globe.gl/
- GitHub: https://github.com/vasturiano/react-globe.gl
- Preview: /screenshots/react-globe-gl.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai

### deck.gl

- ID: `deck-gl`
- Field: Data visualization
- Kind / status / priority: library / production / production
- Best for: When the problem is massive data rendering more than scene composition.
- Description: GPU-powered visualization framework for large-scale geospatial and non-geospatial data, with React integration.
- Tags: `data viz`, `maps`, `webgl`, `react`
- URL: https://deck.gl
- GitHub: https://github.com/visgl/deck.gl
- Preview: /screenshots/deck-gl.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai, learning-theory

### three-geo

- ID: `three-geo`
- Field: Terrain
- Kind / status / priority: library / production / production
- Best for: Terrain visualization and geographic context inside R3F.
- Description: Terrain generation for Three.js from geographic data, useful for map-like 3D scenes and topographic experiments.
- Tags: `terrain`, `maps`, `geography`, `three.js`
- URL: https://github.com/w3reality/three-geo
- GitHub: https://github.com/w3reality/three-geo
- Preview: /screenshots/three-geo.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai

### Drei Splat

- ID: `drei-splat`
- Field: Gaussian splats
- Kind / status / priority: library / creative / specialized
- Best for: Showing scan-like scenes, captures, and spatial memories inside a React app.
- Description: Drei abstraction for rendering Gaussian splat scenes in R3F, useful for captured real-world spaces and AI-era 3D assets.
- Tags: `splats`, `capture`, `3d scan`, `drei`
- URL: https://drei.docs.pmnd.rs/abstractions/splat
- GitHub: https://github.com/pmndrs/drei
- Preview: /screenshots/drei-splat.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, visual-inspiration, data-maps-ai

### Spark

- ID: `sparkjs`
- Field: Gaussian splats
- Kind / status / priority: library / creative / specialized
- Best for: Exploring high-fidelity captured scenes and new spatial media formats.
- Description: Renderer and tooling for Gaussian splats on the web, useful context for emerging R3F capture workflows.
- Tags: `splats`, `3d capture`, `renderer`, `webgl`
- URL: https://sparkjs.dev
- GitHub: https://github.com/sparkjsdev/spark
- Preview: /screenshots/sparkjs.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, visual-inspiration, data-maps-ai, learning-theory

### Luma Genie

- ID: `luma-genie`
- Field: Generated 3D
- Kind / status / priority: tool / experimental / experimental
- Best for: Early ideation before moving through glTF Transform, Blender, and performance checks.
- Description: AI-generated 3D asset source. Useful as a fast prototyping input, but assets still need optimization and art review.
- Tags: `ai`, `3d assets`, `prototype`, `gltf`
- URL: https://lumalabs.ai/genie
- GitHub: none
- Preview: /screenshots/luma-genie.webp
- Agent routes: asset-pipeline, performance-debug, xr-ar-vr, data-maps-ai

### Blockade Labs Skybox

- ID: `blockade-skybox`
- Field: Generated environments
- Kind / status / priority: tool / creative / specialized
- Best for: Quick mood exploration for XR prototypes, worlds, and R3F scene backgrounds.
- Description: AI skybox generator for concepting environment maps and immersive backdrops.
- Tags: `ai`, `skybox`, `environment`, `xr`
- URL: https://skybox.blockadelabs.com
- GitHub: none
- Preview: /screenshots/blockade-skybox.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, visual-inspiration, data-maps-ai

### Mapbox GL JS

- ID: `mapbox-gl-js`
- Field: Maps
- Kind / status / priority: library / production / production
- Best for: Combining R3F data visuals with serious mapping products and location context.
- Description: WebGL map renderer and ecosystem for basemaps, layers, terrain, custom overlays, and geospatial interfaces.
- Tags: `maps`, `webgl`, `geospatial`, `data viz`
- URL: https://docs.mapbox.com/mapbox-gl-js/
- GitHub: https://github.com/mapbox/mapbox-gl-js
- Preview: /screenshots/mapbox-gl-js.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai, learning-theory

### MapLibre GL JS

- ID: `maplibre-gl-js`
- Field: Maps
- Kind / status / priority: library / production / production
- Best for: Open map stacks where vendor lock-in or license constraints matter.
- Description: Open-source WebGL map renderer forked from Mapbox GL JS, widely used for open geospatial web applications.
- Tags: `maps`, `webgl`, `open source`, `geospatial`
- URL: https://maplibre.org/maplibre-gl-js/docs/
- GitHub: https://github.com/maplibre/maplibre-gl-js
- Preview: /screenshots/maplibre-gl-js.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai, learning-theory

### react-map-gl

- ID: `react-map-gl`
- Field: React maps
- Kind / status / priority: library / production / production
- Best for: React app maps that can coordinate with deck.gl and R3F overlays.
- Description: React wrapper for Mapbox GL JS and MapLibre GL JS from the vis.gl ecosystem.
- Tags: `react`, `maps`, `mapbox`, `maplibre`
- URL: https://visgl.github.io/react-map-gl/
- GitHub: https://github.com/visgl/react-map-gl
- Preview: /screenshots/react-map-gl.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai

### kepler.gl

- ID: `kepler-gl`
- Field: Geospatial analysis
- Kind / status / priority: tool / production / production
- Best for: Understanding high-density map visualization patterns before building custom 3D layers.
- Description: Open-source geospatial analysis tool for large-scale location data, powered by deck.gl.
- Tags: `maps`, `data viz`, `geospatial`, `deck.gl`
- URL: https://kepler.gl
- GitHub: https://github.com/keplergl/kepler.gl
- Preview: /screenshots/kepler-gl.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai

### CesiumJS

- ID: `cesiumjs`
- Field: 3D geospatial
- Kind / status / priority: library / production / production
- Best for: Comparing R3F map/globe ideas with a purpose-built geospatial engine.
- Description: 3D geospatial engine for globes, terrain, imagery, 3D Tiles, time-dynamic data, and large spatial scenes.
- Tags: `geospatial`, `globe`, `3d tiles`, `terrain`
- URL: https://cesium.com/platform/cesiumjs/
- GitHub: https://github.com/CesiumGS/cesium
- Preview: /screenshots/cesiumjs.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai

### 3d-tiles-renderer

- ID: `3d-tiles-renderer`
- Field: 3D Tiles
- Kind / status / priority: library / production / production
- Best for: Large environments and geospatial scenes inside Three.js or R3F.
- Description: Renderer for OGC 3D Tiles in Three.js, enabling massive tiled 3D geospatial and photogrammetry datasets.
- Tags: `3d tiles`, `geospatial`, `three.js`, `streaming`
- URL: https://github.com/NASA-AMMOS/3DTilesRendererJS
- GitHub: https://github.com/NASA-AMMOS/3DTilesRendererJS
- Preview: /screenshots/3d-tiles-renderer.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai

### Potree

- ID: `potree`
- Field: Point clouds
- Kind / status / priority: library / production / production
- Best for: Understanding point-cloud interaction patterns and level-of-detail streaming.
- Description: WebGL renderer for large point clouds, useful context for scan data, LiDAR, and heavy spatial visualization.
- Tags: `point cloud`, `lidar`, `webgl`, `data viz`
- URL: https://potree.org
- GitHub: https://github.com/potree/potree
- Preview: /screenshots/potree.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai, learning-theory

### plas.io

- ID: `plas-io`
- Field: Point clouds
- Kind / status / priority: tool / production / production
- Best for: Checking LiDAR files and thinking through point-cloud UI.
- Description: Browser point-cloud viewer for LAS/LAZ data, useful as a reference for spatial data inspection.
- Tags: `point cloud`, `lidar`, `viewer`, `webgl`
- URL: https://plas.io
- GitHub: https://github.com/verma/plasio
- Preview: /screenshots/plas-io.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai, learning-theory

### TensorFlow.js

- ID: `tensorflow-js`
- Field: ML in browser
- Kind / status / priority: library / production / production
- Best for: Computer vision or ML-enhanced R3F experiences that run client-side.
- Description: Machine learning in JavaScript for browser and Node, useful for AI-driven interaction, classification, and generative tools.
- Tags: `ai`, `machine learning`, `browser`, `tensorflow`
- URL: https://www.tensorflow.org/js
- GitHub: https://github.com/tensorflow/tfjs
- Preview: /screenshots/tensorflow-js.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai, learning-theory

### MediaPipe

- ID: `mediapipe`
- Field: Computer vision
- Kind / status / priority: library / production / production
- Best for: Camera-driven R3F interactions, body tracking, and AR-adjacent prototypes.
- Description: On-device vision and ML task libraries for hands, face, pose, object detection, and gesture-based experiences.
- Tags: `computer vision`, `hands`, `pose`, `ai`
- URL: https://ai.google.dev/edge/mediapipe/solutions/guide
- GitHub: https://github.com/google-ai-edge/mediapipe
- Preview: /screenshots/mediapipe.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai

### Replicate

- ID: `replicate`
- Field: AI models
- Kind / status / priority: tool / production / production
- Best for: Prototype AI-assisted textures, concept art, depth maps, and 3D asset workflows around R3F.
- Description: Hosted model platform for image, video, 3D, and generative workflows that can feed asset ideation pipelines.
- Tags: `ai`, `models`, `assets`, `generation`
- URL: https://replicate.com
- GitHub: https://github.com/replicate
- Preview: /screenshots/replicate.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai

### Meshy

- ID: `meshy`
- Field: Generated 3D
- Kind / status / priority: tool / experimental / experimental
- Best for: Rapid asset ideation before cleanup, retopology, and glTF optimization.
- Description: AI 3D asset generation service for text-to-3D and image-to-3D workflows, useful for fast concept passes.
- Tags: `ai`, `3d assets`, `generation`, `gltf`
- URL: https://www.meshy.ai
- GitHub: none
- Preview: /screenshots/meshy.webp
- Agent routes: asset-pipeline, data-maps-ai

### Tripo AI

- ID: `tripo-ai`
- Field: Generated 3D
- Kind / status / priority: tool / experimental / experimental
- Best for: Quickly exploring asset directions before committing to a modeled production asset.
- Description: AI 3D generation tool for producing draft models from text or images.
- Tags: `ai`, `3d assets`, `prototype`, `generation`
- URL: https://www.tripo3d.ai
- GitHub: none
- Preview: /screenshots/tripo-ai.webp
- Agent routes: asset-pipeline, data-maps-ai

### react-three-map

- ID: `react-three-map`
- Field: Map integration
- Kind / status / priority: library / production / production
- Best for: Placing custom R3F meshes, effects, and scenes into geospatial map contexts.
- Description: Utilities for rendering React Three Fiber content on top of Mapbox/MapLibre map views.
- Tags: `maps`, `r3f`, `mapbox`, `maplibre`
- URL: https://github.com/RodrigoHamuy/react-three-map
- GitHub: https://github.com/RodrigoHamuy/react-three-map
- Preview: /screenshots/react-three-map.webp
- Agent routes: start-r3f-app, asset-pipeline, shader-effects, xr-ar-vr, data-maps-ai

### Threebox

- ID: `threebox`
- Field: Mapbox 3D
- Kind / status / priority: library / production / production
- Best for: Learning patterns for georeferenced 3D objects and map-camera synchronization.
- Description: Three.js plugin for Mapbox GL JS that helps place and control 3D objects on maps.
- Tags: `maps`, `mapbox`, `three.js`, `geospatial`
- URL: https://github.com/jscastro76/threebox
- GitHub: https://github.com/jscastro76/threebox
- Preview: /screenshots/threebox.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai, learning-theory

### OSM Buildings

- ID: `osm-buildings`
- Field: 3D maps
- Kind / status / priority: library / production / production
- Best for: Studying lightweight city visualization and map extrusion patterns.
- Description: JavaScript library for visualizing OpenStreetMap building geometry in 2.5D and 3D-style map views.
- Tags: `maps`, `buildings`, `openstreetmap`, `data viz`
- URL: https://osmbuildings.org
- GitHub: https://github.com/OSMBuildings/OSMBuildings
- Preview: /screenshots/osm-buildings.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai

### harp.gl

- ID: `harp-gl`
- Field: Vector maps
- Kind / status / priority: library / production / production
- Best for: Advanced map rendering ideas using Three.js as the display layer.
- Description: Three.js-based vector map renderer from HERE with a focus on customizable 3D map visualizations.
- Tags: `maps`, `three.js`, `vector tiles`, `geospatial`
- URL: https://www.harp.gl
- GitHub: https://github.com/heremaps/harp.gl
- Preview: /screenshots/harp-gl.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai

### iTowns

- ID: `itowns`
- Field: 3D geospatial
- Kind / status / priority: library / production / production
- Best for: Open-source geospatial R&D with Three.js rendering under the hood.
- Description: Three.js-based framework for geospatial 3D visualization, globe views, terrain, imagery, and 3D Tiles.
- Tags: `geospatial`, `three.js`, `terrain`, `3d tiles`
- URL: https://www.itowns-project.org
- GitHub: https://github.com/iTowns/itowns
- Preview: /screenshots/itowns.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai

### D3

- ID: `d3`
- Field: Data visualization
- Kind / status / priority: library / production / production
- Best for: Driving R3F charts, spatial encodings, force simulations, and nontrivial data mappings.
- Description: Foundational JavaScript data visualization library for scales, layouts, shapes, and data transforms.
- Tags: `data viz`, `scales`, `layout`, `charts`
- URL: https://d3js.org
- GitHub: https://github.com/d3/d3
- Preview: /screenshots/d3.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai

### Observable

- ID: `observable`
- Field: Data notebooks
- Kind / status / priority: community / production / specialized
- Best for: Finding visual techniques and prototyping data-driven ideas before integrating into React.
- Description: Notebook and publishing platform full of data visualization, WebGL, maps, and generative graphics examples.
- Tags: `data viz`, `notebooks`, `examples`, `community`
- URL: https://observablehq.com
- GitHub: https://github.com/observablehq
- Preview: /screenshots/observable.webp
- Agent routes: start-r3f-app, asset-pipeline, data-maps-ai, learning-theory

### Observable Plot

- ID: `observable-plot`
- Field: Charts
- Kind / status / priority: library / production / production
- Best for: Pairing R3F spatial views with clear 2D analytical charts.
- Description: Concise grammar for exploratory charts and marks, useful when not every data view needs to be 3D.
- Tags: `charts`, `data viz`, `observable`, `analysis`
- URL: https://observablehq.com/plot/
- GitHub: https://github.com/observablehq/plot
- Preview: /screenshots/observable-plot.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai

### regl-scatterplot

- ID: `regl-scatterplot`
- Field: Large scatterplots
- Kind / status / priority: library / production / production
- Best for: Learning dense data rendering patterns for R3F point clouds and analytical canvases.
- Description: Fast WebGL scatterplot component for millions of points, with interaction and performance-minded rendering.
- Tags: `webgl`, `scatterplot`, `data viz`, `performance`
- URL: https://github.com/flekschas/regl-scatterplot
- GitHub: https://github.com/flekschas/regl-scatterplot
- Preview: /screenshots/regl-scatterplot.webp
- Agent routes: start-r3f-app, asset-pipeline, performance-debug, xr-ar-vr, data-maps-ai, learning-theory

### HiGlass

- ID: `higlass`
- Field: Tiled visualization
- Kind / status / priority: library / production / production
- Best for: Studying tile pyramids, zoomable interfaces, and high-density web visualization.
- Description: Tiled, zoomable visualization system for large genomic and matrix-like datasets.
- Tags: `data viz`, `tiles`, `performance`, `zoom`
- URL: https://higlass.io
- GitHub: https://github.com/higlass/higlass
- Preview: /screenshots/higlass.webp
- Agent routes: asset-pipeline, performance-debug, xr-ar-vr, data-maps-ai

### SuperSplat

- ID: `supersplat`
- Field: Gaussian splats
- Kind / status / priority: tool / creative / specialized
- Best for: Preparing captured splats before using them in web experiences.
- Description: Open-source browser editor for inspecting, cleaning, optimizing, and publishing Gaussian splat scenes.
- Tags: `splats`, `editor`, `3d capture`, `playcanvas`
- URL: https://superspl.at
- GitHub: https://github.com/playcanvas/supersplat
- Preview: /screenshots/supersplat.webp
- Agent routes: asset-pipeline, xr-ar-vr, visual-inspiration, data-maps-ai

### GaussianSplats3D

- ID: `gaussian-splats-3d`
- Field: Gaussian splats
- Kind / status / priority: library / creative / specialized
- Best for: Learning implementation details and rendering captured splats in Three.js contexts.
- Description: Three.js-oriented Gaussian splat viewer and renderer for browser-based 3D capture scenes.
- Tags: `splats`, `three.js`, `3d capture`, `renderer`
- URL: https://github.com/mkkellogg/GaussianSplats3D
- GitHub: https://github.com/mkkellogg/GaussianSplats3D
- Preview: /screenshots/gaussian-splats-3d.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, visual-inspiration, data-maps-ai, learning-theory

### antimatter15/splat

- ID: `antimatter-splat`
- Field: Gaussian splats
- Kind / status / priority: library / creative / specialized
- Best for: Understanding the small, hackable version of the splat rendering idea.
- Description: Early WebGL Gaussian splat renderer that helped popularize browser-based splat viewing.
- Tags: `splats`, `webgl`, `3d capture`, `renderer`
- URL: https://github.com/antimatter15/splat
- GitHub: https://github.com/antimatter15/splat
- Preview: /screenshots/antimatter-splat.webp
- Agent routes: asset-pipeline, xr-ar-vr, visual-inspiration, data-maps-ai, learning-theory

### gsplat.js

- ID: `gsplat-js`
- Field: Gaussian splats
- Kind / status / priority: library / experimental / learning
- Best for: Following ML-adjacent browser splat workflows and examples.
- Description: Hugging Face JavaScript tooling for Gaussian splat rendering and experiments.
- Tags: `splats`, `hugging face`, `ai`, `webgl`
- URL: https://github.com/huggingface/gsplat.js
- GitHub: https://github.com/huggingface/gsplat.js
- Preview: /screenshots/gsplat-js.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai, learning-theory

### Nerfstudio

- ID: `nerfstudio`
- Field: NeRF tooling
- Kind / status / priority: tool / production / production
- Best for: Understanding AI-era scene capture pipelines before exporting to web-friendly formats.
- Description: Open-source framework for training and experimenting with NeRFs and neural scene representations.
- Tags: `nerf`, `ai`, `3d capture`, `research`
- URL: https://docs.nerf.studio
- GitHub: https://github.com/nerfstudio-project/nerfstudio
- Preview: /screenshots/nerfstudio.webp
- Agent routes: asset-pipeline, xr-ar-vr, visual-inspiration, data-maps-ai

### Postshot

- ID: `postshot`
- Field: Gaussian splats
- Kind / status / priority: tool / production / production
- Best for: Creating splat assets that can later be optimized and displayed on the web.
- Description: Desktop tool for training, editing, and exporting Gaussian splats from images and video.
- Tags: `splats`, `3d capture`, `photogrammetry`, `tool`
- URL: https://www.jawset.com
- GitHub: none
- Preview: /screenshots/postshot.webp
- Agent routes: asset-pipeline, data-maps-ai

### Scaniverse

- ID: `scaniverse`
- Field: 3D scanning
- Kind / status / priority: tool / production / production
- Best for: Capturing real-world objects and spaces that can become web 3D source material.
- Description: Mobile 3D scanning app for meshes and Gaussian splats, with web-sharing workflows.
- Tags: `scan`, `splats`, `mobile`, `3d capture`
- URL: https://scaniverse.com
- GitHub: none
- Preview: /screenshots/scaniverse.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai

### r3f-globe

- ID: `r3f-globe`
- Field: R3F globe
- Kind / status / priority: library / production / production
- Best for: Building map and data-globe views while staying inside a R3F scene graph.
- Description: React Three Fiber wrapper for globe.gl style geographic visualizations, arcs, points, polygons, and animated tracks.
- Tags: `r3f`, `globe`, `maps`, `data`
- URL: https://vasturiano.github.io/r3f-globe/
- GitHub: https://github.com/vasturiano/r3f-globe
- Preview: /screenshots/r3f-globe.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai

### 3d-force-graph

- ID: `three-d-force-graph`
- Field: Graph visualization
- Kind / status / priority: library / production / production
- Best for: Knowledge graphs, relationship explorers, and 3D network maps.
- Description: Three.js-powered force-directed graph visualization with nodes, links, labels, and interaction.
- Tags: `graphs`, `data-viz`, `three.js`, `force`
- URL: https://vasturiano.github.io/3d-force-graph/
- GitHub: https://github.com/vasturiano/3d-force-graph
- Preview: /screenshots/three-d-force-graph.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai

### globe.gl

- ID: `globe-gl`
- Field: Globe visualization
- Kind / status / priority: library / production / production
- Best for: Geographic storytelling and data-globe prototypes outside a full R3F stack.
- Description: Standalone Three.js globe component with points, arcs, hex bins, paths, and animated data layers.
- Tags: `globe`, `maps`, `data-viz`, `three.js`
- URL: https://globe.gl/
- GitHub: https://github.com/vasturiano/globe.gl
- Preview: /screenshots/globe-gl.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai

### three-globe

- ID: `three-globe`
- Field: Three.js globe
- Kind / status / priority: library / production / production
- Best for: Custom geographic layers inside bespoke Three.js or R3F scenes.
- Description: Three.js object for globe visualizations, useful when you want lower-level control than wrappers provide.
- Tags: `three.js`, `globe`, `maps`, `data`
- URL: https://vasturiano.github.io/three-globe/
- GitHub: https://github.com/vasturiano/three-globe
- Preview: /screenshots/three-globe.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai

### geo-three

- ID: `geo-three`
- Field: 3D maps
- Kind / status / priority: library / production / production
- Best for: Map-tile terrain, geographic viewers, and custom spatial data scenes.
- Description: Geographic tile and map rendering utilities for Three.js.
- Tags: `maps`, `tiles`, `terrain`, `three.js`
- URL: https://tentone.github.io/geo-three/
- GitHub: https://github.com/tentone/geo-three
- Preview: /screenshots/geo-three.webp
- Agent routes: start-r3f-app, asset-pipeline, xr-ar-vr, data-maps-ai

### MathBox

- ID: `mathbox`
- Field: Math visualization
- Kind / status / priority: library / learning / specialized
- Best for: Building explanatory 3D graphs, math demos, and visual teaching systems.
- Description: Library for mathematical visualization and WebGL presentation graphics.
- Tags: `math`, `visualization`, `webgl`, `education`
- URL: https://gitgud.io/unconed/mathbox
- GitHub: https://gitgud.io/unconed/mathbox
- Preview: /screenshots/mathbox.webp
- Agent routes: asset-pipeline, xr-ar-vr, data-maps-ai, learning-theory
