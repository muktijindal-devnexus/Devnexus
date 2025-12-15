import Link from "next/link";

const milestones = [
  {
    number: "01.",
    text: " Enhance Security, Transparency, and Trust with Immutable Ledgers",
  },
  {
    number: "02.",
    text: " Drive Efficiency and Cut Costs with Smart Contract Automation",
  },
  {
    number: "03.",
    text: "Enable New Business Models and Competitive Advantage",
  },
];

const BlockchainMilestones = () => {
  return (
    <section className="bg-white px-4 md:px-16 lg:px-24 py-12">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center md:p-20 p-0">
        {/* Left Content */}
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00357A] mb-6">
           Blockchain’s Impact on Business & Technology
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

          <Link href="/contact" passHref>
            <div className="mt-8 bg-[#00357A] hover:bg-[#335D95] text-white font-medium px-5 py-2 rounded inline-block">
              Consult Our Experts
            </div>
          </Link>
        </div>

        {/* Right Video */}
        <div className="md:w-1/3 relative aspect-video  overflow-hidden">
          <video
            src="/cdn/images/Blockchain/blockchain 2030.mp4"
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
