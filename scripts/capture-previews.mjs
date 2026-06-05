import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { homedir } from "node:os";
import path from "node:path";
import { chromium } from "playwright-core";
import sharp from "sharp";
import { resources } from "../src/data/resources.ts";

const outputDir = path.resolve("public/screenshots");
const width = 1100;
const height = 700;

const executableCandidates = [
  process.env.CHROMIUM_PATH,
  process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE,
  path.join(
    homedir(),
    "Library/Caches/ms-playwright/chromium-1217/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing"
  ),
  path.join(
    homedir(),
    "Library/Caches/ms-playwright/chromium-1148/chrome-mac/Chromium.app/Contents/MacOS/Chromium"
  ),
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium"
].filter(Boolean);

const executablePath = executableCandidates.find((candidate) =>
  existsSync(candidate)
);

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getHost(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function isGithubUrl(url) {
  return getHost(url) === "github.com";
}

function slugFromImage(image) {
  if (!image) return undefined;
  return path.basename(image, path.extname(image));
}

function wrapText(text, maxChars, maxLines) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";

  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }

    if (lines.length === maxLines) break;
  }

  if (line && lines.length < maxLines) lines.push(line);
  if (lines.length === maxLines && words.join(" ").length > lines.join(" ").length) {
    lines[maxLines - 1] = `${lines[maxLines - 1].replace(/[.,;:!?]$/, "")}...`;
  }

  return lines;
}

function tint(hex, amount) {
  const clean = hex.replace("#", "");
  const normalized =
    clean.length === 3
      ? clean
          .split("")
          .map((char) => char + char)
          .join("")
      : clean.padEnd(6, "0").slice(0, 6);
  const channels = [0, 2, 4].map((index) => parseInt(normalized.slice(index, index + 2), 16));
  return `rgb(${channels
    .map((channel) => Math.max(0, Math.min(255, Math.round(channel + (255 - channel) * amount))))
    .join(",")})`;
}

