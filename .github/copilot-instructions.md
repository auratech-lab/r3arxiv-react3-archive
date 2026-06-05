# R3ARXIV Copilot Instructions

R3ARXIV is a Vite + React + TypeScript archive for React Three Fiber, Three.js,
WebGL/WebGPU, XR, shader, asset-pipeline, game, and creative-web resources.

Use `AGENTS.md` for full repository instructions. For resource selection or
retrieval tasks, prefer the generated agent pack:

- `llms.txt`
- `llms-full.txt`
- `docs/agent/README.md`
- `docs/agent/catalog.json`
- `docs/agent/chunks.jsonl`
- `docs/agent/routes.json`

Run `npm run agent:export` after changing resource data, then run
`npm run verify:agent`. Run `npm run build` and `npm run lint` after code or UI
changes.
