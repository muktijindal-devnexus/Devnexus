"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "NFT Marketplace Development",
    description: "Launch your own NFT marketplace with secure trading and wallet integration. We are offering custom features for art, gaming, and metaverse platforms.",

    highlight: false,
  },
  {
    title: "Crypto Wallet Development",
    description: "At DevNexus Solutions, we are creating secure, multi currency crytpo wallets with various features biometric security and seamless integration with dApps and other apps.",

    highlight: false,
  },
  {
    title: "Custom Blockchain Development",
    description: "Build your blockchain solution from scratch. At DevNexus Solutions, our team of experts is designing, developing, and deploying private, public blockchain networks with custom consensus algorithms and smart functionality.",
    highlight: false,
  },
  {
    title: "Smart Contract Development",
    description: "At DevNexus Solutions, we are creating secure, multi currency crytpo wallets with various features biometric security and seamless integration with dApps and other apps.",
    highlight: false,
  },
  {
    title: "Decentralized Application (dApp) Development",
    description: "We are designing and developing user-friendly Decentralized Application (dApp) for finance, gaming, healthcare, and other industries. Our team of experts ensures a seamless user experience on the blockchain.",
    highlight: false,
  },
];

const BlockchainDevelopment = () => {
  return (
    <section className="px-6 py-12 md:px-16 lg:px-24 bg-white">
      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Heading in first grid cell */}
        <motion.div
          className="p-4 col-span-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl md:text-4xl text-[#00357A]">
            Our <span className="font-bold">Blockchain Development</span> Services
          </h1>
        </motion.div>

        {/* Cards */}
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="group p-6 rounded-md shadow-md h-full min-h-[220px] flex justify-center flex-col bg-[#F4FAFF] text-blue-900 relative hover:bg-[#335D95] hover:text-white transition-colors duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (idx + 1) * 0.15 }}
            viewport={{ once: true }}
          >
            {/* Top line decoration */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-transparent flex justify-end pr-4 pt-2">
              <span className="w-full h-1 bg-[#335D95] mr-1"></span>
              <span className="w-4 h-1 bg-[#335D95] mr-1"></span>
              <span className="w-3 h-1 bg-[#335D95]"></span>
            </div>

            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>

            {service.description && (
              <p
                className="
                  text-sm font-light leading-relaxed
                  opacity-0 max-h-0 overflow-hidden mt-2
                  group-hover:opacity-100 group-hover:max-h-[150px]
                  transition-all duration-300 ease-in-out
                "
              >
                {service.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlockchainDevelopment;
