# Asset Download Notes

## Instagram Reels Status

Attempted download source:

- `https://www.instagram.com/ali_alheneiti/`

Attempts made:

- Public `instaloader` access failed with Instagram `403 Forbidden`.
- Chrome cookie import failed because Windows shadow-copy cookie access requires admin permissions.
- Edge cookie import failed for the same admin-permission reason.
- Firefox cookie import failed because no Firefox profile exists.

Public downloader blocker:

- Third-party downloader services did not return usable MP4/carousel download links from this environment.

Additional URL-specific attempts after receiving the post list:

- Created `data/instagram-posts.csv` with the provided 19 unique Instagram URLs.
- Installed and tested `yt-dlp`; Instagram returned an empty media response and requested cookies/authentication.
- Installed and tested `gallery-dl`; Instagram redirected to the login page.
- Tested FastDL browser automation through Chrome for all 19 URLs; its `/api/convert` backend returned `link not found` / no usable MP4 or carousel media links.
- Tested SSSInstagram browser automation; it did not produce media links for the tested URL.
- Tested iGram direct `/api/convert`; unsigned calls were rejected as invalid.
- Tested Inflact browser automation and direct API; the browser flow did not pass a usable URL to the backend, and direct API calls returned `403 Forbidden`.

Result:

- Added `scripts/extract-instagram-public-media.mjs` to extract public `og:image`, image candidate URLs, and `video_versions` MP4 URLs directly from Instagram post HTML.
- Downloaded 11 public MP4 reels into `public/media/reels/`.
- Downloaded poster images for all 19 provided Instagram URLs into `public/media/posters/`.
- Downloaded case/image candidates for all 19 URLs into `public/media/cases/instagram/{slot}/`.
- Wrote a detailed download report to `public/media/instagram-download-report.json`.
- Some carousel/static posts expose only images in public HTML, so no MP4 exists for slots `03`, `07`, `13`, `14`, `15`, `16`, `18`, and `19`.

Recommended next options:

1. Ask the client to provide original MP4 exports only for slots without public MP4s, if those posts should play as videos.
2. Run PowerShell as admin and retry browser-cookie access if higher-quality/original assets are required:
   `powershell -ExecutionPolicy Bypass -File scripts/download-instagram-reels.ps1 -Browser chrome`
3. Use an authorized Instagram login session:
   `powershell -ExecutionPolicy Bypass -File scripts/download-instagram-reels.ps1 -Login YOUR_INSTAGRAM_USERNAME`

To rerun the public extractor:

`node scripts/extract-instagram-public-media.mjs`

After raw authorized downloads are available, run:

`powershell -ExecutionPolicy Bypass -File scripts/normalize-reels.ps1`

Expected local filenames for the provided URL list:

- `public/media/reels/reel-01.mp4`, `reel-02.mp4`, `reel-04.mp4`, `reel-05.mp4`, `reel-06.mp4`, `reel-08.mp4`, `reel-09.mp4`, `reel-10.mp4`, `reel-11.mp4`, `reel-12.mp4`, `reel-17.mp4`
- `public/media/posters/reel-01.jpg` through `public/media/posters/reel-19.jpg`

## Google Reviews Status

Provided URL:

- `https://g.page/r/CQplNDBUe0xKEAE/review`

This is a Google review submission link, not a reliable reviews export endpoint.

Use one of these instead:

- Google Business Profile review export/manual copy.
- Google Places API with the correct Place ID and API key.
- Approved client-provided review text.

The website has a review data structure ready in `src/lib/content.ts`.
