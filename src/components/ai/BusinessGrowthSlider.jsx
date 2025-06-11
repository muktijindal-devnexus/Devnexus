"use client"
import { useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Tailor-Made AI Solutions",
    content:
      "At DevNexus Solutions, our team of experts specializes in providing tailor-made Ai solutions that address your unique brand challenges and requirements. From tailored ai models to advanced automation, we are able to design ai system that perfectly matches with your data, workflows.",
  },
  {
    id: 2,
    title: " Enhance decision-making",
    content:
      "At DevNexus Solutions, we are helping your business to enhance the decision-making process with AI software development services by leveraging advanced analytics models, real-time data processing, our team of experts are make faster, smarter and more informed decisions. ",
  },
  {
    id: 3,
    title: "Streamline operations",
    content:
      "At DevNexus Solutions, we are helping businesses to follow a streamlined operation by automating repetitive tasks, optimizing workflows and integrating AI-driven solutions into daily processes. Our specially designed ai tools reduce manual efforts, improve accuracy and boost efficiency, allowing your team to focus on strategic growth.",
  },
  {
    id: 4,
    title: "Improve Efficiency",
    content:
      "Our team of experts can integrate AI-powered tools that help businesses improve efficiency. Our custom ai solutions enable faster workflows, reduce human errors, and maximize productivity across operations. ",
  },
  {
    id: 5,
    title: "Custom AI Model Development-",
    content:
      "Our team of experts specializes in developing custom ai models that help businesses face unique challenges. Does not matter whether you are looking for protective analytics, natural language processing; we can design AI models which are perfect for your data. ",
  },
  {
    id: 6,
    title: "Seamless integration",
    content:
      "Our Custom AI Solutions Development experts ensure the seamless integration of ai technology into your existing system and workflow. Our team specializes in connecting ai models APis and other tools with your software like CRM ERPor other such platforms for more potential From data scratch to deployment we are making AI adoption smooth efficient and future-ready.",
  },
  {
    id: 7,
    title: "Future-Ready Applications",
    content:
      "Our AI chatbot development services can build future-ready applications designed to evolve with your business requirements. Our AI-powered solutions are scalable, flexible and advanced technologies to ensure they stay relevant in fast fast-growing digital landscape.",
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
        <div className="bg-[#00357A] text-white p-8 rounded-xl md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 leading-snug">
            Boost Your Business Growth With{" "}
            <span className="font-bold">AI Software Development</span>
          </h2>
          <p className="text-lg text-blue-100">
            Unlock the potential of your business with Artificial Intelligence Development Services from DevNexus Solutions.
          </p>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 space-y-4">
          <div className="text-sm font-medium border border-[#00357A] text-[#00357A] px-4 py-1 rounded-full inline-block w-fit">
            {`0${current + 1} of 0${total}`}
          </div>

          <h3 className="text-xl font-semibold text-[#00357A]">
            {slides[current].title}
          </h3>

          <hr className="border-[#00357A] w-24" />

          <p className="text-gray-700 text-sm">{slides[current].content}</p>

          {/* Dots (updated) */}
          <div className="flex items-center gap-2 mt-4">
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
            <button onClick={handlePrev} className="text-[#00357A]">
              <MoveLeft size={40} />
            </button>
            <button onClick={handleNext} className="text-[#00357A]">
              <MoveRight size={40} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
