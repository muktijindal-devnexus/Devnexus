import React from "react";
import { Banner } from "../global/Banner";
import BannerImage1 from "../../../public/cdn//images/BannerImage.jpg";
import StatusCard from "../common/Status";
import BlockchainServices from "./BlockchainServices";
import BlockchainMilestones from "./BlockchainMilestones";
import BlockchainPlatforms from "./BlockchainPlatforms";
// import BlockchainDeveplopemnt from "./BlockchainDevelopment";
import FaqSection from "../global/FaqSection";
import IndustriesWeServe from "./IndustriesWeServe";
import BlockchainApp from "./BlockchainApp";

const faqData = [
  {
    question: "What is blockchain development, and how can it help my business?",
    answer:
      "Blockchain development creates secure, decentralized, and transparent systems. DevNexus Solutions builds blockchain-powered solutions that protect data and enhance trust across your business processes.",
  },
  {
    question: "How can blockchain improve efficiency in my business?",
    answer:
      "Blockchain automates workflows, eliminates intermediaries, and ensures accurate, tamper-proof records. DevNexus Solutions helps streamline your operations with secure and efficient blockchain systems.",
  },
  {
    question: "Can you create smart contracts or decentralized apps?",
    answer:
      "Yes. DevNexus Solutions develops smart contracts and decentralized applications (dApps) designed for secure, automated, and transparent digital transactions.",
  },
  {
    question: "What industries can benefit from blockchain development?",
    answer:
      "Industries such as finance, supply chain, healthcare, logistics, and e-commerce can benefit greatly from blockchain. DevNexus Solutions builds custom blockchain solutions for various sectors.",
  },
  {
    question: "Is blockchain technology safe and reliable?",
    answer:
      "Absolutely. Blockchain ensures data immutability, fraud prevention, and secure transactions. DevNexus Solutions follows advanced security practices to deliver highly reliable blockchain systems.",
  },
  {
    question: "Can blockchain integrate with my existing systems?",
    answer:
      "Yes. DevNexus Solutions integrates blockchain with your existing software using APIs and middleware, enhancing transparency, traceability, and efficiency without disrupting your current operations.",
  },
];


export const Blockchain = () => {
  return (
    <div>
      <Banner
        image="/cdn/images/Blockchain/blockchain.mp4"
        overlayImage
        heading="Trusted Blockchain Development Company "
        description="Building secure, scalable, and transparent systems for a decentralized future"
      />
      <StatusCard />
      <BlockchainServices />
      <BlockchainMilestones />
      <BlockchainApp />
      <BlockchainPlatforms />
      {/* <BlockchainDeveplopemnt /> */}
      <IndustriesWeServe />
      <FaqSection
        faqs={faqData}
        title="  Frequently Asked Questions (FAQs)"
        subtitle=" Answers to Your Most Common Questions Fast, Clear, and Helpful."
      />
    </div>
  );
};
