# Dr. Ali Alheneiti Website Build Prompt

Use this prompt with Opencode, Codex, or another coding agent to build the full website.

## Role

You are a senior product designer, frontend engineer, SEO strategist, and local-service conversion specialist. Build a premium bilingual website for Dr. Ali Alheneiti, a cosmetic dentistry doctor focused on smile beautification, Hollywood smile, zircon, veneers, and dental implants.

The result must feel like a luxury beauty brand supported by medical authority. It should not look like a generic clinic template.

## Primary Goal

Create a high-converting, SEO-focused, bilingual AR/EN website for Dr. Ali Alheneiti that uses:

- The SEO structure and content model of `https://khaledalsayed.com/` as a competitive reference.
- The visual direction of the old demo at `http://ali-alheneiti.online/`.
- Instagram-style vertical video and before/after content as a dominant homepage feature.
- Dr. Ali's personal brand as the strongest brand element, stronger than the clinic name.

Do not copy competitor text verbatim. Use the competitor site only for sitemap, SEO intent, content architecture, and page-section strategy.

## Brand Direction

Positioning:

- Premium cosmetic dentistry.
- Luxury beauty brand with medical precision.
- Elegant, minimal, refined, aspirational.
- Feminine/soft and gender-neutral premium at the same time.
- Strong personal doctor brand.
- Focus on beauty, natural results, precision, and trust.

Target audience:

- Jordan local patients.
- High-end cosmetic patients.
- Female medical tourism patients.

Primary commercial services:

- Hollywood Smile.
- Zircon and Veneers.
- Teeth Implants.

Pricing strategy:

- Do not show public prices.
- Push users toward WhatsApp or consultation for pricing.

## Visual Direction

Use the old demo `http://ali-alheneiti.online/` as the visual reference.

Known old-demo cues:

- Typography: editorial serif display font, clean sans-serif UI/body font, optional signature-style script accent.
- Suggested font direction: `Fraunces` for display, `Inter` for body/UI, optional `Italianno` or similar script for subtle signature accents.
- Mood: soft luxury, editorial, calm, refined, spacious.
- Layout: generous whitespace, elegant section spacing, rounded cards, soft shadow, polished image treatment.
- Avoid harsh hospital blue, stock-clinic templates, and crowded layouts.

Palette:

- Ivory / warm off-white base.
- Deep charcoal / ink text.
- Muted teal primary accent.
- Pistachio secondary accent.
- Optional soft champagne/gold accent used sparingly.

Suggested color tokens:

- `background`: warm ivory.
- `foreground`: deep charcoal.
- `primary`: muted teal.
- `secondary`: pistachio.
- `accent`: champagne/gold.
- `muted`: warm stone / pearl.

Hero direction:

- The hero should visually feel similar to `ali-alheneiti.online`.
- Use a premium editorial hero image treatment.
- If the exact old demo hero asset is not available, recreate the same feel using available doctor/clinic/smile imagery.
- Hero should immediately communicate beauty, natural results, precision, and trust.

## Site Language

Build fully bilingual from day one:

- English: `/en`
- Arabic: `/ar`
- RTL support for Arabic.
- Language switcher in header.
- Every main page should have Arabic and English content structure.
- Arabic copy can start as high-quality placeholder copy if final Arabic content is unavailable, but the architecture must be complete.

## Competitive SEO Reference

Analyze `https://khaledalsayed.com/` for structure, not copying.

Extract the successful SEO pattern:

- Service-first navigation.
- Dedicated commercial service landing pages.
- Before/after cases on important pages.
- Blog topics supporting long-tail informational SEO.
- FAQ sections for each service.
- Google-review-style trust blocks.
- Repeated CTAs to book or WhatsApp.
- Local SEO references to Amman, Jordan, and medical tourism.

Important competitor pages to model structurally:

- Homepage.
- Dental veneers landing page.
- Teeth whitening landing page.
- Dental implants landing page.
- Gummy smile page.
- Blog post pages.
- FAQ blocks.
- Reviews and location sections.

## Required Sitemap

Create these pages for both English and Arabic:

- Home.
- About Dr. Ali.
- Services overview.
- Hollywood Smile.
- Zircon and Veneers.
- Dental Veneers.
- Teeth Implants.
- Teeth Whitening.
- Gummy Smile.
- Cases / Before and After.
- Instagram Reels Gallery.
- Testimonials.
- Blog index.
- Blog detail template.
- FAQ.
- Contact / Book Consultation.

Recommended URL examples:

