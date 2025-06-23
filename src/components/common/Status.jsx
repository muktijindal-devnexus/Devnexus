'use client';
import { FaThumbsUp, FaUsers } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const StatusCard = () => {
  const { ref, inView } = useInView({ triggerOnce: false });
  const [countKey, setCountKey] = useState(0);

  useEffect(() => {
    if (inView) {
      setCountKey(prev => prev + 1); 
    }
  }, [inView]);

  return (
    <div ref={ref} className="flex justify-center items-center py-6 md:py-10 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center bg-white px-6 py-6 md:px-10 md:py-6 rounded-xl shadow-md border border-blue-200 w-full max-w-4xl">
        
        {/* Item 1 */}
        <div className="flex flex-col items-center text-center px-4 mb-4 md:mb-0">
          <FaThumbsUp className="text-2xl md:text-3xl text-blue-900 mb-2" />
          <h3 className="text-lg md:text-xl font-bold">
            <CountUp key={`satisfaction-${countKey}`} end={96} duration={3} suffix="%" />
          </h3>
          <p className="text-xs md:text-sm text-gray-500">Satisfaction Rate</p>
        </div>

        <div className="hidden md:block border-l h-12 border-gray-300" />
        <div className="md:hidden w-16 h-px my-2 bg-gray-300" />

        {/* Item 2 */}
        <div className="flex flex-col items-center text-center px-4 mb-4 md:mb-0">
          <MdBusinessCenter className="text-2xl md:text-3xl text-blue-900 mb-2" />
          <h3 className="text-lg md:text-xl font-bold">
            <CountUp key={`business-${countKey}`} end={10} duration={5} suffix="+" />
          </h3>
          <p className="text-xs md:text-sm text-gray-500">Years of Business</p>
        </div>

        <div className="hidden md:block border-l h-12 border-gray-300" />
        <div className="md:hidden w-16 h-px my-2 bg-gray-300" />

        {/* Item 3 */}
        <div className="flex flex-col items-center text-center px-4">
          <FaUsers className="text-2xl md:text-3xl text-blue-900 mb-2" />
          <h3 className="text-lg md:text-xl font-bold">
            <CountUp key={`clients-${countKey}`} end={1200} duration={2} suffix="+" />
          </h3>
          <p className="text-xs md:text-sm text-gray-500">Satisfied Clients</p>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
