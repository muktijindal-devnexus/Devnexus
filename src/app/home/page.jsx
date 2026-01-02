import React from "react";
import Head from "next/head";
import LandingComponent from "@/components/landingpage";
import AutoPopup from "./AutoPopup";

export const metadata = {
  title: "DevNexus Solutions | Digital Transformation Consultant",
  description:
    "DevNexus provides digital solutions to startups, enterprises and other types of businesses. Partner with us to unlock digital possibilities. Visit us.",
  alternates: {
    canonical: "https://devnexussolutions.com/",
  },
};

const LandingPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Devnexus Solutions is a digital marketing service provider, web development, mobile app development, and blockchain development company. We offer UI/UX design, graphic design services, and custom blockchain development as well.",
        },
      },
      {
        "@type": "Question",
        name: "Do you develop custom mobile apps for businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, as a mobile app development company, Devnexus Solutions designs and develops fully customized iOS and Android apps tailored to your business goals and user needs.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer CRM development solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, Devnexus Solutions specializes in custom blockchain development, helping businesses deploy secure and scalable blockchain solutions.",
        },
      },
      {
        "@type": "Question",
        name: "Can you improve my website and online presence?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, as a web development and digital marketing company, Devnexus Solutions optimizes websites, implements SEO strategies, and runs targeted campaigns to boost visibility and generate quality leads.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide UI/UX and graphic design services?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, Devnexus Solutions offers UI/UX and graphic design services that deliver visually appealing and user-friendly designs to improve engagement and strengthen brand identity.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get started with my project?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "You can submit your project idea or requirements through our contact form or call us directly. We will provide a detailed plan, timeline, and roadmap to begin the project.",
        },
      },
      {
        "@type": "Question",
        name: "Are your services suitable for startups and small businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, Devnexus Solutions offers affordable and scalable solutions in web development, mobile app development, and digital marketing, making us a great fit for startups and small businesses.",
        },
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://devnexussolutions.com/#localbusiness",
    name: "Devnexus Solutions",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipMsfKPKMIQ6HdLSi7AHY0F3glwa5K_Xk8VpzFDE=w213-h160-k-no",
    url: "https://devnexussolutions.com/",
    telephone: "+919211815556",
    address: {
      "@type": "PostalAddress",
      streetAddress: "26-B, Spaze Itech Park, Sector-49",
      addressLocality: "Gurgaon",
      addressRegion: "Haryana",
      postalCode: "122018",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.4089,
      longitude: 77.0368,
    },
    sameAs: [
      "https://www.facebook.com/share/1Dsa49Kxrr/",
      "https://www.instagram.com/devnexussolutions",
      "https://www.youtube.com/@DevNexusSolutions/videos",
      "https://www.linkedin.com/company/devnexus-solutions/",
      "https://x.com/DevNexusSol",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://devnexussolutions.com/#website",
    name: "Devnexus Solutions",
    url: "https://devnexussolutions.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://devnexussolutions.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Head>
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </Head>

      <div>
        <LandingComponent />
        <AutoPopup />
      </div>
    </>
  );
};

export default LandingPage;