- `/en/hollywood-smile-jordan`
- `/en/zircon-veneers-amman`
- `/en/dental-implants-jordan`
- `/en/before-after-cases`
- `/ar/ابتسامة-هوليوود-في-الأردن`
- `/ar/زيركون-وفينير-في-عمان`
- `/ar/زراعة-الأسنان-في-الأردن`

Use framework-specific routing conventions if the project stack already exists.

## Homepage Sections

Build the homepage with these sections:

1. Premium hero.
   - Strong Dr. Ali personal-brand message.
   - Main CTA: WhatsApp consultation.
   - Secondary CTA: View transformations.
   - Hero visual inspired by the old demo.

2. Trust strip.
   - Google rating.
   - Cosmetic dentistry focus.
   - Patients from Jordan and abroad.
   - Natural-looking smile transformations.

3. Dominant before/after showcase.
   - This can visually dominate the homepage.
   - Use elegant, high-impact cards.
   - Include labels by service: Hollywood Smile, Zircon, Veneers, Implants.

4. Instagram-style vertical reels feed.
   - Feed-style layout.
   - Mobile-first.
   - Vertical video cards.
   - Include patient mirror-reaction videos as testimonial candidates when available.

5. Signature services.
   - Hollywood Smile.
   - Zircon and Veneers.
   - Teeth Implants.
   - Teeth Whitening.
   - Gummy Smile.

6. About Dr. Ali.
   - Doctor-led brand story.
   - Premium portrait treatment.
   - Emphasize precision, artistry, and natural results.

7. Treatment process.
   - Consultation.
   - Smile analysis.
   - Digital planning.
   - Treatment.
   - Final reveal and follow-up.

8. Reviews.
   - Google review style.
   - Use real reviews only when extracted from an approved source.
   - If unavailable, create placeholders clearly marked for replacement.

9. Medical tourism section.
   - Softly target female medical tourism patients.
   - Mention Amman/Jordan, travel support, consultation via WhatsApp, treatment planning.

10. FAQ.

11. Final CTA.
   - WhatsApp-first.
   - Book consultation.

## Service Page Template

Each service page must include:

- SEO hero with service keyword and location intent.
- Short value proposition.
- Who it is for.
- Benefits.
- Procedure/process.
- Before/after cases related to the service.
- Instagram reels related to the service.
- Why choose Dr. Ali.
- FAQs.
- Related blog posts.
- WhatsApp consultation CTA.

Primary service SEO focuses:

- Hollywood Smile in Jordan.
- Hollywood Smile in Amman.
- Zircon veneers in Jordan.
- Dental veneers in Amman.
- Teeth implants in Jordan.
- Cosmetic dentist in Amman.
- Smile makeover Jordan.
- Natural veneers Jordan.

## Instagram Reels and Media System

The site must include a reusable vertical media system.

Important:

- Do not depend on live Instagram scraping in the frontend.
- Do not build fragile client-side scraping.
- Use locally stored exported media files, a CMS, or a server-side ingestion workflow.
- The client owns the Instagram page `https://www.instagram.com/ali_alheneiti/`, so media may be exported/downloaded only through approved account access, Meta tools, or client-provided files.

Preferred media workflow:

1. Ask for client-authorized media export or account access.
2. Export/download reels and posts from the owned account.
3. Store final selected assets locally in the project.
4. Compress videos for web.
5. Generate poster images/thumbnails.
6. Create structured metadata for each case/reel.
7. Render them through the site.

Create this content structure:

```ts
type CaseMedia = {
  id: string;
  locale: "en" | "ar";
  title: string;
  slug: string;
  treatment: "hollywood-smile" | "zircon-veneers" | "veneers" | "implants" | "whitening" | "gummy-smile" | "testimonial";
  type: "before-after" | "reel" | "testimonial";
  videoSrc?: string;
  posterSrc: string;
  beforeSrc?: string;
  afterSrc?: string;
  caption: string;
  alt: string;
  isFeatured: boolean;
  sourceUrl?: string;
};
```

Reels gallery UX:

- Instagram-style feed.
- Vertical cards.
- Mute/unmute control.
- Tap/click to open detail modal or detail page.
- Filter by treatment.
- Patient mirror-reaction videos should be marked as testimonials when manually identified.
- Before/after results may dominate homepage visually.

Video performance requirements:

- Use compressed MP4/WebM where possible.
- Lazy-load below-the-fold videos.
- Use poster images.
- Do not autoplay all videos at once.
- Autoplay only muted and preferably on viewport intersection.
- Respect reduced-motion preferences.

Suggested asset folders:

- `/public/media/reels/`
- `/public/media/posters/`
- `/public/media/cases/before/`
- `/public/media/cases/after/`
- `/public/media/doctor/`
- `/public/media/clinic/`

