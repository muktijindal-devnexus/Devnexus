// components/FoundersSection.tsx

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const FoundersSection = () => {
  return (
    <section className="py-12 px-4 md:px-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-medium text-[#00357A] mb-10">
        Led by{" "}
        <span className="font-bold text-[#00357A]">
          Two Young Entrepreneurs
        </span>
        , the company is driven by <br />
        energy, enthusiasm, and a hunger for growth
      </h2>

      <div className=" justify-center gap-8">
        {/* Founder 1 */}
        <div className="bg-white rounded-lg shadow-md p-8 w-full flex">
          <div className="w-[70%] h-[400px] relative rounded-md overflow-hidden mb-4">
            <Image
              src="/cdn/images/About/ankit.png" // Replace with correct path
              alt="Ankit Sureka"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-14 w-[90%]">
            <h3 className="text-2xl font-semibold text-[#00357A]">
              Ankit Sureka
            </h3>
            <div className="flex gap-2 justify-center text-xl">
              <p className="text-sm text-[#727272] mb-3">CEO & Co-Founder</p>
              <Link
                href="https://www.linkedin.com/in/ankit-sureka-534a63353/"
                target="_blank"
              >
                <FaLinkedin className=" hover:scale-110 transition" />
              </Link>
            </div>
            <p className="text-lg  text-[#4C4C4C] text-center leading-8">
              Ankit Sureka is a technologist and a marketing strategist with
              digital growth expertise in SEO, brand positioning, and
              performance marketing. He oversees marketing operations and
              business development. Ankit is driven by a mission to help
              startups and businesses thrive in competitive digital landscapes
              through smart marketing and data-backed strategies.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 w-full flex mt-10">
          <div className="p-14 w-[90%]">
            <h3 className="text-2xl font-semibold text-[#00357A]">
              Archit Sureka
            </h3>
            <div className="flex gap-2 justify-center text-xl">
              <p className="text-sm text-[#727272] mb-3">COO & Co-Founder</p>
              <Link
                href="https://www.linkedin.com/in/archit-sureka-b6a95435a/"
                target="_blank"
              >
                <FaLinkedin className=" hover:scale-110 transition" />
              </Link>
            </div>
            <p className="text-lg  text-[#4C4C4C] text-center leading-8">
              Archit Sureka is a visionary tech entrepreneur with a passion for
              building scalable digital products. With a background in software
              development and project strategy, Archit brings deep technical
              insight and a growth-driven mindset to DevNexus Solutions. He
              leads the company digital transformation, ensuring that
              innovation, quality, and client satisfaction are at the core of
              every solution.
            </p>
          </div>
            <div className="w-[70%] h-[400px] relative rounded-md overflow-hidden mb-4">
            <Image
              src="/cdn/images/About/archit.png"
              alt="Ankit Sureka"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Founder 2 */}
        {/* <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-[350px]">
          <div className="w-full h-[400px] relative rounded-md overflow-hidden mb-4">
            <Image
              src="/cdn/images/About/archit.png"
              alt="Archit Sureka"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-[#00357A]">
            Archit Sureka
          </h3>
          <div className="flex gap-2 justify-center ">
            <p className="text-sm text-[#727272]  mb-3">COO & Co-Founder</p>
            <Link
              href="https://www.linkedin.com/in/archit-sureka-b6a95435a/"
              target="_blank"
            >
              <FaLinkedin className=" hover:scale-110 transition" />
            </Link>
          </div>
          <p className="text-sm text-[#4C4C4C] text-left">
            Archit Sureka is a visionary tech entrepreneur with a passion for
            building scalable digital products. With a background in software
            development and project strategy, Archit brings deep technical
            insight and a growth-driven mindset to DevNexus Solutions. He leads
            the company digital transformation, ensuring that innovation,
            quality, and client satisfaction are at the core of every solution.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default FoundersSection;
