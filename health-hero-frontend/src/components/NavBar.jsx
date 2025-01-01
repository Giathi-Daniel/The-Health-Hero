import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-2xl font-bold text-green-600">
              The Health Hero
            </a>
          </div>
          {/* Links */}
          <div className="hidden md:flex space-x-4 items-center">
            <a
              href="/"
              className="text-gray-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              About Us
            </a>
            <a
              href="/services"
              className="text-gray-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-gray-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </div>
          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-800 hover:text-green-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
