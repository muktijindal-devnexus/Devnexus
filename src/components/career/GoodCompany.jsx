export default function GoodCompanySection() {
  return (
    <section className="flex flex-col lg:flex-row w-full h-auto">
      {/* Left - Image */}
      <div className="lg:w-1/2 w-full">
        <img
          src="/images/career/team.png"
          alt="Team Meeting"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right - Text Block */}
      <div className="lg:w-1/2 w-full bg-[#335D95] text-white p-8 lg:p-16 flex items-center">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">You’re in good company!</h2>
          <p className="mb-4">
            We’re a team of creative wizards who are passionate about doing something we love, every day!
          </p>
          <p className="mb-4">
            Our purpose is deeper than just driving growth for our clients, we’re on a mission to build a digital ecosystem that embraces diversity, encourages disruption, and thrives on trust. This common goal gives our team the purpose to push boundaries and evolve, continuously.
          </p>
          <p>
            If you’re looking for an agency that excels at what it does, at the same time also promotes professional and personal development and a healthy work environment, you’ve found the right place!
          </p>
        </div>
      </div>
    </section>
  );
}
