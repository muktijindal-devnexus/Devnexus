"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const tools = [
  {
    name: "Canva",
    image: "/images/UUIX/canva.svg",
    bgColor: "bg-[#E5EBF2] hover:bg-[#335D95]",
    textColor: "text-black hover:text-white",
    description:
      "Canva is a user-friendly online graphic design platform that enables individuals and businesses to create a wide variety of visual content with ease.",
  },
  {
    name: "Figma",
    image: "/images/UUIX/figma.svg",
bgColor: "bg-[#E5EBF2] hover:bg-[#335D95]",
    textColor: "text-black hover:text-white",
    description:
      "Figma is a cloud based tool which enables real time collaboration, vector editing and prototyping. It allows ui ux designers to build designs, prototype them and share them with others.",
  },
  {
    name: "AdobeXD",
    image: "/images/UUIX/adobe.svg",
    bgColor: "bg-[#E5EBF2] hover:bg-[#335D95]",
    textColor: "text-black hover:text-white",
    description:
      "AdobeXD is used for designing the UI, UX visual for web and mobile applications. It is a powerful and one of the trending designing tool and vector based software tool which is used for digital design.",
  },
  {
    name: "Adobe Ilustrator",
    image: "/images/technology/illustrator.svg",
    bgColor: "bg-[#E5EBF2] hover:bg-[#335D95]",
    textColor: "text-black hover:text-white",
    description:
      "AdobeXD is used for designing the UI, UX visual for web and mobile applications. It is a powerful and one of the trending designing tool and vector based software tool which is used for digital design.",
  },
  {
    name: "Adobe Photoshop",
    image: "/images/technology/photoshop.svg",
    bgColor: "bg-[#E5EBF2] hover:bg-[#335D95]",
    textColor: "text-black hover:text-white",
    description:
      "AdobeXD is used for designing the UI, UX visual for web and mobile applications. It is a powerful and one of the trending designing tool and vector based software tool which is used for digital design.",
  },
];

export default function UIDesignTechnologies() {
  return (
    <div className="py-10 px-4 md:px-20 bg-white text-center relative z-0 overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        Core <span className="text-blue-800 font-bold">UI UX Design</span> Technologies
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {tools.map((tool, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-xl overflow-hidden ">
              <div
                className={`h-[577px]  p-6 flex flex-col items-center justify-start transition-all duration-300 transform hover:scale-105 z-10 ${tool.bgColor} ${tool.textColor} group`}
              >
                {/* Handle imported vs string images */}
                {typeof tool.image === "string" ? (
                  <img src={tool.image} alt={tool.name} className="w-[125px] h-[225px] mb-4" />
                ) : (
                  <img src={tool.image.src} alt={tool.name} className="w-16 h-16 mb-4" />
                )}
                <h3 className="text-2xl font-semibold mb-6 group-hover:text-white text-[#00357A]">{tool.name}</h3>
                <p className="text-xl  text-center group-hover:text-white text-[#6F6F6F] leading-8 ">{tool.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}