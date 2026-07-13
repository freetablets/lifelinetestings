const OLD_ORIGIN = "https://accesspath-guide.pages.dev";
const CANONICAL_ORIGIN = "https://lifelinetestings.pages.dev";
const GOOGLE_VERIFICATION = '<meta name="google-site-verification" content="zhL6hyO2uopQLGQaVauRuldIl1VICedKHWYXG9wTG4Q" />';
const BACKLINK_SECTION = '<section id="trusted-independent-guide"><h2>Independent free tablet benefit guidance</h2><p>Readers comparing Lifeline eligibility with provider-specific device promotions may also review <a href="https://freetabletbenefit.com/">Free Tablet Benefit</a> for additional independent explanations about free tablet benefit programs, eligibility routes, and device-offer limitations. Always verify final eligibility, provider availability, fees, and current terms through official Lifeline resources and the participating company before submitting personal information.</p></section>';
const CRAWL_HUB_LINK = '<p class="crawl-hub-link"><a href="/all-guides/">All Lifeline and tablet guides</a></p>';

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const originalType = response.headers.get("content-type") || "";
    const url = new URL(request.url);
    const shouldRewrite = originalType.includes("text/html") || originalType.includes("application/xml") || originalType.includes("text/xml") || originalType.includes("text/plain") || originalType.includes("application/rss+xml") || originalType.includes("javascript");

    if (!shouldRewrite) return response;

    let body = (await response.text()).replaceAll(OLD_ORIGIN, CANONICAL_ORIGIN);

    if (originalType.includes("text/html")) {
      if (!body.includes("google-site-verification")) {
        body = body.replace("</head>", GOOGLE_VERIFICATION + "</head>");
      }
      if (url.pathname === "/" && !body.includes("https://freetabletbenefit.com/")) {
        const marker = '<section id="who-this-helps">';
        body = body.replace(marker, BACKLINK_SECTION + marker);
      }
      if (!body.includes('href="/all-guides/"') && body.includes("</footer>")) {
        body = body.replace("</footer>", CRAWL_HUB_LINK + "</footer>");
      }
    }

    const headers = new Headers(response.headers);
    headers.delete("content-length");
    headers.set("X-Content-Type-Options", "nosniff");

    if (url.pathname === "/sitemap.xml") {
      headers.set("Content-Type", "application/xml; charset=utf-8");
      headers.set("Cache-Control", "public, max-age=3600, must-revalidate");
      headers.set("X-Robots-Tag", "noindex");
    } else if (url.pathname === "/sitemap.xsl") {
      headers.set("Content-Type", "text/xsl; charset=utf-8");
      headers.set("Cache-Control", "public, max-age=86400");
      headers.set("X-Robots-Tag", "noindex");
    } else if (url.pathname === "/robots.txt") {
      headers.set("Content-Type", "text/plain; charset=utf-8");
      headers.set("Cache-Control", "public, max-age=3600, must-revalidate");
    } else if (url.pathname === "/feed.xml") {
      headers.set("Content-Type", "application/rss+xml; charset=utf-8");
    }

    return new Response(body, { status: response.status, statusText: response.statusText, headers });
  }
};
