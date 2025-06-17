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
    question: "What businesses can benefit from Blockchain?",
    answer:
      "Blockchain is going to be the new normal for businesses across various industries. Businesses that are in finance, healthcare, politics, government services, supply chain, real estate, and gaming can enhance security, transparency, automation, and efficiency. If your business needs secure transactions, decentralized applications, or other smart contracts to improve efficiency, this is the time for all businesses to get involved in blockchain development services.",
  },
  {
    question:
      "What someone chooses is DevNexus Solutions for blockchain solution development?",
    answer:
      'Our team of experts is delivering robust and scalable decentralized applications, which ensure the top class security for enterprises, agencies, and other startups.  ',
  },
  {
    question:
      "What are the benefits of blockchain in my business/domain?",
    answer:
      "Blockchain enhance security and reduces fraud, automates process with the ensure data integrity, transparency and minimal operational costs by eliminating intermediaries and creating tamper-proof records.  ",
  },
  {
    question:
      "Can blockchain be integrated with my existing business/website? ",
    answer:
      "Yes. We use APIs and middleware solutions to integrate the framework into existing solutions. This doesnot affect the overall working of the online business, rather enhances security and efficiency of the same.",
  },
  {
    question: "Is blockchain development dependent on the existing solution’s tech stack? ",
    answer:
      "Yes, blockchain development is mostly dependent on the existing solution's tech stack, especially whenever integration is required.",
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
