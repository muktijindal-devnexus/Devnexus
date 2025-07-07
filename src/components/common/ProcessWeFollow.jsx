import React from "react";

export const ProcessWeFollow = () => {
  const steps = [
    {
      title: "Discovery and Strategy",
      description:
        "We understand the client's expectations and the potential audience market size. This phase includes market research, competitor analysis, and other significant factors.",
    },
    {
      title: "UI/UX Experience",
      description:
        "Our expert designers create wireframes and interactive prototypes, mainly focused on usability and user engagement.",
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
        "We manage the entire app store submission process, including following the Apple App Store and Google Play Store guidelines. We also provide strategies to maximize visibility of your mobile applications.",
    },
    {
      title: "Post-Launch Support",
      description:
        "Once an app is launched, our work does not stop. We offer ongoing support, performance monitoring, and feature enhancements to keep your app up-to-date.",
    },
  ];

  return (
    <section className="bg-white overflow-hidden px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <div className="w-full md:w-1/2 mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-[#00357A]">
            Our Comprehensive <span className="font-bold">Approach</span> for{" "}
            <span className="font-bold">Mobile App Development</span> Services
          </h2>
          <span className="text-[#557191] flex justify-end pt-5 sm:hidden">
            Scroll for more
          </span>
        </div>

        <div className="w-full sm:w-auto overflow-x-auto sm:overflow-visible">
          <div className="flex sm:flex-wrap justify-start sm:justify-center gap-6 min-w-max sm:min-w-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 flex flex-col items-center border rounded-md shadow-md px-4 py-6 min-h-[300px] w-[120px] bg-white border-blue-200 
                transition-all duration-300 group hover:bg-[#335D95] hover:text-white hover:w-[260px] hover:z-10"
              >
                {/* Before hover view */}
                <div className="flex flex-col items-center h-[300px] group-hover:hidden">
                  <div className="text-[#00357A] font-bold text-lg">{`0${
                    index + 1
                  }`}</div>
                  <div className="border-t border-gray-400 my-2" />
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-center transform -rotate-90 text-[#00357A] font-medium whitespace-nowrap">
                      {step.title}
                    </p>
                  </div>
                </div>

                {/* Hover view */}
                <div className="hidden group-hover:flex flex-col items-start justify-start text-left h-[300px] w-full">
                  <h3 className="text-xl font-bold mb-2">{`0${index + 1}`}</h3>
                  <hr className="border-gray-300 mb-4 w-12" />
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm leading-relaxed text-white overflow-hidden">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
