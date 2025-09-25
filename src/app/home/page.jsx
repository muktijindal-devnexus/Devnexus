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
        name: "What is digital transformation, and how does DevNexus Solutions fit in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Digital transformation involves integrating digital technology into all aspects of a brand, altering operational processes and the overall customer experience. DevNexus Solutions assists companies in this transformation through various strategies, software, and automation solutions that drive growth and innovation.",
        },
      },
      {
        "@type": "Question",
        name: "What type of digital solutions can DevNexus Solutions provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DevNexus Solutions offers a wide range of services. We develop web and mobile applications, providing cloud & DevOps assistance, UI/UX design, data analysis, and AI integration —all strategically crafted to accelerate your digital transformation.",
        },
      },
      {
        "@type": "Question",
        name: "Why is digital transformation important for all types of businesses today?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Digital transformation is essential for all businesses today as it enhances operational efficiency, improves the customer experience, and enables companies to make data-driven decisions. DevNexus Solutions helps your brand grow and develop through sophisticated IT services.",
        },
      },
      {
        "@type": "Question",
        name: "How do our digital solutions fit with your company's objectives?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At DevNexus Solutions, our skilled team begins by learning about your brand's specific challenges and objectives. We craft custom digital solutions specifically designed for your business's targeted results, such as enhancing workflows, connecting with customers, or expanding your online presence.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a digital transformation project usually last with DevNexus Solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The duration of a digital transformation project varies, influenced by its scope and the complexity of the tasks involved. Nevertheless, DevNexus Solutions employs an agile approach, focusing on iterative phases to facilitate the prompt completion and continuous enhancement of digital solutions.",
        },
      },
      {
        "@type": "Question",
        name: "Is DevNexus Solutions suitable for small and medium-sized businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely Yes, DevNexus Solutions collaborates with various businesses. We offer tailored digital solutions and affordable pricing structured to help startups, SMEs, and larger companies.",
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
        <LandingComponent />
        <AutoPopup /> 
      </div>
    </>
  );
};

export default LandingPage;
