# The Tao of Effortless Drawing — Landing Page Technical Proposal

## Project Overview

A custom-built, long-form sales landing page for "The Tao of Effortless Drawing" seed launch course ($97). The page will be developed in a GitHub repository, built with Claude Code, deployed via CI/CD, and designed in a Shift Network-inspired style — elegant, spiritually-resonant, long-form with strong visual hierarchy and intentional pacing.

---

## Architecture

**Repository:** `effortless-drawing-course` on GitHub (MJB-Homestead-Co org)

**Tech stack:**

- **Static site:** HTML + CSS + minimal vanilla JS (no framework needed for a single landing page — fast, simple, zero dependencies)
- **Hosting/deployment:** Cloudflare Pages — free tier, automatic GitHub CI/CD integration, custom domain support, edge-deployed globally
- **Domain:** effortlessdrawingcourse.com (registered on Namecheap, DNS pointed to Cloudflare)
- **Enrollment CTA:** All "Enroll Now" buttons link to the Thinkific checkout URL for the course product

---

## Repository Structure

```
effortless-drawing-course/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions → Cloudflare Pages
├── .claude/
│   ├── settings.json           # Project Claude permissions
│   └── commands/               # Custom Claude slash commands
├── docs/
│   └── proposal.md             # This document
├── src/
│   ├── index.html              # Main landing page
│   ├── css/
│   │   └── styles.css          # All styles
│   ├── js/
│   │   └── main.js             # Smooth scroll, mobile nav, countdown timer
│   └── images/                 # Hero images, module icons, instructor photo
├── CLAUDE.md                   # Claude Code project context
├── .gitignore
└── README.md
```

---

## Page Design — Shift Network Style

The page follows a long-form, single-page sales structure optimized for the seed launch audience (spiritually-oriented learners coming from an affiliate's mailing list).

### Design Language

- Warm, contemplative aesthetic
- Generous whitespace
- Elegant serif headings (Georgia, Playfair Display, or similar)
- Clean sans-serif body text (Inter, Source Sans)
- Muted earth tones with selective accent color
- Subtle section transitions and dividers
- CTA buttons that feel inviting rather than aggressive

### Section Flow

#### 1. Hero
Full-width, atmospheric. Headline: "The Tao of Effortless Drawing." Subhead capturing the core promise. Primary CTA button. Founding member / limited seats badge.

#### 2. The Pain
"Have you ever picked up a pencil with the urge to draw..." Series of resonant questions drawn directly from the course outline. These are powerful — use them almost verbatim.

#### 3. The Breakthrough
Introduction of the conscious/subconscious framework. The insight that angles, not distances, are the bridge. This is the "aha" moment of the page. Visual treatment should feel like a revelation.

#### 4. What You'll Discover
The three pillars: Triangulation (2D form), Chiaroscuro (light and dark), Cross-hatching (3D volume). Brief, evocative descriptions. Optional simple illustrations or icons.

#### 5. Module-by-Module Journey
All 9 modules with titles and 2–3 sentence descriptions. Styled as an elegant progression/timeline. Each module builds on the last — make that visual.

#### 6. The Experience
What it feels like. Flow states, creative bliss, sacred ritual. Pull from the "Joy of Effortless Drawing" section of the course outline. This is the emotional close before the offer.

#### 7. The Offer
"Founding Member Cohort" framing. What's included:
- 9 live sessions via Zoom
- Recordings for replay
- Private community access
- Founding member pricing

Price: $97 (future on-demand price: $197–$247). Strong CTA.

#### 8. About the Instructor
Bio section with photo placeholder. Credentials, approach, personal connection to the method.

#### 9. FAQ
Collapsible accordion. Cover: who is this for, do I need experience, what materials do I need, what if I miss a session, refund policy, how long do I have access.

#### 10. Final CTA
Closing quote:

> "The act of drawing is not a technical performance to be mastered. It is a process of manifestation — a sacred conversation between your conscious intention and the extraordinary intelligence that already lives within you."

Final enrollment button.

#### 11. Footer
Copyright, contact email, links to terms/privacy (placeholder).

---

## Enrollment Flow

All CTA buttons use a `data-enroll` attribute and link to the Thinkific checkout URL:

```html
<a href="https://[your-thinkific-subdomain].thinkific.com/courses/[course-slug]" data-enroll>
  Enroll Now — Founding Member Price $97
</a>
```

### Affiliate Attribution Pass-Through

1. Affiliate promotes: `https://effortlessdrawingcourse.com?ref=abc123`
2. JS captures `?ref=` on page load and appends to all `data-enroll` hrefs
3. Visitor clicks CTA → lands on Thinkific with `?ref=abc123` intact
4. Thinkific sets 30-day tracking cookie, attributes sale to affiliate

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const ref = params.get('ref');
  if (ref) {
    document.querySelectorAll('a[data-enroll]').forEach(link => {
      const url = new URL(link.href);
      url.searchParams.set('ref', ref);
      link.href = url.toString();
    });
  }
});
```

---

## CI/CD Pipeline

- **Trigger:** Push to `main`
- **Action:** Deploy `src/` to Cloudflare Pages
- **Secrets:** `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
- Preview deployments on PRs supported automatically

---

## GitHub Project Issues

| # | Issue | Description |
|---|---|---|
| 1 | Repo setup | Initialize repo, configure .gitignore, README, GitHub Actions workflow |
| 2 | Cloudflare Pages setup | Connect repo, configure custom domain, SSL |
| 3 | DNS configuration | Point effortlessdrawingcourse.com to Cloudflare |
| 4 | HTML scaffold | Build page structure with all 11 sections, semantic HTML |
| 5 | CSS design system | Typography, color palette, spacing scale, responsive breakpoints |
| 6 | Hero section | Design and implement with CTA |
| 7 | Pain + Breakthrough sections | Copy and layout |
| 8 | Module journey section | Timeline/progression design |
| 9 | Offer + pricing section | Founding member framing, CTA |
| 10 | FAQ accordion | Collapsible sections with JS |
| 11 | Responsive polish | Mobile-first review and fixes |
| 12 | Thinkific checkout integration | Wire up all CTA buttons with affiliate parameter support |
| 13 | Performance audit | Lighthouse score, image optimization, minimal payload |
| 14 | Launch checklist | Final review, OG meta tags, favicon, analytics snippet |
