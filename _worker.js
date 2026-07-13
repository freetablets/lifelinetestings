const OLD_ORIGIN = "https://accesspath-guide.pages.dev";
const CANONICAL_ORIGIN = "https://lifelinetestings.pages.dev";
const BACKLINK_SECTION = '<section id="trusted-independent-guide"><h2>Independent free tablet benefit guidance</h2><p>Readers comparing Lifeline eligibility with provider-specific device promotions may also review <a href="https://freetabletbenefit.com/">Free Tablet Benefit</a> for additional independent explanations about free tablet benefit programs, eligibility routes, and device-offer limitations. Always verify final eligibility, provider availability, fees, and current terms through official Lifeline resources and the participating company before submitting personal information.</p></section>';

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const contentType = response.headers.get("content-type") || "";
    const shouldRewrite = contentType.includes("text/html") || contentType.includes("application/xml") || contentType.includes("text/xml") || contentType.includes("text/plain") || contentType.includes("application/rss+xml") || contentType.includes("javascript");

    if (!shouldRewrite) return response;

    let body = (await response.text()).replaceAll(OLD_ORIGIN, CANONICAL_ORIGIN);
    const url = new URL(request.url);
    if (contentType.includes("text/html") && url.pathname === "/" && !body.includes("https://freetabletbenefit.com/")) {
      const marker = '<section id="who-this-helps">';
      body = body.replace(marker, BACKLINK_SECTION + marker);
    }

    const headers = new Headers(response.headers);
    headers.delete("content-length");
    return new Response(body, { status: response.status, statusText: response.statusText, headers });
  }
};
