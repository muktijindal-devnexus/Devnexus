'use client';
import React, { useEffect, useState } from 'react';

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('https://backend.devnexussolutions.com/api/blogs');
        const data = await res.json();

        console.log('Fetched Blogs:', data);

        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className="mb-8 p-4 border rounded shadow">
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.blogContent }}
            />
            <p className="text-gray-500 text-sm mt-2">
              Posted on: {new Date(blog.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
