import Image from 'next/image';
import React from 'react';

const projects = [
  { name: "Cervino Ceramix", image: "/images/Project/cervano.png" },
  { name: "Cervino Ceramix", image: "/images/Project/xrdnano.png" },
  { name: "Send Mail Reminder", image: "/images/Project/agprojects.png" },
  { name: "Web Map", image:  "/images/Project/bergamot.png" },
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
            className="w-1/4 h-[400px] overflow-hidden border border-gray-200 shadow-md rounded-lg group bg-white"
          >
            {/* Project Name */}
            {/* <div className="h-[50px] flex items-center justify-center">
              <p className="text-blue-900 font-semibold text-lg text-center px-2">
                {project.name}
              </p>
            </div> */}

            {/* Scroll on hover image container */}
            <div className="relative h-[424px] overflow-hidden">
              <div className="absolute top-0 left-0 w-full group-hover:-translate-y-[calc(100%-224px)] transition-transform duration-[9000ms] ease-linear">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={250}
                  height={500} // Height can be set to your tallest image
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
