"use client";
import React from "react";
import Image from "next/image";

const posts = [
  {
    id: 12,
    title: "Why Choose DevNexus Solutions for Your Digital Transformation Journey?",
    excerpt: "With the use of technology and tools, DevNexus Solutions IT Services aids all types of businesses in the complete automation of their processes.",
    image: "/images/BannerImage.jpg",
  },
  {
    id: 21,
    title: "Cross-Platform Mobile App Development: The Smarter Way to Build for Android and iOS",
    excerpt: "In today's digital world, where everyone is online and has a digital presence and identity, everyone is in a race to be either a product or a consumer, just to be first somehow! But how you present yourself digitally is not always the same as your real-life personality, so don't confuse the two. People can show their presence across multiple platforms, but most of them fall under Android and iOS. While the user interface might look similar, the underlying builds are quite different.",
    image: "/images/BannerImage.jpg",
  },
  {
    id: 31,
    title: "Top Graphic Design Apps You Should Try in 2025",
    excerpt: "Graphic design tools have become indispensable to everyone, from novice to professional, in a universe where visual storytelling is at the heart of virtual networks. Whether you create an Instagram post, build a client interface, or plan a commercial logo, the correct software can significantly increase your innovation and productivity at the same time.",
    image: "/images/BannerImage.jpg",
  },
    {
    id: 41,
    title: "Top Skills Every UI UX Designer Should Master in 2025",
    excerpt: "India's online world is changing at an unprecedented speed. With millions of new Internet users, rising smartphone penetration, and a thriving startup economy, the demand for skilled UI UX designers is mounting. To exist in 2025, designers would need to stay in touch with the times at all times in terms of skills and merge creativity, empathy, and technology to generate user-centric and lovely products.",
    image: "/images/BannerImage.jpg",
  },
    {
    id: 51,
    title: "What is Performance Marketing? An Introductory Guide to ROI-Driven Advertising ",
    excerpt: "In today's digital environment, all businesses desire to make more revenue while cutting down on advertising costs. They aim to spend funds only when they get a specific outcome, like a customer clicking on their ad or completing a purchase. This efficient method is known as performance marketing.",
    image: "/images/BannerImage.jpg",
  },
   {
    id: 61,
    title: "Next.js vs React: A Developer’s Guide to Choosing the Right Framework",
    excerpt: "In today’s tech-driven world, where everyone has an online presence through various digital platforms, the approach to starting a business has significantly changed. There was a time when people would open their businesses physically and rely on traditional, limited marketing methods. But in the modern era, many people create websites even before launching their physical companies, starting their journey online first.",
    image: "/images/BannerImage.jpg",
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
      {/* Left: Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-3/4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden h-[300px]"
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
          </div>
        ))}
      </div>

      {/* Right: Sidebar */}
      <div className="relative w-full md:w-1/4">
        {/* Floating pill header */}
        <div className="absolute -top-5 left-4 bg-blue-800 px-6 py-2 rounded-2xl text-white text-lg font-semibold shadow-lg z-10 w-[90%] text-center">
          Latest Posts
        </div>

        {/* Sidebar box */}
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
