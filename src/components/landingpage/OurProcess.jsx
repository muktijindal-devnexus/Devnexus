import Image from "next/image";
import React from "react";
import ProcessImage from "../../../public/images/Process/OurProcess.jpeg";
import Icon from "../../../public/images/ProcessIcon.svg";
import LaunchIcon from "../../../public/images/Launch.svg";
import DesignIcon from "../../../public/images/Design.svg";
import TestingIcon from "../../../public/images/Testing.svg";

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
            <h1 className="text-3xl font-bold leading-10 pb-2.5">Our Process</h1>
            <span className="text-base leading-4">
              Our approach is collaborative and goal-oriented. We begin by
              understanding your needs, followed by planning, execution, and
              continuous feedback to ensure success.
            </span>
          </div>

          <div className="hidden sm:flex gap-8 pt-[40px]">
            <div className="mt-8 bg-white bg-opacity-90 text-black h-[130px] relative top-30 w-[270px] pb-[40px] rounded-xl p-4 shadow-lg flex flex-col justify-center text-center">
              <Image
                src={processSteps[0].icon}
                alt="Icon"
                width={40}
                height={40}
                className="relative bottom-4 left-[40%]"
              />
              <h2 className="text-xl font-semibold pb-2">
                {processSteps[0].title}
              </h2>
              <p className="text-[16px]">{processSteps[0].description}</p>
            </div>
            <div className="mt-8 bg-white bg-opacity-90 text-black h-[130px] w-[270px] pb-[40px] rounded-xl p-4 shadow-lg flex flex-col justify-center text-center">
              <Image
                src={processSteps[1].icon}
                alt="Icon"
                width={40}
                height={40}
                className="relative bottom-4 left-[40%]"
              />
              <h2 className="text-xl font-semibold pb-2">
                {processSteps[1].title}
              </h2>
              <p className="text-[16px]">{processSteps[1].description}</p>
            </div>
            <div className="mt-8 bg-white bg-opacity-90 text-black h-[130px] relative top-30 w-[270px] rounded-xl p-4 pb-[40px] shadow-lg flex flex-col justify-center text-center">
              <Image
                src={processSteps[2].icon}
                alt="Icon"
                width={40}
                height={40}
                className="relative bottom-4 left-[40%]"
              />
              <h2 className="text-xl font-semibold pb-2">
                {processSteps[2].title}
              </h2>
              <p className="text-[16px]">{processSteps[2].description}</p>
            </div>
            <div className="mt-8 bg-white bg-opacity-90 text-black h-[130px] w-[270px] rounded-xl p-4 shadow-lg flex flex-col pb-[40px] justify-center text-center">
              <Image
                src={processSteps[3].icon}
                alt="Icon"
                width={40}
                height={40}
                className="relative bottom-4 left-[40%]"
              />
              <h2 className="text-xl font-semibold pb-2">
                {processSteps[3].title}
              </h2>
              <p className="text-[16px]">{processSteps[3].description}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};