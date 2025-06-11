import { FaProjectDiagram } from "react-icons/fa";

const features = [
  {
    title: "Creative & Responsive Design",
    description:
      "We are creating eye catching, user friendly designs which adapt seamlessly across all devices to make sure an exceptional user experience.",
  },
  {
    title: "Clean & Scalable Code",
    description:
      "At DevNexus Solutions our team of experts write efficient, well structured code which ensures high performance and easily scalable as your business grows.",
  },
  {
    title: "Cutting-Edge Technology",
    description:
      " DevNexus Solutions use the latest tools and framework to make sure the future ready solutions for your brand. ",
  },
  {
    title: "Client-Centric Approach",
    description:
      " We are prioritising your business goals and vision delivering tailored web solutions that truly align with your brand and audience requirement. ",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-light mb-12">
          What makes{" "}
          <span className="font-semibold text-blue-900">DevNexus Solutions</span> better for
          for <span className="font-semibold text-blue-900">Web Design and  Web Development</span> services?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.slice(0, 3).map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-md shadow-sm p-6 flex flex-col gap-3"
            >
              <FaProjectDiagram className="text-2xl text-blue-900" />
              <h3 className="text-base font-semibold text-blue-900">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <div className="bg-white border rounded-md shadow-sm p-6 flex flex-col gap-3">
            <FaProjectDiagram className="text-2xl text-blue-900" />
            <h3 className="text-base font-semibold text-blue-900">{features[3].title}</h3>
            <p className="text-sm text-gray-600">{features[3].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
