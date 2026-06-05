# R3F / Three.js Review Rules

Use this as the manual review checklist after running `scripts/r3f-audit.mjs`.

## Critical R3F Rules

### Render Loop

- Do not call React state setters inside `useFrame`.
- Use `delta` for speed and physics stepping; avoid frame-rate dependent increments.
- Disable frame callbacks when inactive, or early-return cheaply.
- Keep heavy computation, parsing, allocations, and network work out of `useFrame`.
- Use `frameloop="demand"` and `invalidate()` for mostly-static scenes.

### React Re-Renders

- Keep continuous values in refs, Three.js objects, physics bodies, or external store transient subscriptions.
- Subscribe to narrow Zustand slices; do not consume entire stores inside scene components.
- Memoize expensive components and avoid recreating arrays/objects/functions passed into deep scene trees.
- Use stable keys for dynamic meshes/entities; never use an index key for objects that can reorder.
- Toggle `visible` for expensive reusable objects instead of remounting them.

### Canvas Setup

- Make the canvas parent have explicit dimensions.
- Set sensible camera `near`, `far`, `position`, and `fov`.
- Cap DPR with `dpr={[1, 2]}` or lower for mobile/heavy scenes.
- Use `gl={{ powerPreference: "high-performance" }}` for serious rendering.
- Decide on `shadows`, `linear`, `flat`, and tone mapping intentionally.

### Loading

- Wrap async model/texture usage in `Suspense`.
- Use `useGLTF`, `useTexture`, and preload when using Drei.
- Validate GLB/glTF with glTF Validator or gltf-report before blaming R3F.
- Compress geometry and textures with Meshopt/Draco/KTX2 where appropriate.
- Add error boundaries around external assets.

### Drei

- Prefer Drei controls, `Environment`, `Bounds`, `Center`, `Html`, `Text`, `Instances`, `Float`, `useHelper`, and loaders before writing local wrappers.
- Use `useGLTF.preload()` and `useTexture.preload()` for critical assets.
- Use `Instances` or `Merged` for repeated geometry.
- Use `Html` for DOM labels/controls that must remain readable; use mesh UI only when UI must exist in world space.

### Three.js Object Lifecycle

- Understand R3F auto-dispose. Disable with `dispose={null}` only for shared or external objects.
- Dispose custom geometries, materials, render targets, textures, controls, composers, and workers you create imperatively.
- Clone loaded scenes before reusing the same GLTF object multiple times.
- Avoid mutating cached GLTF scenes globally unless intentional.

## Three.js / GPU Rules

### Geometry and Draw Calls

- Reduce draw calls before micro-optimizing shaders.
- Use `InstancedMesh`, Drei `Instances`, merged geometry, or GPU particles for repeated objects.
- Use LOD for distant/high-poly assets.
- Keep vertex counts and texture sizes realistic for target hardware.

### Materials, Textures, and Lighting

- Reuse materials and textures where possible.
- Prefer compressed textures for production.
- Keep shadow-casting lights and shadow map sizes limited.
- Use environment maps for realistic lighting before adding many dynamic lights.
- Beware transparent materials; sort and overdraw can dominate cost.

### Shaders and Postprocessing

- Keep shader branches and texture lookups modest on mobile.
- Test shader precision on mobile GPUs.
- Put reusable GLSL/WGSL chunks in modules instead of inline strings.
- Use selective bloom/limited postprocessing for glow instead of full-screen stacks by default.
- Confirm color space and tone mapping before tuning material colors.

### Interaction

- Use pointer events on meshes for simple interaction.
- Call `event.stopPropagation()` where nested objects should not also receive events.
- Use layers or raycast filters when many objects are interactive.
- For drag/transform tools, isolate interaction state from the rest of the scene.

## Common Failure Diagnosis

- Blank canvas: check container size, console WebGL errors, camera placement, Suspense fallback, missing assets, and object scale.
- Jank on interaction: check React state churn and pointer event raycasting.
- Slow first load: check uncompressed GLBs/textures and missing preloads.
- Memory growth: check manual Three.js resources and disabled disposal.
- Bad colors: check texture color space, tone mapping, environment lighting, and `linear`/`flat`.
- Physics mismatch: check collider shape, body type, units, fixed timestep, and mesh-body sync.
