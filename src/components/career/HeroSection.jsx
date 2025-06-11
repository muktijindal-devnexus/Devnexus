export default function CareerSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center"
      style={{ backgroundImage: "url('/images/BannerImage.jpg')" }} // Replace with your actual image filename
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-20">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl font-bold mb-4">Career</h1>
          <p className="text-lg mb-6">
            We, Devnexians, are a set of vibrant geeks with a mission to deliver tech
            innovation so as to enable business growth. Our work culture is set to
            Client-to-Employee relationship, powered by Learning, Innovation & ROI.
          </p>
          <button className="bg-white text-blue-700 font-semibold py-2 px-4 rounded shadow hover:bg-gray-100 transition">
            Let’s Collaborate
          </button>
        </div>
      </div>

      {/* Scroll to Top Text */}
        {/* <div className="absolute left-0 top-1/2 transform -rotate-90 -translate-y-1/2 text-blue-400 text-sm font-medium tracking-wide">
            Scroll to top
        </div> */}
    </section>
  );
}
