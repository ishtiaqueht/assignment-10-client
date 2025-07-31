import React from "react";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 flex items-center justify-center px-4">
      <div className="max-w-xl text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-200">
        <img
          src="https://img.freepik.com/premium-vector/page-found-404-error-site-desert-cactus-form-404-flat-vector-illustration_456605-332.jpg?semt=ais_hybrid&w=740&q=80"
          alt="404"
          className="w-full mx-auto mb-6 rounded-2xl"
        />

        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Oops! Page Not Found
        </h1>

        <p className="text-gray-600 mb-6">
          The page you're looking for might have been removed or is temporarily
          unavailable.
        </p>

        <Link
          to="/"
          className="px-5 py-2.5 relative flex items-center rounded group overflow-hidden font-medium bg-purple-50 text-green-600"
        >
          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-success group-hover:h-full opacity-90"></span>
          <span className="relative flex items-center gap-2  group-hover:text-white">
            <FaArrowLeft />
            Back to Home
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
