'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function BlogDetailPage() {
  const searchParams = useSearchParams();
  const blogId = searchParams.get('id');

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogById = async () => {
      if (!blogId) return;

      try {
        const res = await fetch(
          `https://backend.devnexussolutions.com/api/blogs/${blogId}`
        );
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        console.error('Failed to fetch blog:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogById();
  }, [blogId]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!blog) return <p className="p-6">Blog not found</p>;

  return (
    <div className="max-w-3xl mx-auto py-32 px-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.blogContent }}
      />
      <p className="text-sm text-gray-500 mt-4">
        Posted on: {new Date(blog.createdAt).toLocaleString()}
      </p>
    </div>
  );
}
