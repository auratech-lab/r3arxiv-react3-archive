# R3ARXIV Agent Instructions

## Project Purpose

R3ARXIV is a Vite + React + TypeScript visual wiki for React Three Fiber,
Three.js, WebGL/WebGPU, XR, shader, asset-pipeline, game, and creative-web
resources. The UI is for humans; the agent pack in `docs/agent` and `public/agent`
is for coding agents and retrieval tools.

## Commands

- Install dependencies: `npm install`
- Start the app: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Verify the browser UI: `npm run verify:ui` after a dev server is running at `http://127.0.0.1:5173/`, or set `R3ARXIV_VERIFY_URL` for another port.
- Regenerate visual previews: `npm run capture:screenshots`
- Regenerate agent artifacts: `npm run agent:export`
- Verify agent artifacts: `npm run verify:agent`
- Use the R3ARXIV toolkit: `npm run r3arxiv -- routes`
- Start the R3ARXIV MCP server: `npm run r3arxiv:mcp`

## Source Map

- `src/data/resources.ts`: shared resource types, channels, base resources, and merged exports.
- `src/data/resourceAdditions.ts`: first expansion set.
- `src/data/resourceExpansion.ts`: second expansion set.
- `src/data/resourceExpansion2.ts`: large expansion set with palette-filled colors.
- `src/App.tsx`: filtering, card rendering, detail panel, theme toggle, and UI state.
- `src/App.css`: layout, responsive behavior, and light/dark themes.
- `scripts/capture-previews.mjs`: local fallback and live screenshot generation.
- `scripts/export-agent-pack.mjs`: generates the agent-facing static collection.
- `scripts/verify-agent-pack.mjs`: validates the agent pack against the current resource data.

## Agent Pack Entry Points

- `llms.txt`: small table of contents for agents.
- `llms-full.txt`: single-file full Markdown context.
- `docs/agent/README.md`: ingestion guide.
- `docs/agent/catalog.json`: normalized catalog with taxonomy, routes, and resources.
- `docs/agent/resources.jsonl`: one JSON object per resource.
- `docs/agent/chunks.jsonl`: retrieval-ready JSON Lines chunks.
- `docs/agent/routes.json`: task-intent routing for 3D web app work.
- `docs/agent/prompts.json`: reusable prompt templates.
- `docs/agent/mcp-resources.json`: MCP-shaped resource descriptors.
- `public/agent/*`: web-served mirror of the generated agent pack.
- `public/docs/agent/*`: second web-served mirror so `llms.txt` relative links resolve.
- `skills/r3arxiv-react-three-dev`: consolidated React Three / Three.js agent skill.
- `skills/r3arxiv-react-three-dev/scripts/r3arxiv-cli.mjs`: route/resource/recommendation CLI.
- `skills/r3arxiv-react-three-dev/scripts/r3arxiv-mcp-server.mjs`: read-only stdio MCP server.

## Editing Rules

- Treat `src/data/*` as the source of truth for resources.
- Do not manually edit generated files under `docs/agent`, `public/agent`, `llms.txt`, or `llms-full.txt`; regenerate them with `npm run agent:export`.
- When adding or changing resources, keep IDs stable, unique, lowercase, and URL-safe.
- Every resource needs a useful `description`, `bestFor`, category, field, kind, status, tags, primary URL, color, and preview path through either `image` or the derived `/screenshots/{id}.webp`.
- Prefer primary source URLs and GitHub URLs over blog summaries when describing a library or tool.
- Preserve the app's dense archive layout. Avoid landing-page or marketing-style rewrites.

## Verification Expectations

- After resource data changes, run `npm run agent:export` and `npm run verify:agent`.
- After skill changes, run the skill validator and representative helper commands.
- After UI changes, run `npm run build` and `npm run lint`.
- If the UI or image behavior changes, run `npm run verify:ui` with the dev server already running.
- If screenshots are regenerated, expect `public/screenshots` to change substantially.

## Agent Use Guidance

- For implementation advice, prefer resources with `priority` values `canonical` or `production` in `docs/agent/catalog.json`.
- For visual direction, use routes `visual-inspiration`, `shader-effects`, and `web-experiences`.
- For concrete build tasks, start with `docs/agent/routes.json`, then inspect matching IDs in `catalog.json`.
- Cite `url` and `github` fields when recommending resources.
- Use preview images for visual inspection only; they are not authoritative documentation.
- For React Three / Three.js implementation tasks, use `skills/r3arxiv-react-three-dev` and its references before writing code.
