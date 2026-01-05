import { Portfolio } from '@/components/portfolio'
import React from 'react'

export const metadata = {
  title: "Our Projects & Portfolio",
  description:
    "Explore the portfolio of DevNexus Solutions featuring our latest web, mobile, and digital projects. See how we help businesses build scalable and impactful solutions.",
  alternates: {
    canonical: "https://devnexussolutions.com/projects",
  },
   openGraph: {
      title: "Our Projects & Portfolio",
       description: "Explore the portfolio of DevNexus Solutions featuring our latest web, mobile, and digital projects. See how we help businesses build scalable and impactful solutions.",
      url: "https://devnexussolutions.com/projects",
      siteName: "DevNexus Solutions",
      type: "article",
      locale: "en_IN",
    },
};

const Portfoliopage = () => {
  return (
    <div>
      <Portfolio />
    </div>
  )
}

export default Portfoliopage
