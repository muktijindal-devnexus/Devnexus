import React from "react";
import BannerImage1 from "../../../public/images/Portfolio/PortfolioHeroSection.jpeg";
import CaseStudyCard from "./CaseStudy";
import { Banners } from "../global/NavBanners";

const caseStudies = [
  {
    title:
      "Case Study: Web Development & Digital Marketing for Cervino Ceramix",
    description:
      "Cerrvino, a boutique wine brand, approached DevNexus to craft a modern, user-centric website that would reflect their premium identity and support online growth. Our team designed and developed a fully responsive, SEO-optimized e-commerce platform with seamless navigation, custom product pages, and secure checkout functionality.",
    logoSrc: "/images/project/cervinologo.svg",
    imageIcons: ["/brick-icon.png", "/code-icon.png"],
    mainImage: "/images/project/cervinoportfolio.png",
    websiteUrl: "https://cervinoceramix.com",
    pdfPath: "/cervino-case-study.pdf",
    companyName: "Cervino Ceramix",
  },
  {
    title: "Case Study: App Development for XYZ Startup",
    description:
      "DevNexus Solutions delivered a detailed digital overhaaul for Bergamont by developing a high performance, SEO optimized website that gave the brand full control over its online presence. Our team of experts implemented a full CRM system to streamline sales process, launched a automated e mail marketing campaign and designed a scalable content and SEO stategy.",
    logoSrc: "/images/brandslogo/Bergamot.svg",
    imageIcons: ["/app-icon.png", "/design-icon.png"],
    mainImage: "/images/project/begarmot.png",
    websiteUrl: "https://xyzstartup.com",
    pdfPath: "/xyz-case-study.pdf",
    companyName: "XYZ Startup",
  },
  {
    title: "Case Study: App Development for XYZ Startup",
    description:
      "Vize approached to DevNexus Solutions with minimal digital presence no official website, no digital marketing plan. This lack of structure severely limited theri ability to reach, engage or convert potential client. Without centralized platform to present their services or communicate the brand story.",
    logoSrc: "/images/brandslogo/vize.svg",
    imageIcons: ["/app-icon.png", "/design-icon.png"],
    mainImage: "/images/project/vize.png",
    websiteUrl: "https://xyzstartup.com",
    pdfPath: "/xyz-case-study.pdf",
    companyName: "XYZ Startup",
  },
  {
    title: "Case Study: App Development for XYZ Startup",
    description:
      "DevNexus Solutions partnerd with AGP to create a full scale digital transformation, We designed and launched a professional, SEO optimized website which feature brand portfolio, service offering and their brand story. The website now serve as a centralized digital hub, giving AGP credibiliy, clarity and brand reach.",
    logoSrc: "/images/brandslogo/ajp.svg",
    imageIcons: ["/app-icon.png", "/design-icon.png"],
    mainImage: "/images/project/ajp.png",
    websiteUrl: "https://xyzstartup.com",
    pdfPath: "/xyz-case-study.pdf",
    companyName: "XYZ Startup",
  },
  {
    title: "Case Study: App Development for XYZ Startup",
    description:
      "DevNexus Solutions partnered with IOWIT to deliver a custom web development and digital strategy solution to reflect the company’s innovation. Our expert team implements a detailed SEO strategy, including technical optimization, keyword mapping, etc, to improve the search visibility.",
    logoSrc: "/images/project/iowit.jpeg",
    imageIcons: ["/app-icon.png", "/design-icon.png"],
    mainImage: "/images/project/iowit case study.png",
    websiteUrl: "https://xyzstartup.com",
    pdfPath: "/xyz-case-study.pdf",
    companyName: "XYZ Startup",
  },
    {
    title: "Case Study: App Development for La Osteria Startup",
    description:
      "DevNexus Solutions implemented a comprehensive digital transformation strategy for La Osteria by redesigning its outdated website into a responsive website, and SEO optimized with real real-time menu updates. On the other hand, DevNexus Solutions launched a detailed social media strategy featuring consistent content, influencer collaborations and a visually compelling brand story.",
    logoSrc: "/images/project/la.jpeg",
    imageIcons: ["/app-icon.png", "/design-icon.png"],
    mainImage: "/images/project/la osteria case study.png",
    websiteUrl: "https://xyzstartup.com",
    pdfPath: "/xyz-case-study.pdf",
    companyName: "XYZ Startup",
  },
   {
    title: "Case Study: App Development for SRE India Realty Startup",
    description:
      "DevNexus Solutions collaborates with SRE India Realty to revamp their digital presence through a high-performing website and target audience digital strategy. The new website showcases their residential and commercial projects with dynamic available listings and interactive site plans and better navigation tailored for customers.",
    logoSrc: "/images/project/sre.jpeg",
    imageIcons: ["/app-icon.png", "/design-icon.png"],
    mainImage: "/images/project/Sre  india realty case study.png",
    websiteUrl: "https://xyzstartup.com",
    pdfPath: "/xyz-case-study.pdf",
    companyName: "XYZ Startup",
  },

     {
    title: "Case Study: App Development for Peace Of Mind Startup",
    description:
      "DevNexus Solutions led a comprehensive digital marketing plan for Peace Of Mind, We redesigned their website, mobile-first UI UX experience, advanced media features, live streaming and on-demand video playback. To impove the websie visibiliy we implemened various SEO strategies focused on intent base keywords and created a scalable content marketing framework",
    logoSrc: "/images/brandslogo/peace.svg",
    imageIcons: ["/app-icon.png", "/design-icon.png"],
    mainImage: "/images/project/peace.png",
    websiteUrl: "https://xyzstartup.com",
    pdfPath: "/xyz-case-study.pdf",
    companyName: "XYZ Startup",
  },
       {
    title: "Case Study: App Development for XRD Nano Startup",
    description:
      "DevNexus Solutions collaborated with XRD Nano to transform their digital presence into a dynamic one. We redesigned their outdated websites with modern UI UX interaction, content and integrated lead capture features. To boost discoverability, we optimized their presence across different devices.",
    logoSrc: "/images/project/xrd.jpeg",
    imageIcons: ["/app-icon.png", "/design-icon.png"],
    mainImage: "/images/project/XRD Nano Case Study.png",
    websiteUrl: "https://xyzstartup.com",
    pdfPath: "/xyz-case-study.pdf",
    companyName: "XYZ Startup",
  },
  {
    title: "Case Study: App Development for Medklair Startup",
    description:
      "DevNexus Solutions delivered a full-fledged digital marketing solution to establish Medklair's online presence and streamline patient engagement. We build an SEO optimized website that clearly conveys their brand, team credentials and service offerings.  Integrated booking functionality allowed patients to schedule appointments.",
    logoSrc: "/images/project/medklare.jpeg",
    imageIcons: ["/app-icon.png", "/design-icon.png"],
    mainImage: "/images/project/medklair portfolio.png",
    websiteUrl: "https://xyzstartup.com",
    pdfPath: "/xyz-case-study.pdf",
    companyName: "XYZ Startup",
  },
];

export const Portfolio = () => {
  return (
    <div>
      <Banners
        image={BannerImage1}
        overlayImage
        heading="From Idea to Execution - Explore DevNexus Solutions's Work"
        description="Every project we deliver at DevNexus Solutions is a reflection of our commitment to innovation, performance. From dynamic websites to scalable platforms and intelligent digital strategies our work solves actual problems."
      />
      <div className="">
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={index} index={index} {...study} />
        ))}
      </div>
    </div>
  );
};
