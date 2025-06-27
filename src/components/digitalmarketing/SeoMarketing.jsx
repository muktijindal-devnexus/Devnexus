import { Blend, DraftingCompass, KeyboardMusic, Rss, Workflow } from 'lucide-react';
import React from 'react';
import { FaClipboardList, FaLaptopCode, FaSearch } from 'react-icons/fa';

const cardData = [
  {
    icon: <FaClipboardList size={24} />,
    title: 'Understanding Of Your Business',
    description:
      'At DevNexus Solutions, every business requires a comprehensive analysis. This is why our team of experts begins with a deep understanding of your business from the ground up. These foundational steps ensure that every plan is perfectly aligned with the brands goals, industry, and potential audience.',
  },
  {
    icon: <FaLaptopCode size={24} />,
    title: 'Audience & Market Research',
    description:
      'Every successful digital marketing campaign begins with understanding your audience and determining and determining where your brand fits for better visibility. This step is all about collecting insights that power effective target-market campaigns. ',
  },
  {
    icon: <DraftingCompass size={24} />,
    title: 'Crafting a Data-Driven Strategy',
    description:
      'Our team of specialists not only relies on market estimates but also develops data-driven digital marketing strategies tailored to your business objectives. All of our decisions are informed by insights developed from your analytics ecosystem and our in-depth understanding of your audience.',
  },
  {
    icon: <Rss size={24} />,
    title: 'Content That Connects',
    description:
      'Content is the bridge between your brand and your audience. At DevNexus Solutions, we believe in creating content that not only informs but also inspires, engages, and drives action.',
  },
    {
    icon: <FaSearch size={24} />,
    title: 'Campaign Execution & Management',
    description:
      'At DevNexus Solutions, we are transforming strategy into action with seamless execution and proactive management. Our goal is straightforward: to ensure the digital marketing campaign delivers maximum impact within time and budget constraints.',
  },
    {
    icon: <KeyboardMusic size={24} />,
    title: 'Performance Tracking',
    description:
      'At DevNexus Solutions, performance tracking is the backbone of a successful digital marketing strategy. We begin with clear goals and measurable KPIs that align with your business objectives. Using tools such as Google Analytics, Google Search Console, Meta Business Suite, and LinkedIn Analytics, we monitor performance across all channels in real-time, ensuring every campaign stays on track.',
  },
    {
    icon: <Workflow size={24} />,
    title: 'Continuous Optimization',
    description:
      'Digital Marketing is the process of learning and improving continuously. Thats why optimization is the core of everything we do; our team keeps a close eye on the results after campaigns have been published. From testing new creative ideas, adjusting targeting parameters, and refining strategy to implement A/B testing, our teams approach is proactive and agile. By staying ahead, of mensure thatensure that and changes in consumer behavoand competition your campaigns remain relevant and competitive.',
  },
    {
    icon: <Blend size={24} />,
    title: 'Transparency & Collaboration',
    description:
      'We follow transparent, collaborative, and open communication with our clients. We see ourselves as an extension of your team, working closely with you every step of the way, from clear reporting and regular process updates to honest feedback and open discussion. Our digital marketing team makes sure that you are always informed, involved, and confident in the direction of your digital marketing efforts. ',
  },
 
];

export const SeoMarketing = () => {
  return (
    <section className="flex flex-col md:flex-row gap-10 p-10">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-[32px] md:text-[48px] text-[#335D95] leading-tight">
         Our {' '}
          <span className="text-[#00357A] font-semibold">
          Comprehensive Approach  
          
          </span>{' '}
          to the Digital Marketing Process -<br />
          
        </h2>
        <p className="text-[18px] md:text-[20px] text-gray-700">
          Access end-to-end SEO services through our structured and agile methodology.
          We follow a proven, results-driven approach that encompasses everything from
          requirement gathering and strategy design to final deployment. This
          commitment to excellence has established us as one of India’s leading SEO
          marketing companies with a strong track record of success.
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
