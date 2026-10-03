# UPÉ Synthetic Limited: website

Marketing site for **UPÉ Synthetic Limited**, an AI-first creative studio. *Create Beyond Reality.*

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4 and Framer Motion. Dark by default, with a light-mode toggle.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint
```

Requires Node.js 20.9 or newer.

---

## Editing content

**All copy lives in [`data/site.ts`](data/site.ts).** You never need to touch a component for a content change.

| What | Where in `data/site.ts` |
| --- | --- |
| Company name, tagline, city, phone, email, WhatsApp, address, socials | `site` |
| Header navigation and the About dropdown | `nav` |
| Hero eyebrow, subtext, chips, hero images or showreel video | `hero` |
| "Trusted by" logos | `clientLogos` |
| Stats band numbers | `stats` |
| Who We Help cards | `audiences` |
| How We Work steps | `steps` |
| Testimonials | `testimonials` |
| Final call-to-action text | `finalCta` |
| Services (cards, service page blocks, contact form options) | `services` |
| Services FAQ | `serviceFaqs` |
| Case studies (Work grid and `/work/[slug]` pages) | `work` |
| Our Story, mission, vision, timeline | `story`, `timeline` |
| Values and culture | `values`, `culture` |
| Co-founders (featured on the home page and at the top of the Leadership page) | `cofounders` |
| Leadership page intro, creative-team capabilities, "Work with us" text | `leadership` |
| Core team (Leadership page) | `team` |
| Contact page title and budget ranges | `contactPage` |

### Before launch: replace the placeholders

Everything marked **PLACEHOLDER** in `data/site.ts`, and anything in `[square brackets]`, is sample content:

- [ ] `site.city`, `site.country`, and all four `site.contact` fields (phone, email, WhatsApp, address)
- [ ] `site.social` profile links
- [ ] `clientLogos`: real client logos, used with permission
- [ ] `stats`: your real numbers
- [ ] `testimonials`: real, attributable quotes (the current ones are illustrative)
- [ ] `work`: Truth Lens and Lotus Avio are real projects; the other six case studies are fictional examples. Replace them with real projects.
- [ ] `cofounders`: Pratham Srivastava is real; the second co-founder is a placeholder (name, role, bio, highlights, photo `public/media/team/co-founder-2.webp` and LinkedIn link). Co-founders with real names are added to the site's structured data automatically.
- [ ] `team`: real names, bios and photos for the core team
- [ ] `contactPage.budgetRanges`: currency and ranges for your market
- [ ] Placeholder images in `public/media/` (see below)

### Adding a case study

Add an object to the `work` array. Its `slug` becomes the URL (`/work/<slug>`), and the page, sitemap entry and metadata are generated automatically. Set `featured: true` to show it on the home page (the first six featured items appear there). `category` must be one of the service ids (`ai-reels`, `ai-songs`, `ai-ad-films`, `ai-storytelling`, `websites`), which also drives the Work filter tabs.

Optional extras per project:

- `previewVideo`: a short, muted `.mp4` that plays when the card is hovered
- `videoEmbed`: a YouTube/Vimeo embed URL (e.g. `https://www.youtube-nocookie.com/embed/VIDEO_ID`). It is shown as a click-to-play poster, so the heavy player only loads when someone presses play.

---

## Media

Placeholder media lives in [`public/media/`](public/media) and is referenced by path from `data/site.ts`:

```
public/media/
  hero/   real.webp, synthetic.webp     hero "reality → synthetic" morph frames (4:5)
  work/<slug>/cover.webp, still-*.webp  case-study covers and gallery (16:10)
  team/   *.webp                        portraits (4:5)
  logos/  *.svg                         client logos (white on transparent)
```

To swap an image, drop the new file in `public/media` and update its `src` (and `alt`) in `data/site.ts`. JPG, PNG, WebP and AVIF all work. `next/image` resizes them and serves modern formats automatically. Upload images at least 1600px wide for covers and 1200px for portraits.

- **Hero:** the hero shows a looping wipe from a real photo (`hero.realImage`) to its AI-styled version (`hero.syntheticImage`). Use two versions of the same shot for the best effect. To use a showreel instead, set `hero.video` to an `.mp4` path (keep it short, muted-friendly and under ~4 MB) and `hero.videoPoster` to a still frame.
- **Logos:** the "Trusted by" strip expects light-coloured logos on a transparent background. They are inverted automatically in light mode.

### The UPÉ logo

- [`components/layout/Logo.tsx`](components/layout/Logo.tsx) is a vector redraw of the wordmark used in the header and footer. It uses the current text colour, so it works in dark and light mode, with the gold accent on the É.
- [`public/brand/upe-logo.png`](public/brand/upe-logo.png) is the original artwork. It's used in the social share image and the structured data.

