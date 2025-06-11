"use client";
import React from "react";
import { BookLock, Briefcase, ClipboardList, Code, TabletSmartphone } from "lucide-react";

const processSteps = [
  {
    title: "Planning",
    description: "Develop a tailored strategic roadmap for your custom software solutions.",
    icon: <ClipboardList className="h-10 w-10 text-red-500" />,
  },
  {
    title: "Development",
    description: "Crafting your software with accuracy and professional excellence.",
    icon: <Code className="h-10 w-10 text-indigo-600" />,
  },
  {
    title: "Testing",
    description: "Ensuring everything works smoothly and meets your expectations.",
    icon: <TabletSmartphone className="h-10 w-10 text-green-600" />,
  },
  {
    title: "Deployment",
    description: "Deploying the solution securely and efficiently.",
    icon: <BookLock className="h-10 w-10 text-yellow-500" />,
  },
];

const OurProcess = () => {
  return (
    <section className="py-16 bg-white px-4 md:px-20">
      {/* Title Section */}
      <div className="mb-12 flex flex-col items-center justify-center text-center w-full max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-[#00357A]">Our Process</h2>
        <p className="text-[#727272] mt-6">
          At DevNexus Solutions, our process is built on clarity, collaboration, and results.
          From wireframes to launching new websites, every step is transparent and aligned with
          your brand guidelines.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
        {processSteps.map((step, idx) => (
          <div key={idx} className="flip-card w-full h-44">
            <div className="flip-card-inner w-full h-full">
              {/* Front */}
              <div className="flip-card-front border-2 border-[#00357A] rounded-lg p-8 flex flex-col justify-center items-center bg-white">
                {step.icon}
                <h3 className="text-xl font-semibold text-blue-900 mt-4">{step.title}</h3>
              </div>

              {/* Back */}
              <div className="flip-card-back border-2 border-[#00357A] rounded-lg p-6 flex justify-center items-center bg-[#00357A] text-white">
                <p className="text-sm text-center">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default OurProcess;
