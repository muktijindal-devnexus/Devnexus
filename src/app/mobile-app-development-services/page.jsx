import React from "react";
import Head from "next/head";
import { MobileDevelopment } from "@/components/mobiledevelopement";

export const metadata = {
  title: "Mobile App Development Services | DevNexus Solutions",
  description:
    "Boost your business with custom mobile app development services from DevNexus Solutions. We build secure, scalable, and user-friendly apps globally.",
  alternates: {
    canonical: "https://devnexussolutions.com/mobile-app-development-services",
  },
  keywords: [
    " Mobile app development company",
    " Mobile development services",
    " Custom mobile apps developer",
    " Enterprise app solutions",
    " iOS development company",
    " Android app development company",
    " Digital solutions company near me",
  ],
};

const MobileDevelopmentpage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why should I develop a mobile app for my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A mobile app improves customer engagement, brand visibility, and revenue. DevNexus Solutions builds apps tailored to your goals.",
        },
      },
      {
        "@type": "Question",
        name: "What benefits will I get from a mobile app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: " You get direct customer access, better engagement, seamless user experience, and business growth with DevNexus Solutions.",
        },
      },
      {
        "@type": "Question",
        name: " Can you develop apps for both Android and iOS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: " Yes, DevNexus Solutions builds native, hybrid, and cross-platform apps optimized for performance on all devices.",
        },
      },
      {
        "@type": "Question",
        name: "How long does app development take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most apps take 4–10 weeks depending on features and complexity. DevNexus Solutions provides clear project timelines.",
        },
      },
      {
        "@type": "Question",
        name: "Can you improve or update my existing app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: " Yes, DevNexus Solutions upgrades existing apps with new features, better UI/UX, and performance improvements.",
        },
      },
            {
        "@type": "Question",
        name: "Do you provide support after app launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, DevNexus Solutions offers maintenance, updates, and security checks to keep your app running smoothly.",
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
        <MobileDevelopment />
      </div>
    </>
  );
};

export default MobileDevelopmentpage;
