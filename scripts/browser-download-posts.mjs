import { chromium } from "playwright-core";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const chromePath = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const csv = await readFile("data/instagram-posts.csv", "utf8");
let rows = csv.trim().split(/\r?\n/).slice(1).map((line) => {
  const [slot, url, type, ...noteParts] = line.split(",");
  return { slot, url, type, note: noteParts.join(",") };
});

if (process.env.SLOT) {
  rows = rows.filter((row) => row.slot === process.env.SLOT);
}

if (process.env.LIMIT) {
  rows = rows.slice(0, Number(process.env.LIMIT));
}

await mkdir("public/media/browser-downloads", { recursive: true });

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true,
  args: ["--disable-blink-features=AutomationControlled"]
});

const context = await browser.newContext({
  viewport: { width: 1440, height: 1100 },
  userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36"
});

await context.route(/googleads|doubleclick|fundingchoices|googlesyndication|googletagmanager|google-analytics|recaptcha|yandex|mc\.yandex|static\.cloudflareinsights/i, (route) => route.abort());

const results = [];
const service = process.env.SERVICE ?? "fastdl";

function serviceUrl(instagramUrl) {
  if (service === "sss") return `https://sssinstagram.com/en1?url=${encodeURIComponent(instagramUrl)}`;
  if (service === "igram") return `https://igram.world/en1/?url=${encodeURIComponent(instagramUrl)}`;
  if (service === "inflact") return `https://inflact.com/downloader/instagram/reels/?url=${encodeURIComponent(instagramUrl)}`;
  return `https://fastdl.app/en3?url=${encodeURIComponent(instagramUrl)}`;
}

for (const row of rows) {
  console.log(`Processing slot ${row.slot}: ${row.url}`);
  const page = await context.newPage();
  const responses = [];
  page.on("response", async (response) => {
    const url = response.url();
    if (/api|convert|download|media|instagram|cdn/i.test(url)) {
      const contentType = response.headers()["content-type"] ?? "";
      let body = "";
      if (/api|convert/i.test(url)) {
        try {
          body = (await response.text()).slice(0, 6000);
        } catch {}
      }
      responses.push({ url, status: response.status(), contentType, body });
    }
  });

  const downloadUrls = new Set();
  try {
    await page.goto(serviceUrl(row.url), { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(1500);

    await page.locator(".ad-modal button, [aria-label='Close'], button:has-text('Close'), button:has-text('×')").first().click({ timeout: 1000 }).catch(() => {});

    const inputSelector = service === "inflact"
      ? "form#instagram-downloader-form input[name='url']"
      : "input.search-form__input, input#search-form-input, input#input, input[type='text']";
    const input = page.locator(inputSelector).first();
    if (await input.count()) {
      await input.fill(row.url, { timeout: 10000 });
    }

    const buttonSelector = service === "inflact"
      ? "form#instagram-downloader-form button[type='submit']"
      : "button.search-form__button, button.form__submit, #searchFormButton, button:has-text('Download Video'), button:has-text('Download')";
    const button = page.locator(buttonSelector).first();
    if (await button.count()) {
      await page.waitForTimeout(1000);
      await page.locator(".ad-modal button, [aria-label='Close'], button:has-text('Close'), button:has-text('×')").first().click({ timeout: 1000 }).catch(() => {});
      await button.click({ timeout: 20000, force: true });
    }

    await page.waitForTimeout(12000);

    const urls = await page.evaluate(() => {
      const anchors = Array.from(document.querySelectorAll("a[href]"));
      const media = Array.from(document.querySelectorAll("video[src], source[src], img[src]"));
      return [
        ...anchors.map((a) => a.href),
        ...media.map((m) => m.src)
      ].filter((href) => /\.mp4(\?|$)|\.jpg(\?|$)|\.jpeg(\?|$)|\.webp(\?|$)|fbcdn|cdninstagram|scontent|media\.fastdl|media\.igram/i.test(href));
    });

    urls.forEach((url) => downloadUrls.add(url));

    await page.screenshot({ path: `public/media/browser-downloads/${row.slot}-${service}.png`, fullPage: true });
  } catch (error) {
    results.push({ ...row, ok: false, error: error.message, downloadUrls: [], responses });
    await writeFile("public/media/browser-downloads/results.json", JSON.stringify(results, null, 2));
    await page.close();
    continue;
  }

  results.push({ ...row, ok: downloadUrls.size > 0, downloadUrls: Array.from(downloadUrls), responses });
  await writeFile("public/media/browser-downloads/results.json", JSON.stringify(results, null, 2));
  await page.close();
}

await browser.close();

await writeFile("public/media/browser-downloads/results.json", JSON.stringify(results, null, 2));
console.log(JSON.stringify(results.map((result) => ({ slot: result.slot, ok: result.ok, urls: result.downloadUrls.length })), null, 2));
