import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 p-6">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
        <p className="text-2xl font-semibold text-gray-600 mt-4">
          Page Not Found
        </p>
        <p className="text-gray-500 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-8">
          <img
            src="https://via.placeholder.com/400x250"
            alt="404 Illustration"
            className="mx-auto w-80"
          />
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <Link
            to="/"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
          >
            Go to Home
          </Link>
          <Link
            to="/help"
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg shadow-md hover:bg-gray-200 transition duration-200"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
