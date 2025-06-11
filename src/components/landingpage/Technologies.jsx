"use client";
import React, { useState } from "react";
import Image from "next/image";

// Icon Imports
import HtmlIcon from "../../../public/images/html.png";
import CSSIcon from "../../../public/images/CSS.svg";
import ReactIcon from "../../../public/images/React.svg";
import NextIcon from "../../../public/images/Nextjs.svg";
import FlutterIcon from "../../../public/images/Flutter.svg";
import TailwindIcon from "../../../public/images/Tailwind.svg";
import MUIIcon from "../../../public/images/MUI.svg";
import NativeIcon from "../../../public/images/React.svg";
import FrontendIcon from "../../../public/images/Frontend.svg";
import BackendIcon from "../../../public/images/Backend.svg";
import DatabaseIcon from "../../../public/images/Database.svg";
import UIIcon from "../../../public/images/UI UX.svg";
import CMSIcon from "../../../public/images/CMS.svg";

const tabs = [
  { label: "Frontend", icon: FrontendIcon },
  { label: "Backend", icon: BackendIcon },
  { label: "Database", icon: DatabaseIcon },
  { label: "UI/UX", icon: UIIcon },
  { label: "CMS", icon: CMSIcon },
  { label: "Deveops", icon: CMSIcon },
];

const techData = {
  Frontend: [
    { name: "HTML 5", icon: HtmlIcon },
    { name: "CSS 3", icon: CSSIcon },
    { name: "REACT.JS", icon: ReactIcon },
    { name: "NEXT.JS", icon: NextIcon },
    { name: "FLUTTER", icon: FlutterIcon },
    { name: "TAILWIND", icon: TailwindIcon },
    { name: "MUI", icon: MUIIcon },
    { name: "REACT NATIVE", icon: NativeIcon },
  ],
  Backend: [
    { name: "Node.js", icon: '/images/technology/nodejs.png' },
    { name: "Express.js", icon: '/images/technology/expressjs.svg' },
    { name: "Nest.js", icon: '/images/technology/Nest.svg' },
    { name: "Python", icon: '/images/technology/python.svg' },
    { name: "Django", icon: '/images/technology/Django.svg' },
    { name: "Flask", icon: '/images/technology/flask.svg' },


    { name: "Java", icon: '/images/technology/java.svg' },
    { name: "Spring Boot", icon: '/images/technology/spring.svg' },

    { name: "Graph QL", icon: '/images/technology/graphql.svg' },
  ],
  Database: [
    { name: "MongoDB", icon: '/images/technology/mongodb.svg' },
    { name: "MySQL", icon: '/images/technology/Mysql.svg' },
    { name: "PostgreSQL", icon: '/images/technology/postsql.svg' },
    { name: "FireBase", icon: '/images/technology/firebase.svg' },
  ],
  "UI/UX": [
    { name: "Figma", icon: '/images/technology/figma.svg' },
    { name: "Adobe XD", icon: '/images/technology/XD.svg' },
    { name: "Adobe Illustrator", icon: '/images/technology/illustrator.svg' },
    { name: "Adobe Photoshop", icon: '/images/technology/photoshop.svg' },
    { name: "Canva  ", icon: '/images/technology/canva.svg' },


  ],
  CMS: [
    { name: "WordPress", icon: '/images/technology/Wordpress.svg'  },
    { name: "Shopify", icon: '/images/technology/shopify.svg' },
    { name: "Webflow", icon: '/images/technology/webflow.svg' },
    { name: "Woo Commerce", icon: '/images/technology/woo.svg' },
  ],
  Deveops: [
    { name: "AWS", icon: '/images/technology/aws.svg' },
    { name: "Azure", icon: '/images/technology/azure.svg' },
    { name: "Digital Ocean", icon: '/images/technology/digitalocean.svg' },
    { name: "Cloudflare", icon: '/images/technology/cloudflare.png' }
  ],
};

const Technologies = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section className="bg-white text-center">
      {/* Title */}
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-4xl text-[#335D95] font-semibold">
          Technologies <span className="font-bold text-[#00357A]">We Work</span> with
        </h1>
      </div>

      {/* Tabs with Icons */}
      <div className="flex justify-center flex-wrap gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#335D95] text-sm font-medium transition-all
              ${
                activeTab === tab.label
                  ? "bg-[#335D95] text-white"
                  : "bg-white text-[#335D95]"
              }`}
          >
            <Image src={tab.icon} alt={tab.label} width={16} height={16} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {techData[activeTab]?.map((tech) => (
          <div
            key={tech.name}
            className="border-1 border-[#00357A] rounded-2xl p-4 flex flex-col items-center justify-center select-none"
          >
            <Image
              src={tech.icon}
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
