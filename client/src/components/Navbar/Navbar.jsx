import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-blue-700 py-4 px-6 flex items-center justify-between mb-5">
      <div className="text-lg uppercase font-bold text-white">NxtGenDGNS</div>
      <div className="container flex items-center">
        <div className="hidden md:flex">
          {" "}
          <div className="flex items-center">
            <Link
              to="/tests"
              className="hover:text-gray-700 mr-4 transition-transform transform hover:scale-110 text-white pl-12"
            >
              Tests
            </Link>
            <Link
              to="/articles"
              className="text-white hover:text-gray-700 mr-4 transition-transform transform hover:scale-110"
            >
              Articles
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gray-700 mr-4 transition-transform transform hover:scale-110"
            >
              About
            </Link>
          </div>
        </div>
        <div className="flex ml-auto">
          {" "}
          <div className="ml-auto">
            {" "}
            <Link
              to="/login"
              className="text-white hover:text-gray-700 mr-4 transition-transform transform hover:scale-110"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-white hover:text-gray-700 mr-4 transition-transform transform hover:scale-110"
            >
              SignUp
            </Link>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </nav>
  );
};

export default Navbar;
