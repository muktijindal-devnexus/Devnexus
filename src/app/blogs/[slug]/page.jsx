import { BlogContent } from "./blog";

export async function generateMetadata({ params }) {
  // ✅ params ko await karo
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;


  return {
    title: "Blog - DevNexus Solutions",
    description:
      "DevNexus Solutions has worked with top clients to grow their brands and reach their desired audience.",
    alternates: {
      canonical: `https://devnexussolutions.com/blogs/${slug}`,
    },
      robots: {
      index: true,
      follow: true,
    },
      openGraph: {
      title: "Blog - DevNexus Solutions",
      description:
        "DevNexus Solutions has worked with top clients to grow their brands and reach their desired audience.",
      url: `https://devnexussolutions.com/blogs/${slug}`,
      siteName: "DevNexus Solutions",
      type: "article",
      locale: "en_IN",
    },
  };
}

export default function BlogDetailPage() {
  return <BlogContent />;
}
