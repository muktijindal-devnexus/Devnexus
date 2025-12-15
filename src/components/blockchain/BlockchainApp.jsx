"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const SERVICES = {
  nft: {
    title: "Crypto Wallet App Development",
    description:
      "Our team develops highly secure crypto wallet applications with multi-currency support, biometric authentication, private key management, QR-based transactions, and dApp integration.",
    points: [
      "Enterprise-Grade Security & Private Key Management",
      "Multi-Currency Support & Cross-Chain Functionality",
      "Seamless UX with QR Transactions & dApp Integration",
      "Custom Wallet Development for All Platforms",
    ],
  },
  metaverse: {
    title: "NFT Marketplace Development Company",
    description:
      "Launch a fully customized NFT marketplace with advanced trading features, integrated wallets, auction modules, royalty management, and multi-chain support.",
    points: [
      "Custom NFT Marketplace for Art, Gaming & Metaverse",
      "Advanced Trading Features & Multi-Chain Support",
      "Integrated Wallet & Royalty Management",
      "Enterprise-Grade Security & Admin Control",
    ],
  },
  dapp: {
    title: "Blockchain App Development",
    description:
      "From concept to deployment, we offer end-to-end blockchain app development services aligned with your business goals.",
    points: [
      "End-to-End dApp Development & Auditing",
      "Enterprise Blockchain Integration",
      "DeFi, NFT & Web3 Solutions",
      "Private & Consortium Blockchain Networks",
    ],
  },
};

export default function BlockchainApp() {
  const [activeService, setActiveService] = useState("nft");

  return (
    <section className="text-[#00357a] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Blockchain App Services
          </h1>

          <p className="text-gray-700 leading-6 mb-10">
            Blockchain is reshaping businesses by boosting transparency,
            security, and automation. It is becoming a core driver of modern
            digital transformation.
          </p>

          {/* BUTTONS UNDER TITLE */}
          <div className="space-y-4 max-w-md">
            <ServiceCard
              title="Crypto Wallet App Development"
              active={activeService === "nft"}
              onClick={() => setActiveService("nft")}
            />
            <ServiceCard
              title="NFT Marketplace Development"
              active={activeService === "metaverse"}
              onClick={() => setActiveService("metaverse")}
            />
            <ServiceCard
              title="Blockchain App Development"
              active={activeService === "dapp"}
              onClick={() => setActiveService("dapp")}
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center">
          <ServiceContent service={SERVICES[activeService]} />
        </div>
      </div>
    </section>
  );
}

/* RIGHT SIDE CONTENT */
function ServiceContent({ service }) {
  return (
    <div className="space-y-6 max-w-xl">
      <h2 className="text-2xl font-semibold">
        {service.title}
      </h2>

      <p className="text-gray-700 text-sm leading-relaxed">
        {service.description}
      </p>

      <ul className="space-y-3 text-gray-700 text-sm">
        {service.points.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

/* SERVICE BUTTON */
function ServiceCard({ title, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-xl px-6 py-4 flex items-center justify-between transition-all
        ${
          active
            ? "bg-[#00357a] text-white"
            : "bg-gray-100 text-[#00357a] hover:bg-gray-200"
        }
      `}
    >
      <span className="text-sm font-medium">{title}</span>
      <ArrowRight
        className={`w-4 h-4 transition-transform ${
          active ? "translate-x-1" : "group-hover:translate-x-1"
        }`}
      />
    </button>
  );
}
