const FilterButtons = ({ filters = [], active, setActive }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {filters.map((filter, idx) => (
        <button
          key={idx}
          onClick={() => setActive(filter)}
          className={`px-4 py-2 rounded-full border ${
            active === filter ? 'bg-[#00357A] text-white' : 'bg-white text-[#00357A]'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
