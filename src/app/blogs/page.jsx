// import { Blogs } from '@/components/blogs'
import React from 'react'
import BannerImage1 from "../../../public/cdn/images/blogs/BlogsHeroSection.jpeg";
import { Banners } from '@/components/global/NavBanners';
import BlogSection from '@/components/blogs/BlogSection';


const BlogPage = () => {
  return (
    <div>
         <Banners
                              image={BannerImage1}
                              overlayImage
                              heading="Our Blog - DevNexus Solutions"
                              description="Stay ahead in the digital world with insights given by experts of DevNexus Solutions."
                            />
                            <BlogSection />
        {/* <Blogs /> */}
    </div>
  )
}

export default BlogPage
