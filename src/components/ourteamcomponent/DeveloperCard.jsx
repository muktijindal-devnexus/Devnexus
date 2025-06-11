const DeveloperCard = ({ name, role, experience, skills, imgUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full xs:w-64 sm:w-72 h-auto min-h-[320px] sm:h-80 text-center border border-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      {/* Image Container */}
      <div className="flex justify-center mb-4">
        <img
          src={imgUrl}
          alt={name}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-[#00357A]"
        />
      </div>
      
      {/* Developer Info */}
      <div className="mb-3">
        <h3 className="text-[#00357A] font-semibold text-lg sm:text-xl">{name}</h3>
        <p className="text-sm sm:text-base text-gray-700 mt-1">{role}</p>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">{experience}</p>
      </div>
      
      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-2 mt-3 px-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="border rounded-full px-2 py-1 text-xs sm:text-sm text-[#00357A] border-[#00357A] hover:bg-[#00357A] hover:text-white transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DeveloperCard;