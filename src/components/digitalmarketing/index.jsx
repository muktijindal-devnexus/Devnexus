import React from "react";
import { SeoMarketing } from "./SeoMarketing";
import Slider from "../common/Slider";
import { DevNexusMarketingBenefits } from "./DevNexusMarketingBenefits ";

import Brand3 from '../../../public/cdn/images/brandslogo/Jindal.svg';
import Brand4 from '../../../public/cdn/images/brandslogo/Studio.svg';
import Brand5 from '../../../public/cdn/images/brandslogo/Rotunneling.svg';
import Brand6 from '../../../public/cdn/images/brandslogo/travel.svg';
import Brand7 from '../../../public/cdn/images/brandslogo/DCI.svg';
import Brand10 from '../../../public/cdn/images/brandslogo/SRE.svg';
import Brand11 from '../../../public/cdn/images/brandslogo/KG.svg';
import Brand12 from '../../../public/cdn/images/brandslogo/nano.svg';
// import Brand13 from '../../../public/images/brandslogo/cafe.svg';
import Brand14 from '../../../public/cdn/images/brandslogo/vize.svg';

import StatusCard from "../common/Status";
import FaqSection from "../global/FaqSection";
import { DigitalMarketingServices } from "./DigitalMarketingServices ";

const faqData  = [
  {
    question: 'Why Businesses Need Digital Marketing Services?',
    answer:
    "In today’s highly competitive, digitally driven landscape, every business aims to expand its reach and dominate its market niche. Digital marketing plays a pivotal role in achieving this by enhancing online visibility, generating high-quality leads, and delivering measurable, cost-effective results. With most consumers now engaging online, digital strategies also enable businesses to stay agile, quickly adapting to emerging market trends and consumer behaviors.",
  },
  {
    question: ' How Much Does It Cost to Hire a Digital Marketing Agency Near Me?',
    answer:
    "The cost of hiring a digital marketing agency can vary significantly based on your specific business goals, the scope of services required, and the level of expertise you’re seeking. Factors such as campaign complexity, target audience, duration, and platform choice all contribute to the overall investment, making it essential to align the budget with measurable outcomes and long-term strategy.",
  },
  {
    question:'. Why DevNexus Solutions Leads in Digital Marketing?',
    answer:
    "DevNexus Solutions distinguishes itself as a top-tier digital marketing company through its results-driven approach and customized strategies tailored to each client’s unique goals. Backed by deep industry expertise and tools, we deliver impactful solutions that drive measurable outcomes—whether it's lead generation, increased ROI, or brand visibility. Our commitment to transparency is reflected in consistent, clear reporting and open communication throughout every stage of the marketing journey."
  },
  {
    question: 'Which Digital Marketing Channels Deliver the Best Results for B2B?',
    answer:
      'For B2B companies, the most effective digital marketing strategies are those that support longer sales cycles and nurture high-value leads. Key result-oriented channels include LinkedIn marketing, search engine optimization (SEO), pay-per-click (PPC) advertising, Meta (Facebook) ads, email marketing, content creation, and video marketing—each playing a vital role in building trust, driving engagement, and accelerating conversions in the B2B space.',
  },
  {
    question: 'Ready to Market Your Business? Let’s Get Started.?',
    answer:
    "At DevNexus Solutions, we begin by understanding the core of your business—your industry, marketing objectives, target milestones, and available budget. From there, we craft a custom marketing roadmap aligned with your unique goals.Depending on your business model, your ideal strategy may include:– Comprehensive social media campaigns to grow brand presence– Website UX enhancements to boost conversions– Link building and reputation management for long-term SEO gains – Paid advertising strategies (especially for e-commerce) to accelerate visibility and results Whether you're looking to start small or go all-in, we’ll tailor a marketing solution that fits your ambition and scales with your growth",
  },
    {
    question: 'How Much Does It Cost to Hire a Digital Marketing Agency?',
    answer:  'The cost of hiring a digital marketing agency can vary significantly based on your business goals, target markets, and the range of services required. At DevNexus Solutions, our monthly service plans start at $400 and can go up to $5,000, excluding ad spend. For clients seeking greater value and consistency, we also offer discounted packages on 3 to 6-month commitments, ensuring strategic continuity and cost-effectiveness.'
    },
];


const brandLogos = [
  Brand3.src,
  Brand4.src,
  Brand5.src,
  Brand6.src,
  Brand7.src,
  Brand10.src,
  Brand11.src,
  Brand12.src,
  // Brand13.src,
  Brand14.src,
];

export const DigitalMarketing = () => {
  return (
    <div>
      <StatusCard />
       <DevNexusMarketingBenefits />
       <DigitalMarketingServices />
      <SeoMarketing />
       <Slider
          title="Driving Brand Excellence"
          subtitle="We deliver Global IT Services to businesses ranging from startups to global enterprises"
          brands={brandLogos}
        />  
     

         <FaqSection
      faqs={faqData}
      title="  Frequently Asked Questions (FAQs)"
      subtitle=" Answers to Your Most Common Questions Fast, Clear, and Helpful."
    />
    </div>
  );
};
