import Image from 'next/image';
import React from 'react';

const projects = [
  { name: "Cervino Ceramix", image: "/images/Project/cervano.png" },
  { name: "Cervino Ceramix", image: "/images/Project/xrdnano.png" },
  { name: "Send Mail Reminder", image: "/images/Project/agprojects.png" },
  { name: "Web Map", image: "/images/Project/bergamot.png" },
  { name: "Cervino Ceramix", image: "/images/Project/iowit.png" },
  { name: "Cervino Ceramix", image: "/images/Project/medklaire.png" },
  { name: "BeYoung", image: "/images/Project/sreindiarealty.png" },
  { name: "Cervino Ceramix", image: "/images/Project/rsisinternational.png" },
  { name: "Cervino Ceramix", image: "/images/Project/peaceofmind.png" },
];

export const Product = () => {
  return (
    <div className="bg-white py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Projects</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-[300px] m-2 sm:h-[350px] lg:h-[400px] overflow-hidden border border-gray-200 shadow-md rounded-lg group bg-white"
          >
            <div className="relative h-[300px] sm:h-[350px] lg:h-[424px] overflow-hidden">
              <div className="absolute top-0 left-0 w-full group-hover:-translate-y-[calc(100%-150px)] sm:group-hover:-translate-y-[calc(100%-180px)] lg:group-hover:-translate-y-[calc(100%-224px)] transition-transform duration-[9000ms] ease-linear">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={250}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
