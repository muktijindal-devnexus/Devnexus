import React from 'react';
import { FaBullseye, FaHandshake, FaSearchPlus, FaChartLine } from 'react-icons/fa';

const features = [
  {
    icon: <FaBullseye size={28} />,
    title: 'ROI-Driven Strategies',
    description:
      'Every strategy developed by our top-tier experts is focused on achieving results and meeting client goals. Whether your brand needs lead generation, conversions, or organic visibility, we deliver targeted solutions through our SEO services, PPC services, and digital advertising company expertise.',
    highlight: true,
  },
  {
    icon: <FaHandshake size={28} />,
    title: 'ISI-Proven Digital Marketing Techniques',
    description:
      'Our specialists deliver concise, easy-to-interpret reports that showcase your growth across Search Engine Optimization, Geo-Generative Engine Optimization, Answer Engine Optimization, and targeted campaigns. We ensure you have a clear, transparent view of performance and progress.',
  },
  {
    icon: <FaSearchPlus size={28} />,
    title: 'Transparent Work Process',
    description:
      'Transparency is embedded in every step. From discovery to campaign delivery, we maintain open communication, real-time progress reporting, and clear documentation—ensuring complete trust and confidence.',
  },
  {
    icon: <FaChartLine size={28} />,
    title: 'Performance-Based Work Report',
    description:
      'Our digital marketers, content creators, and developers work together to build campaigns that deliver measurable results. Whether you require Google Ads services, Meta Ads services, or full-funnel marketing, we ensure your goals are achieved.',
  },
];

export const DevNexusMarketingBenefits = () => {
  return (
    <section className="px-6 md:px-16 py-12 space-y-10">
      <p className="text-2xl md:text-3xl font-light text-center text-[#335D95]">
        What Makes <span className="font-bold text-[#00357A]">DevNexus Solutions</span>  the No. 1 choice for {' '}
        <br />
        <span className="font-bold text-[#00357A]">Digital Marketing Services?</span>
      </p>

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
