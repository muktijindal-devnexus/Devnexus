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
    "UI UX design and development services",
    "UI UX web development company",
    "UI UX development service provider",
    "UI UX design & development company",
    "UI UX design development company in India",
  ],
};


const UIUX = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is a UI/UX designer important for your business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "A UI/UX designer plays an important role in shaping how users feel and observe your website, app or other digital products. They ensure that every interface is not only visually engaging but also intuitive, accessible, and user-centric.",
        },
      },
      {
        "@type": "Question",
        "name": "Will you be involved in the UI/UX design process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "At every step of the design process, your insights and feedbacks will play a vital role. From wireframing to prototyping, we are working collaboratively with you to ensure that work quality of the end product is not compromised and product aligns with your brand goals and user needs.",
        },
      },
      {
        "@type": "Question",
        "name": "How is your UI/UX design process structured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "At DevNexus Solutions, our UI/UX design process is user-centric and crafted to deliver a seamless digital experience. We begin with in-depth discovery and research to understand your brand vision and target audience. We define user personas and map their journeys to identify pain points and opportunities. Next, we move into wireframing to establish layout and flow, followed by iterative prototyping to refine interaction and design logic. Once the user flow is finalized, we craft visually compelling, high-fidelity designs that align with your brand identity. Testing is conducted at every phase to ensure usability, performance, and continuous refinement.",
        },
      },
      {
        "@type": "Question",
        "name": "Do you offer UI/UX redesign services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, we are offering UI/UX redesign services, and on the basis of feedback and analytics, to improve usability. Whether your current design looks outdated or does not convert well, our team of experts will start analysing its performance, user feedback, and problem points.",
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
