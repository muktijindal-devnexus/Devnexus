'use client';
import React from "react";
import Innovation from "../../../public/images/Innovation.png";
import Image from "next/image";
import TopArrow from "../../../public/images/KeyFactsArrow.svg";
import RightTop from "../../../public/images/RightTop.svg";
import LeftBottom from "../../../public/images/LeftBottom.svg";
import RightBottom from "../../../public/images/RightBottom.svg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export const KeyFacts = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="flex justify-center items-center gap-4 flex-col py-12"
    >
      <div className="flex flex-col text-center w-[70%]">
        <h1 className="text-[34px] leading-[44px] text-[#00357A]">
          Key Facts About Us
        </h1>
        <p className="text-[19px] leading-6 pt-5">
          Discover Why Clients Choose DevNexus for Mobile & Web App Development,
          UI/UX Design, Digital Marketing, and Graphic Design Solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 justify-items-center items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl px-4 pt-16">
        {/* Column 1 */}
        <div className="space-y-8">
          <div className="text-center">
            <div className="text-4xl font-medium text-[#7E7E7E]">
              {inView ? <CountUp end={95} duration={3} /> : '0'}%
            </div>
            <h3 className="mt-2 text-lg font-medium text-[#335D95]">
              Happy Customers
            </h3>
          </div>

          <div className="text-center">
            <div className="text-4xl font-medium text-[#7E7E7E]">
              {inView ? <CountUp end={1100} duration={2.5} /> : '0'}+
            </div>
            <h3 className="mt-2 text-lg font-medium text-[#335D95]">
              Projects Done
            </h3>
          </div>
        </div>

        {/* Column 2 - Image with Arrows */}
        <div className="relative flex items-center justify-center ">
          <div className="hidden sm:block" >
       <div className="absolute -top-5 -left-[70%] ">
            <Image src={TopArrow} alt="Arrow" width={128} height={128} />
          </div>
          <div className="absolute top-[50%] -left-[70%]">
            <Image src={LeftBottom} alt="Arrow" width={128} height={128} />
          </div>
          <div className="absolute -top-5 -right-[70%]">
            <Image src={RightTop} alt="Arrow" width={128} height={128} />
          </div>
          <div className="absolute top-[50%] -right-[70%]">
            <Image src={RightBottom} alt="Arrow" width={128} height={128} />
          </div>
          </div>
   

          <Image
            src={Innovation}
            alt="Innovation illustration"
            width={200}
            height={200}
            className="object-contain animate-spin"
            style={{ animationDuration: "16s" }}
          />
        </div>

        {/* Column 3 */}
        <div className="space-y-8">
          <div className="text-center">
            <div className="text-4xl font-medium text-[#7E7E7E]">
              {inView ? <CountUp end={130} duration={6.5} /> : '0'}+
            </div>
            <h3 className="mt-2 text-lg font-medium text-[#335D95]">
              Employees
            </h3>
          </div>

          <div className="text-center">
            <div className="text-4xl font-medium text-[#7E7E7E]">
              {inView ? <CountUp end={14} duration={6.2} /> : '0'}+
            </div>
            <h3 className="mt-2 text-lg font-medium text-[#335D95]">
              Years Experience
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};