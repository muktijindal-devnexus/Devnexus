import { Banner } from "@/components/global/Banner";
import StatusCard from "@/components/common/Status";
import WhyChooseUs from "@/components/common/WhyChooseUs";
import ExecutionSection from "@/components/common/ExecutionSection";
import React from "react";
import { ProcessWeFollow } from "../common/ProcessWeFollow";
import FaqSection from "../global/FaqSection";
import Slider from "../common/Slider";

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
import ProcessSteps from "./ProcessSteps";
import { FullStackServices } from "./fullstackservices";

const faqData = [
  {
    question:
      "What domains of business does DevNexus Solutions provide digital solutions to?",
    answer:
      'We offer web design and development services to businesses of all types that need a digital presence, including real estate, construction, services, food and beverages, public sector, education, healthcare, travel, banking, fintech, and more.',
  },
  {
    question:
      "What tech stacks do you offer for your web development services?",
    answer:
      "The team is technology-agnostic and can adapt to any modern web development framework, including the MERN stack (Node, React), Nextjs, Typescript, React Native, Flutter, WordPress (and PHP), Python, HTML5/CSS3, Tailwind CSS, Modular CSS, Redux and more.",
  },
  {
    question:
      "How do you ensure that the developments you make are aligned with latest's market demands?",
    answer:
      "We are experts at designing and developing websites according to the latest Web 2.0 Standards with W3C compliance for SEO friendliness, high quality UI/UX design, cross-browser compatibility, responsive design, QA and testing, authentication and authorization, performance, capabilities, and scalability to enhance your business.",
  },
  {
    question: "What platforms do you use for communication and project management?",
    answer:
      "We use Slack, WhatsApp, Email, Phone, Google Meet, Zoom, and other platforms to communicate with clients and internally as required. For project management, we use modern platforms such as Jira, or any platform our clients prefer.",
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


export const Fullstack = () => {
  return (
    <div>
      <Banner
        image="/cdn/images/fullstack/fullstackHero.mp4"
        overlayImage
        heading="DevNexus Solutions a Leader in Web Design & Development` "
        description="As a leading Web design services provider and a trusted website development company in global countries."
      />
      <StatusCard />
      <WhyChooseUs />
      {/* <ExecutionSection /> */}
      <FullStackServices />
        
    <ProcessSteps />
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
