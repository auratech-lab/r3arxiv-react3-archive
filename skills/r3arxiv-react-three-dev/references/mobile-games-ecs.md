# Mobile, Games, ECS, Physics

Use this reference for mobile-first games, simulations, character controllers, input systems, and ECS-driven scenes.

## Mobile Canvas Baseline

- Cap DPR aggressively. `dpr={[1, 1.5]}` is often better than `[1, 2]` for real games.
- Use adaptive quality when frame time crosses budget.
- Disable expensive shadows/postprocessing on low-tier devices.
- Avoid hover-only interactions.
- Set `touch-action: none` on the canvas container when gestures belong to the app.
- Test iOS Safari separately.

## Game Loop Ownership

- Use a single simulation loop owner.
- Run physics before camera follow and post-frame visual smoothing.
- Use fixed timestep or accumulator logic for deterministic physics.
- Keep React state for UI-visible facts, not every entity transform.
- Store high-frequency transforms in ECS components, physics bodies, refs, or typed arrays.

## ECS With R3F

Use ECS when:
- entity counts are high,
- behavior is data-oriented,
- systems need predictable order,
- React component trees become incidental to gameplay.

Suggested boundaries:
- ECS owns entity data and systems.
- R3F owns rendering and React composition.
- Thin render components subscribe to stable entity IDs and read component data.
- UI subscribes to coarse game state only.

Avoid:
- creating/removing React components every frame,
- duplicating source of truth between ECS and mesh refs,
- letting UI stores drive continuous physics state.

## Physics

### Rapier

- Use fixed bodies for world geometry.
- Use dynamic bodies for objects controlled by physics.
- Use kinematic bodies for player controllers or scripted moving platforms.
- Use simple colliders before mesh colliders.
- Keep visual mesh scale aligned with collider scale.
- Read/write bodies through refs/API, not React state.

### Character Controllers

- Separate input collection, movement intent, physics step, camera follow, and animation.
- Normalize input from keyboard, touch joystick, and gamepad into the same action map.
- Smooth camera after physics update.
- Use capsule/cuboid colliders for characters unless there is a strong reason not to.

## Input

- Centralize action mapping: `move`, `jump`, `interact`, `aim`, `menu`.
- Support keyboard, pointer, touch, and gamepad through the same semantic actions.
- Buffer short-lived actions like jump or attack if timing matters.
- Avoid attaching many independent DOM listeners from many scene components.

## Multiplayer

- Decide early whether the app is authoritative server, lockstep, peer-to-peer, or cosmetic sync only.
- Keep network state lower frequency than render state.
- Interpolate remote transforms.
- Do not transmit raw React state trees.
- Keep asset IDs and entity IDs stable.

## R3ARXIV Routes

- `physics-games`: physics, controllers, ECS, navmesh, multiplayer.
- `performance-debug`: mobile quality, profiling, workers.
- `asset-pipeline`: game-ready models/textures.
- `xr-ar-vr`: XR input and headset performance.
