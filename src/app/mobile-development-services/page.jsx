import React from "react";
import Head from "next/head";
import { MobileDevelopment } from "@/components/mobiledevelopement";

export const metadata = {
  title: "Mobile App Development Services | DevNexus Solutions",
  description:
    "Boost your business with custom mobile app development services from DevNexus Solutions. We build secure, scalable, and user-friendly apps globally.",
  alternates: {
    canonical: "https://devnexussolutions.com/mobile-development-services",
  },
  keywords: [
    "Mobile app development company",
    "Mobile development services",
    "Custom mobile apps developer",
    "Enterprise app solutions",
    "iOS development company",
    "Android app development company",
    "Digital solutions company near me",
  ],
};

const MobileDevelopmentpage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of mobile applications do we develop?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At DevNexus Solutions, we are developing a wide range of mobile applications which are tailored to your business needs. Our expertise includes native app development, cross-functional app development, progressive web app development, e-commerce web app development.",
        },
      },
      {
        "@type": "Question",
        name: "Do we provide post-launch support for mobile app development services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we are providing post-launch app services and comprehensive post-launch support as a part of our mobile app development services. Once your app goes live we will continue to work with you to ensure app functionality. This includes bug fixes, regular updates to keep your application active, monitor the performance, and user enhancements.",
        },
      },
      {
        "@type": "Question",
        name: "What type of technologies do we use for Android app development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are using the latest and most reliable technologies for Android app development. Our major tech stack includes JAVA for native Android development. For cross-platform needs, we also leverage Flutter and React Native, which allow faster development across all devices.",
        },
      },
      {
        "@type": "Question",
        name: "What programming languages do we use for iOS Mobile app development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For iOS mobile app development, we are primarily focused on Swift (Apple's modern and powerful programming language), which is specifically designed for iOS, macOS, and watchOS. For legacy projects or working with existing codebases, we are also using Objective-C.",
        },
      },
      {
        "@type": "Question",
        name: "Can you update or fix an existing iOS app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Whether your app needs a performance upgrade, bug fixes, UI/UX changes, or compatibility updates for the latest iOS version, we are here to help you.",
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
