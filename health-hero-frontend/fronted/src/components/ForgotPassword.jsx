import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    // Reset state
    setError("");
    setMessage("");

    // Simulate API call
    try {
      const response = await fetch("/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("If this email is registered, a reset link will be sent.");
        setEmail("");
      } else {
        const result = await response.json();
        setError(result.message || "Failed to send reset link.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 p-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Forgot Password
        </h2>
        <p className="text-center text-gray-500 mb-4">
          Enter your email address to receive a password reset link.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-1 block w-full px-4 py-2 bg-gray-50 border ${
                error ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
              placeholder="you@example.com"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Send Reset Link
          </button>
        </form>

        {message && (
          <p className="text-green-500 text-center mt-4">{message}</p>
        )}

        <div className="mt-6 text-center">
          <a
            href="/login"
            className="text-blue-500 hover:text-blue-600 transition duration-200"
          >
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
