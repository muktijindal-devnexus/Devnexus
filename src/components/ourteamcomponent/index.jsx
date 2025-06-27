"use client";
import React, { useEffect, useState } from "react";
import DeveloperCarousel from "./DeveloperCarousel";
import BannerImage1 from "../../../public/cdn/images/team/our team.jpg";
import { Banners } from "../global/NavBanners";

const OurTeamComponent = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const res = await fetch("https://backend.devnexussolutions.com/api/All-team");
        const json = await res.json();
        const rawData = json?.data || [];

        // Fixing malformed technology/skills fields
        const cleanedData = rawData.map((member) => {
          let skills = [];

          // Handle technology or skills key
          const rawSkills = member.technology || member.skills;

          if (Array.isArray(rawSkills) && typeof rawSkills[0] === "string") {
            try {
              skills = JSON.parse(rawSkills[0]);
            } catch (err) {
              console.warn("Could not parse skills for:", member.name);
            }
          }

          return {
            ...member,
            skills,
          };
        });

        setTeamData(cleanedData);
        console.log("Cleaned Team Data:", cleanedData);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeamData();
  }, []);

  const filterBySkills = (skills) =>
    teamData.filter((dev) =>
      dev.skills?.some((skill) => skills.includes(skill))
    );

  return (
    <div>
      <Banners
        image={BannerImage1}
        overlayImage
        heading="The Minds Behind the Success"
        description="At DevNexus Solutions, our strength is in our team of experts. We are a passionate team of developers, designers, market strategists, and digital marketers who thrive on all challenges with creative thinking."
      />

      <main className="min-h-screen flex flex-col my-10 gap-12 items-center justify-center bg-gray-50">
        <DeveloperCarousel
          developers={filterBySkills(["HTML5", "CSS3", "Bootstrap", "Tailwind CSS"])}
          title="Frontend Developers"
          cardsToShow={3}
          multiSkillFilter={["Html5", "Next.js", "JavaScript", "React.js" , 'TypeScript' , 'Tailwind Css' , 'Bootstrap']}
        />
        <DeveloperCarousel
          developers={filterBySkills("Node.js", "Nest Js", "Express.js", "Python" , 'Java' , 'Php')}
          title="Backend Developers"
          cardsToShow={3}
          multiSkillFilter={["Node.js", "Nest Js", "Express.js", "Python" , 'Java' , 'Php']}
        />
        <DeveloperCarousel
          developers={filterBySkills(["Wordpress", "Shopify", "Webflow", "Woo Commerce"])}
          title="CMS Developers"
          cardsToShow={3}
          multiSkillFilter={["Wordpress", "Shopify", "Webflow", "Woo Commerce"]}
        />
        <DeveloperCarousel
          developers={filterBySkills(["Abobe", "Figma", "Photoshop", "Illustrator"])}
          title="Web Designing"
          cardsToShow={3}
          multiSkillFilter={["Abobe", "Figma", "Photoshop", "Illustrator"]}
        />
        <DeveloperCarousel
          developers={filterBySkills(["MySQL", "Firebase", "MongoDB", "Posgre SQL"])}
          title="Database"
          cardsToShow={3}
          multiSkillFilter={["MySQL", "Firebase", "MongoDB", "Posgre SQL"]}
        />
        <DeveloperCarousel
          developers={filterBySkills(["Shopify", "WooCommerce", "WPCommerce"])}
          title="Ecommerce"
          cardsToShow={3}
          multiSkillFilter={["Shopify", "WooCommerce", "WPCommerce"]}
        />
        {/* <DeveloperCarousel
          developers={filterBySkills(["De-Fi", "Private Chain", "Smart Contracts", "Private Chain"])}
          title="Blockchain"
          cardsToShow={3}
          multiSkillFilter={["De-Fi", "Private Chain", "Smart Contracts", "Private Chain"]}
        />
        <DeveloperCarousel
          developers={filterBySkills(["ChatBot", "Data Enigneering", "Predictive Analysis", "Machine Learning"])}
          title="Artificial Intelligence"
          cardsToShow={3}
          multiSkillFilter={["ChatBot", "Data Enigneering", "Predictive Analysis", "Machine  Learning"]}
        /> */}
        {/* <DeveloperCarousel
          developers={filterBySkills(["React js", "Next js", "Angular js", "Vue js", "Typescript"])}
          title="JavaScript Developer"
          cardsToShow={3}
          multiSkillFilter={["React js", "Next js", "Angular js", "Vue js", "Typescript"]}
        /> */}
      </main>
    </div>
  );
};

export default OurTeamComponent;
