# QA Report

## Tests actually performed

- Parsed 42 generated HTML pages.
- Counted words from each `data-main-content` article region.
- Checked unique titles, meta descriptions, canonicals, and one H1 per page.
- Parsed all JSON-LD blocks as JSON.
- Checked internal local links and referenced local assets.
- Checked sitemap URL count and canonical page count.
- Checked for lorem ipsum, coming-soon text, fake approval, reserved-device, and guaranteed-approval language.
- Checked exact repeated main-content paragraphs against a 15% threshold.
- Checked that indexable pages appear in the sitemap and search index.
- Re-ran local link and asset checks after extracting the final ZIP.
- Generated eight above-the-fold desktop and mobile preview captures with a local screen-style renderer after Chromium could not exit cleanly in this container.
- Visually inspected representative desktop and mobile captures for hierarchy, overflow, image loading, spacing, and contrast.

## Problems found and fixed

- No unresolved build-blocking issue was found in the final generated copy.
- Used one unique title, description, canonical, and H1 per indexable page.
- Parsed every JSON-LD block as valid JSON.
- Verified local page and asset targets in generated HTML.
- Reserved image dimensions and kept all images local.
- Removed active-ACP, approval, stock, model, shipping, and unlimited-service guarantees.
- Kept client tools browser-only with no fake submission state.

## Remaining limitations

- The reference site could not be recursively crawled from the sandbox because outbound DNS was unavailable. Five key reference pages were inspected through the web renderer; unavailable endpoints are marked honestly in the inventory.
- External W3C HTML/CSS validators, Google Rich Results Test, PageSpeed Insights, CrUX, Search Console, real assistive-technology sessions, and real mobile devices were not available in the local build environment.
- The preview captures use a local HTML/CSS renderer and are not substitutes for Chromium, Safari, iOS, Android, screen-reader, or field-performance testing.
- Provider promotions were intentionally not frozen into the site because live inventory, prices, models, and plan terms change. The provider must be checked at decision time.
- The temporary domain and placeholder editorial email must be replaced before public launch.
- Legal pages describe this static build and should be reviewed for the final publisher, jurisdiction, analytics, advertising, and contact implementation.
- Chromium itself did not exit in this container because of system D-Bus/inotify constraints. Eight fallback above-the-fold previews were generated with WeasyPrint and saved in `preview-screenshots/`; browser-specific JavaScript and rendering still require post-deployment review.

## Final counts

- Indexable pages: 42
- Detailed blog articles: 10
- Editorial words counted from main-content regions: 70,327
- Original local visual assets inventoried: 24
- Preview screenshots: 8
- ZIP name: `premium-lifeline-tablet-guide-cloudflare.zip`

## Deployment readiness

Extracted validation completed with 0 missing required files and 0 broken local asset/page targets. The extracted ZIP root contains `index.html`, Cloudflare files, page folders, local assets, and reports. Internal local targets and assets were checked again on the extracted copy. The site requires a normal static server for local preview and no build step for Cloudflare Pages Direct Upload.
