import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-semibold text-center text-gray-800 mb-8">
            Welcome to <span className="text-blue-600">NxtGenDGNS</span>
          </h2>
          <p className="text-lg text-center text-gray-600 mb-8">
            Your trusted partner in navigating the complex world of medical
            testing.
          </p>
          <p className="text-lg text-center text-gray-600 mb-8">
            Our mission is to empower individuals to make informed decisions
            about their health by providing personalized and reliable
            recommendations for medical tests.
          </p>
        </div>
      </section>
      <div className="flex justify-center mb-16">
        {" "}
        {/* Center the button */}
        <Link to="/signup">
          <button className="bg-black text-white h-12 sm:h-16 w-48 sm:w-64 px-6 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-800">
            Get Started
          </button>
        </Link>
      </div>
    </>
  );
};

export default Main;
