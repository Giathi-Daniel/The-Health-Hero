import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill out all required fields.");
      return;
    }

    // Simulated form submission logic
    setFormStatus("Thank you for reaching out! We'll get back to you soon.");
    console.log("Form Submitted:", formData);

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // send form data to backend API
    // fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Have questions or want to reach out? Fill out the form below, and we'll respond promptly!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-gray-700 font-medium">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject (Optional)"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>

        {formStatus && (
          <p
            className={`mt-4 text-center ${
              formStatus.includes("Thank you")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {formStatus}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
