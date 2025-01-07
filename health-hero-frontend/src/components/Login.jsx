import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.password) errors.password = "Password is required.";
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Submission logic
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Login successful!");
        Navigate('/home')
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 bg-gray-50 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
              placeholder="example@domain.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 bg-gray-50 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-600">Remember Me</span>
            </label>
            <a href="#" className="text-blue-500 hover:underline text-sm">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
