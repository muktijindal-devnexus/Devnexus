import { Banner } from "@/components/global/Banner";
import StatusCard from "@/components/common/Status";
import WhyChooseUs from "@/components/common/WhyChooseUs";
import ExecutionSection from "@/components/common/ExecutionSection";
import React from "react";
import { ProcessWeFollow } from "../common/ProcessWeFollow";
import FaqSection from "../global/FaqSection";
import Slider from "../common/Slider";

import Brand3 from '../../../public/images/brandslogo/Jindal.svg';
import Brand4 from '../../../public/images/brandslogo/Studio.svg';
import Brand5 from '../../../public/images/brandslogo/Rotunneling.svg';
import Brand6 from '../../../public/images/brandslogo/travel.svg';
import Brand7 from '../../../public/images/brandslogo/DCI.svg';
import Brand10 from '../../../public/images/brandslogo/SRE.svg';
import Brand11 from '../../../public/images/brandslogo/KG.svg';
import Brand12 from '../../../public/images/brandslogo/nano.svg';
// import Brand13 from '../../../public/images/brandslogo/cafe.svg';
import Brand14 from '../../../public/images/brandslogo/vize.svg';
import { DigitalMarketingServices } from "../digitalmarketing/DigitalMarketingServices ";

const faqData = [
  {
    question: "What domains of business does DevNexus cater to?",
    answer:
      "We offer web design and development services to any business that needs a digital presence, including Real Estate, Construction, Services, Food & Beverages, Public sector, Education, Healthcare & Medicine, Travel, Banking & Fintech, and more.",
  },
  {
    question:
      "What tech stacks do you offer your web development services?",
    answer:
      'The team is technology agnostic and can adapt to any modern day web development frameworks including MERN stack (Node, React), Wordpress (& PHP), Python, HTML5/CSS3, jQuery and more. ',
  },
  {
    question:
      "How do you ensure that the developments you make are up to date with today's market demands?",
    answer:
      "We are expert at designing & developing of websites as per latest Web2.0 Standards with W3C compliance for SEO friendliness, high UI/UX interface, cross-browser compatibility, Tableless HTML5/ CSS3, Responsive designing, QA and testing, fresh look & feel and visual appeal etc to enhance your business. ",
  },
  {
    question:
      "What tools do you use for communication and project management?",
    answer:
      "We use Slack Whatsapp Email Phone Discord Google Meet Zoom and other tools to communicate with the client and even internally as required For project management we use modern day tools such as Trello Monday Jira and any tool that the client may prefer.",
  },
  {
    question: "I wish to market my business. How should I get started?",
    answer:
      "Lets connect. Based on your business domain, marketing preferences, target achievement and in hand budget, we will come up with a tailor-made plan. Depending on various cases, some businesses may prefer comprehensive social media strategies, or web UX changes, others may call for a more formal link building, or a reputation management. E-commerce also prefers Paid Ads. Depending on how and how much you would like to enroll will ensure your strategy for getting started with the services.",
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

const services = [
  {
    title: 'Search Engine Optimization (SEO)',
    description:'We provide comprehensive Search Engine Optimization services, our tailor-made strategies are perfect for your brand. It contains a range of services like keyword research, on-page optimization, technical SEO,etc. Does not matter if you are a start-up or a business, we have the solutions for all your business needs.',
    points: [
      'Keyword Research & Strategy',
      'Link Building & Authority Growth',
      'On-Page & Technical SEO',
      'Local & Enterprise SEO',
    ],
  },
    {
    title: 'PPC',
    description: 'DevNexus Solutions is providing expert PPC services designed to maximize your online advertising ROI.  Our PPC experts focus on strategic keyword targeting, compelling ad creation, and advanced campaign management skills.  We are helping the business to reach its desired audience. Whether you want to boost website traffic, generate leads, or increase ROI, DevNexus Solutions is making sure that your PPC campaigns are cost-effective.',
    points: [
  
    ],
  },
  {
    title: 'Social Media Marketing (SMM)',
    description: 'DexNexus Solutions delivers expert Social Media Marketing services that help businesses build a strong online presence and engage effectively with their potential audience. From strategy development and campaign management, tracking insights for performance. We have a tailor-made system for all the brand types.',
    points: [
      'Content Creation & Scheduling',
      'Audience Engagement',
      'Performance Analytics',
    ],
  },
  {
    title: 'Meta Ads',
    description:
      'Maximize your ROI with Meta Ads. We design, manage, and optimize ad campaigns across Meta’s network for precise targeting and better conversion rates.',
    points: ['Ad Campaign Setup', 'Audience Targeting', 'A/B Testing'],
  },
  {
    title: 'Email Marketing',
    description:
      'We help you craft effective email campaigns that nurture leads and retain customers with engaging content and automated flows.',
    points: ['Newsletter Design', 'Automation Workflows', 'Performance Tracking'],
  },
  {
    title: 'Content Marketing',
    description:
      'We deliver high-quality, SEO-optimized content to boost your visibility and establish authority in your niche.',
    points: ['Blog Writing', 'SEO Copywriting', 'Content Strategy'],
  },
  {
    title: 'Conversion Rate Optimization (CRO)',
    description:
      'We analyze user behavior and optimize your website layout, CTAs, and funnel to convert more visitors into customers.',
    points: ['A/B Testing', 'Heatmaps & Analytics', 'Landing Page Optimization'],
  },
];

export const Fullstack = () => {
  return (
    <div>
      <Banner
        image="/images/fullstack/fullstackHero.mp4"
        overlayImage
        heading="Web Design and Development Services That Clicks, Convert and Captivate "
        description="Creating seamless, high-performing websites that engage users and drive results"
      />
      <StatusCard />
      <WhyChooseUs />
      {/* <ExecutionSection /> */}
       <DigitalMarketingServices />
         <Slider
      title="Driving Growth To The Brands."
      subtitle="We deliver Global IT Services to brands of all sizes"
      brands={brandLogos}
    />
      <ProcessWeFollow />
      <FaqSection
        faqs={faqData}
        title="  Frequently Asked Questions (FAQs)"
        subtitle=" Answers to Your Most Common Questions Fast, Clear, and Helpful."
      />
    </div>
  );
};
