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
    " Web design services provider",
    " Website development company in India",
    " Custom web design services",
    " Responsive web design company",
    " SEO-friendly websites development",
    " Global web development solutions",
    " AI Overview web development company",
  ],
};


const Fullstackpage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What domains of business does DevNexus Solutions provide digital solutions to?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "We offer web design and development services to businesses of all types that need a digital presence, including real estate, construction, services, food and beverages, public sector, education, healthcare, travel, banking, fintech, and more.",
        },
      },
      {
        "@type": "Question",
        "name": "What tech stacks do you offer for your web development services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "The team is technology-agnostic and can adapt to any modern web development framework, including the MERN stack (Node, React), Nextjs, Typescript, React Native, Flutter, WordPress (and PHP), Python, HTML5/CSS3, Tailwind CSS, Modular CSS, Redux and more.",
        },
      },
      {
        "@type": "Question",
        "name": "How do you ensure that the developments you make are aligned with latest's market demands?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "We are experts at designing and developing websites according to the latest Web 2.0 Standards with W3C compliance for SEO friendliness, high quality UI/UX design, cross-browser compatibility, responsive design, QA and testing, authentication and authorization, performance, capabilities, and scalability to enhance your business.",
        },
      },
      {
        "@type": "Question",
        "name": "What platforms do you use for communication and project management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "We use Slack, WhatsApp, Email, Phone, Google Meet, Zoom, and other platforms to communicate with clients and internally as required. For project management, we use modern platforms such as Jira, or any platform our clients prefer.",
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
