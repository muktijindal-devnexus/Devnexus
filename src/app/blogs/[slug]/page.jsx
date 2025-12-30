
import { BlogContent } from './blog';


const slugify = (text) =>
  (text ?? "untitled-post")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export async function generateMetadata({ params }) {

  return {
    title: "Blog - DevNexus Solutions",
    description:
      "DevNexus Solutions has worked with top clients to grow their brands and reach their desired audience.",
    alternates: {
      canonical: `https://devnexussolutions.com/blogs/${params}`,
    },
  };
}

export default function BlogDetailPage() {
  return (
    <>
      <BlogContent />
      
    </>
  );
}
