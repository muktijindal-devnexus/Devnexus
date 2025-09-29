// app/sitemap.xml/route.js

export async function GET() {
  const baseUrl = 'https://www.devnexussolutions.com';
  const lastmod = new Date().toISOString();

  // Static URLs
  const staticUrls = [
    '',
    '/projects',
    '/career',
    '/blogs',
    '/contact',
    '/aboutus',
    '/web-development-services',
    '/mobile-app-development-services',
    '/digital-marketing-services',
    '/blockchain-development-services',
    '/ai-tech-services',
    '/ourteam',
    '/services',
    '/privacy-policy',
  ].map((path) => `
    <url>
      <loc>${baseUrl}${path}</loc>
      <lastmod>${lastmod}</lastmod>
      <priority>${path === '' ? '1.00' : '0.80'}</priority>
    </url>
  `);

  // Fetch dynamic blogs
  let blogUrls = [];
  try {
    const res = await fetch('https://backend.devnexussolutions.com/api/blogs');
    const blogs = await res.json();

    blogUrls = blogs.map((blog) => `
      <url>
        <loc>${baseUrl}/blogs/${slugify(blog.title)}</loc>
        <lastmod>${lastmod}</lastmod>
        <priority>0.80</priority>
      </url>
    `);
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${staticUrls.join('')}
    ${blogUrls.join('')}
  </urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

// Slugify function
function slugify(text) {
  return (text ?? 'untitled-post')
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}
