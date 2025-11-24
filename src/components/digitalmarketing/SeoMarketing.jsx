import { Blend, DraftingCompass, KeyboardMusic, Rss, Workflow } from 'lucide-react';
import React from 'react';
import { FaClipboardList, FaLaptopCode, FaSearch } from 'react-icons/fa';

const cardData = [
  {
    icon: <FaClipboardList size={24} />,
    title: 'Understanding Your Business',
    description:
      'We begin with a deep analysis of your business, audience, and goals to ensure all strategies align with your objectives.',
  },
  {
    icon: <FaLaptopCode size={24} />,
    title: 'Audience & Market Research',
    description:
      'We analyze your target audience and market trends to create effective, insight-driven campaigns.',
  },
  {
    icon: <DraftingCompass size={24} />,
    title: 'Crafting a Data-Driven Strategy',
    description:
      'Our specialists build strategies based on real analytics, market insights, and your brand’s requirements across SEO, answer engine optimization, local SEO services, and paid media.',
  },
  {
    icon: <Rss size={24} />,
    title: 'Content That Connects',
    description:
      'Content is central to communication. We create impactful content that informs, inspires, and converts—powered by our expertise as a content marketing agency.',
  },
    {
    icon: <FaSearch size={24} />,
    title: 'Campaign Execution & Management',
    description:
      'We transform strategy into impactful action. Whether its PPC services, Google Ads, Meta Ads, or SEO services, our execution ensures maximum ROI.',
  },
    {
    icon: <KeyboardMusic size={24} />,
    title: 'Performance Tracking',
    description:
      'Your performance is monitored using analytics tools such as Google Analytics, Search Console, Meta Business Suite, and LinkedIn Analytics to ensure real-time optimization.',
  },
    {
    icon: <Workflow size={24} />,
    title: 'Continuous Optimization',
    description:
      'Our team continuously tests, adjusts, and optimizes campaigns—improving targeting, creatives, budgets, and strategies for better results.',
  },
    {
    icon: <Blend size={24} />,
    title: 'Transparency & Collaboration',
    description:
    "We operate as your extended team—sharing updates, reports, and progress to keep you fully informed and confident.",
  },
 
];

export const SeoMarketing = () => {
  return (
    <section className="flex flex-col md:flex-row gap-10 p-10">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-[32px] md:text-[48px] text-[#335D95] leading-tight">
         Our {' '}
          <span>
          Comprehensive Approach  
          
          </span>{' '}
          to the <span className="text-[#00357A] font-semibold"> Digital Marketing Process
            </span> -<br />
          
        </h2>
        <p className="text-[18px] md:text-[20px] text-gray-700">
       We follow a structured, results-driven workflow that includes data analysis, strategy, implementation, and optimization—cementing our reputation as one of India’s leading digital marketing service providers.
        </p>
      </div>

      {/* Right Scrollable Section */}
      <div className="md:w-1/2 h-[500px] overflow-y-scroll space-y-6 pr-4">
        {cardData.map((card, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="bg-[#00357A] p-4 rounded-md text-white">
              {card.icon}
            </div>
            <div>
              <h2 className="text-[22px] font-semibold">{card.title}</h2>
              <p className="text-[18px] text-gray-700">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
