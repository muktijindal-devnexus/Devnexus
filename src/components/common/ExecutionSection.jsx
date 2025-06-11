const ExecutionSection = () => {
  const cards = [
    {
      id: 1,
      title: "Responsive Web Design",
      content:
        "We are creating websites which look stunning and function seamlessly across all devices, ensuring that the audience enjoys a better experience whether on Desktop, tablet, or mobile.\n\n• Mobile-First & Cross-Browser Compatibility\n• Modern, Clean & Interactive UI/UX\n• High-Speed Performance Optimization\n• Brand-Consistent Visual Design",
    },
    {
      id: 2,
      title: "E-commerce Development",
      content:
        "At DevNexus Solutions we are building powerful, secure and user friendly e-commerce websites customized according to your business requirement. From listings of products and shopping carts to integration of payment gateway, our solutions are designed to deliver the best website which performs and converts.\n Shopify, WooCommerce, Magento & Custom Solutions\nProduct Catalogue & Shopping Cart Integration\nSecure Payment Gateway Setup\nMobile-Optimized & Fast-Loading Storefronts ",
    },
    {
      id: 3,
      title: "CMS Development (WordPress, Webflow & More)",
      content:
        "We specialize in creating dynamic and easy to navigate websites using powerful Content management systems like wordpress, Joomla, etc. Our CMS solutions empower you to update the content, images without much hassle and technical skills. Whether you need a website, a blog, custom portal, DevNexus Solutions ready to deliver the best scalable, SEO friendly website which are tailored to your business goals.",
    },
    {
      id: 4,
      title: "Front End Development",
      content:
        "Our front end team will bring your vision to life with clean, responsive and interactive design. Using the latest technology like HTML5, CSS3, JavaScript, React, etc. We are developing user centric design which delivers a seamless experience across all types of devices. At DevNexus Solutions we focus on performance, accessibility to ensure your website's functionality. ",
    },
    {
      id: 5,
      title: "Custom Web Application Development",
      content:
        "We are offering tailor made Website development Services built from the ground up to match your unique business requirement. Whether you need a complex application, portal for business, or multi feature platform, our team of experts are developing scalable, secure and high performing websites. At DevNexus Solution, we are focusing on functionality, user experience and long term growth for your brand.",
    },
    {
      id: 6,
      title: "Backend Development",
      content:
        "At DevNexus Solutions, we are providing a robust, secure and scalable backend system which gives power to your application. From database architecture and development of API our backend team ensures optimal performance and reliability.",
    },
  ];

  return (
    <section className="px-6 lg:px-24 py-16 bg-white">
      {/* Top Title Section */}
      <div className="flex flex-col items-center text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1C3C6B] mb-4">
          Range of Web Development Services
        </h2>
        <p className="text-[#1C3C6B] text-lg leading-relaxed">
          As a leading web design and development service provider, we offer a wide range of website development services.
        </p>
      </div>

      {/* Card Scroll Row */}
      <div className="flex space-x-6 overflow-x-auto pb-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group min-w-[488px] max-w-[320px] p-10 rounded-xl border-[#D3DBE6] hover:border-[#1C3C6B] border-2 shadow-lg bg-white transition-all duration-300 hover:shadow-xl"
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
