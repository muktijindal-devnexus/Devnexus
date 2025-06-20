// "use client";
// import React from "react";
// import Image from "next/image";

// const posts = [
//   {
//     id: 1,
//     title: "Top 10 3D Game Development Companies",
//     excerpt: "The gaming industry has experienced unprecedented growth, with 3D games…",
//     image: "/images/BannerImage.jpg",
//   },
//   {
//     id: 2,
//     title: "A Comprehensive Guide to Python Development Services",
//     excerpt: "Python has evolved from a simple scripting language into one…",
//     image: "/images/BannerImage.jpg",
//   },
//   {
//     id: 3,
//     title: "How to Rank Your Brand on ChatGPT in 2025",
//     excerpt: "ChatGPT has now become a part of our lives. Since…",
//     image: "/images/BannerImage.jpg",
//   },
//     {
//     id: 4,
//     title: "How to Rank Your Brand on ChatGPT in 2025",
//     excerpt: "ChatGPT has now become a part of our lives. Since…",
//     image: "/images/BannerImage.jpg",
//   },
//     {
//     id: 5,
//     title: "How to Rank Your Brand on ChatGPT in 2025",
//     excerpt: "ChatGPT has now become a part of our lives. Since…",
//     image: "/images/BannerImage.jpg",
//   },
// ];

// const sidebarPosts = [
//   ...posts,
//   {
//     id: 4,
//     title: "Unlocking Digital Success with a Reliable WordPress Partner",
//     image: "/images/BannerImage.jpg",
//   },
//   {
//     id: 5,
//     title: "How to Create a Brand Content Marketing Plan for 2025",
//     image: "/images/BannerImage.jpg",
//   },
// ];

// export default function BlogSection() {
//   return (
//     <section className="flex flex-col md:flex-row gap-6 p-6">
//       {/* Left: Blog Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-3/4">
//         {posts.map((post) => (
//           <div
//             key={post.id}
//             className="bg-white rounded-2xl shadow-md overflow-hidden h-[300px]"
//           >
//             <div className="relative h-[130px] w-full">
//               <Image
//                 src={post.image}
//                 alt={post.title}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-t-2xl"
//               />
//             </div>
//             <div className="p-4">
//               <h2 className="font-bold text-[16px] leading-snug line-clamp-2">
//                 {post.title}
//               </h2>
//               <p className="text-gray-600 mt-2 text-sm line-clamp-2">
//                 {post.excerpt}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Right: Sidebar */}
//       <div className="relative w-full md:w-1/4">
//         {/* Floating pill header */}
//         <div className="absolute -top-5 left-4 bg-blue-800 px-6 py-2 rounded-2xl text-white text-lg font-semibold shadow-lg z-10 w-[90%] text-center">
//           Latest Posts
//         </div>

//         {/* Sidebar box */}
//         <div className="bg-gradient-to-b from-blue-900 to-blue-400 rounded-3xl p-4 pt-12 text-white relative z-0">
//           <div className="space-y-5">
//             {sidebarPosts.map((post) => (
//               <div key={post.id} className="flex items-start gap-3">
//                 <div className="w-12 h-12 relative flex-shrink-0">
//                   <Image
//                     src={post.image}
//                     alt={post.title}
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded"
//                   />
//                 </div>
//                 <p className="text-sm line-clamp-2">{post.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
