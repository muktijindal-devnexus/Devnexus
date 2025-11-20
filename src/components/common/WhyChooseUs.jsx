import { MonitorSmartphone, Braces, LayoutTemplate, BanknoteArrowUp } from "lucide-react";
import { FaProjectDiagram } from "react-icons/fa";

const features = [
  {
    icon: MonitorSmartphone,
    title: "Creative & Responsive Design",
    description:
      "We create eye-catching, user-friendly designs that adapt seamlessly across all devices, ensuring an exceptional user experience. As a responsive web design company, our focus is on delivering high-quality UI/UX that performs flawlessly on desktop, tablet, and mobile.",
  },
  {
    icon: Braces,
    title: "Clean & Scalable Code",
    description:
      "At DevNexus Solutions, our team writes efficient, well-structured code that ensures high performance and seamless scalability as your business grows. Whether it's frontend development, backend development, or full-stack solutions, our coding standards ensure long-term success.",
  },
  {
    icon: LayoutTemplate,
    title: "Latest Technology",
    description:
      "We leverage the latest tools, frameworks, and industry best practices to build high-performance websites tailored to your brand identity and business objectives. As an AI Overview web development company, we integrate modern technologies to help brands stay future-ready.",
  },
  {
    icon: FaProjectDiagram,
    title: "Client-Centric Approach",
    description:
      "At DevNexus, your vision drives our strategy. We collaborate closely with you to build custom web solutions that resonate with your audience and support your long-term goals.",
  },
  {
    icon: BanknoteArrowUp ,
    title: "Post-Launch Support & Growth",
    description:
      "Our partnership continues even after launch. With ongoing support, analytics, optimization, and maintenance, we ensure your digital presence continues to grow and perform.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-light mb-4">
          {" "}
          <span className="font-semibold text-blue-900">Choose DevNexus. </span>
          <span className="font-semibold text-blue-900">Choose Excellence.</span>
        </h2>
<div className="w-[80%] flex justify-center items-center">

        <p className="text-center text-sm sm:text-lg md:text-lg font-light mb-12">
           DevNexus Solutions delivers modern, scalable, and high-performing digital solutions tailored for businesses worldwide. Whether you need custom web design services, responsive web design, or SEO-friendly website development, we offer comprehensive global web development solutions designed to elevate your brand.
        </p>
</div>
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

export default WhyChooseUs;
