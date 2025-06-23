import React from 'react'
import { Banner } from '../global/Banner'
import StatusCard from '../common/Status'
import AIServiceSection from './AiServices'
import FaqSection from '../global/FaqSection'
import WhyChooseSection from './WhyChooseSection'
import BusinessGrowthSlider from './BusinessGrowthSlider'


const faqData = [
  {
    question: "How can AI chatbot development services benefit my business?",
    answer:
      "AI chatbots improve customer engagement, provide 24/7 services, help reduce operational costs, automate tedious tasks, and deliver a personalised experience, which increases customer satisfaction and loyalty. ",
  },
  {
    question:
      "What platforms can AI chatbots be deployed on?",
    answer:
      'AI chatbots can be integrated across various platforms, including websites, mobile apps, social media channels, and messaging apps, ensuring seamless interaction wherever your potential audience is present.',
  },
  {
    question:
      "How do you ensure the Artificial Intelligence Development Services fit my specific business needs?",
    answer:
      "Our team of AI software development services experts starts a thorough consultation to understand your goals and problems, then start begins working on designing customised AI models and workflows that align with your unique requirements.",
  },
  {
    question:
      "What is the typical timeline for AI development projects?",
    answer:
      "AI development timelines depend on complexity and scope; timelines may range from a couple of weeks for a small project to several months for a large-scale project.",
  },
  {
    question: "How do you handle data privacy and security in AI projects?",
    answer:
      "Our team of experts adheres to best practices and compliance standards to safeguard sensitive data,, ensuring secure data integrity throughout our AI development services.",
  },

];


export const AiTech = () => {
  return (
    <div>
            <Banner
                     image='/cdn/images/ai/ai.mp4'
                     overlayImage
                     heading=" Transform Artificial Intelligence Development Services"
                     description="At DevNexus Solutions, we accelerate business through strategic AI software development services."
                   />
                   <StatusCard />
                   <AIServiceSection />
                   <WhyChooseSection />
                   <BusinessGrowthSlider />
                   <FaqSection
        faqs={faqData}
        title="  Frequently Asked Questions (FAQs)"
        subtitle=" Answers to Your Most Common Questions Fast, Clear, and Helpful."
      />
    </div>
  )
}
