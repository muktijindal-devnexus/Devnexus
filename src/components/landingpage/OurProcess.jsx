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
      <div className="relative w-full h-[551px] md:h-[500px] lg:h-[551px]">
        {/* Overlay div moved to be sibling of Image but before content */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        
        <Image
          src={ProcessImage}
          alt="OurProcess Image"
          className="w-full h-[551px] md:h-[500px] lg:h-[551px] object-cover"
        />
        
        {/* Content moved outside the overlay by increasing z-index */}
        <section className="absolute top-0 left-0 w-full h-full flex flex-col items-center pt-[10px] text-white z-20">
          <div className="text-center max-w-2xl px-2">
            <h2 className="text-3xl font-bold leading-10 pb-2.5">Our Process</h2>
            <span className="text-base leading-4">
             We take a collaborative, goal-driven approach. We begin by understanding your needs, followed by planning, execution, and regular feedback to ensure success.
            </span>
          </div>

          {/* Desktop View - Full Cards */}
          <div className="hidden lg:flex gap-6 xl:gap-8 pt-[30px] md:pt-[40px]">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className={`mt-8 bg-white bg-opacity-90 text-black h-[130px] w-[270px] pb-[40px]  rounded-xl p-4 shadow-lg flex flex-col justify-center text-center ${
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
                <h4 className="text-xl font-semibold pb-2">
                  {step.title}
                </h4>
                <p className="text-[16px]">{step.description}</p>
              </div>
            ))}
          </div>

                {/* Tablet View - 2x2 Grid */}
          <div className="hidden sm:flex lg:hidden flex-wrap justify-center gap-4 md:gap-6 pt-4 md:pt-8 px-4 md:px-6">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-90 text-black h-[120px] w-[45%] md:w-[43%] rounded-xl p-3 md:p-4 shadow-lg flex flex-col justify-center text-center"
              >
                {/* <Image
                  src={step.icon}
                  alt="Icon"
                  width={35}
                  height={35}
                  className="relative bottom-3 mx-auto"
                /> */}
                <h2 className="text-lg md:text-xl font-semibold pb-1 md:pb-2">
                  {step.title}
                </h2>
                <p className="text-[13px] md:text-[14px]">{step.description}</p>
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
                <h3 className="text-lg font-semibold">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};