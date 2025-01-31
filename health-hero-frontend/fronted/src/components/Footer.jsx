import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold text-green-600">The Health Hero</h3>
            <p className="text-gray-600">
              Empowering you to manage your health data effectively and securely.
            </p>
          </div>
          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-green-600">Quick Links</h3>
            <ul className="text-gray-600">
              <li>
                <a href="/" className="hover:text-green-600">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-green-600">About Us</a>
              </li>
              <li>
                <a href="/services" className="hover:text-green-600">Services</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-600">Contact</a>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold text-green-600">Contact Us</h3>
            <p className="text-gray-600">Email: support@healthhero.com</p>
            <p className="text-gray-600">Phone: +123 456 7890</p>
            <p className="text-gray-600">Location: 123 Health Lane, Wellness City</p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-6 text-center pt-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} The Health Hero. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
