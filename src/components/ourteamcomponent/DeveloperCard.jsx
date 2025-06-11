const DeveloperCard = ({ name, role, experience, skills, imgUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-72 h-80 text-center border border-gray-200">
      <div className="flex justify-center mb-4">
        <img
          src={imgUrl}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
      </div>
      <h3 className="text-[#00357A] font-semibold">{name}</h3>
      <p className="text-sm text-gray-700">{role}</p>
      <p className="text-sm text-gray-600">{experience}</p>
      <div className="flex flex-wrap justify-center gap-2 mt-3">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="border rounded-full px-3 py-1 text-sm text-[#00357A] border-[#00357A]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DeveloperCard;
