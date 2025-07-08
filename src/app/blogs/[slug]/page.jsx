import { BlogContent } from "./blog";

export const metadata = {
  title: "Blog - DevNexus Solutions",
  description:
    "DevNexus Solutions has worked with top clients to grow their brands and reach their desired audience.  Reach out to us today, talk with our expert today.",
  alternates: {
    canonical: "https://www.devnexussolutions.com/blog/${slug}",
  },
};

export default function BlogDetailPage() {
  return (
    <>
      <BlogContent />
    </>
  );
}
