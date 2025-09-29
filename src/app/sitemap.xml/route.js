// app/sitemap.xml/route.js

export async function GET() {
  const baseUrl = "https://devnexussolutions.com";
  const lastmod = new Date().toISOString(); // e.g. 2025-09-29T08:57:00.000Z

  // Static URLs
  const staticUrls = [
    "",
    "/projects",
    "/career",
    "/blogs",
    "/contact",
    "/aboutus",
    "/web-development-services",
    "/ui-ux-design-services",
    "/mobile-app-development-services",
    "/digital-marketing-services",
    "/blockchain-development-services",
    "/ai-tech-services",
    "/ourteam",
    "/services",
    "/terms-conditions",
    "/privacy-policy",
  ].map(
    (path) => `
<url>
  <loc>${baseUrl}${path}</loc>
  <lastmod>${lastmod}</lastmod>
  <priority>${path === "" ? "1.00" : "0.80"}</priority>
</url>`
  );

  // Fetch dynamic blogs
  let blogUrls = [];
  try {
    const res = await fetch("https://backend.devnexussolutions.com/api/blogs", {
      next: { revalidate: 3600 }, // revalidate every 1 hour
    });
    const blogs = await res.json();

    blogUrls = blogs.map(
      (blog) => `
<url>
  <loc>${baseUrl}/blogs/${slugify(blog.title)}</loc>
  <lastmod>${lastmod}</lastmod>
  <priority>0.80</priority>
</url>`
    );
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
  }

  // Final XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
  http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!--  created with Free Online Sitemap Generator www.xml-sitemaps.com  -->
${staticUrls.join("")}
${blogUrls.join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

// Slugify helper
function slugify(text) {
  return (text ?? "untitled-post")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
