import React from "react";
import FaqSection from "../global/FaqSection";
import Slider from "../common/Slider";
import ExecutionSection from "../common/ExecutionSection";
import StatusCard from "../common/Status";
import { ProcessWeFollow } from "../common/ProcessWeFollow";
import { Banner } from "../global/Banner";
import Brand3 from "../../../public/cdn/images/brandslogo/Jindal.svg";
import Brand4 from "../../../public/cdn/images/brandslogo/Studio.svg";
import Brand5 from "../../../public/cdn/images/brandslogo/Rotunneling.svg";
import Brand6 from "../../../public/cdn/images/brandslogo/travel.svg";
import Brand7 from "../../../public/cdn/images/brandslogo/DCI.svg";
import Brand10 from "../../../public/cdn/images/brandslogo/SRE.svg";
import Brand11 from "../../../public/cdn/images/brandslogo/KG.svg";
import Brand12 from "../../../public/cdn/images/brandslogo/nano.svg";
import Brand14 from "../../../public/cdn/images/brandslogo/vize.svg";
import WhyChooseUsMobile from "./WhyChooseMobile";

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
  // --- Your New 6 Mobile App FAQs ---
  {
    question: "Why should I develop a mobile app for my business?",
    answer:
      "A mobile app boosts customer engagement, enhances brand visibility, and increases revenue. DevNexus Solutions builds customized, high-performance apps aligned with your business goals.",
  },
  {
    question: "What benefits will I get from a mobile app?",
    answer:
      "You get direct customer access, better engagement, improved user experience, and business growth. DevNexus Solutions ensures your app becomes a powerful digital asset.",
  },
  {
    question: "Can you develop apps for both Android and iOS?",
    answer:
      "Yes. DevNexus Solutions builds native, hybrid, and cross-platform apps optimized for performance across all devices using technologies like Swift, Kotlin, Flutter, and React Native.",
  },
  {
    question: "How long does app development take?",
    answer:
      "Most mobile apps take 4–10 weeks based on features, design complexity, and integrations. DevNexus Solutions provides clear timelines and transparent development phases.",
  },
  {
    question: "Can you improve or update my existing app?",
    answer:
      "Yes. We upgrade existing apps with new features, UI/UX enhancements, bug fixes, performance optimization, and compatibility updates for the latest OS versions.",
  },
  {
    question: "Do you provide support after app launch?",
    answer:
      "Yes. DevNexus Solutions provides ongoing maintenance, updates, security checks, performance monitoring, and feature enhancements to keep your app running smoothly.",
  },

  // --- Your Existing FAQs (Cleaned & Improved) ---
  {
    question: "What types of mobile applications do you develop?",
    answer:
      "We build a wide range of mobile applications including native apps, cross-platform apps, progressive web apps, e-commerce apps, and business workflow applications—tailored to your specific needs.",
  },
  {
    question:
      "Do you provide post-launch support for mobile app development services?",
    answer:
      "Yes. We offer complete post-launch support including bug fixes, performance monitoring, feature enhancements, security updates, and OS compatibility updates to ensure your app stays stable and up to date.",
  },
  {
    question: "What technologies do you use for Android app development?",
    answer:
      "For Android development we use Kotlin and Java for native apps. For cross-platform solutions, we use Flutter and React Native to build apps that run efficiently on both Android and iOS.",
  },
  {
    question: "What programming languages do you use for iOS app development?",
    answer:
      "We use Swift—Apple’s modern language—for most iOS apps. For older or existing codebases, we also support Objective-C development and updates.",
  },
  {
    question: "Can you update or fix an existing iOS app?",
    answer:
      "Yes. Whether your app needs performance improvements, bug fixes, UI/UX updates, or compatibility adjustments for the latest iOS version, we can help improve and optimize it.",
  },
];



export const MobileDevelopment = () => {
  return (
    <div>
      <Banner
        image="/cdn/images/mobile/MobileHero.mp4"
        overlayImage
        heading="Mobile App Development Services To Boost Your Business"
        description="DevNexus Solution delivers innovative, user-centeric and mobile-friendly applications to boost growth and engagement"
      />
      <StatusCard />
      <WhyChooseUsMobile />
      <ExecutionSection />
      <ProcessWeFollow />
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
