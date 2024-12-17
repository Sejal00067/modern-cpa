export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-center py-32 text-white mt-16"
      style={{
        backgroundImage: "url('/app/finance.jpg')", // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-5xl font-bold leading-tight mb-4">Modern CPA</h1>
          <p className="text-xl mb-6">
            A premium boutique CPA firm providing expert financial services
          </p>
          <a
            href="#services"
            className="inline-block bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-600 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Services Section */}
<section
  id="services"
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
>
  {[
    {
      title: "Tax Preparation",
      description:
        "Comprehensive tax planning and preparation to minimize liabilities and maximize returns.",
      
    },
    {
      title: "Financial Planning",
      description:
        "Tailored financial strategies to help you achieve your long-term goals with ease.",
      
    },
    {
      title: "Business Consulting",
      description:
        "Consulting services to optimize your business processes and increase profitability.",
      
    },
  ].map((service, index) => (
    <div
      key={index}
      className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition duration-300 relative overflow-hidden group"
    >
      {/* Service Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition duration-300" style={{ backgroundImage: `url(${service.image})` }}></div>
      
      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-indigo-600 mb-4 group-hover:text-indigo-700 transition duration-300">
          {service.title}
        </h3>
        <p className="text-lg text-gray-700 mb-4 group-hover:text-gray-800 transition duration-300">
          {service.description}
        </p>
        <a
          href="#contact"
          className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-indigo-500 transition duration-300 group-hover:bg-indigo-700"
        >
          Get Started
        </a>
      </div>
    </div>
  ))}
</section>

      {/* About Section */}
      <section
  id="about"
  className="relative bg-cover bg-center py-16 px-4 sm:px-6 lg:px-8b-16 m"
  style={{ backgroundImage: "url('/app/about-us.jpg')" }} // Replace with your background image path
>
  <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text readability */}
  
  <div className="max-w-screen-lg mx-auto text-center relative z-10">
    <h2 className="text-4xl font-bold text-white mb-6 animate__animated animate__fadeIn animate__delay-1s">
      About Us
    </h2>
    <p className="text-xl text-white leading-relaxed mb-8 animate__animated animate__fadeIn animate__delay-2s">
      Modern CPA is a boutique accounting firm specializing in providing personalized financial services.
      Our goal is to offer expert advice, with a commitment to excellence and client satisfaction.
    </p>
    <a
      href="#contact"
      className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-500 transition duration-300 animate__animated animate__fadeIn animate__delay-3s"
    >
      Get In Touch
    </a>
  </div>
</section>


      {/* Contact Section */}
      <section
  id="contact"
  className="relative text-center py-16 bg-cover bg-center mt-16"
  style={{ backgroundImage: "url('/app/contact-us.jpg')" }} // Replace with your image path
>
  <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for better text visibility */}
  <div className="max-w-screen-md mx-auto relative z-10 bg-white p-8 shadow-lg rounded-lg transform transition-all duration-1000 ease-in-out hover:scale-105">
    <h2 className="text-4xl font-extrabold text-indigo-600 mb-6 animate__animated animate__fadeIn">
      Contact Us
    </h2>
    <p className="text-xl text-gray-600 mb-6 animate__animated animate__fadeIn animate__delay-1s">
      We'd love to hear from you! Reach out for consultations or inquiries.
    </p>
    <form className="space-y-6 animate__animated animate__fadeIn animate__delay-2s">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 transform hover:scale-105"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 transform hover:scale-105"
      />
      <textarea
        placeholder="Your Message"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 transform hover:scale-105 h-32"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-500 transition duration-300 transform hover:scale-105"
      >
        Submit
      </button>
    </form>
  </div>
</section>
</div>
  );
}
