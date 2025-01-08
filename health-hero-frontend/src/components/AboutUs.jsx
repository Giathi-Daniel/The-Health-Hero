import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <div className="w-full bg-blue-500 text-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          Empowering Healthcare through Innovation, Technology, and Trust.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg mt-6 p-8 space-y-8">
        {/* Mission Statement */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At <span className="font-semibold text-blue-500">The Health Hero</span>, our mission is to revolutionize healthcare management by providing secure, efficient, and user-friendly solutions. We aim to bridge the gap between patients, doctors, and healthcare providers, ensuring everyone has access to the best care possible.
          </p>
        </section>

        {/* Vision Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We envision a world where healthcare is accessible, transparent, and seamless. By leveraging cutting-edge technologies, we are committed to creating a platform that simplifies the healthcare journey while prioritizing data security and patient confidentiality.
          </p>
        </section>

        {/* Values Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Our Core Values
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li><span className="font-semibold">Innovation:</span> Constantly evolving to deliver the most advanced solutions.</li>
            <li><span className="font-semibold">Integrity:</span> Upholding transparency and trust in every interaction.</li>
            <li><span className="font-semibold">Collaboration:</span> Working together to create a better healthcare experience.</li>
            <li><span className="font-semibold">Empathy:</span> Putting patients and their needs at the center of everything we do.</li>
          </ul>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our team consists of passionate professionals dedicated to transforming healthcare. From software engineers to healthcare experts, we bring diverse expertise to make healthcare simpler and more efficient.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg shadow-md p-6">
              <img
                src="https://via.placeholder.com/100"
                alt="Team Member"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-center">John Doe</h3>
              <p className="text-sm text-gray-600 text-center">
                CEO & Founder
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md p-6">
              <img
                src="https://via.placeholder.com/100"
                alt="Team Member"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-center">Jane Smith</h3>
              <p className="text-sm text-gray-600 text-center">
                Lead Engineer
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md p-6">
              <img
                src="https://via.placeholder.com/100"
                alt="Team Member"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-center">Emily Clark</h3>
              <p className="text-sm text-gray-600 text-center">
                Healthcare Specialist
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Join Us on Our Journey
          </h2>
          <p className="text-gray-600 mb-6">
            Ready to experience the future of healthcare? Let’s work together to make it happen.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
          >
            Contact Us
          </a>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
