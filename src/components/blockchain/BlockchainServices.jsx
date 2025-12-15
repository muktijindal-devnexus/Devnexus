"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Hybrid Blockchain Development Services",
    description:
      "We build powerful hybrid blockchain solutions that combine the security of private networks with the transparency of public chains. Our hybrid architecture allows enterprises to customize access levels, optimize data control, and achieve high performance while maintaining decentralization where needed.",
  },
  {
    number: "02",
    title: "Public Blockchain Development Company",
    description:
      "DevNexus Solutions provides full-cycle public blockchain development, helping businesses leverage open, trustless, and transparent networks. Our team builds decentralized platforms using leading chains like Ethereum, Solana, Polygon, Avalanche, and BNB Chain, ensuring maximum scalability and user trust.",
  },
  {
    number: "03",
    title: "Private Blockchain Development Company",
    description:
    "For businesses demanding enhanced privacy and controlled access, we offer advanced private blockchain development services. From supply chain operations to enterprise-level data management, we design secure, permissioned networks tailored to your workflow and compliance requirements.",
  },
  {
    number: "04",
    title: "Smart Contract Development",
    description:
    "Our expert developers create audit-ready, self-executing smart contracts that automate business processes with complete accuracy and trust. We build secure, optimized smart contracts for multiple blockchain ecosystems, ensuring smooth, tamper-proof transactions and workflows.",
  },
  {
    number: "05",
    title: "dApp Development Services",
    description:
    "We design and develop high-performance decentralized applications (dApps) for industries like finance, gaming, logistics, real estate, and healthcare. Our solutions focus on intuitive UI/UX, fast transactions, and secure architecture to deliver a seamless decentralized user experience.",
    
  },
    {
    number: "06",
    title: "NFT Marketplace Development Company",
    description:
    "Launch a fully customized NFT marketplace with advanced trading features, integrated wallets, auction modules, royalty management, and multi-chain support. Whether for art, gaming assets, collectibles, or metaverse items — we build scalable, secure NFT platforms tailored to your business model.",
    
  },
  //     {
  //   number: "07",
  //   title: "Crypto Wallet App Development",
  //   description:
  //   "Our team develops highly secure crypto wallet applications with multi-currency support, biometric authentication, private key management, QR-based transactions, and dApp integration. We build custodial and non-custodial wallets for mobile, desktop, and web platforms.",
    
  // },
  //  {
  //   number: "07",
  //   title: "Blockchain App Development",
  //   description:
  //   "From concept to deployment, we offer end-to-end blockchain app development services that align with your business goals. We create scalable decentralized solutions with modern architectures, secure APIs, and seamless integration across existing systems.",
    
  // },

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
     At DevNexus Solutions, we deliver secure, scalable, and business-ready blockchain solutions designed for modern enterprises. With a strategic and collaborative approach, we help startups and companies build decentralized ecosystems that drive transparency, automation, and digital trust.
      </p>

      <div className="flex flex-col md:flex-row gap-18">
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