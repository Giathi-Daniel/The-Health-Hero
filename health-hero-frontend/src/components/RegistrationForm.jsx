import React, { useState } from "react";

const RegistrationForm = ({ userType }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    extraField: "", // For additional fields like specialization (for doctors)
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Register as {userType}
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          {userType === "Doctor"
            ? "Join us to manage and assist patients efficiently."
            : userType === "Admin"
            ? "Create an account to oversee system management."
            : "Sign up to manage your health records."}
        </p>

        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 bg-gray-50 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 bg-gray-50 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="example@domain.com"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 bg-gray-50 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="••••••••"
            required
          />
        </div>

        {/* Confirm Password Field */}
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-600 font-medium"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 bg-gray-50 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="••••••••"
            required
          />
        </div>

        {/* Extra Field for Doctors */}
        {userType === "Doctor" && (
          <div className="mb-4">
            <label
              htmlFor="specialization"
              className="block text-gray-600 font-medium"
            >
              Specialization
            </label>
            <input
              type="text"
              id="specialization"
              name="extraField"
              value={formData.extraField}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., Cardiology"
              required
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Register
        </button>

        {/* Redirect to Login */}
        <p className="text-sm text-gray-500 text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login here
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
