export async function GET() {
  const content = `
User-agent: *
Disallow: /user-login/
Disallow: /register/
Allow: /


Sitemap: https://devnexussolutions.com/sitemap.xml
`;

  return new Response(content.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
