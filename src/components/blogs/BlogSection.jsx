"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Safe slugify function
const slugify = (text) =>
  (text ?? "untitled-post")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // remove non-word characters
    .replace(/\s+/g, "-") // replace spaces with dashes
    .replace(/-+/g, "-"); // remove multiple dashes

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://backend.devnexussolutions.com/api/blogs"
        );
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const sidebarPosts = blogs?.slice(0, 45); // show latest 5

  return (
    <section className="flex flex-col md:flex-row gap-6 p-6">
      {/* Left: Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-3/4">
        {loading ? (
          <p>Loading blogs...</p>
        ) : (
          blogs?.map((post) => {
            const title = post?.title ?? "Untitled Blog";
            return (
              <Link
                href={{
                  pathname: `/blogs/${slugify(post.title)}`,
                }}
                key={post._id}
                className="bg-white rounded-2xl shadow-md overflow-hidden h-[300px] hover:shadow-lg transition"
                // 👇 pass ID via state
                state={{ id: post._id }}
              >
                <div className="relative h-[130px] w-full">
                  <Image
                    src={
                      post.featuredImage ||
                      "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750423924/WhatsApp_Image_2025-06-20_at_6.10.34_PM_ouwfpi.jpg"
                    }
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-bold text-[16px] leading-snug line-clamp-2">
                    {title}
                  </h2>
                  <div
                    className="text-gray-600 mt-2 text-sm line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: post.blogContent }}
                  />
                </div>
              </Link>
            );
          })
        )}
      </div>

      {/* Right: Sidebar */}
      <div className="relative w-full md:w-1/4">
        <div className="absolute -top-5 left-4 bg-blue-800 px-6 py-2 rounded-2xl text-white text-lg font-semibold shadow-lg z-10 w-[90%] text-center">
          Latest Posts
        </div>
        <div className="bg-gradient-to-b from-blue-900 to-blue-400 rounded-3xl p-4 pt-12 text-white relative z-0">
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
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
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
    </section>
  );
}
