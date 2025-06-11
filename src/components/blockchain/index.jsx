import React from "react";
import { Banner } from "../global/Banner";
import BannerImage1 from "../../../public/images/BannerImage.jpg";
import StatusCard from "../common/Status";
import BlockchainServices from "./BlockchainServices";
import BlockchainMilestones from "./BlockchainMilestones";
import BlockchainPlatforms from "./BlockchainPlatforms";
import BlockchainDeveplopemnt from "./BlockchainDevelopment";
import FaqSection from "../global/FaqSection";
import IndustriesWeServe from "./IndustriesWeServe";

const faqData = [
  {
    question: "Why do businesses need digital marketing services?",
    answer:
      "Every business wants to grow and capture most of the market value in their niche, this is where digital marketing services come into play. With most of the consumers, products, and services being online, digital marketing services help to get more visibility and quality leads. It offers measurable results and is cost-effective. On the other hand, with digital marketing techniques, one can adopt the market trends very easily.",
  },
  {
    question:
      "How much does it cost to hire a digital marketing agency near me?",
    answer:
      'The cost of hiring a "digital marketing service near me" can vary widely, depending on the services you are looking for. business goals, etc. ',
  },
  {
    question:
      "What makes DevNexus Solutions the best digital marketing company?",
    answer:
      "DevNexus Solutions stands out as the best digital marketing company because of many reasons, like a result-driven approach, tailored solutions for your business needs, We combine deep industry expertise with top-class tools to deliver the results clients want. We have the solutions for all of your business needs. Our team focuses on measurable outcomes like lead generation, better ROI, brand growth, while maintaining transparency, Regular reporting, and clear communication. ",
  },
  {
    question:
      "Which digital marketing channels are most result-oriented for B2B?",
    answer:
      "For B2B companies, the most workable digital marketing techniques are those that can deliver longer sales cycles. Include-LinkedIn Marketing,SEO,Pay Per Click,Meta Ads,E Mail Marketing,Content Writing,Video Marketing",
  },
  {
    question: "I wish to market my business. How should I get started?",
    answer:
      "Lets connect. Based on your business domain, marketing preferences, target achievement and in hand budget, we will come up with a tailor-made plan. Depending on various cases, some businesses may prefer comprehensive social media strategies, or web UX changes, others may call for a more formal link building, or a reputation management. E-commerce also prefers Paid Ads. Depending on how and how much you would like to enroll will ensure your strategy for getting started with the services.",
  },
  {
    question: "How much does it cost to hire a digital marketing agency?",
    answer:
      'The cost of hiring a "digital marketing service" can vary widely, depending on the services you are looking for, business goals, etc. Our monthly services start from $400  and go up to $5000 (+ Ads fee). Packages can be cheaper upon 3-6 months commitment.',
  },
];

export const Blockchain = () => {
  return (
    <div>
      <Banner
        image="/images/Blockchain/blockchain.mp4"
        overlayImage
        heading="Trusted Blockchain Development Company  "
        description="Building secure, scalable, and transparent systems for a decentralized future"
      />
      <StatusCard />
      <BlockchainServices />
      <BlockchainMilestones />
      <BlockchainPlatforms />
      <BlockchainDeveplopemnt />
      <IndustriesWeServe />
      <FaqSection
        faqs={faqData}
        title="  Frequently Asked Questions (FAQs)"
        subtitle=" Answers to Your Most Common Questions Fast, Clear, and Helpful."
      />
    </div>
  );
};
