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
    question: "Why should I use web development services?",
    answer:
      "A professional website improves credibility, attracts customers, and strengthens online presence. DevNexus Solutions builds high-performing websites designed to grow your business.",
  },
  {
    question: "What benefits will I get from web development?",
    answer:
      "You receive responsive, secure, fast-loading websites with better user experience and higher conversion rates. DevNexus Solutions ensures every site is built to maximize performance.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most websites take 2–6 weeks depending on complexity, content, and features. DevNexus Solutions provides transparent timelines for every project stage.",
  },
  {
    question: "Do you provide custom website designs?",
    answer:
      "Yes. DevNexus Solutions offers fully custom or template-based designs tailored to your brand identity, target audience, and business goals.",
  },
  {
    question: "Will my website be mobile-friendly and SEO-optimized?",
    answer:
      "Absolutely. Every website we build is responsive, fast, SEO-ready, and follows modern UI/UX standards to help you rank higher on search engines.",
  },
  {
    question: "Do you provide maintenance after the website is live?",
    answer:
      "Yes. DevNexus Solutions offers ongoing maintenance, security monitoring, backups, updates, and support to keep your website running smoothly.",
  },

  // --- Your Existing Web Dev FAQs (Cleaned & Improved) ---
  {
    question:
      "What domains of business does DevNexus Solutions provide digital solutions to?",
    answer:
      "We provide web design and development solutions for real estate, construction, food and beverages, healthcare, education, public sector, travel, banking, fintech, services, and more—any business that needs a strong digital presence.",
  },
  {
    question: "What tech stacks do you offer for your web development services?",
    answer:
      "Our team works with modern and flexible technologies including MERN stack (Node, React), Next.js, TypeScript, React Native, Flutter, WordPress/PHP, Python, HTML5/CSS3, Tailwind CSS, Modular CSS, Redux, and more.",
  },
  {
    question:
      "How do you ensure that your web development matches the latest market demands?",
    answer:
      "We build websites following modern Web 2.0 standards with W3C compliance, SEO-friendly architecture, advanced UI/UX design, cross-browser compatibility, responsive layouts, strong QA testing, authentication, performance optimization, and scalability best practices.",
  },
  {
    question:
      "What platforms do you use for communication and project management?",
    answer:
      "We communicate via Slack, WhatsApp, Email, Google Meet, Zoom, and phone. For project management, we use Jira or any tool preferred by the client.",
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
        description="As a leading web design services provider and a trusted website development company in India."
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
