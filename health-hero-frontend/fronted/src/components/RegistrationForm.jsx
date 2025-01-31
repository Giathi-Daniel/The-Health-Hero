import React, { useState } from "react";

const RegistrationForm = ({ userType }) => {
  const [errors, setErrors] = useState({});

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      errors.email = "Invalid email address.";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }
  
    // For doctors, validate the specialization field
    if (userType === "Doctor" && !formData.extraField.trim()) {
      errors.extraField = "Specialization is required for doctors.";
    }
 
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
  
    setErrors({});
  
    // Submission logic
    try {
      const response = await fetch(`/api/register/${userType.toLowerCase()}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful:", data);
        // Redirect or show success message
        alert("Registration successful! Please log in.");
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          extraField: "",
        });
      } else {
        const errorData = await response.json();
        console.error("Registration failed:", errorData);
        alert(`Error: ${errorData.message || "Failed to register."}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An unexpected error occurred. Please try again.");
    }
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
            className={`mt-1 block w-full px-4 py-2 bg-gray-50 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
            placeholder="John Doe"
            required
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

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
            className={`mt-1 block w-full px-4 py-2 bg-gray-50 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
            placeholder="example@domain.com"
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

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
            className={`mt-1 block w-full px-4 py-2 bg-gray-50 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
            placeholder="••••••••"
            required
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
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
            className={`mt-1 block w-full px-4 py-2 bg-gray-50 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
            placeholder="••••••••"
            required
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
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
              className={`mt-1 block w-full px-4 py-2 bg-gray-50 border ${
                errors.extraField ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
              placeholder="e.g., Cardiology"
              required
            />
            {errors.extraField && <p className="text-red-500 text-sm mt-1">{errors.extraField}</p>}
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
