import React, { useState } from "react";
import img1 from "../../assets/back.webp";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send user data to backend
      const response = await axios.post(
        "http://localhost:3000/api/signin",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-xl font-bold text-left mb-6">Nxt Gen DGNS</div>
        <h3 className="text-lg font-bold mb-2">Sign Up</h3>
        <p className="text-gray-600 mb-6">to continue to NxtGenDGNS</p>
        <button className="bg-gray-900 text-white w-full py-2 px-4 mb-4 rounded-lg">
          <FaGithub />
          Continue with Github
        </button>
        <button className="bg-red-600 text-white w-full py-2 px-4 mb-4 rounded-lg">
          <FaGoogle />
          Continue with Google
        </button>
        <div className="flex items-center justify-center w-full mb-6">
          <div className="border-t border-gray-400 w-full"></div>
          <div className="px-3 text-gray-600">or</div>
          <div className="border-t border-gray-400 w-full"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <Link to="/recommendation">
            <button className="bg-purple-600 text-white w-full py-2 px-4 mb-4 rounded-lg">
              Continue
            </button>
          </Link>
        </form>

        <div className="text-sm text-gray-600 text-left">
          No account? Sign Up
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
