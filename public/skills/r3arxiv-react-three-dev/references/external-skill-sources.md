# External Skill Sources

R3ARXIV React Three Dev absorbs patterns from these public skill collections. Do not blindly copy generated code; use the ideas as review and planning guidance, then prefer current official docs and this repo's `docs/agent/catalog.json`.

## Primary Sources

- `emalorenzo/three-agent-skills`
  - URL: https://github.com/emalorenzo/three-agent-skills
  - License: MIT
  - Useful parts: `r3f-best-practices`, `three-best-practices`, anti-pattern checklists for performance, `useFrame`, Drei, Zustand, Rapier, assets, WebXR, shaders, and disposal.

- `freshtechbro/claudedesignskills`
  - URL: https://github.com/freshtechbro/claudedesignskills
  - License: MIT
  - Useful parts: broad design/3D skill stack, R3F component generator patterns, plugin/slash-command structure, integration with GSAP, Motion, Spline, Blender, Babylon, and web design workflows.

- `Nice-Wolf-Studio/claude-skills-threejs-ecs-ts`
  - URL: https://github.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts
  - License: MIT
  - Useful parts: mobile game focus, R3F setup/performance, ECS integration, touch input, TypeScript game types, mobile performance targets.

## Absorption Strategy

- Keep R3ARXIV as the source of truth for resources and routes.
- Keep external rules as synthesized patterns in references, not as unreviewed bulk copies.
- Add upstream repositories to `docs/agent/catalog.json` only if they are useful as resources for users, not merely implementation sources for this skill.
- Preserve attribution when copying or adapting substantial text or code.
- Re-check upstream docs before making claims about current APIs.

## What This Skill Adds

- A route-aware query script over the R3ARXIV catalog.
- A broader CLI for routes, resources, chunks, prompts, recommendations, audit, and MCP startup.
- A read-only stdio MCP server exposing R3ARXIV resources, prompts, and tools.
- A static R3F audit script for common code smells.
- A unified workflow that covers creative sites, production apps, asset pipelines, shaders, XR, games, ECS, and mobile.
- Practical rules that agents can apply before they write code and again during review.
