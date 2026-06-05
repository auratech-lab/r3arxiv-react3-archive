# Public Repo Checklist

This directory is the public-safe R3ARXIV archive and skill package.

Included:

- React archive UI source.
- Curated resource data.
- Local screenshot previews.
- Generated agent artifacts.
- `r3arxiv-react-three-dev` skill, CLI, query, audit, and MCP helper scripts.

Excluded:

- Local Codex session logs.
- `node_modules` and `dist`.
- Experimental game prototype source, page, docs, screenshots, audio, models,
  and reference assets.
- Private local media folders from the original workstation.

Before pushing:

```bash
npm install
npm run build
npm run verify:agent
npm run r3arxiv -- routes
```

Recommended GitHub path:

```bash
gh auth login
git init -b main
git add .
git commit -m "Initial public R3ARXIV archive and skill"
gh repo create r3arxiv-react3-archive --public --source=. --remote=origin --push
```
