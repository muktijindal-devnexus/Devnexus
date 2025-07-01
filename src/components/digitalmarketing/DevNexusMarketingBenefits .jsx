import React from 'react';
import { FaBullseye, FaHandshake, FaSearchPlus, FaChartLine } from 'react-icons/fa';

const features = [
  {
    icon: <FaBullseye size={28} />,
    title: 'ROI-Driven Strategies',
    description:
      'Every campaign created by our top-tier professionals is focused on results and the clients requirements. Whether your brand require leads, conversion, or organic brand visibility, our team of experts will provide a tailored-made solution.',
    highlight: true,
  },
  {
    icon: <FaHandshake size={28} />,
    title: 'Proven Digital Marketing Techniques',
    description:
      'Our experienced specialists consistently delivers concise, easy-to-interpret reports and insights that transparently showcase project progress and key performance metrics—giving you a clear view of your brand’s growth and impact.',
  },
  {
    icon: <FaSearchPlus size={28} />,
    title: 'Transparent Work Process',
    description:
      'Transparency is woven into every stage of our workflow. From initial discovery to final delivery, we maintain open communication, share real-time progress updates, and provide clear documentation. Our clients stay informed through every milestone—ensuring complete visibility, trust, and confidence in the results we deliver.',
  },
  {
    icon: <FaChartLine size={28} />,
    title: 'Performance-Based Work Report',
    description:
      'Our skilled team of digital marketers, content creators and developers works closely to make the process seamless. By combining effective strategies with creative execution, we deliver campaigns that yield tangible results.',
  },
];

export const DevNexusMarketingBenefits = () => {
  return (
    <section className="px-6 md:px-16 py-12 space-y-10">
      <h2 className="text-2xl md:text-3xl font-light text-center text-[#335D95]">
        What Makes <span className="font-bold text-[#00357A]">DevNexus Solutions</span>  the No. 1 choice for {' '}
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
              <p className="text-sm transition-colors duration-300 text-black group-hover:text-white">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
