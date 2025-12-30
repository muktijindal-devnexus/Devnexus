import React from 'react';
import Head from 'next/head';
import { Blockchain } from '@/components/blockchain';

export const metadata = {
  title: "DevNexus Solutions | Custom Blockchain Development Services",
  description:
    "DevNexus Solutions offers custom & public blockchain development services. From smart contracts to dApps, we create secure, scalable decentralized solutions globally.",
  alternates: {
    canonical: "https://devnexussolutions.com/blockchain-development-services",
  },
  keywords: [
    " Hybrid Blockchain development services",
    "Smart Contract Development",
    " Public Blockchain development company",
    " dApp development services",
    " Private Blockchain development company",
    " NFT marketplace development company",
    " Crypto wallet app development company",
    "Blockchain App development",
  ],
};


const BlockchainPage = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.alternates.canonical} />
                <meta name="keywords" content={metadata.keywords.join(", ")} />
        
     <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is blockchain development, and how can it help my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Blockchain development creates secure, decentralized solutions that improve data protection and transparency. DevNexus Solutions builds blockchain-based systems that enhance trust and strengthen your digital operations."
          }
        },
        {
          "@type": "Question",
          "name": "How can blockchain improve efficiency in my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Blockchain automates processes, eliminates intermediaries, and ensures accurate, tamper-proof records. DevNexus Solutions helps businesses streamline workflows and increase operational efficiency with blockchain."
          }
        },
        {
          "@type": "Question",
          "name": "Can you create smart contracts or decentralized apps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. DevNexus Solutions develops smart contracts and decentralized applications (dApps) tailored to your business needs, enabling secure and automated digital transactions."
          }
        },
        {
          "@type": "Question",
          "name": "What industries can benefit from blockchain development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Industries such as finance, supply chain, healthcare, logistics, and e-commerce benefit greatly from blockchain. DevNexus Solutions creates custom blockchain solutions for diverse industry needs."
          }
        },
        {
          "@type": "Question",
          "name": "Is blockchain technology safe and reliable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Absolutely. Blockchain ensures data immutability, fraud prevention, and highly secure transactions. DevNexus Solutions implements advanced security protocols to deliver robust and trustworthy blockchain systems."
          }
        },
        {
          "@type": "Question",
          "name": "Can blockchain integrate with my existing systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. DevNexus Solutions integrates blockchain with your existing software through APIs and middleware, enhancing transparency, accountability, and operational efficiency without disrupting current operations."
          }
        }
      ]
    })
  }}
/>
      </Head>

      <div>
        <Blockchain />
      </div>
    </>
  );
};

export default BlockchainPage;
