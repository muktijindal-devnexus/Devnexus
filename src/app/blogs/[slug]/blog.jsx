"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const slugify = (text) =>
  (text ?? "untitled-post")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export const BlogContent = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogBySlug = async () => {
      const res = await fetch(
        "https://backend.devnexussolutions.com/api/blogs"
      );
      const allBlogs = await res.json();
      const found = allBlogs.find((b) => slugify(b.title) === slug);
      setBlog(found);
    };

    fetchBlogBySlug();
  }, [slug]);

  if (!blog) return <p>Loading...</p>;
  return (
    <div className="p-6 max-w-4xl mx-auto pt-28">
           {/* <div className="relative h-[380px] w-full mb-10">
                          <Image
                            src={
                              blog.featuredImage ||
                              "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750423924/WhatsApp_Image_2025-06-20_at_6.10.34_PM_ouwfpi.jpg"
                            }
                            alt="hello"
                            fill
  className="object-cover rounded-md"
  quality={100}
                          />
                        </div> */}
      <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
      <div
        className="prose prose-lg leading-lg"
        dangerouslySetInnerHTML={{ __html: blog.blogContent }}
      />
    </div>
  );
}; 
