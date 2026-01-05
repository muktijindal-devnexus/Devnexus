// import { Blogs } from '@/components/blogs'
import React from 'react'
import BannerImage1 from "../../../public/cdn/images/blogs/BlogsHeroSection.jpeg";
import { Banners } from '@/components/global/NavBanners';
import { Blogs } from '@/components/blogs';

export const metadata = {
  title: "Devnexus - Blog",
  description: "DevNexus Solutions has worked with top clients to grow their brands and reach their desired audience.  Reach out to us today, talk with our expert today.",
  alternates: {
    canonical: "https://devnexussolutions.com/blogs",
  },
    openGraph: {
      title: "Blog - DevNexus Solutions",
      description:
        "DevNexus Solutions has worked with top clients to grow their brands and reach their desired audience.",
      url: "https://devnexussolutions.com/blogs",
      siteName: "DevNexus Solutions",
      type: "article",
      locale: "en_IN",
    },
};


const BlogPage = ({slug}) => {
  return (
    <div>
         <Banners
                              image={BannerImage1}
                              overlayImage
                              heading="Our Blog - DevNexus Solutions"
                              description="Stay ahead in the digital world with insights given by experts of DevNexus Solutions."
                            />
                            {/* <BlogSection /> */}
        <Blogs slug={slug} />
    </div>
  )
}

export default BlogPage
