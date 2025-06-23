"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export const Product = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://backend.devnexussolutions.com/api/all-Port", {
          method: "GET",
        });
        const data = await res.json();

        // Assuming API returns an array of objects like: [{ name: "", image: "http://..." }]
        setProjects(data.data || []); // adjust this based on actual response structure
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="bg-white py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-[340px] sm:h-[390px] lg:h-[440px] m-2 overflow-hidden border border-gray-200 shadow-md rounded-lg group bg-white"
          >
            <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] overflow-hidden">
              <div className="absolute top-0 left-0 w-full group-hover:-translate-y-[calc(100%-150px)] sm:group-hover:-translate-y-[calc(100%-180px)] lg:group-hover:-translate-y-[calc(100%-224px)] transition-transform duration-[9000ms] ease-linear">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  width={250}
                  height={500}
                  className="w-full object-cover"
                  unoptimized 
                />
              </div>
            </div>
            <div className="text-center text-blue-900 font-semibold text-sm sm:text-base mt-2 px-2">
              {project?.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
