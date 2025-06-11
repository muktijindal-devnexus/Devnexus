import React from 'react';
import { FaBullseye, FaHandshake, FaSearchPlus, FaChartLine } from 'react-icons/fa';

const features = [
  {
    icon: <FaBullseye size={28} />,
    title: 'ROI-Driven Strategies',
    description:
      'Every campaign created by our team is focused on results and the client’s requirements. Whether your brand needs leads, conversion, or boosting organic brand visibility, our team of experts will give you a tailored-made solution.',
    highlight: true,
  },
  {
    icon: <FaHandshake size={28} />,
    title: 'Transparent Work Process',
    description:
      'Our team of experts always delivers clear, easy-to-understand reports and analyses that clearly show the work progress and other metrics, which represent how your brand is performing.',
  },
  {
    icon: <FaSearchPlus size={28} />,
    title: 'Proven Digital Marketing Techniques',
    description:
      'Our Digital Marketing strategies are designed to improve Google SERP, drive organic traffic, and aid in your long-term success. We stay up to date with the latest tools, updates, and algorithms.',
  },
  {
    icon: <FaChartLine size={28} />,
    title: 'Performance-Based Work Report',
    description:
      'Our skilled team of digital marketers, content creators and developers works closely to make the process seamless. By combining strategies and execution, we deliver campaigns that drive results.',
  },
];

export const DevNexusMarketingBenefits = () => {
  return (
    <section className="px-6 md:px-16 py-12 space-y-10">
      <h2 className="text-2xl md:text-3xl font-light text-center text-[#335D95]">
        What Makes <span className="font-bold text-[#00357A]">DevNexus Solutions</span> Best For{' '}
        <br />
        <span className="font-bold text-[#00357A]">Digital Marketing Services?</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`group flex gap-4 p-6 rounded-lg shadow-sm transition-all duration-300 cursor-pointer
              ${
                feature.highlight
                  ? 'text-[#00357A] hover:bg-[#335D95] hover:text-white'
                  : 'bg-white text-gray-800 border border-gray-200 hover:bg-[#335D95] hover:text-white'
              }`}
          >
            <div
              className={`text-2xl transition-colors duration-300 ${
                feature.highlight
                  ? 'text-[#00357A] group-hover:text-white'
                  : 'text-[#00357A] group-hover:text-white'
              }`}
            >
              {feature.icon}
            </div>
            <div>
              <h3
                className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  feature.highlight
                    ? 'text-[#00357A] group-hover:text-white'
                    : 'text-[#00357A] group-hover:text-white'
                }`}
              >
                {feature.title}
              </h3>
              <p className="text-sm transition-colors duration-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
