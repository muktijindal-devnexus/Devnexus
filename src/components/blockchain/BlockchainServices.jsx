"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Custom Blockchain Development",
    description:
      "Build your blockchain solution from scratch. At DevNexus Solutions, our team of experts designs, develops, and deploys private and public blockchain networks with custom consensus algorithms and smart contract functionality.",
  },
  {
    number: "02",
    title: "Smart Contract Development",
    description:
      "Our Blockchain App Development team is automating transactions and business processes with self-executing smart contracts. At DevNexus Solutions, we develop secure and efficient smart contracts for various blockchain technologies, including Ethereum, Binance Smart Chain, Polygon, and others.",
  },
  {
    number: "03",
    title: "Decentralized Application (dApp) Development",
    description:
      "We are designing and developing user-friendly Decentralised Applications (dApps) for finance, gaming, healthcare, and other industries. Our team of experts ensures a seamless user experience on the Blockchain.",
  },
  {
    number: "04",
    title: "NFT Marketplace Development",
    description:
      "Launch your own NFT marketplace with secure trading and wallet integration. We are offering custom features for art, gaming, and metaverse platforms.",
  },
  {
    number: "05",
    title: "Crypto Wallet Development",
    description:
      "At DevNexus Solutions, we are creating secure, multi-currency crypto wallets with various features, biometric security, and seamless integration with dApps and other apps.",
  },
];

const BlockchainServices = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleStep = (index) => {
    if (window.innerWidth < 768) {
      // Mobile behavior - toggle accordion
      setExpandedIndex(expandedIndex === index ? null : index);
    } else {
      // Desktop behavior - select step
      setActiveStep(index);
    }
  };

  return (
    <section className="bg-white py-12 px-4 md:px-16 lg:px-24 flex flex-col justify-center items-center text-center">
      <h2 className="text-3xl font-bold text-[#00357A] mb-4">
        Our Blockchain Development Services
      </h2>
      <p className="text-[16px] text-gray-600 mb-15 max-w-2xl">
        At DevNexus Solutions we are following a systematic and collaborative
        approach to deliver the most securable, scalable and blockchain aligned
        solutions.
      </p>

      <div className="flex flex-col md:flex-row gap-18 w-full">
        {/* Desktop: Steps List */}
        <div className="hidden md:flex flex-col w-full md:w-1/3 space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => setActiveStep(index)}
              role="button"
              tabIndex={0}
              className={`flex items-center gap-3 py-2 border-b cursor-pointer focus:outline-none ${
                activeStep === index
                  ? "text-[#00357A] font-medium"
                  : "text-gray-600"
              }`}
            >
              <span className="w-8">{step.number}</span>
              <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                {step.title}
              </span>
              {activeStep === index && <span className="ml-auto">›</span>}
            </div>
          ))}
        </div>

        {/* Mobile: Accordion */}
        <div className="md:hidden w-full space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleStep(index)}
                className={`flex items-center justify-between w-full text-left ${
                  expandedIndex === index ? "text-[#00357A] font-medium" : "text-gray-600"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8">{step.number}</span>
                  <span>{step.title}</span>
                </div>
                <span className="text-xl">
                  {expandedIndex === index ? "−" : "+"}
                </span>
              </button>
              {expandedIndex === index && (
                <div className="pl-11 pt-3 text-gray-600 text-left">
                  {step.description}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop: Content */}
        <div className="hidden md:flex flex-col md:w-2/3 text-left pt-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#00357A] text-white px-3 py-1 rounded text-xl font-bold">
              {steps[activeStep].number}
            </div>
            <h3 className="text-xl font-semibold">{steps[activeStep].title}</h3>
          </div>
          <p className="text-gray-600 max-w-xl leading-8">
            {steps[activeStep].description || "Details coming soon..."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlockchainServices;