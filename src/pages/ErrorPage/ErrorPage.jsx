import React from "react";
import { Link } from "react-router";


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-lg w-full bg-white border border-gray-200 rounded-3xl shadow-xl p-10 text-center">

        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
            <span className="text-4xl text-red-500">⚠</span>
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-7xl font-extrabold text-gray-800 tracking-wider">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-500 leading-relaxed">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          {/* Go Home Button */}
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium transition"
          >
            Go Home
          </Link>

          {/* Refresh Button */}
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium transition"
          >
            Refresh
          </button>

        </div>
      </div>
    </div>
  );
};

export default ErrorPage;