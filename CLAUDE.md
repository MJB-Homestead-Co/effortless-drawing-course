# CLAUDE.md — The Tao of Effortless Drawing

Context for Claude Code when working in this repository.

## Project Overview

A long-form sales landing page for **The Tao of Effortless Drawing** — a seed launch course at $97 (future on-demand price: $197–$247).

- **Live URL:** https://effortlessdrawingcourse.com
- **GitHub repo:** https://github.com/MJB-Homestead-Co/effortless-drawing-course
- **Organization:** MJB-Homestead-Co (GitHub)
- **Enrollment platform:** Thinkific (checkout URL to be added once course product is created)

## Tech Stack

- Static HTML + CSS + vanilla JS — no framework, no build step
- Hosted on Cloudflare Pages, deployed via GitHub Actions on push to `main`
- Domain registered on Namecheap, DNS pointed to Cloudflare

## Repository Structure

```
src/
├── index.html       # The entire landing page
├── css/styles.css   # All styles
├── js/main.js       # Smooth scroll, FAQ accordion, affiliate ref pass-through
└── images/          # Hero, instructor photo, module icons
.github/workflows/
└── deploy.yml       # Cloudflare Pages deployment
```

## Design

Shift Network-inspired aesthetic:
- Serif headings: Playfair Display or Georgia
- Sans-serif body: Inter or Source Sans
- Warm earth tones — parchment, warm grays, deep accent
- Generous whitespace, subtle section dividers
- CTA buttons: inviting, not aggressive

## Page Sections (in order)

1. Hero — headline, subhead, primary CTA, founding member badge
2. The Pain — resonant questions from the course outline
3. The Breakthrough — conscious/subconscious framework, angles insight
4. What You'll Discover — three pillars: Triangulation, Chiaroscuro, Cross-hatching
5. Module-by-Module Journey — all 9 modules as an elegant timeline
6. The Experience — flow states, creative bliss, sacred ritual
7. The Offer — founding member framing, $97 price, CTA
8. About the Instructor — bio, credentials, personal connection
9. FAQ — collapsible accordion
10. Final CTA — closing quote + enrollment button
11. Footer — copyright, contact, terms/privacy links

## Enrollment & Affiliate Attribution

All CTA buttons use `data-enroll` attribute. On page load, JS captures `?ref=` from
the URL and appends it to all `data-enroll` href values so Thinkific affiliate
attribution is preserved. If no `?ref=` is present, buttons link to plain checkout URL.

**Affiliate link format:** `https://effortlessdrawingcourse.com?ref=HER_CODE`

## CI/CD

- Push to `main` → auto-deploy to Cloudflare Pages
- PRs get preview deployments automatically
- Secrets needed: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`

## Pending Before Launch

- [ ] Thinkific course product created → get checkout URL
- [ ] Confirm Thinkific affiliate parameter name (likely `ref`)
- [ ] Instructor photo
- [ ] Cloudflare Pages project connected to this repo
- [ ] Custom domain configured in Cloudflare
- [ ] OG meta tags, favicon, analytics snippet
