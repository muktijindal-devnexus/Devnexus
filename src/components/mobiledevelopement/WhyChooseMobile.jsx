import { MonitorSmartphone, Braces, LayoutTemplate, BanknoteArrowUp } from "lucide-react";
import { FaProjectDiagram } from "react-icons/fa";

const features = [
  {
    icon: MonitorSmartphone,
    title: "End-to-End Expertise",
    description:
      "Our team of experts delivers end-to-end services from strategic planning and UI/UX design to development, testing, and deployment. We handle the whole mobile app life cycle to ensure a seamless experience.",
  },
  {
    icon: Braces,
    title: "Native Development",
    description:
      "It does not matter if you need a single codebase for Android and iOS apps or a separate codebase for each; we have tailored our strategy to meet those requirements.",
  },
  {
    icon: LayoutTemplate,
    title: "Client-Centric Approach",
    description:
      "We prioritize your vision and maintain transparent communication, collaboration, and transparency from day one until the app launches or beyond.",
  },
  {
    icon: FaProjectDiagram,
    title: "Agile and Scalability",
    description:
      "Our agile methodology ensures faster delivery, flexibility to adapt to changes, and the ability to scale your app according to your business requirements.",
  },
  {
    icon: BanknoteArrowUp ,
    title: "From Ideas to Execution",
    description:
      "Getting concepts from our client, we understand the requirement to build a robust mobile app for your business goals.",
  },
];

const WhyChooseUsMobile = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-center text-xl sm:text-2xl md:text-3xl font-light mb-12">
          What makes{" "}
          <span className="font-semibold text-blue-900">DevNexus Solutions</span> your go to{" "} <br/>
          <span className="font-semibold text-blue-900">Mobile App Development</span> Service Providers?
        </h4>

        <div className="grid md:grid-cols-3 gap-6">
          {features.slice(0, 3).map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white border rounded-md shadow-sm p-6 flex flex-col gap-3 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Icon className="text-2xl text-blue-900" />
                <h3 className="text-base font-semibold text-blue-900">{feature.title}</h3>
                <p className="text-normal text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex gap-6 flex-col sm:flex-row">
          {[3, 4].map((i) => {
            const Icon = features[i].icon;
            return (
              <div
                key={i}
                className="bg-white border rounded-md shadow-sm p-6 flex flex-col gap-3 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Icon className="text-2xl text-blue-900" />
                <h3 className="text-base font-semibold text-blue-900">{features[i].title}</h3>
                <p className="text-normal text-gray-600">{features[i].description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsMobile;
