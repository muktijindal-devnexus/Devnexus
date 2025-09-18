import { AiTech } from '@/components/ai'
import Head from 'next/head';
import React from 'react';

export const metadata = {
  title: "AI Development & Technology Services | DevNexus Solutions",
  description:
    "Drive innovation with AI development services from DevNexus Solutions. From ML & NLP to GPT-powered chatbots & automation — transform your business.",
  alternates: {
    canonical: "https://devnexussolutions.com/ai-tech-services",
  },
  keywords: [
    " Artificial intelligence services",
    " AI development",
    " Machine learning",
    " NLP",
    " AI chatbot development",
    " AI automation solutions",
    " DevNexus Solutions",
  ],
};


const AiTechpage = () => {
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
                  "name": "How Can AI Chatbot Development Services Benefit Your Business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": ""
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where Can AI Chatbots Be Deployed?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": ""
                  }
                },
                {
                  "@type": "Question",
                  "name": "How Do You Ensure AI Development Services Align with My Business Needs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": ""
                  }
                },
                {
                  "@type": "Question",
                  "name": "What Is the Typical Timeline for AI Development Project?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The timeline for AI development projects varies based on complexity, scope, and integration requirements. Smaller projects—such as chatbot development or basic automation—can take 2 to 6 weeks, while larger, enterprise-grade solutions involving custom models, data pipelines, and system integration may span 3 to 6 months or more. A thorough discovery phase helps define realistic milestones and ensures timely delivery."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How Do You Handle Data Privacy and Security in AI Projects?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "At DevNexus Solutions, we prioritize data privacy and security at every stage of AI development. Our team follows industry best practices and regulatory standards to safeguard sensitive information—implementing robust encryption, access controls, and anonymization techniques. From data collection to model deployment, we ensure data integrity, confidentiality, and compliance, empowering clients with secure, trustworthy AI solutions."
                  }
                }
              ]
            })
          }}
        />
      </Head>
      <AiTech />
    </>
  );
};

export default AiTechpage;
