# Media Asset Workflow

Use these folders for client-owned media exports.

## Reels

Place the latest 30 exported Instagram reels here:

- `public/media/reels/reel-01.mp4`
- `public/media/reels/reel-02.mp4`
- Continue through `reel-30.mp4`

Place poster images here:

- `public/media/posters/reel-01.jpg`
- `public/media/posters/reel-02.jpg`
- Continue through `reel-30.jpg`

The metadata slots already exist in `src/lib/content.ts`.

## Before/After Cases

Use:

- `public/media/cases/before/`
- `public/media/cases/after/`

Then update the `cases` array in `src/lib/content.ts`.

## Google Reviews

Use real review text only from Google Business Profile, Places API, or client-provided approved copy.

The link `https://g.page/r/CQplNDBUe0xKEAE/review` is a review submission link, not a reliable export endpoint.
