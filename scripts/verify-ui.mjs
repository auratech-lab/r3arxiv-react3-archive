import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { homedir } from "node:os";
import path from "node:path";
import { chromium } from "playwright-core";

const executableCandidates = [
  process.env.CHROMIUM_PATH,
  process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE,
  path.join(
    homedir(),
    "Library/Caches/ms-playwright/chromium-1217/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing"
  ),
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium"
].filter(Boolean);

const executablePath = executableCandidates.find((candidate) =>
  existsSync(candidate)
);

if (!executablePath) {
  throw new Error("No Chromium executable found. Set CHROMIUM_PATH.");
}

const outputDir = path.resolve("artifacts");
const verifyUrl = process.env.R3ARXIV_VERIFY_URL ?? "http://127.0.0.1:5173/";
await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  executablePath,
  headless: true,
  args: ["--disable-gpu", "--disable-dev-shm-usage", "--no-sandbox"]
});

const page = await browser.newPage({
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 1
});

const consoleErrors = [];
page.on("console", (message) => {
  if (message.type() === "error") {
    consoleErrors.push(message.text());
  }
});
page.on("pageerror", (error) => {
  consoleErrors.push(error.message);
});

await page.goto(verifyUrl, {
  waitUntil: "networkidle",
  timeout: 30000
});

const desktopStats = await page.evaluate(async () => {
  const cards = Array.from(document.querySelectorAll(".resource-card"));
  const images = Array.from(document.querySelectorAll(".resource-visual img"));
  images.forEach((image) => {
    image.loading = "eager";
  });
  await Promise.all(
    images.map(
      (image) =>
        new Promise((resolve) => {
          if (image.complete) {
            resolve(undefined);
            return;
          }
          image.addEventListener("load", () => resolve(undefined), { once: true });
          image.addEventListener("error", () => resolve(undefined), { once: true });
        })
    )
  );
  const loadedImages = images.filter((image) => {
    const img = image;
    return img.complete && img.naturalWidth > 0;
  });

  return {
    title: document.querySelector("h1")?.textContent,
    cards: cards.length,
    images: images.length,
    loadedImages: loadedImages.length,
    hasDetail: Boolean(document.querySelector(".detail-panel h2")),
    hasSearch: Boolean(document.querySelector(".search-box input"))
  };
});

await page.screenshot({
  path: path.join(outputDir, "r3arxiv-desktop.png"),
  fullPage: false
});

await page.locator(".search-box input").fill("webxr");
const searchStats = await page.evaluate(() => ({
  cards: document.querySelectorAll(".resource-card").length,
  resultLine: document.querySelector(".result-line")?.textContent
}));

await page.screenshot({
  path: path.join(outputDir, "r3arxiv-search-webxr.png"),
  fullPage: false
});

await page.setViewportSize({ width: 390, height: 844 });
await page.goto(verifyUrl, {
  waitUntil: "networkidle",
  timeout: 30000
});
await page.screenshot({
  path: path.join(outputDir, "r3arxiv-mobile.png"),
  fullPage: false
});

const mobileStats = await page.evaluate(() => ({
  cards: document.querySelectorAll(".resource-card").length,
  hasHorizontalChannels:
    getComputedStyle(document.querySelector(".channel-rail")).display === "flex",
  width: window.innerWidth
}));

await browser.close();

console.log(
  JSON.stringify(
    {
      desktopStats,
      searchStats,
      mobileStats,
      consoleErrors
    },
    null,
    2
  )
);

if (desktopStats.cards < 550) {
  throw new Error(`Expected at least 550 cards, saw ${desktopStats.cards}.`);
}

if (
  desktopStats.images < desktopStats.cards ||
  desktopStats.loadedImages !== desktopStats.images
) {
  throw new Error(
    `Expected all preview images to load. ${desktopStats.loadedImages}/${desktopStats.images} loaded.`
  );
}

if (searchStats.cards === 0 || searchStats.cards >= desktopStats.cards) {
  throw new Error("Search did not narrow the resource grid.");
}

if (!mobileStats.hasHorizontalChannels) {
  throw new Error("Mobile channel rail did not switch to horizontal layout.");
}

if (consoleErrors.length > 0) {
  throw new Error(`Console errors found: ${consoleErrors.join(" | ")}`);
}
