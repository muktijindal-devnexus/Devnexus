"use client";

import { motion } from "framer-motion";

export default function AIServiceSection() {
  const services = [
    {
      title: "Custom AI Solutions Development",
      description:
        "At DevNexus, we specialise in Custom AI solution development to help your business unlock its full growth potential. From tailored machine learning models to AIAI automation systems, we are creating data-driven solutions based on AI, which areare designed according to industry needs.",
    },
    {
      title: "Machine Learning Solutions",
      description:
        "At DevNexus Solutions, we are delivering machine learning solutions that empower businesses to harness the power of data-driven intelligence. From pre-analysis to recommendation engines and fraud detection, we are building robust ML models that solve real-world challenges.",
    },
    {
      title: "Natural Language Processing",
      description:
        "At DevNexus Solutions, we deliver Natural Language Processing (NLP) to help other businesses unlock insights from text, speech, and other unstructured data. Our NLP solutions enable smarter interactions through AI-powered documents. Whether you are looking to enhance customer support, automate processes, or extract valuable insights. ",
    },
    {
      title: "AI Chat GPT Development",
      description:
        "Our custom-built chatbots and virtual assistants, powered by OpenAI’s GPT technology, deliver human-like conversations, streamline support, and enhance user engagement across multiple platforms.",
    },
    {
      title: "AI Integration",
      description:
        "At DevNexus Solutions, our team of experts specialises in AI integration, seamlessly configuring intelligent capabilities into your existing systems, applications, and ongoing workflows. Our integration services are tailored to your specific needs, enabling you to unlock new possibilities. ",
    },
    {
      title: "Automation Solutions",
      description:
        "DevNexus Solutions delivers automation solutions that streamline workflows, reduce operational costs, and improve efficiency across your organisation. By leveraging AI, machine learning, and robotic process automation, we are helping businesses automate tedious tasks and enhance accuracy.  ",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-20 bg-white">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl text-[#00357A] leading-snug">
          <span className="font-bold">Artificial Intelligence</span> Development Services,{" "}
          <span className="font-bold">DevNexus Solutions</span> provides
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 12px 20px rgba(0, 53, 122, 0.1)",
            }}
            className="border rounded-xl shadow-sm p-6 bg-white transition duration-300 ease-in-out cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-[#00357A] mb-2">{service.title}</h3>
            <p className="text-[#696969] text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
