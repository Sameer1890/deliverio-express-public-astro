# Deliverio Express — Astro public website

A static, SEO-conscious public website starter for Deliverio Express, using Astro + TypeScript and a teal/black brand theme. The existing Laravel + MySQL + Filament portals remain separate.

## Requirements
- Node.js 20.3.0+ recommended
- npm
- GitHub account for Cloudflare Pages deployment

## Run locally
```bash
npm install
cp .env.example .env
npm run dev
```
Open the local URL printed by Astro.

## Before launch — required edits
1. In `astro.config.mjs`, replace `https://YOUR-DOMAIN.com` with your real canonical domain.
2. In `public/robots.txt`, replace the placeholder domain with your real domain.
3. Set `PUBLIC_PORTAL_URL` and `PUBLIC_TRACKING_URL` in Cloudflare Pages environment variables (or `.env` locally) to the real portal URLs.
4. Replace placeholder contact details with verified business contact information.
5. The contact form is intentionally a visual placeholder and is not connected to email or a backend yet.
6. The tracking form forwards the tracking number to `PUBLIC_TRACKING_URL` as a `?tracking=` query parameter. Confirm your Laravel tracking route accepts that format, and add validation/rate limiting on the backend.
7. Confirm every advertised service, route, COD process and delivery promise before publishing.
8. Add your real logo and a real social preview image if available. The current logo is a simple text/shape placeholder.

## SEO included
- Static HTML pages, unique page titles and meta descriptions
- Canonical URLs, Open Graph metadata, responsive layout and accessible navigation
- Astro sitemap integration
- `robots.txt`
- Organization JSON-LD on homepage

SEO does not guarantee a #1 ranking. Rankings depend on useful original content, competition, real service information, links, local SEO, technical health and time.

## Build
```bash
npm run build
npm run preview
```
Generated static site is in `dist/`.

## Deploy to Cloudflare Pages
1. Push this project to a GitHub repository.
2. In Cloudflare Dashboard, open Workers & Pages → Create → Pages → Connect to Git.
3. Select the repository.
4. Build command: `npm run build`
5. Build output directory: `dist`
6. Add environment variables `PUBLIC_PORTAL_URL` and `PUBLIC_TRACKING_URL`.
7. Deploy, then add your custom domain in the Pages project settings.
8. Make sure `astro.config.mjs` and `public/robots.txt` use the same real domain before production deployment.
