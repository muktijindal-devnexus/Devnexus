import React from "react";

export const ProcessWeFollow = () => {
  const steps = [
    {
      title: "Discovery and Strategy",
      description:
        "First, we understand the client's expectations and the potential audience market size. This phase includes market research, competitor analysis, and other significant factors. ",
    },
    {
      title: "UI/UX Experience",
      description:
        "Our expert designers create wireframes and interactive prototypes, mainly focused on usability and user engagement. ",
    },
    {
      title: "Agile Development",
      description:
        "We use agile development teams and technologies to build a secure performance app. Whether native or cross-functional, we ensure the code is clean, modular, and maintainable.",
    },
    {
      title: "Quality Assurance & Testing",
      description:
        "Every step of app development undergoes manual and automated testing to check whether it covers all the functionalities or needs any changes.",
    },
    {
      title: "Deployment & Launch",
      description:
        "We control the whole app store submission process, including Apple App Store and Google Play Store guidelines. We also provide strategies for maximum visibility. ",
    },
        {
      title: "Post-Launch Support",
      description:
        "Once an app is launched, our work does not stop. We offer ongoing support, performance monitoring, and feature enhancements to keep your app up to date.",
    },
  ];

  return (
    <section className="bg-white overflow-hidden px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <div className="w-[50%] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-[#00357A]">
          Our Comprehensive <span className="font-bold">Approach </span>{" "}
            for  <span className="font-bold">Mobile App Development</span> Services
          </h2>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-center items-stretch gap-6 flex-wrap">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex-1 bg-white text-[#00357A] p-4 rounded-lg shadow-md min-w-[120px] w-full 
              md:w-auto border border-gray-200 transition-all duration-300 hover:bg-[#335D95]
               hover:text-white hover:scale-105 hover:min-w-[260px] 
               hover:z-10 h-[200px] md:h-[400px] group"
            >
              {/* Default state - centered */}
              <div className="h-full flex flex-col items-center justify-center group-hover:hidden">
                <h3 className="text-xl font-bold">{`0${index + 1}`}</h3>
                <hr className="border-gray-300 w-10 my-2" />
                <h4 className="font-semibold text-center">{step.title}</h4>
              </div>

              {/* Hover state - left aligned */}
              <div className="h-full hidden group-hover:flex flex-col items-start justify-start text-left px-2 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2">{`0${index + 1}`}</h3>
                <hr className="border-gray-300 mb-4 w-10" />
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-sm leading-relaxed text-white max-h-[180px] overflow-hidden">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
