# Implementation Workflows

Use these workflows with `docs/agent/routes.json` and `docs/agent/catalog.json`.

## Route Selection

- New R3F app, broken Canvas, migration from vanilla Three: `start-r3f-app`.
- Models, textures, HDRIs, avatars, scans, optimization: `asset-pipeline`.
- GLSL/WGSL, custom materials, particles, distortion, postprocessing: `shader-effects`.
- FPS, memory, loading, blank screens, GPU limits: `performance-debug`.
- Headsets, AR hit tests, hands, WebXR DOM overlays: `xr-ar-vr`.
- Rapier, Cannon, character controllers, ECS, navmesh, multiplayer: `physics-games`.
- Visual taste, reference sites, artists, studios: `visual-inspiration`.
- Maps, globes, splats, point clouds, AI-generated 3D: `data-maps-ai`.
- Explaining math, renderer concepts, WebGL/WebGPU fundamentals: `learning-theory`.
- Portfolio/editorial/scroll-driven websites: `web-experiences`.

## New R3F Feature

1. Query the matching route:
   `node skills/r3arxiv-react-three-dev/scripts/r3arxiv-query.mjs --route start-r3f-app`
2. Pick a minimal stack:
   - R3F for scene composition.
   - Drei for controls/loaders/environment/text/helpers.
   - Zustand or refs for interaction state.
   - glTF Transform/gltfjsx for model pipeline.
3. Build in layers:
   - Canvas shell.
   - Camera/lights/environment.
   - Asset loading.
   - Interaction.
   - Performance guardrails.
   - Visual polish.
4. Verify:
   - Build/lint.
   - Runtime screenshot.
   - Console errors.
   - Mobile viewport if public-facing.

## Visual Research

1. Query `visual-inspiration`, `shader-effects`, and `web-experiences`.
2. Pick references with different purposes:
   - one interaction reference,
   - one motion reference,
   - one material/shader reference,
   - one layout/composition reference.
3. Convert references into implementation decisions:
   - camera behavior,
   - asset style,
   - light/material system,
   - animation model,
   - scroll or input mapping.
4. Do not copy a reference literally unless the user requests a clone.

## Asset Pipeline

1. Identify source format: GLB, glTF, FBX, OBJ, image texture, HDRI, splat, point cloud.
2. Validate before integrating.
3. Optimize:
   - simplify geometry,
   - texture-compress,
   - meshopt/draco where appropriate,
   - remove unused nodes/materials/animations,
   - bake or simplify lights.
4. Generate components with `gltfjsx` when using R3F.
5. Preload critical assets and provide loading/error states.

## Performance Debug

1. Reproduce and measure first. Use browser performance tools, r3f-perf, stats-gl, or screenshots.
2. Classify the problem:
   - React re-render churn,
   - useFrame workload,
   - draw calls,
   - shader/postprocessing cost,
   - asset size/loading,
   - physics/input,
   - mobile GPU limits,
   - layout/canvas size.
3. Apply the cheapest fix first.
4. Verify with the same viewport and interaction that reproduced the issue.

## XR / AR / VR

1. Confirm target browser/device and WebXR capability.
2. Use standards docs before library-specific examples.
3. Design interaction around controllers/hands/gaze, not mouse-only assumptions.
4. Keep perf budget stricter than desktop web: simpler materials, fewer shadows, fewer post effects.
5. Check fallback path for unsupported devices.

## Deliverables Agents Should Produce

For recommendations:
- selected route IDs,
- resource IDs,
- primary URLs/GitHub URLs,
- tradeoffs,
- build order.

For implementation:
- scoped code changes,
- asset pipeline notes,
- verification commands,
- screenshots or runtime evidence when visual output changed.
