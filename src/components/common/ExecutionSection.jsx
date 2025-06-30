const ExecutionSection = () => {
  const cards = [
    {
      id: 1,
      title: "Hybrid App Development",
      content:
        "Hybrid App Development combines the best of web and native apps. It allows us to build an app that works seamlessly on iOS and Android systems. Hybrid apps are based on a single codebase, which reduces development time and cost while ensuring an improved user experience.",
    },
    {
      id: 2,
      title: "Cross-Platform mobile app",
      content:
        "These apps are platform-agnostic, meaning they can be used regardless of the operating system powering mobile devices. With a cross-platform app, some source code can be shared over different platforms, such as iOS and Android.",
    },
    {
      id: 3,
      title: "Mobile UX development",
      content:
        "At DevNexus Solutions, we are working on creativity with usability to craft mobile experiences that delight the user and can drive results. Our team of mobile app developers makes sure to make a mobile UX design not only stunning visuals but also to increase the user experience. ",
    },
    {
      id: 4,
      title: "Front End Development",
      content:
        "Our front end team will bring your vision to life with clean, responsive and interactive design. Using the latest technologies like HTML5, CSS3, JavaScript, React, etc. We are developing user centric design which delivers a seamless experience across all types of devices. At DevNexus Solutions we focus on performance, accessibility to ensure your website's functionality. ",
    },
    {
      id: 5,
      title: "iOS App Development",
      content:
        "DevNexus Solutions specializes in iOS Mobile app development with high-performing and user-friendly iOS applications. Our expert team seeks clean design and uses the latest technology to deliver apps.",
    },
    {
      id: 6,
      title: "Android App Development",
      content:
        "Our expert team at DevNexus Solutions delivers cutting-edge Android app development services that meet clients' needs. We have skilled developers who create scalable and visually appealing Android applications that perform seamlessly across different devices.",
    },
    {
      id: 7,
      title: "Progressive Web Pages",
      content:
        "We deliver top-notch progressive web apps that combine the reach of the web and native apps. With advanced technologies like service workers, web app manifests, and a responsive framework, we ensure your app will provide a smooth and hassle-free experience.",
    },
  ];

  return (
    <section className="px-6 lg:px-24 py-16 bg-white">
      {/* Top Title Section */}
      <div className="flex flex-col items-center text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1C3C6B] mb-4">
          Our Range Of Mobile App Development Services
        </h2>
        <p className="text-[#1C3C6B] text-lg leading-relaxed">
          As a leading mobile design and development service provider, we offer
          a wide range of services.
        </p>
      </div>
          <span className="text-[#557191] flex justify-end py-5">
Scroll for more
      </span>

      {/* Card Scroll Row */}
      <div className="flex space-x-6 overflow-x-auto pb-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group min-w-[80%] sm:min-w-[488px] sm:max-w-[320px] p-6 sm:p-10 rounded-xl border-[#D3DBE6] hover:border-[#1C3C6B] border-2 shadow-lg bg-white transition-all duration-300 hover:shadow-xl"
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-[#1C3C6B] mr-3 group-hover:text-[#1C3C6B] transition-colors duration-300">
                {String(card.id).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold text-[#1C3C6B] group-hover:text-[#1C3C6B] transition-colors duration-300">
                {card.title}
              </h3>
            </div>
            <p className="text-[#7B8794] text-base leading-relaxed whitespace-pre-line">
              {card.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExecutionSection;
