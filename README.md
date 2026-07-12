# AccessPath Guide

A premium static editorial website explaining Lifeline eligibility, official verification, household rules, service, provider comparison, and the limits of provider device promotions.

## Build summary

- Canonical temporary domain: `https://accesspath-guide.pages.dev`
- Indexable pages: 42
- Detailed blog articles: 10
- Calculated editorial words: 70,327
- Stack: semantic HTML5, modern CSS, lightweight vanilla JavaScript, JSON-LD
- Deployment target: Cloudflare Pages Direct Upload
- Database, PHP, WordPress, npm, and runtime framework: not required

## Structure

- Page folders contain `index.html` for clean URLs.
- `assets/css/site.css` contains the design system and responsive styles.
- `assets/js/site-config.js` contains brand/domain configuration and lightweight interactions.
- `assets/js/search-index.json` powers client-side search.
- `assets/images/` contains original local illustrations and the social image.
- `preview-screenshots/` contains eight desktop and mobile above-the-fold QA previews.
- Root files contain Cloudflare configuration, discovery files, reports, and domain scripts.

## Local preview

Run from this root:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/`. Do not open pages by double-clicking files because absolute root paths work best through a local server.

## Change brand, domain, and email

Edit `assets/js/site-config.js`, page-visible publisher text, metadata, schema, manifest, reports, and discovery files. For a domain-only change run:

```bash
./set-domain.sh https://example.com
```

On Windows PowerShell:

```powershell
.\set-domain.ps1 -NewDomain https://example.com
```

Then re-run link, metadata, schema, sitemap, and local-preview checks. Replace `editor@accesspathguide.example` with a monitored publisher address before public launch.

## Update dates and facts

Review `SOURCE-LOG.csv` first. When a time-sensitive claim changes, update every affected page, visible dates, JSON-LD dates, the source log, sitemap lastmod, and relevant FAQs or tables. Never revive ACP as a current application program without new official FCC authority.

## Replace images

Keep filenames or update page references. Preserve descriptive alt text, intrinsic width and height, local hosting, compression, and the image inventory. Do not use government seals or a device model that implies guaranteed inventory.

## Add an article

Create a folder with `index.html`, add a unique title, description, canonical, breadcrumbs, source panel, review dates, related links, Article or BlogPosting schema, search-index entry, sitemap URL, RSS item, SEO map row, word-count row, source-log entries, and internal-link-map rows.

## Optional analytics

No analytics or cookies are enabled. Before adding analytics, update the privacy policy, CSP, headers, consent behavior where required, data retention, vendor disclosures, and QA report.

## Optional contact function

This package uses a mailto address and does not claim form submission success. A Cloudflare Pages Function may be added later with server-side validation, input limits, honeypot, abuse controls, plain-text handling, privacy disclosure, and monitored delivery. Never collect benefits documents or identity records.
