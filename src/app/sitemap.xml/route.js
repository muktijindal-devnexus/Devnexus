// app/sitemap.xml/route.js

export async function GET() {
  const baseUrl = "https://devnexussolutions.com";
  const lastmod = new Date().toISOString();

  // Static URLs
  const staticPaths = [
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
  ];

  const staticUrls = staticPaths
    .map((path) => {
      const priority = path === "" ? "1.00" : "0.80";
      return `
<url>
  <loc>${baseUrl}${path}</loc>
  <lastmod>${lastmod}</lastmod>
  <priority>${priority}</priority>
</url>`;
    })
    .join("");

  // Fetch dynamic blogs
  let blogUrls = "";
  try {
    const res = await fetch("https://backend.devnexussolutions.com/api/blogs", {
      next: { revalidate: 3600 },
    });

    const blogs = await res.json();

    blogUrls = blogs
      .map(
        (blog) => `
<url>
  <loc>${baseUrl}/blogs/${slugify(blog.title)}</loc>
  <lastmod>${lastmod}</lastmod>
  <priority>0.80</priority>
</url>`
      )
      .join("");
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
  }

  // Final XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${staticUrls}
${blogUrls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

// Slugify helper function
function slugify(text) {
  return (text ?? "untitled-post")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
