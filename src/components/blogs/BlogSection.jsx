"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Function to convert titles to URL-friendly slugs
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // remove non-word characters
    .replace(/\s+/g, "-") // replace spaces with dashes
    .replace(/-+/g, "-"); // remove multiple dashes

const posts = [
  {
    id: 12,
    title: "Why Choose DevNexus Solutions for Your Digital Transformation Journey?",
    excerpt:
      "With the use of technology and tools, DevNexus Solutions IT Services aids all types of businesses in the complete automation of their processes.",
    image: "https://res.cloudinary.com/dybqc3gax/image/upload/v1750856017/1_vbxxhu.png",
  },
  {
    id: 21,
    title: "Cross-Platform Mobile App Development: The Smarter Way to Build for Android and iOS",
    excerpt:
      "In today's digital world, people want cross-platform apps to save time, cost, and provide better reach. Here's how we do it smarter.",
    image: "https://res.cloudinary.com/dybqc3gax/image/upload/v1750856066/2_ns4b51.png",
  },
  {
    id: 31,
    title: "Top Graphic Design Apps You Should Try in 2025",
    excerpt:
      "Whether you're a pro or beginner, these tools will help you take your creativity to the next level in 2025.",
    image: "https://res.cloudinary.com/dybqc3gax/image/upload/v1750856128/3_xufhlu.png",
  },
  {
    id: 41,
    title: "Top Skills Every UI/UX Designer Should Master in 2025",
    excerpt:
      "2025 demands UI/UX designers to be both creative and technically sound. These are the must-have skills.",
    image: "https://res.cloudinary.com/dybqc3gax/image/upload/v1750856163/4_p4uu1s.png",
  },
  {
    id: 51,
    title: "What is Performance Marketing? An Introductory Guide to ROI-Driven Advertising ",
    excerpt:
      "Pay for real results, not promises. Learn how performance marketing works and how it drives ROI.",
    image: "https://res.cloudinary.com/dybqc3gax/image/upload/v1750856192/5_vk44e6.png",
  },
  {
    id: 61,
    title: "Next.js vs React: A Developer’s Guide to Choosing the Right Framework",
    excerpt:
      "Choosing between React and Next.js? Here’s a complete breakdown to help you make the right decision.",
    image: "https://res.cloudinary.com/dybqc3gax/image/upload/v1750856276/8_1_zgebzv.png",
  },
];

const sidebarPosts = [
  ...posts,
  {
    id: 4,
    title: "Unlocking Digital Success with a Reliable WordPress Partner",
    image: "/images/BannerImage.jpg",
  },
  {
    id: 5,
    title: "How to Create a Brand Content Marketing Plan for 2025",
    image: "/images/BannerImage.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="flex flex-col md:flex-row gap-6 p-6">
      {/* Left Column: Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-3/4">
        {posts.map((post) => (
          <Link
            href={`/blogs/${slugify(post.title)}`}
            key={post.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden h-[300px] hover:shadow-lg transition"
          >
            <div className="relative h-[130px] w-full">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl"
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold text-[16px] leading-snug line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Right Column: Sidebar */}
      <div className="relative w-full md:w-1/4">
        <div className="absolute -top-5 left-4 bg-blue-800 px-6 py-2 rounded-2xl text-white text-lg font-semibold shadow-lg z-10 w-[90%] text-center">
          Latest Posts
        </div>
        <div className="bg-gradient-to-b from-blue-900 to-blue-400 rounded-3xl p-4 pt-12 text-white relative z-0">
          <div className="space-y-5">
            {sidebarPosts.map((post) => (
              <div key={post.id} className="flex items-start gap-3">
                <div className="w-12 h-12 relative flex-shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
                <p className="text-sm line-clamp-2">{post.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
