import { notFound } from "next/navigation";
import { BlogContent } from "./blog";

export async function generateMetadata({ params }) {
  const slug = params?.slug;

  if (!slug) {
    return {
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${slug.replace(/-/g, " ")} | DevNexus Solutions`,
    description:
      "Explore insights on AI-powered web development trends for 2026 by DevNexus Solutions.",
    alternates: {
      canonical: `https://devnexussolutions.com/blogs/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function BlogDetailPage() {
  return <BlogContent />;
}
