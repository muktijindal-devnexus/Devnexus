import React from "react";

export const ProcessWeFollow = () => {
  const steps = [
    {
      title: "Discovery & Requirement Gathering",
      description:
        "First we begin with the understanding of your brand's goals, potential audience and technical requirement needs to define the project scope clearly.",
    },
    {
      title: "Planning Strategy",
      description:
        "Our Web Design and Web Development team, create a detailed project road map, which include site architecture, technology stack, timeline and allocation of resources. ",
    },
    {
      title: "UI UX Design",
      description:
        "Our design team crafts intuitive, visually attractive layouts and user interface which align your brand identity. ",
    },
    {
      title: "Frontend & Backend Development",
      description:
        "Next we bring designs to life with clean, responsive front end code using modern frameworks like HTML5, CSS3, JavaScript, React, Node.js, PHP, Python, etc.",
    },
    {
      title: "Integration & Testing-",
      description:
        "We make sure every component of your website or app works efficiently through seamless API's, third party services and backend systems. Our technology testing process includes functionality checks, performance testing, responsiveness and other security audits.",
    },
        {
      title: "Deployment",
      description:
        "After comprehensive testing, we launch your website on the preferred hosting server and ensure smooth setup and operation.",
    },
    {
      title: "Maintenance & Support",
      description:
        "Our team of experts provides ongoing updates, security, performance monitoring to keep your site secure, fast and keep it up to date.",
    },
  ];

  return (
    <section className="bg-white overflow-hidden px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <div className="w-[50%] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-[#00357A]">
            Process We Follow As The <span className="font-bold">Web Design</span>{" "}
            and <span className="font-bold">Web Development</span> services
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
