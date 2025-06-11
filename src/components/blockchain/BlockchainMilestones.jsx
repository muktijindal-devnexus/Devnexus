import Image from "next/image"; // You may remove this if not used elsewhere

const milestones = [
  {
    number: "01.",
    text: "By 2030 Blockchain projection is expected of US$ 53,182.9 million with CAGR over 90%.",
  },
  {
    number: "02.",
    text: "Business value is expected to reach by $3.1 trillion in 2030.",
  },
  {
    number: "03.",
    text: "Expected users in blockchain market are 1 billion 2030.",
  },
];

const BlockchainMilestones = () => {
  return (
    <section className="bg-white px-4 md:px-16 lg:px-24 py-12">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Left Content */}
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00357A] mb-6">
            Blockchain’s Path to 2030 - Key Milestones
          </h2>
          <ul className="space-y-5">
            {milestones.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="text-[#00357A] text-xl font-bold min-w-[40px]">
                  {item.number}
                </span>
                <p className="text-gray-700">{item.text}</p>
              </li>
            ))}
          </ul>

          <button className="mt-8 bg-[#00357A] hover:bg-blue-800 text-white font-medium px-5 py-2 rounded">
            Consult Our Experts
          </button>
        </div>

        {/* Right Video */}
        <div className="md:w-1/3 relative aspect-video  overflow-hidden">
          <video
            src="/images/Blockchain/blockchain 2030.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BlockchainMilestones;
