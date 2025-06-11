"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Custom Blockchain Development",
    description:
      "Build your blockchain solution from scratch. At DevNexus Solutions, our team of experts is designing, developing, and deploying private, public blockchain networks with custom consensus algorithms and smart functionality. ",
  },
  {
    number: "02",
    title: "Smart Contract Development",
    description: "Our Blockchain App Development team is automating the transaction and business process with self-executing smart contracts. At DevNexus Solutions, we write secure and efficient smart contracts for technology like Ethereum, Binance Smart Chain, Polygon, etc.",
  },
  {
    number: "03",
    title: " Decentralized Application (dApp) Development",
    description: "We are designing and developing user-friendly Decentralized Application (dApp) for finance, gaming, healthcare, and other industries. Our team of experts ensures a seamless user experience on the blockchain. ",
  },
  {
    number: "04",
    title: "NFT Marketplace Development",
    description: "Launch your own NFT marketplace with secure trading and wallet integration. We are offering custom features for art, gaming, and metaverse platforms. ",
  },
  {
    number: "05",
    title: "Crypto Wallet Development",
    description: "At DevNexus Solutions, we are creating secure, multi currency crytpo wallets with various features biometric security and seamless integration with dApps and other apps.",
  },

];

const BlockchainServices = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-white py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">
        Our Blockchain Development Services
      </h2>
      <p className="text-sm text-gray-600 mb-10 max-w-2xl">
        At DevNexus Solutions we are following a systematic and collaborative approach to
        deliver the most securable, scalable and blockchain aligned solutions.
      </p>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left: Steps List */}
        <div className="flex flex-col w-full md:w-1/3 space-y-4">
        {steps.map((step, index) => (
  <div
    key={index}
    onClick={() => setActiveStep(index)}
    role="button"
    tabIndex={0}
    className={`flex items-center gap-3 py-2 border-b cursor-pointer focus:outline-none ${
      activeStep === index ? "text-blue-700 font-medium" : "text-gray-600"
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

        {/* Right: Content */}
        <div className="flex flex-col md:w-2/3">
          <div className="flex items-center gap-4 mb-2">
            <div className="bg-[#00357A] text-white px-3 py-1 rounded text-xl font-bold">
              {steps[activeStep].number}
            </div>
            <h3 className="text-xl font-semibold">{steps[activeStep].title}</h3>
          </div>
          <p className="text-gray-600 max-w-xl">
            {steps[activeStep].description || "Details coming soon..."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlockchainServices;