function fallbackSvg(resource, targetName) {
  const bg = resource.color || "#e6e6e6";
  const soft = tint(bg, 0.48);
  const host = getHost(resource.url);
  const titleLines = wrapText(resource.title, 18, 3);
  const descriptionLines = wrapText(resource.description, 56, 3);
  const tags = resource.tags.slice(0, 4);

  const title = titleLines
    .map(
      (line, index) =>
        `<text x="74" y="${214 + index * 74}" class="title">${escapeXml(line)}</text>`
    )
    .join("");
  const description = descriptionLines
    .map(
      (line, index) =>
        `<text x="78" y="${442 + index * 34}" class="body">${escapeXml(line)}</text>`
    )
    .join("");
  const tagNodes = tags
    .map((tag, index) => {
      const x = 78 + index * 188;
      return `<g transform="translate(${x} 574)">
        <rect width="${Math.min(168, 46 + tag.length * 9)}" height="42" rx="21" />
        <text x="20" y="27" class="tag">${escapeXml(tag)}</text>
      </g>`;
    })
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="${escapeXml(soft)}"/>
        <stop offset="1" stop-color="${escapeXml(bg)}"/>
      </linearGradient>
      <pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse">
        <path d="M42 0H0V42" fill="none" stroke="rgba(0,0,0,.12)" stroke-width="1"/>
      </pattern>
      <style>
        .kicker{font:500 24px system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;letter-spacing:0;fill:#252525}
        .title{font:560 64px system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;letter-spacing:0;fill:#111}
        .body{font:400 25px system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;letter-spacing:0;fill:#262626}
        .host{font:500 24px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:0;fill:#202020}
        .tag{font:500 18px system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;letter-spacing:0;fill:#111}
        rect{fill:rgba(255,255,255,.48);stroke:rgba(0,0,0,.25)}
      </style>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#bg)"/>
    <rect width="${width}" height="${height}" fill="url(#grid)" opacity=".7"/>
    <circle cx="890" cy="86" r="220" fill="rgba(255,255,255,.24)"/>
    <circle cx="962" cy="168" r="156" fill="none" stroke="rgba(0,0,0,.14)" stroke-width="2"/>
    <path d="M0 674 C 188 616, 270 708, 458 646 S 816 578, 1100 622 L1100 700 L0 700 Z" fill="rgba(255,255,255,.28)"/>
    <rect x="44" y="44" width="1012" height="612" rx="28" fill="rgba(255,255,255,.2)" stroke="rgba(0,0,0,.24)" stroke-width="2"/>
    <text x="74" y="112" class="kicker">${escapeXml(resource.category)} / ${escapeXml(resource.field)}</text>
    ${title}
    ${description}
    ${tagNodes}
    <text x="74" y="650" class="host">${escapeXml(host)}</text>
    <text x="1038" y="650" text-anchor="end" class="host">${escapeXml(targetName)}</text>
  </svg>`;
}

function uniqueTargets() {
  const targets = new Map();
  for (const resource of resources) {
    const name = slugFromImage(resource.image) ?? resource.id;
    const url = resource.previewUrl ?? resource.url;
    if (!targets.has(name)) {
      targets.set(name, { name, resource, url });
    }
    if (!resource.image && !targets.has(resource.id)) {
      targets.set(resource.id, { name: resource.id, resource, url });
    }
  }
  return Array.from(targets.values()).sort((a, b) => targetPriority(a) - targetPriority(b));
}

const visualCategories = new Set([
  "Foundations",
  "Ecosystem Libraries",
  "Asset Pipeline",
  "Interaction & UI",
  "Creative Coding & Shaders",
  "Showcases & Inspiration",
  "Web Experiences",
  "Performance & Debug",
  "Learning & Theory",
  "Data, Maps & AI",
  "Gaming & Physics",
  "XR, AR & VR"
]);

const visualKinds = new Set(["showcase", "tool", "library", "starter"]);

function targetPriority(target) {
  let score = 0;
  if (target.resource.previewUrl) score -= 1000;
  if (visualCategories.has(target.resource.category)) score -= 160;
  if (visualKinds.has(target.resource.kind)) score -= 80;
  if (isGithubUrl(target.url)) score += 120;
  return score;
}

async function writeFallbacks(targets) {
  await mkdir(outputDir, { recursive: true });
  await Promise.all(
    targets.map(async (target) => {
      const svg = fallbackSvg(target.resource, target.name);
      await sharp(Buffer.from(svg)).webp({ quality: 84 }).toFile(path.join(outputDir, `${target.name}.webp`));
    })
  );
  console.log(`generated ${targets.length} local preview fallbacks`);
}

function parseLimit() {
  const value = process.env.CAPTURE_LIVE_LIMIT ?? "all";
  if (value === "all") return Number.POSITIVE_INFINITY;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.max(0, parsed) : Number.POSITIVE_INFINITY;
}

function parseConcurrency() {
  const parsed = Number(process.env.CAPTURE_LIVE_CONCURRENCY ?? "4");
  return Number.isFinite(parsed) ? Math.max(1, Math.min(8, parsed)) : 4;
}

async function captureLive(targets) {
  if (!executablePath) {
    console.warn("No Chromium executable found. Generated previews are still available.");
    return;
  }

  const liveLimit = parseLimit();
  if (liveLimit === 0 || process.env.CAPTURE_LIVE === "0") {
    console.log("skipped live screenshot capture");
    return;
  }

  const limitedTargets = targets.slice(0, liveLimit);
  const concurrency = Math.min(parseConcurrency(), limitedTargets.length);
  console.log(
    `attempting live capture for ${limitedTargets.length} of ${targets.length} previews with concurrency ${concurrency}`
  );
  const browser = await chromium.launch({
    executablePath,
    headless: true,
    args: ["--disable-gpu", "--disable-dev-shm-usage", "--no-sandbox"]
  });

  const context = await browser.newContext({
    viewport: { width: 1365, height: 860 },
    deviceScaleFactor: 1,
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36"
  });

  let captured = 0;
  let failed = 0;
  let nextIndex = 0;

  async function captureTarget(target) {
    const page = await context.newPage();
    try {
      await page.goto(target.url, { waitUntil: "domcontentloaded", timeout: 12000 });
      await page.waitForLoadState("networkidle", { timeout: 3000 }).catch(() => {});
      if (isGithubUrl(target.url)) {
        await page
          .locator("article.markdown-body, #readme")
          .first()
          .scrollIntoViewIfNeeded({ timeout: 2500 })
          .catch(() => {});
      }
      await page.waitForTimeout(650);
      const png = await page.screenshot({ fullPage: false });
      await sharp(png)
        .resize(width, height, { fit: "cover", position: "top" })
        .webp({ quality: 80 })
        .toFile(path.join(outputDir, `${target.name}.webp`));
      captured += 1;
      console.log(`captured ${target.name}`);
    } catch (error) {
      failed += 1;
      console.warn(`kept generated preview for ${target.name}: ${error.message}`);
    } finally {
      await page.close();
    }
  }

  await Promise.all(
    Array.from({ length: concurrency }, async () => {
      while (nextIndex < limitedTargets.length) {
        const target = limitedTargets[nextIndex];
        nextIndex += 1;
        await captureTarget(target);
      }
    })
  );

  await browser.close();
  console.log(`live captures complete: ${captured} captured, ${failed} generated-only`);
}

const targets = uniqueTargets();
await writeFallbacks(targets);
await captureLive(targets);
