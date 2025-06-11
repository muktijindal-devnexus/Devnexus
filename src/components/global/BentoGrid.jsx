import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Himank Jindal",
    review:
      "DevNexus just gave me wonderful product, a great logo, and new website and now we are moving ahead with a digital marketing plan with them. Their design and development services are much better than we had anticipated.",
    stars: 5,
    image: "/images/team/avatar.svg",
    company: "La Osteria",
  },
  {
    name: "Muskan ",
    review:
      "I'm truly grateful for the opportunity to start my professional journey with Devnexus Solutions Pvt. Ltd. The company values innovation and teamwork helped me build confidence and develop my skills. Looking forward to learning more and contributing further.",
    stars: 5,
    image: "/images/team/avatar.svg",
    company: "Medklaire",
  },
  {
    name: "Mansi ",
    review:
      "I'm truly grateful for the opportunity to start my professional journey with Devnexus Solutions Pvt. Ltd. The company values innovation and teamwork helped me build confidence and develop my skills. Looking forward to learning more and contributing further.",
    stars: 5,
    image: "/images/team/avatar.svg",
    company: "Cervino Ceramix",
  },
  {
    name: "Vaibhav Mishra ",
    review:
      "Working for DevNexus solutions for a long time. Work culture is great. It was an amazing experience to work with them.",
    stars: 5,
    image: "/images/team/avatar.svg",
    company: "Aaryavart Green Projects Pvt. Ltd",
  },
  {
    name: "Tushar Kataria",
    review:
      "One of my friends is working in the company, I truly admire the work culture and flexibility given by the company.",
    stars: 5,
    image: "/images/team/avatar.svg",
    company: "Bergamot Beaute",
  },
  {
    name: "Akhil Aggarwal ",
    review:
      "Working at Devnexus has been a fantastic journey! The culture here is incredibly positive and motivating—everyone is always ready to help and collaborate. I've had so many opportunities to grow both professionally and personally. The management is approachable, and they genuinely care about the team's well-being and development. It's inspiring to be part of a company that values innovation, hard work, and team spirit. I'm proud to be part of this amazing organization!",
    stars: 5,
    image: "/images/team/avatar.svg",
    company: "Peace Of Mind",
  },
  {
    name: "Global Sign",
    review:
      "Working at Devnexus has been a fantastic journey! The culture here is incredibly positive and motivating—everyone is always ready to help and collaborate. I've had so many opportunities to grow both professionally and personally. The management is approachable, and they genuinely care about the team's well-being and development. It's inspiring to be part of a company that values innovation, hard work, and team spirit. I'm proud to be part of this amazing organization!",
    stars: 5,
    image: "/images/team/avatar.svg",
    company: "SRE India Reality",
  },
];

const BentoGrid = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="">
      <div className="flex justify-center">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* First Column */}
          <div className="sm:col-span-1 lg:col-span-2 flex flex-col gap-6">
            {[testimonials[0], testimonials[3]].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white rounded-2xl p-6 flex flex-col justify-center items-center gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center">
                  <FaQuoteLeft className="text-[#00357A] text-xl w-[45px] h-[45px]" />
                </div>
                <p className="text-gray-700 text-sm md:text-base text-center">
                  {testimonial.review}
                </p>
                <div className="flex items-center mt-auto gap-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500 mb-1">
                      {testimonial.company}
                    </p>
                    <div className="flex gap-1">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center column - main card */}
          <div className="sm:col-span-2 lg:col-span-2 flex items-center justify-center mt-[190px]">
            <motion.div
              variants={item}
              className="bg-white rounded-2xl p-6 flex flex-col items-center gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full w-full"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex justify-center mb-4">
                <FaQuoteLeft className="text-[#00357A] text-xl w-[45px] h-[45px]" />
              </div>
              <p className="text-gray-700 text-sm md:text-base text-center leading-8">
                {testimonials[2].review}
              </p>
              <div className="flex items-center mt-auto gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center overflow-hidden">
                  <Image
                    src={testimonials[2].image}
                    alt={testimonials[2].name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">
                    {testimonials[2].name}
                  </p>
                  <p className="text-xs text-gray-500 mb-1">
                    {testimonials[2].company}
                  </p>
                  <div className="flex gap-1 ">
                    {[...Array(testimonials[2].stars)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Third Column */}
          <div className="sm:col-span-1 lg:col-span-2 flex flex-col gap-6">
            {[testimonials[1], testimonials[4]].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white rounded-2xl p-6 flex flex-col items-center gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center">
                  <FaQuoteLeft className="text-[#00357A] text-xl w-[45px] h-[45px]" />
                </div>
                <p className="text-gray-700 text-sm md:text-base text-center">
                  {testimonial.review}
                </p>
                <div className="flex items-center mt-auto gap-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500 mb-1">
                      {testimonial.company}
                    </p>
                    <div className="flex gap-1">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BentoGrid;
