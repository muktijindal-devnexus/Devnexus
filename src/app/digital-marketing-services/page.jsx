import React from "react";
import Head from "next/head";
import { Banner } from "@/components/global/Banner";
import { DigitalMarketing } from "@/components/digitalmarketing";

export const metadata = {
  title: "#1 Best Digital Marketing Services - DevNexus Solutions",
  description:
    "Get the best digital marketing services with DevNexus Solutions to grow your online presence, drive organic traffic, increase ROI. Get a free quote now.",
  alternates: {
    canonical: "https://devnexussolutions.com/digital-marketing-services",
  },
};

const DigitalMarketingPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why Businesses Need Digital Marketing Services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Digital marketing services are essential to enhance brand visibility, drive targeted traffic, and increase ROI. With more users online than ever, businesses must engage audiences through SEO, social media, email marketing, and more to remain competitive.",
        },
      },
      {
        "@type": "Question",
        "name": "How Much Does It Cost to Hire a Digital Marketing Agency Near Me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Digital marketing agency pricing varies by scope and location. At DevNexus Solutions, packages start at $400/month and scale based on your needs. We also offer 3–6 month retainers for strategic consistency and better value.",
        },
      },
      {
        "@type": "Question",
        "name": "Why DevNexus Solutions Leads in Digital Marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "DevNexus Solutions stands out for its ROI-driven strategies, expert team, and personalized campaigns. We blend SEO, PPC, content, and social media to deliver results tailored to each client’s goals.",
        },
      },
      {
        "@type": "Question",
        "name": "Which Digital Marketing Channels Deliver the Best Results for B2B?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "For B2B businesses, channels like LinkedIn Ads, Google Ads, SEO-driven blog content, and email marketing typically offer the highest returns by targeting professionals and decision-makers directly.",
        },
      },
      {
        "@type": "Question",
        "name": "Ready to Market Your Business? Let’s Get Started.",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Partnering with DevNexus Solutions means working with a strategic digital partner. Contact us today for a free quote or digital marketing consultation tailored to your growth goals.",
        },
      },
      {
        "@type": "Question",
        "name": "How Much Does It Cost to Hire a Digital Marketing Agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "The cost of hiring a digital marketing agency varies by services needed, business size, and goals. At DevNexus Solutions, we offer flexible pricing from $400 to $5,000/month depending on scope, ad spend, and campaign complexity.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <div>
        <Banner
          image="/cdn/images/digital/digital.mp4"
          overlayImage
          heading=" Digital Marketing Services To Boost Your Business Growth "
          description="Let the Right Digital Marketing Company Uplift Your Web Traffic and Generate More Leads and Sales for Your Business."
        />
        <DigitalMarketing />
      </div>
    </>
  );
};

export default DigitalMarketingPage;
