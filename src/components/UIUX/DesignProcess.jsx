'use client'
import React from "react";

const stats = [
  {
    count: "User Interface",
    circleText:
       "Empathize • Define • Ideation • Prototyping • Testing • Visual Design • Prototyping",
  },
  {
    count: "User Experience",
    circleText:
       "Research & Discovery • Information Architecture • Wire Framing & Layout Design • Testing",
  },
];

export default function DesignProcess() {
  return (
    <section className="bg-[#002169] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-60">
        {stats.map((stat, index) => (
          <div key={index} className="relative w-60 h-60">
            {/* Circular Text */}
            <svg
              className="absolute top-0 left-0 w-full h-full rotate-circle"
              viewBox="0 0 100 100"
            >
              <defs>
                <path
                  id={`circlePath${index}`}
                  d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                />
              </defs>
              <text fill="#94a3b8" fontSize="4" fontFamily="sans-serif">
                <textPath
                  href={`#circlePath${index}`}
                  startOffset="50%"
                  textAnchor="middle"
                  className="text-[8px]"
                >
                  {stat.circleText}
                </textPath>
              </text>
            </svg>

            {/* Center Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <div className="text-2xl font-bold">{stat.count}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Inline animation CSS */}
      <style jsx>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .rotate-circle {
          animation: rotate 20s linear infinite;
          transform-origin: center;
        }
      `}</style>
    </section>
  );
}
