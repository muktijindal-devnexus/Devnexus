'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';


export const metadata = {
  title: "Blog - DevNexus Solutions",
  description: "DevNexus Solutions has worked with top clients to grow their brands and reach their desired audience.  Reach out to us today, talk with our expert today.",
  alternates: {
    canonical: "https://www.devnexussolutions.com/blog/${slug}",
  },
};


const slugify = (text) =>
  (text ?? 'untitled-post')
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogBySlug = async () => {
      const res = await fetch('https://backend.devnexussolutions.com/api/blogs');
      const allBlogs = await res.json();
      const found = allBlogs.find((b) => slugify(b.title) === slug);
      setBlog(found);
    };

    fetchBlogBySlug();
  }, [slug]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto pt-28">
      <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: blog.blogContent }}
      />
    </div>
  );
}