## Old Demo Asset Extraction

Use `http://ali-alheneiti.online/` as design reference.

If technically possible, inspect the public assets from the old demo:

- HTML.
- CSS bundle.
- JS bundle only for understanding structure and visual behavior.
- Public images if directly available and legally usable.

Known old demo details:

- Title: `Dr. Ali Alheneiti | Cosmetic Dentistry`.
- Fonts loaded: `Fraunces`, `Inter`, `Italianno`.
- CSS direction: luxury editorial, glass panels, teal/gold, soft shadows, rounded corners.

Do not blindly copy minified code. Recreate the visual direction cleanly in the new project.

## Google Reviews

Reference provided:

- `https://g.page/r/CQplNDBUe0xKEAE/review`

Important:

- This URL is primarily a review submission link, not a reliable review extraction endpoint.
- For real reviews, use one of these approved methods:
  - Google Business Profile dashboard export/screenshots/manual copy.
  - Google Places API with the correct Place ID and API key.
  - Client-provided review text and names.

Build the reviews system so real reviews can be inserted later.

Review item structure:

```ts
type Review = {
  id: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  source: "google" | "instagram" | "video" | "manual";
  treatment?: string;
  locale: "en" | "ar";
};
```

Display style:

- Google-review-style cards.
- Star rating.
- Reviewer first name or anonymized name.
- Link to Google review/profile if available.
- Avoid fake reviews in production.

## Blog Strategy

Create a blog system that supports SEO growth.

Initial blog topic clusters:

- Hollywood Smile in Jordan: what to know before booking.
- Zircon vs veneers: which is better for your smile?
- How long do veneers last?
- Natural-looking veneers: how to avoid fake-looking teeth.
- Dental implants in Jordan: process and recovery.
- Smile makeover for medical tourism patients.
- Teeth whitening vs veneers.
- Gummy smile treatment options.
- How to choose a cosmetic dentist in Amman.

Each blog post should include:

- SEO title.
- Meta description.
- Intro.
- Clear headings.
- Internal links to services.
- FAQ if relevant.
- CTA to WhatsApp consultation.

## Technical SEO

Implement:

- Metadata per page.
- Open Graph images.
- Canonicals.
- Bilingual hreflang tags.
- LocalBusiness schema.
- Dentist schema if applicable.
- Service schema.
- FAQPage schema.
- Review schema only if compliant with Google guidelines.
- BlogPosting schema.
- Sitemap.xml.
- Robots.txt.
- Clean slugs.
- Descriptive image alt text.
- Internal linking between services, cases, reels, and blog posts.

## Conversion Requirements

- WhatsApp should be the primary CTA.
- Add sticky mobile WhatsApp/book CTA.
- Add clear booking/contact options.
- Keep pricing behind WhatsApp or consultation.
- Use consultation-focused copy, not discount-focused copy.
- Every service page should have multiple conversion points.

## Accessibility and Performance

- Fully responsive.
- Excellent mobile experience.
- RTL-safe Arabic layout.
- Accessible contrast.
- Keyboard navigation.
- Proper semantic headings.
- Optimized images.
- Lazy-loaded videos.
- Avoid unnecessary animation on low-power devices.
- Respect `prefers-reduced-motion`.

## Implementation Expectations

Before coding:

1. Inspect the existing project structure.
2. Identify framework and styling approach.
3. Make the smallest correct architectural choices.
4. Do not overengineer.

While coding:

- Create reusable components only where they are clearly reused.
- Keep content data structured and easy to update.
- Make bilingual content management clean.
- Avoid hardcoding repeated content across pages.
- Use placeholder assets only when real assets are unavailable.
- Clearly label placeholder reviews/media as placeholders.

Verification:

- Run lint/build/typecheck if available.
- Check responsive layout.
- Check Arabic RTL layout.
- Check that video sections do not hurt page performance.
- Check metadata output if the framework supports it.

## Final Output

The finished project should include:

- Complete bilingual site structure.
- Premium homepage.
- Service landing pages.
- Before/after cases page.
- Instagram-style reels gallery.
- Testimonials/reviews system.
- Blog templates and starter posts.
- Contact/booking page.
- SEO metadata/schema foundations.
- Clear asset folders and content data files.
- Documentation explaining how to add reels, cases, reviews, and blog posts.

Prioritize:

1. Premium beauty-brand feel.
2. Dr. Ali personal brand.
3. Before/after proof.
4. Instagram-style vertical content.
5. SEO structure.
6. WhatsApp conversion.
7. Bilingual AR/EN support.
