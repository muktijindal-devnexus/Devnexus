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

const faqData = [
  {
    question: "What Businesses Can Benefit from Blockchain?",
    answer:
      "Blockchain technology is rapidly emerging as a transformative force across a wide range of industries. Sectors such as finance, healthcare, government services, supply chain management, real estate, politics, and gaming stand to gain significantly by adopting blockchain to improve security, transparency, automation, and operational efficiency.For businesses that rely on secure transactions, decentralized applications (dApps), or smart contracts, integrating blockchain solutions presents a timely and strategic advantage. Now is an opportune moment for forward-thinking organizations to embrace blockchain development and stay ahead of the curve.",
  },
  {
    question:
      "Why Choose DevNexus Solutions for Blockchain Development?",
    answer:
      'At DevNexus Solutions, we specialize in building robust, scalable, and secure decentralized applications tailored to the unique needs of enterprises, agencies, and startups. Our experienced blockchain professionals leverage technologies and industry best practices to deliver solutions that ensure data integrity, transparency, and top-tier security—empowering businesses to innovate with confidence in a decentralized world.',
  },
  {
    question:
      " What Are the Benefits of Blockchain for Your Business?",
    answer:
      "Blockchain technology offers transformative advantages across industries by enhancing security, reducing fraud, and automating processes. Its decentralized architecture ensures data integrity and transparency, while eliminating intermediaries to reduce operational costs. With tamper-proof records and real-time traceability, blockchain empowers businesses to build trust, streamline workflows, and adapt to evolving digital demands.",
  },
  {
    question:
      " Can Blockchain Be Integrated with My Existing Business or Website?",
    answer:
      "Yes—at DevNexus Solutions, we seamlessly integrate blockchain technology into your existing systems using APIs and middleware solutions. This integration does not disrupt your current operations; instead, it enhances them by improving security, data integrity, and operational efficiency. Whether you're looking to enable smart contracts, secure transactions, or decentralized data management, our approach ensures a smooth transition into the blockchain ecosystem.",
  },
  {
    question: " Is Blockchain Development Dependent on the Existing Tech Stack?",
    answer:
      "Yes—blockchain integration depends heavily on your current tech stack. Compatibility with existing languages, databases, and APIs determines how efficiently components like smart contracts, wallets, or ledgers can be embedded. The right middleware ensures blockchain enhances functionality without disrupting your system.",
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
