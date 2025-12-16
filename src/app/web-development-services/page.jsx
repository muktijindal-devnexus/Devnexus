import React from 'react';
import Head from 'next/head';
import { Fullstack } from '@/components/fullstack';

export const metadata = {
  title: "Web Development services - DevNexus Solutions",
  description:
    "Get expert web design and App development services, and build fast, responsive and. Providing custom digital solutions to global businesses.",
  alternates: {
    canonical: "https://devnexussolutions.com/web-development-services",
  },
keywords: [
  // Core Web Keywords
  "web development",
  "digital solutions",
  "web design",
  "web development services",
  "web development company",
  "web design services",
  "web design company",
  "web solutions",
  "responsive web design",
  "website development",
  "web development agency",
  "responsive design",
  "website development company",
  "web application development",
  "Web design services provider",
  "Website development company",
  "Custom web design services",
  "Responsive web design company",
  "SEO-friendly websites development",
  "Global web development solutions",
  "AI overview web development company",
  "Frontend Development",
  "Backend Development",
  "CMS Development",
  "E-commerce Development"
]

};


const Fullstackpage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": " Why should I use web development services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            " A professional website improves credibility, attracts customers, and increases online presence. DevNexus Solutions builds websites that grow your business.",
        },
      },
      {
        "@type": "Question",
        "name": "What benefits will I get from web development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            " You get responsive, secure, fast-loading websites, better user experience, and higher conversion rates with DevNexus Solutions.",
        },
      },
      {
        "@type": "Question",
        "name": " How long does it take to build a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            " Most websites take 2–6 weeks, depending on complexity. DevNexus Solutions provides clear timelines for every project.",
        },
      },
      {
        "@type": "Question",
        "name": "Do you provide custom website designs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            " Yes, DevNexus Solutions creates fully custom or template-based designs tailored to your brand and business goals.",
        },
      },
        {
        "@type": "Question",
        "name": "Will my website be mobile-friendly and SEO-optimized?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Absolutely. DevNexus Solutions ensures all websites are responsive, fast, and SEO-ready for higher search rankings.",
        },
      },
         {
        "@type": "Question",
        "name": "Do you provide maintenance after the website is live?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            " Yes, DevNexus Solutions offers ongoing updates, backups, and security monitoring to keep your website running smoothly.",
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
        <Fullstack />
      </div>
    </>
  );
};

export default Fullstackpage;
