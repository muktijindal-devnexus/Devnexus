import React from 'react';
import Head from 'next/head';
import { UIUXComponent } from '@/components/UIUX';

export const metadata = {
  title: "UI/UX Design and Development Services - DevNexus Solutions",
  description:
    "Transform your online presence with expert web, mobile, and UI/UX design services. Unlock new digital growth for your business with DevNexus solutions.",
  alternates: {
    canonical: "https://devnexussolutions.com/ui-ux-design-services",
  },
  keywords: [
    " UI UX design services",
    " UI UX web development company",
    " UI UX development service provider",
    " UI UX design & development company",
    " UI UX design development company in India",
  ],
};


const UIUX = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is UI/UX design important for product Development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            " Good UI/UX improves usability, engagement, and satisfaction. DevNexus Solutions creates intuitive designs that delight users.",
        },
      },
      {
        "@type": "Question",
        "name": "What benefits will I get from UI/UX design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            " You get clear navigation, attractive interfaces, better user flow, and higher conversions with DevNexus Solutions.",
        },
      },
      {
        "@type": "Question",
        "name": "Can you design for both websites and apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            " Yes, DevNexus Solutions designs responsive, user-friendly interfaces for web platforms, mobile apps, and dashboards.",
        },
      },
      {
        "@type": "Question",
        "name": "How long does UI/UX design take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            " Most projects take 1–3 weeks, depending on screens and complexity. DevNexus Solutions ensures timely delivery.",
        },
      },
          {
        "@type": "Question",
        "name": "Do you redesign existing interfaces?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, DevNexus Solutions improves existing designs to enhance usability, visual appeal, and engagement.",
        },
      },
               {
        "@type": "Question",
        "name": "Will I receive editable design files?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, DevNexus Solutions provides Figma or XD files for easy implementation and future updates.",
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
        <UIUXComponent />
      </div>
    </>
  );
};

export default UIUX;
