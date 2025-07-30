"use client";
import { useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Tailor-Made AI Solutions",
    content:
      "At DevNexus Solutions, We specialise in providing tailored AI solutions that address your unique brand challenges and requirements. From tailored AI models to advanced automation, we can design an AI system that perfectly matches your data and workflows. ",
  },
  {
    id: 2,
    title: " Enhance decision-making ",
    content:
      "We help your business enhance the decision-making process with AI software development services by leveraging advanced analytics models and real-time data processing. Our team of experts enables faster, smarter, and more informed decisions. ",
  },
  {
    id: 3,
    title: "Streamline operations",
    content:
      "We help businesses streamline their operations by automating repetitive tasks, optimising workflows, and integrating AI-driven solutions into their daily processes. Our AI tools reduce manual efforts, improve accuracy and boost efficiency, allowing your team to focus on strategic growth. ",
  },
  {
    id: 4,
    title: "Improve Efficiency",
    content:
      "We can integrate AI-powered tools that help businesses improve efficiency. Our custom AI solutions enable faster workflows, reduce human errors, and maximise productivity across all operations. ",
  },
  {
    id: 5,
    title: "Custom AI Model Development",
    content:
      "We specialise in developing custom AI models that help businesses address unique challenges. It doesn't matter whether you are looking for predictive analytics or natural language processing; we can design AI models that are perfect for your data. ",
  },
  {
    id: 6,
    title: "Streamline integration",
    content:
      "Our Custom AI Solutions Development experts ensures streamlined integration of AI technology into your existing system and workflow. Our team specialises in connecting AI models, APIs, and other tools with your software, such as CRM, ERP, or other similar platforms, to unlock more potential. From data scratch to deployment, we are making AI adoption smooth, efficient and future-ready.",
  },
  {
    id: 7,
    title: "Future-Ready Applications",
    content:
      "Our AI chatbot development services can create future-ready applications that evolve with your business needs. Our AI-powered solutions are scalable, flexible and advanced to ensure that they stay relevant in the fast-growing digital landscape.",
  },
];

export default function BusinessGrowthSlider() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const handleNext = () => setCurrent((prev) => (prev + 1) % total);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Card */}
        <div className="bg-[#00357A] text-white p-8 rounded-xl md:w-1/2 h-[300px]">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 leading-snug">
            Boost Your Business Growth With {" "}
            <span className="font-bold">AI Software Development Services</span>
          </h2>
          <p className="text-lg text-blue-100">
           Unlock the potential of your business with Artificial Intelligence Development Services from DevNexus Solutions.
          </p>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 h-[400px] flex flex-col justify-between pt-20">
          {/* Slide Indicator */}
          <div className="text-sm font-medium border border-[#00357A] text-[#00357A] px-4 py-1 rounded-full inline-block w-fit mb-6">
            {`0${current + 1} of 0${total}`}
          </div>

          {/* Title and Divider */}
          <div>
            <h3 className="text-xl font-semibold text-[#00357A]">
              {slides[current].title}
            </h3>
            <hr className="border-[#00357A] w-24 my-2" />
          </div>

          {/* Content Area with scroll if overflow */}
          <div className="text-gray-700 text-sm overflow-y-auto pr-2 flex-1">
            {slides[current].content}
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2 mt-4 hover:cursor-pointer">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current ? "bg-[#00357A] scale-110" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4 mt-4 justify-end">
            <button onClick={handlePrev} className="text-[#00357A] hover:cursor-pointer">
              <MoveLeft size={40} />
            </button>
            <button onClick={handleNext} className="text-[#00357A] hover:cursor-pointer">
              <MoveRight size={40} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
