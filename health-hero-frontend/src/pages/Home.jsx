import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-20 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Welcome to The Health Hero
            </h1>
            <p className="mt-4 text-lg lg:text-xl">
              Your trusted platform for secure and seamless medical records management. Empowering healthcare professionals and patients alike.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start gap-4">
              <button className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Get Started
              </button>
              <button className="bg-transparent border border-white px-6 py-3 rounded-lg text-white hover:bg-white hover:text-blue-500">
                Learn More
              </button>
            </div>
          </div>
          {/* Hero Image */}
          <div className="flex-1">
            <img
              src="/assets/hero-image.png" // Replace with your image path
              alt="Medical records"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mt-4">
            Designed to streamline healthcare communication and improve patient care.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Service 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition">
              <img
                src="/assets/service-1.png" // Replace with your image path
                alt="Service 1"
                className="w-16 h-16 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-6 text-center">
                Secure Medical Records
              </h3>
              <p className="text-gray-600 mt-2 text-center">
                Keep your data safe with HIPAA-level security and encryption.
              </p>
            </div>
            {/* Repeat similar blocks for more services */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition">
              <img
                src="/assets/service-2.png"
                alt="Service 2"
                className="w-16 h-16 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-6 text-center">
                Appointment Automation
              </h3>
              <p className="text-gray-600 mt-2 text-center">
                Manage your appointments seamlessly with automated reminders.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition">
              <img
                src="/assets/service-3.png"
                alt="Service 3"
                className="w-16 h-16 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-6 text-center">
                Doctor-Patient Communication
              </h3>
              <p className="text-gray-600 mt-2 text-center">
                Foster better communication for improved healthcare outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="bg-blue-500 text-white py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="mt-4">
            Join us today and take the first step toward secure and efficient medical care.
          </p>
          <button className="bg-white text-blue-500 mt-6 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
