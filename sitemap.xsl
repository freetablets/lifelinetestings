<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex,follow"/>
        <title>XML Sitemap | AccessPath Guide</title>
        <style>
          body{margin:0;background:#f6f8fa;color:#182633;font-family:Inter,Arial,sans-serif;line-height:1.5}
          main{max-width:1100px;margin:48px auto;padding:0 20px}
          header{background:linear-gradient(135deg,#071827,#174f78);color:#fff;padding:28px;border-radius:18px;box-shadow:0 18px 50px rgba(7,24,39,.18)}
          h1{margin:0 0 8px;font-family:Georgia,serif;font-size:36px}
          p{margin:0;color:#dce8ee}
          .count{display:inline-block;margin-top:16px;padding:6px 11px;border:1px solid rgba(255,255,255,.25);border-radius:999px;font-weight:700}
          table{width:100%;border-collapse:collapse;margin-top:24px;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 12px 35px rgba(7,24,39,.09)}
          th,td{text-align:left;padding:14px 16px;border-bottom:1px solid #e4eaee}
          th{background:#0b2b46;color:#fff;font-size:13px;text-transform:uppercase;letter-spacing:.05em}
          tr:last-child td{border-bottom:0}
          tr:nth-child(even) td{background:#f9fbfc}
          a{color:#0c6b57;font-weight:650;text-decoration:none;word-break:break-all}
          a:hover{text-decoration:underline}
          .note{margin-top:18px;color:#647482;font-size:14px}
        </style>
      </head>
      <body>
        <main>
          <header>
            <h1>AccessPath Guide XML Sitemap</h1>
            <p>This sitemap helps search engines discover the canonical public pages on lifelinetestings.pages.dev.</p>
            <span class="count"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs</span>
          </header>
          <table>
            <thead><tr><th>#</th><th>Canonical URL</th><th>Last modified</th></tr></thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td><xsl:value-of select="position()"/></td>
                  <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
                  <td><xsl:value-of select="sitemap:lastmod"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
          <p class="note">The visual layout is for visitors only. Search engines read the underlying standard XML sitemap data.</p>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
