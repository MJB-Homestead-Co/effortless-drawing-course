# The Tao of Effortless Drawing — Landing Page

Sales landing page for the **Tao of Effortless Drawing** seed launch course ($97).

## Tech Stack

- **Frontend:** Static HTML + CSS + vanilla JS (no framework)
- **Hosting:** Cloudflare Pages (edge-deployed, free tier)
- **Domain:** effortlessdrawingcourse.com
- **Enrollment:** Thinkific checkout
- **CI/CD:** GitHub Actions → Cloudflare Pages on push to `main`

## Project Structure

```
effortless-drawing-course/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions → Cloudflare Pages
├── src/
│   ├── index.html            # Main landing page
│   ├── css/
│   │   └── styles.css        # All styles
│   ├── js/
│   │   └── main.js           # Smooth scroll, FAQ accordion, affiliate pass-through
│   └── images/               # Hero images, instructor photo, module icons
├── .gitignore
└── README.md
```

## Local Development

Open `src/index.html` directly in a browser — no build step required.

## Deployment

Pushes to `main` automatically deploy to Cloudflare Pages via GitHub Actions.
Preview deployments are generated automatically for pull requests.

## Enrollment & Affiliate Attribution

All CTA buttons use a `data-enroll` attribute and link to the Thinkific checkout URL.
A `?ref=` query parameter is captured on page load and appended to all checkout links
so affiliate attribution flows through to Thinkific correctly.

## Page Sections

1. Hero
2. The Pain
3. The Breakthrough
4. What You'll Discover
5. Module-by-Module Journey
6. The Experience
7. The Offer
8. About the Instructor
9. FAQ
10. Final CTA
11. Footer
