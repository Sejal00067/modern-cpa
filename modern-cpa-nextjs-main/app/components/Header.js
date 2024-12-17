export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Brand Name */}
        <div className="text-3xl font-extrabold tracking-wider font-serif cursor-pointer hover:text-indigo-300 transition">
          Modern CPA
        </div>

        {/* Mobile Menu Button (For small screens) */}
        <div className="lg:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-10">
          <a
            href="#services"
            className="text-lg font-semibold hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-lg font-semibold hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-lg font-semibold hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

