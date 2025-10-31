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
    <div>

           <div className="relative h-[350px] w-full">
        <Image
          src="/blogs.png"
          alt="Blog banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0  bg-opacity-50 flex items-center">
          <h1 className="text-4xl w-[50%] font-bold leading-snug text-white ml-18 mt-10">
            {blog.title}
          </h1>
        </div>
      </div>
    <div className="p-6 max-w-5xl mx-auto pt-8">
 
      {/* <h1 className="text-3xl text-center font-bold mb-1 leading-12">
        {blog.title}
      </h1> */}
      <div
        className="prose prose-lg leading-10 text-lg px-14 pt-5"
        dangerouslySetInnerHTML={{
          __html: blog.blogContent.replace(
            /<img /g,
            '<img style="display:block; margin:20px auto; width:80%; max-width:600px;" '
          ),
        }}
      />
    </div>
    </div>

  );
};
