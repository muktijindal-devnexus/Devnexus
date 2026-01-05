import { AiTech } from "@/components/ai";
import Head from "next/head";
import React from "react";

export const metadata = {
  title: "AI Development & Technology Services",
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
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Why should I use AI services like chatbots or API integration?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "AI chatbots and API integrations automate routine tasks, improve customer support, and streamline business operations. DevNexus Solutions provides tailored AI solutions that enhance efficiency and deliver better customer experiences.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What benefits will I get from AI API integration and AI solutions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You get seamless data flow, smarter decision-making, personalized user experiences, and faster operational workflows. DevNexus Solutions helps businesses unlock the full potential of intelligent automation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long will it take to see results from AI services?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Automation and workflow improvements can be immediate. For measurable performance insights and ROI, most businesses see results within a few weeks of implementing DevNexus Solutions’ AI systems.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why is AI important for modern businesses?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "AI reduces manual effort, minimizes errors, accelerates operational speed, and improves customer interactions. DevNexus Solutions leverages advanced AI tools to help your business stay competitive in a fast-evolving digital landscape.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can AI services improve customer support for my business?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. AI-powered chatbots provide instant 24/7 support, handle FAQs, resolve issues, and improve customer engagement. DevNexus Solutions builds intelligent support systems that elevate your customer experience.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can AI and API integrations scale with my growing business?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. DevNexus Solutions builds scalable AI systems and integrations designed to grow with your data, customer base, and long-term business requirements.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      ckjfdh
      <AiTech />
    </>
  );
};

export default AiTechpage;
