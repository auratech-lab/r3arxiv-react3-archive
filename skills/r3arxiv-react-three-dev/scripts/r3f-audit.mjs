#!/usr/bin/env node
import { existsSync, lstatSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

const extensions = new Set([".tsx", ".ts", ".jsx", ".js"]);
const ignoreDirs = new Set(["node_modules", "dist", "build", ".git", ".next", "coverage"]);

const rules = [
  {
    id: "set-state-in-useframe",
    severity: "error",
    message: "Possible React state setter inside useFrame. Keep per-frame values in refs or external stores.",
    test: (text) => {
      const blocks = findUseFrameBlocks(text);
      return blocks.flatMap((block) => {
        const matches = [];
        const regex = /\bset[A-Z][A-Za-z0-9_]*\s*\(/g;
        let match;
        while ((match = regex.exec(block.text))) {
          const callName = match[0].replace(/\s*\($/, "");
          if (["setClearColor", "setMatrixAt", "setScalar", "setSize"].includes(callName)) {
            continue;
          }
          matches.push(block.start + indexToLine(block.text, match.index));
        }
        return matches;
      });
    }
  },
  {
    id: "missing-delta-useframe",
    severity: "warn",
    message: "useFrame callback may not use delta or elapsed time. Confirm animations are frame-rate independent.",
    test: (text) =>
      findUseFrameBlocks(text)
        .filter((block) => !/\bdelta\b|elapsedTime|getDelta\s*\(/.test(block.text))
        .map((block) => block.start)
  },
  {
    id: "new-three-object-in-component",
    severity: "warn",
    message: "Three.js object allocation may happen during render. Prefer useMemo, module scope, or setup effects.",
    test: (text) => findLines(text, /\bnew\s+THREE\.(Vector|Color|Euler|Quaternion|Matrix|Box|Sphere|Plane|Ray|Mesh|Group|Object3D|BufferGeometry|.*Geometry|.*Material|TextureLoader|GLTFLoader)\b/)
  },
  {
    id: "inline-vector-prop",
    severity: "info",
    message: "Inline vector/array prop in JSX. Fine for static code, but memoize if this component re-renders often.",
    test: (text) => findLines(text, /\b(position|rotation|scale|args)=\{\[[^\]]+\]\}/)
  },
  {
    id: "raw-gltf-loader",
    severity: "info",
    message: "Raw GLTFLoader usage found. In R3F, prefer Drei useGLTF unless imperative loading is intentional.",
    test: (text) => findLines(text, /\b(import\b.*GLTFLoader|new\s+GLTFLoader|useLoader\s*\(\s*GLTFLoader)\b/)
  },
  {
    id: "canvas-without-dpr",
    severity: "info",
    message: "Canvas found without a dpr cap nearby. Consider dpr={[1, 2]} or lower for heavy/mobile scenes.",
    test: (text) =>
      findJsxOpenings(text, "Canvas")
        .filter((opening) => !/\bdpr=/.test(opening.text))
        .map((opening) => opening.line)
  }
];

function usage() {
  console.log(`Usage:
  r3f-audit <file-or-directory> [...more paths] [--json]

Examples:
  node skills/r3arxiv-react-three-dev/scripts/r3f-audit.mjs src
  node skills/r3arxiv-react-three-dev/scripts/r3f-audit.mjs src/App.tsx --json`);
}

function parseArgs(argv) {
  const args = { paths: [], json: false };
  for (const arg of argv) {
    if (arg === "--json") args.json = true;
    else if (arg === "--help" || arg === "-h") args.help = true;
    else args.paths.push(arg);
  }
  return args;
}

function collectFiles(inputPath, files = []) {
  if (!existsSync(inputPath)) return files;

  const stat = lstatSync(inputPath);
  if (stat.isDirectory()) {
    for (const name of readdirSync(inputPath)) {
      if (ignoreDirs.has(name)) continue;
      collectFiles(path.join(inputPath, name), files);
    }
    return files;
  }

  if (stat.isFile() && extensions.has(path.extname(inputPath))) {
    files.push(inputPath);
  }
  return files;
}

function indexToLine(text, index) {
  return text.slice(0, index).split("\n").length - 1;
}

function findLines(text, regex) {
  const lines = text.split("\n");
  const matches = [];
  lines.forEach((line, index) => {
    if (regex.test(line)) matches.push(index + 1);
  });
  return matches;
}

function findUseFrameBlocks(text) {
  const blocks = [];
  const regex = /\buseFrame\s*\(/g;
  let match;
  while ((match = regex.exec(text))) {
    let depth = 0;
    let end = match.index;
    for (; end < text.length; end += 1) {
      const char = text[end];
      if (char === "(") depth += 1;
      if (char === ")") {
        depth -= 1;
        if (depth === 0) {
          end += 1;
          break;
        }
      }
    }
    blocks.push({
      start: indexToLine(text, match.index) + 1,
      text: text.slice(match.index, end)
    });
  }
  return blocks;
}

function findJsxOpenings(text, tagName) {
  const openings = [];
  const regex = new RegExp(`<${tagName}\\b[\\s\\S]*?>`, "g");
  let match;
  while ((match = regex.exec(text))) {
    openings.push({
      line: indexToLine(text, match.index) + 1,
      text: match[0]
    });
  }
  return openings;
}

function auditFile(file) {
  const text = readFileSync(file, "utf8");
  const findings = [];
  for (const rule of rules) {
    for (const line of rule.test(text)) {
      findings.push({
        file,
        line,
        rule: rule.id,
        severity: rule.severity,
        message: rule.message
      });
    }
  }
  return findings;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help || args.paths.length === 0) {
    usage();
    process.exitCode = args.help ? 0 : 1;
    return;
  }

  const files = args.paths.flatMap((inputPath) => collectFiles(path.resolve(inputPath)));
  const findings = files.flatMap(auditFile);

  if (args.json) {
    console.log(JSON.stringify({ files: files.length, findings }, null, 2));
    process.exitCode = findings.some((finding) => finding.severity === "error") ? 2 : 0;
    return;
  }

  console.log(`Audited ${files.length} files. Findings: ${findings.length}`);
  for (const finding of findings) {
    console.log(
      `${finding.severity.toUpperCase()} ${finding.file}:${finding.line} ${finding.rule}`
    );
    console.log(`  ${finding.message}`);
  }

  process.exitCode = findings.some((finding) => finding.severity === "error") ? 2 : 0;
}

main();
