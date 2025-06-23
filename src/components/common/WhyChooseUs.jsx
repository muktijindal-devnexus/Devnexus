import { MonitorSmartphone, Braces, LayoutTemplate, BanknoteArrowUp } from "lucide-react";
import { FaProjectDiagram } from "react-icons/fa";

const features = [
  {
    icon: MonitorSmartphone,
    title: "Creative & Responsive Design",
    description:
      "We create eye-catching, user-friendly designs that adapt seamlessly across all devices, ensuring an exceptional user experience.",
  },
  {
    icon: Braces,
    title: "Clean & Scalable Code",
    description:
      " At DevNexus Solutions, our team of experts writes efficient, well-structured code that ensures high performance and is easily scalable as your business grows.",
  },
  {
    icon: LayoutTemplate,
    title: "Cutting-Edge Technology",
    description:
      "We prioritize your business goals and vision, delivering tailored web solutions that truly align with your brand and audience requirements. ",
  },
  {
    icon: FaProjectDiagram,
    title: "Client-Centric Approach",
    description:
      "We are prioritising your business goals and vision delivering tailored web solutions that truly align with your brand and audience requirement.",
  },
  {
    icon: BanknoteArrowUp ,
    title: "Post-Launch Support & Growth",
    description:
      "We don't stop at launch. Our ongoing maintenance, analytics, and optimization services help your digital presence grow and evolve.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-light mb-12">
          What makes{" "}
          <span className="font-semibold text-blue-900">DevNexus Solutions</span> Better for
          <span className="font-semibold text-blue-900"> Web Design and Web Development</span> Services?
        </h2>

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
                <p className="text-sm text-gray-600">{feature.description}</p>
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
                <p className="text-sm text-gray-600">{features[i].description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
