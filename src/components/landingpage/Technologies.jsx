"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Icon Imports for Tabs
import FrontendIcon from "../../../public/cdn/images/Frontend.svg";
import BackendIcon from "../../../public/cdn/images/Backend.svg";
import DatabaseIcon from "../../../public/cdn/images/Database.svg";
import UIIcon from "../../../public/cdn/images/UI UX.svg";
import CMSIcon from "../../../public/cdn/images/CMS.svg";
import DevopsIcon from "../../../public/cdn/images/devops.svg";

const tabs = [
  { label: "AltFront", icon: FrontendIcon },
  { label: "AltBackend", icon: BackendIcon },
  { label: "AltDatabase", icon: DatabaseIcon },
  { label: "AltUI/UX", icon: UIIcon },
  { label: "AltCMS", icon: CMSIcon },
  { label: "AltDevOps", icon: DevopsIcon },
];

// Mirror Skeleton Card
const MirrorSkeletonCard = () => (
  <div className="border border-[#00357A] rounded-2xl p-4 bg-white shadow-md h-44 flex flex-col items-center justify-between animate-pulse">
    <div className="w-20 h-20 bg-gray-200 rounded-full mb-2" />
    <div className="w-3/4 h-4 bg-gray-200 rounded" />
  </div>
);

const Technologies = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [techData, setTechData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTechData = async () => {
      try {
        const res = await fetch("https://backend.devnexussolutions.com/api/getTechs");
        const response = await res.json();
        const data = response.data || [];

        if (!Array.isArray(data)) {
          throw new Error("Expected an array but got: " + JSON.stringify(data));
        }

        const groupedData = data.reduce((acc, item) => {
          if (!acc[item.category]) acc[item.category] = [];
          acc[item.category].push(item);
          return acc;
        }, {});

        setTechData(groupedData);
      } catch (error) {
        console.error("Error fetching technologies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTechData();
  }, []);

  return (
    <section className="bg-white text-center py-10">
      {/* Title */}
      <motion.div
        className="flex justify-center items-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl text-[#335D95] font-semibold">
          Technologies <span className="font-bold text-[#00357A]">We Work</span> with
        </h2>
      </motion.div>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-3 mb-6">
        {tabs.map((tab, index) => (
          <motion.button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#335D95] text-sm font-medium transition-all duration-300 cursor-pointer
              ${
                activeTab === tab.label
                  ? "bg-[#335D95] text-white"
                  : "bg-white text-[#335D95] hover:bg-[#E5EBF2]"
              }`}
          >
            <Image src={tab.icon} alt={tab.label} width={16} height={16} />
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Grid Section */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
      >
        {loading ? (
          // Skeleton Loader
          Array.from({ length: 8 }).map((_, idx) => <MirrorSkeletonCard key={idx} />)
        ) : (
          <AnimatePresence mode="wait">
            {techData[activeTab]?.map((tech) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="border border-[#00357A] rounded-2xl p-4 select-none bg-white shadow-md h-44 flex flex-col items-center justify-between"
              >
                <Image
                  src={tech.image}
                  alt={tech.name}
                  className="object-contain"
                  width={80}
                  height={80}
                />
                <span className="text-sm font-semibold">{tech.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </motion.div>
    </section>
  );
};

export default Technologies;
