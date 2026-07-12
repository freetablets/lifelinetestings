# Deployment

## Cloudflare Pages Direct Upload

1. Extract the ZIP.
2. Replace the temporary domain and editorial email.
3. Review `privacy-policy`, `disclaimer`, and `terms-and-conditions` for the final publisher.
4. Run a local server and inspect the site.
5. Upload the contents of this root folder, not an extra parent folder, to Cloudflare Pages Direct Upload.
6. Connect the custom domain in Cloudflare Pages.
7. Confirm HTTPS, redirects, headers, sitemap, robots, feed, manifest, canonical URLs, and Open Graph URLs.
8. Submit the final sitemap to relevant search-engine tools.

No build command or output directory is required. The root is the deployable output.

## Post-deployment checks

- Load the homepage, a nested blog article, 404 page, sitemap, robots, feed, llms.txt, and manifest.
- Test mobile navigation, search, pathway, checklists, print, keyboard focus, and external official links.
- Run Lighthouse from the deployed URL.
- Validate JSON-LD using current structured-data tools.
- Review Cloudflare security headers and logs against the final privacy policy.
