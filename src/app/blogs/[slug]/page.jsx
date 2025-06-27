// import { useRouter } from "next/router";
// import Head from "next/head";

// // Slug-to-Doc mapping
// const docMap = {
//   "why-choose-devnexus-solutions-for-your-digital-transformation-journey":
//     "1Hi7DzuCyYdqDmoF4bFLL7VUSVkFoeFxx2KrZrtTNeqE",
//   "cross-platform-mobile-app-development-the-smarter-way-to-build-for-android-and-ios":
//     "YOUR_DOC_ID_2",
//   "top-graphic-design-apps-you-should-try-in-2025": "YOUR_DOC_ID_3",
//   "top-skills-every-ui-ux-designer-should-master-in-2025": "YOUR_DOC_ID_4",
//   "what-is-performance-marketing-an-introductory-guide-to-roi-driven-advertising":
//     "YOUR_DOC_ID_5",
//   "nextjs-vs-react-a-developers-guide-to-choosing-the-right-framework":
//     "YOUR_DOC_ID_6",
// };

// export default function BlogSlugPage() {
//   const router = useRouter();
//   const { slug } = router.query;

//   const docId = slug && docMap[slug];
//   const iframeSrc = docId
//     ? `https://docs.google.com/document/d/${docId}/preview`
//     : null;

//   return (
//     <>
//       <Head>
//         <title>{slug?.toString().replace(/-/g, " ") || "Blog Post"}</title>
//       </Head>

//       <main className="p-4 max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6 capitalize text-center">
//           {slug?.toString().replace(/-/g, " ") || "Blog Post"}
//         </h1>

//         {iframeSrc ? (
//           <div className="w-full aspect-[4/3] shadow-lg border rounded-xl overflow-hidden">
//             <iframe
//               src={iframeSrc}
//               width="100%"
//               height="600"
//               allow="autoplay"
//               className="w-full h-full"
//             ></iframe>
//           </div>
//         ) : (
//           <p className="text-red-600 text-center">
//             No document found for this blog post.
//           </p>
//         )}
//       </main>
//     </>
//   );
// }

// "use client"
// // pages/app/blogs/[slug].jsx
// import { useRouter } from "next/router";

// export default function BlogPage() {
//   const { slug } = useRouter().query;

//   return (
//     <div style={{ padding: 50 }}>
//       <h1>Slug page</h1>
//       <p>Slug: {slug}</p>
//     </div>
//   );
// }


// app/blogs/[slug]/page.jsx
// import Head from "next/head";

// const docMap = {
//   "why-choose-devnexus-solutions-for-your-digital-transformation-journey":
//     "1Hi7DzuCyYdqDmoF4bFLL7VUSVkFoeFxx2KrZrtTNeqE",
//   "cross-platform-mobile-app-development-the-smarter-way-to-build-for-android-and-ios":
//     "YOUR_DOC_ID_2",
//   "top-graphic-design-apps-you-should-try-in-2025": "YOUR_DOC_ID_3",
//   "top-skills-every-ui-ux-designer-should-master-in-2025": "YOUR_DOC_ID_4",
//   "what-is-performance-marketing-an-introductory-guide-to-roi-driven-advertising":
//     "YOUR_DOC_ID_5",
//   "nextjs-vs-react-a-developers-guide-to-choosing-the-right-framework":
//     "YOUR_DOC_ID_6",
// };

// export default function BlogSlugPage({ params }) {
//   const { slug } = params;

//   const docId = docMap[slug];
//   const iframeSrc = docId
//     ? `https://docs.google.com/document/d/${docId}/preview`
//     : null;

//   return (
//     <>
//       <Head>
//         <title>{slug.replace(/-/g, " ")}</title>
//       </Head>

//       <main className="p-24 max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6 capitalize text-center">
//           {slug.replace(/-/g, " ")}
//         </h1>

//         {iframeSrc ? (
//           <div className="w-full aspect-[4/3] shadow-lg border rounded-xl overflow-hidden">
//             <iframe
//               src={iframeSrc}
//               width="100%"
//               height="600"
//               allow="autoplay"
//               className="w-full h-full"
//             ></iframe>
//           </div>
//         ) : (
//           <p className="text-red-600 text-center">
//             No document found for this blog post.
//           </p>
//         )}
//       </main>
//     </>
//   );
// }


"use client";
import React, { useState } from "react";

export default function BlogUploadForm() {
  const [title, setTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !blogContent || !image) {
      alert("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("blogContent", blogContent);
    formData.append("image", image);

    setLoading(true);

    try {
      const res = await fetch("http://13.203.216.121:3002/api/blogs", {
        method: "POST", 
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        alert("Blog uploaded successfully!");
        setTitle("");
        setBlogContent("");
        setImage(null);
      } else {
        console.error("Upload failed:", data);
        alert("Failed to upload blog.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Error uploading blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-36 space-y-4 bg-white shadow rounded"
    >
      <h2 className="text-2xl font-bold">{title}</h2>

      <input
        type="text"
        placeholder="Blog Title"
        className="w-full border p-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Write your blog content here..."
        className="w-full border p-2 rounded h-40"
        value={blogContent}
        onChange={(e) => setBlogContent(e.target.value)}
      />

      <input
        type="file"
        accept="image/*"
        className="w-full"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Uploading..." : "Upload Blog"}
      </button>
    </form>
  );
}


