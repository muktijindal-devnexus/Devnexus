import React from "react";
import Head from "next/head";
import { Banner } from "@/components/global/Banner";
import { DigitalMarketing } from "@/components/digitalmarketing";

export const metadata = {
  title: "AI Digital Marketing Services | SEO, AEO, Local GEO.",
  description:
    "Grow with AI-driven SEO, PPC & content marketing. Optimize for AEO & target local GEO customers. Smarter strategies, real business growth with DevNexus Solutions.",
  alternates: {
    canonical: "https://devnexussolutions.com/digital-marketing-services",
  },
  keywords: [
    "Digital marketing services",
    "GEO Generative engine optimization",
    " Answer engine optimization",
    " SEO services",
    " Search engine optimization",
    " Voice search optimization",
    " Local SEO services",
    " PPC services",
    " Social media marketing company",
    " Content marketing agency",
    " Digital advertising company",
    "Lead Generation",
    "Google Ads and Meta Ads",
  ],
   openGraph: {
      title: "AI Digital Marketing Services | SEO, AEO, Local GEO.",
       description:
        "Grow with AI-driven SEO, PPC & content marketing. Optimize for AEO & target local GEO customers. Smarter strategies, real business growth with DevNexus Solutions.",
      url: "https://devnexussolutions.com/digital-marketing-services",
      siteName: "DevNexus Solutions",
      type: "article",
      locale: "en_IN",
    },
};

const DigitalMarketingPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why should I use digital marketing for my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Digital marketing increases online visibility, attracts targeted customers, and grows revenue. DevNexus Solutions helps businesses reach their audience effectively.",
        },
      },
      {
        "@type": "Question",
        name: "What benefits will I get from digital marketing services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You get more traffic, higher engagement, lead generation, better brand recognition, and measurable growth with DevNexus Solutions.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to see results from digital marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Results vary by strategy, but most clients see measurable improvements in 3–6 months with consistent campaigns by DevNexus Solutions.",
        },
      },
      {
        "@type": "Question",
        name: "Which digital marketing strategies are best for my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DevNexus Solutions customizes strategies using SEO, social media, PPC, content marketing, and email campaigns based on your business goals.",
        },
      },
      {
        "@type": "Question",
        name: "Why is digital marketing important for growing my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It builds online presence, attracts potential customers, and drives sales. DevNexus Solutions ensures your business stays competitive digitally.",
        },
      },
      {
        "@type": "Question",
        name: "Can digital marketing work for small businesses or startups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, DevNexus Solutions provides tailored, cost-effective strategies that deliver maximum ROI for small businesses and startups.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <div>
        <Banner
          image="/cdn/images/digital/digital.mp4"
          overlayImage
          heading=" Digital Marketing Services Boost Your Business Growth "
          description="Let the right digital marketing company uplift your web traffic, boost brand visibility, and generate more leads and sales for your business with powerful digital marketing services."
        />
        <DigitalMarketing />
      </div>
    </>
  );
};

export default DigitalMarketingPage;
