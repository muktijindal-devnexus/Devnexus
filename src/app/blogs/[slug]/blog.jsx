"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const slugify = (text) =>
  (text ?? "untitled-post")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export const BlogContent = () => {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [sidebarPosts, setSidebarPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://backend.devnexussolutions.com/api/blogs"
        );
        const allBlogs = await res.json();

        const found = allBlogs.find(
          (b) => slugify(b.title) === slug
        );

        setBlog(found);
        setSidebarPosts(allBlogs.slice(0, 7)); // latest 5 posts
      } catch (err) {
        console.error("Error fetching blogs", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [slug]);
  
  if (loading) return <p className="text-center py-20">Loading...</p>;

  if (!blog) return <p className="text-center py-20">Blog not found</p>;

  return (
    <div>
      {/* Banner */}
      <div className="relative h-[350px] w-full">
        <Image
          src="/blogs.png"
          alt="Blog banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-opacity-50 flex items-center">
          <h2 className="text-4xl w-[50%] font-bold leading-snug text-white ml-18 mt-10">
            {blog.title}
          </h2>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
        {/* Left: Blog Content */}
        <div className="w-full md:w-3/4">
          <h1 className="text-3xl px-14 font-bold mb-4">
            {blog.title}
          </h1>

          <div
            className="prose prose-lg leading-10 text-lg px-6 md:px-14 pt-5"
            dangerouslySetInnerHTML={{
              __html: blog.blogContent.replace(
                /<img /g,
                '<img style="display:block; margin:20px auto; width:80%; max-width:600px;" '
              ),
            }}
          />
        </div>

       {/* Right: Sidebar (Sticky) */}
{!loading && (
  <div className="w-full md:w-1/4">
    {/* Sticky Wrapper */}
    <div className="sticky top-34">
      <div className="relative">
        {/* Title */}
        <div className="absolute -top-5 left-4 bg-blue-800 px-6 py-2 rounded-2xl text-white text-lg font-semibold shadow-lg z-10 w-[90%] text-center">
          Latest Posts
        </div>

        {/* Card */}
        <div className="bg-gradient-to-b from-blue-900 to-blue-400 rounded-3xl p-4 pt-12 text-white">
          <div className="space-y-5">
            {sidebarPosts.map((post) => (
              <Link
                href={`/blogs/${slugify(post.title)}?id=${post._id}`}
                key={post._id}
                className="flex items-start gap-3 hover:underline"
              >
                <div className="w-12 h-12 relative flex-shrink-0">
                  <Image
                    src={
                      post.featuredImage ||
                      "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750423924/WhatsApp_Image_2025-06-20_at_6.10.34_PM_ouwfpi.jpg"
                    }
                    alt={post.title ?? "Blog Thumbnail"}
                    fill
                    className="rounded object-cover"
                  />
                </div>
                <p className="text-sm line-clamp-2">
                  {post.title ?? "Untitled Blog"}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)}

      </div>
    </div>
  );
};