### Fonts

Headings use **Unbounded** and body text uses **Inter**. Both are loaded with `next/font` (self-hosted, no layout shift), and both include the "É" glyph. Change them in [`app/layout.tsx`](app/layout.tsx).

---

## Contact form email

The form posts to [`app/api/contact/route.ts`](app/api/contact/route.ts), which validates the submission (the same rules as the browser) and emails it to you via [Resend](https://resend.com). The email's reply-to is the sender, so you can answer straight from your inbox. A hidden honeypot field filters basic spam bots.

1. Create a free Resend account and add and verify your domain.
2. Create an API key.
3. Set the environment variables below (locally in `.env.local`, or in Vercel).

| Variable | Example | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | `re_...` | Resend API key |
| `CONTACT_TO_EMAIL` | `hello@yourdomain.com` | Where enquiries are delivered (comma-separate several) |
| `CONTACT_FROM_EMAIL` | `UPÉ Website <website@yourdomain.com>` | Sender, on your verified domain |
| `NEXT_PUBLIC_SITE_URL` | `https://www.yourdomain.com` | Canonical URL used for SEO, the sitemap and social cards |

Without the email variables, `npm run dev` logs submissions to the terminal so you can test the form. In production the form shows a friendly "email us or WhatsApp us" message instead of failing silently.

---

## Deploying to Vercel

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com/new), import the repository. The Next.js preset is detected automatically, so leave the build settings as they are.
3. Under **Settings → Environment Variables**, add the four variables above.
4. Deploy. Then add your custom domain under **Settings → Domains**, and update `NEXT_PUBLIC_SITE_URL` to match.
5. Submit `https://<your-domain>/sitemap.xml` in Google Search Console.

Every push to `main` redeploys the site, and pull requests get preview URLs.

---

## SEO

- Per-page titles, descriptions, canonical URLs, and Open Graph / Twitter tags via [`lib/seo.ts`](lib/seo.ts)
- A generated social share image ([`app/opengraph-image.tsx`](app/opengraph-image.tsx)) built from the logo and tagline
- [`/sitemap.xml`](app/sitemap.ts) (includes every case study) and [`/robots.txt`](app/robots.ts)
- Organization structured data on every page, and FAQ structured data on `/services`

## Accessibility and motion

- Semantic landmarks, a "Skip to content" link, visible focus styles, and keyboard support throughout. The About dropdown and mobile menu work with Tab, Enter and Escape.
- Every image has alt text, and form fields have labels and announced error messages.
- `prefers-reduced-motion` is respected everywhere. The hero morph becomes a static half-and-half split, and reveals and counters don't animate.
- A **Pause animations** control (in the hero frame and the footer) stops looping motion site-wide, and the choice is remembered.

## Performance

Pages are statically generated. Above-the-fold animations are compositor-only, off-screen sections skip rendering until needed, the form's validation library loads on demand, and scroll reveals use a tiny observer script instead of per-element JavaScript. Framer Motion is reserved for the animated Work filter, and the stat counters use its lightweight `inView` helper.

Lab results (Lighthouse mobile, production build, median of three runs) were 98–100 for Accessibility, Best Practices and SEO on every page tested. Performance was 91 on Services, 91 on Work and 82 on Home (Home peaked at 89). The development machine was under heavy load, so performance numbers swung a lot between runs. Re-check on [PageSpeed Insights](https://pagespeed.web.dev/) once the site is deployed. To keep scores high when adding your own media:

- Export photos and video stills at sensible sizes (see above) and keep the hero video short.
- Avoid adding heavy third-party scripts (chat widgets, trackers). If you need analytics, Vercel Analytics is lightweight.

---

## Project structure

```
app/                  routes (App Router)
  page.tsx            home
  services/           /services
  work/               /work and /work/[slug] case studies
  about/              /about (Our Story), /about/leadership, /about/values
  contact/            /contact
  api/contact/        form submission → email
  sitemap.ts, robots.ts, opengraph-image.tsx, icon.svg, not-found.tsx
components/
  layout/             header, footer, logo, theme and motion toggles, WhatsApp button
  home/               home page sections
  work/               work cards, filter, video embed
  contact/            contact form
  about/              About sub-navigation
  ui/                 buttons, sections, reveal, counter, marquee, accordion, icons
data/
  site.ts             all editable content
  types.ts            content types
lib/                  SEO helper, validation schema, utilities
public/media/         placeholder media
public/brand/         original logo artwork
```
