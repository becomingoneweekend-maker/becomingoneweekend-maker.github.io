# Becoming One Weekend

Marketing site for **Becoming One Weekend**, a marriage seminar weekend churches
can host for their congregation, led by Pastors Mike & Gayleen Lindell.

Live at [becomingoneweekend.com](https://becomingoneweekend.com), served via
GitHub Pages from this repository.

## Stack

Plain static HTML/CSS/JS — no build step, no framework, no dependencies.

- `index.html` — single-page site (hero, weekend schedule, six sessions, presenters, host CTA, footer)
- `assets/css/styles.css` — design system (colors, type, components) derived from the printed brochure
- `assets/js/main.js` — mobile nav toggle only
- `assets/img/` — logo mark (SVG), presenter photo, generated OG share image
- `CNAME` — custom domain for GitHub Pages
- `robots.txt` / `sitemap.xml` — basic SEO plumbing

## Local preview

No build step needed. From the repo root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Editing content

All copy lives directly in `index.html` — session descriptions, the schedule,
presenter bio, and contact details. Update it there; no CMS or data file layer.

## Brand

Colors, logo mark, and type pairing (Poppins for display, Inter for body) were
derived from the official print brochure to keep the site and print materials
consistent. Design tokens are defined as CSS custom properties at the top of
`assets/css/styles.css`.
