import React from "react";
import ServiceGrid from "./Innovation";
import { OfferedServices } from "../common/OfferedServices";
import Technologies from "./Technologies";
import { OurProcess } from "./OurProcess";
import { Contact } from "./ContactBanner";
import BrandSlider from "../global/BrandSlider";
import { Product } from "./Product";
import { Banner } from "./Banner";
import { KeyFacts } from "./KeyFacts";
import { Testimonial } from "../global/Testimonial";
import InstagramCarousel from "../global/Instagram";
import { IndustriesWorked } from "./IndustriesWorked";
import FaqSection from "../global/FaqSection";

const faqData = [
  {
    question: "What is digital transformation, and how does DevNexus Solutions fit in?",
    answer:
      "Digital transformation involves integrating digital technology into all aspects of a brand, altering operational processes and the overall customer experience. DevNexus Solutions assists companies in this transformation through various strategies, software, and automation solutions that drive growth and innovation.",
  },
  {
    question:
      "What type of digital solutions can DevNexus Solutions provide?",
    answer:
      'DevNexus Solutions offers a wide range of services. We develop web and mobile applications, providing cloud & DevOps assistance, UI/UX design, data analysis, and AI integration —all strategically crafted to accelerate your digital transformation.',
  },
  {
    question:
      "Why is digital transformation important for all types of businesses today?",
    answer:
      "Digital transformation is essential for all businesses today as it enhances operational efficiency, improves the customer experience, and enables companies to make data-driven decisions. DevNexus Solutions helps your brand grow and develop through sophisticated IT services.",
  },
  {
    question:
      "How do our digital solutions fit with your company's objectives?",
    answer:
      "At DevNexus Solutions, our skilled team begins by learning about your brand's specific challenges and objectives. We craft custom digital solutions specifically designed for your business's targeted results, such as enhancing workflows, connecting with customers, or expanding your online presence.",
  },
  {
    question: "How long does a digital transformation project usually last with DevNexus Solutions?",
    answer:
      "The duration of a digital transformation project varies, influenced by its scope and the complexity of the tasks involved. Nevertheless, DevNexus Solutions employs an agile approach, focusing on iterative phases to facilitate the prompt completion and continuous enhancement of digital solutions.",
  },
    {
    question: "Is DevNexus Solutions suitable for small and medium-sized businesses?",
    answer:
      "Absolutely Yes, DevNexus Solutions collaborates with various businesses. We offer tailored digital solutions and affordable pricing structured to help startups, SMEs, and larger companies.",
  },

];

const LandingComponent = () => {
  return (
    <div>
      <Banner  />
      <ServiceGrid />
      <OfferedServices />
      <Technologies />
      <OurProcess />
      <KeyFacts />
      <Contact />
      <Testimonial />
      <BrandSlider />
      <IndustriesWorked />
      <Product />
      <InstagramCarousel />
      <div className="bg-white">
  <FaqSection
        faqs={faqData}
        title="  Frequently Asked Questions (FAQs)"
        subtitle=" Answers to Your Most Common Questions Fast, Clear, and Helpful."
      />
      </div>
            
    </div>
  );
};

export default LandingComponent;
