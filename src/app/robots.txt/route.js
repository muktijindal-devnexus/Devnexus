export async function GET() {
  const content = `
User-agent: *
Disallow:

Sitemap: https://devnexussolutions.com/sitemap_index.xml
`;

  return new Response(content.trim(), {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
