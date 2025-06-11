import Image from "next/image";
import React from "react";
import UnderConstruction from "../../../public/images/UnderConstruction.png";

export const Blogs = () => {
  return (
    
    <section className="flex flex-col justify-center items-center">
      <div className="relative w-[250px] h-[250px]">
        <Image
          src={UnderConstruction}
          alt="Under Construction"
          fill
          className="object-contain"
        />
      </div>
      <h1 className="text-[#335D95] text-center text-[48px] pt-8">
        This page is currently under construction. <br/> Please check back soon!
      </h1>
    </section>
  );
};
