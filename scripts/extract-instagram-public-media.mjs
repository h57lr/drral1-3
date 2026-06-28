import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const csv = await readFile("data/instagram-posts.csv", "utf8");
const rows = csv.trim().split(/\r?\n/).slice(1).map((line) => {
  const [slot, url, type, ...noteParts] = line.split(",");
  return { slot, url, type, note: noteParts.join(",") };
});

await mkdir("public/media/reels", { recursive: true });
await mkdir("public/media/posters", { recursive: true });
await mkdir("public/media/cases/instagram", { recursive: true });

function decodeUrl(url) {
  let decoded = url;
  for (let index = 0; index < 3; index += 1) {
    decoded = decoded
      .replaceAll("\\\\/", "/")
      .replaceAll("\\/", "/")
      .replaceAll("\\u0026", "&")
      .replaceAll("\\u003d", "=")
      .replaceAll("\\u0025", "%")
      .replaceAll("&amp;", "&")
      .replaceAll("\\\"", "\"");
  }
  return decoded;
}

function unique(values) {
  return Array.from(new Set(values));
}

function extractContentMeta(html, property) {
  const match = html.match(new RegExp(`<meta[^>]+(?:property|name)=["']${property}["'][^>]+content=["']([^"']+)["']`, "i"));
  return match ? decodeUrl(match[1]) : undefined;
}

function extractMediaUrls(html) {
  const decoded = decodeUrl(html);
  return {
    videos: unique(Array.from(decoded.matchAll(/https:\/\/[^"'<>\s\\]+?\.mp4[^"'<>\s\\]*/g)).map((match) => decodeUrl(match[0]).replace(/,$/, ""))),
    images: unique(Array.from(decoded.matchAll(/https:\/\/[^"'<>\s\\]+?\.(?:jpg|jpeg|webp)[^"'<>\s\\]*/g)).map((match) => decodeUrl(match[0]).replace(/,$/, "")))
  };
}

function isPostImageUrl(url) {
  return /(?:scontent\.|fbcdn\.|cdninstagram\.com\/v)/i.test(url) && !/static\.cdninstagram\.com/i.test(url);
}

async function download(url, destination) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36",
      "referer": "https://www.instagram.com/"
    }
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(destination, buffer);
  return buffer.length;
}

const report = [];

for (const row of rows) {
  console.log(`Extracting ${row.slot}: ${row.url}`);
  const response = await fetch(row.url, {
    headers: {
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      "accept": "text/html",
      "accept-language": "en-US,en;q=0.9"
    }
  });

  const html = await response.text();
  const mediaUrls = extractMediaUrls(html);
  const mp4Urls = mediaUrls.videos.filter((url) => /(?:instagram|fbcdn)\./i.test(url));
  const metaImages = [extractContentMeta(html, "og:image"), extractContentMeta(html, "twitter:image")].filter(Boolean);
  const imageUrls = unique([...metaImages, ...mediaUrls.images].filter(isPostImageUrl));

  const item = {
    slot: row.slot,
    url: row.url,
    type: row.type,
    status: response.status,
    htmlLength: html.length,
    hasVideoVersions: html.includes("video_versions"),
    hasOgImage: html.includes("og:image"),
    mp4: mp4Urls.length,
    images: imageUrls.length,
    downloaded: []
  };

  if (mp4Urls[0]) {
    const destination = `public/media/reels/reel-${row.slot}.mp4`;
    try {
      const bytes = await download(mp4Urls[0], destination);
      item.downloaded.push({ kind: "mp4", destination, bytes });
    } catch (error) {
      item.downloaded.push({ kind: "mp4", destination, error: error.message });
    }
  }

  if (imageUrls[0]) {
    const posterDestination = `public/media/posters/reel-${row.slot}.jpg`;
    try {
      const bytes = await download(imageUrls[0], posterDestination);
      item.downloaded.push({ kind: "poster", destination: posterDestination, bytes });
    } catch (error) {
      item.downloaded.push({ kind: "poster", destination: posterDestination, error: error.message });
    }
  }

  const caseDir = `public/media/cases/instagram/${row.slot}`;
  await mkdir(caseDir, { recursive: true });
  for (const [index, imageUrl] of imageUrls.slice(0, 10).entries()) {
    const destination = path.join(caseDir, `image-${String(index + 1).padStart(2, "0")}.jpg`).replaceAll("\\", "/");
    try {
      const bytes = await download(imageUrl, destination);
      item.downloaded.push({ kind: "image", destination, bytes });
    } catch (error) {
      item.downloaded.push({ kind: "image", destination, error: error.message });
    }
  }

  report.push(item);
  await writeFile("public/media/instagram-download-report.json", JSON.stringify(report, null, 2));
}

console.log(JSON.stringify(report.map((item) => ({ slot: item.slot, mp4: item.mp4, images: item.images, downloaded: item.downloaded.length })), null, 2));
