import React from "react";
import { Banner } from "../global/Banner";
import StatusCard from "../common/Status";
import UIDesignTechnologies from "./Core";
import { MainDevnexus } from "./MainDevnexus";
import DesignProcess from "./DesignProcess";
import Slider from "../common/Slider";
import { WhyUIUX } from "./WhyUIUX";
import FaqSection from "../global/FaqSection";
import Brand3 from "../../../public/cdn/images/brandslogo/Jindal.svg";
import Brand4 from "../../../public/cdn/images/brandslogo/Studio.svg";
import Brand5 from "../../../public/cdn/images/brandslogo/Rotunneling.svg";
import Brand6 from "../../../public/cdn/images/brandslogo/travel.svg";
import Brand7 from "../../../public/cdn/images/brandslogo/DCI.svg";
import Brand10 from "../../../public/cdn/images/brandslogo/SRE.svg";
import Brand11 from "../../../public/cdn/images/brandslogo/KG.svg";
import Brand12 from "../../../public/cdn/images/brandslogo/nano.svg";
// import Brand13 from '../../../public/images/brandslogo/cafe.svg';
import Brand14 from "../../../public/cdn/images/brandslogo/vize.svg";

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

const faqData = [
  {
    question: "Why is a UI/UX designer important for your business?",
    answer:
      "A UI/UX designer plays an important role in shaping how users feel and observe your website, app or other digital products. They ensure that every interface is not only visually engaging but also intuitive, accessible, and user-centric.",
  },
  {
    question: "Will you be involved in the UI/UX design process?",
    answer:
      "At every step of the design process, your insights and feedbacks will play a vital role. From wireframing to prototyping, we are working collaboratively with you to ensure that work quality of the end product is not compromised and product aligns with your brand goals and user needs. ",
  },
  {
    question: "How is your UI/UX design process structured?",
    answer:
    "At DevNexus Solutions, our UI/UX design process is user-centric and crafted to deliver a seamless digital experience. We begin with in-depth discovery and research to understand your brand vision and target audience.  We define user personas and map their journeys to identify pain points and opportunities. Next, we move into wireframing to establish layout and flow, followed by iterative prototyping to refine interaction and design logic. Once the user flow is finalized, we craft visually compelling, high-fidelity designs that align with your brand identity. Testing is conducted at every phase to ensure usability, performance, and continuous refinement."
  },
  {
    question: "Do you redesign existing websites/apps?",
    answer:
      "Yes, we are offering UI/UX redesign services and on the basis of feedback and analytics to improve usability. Whether your current design looks outdated or does not convert well, our team of experts will start analysing its performance, user feedback and problem points.",
  },
];

export const UIUXComponent = () => {
  return (
    <div>
      <Banner
        image="/cdn/images/UUIX/UIUXHero.mp4"
        overlayImage
        heading="Upgrade Your Brand with Exceptional UI/UX Design and Development Services"
        description="At DevNexus Solutions, thoughtful design and user-based strategies enhances the user experience.Our UI/UX services are thoughtfully crafted to transform digital products into immersive, and visually compelling experiences that truly resonate with your audience."
      />
      <StatusCard />
      <UIDesignTechnologies />
      <MainDevnexus />
      <DesignProcess />
      
      <WhyUIUX />
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
