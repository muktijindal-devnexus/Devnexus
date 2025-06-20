"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// Icon Imports for Tabs
import FrontendIcon from "../../../public/cdn/images/Frontend.svg";
import BackendIcon from "../../../public/cdn/images/Backend.svg";
import DatabaseIcon from "../../../public/cdn/images/Database.svg";
import UIIcon from "../../../public/cdn/images/UI UX.svg";
import CMSIcon from "../../../public/cdn/images/CMS.svg";
import DevopsIcon from "../../../public/cdn/images/CMS.svg"; 

const tabs = [
  { label: "Frontend", icon: FrontendIcon },
  { label: "Backend", icon: BackendIcon },
  { label: "Database", icon: DatabaseIcon },
  { label: "UI/UX", icon: UIIcon },
  { label: "CMS", icon: CMSIcon },
  { label: "Deveops", icon: DevopsIcon },
];

const Technologies = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [techData, setTechData] = useState({});

  useEffect(() => {
    const fetchTechData = async () => {
      try {
        const res = await fetch("https://backend.devnexussolutions.com/api/getTechs");
        const response = await res.json();

        const data = response.data || [];

        if (!Array.isArray(data)) {
          throw new Error("Expected an array but got: " + JSON.stringify(data));
        }

        // Transform data into category-wise grouping
        const groupedData = data.reduce((acc, item) => {
          if (!acc[item.category]) acc[item.category] = [];
          acc[item.category].push(item);
          return acc;
        }, {});

        setTechData(groupedData);
      } catch (error) {
        console.error("Error fetching technologies:", error);
      }
    };

    fetchTechData();
  }, []);

  return (
    <section className="bg-white text-center">
      {/* Title */}
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-4xl text-[#335D95] font-semibold">
          Technologies <span className="font-bold text-[#00357A]">We Work</span> with
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#335D95] text-sm font-medium transition-all duration-300
              ${
                activeTab === tab.label
                  ? "bg-[#335D95] text-white"
                  : "bg-white text-[#335D95] hover:bg-[#E5EBF2]"
              }`}
          >
            <Image src={tab.icon} alt={tab.label} width={16} height={16} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Technology Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {techData[activeTab]?.map((tech) => (
          <div
            key={tech.name}
            className="border-1 border-[#00357A] rounded-2xl p-4 flex flex-col items-center justify-center select-none"
          >
            <Image
              src={tech.image}
              alt={tech.name}
              className="mb-2"
              width={80}
              height={80}
            />
            <span className="text-sm font-semibold">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
