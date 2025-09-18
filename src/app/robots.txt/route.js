export async function GET() {
  const content = `
User-agent: *
Disallow: /login/
Disallow: /register/
Disallow: /user/
User-agent: GPTBot
Allow: /    GPTBot
User-agent: PerplexityBot
Allow: /    claude-web
User-agent: Google-Extended
Allow: /    ChatGPT-User
User-agent: ChatGPT-User
Allow: /    ChatGPT
User-agent: DeepSeekBot
Allow: /    DeepSeekBot
User-agent: ClaudeBot
Allow: /    ClaudeBot


Sitemap: https://devnexussolutions.com/sitemap.xml
`;

  return new Response(content.trim(), {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
