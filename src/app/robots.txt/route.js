export async function GET() {
  const content = `
User-agent: *
Disallow: /user-login/
Disallow: /register/
Allow: /

User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: DeepSeekBot
Allow: /

User-agent: ClaudeBot
Allow: /

Sitemap: https://devnexussolutions.com/sitemap.xml
`;

  return new Response(content.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
