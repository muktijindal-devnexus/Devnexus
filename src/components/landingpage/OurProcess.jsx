import Image from "next/image";
import React from "react";
import ProcessImage from "../../../public/cdn/images/Process/OurProcess.jpeg";
import Icon from "../../../public/cdn/images/ProcessIcon.svg";
import LaunchIcon from "../../../public/cdn/images/Launch.svg";
import DesignIcon from "../../../public/cdn/images/Design.svg";
import TestingIcon from "../../../public/cdn/images/Testing.svg";

export const OurProcess = () => {
  const processSteps = [
    {
      title: "Discovery & Strategy",
      description: "Understanding your needs and defining goals.",
      icon: Icon,
    },
    {
      title: "Design & Development",
      description:
        "Creating sleek, functional, and user-friendly digital solutions.",
      icon: DesignIcon,
    },
    {
      title: "Launch & Growth",
      description: "Deploying and refining your digital presence for success.",
      icon: LaunchIcon,
    },
    {
      title: "Testing & Optimization",
      description: "Ensuring seamless performance and efficiency.",
      icon: TestingIcon,
    },
  ];
  
  return (
    <div>
      <div className="relative w-full h-[551px]">
        {/* Overlay div moved to be sibling of Image but before content */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        
        <Image
          src={ProcessImage}
          alt="OurProcess Image"
          className="w-full h-[551px] object-cover"
        />
        
        {/* Content moved outside the overlay by increasing z-index */}
        <section className="absolute top-0 left-0 w-full h-full flex flex-col items-center pt-[10px] text-white z-20">
          <div className="text-center max-w-2xl px-2">
            <h2 className="text-3xl font-bold leading-10 pb-2.5">Our Process</h2>
            <span className="text-base leading-4">
             We take a collaborative, goal-driven approach. We begin by
              understanding your needs, followed by planning, execution, and
              continuous feedback to ensure success.
            </span>
          </div>

          {/* Desktop View - Full Cards */}
          <div className="hidden sm:flex gap-8 pt-[40px]">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className={`mt-8 bg-white bg-opacity-90 text-black h-[130px] w-[270px] pb-[40px] rounded-xl p-4 shadow-lg flex flex-col justify-center text-center ${
                  index % 2 === 0 ? "relative top-30" : ""
                }`}
              >
                <Image
                  src={step.icon}
                  alt="Icon"
                  width={40}
                  height={40}
                  className="relative bottom-4 left-[40%]"
                />
                <h2 className="text-xl font-semibold pb-2">
                  {step.title}
                </h2>
                <p className="text-[16px]">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile View - Only Titles */}
          <div className="sm:hidden flex flex-wrap justify-center gap-4 pt-8 px-4">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-90 text-black rounded-lg p-3 shadow-md text-center min-w-[230px]"
              >
                <h2 className="text-lg font-semibold">
                  {step.title}
                </h2>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};