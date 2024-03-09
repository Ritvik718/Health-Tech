import React from "react";
import img1 from "../../assets/doc.png"; // Import sample image for the card
import img2 from "../../assets/doc2.jpeg"; // Import another sample image for the card
import { Link } from "react-router-dom";

const BookingInterface = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center mt-24">
        Book an Appointment Here
      </h1>
      {/* Search bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search for clinics or hospitals..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap mb-8">
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 sm:mb-0">
          <label className="block text-gray-700 mb-2">Price:</label>
          {/* Price filter dropdown */}
          <select className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option value="">All</option>
            <option value="low">Low-High</option>
            <option value="high">High-Low</option>
          </select>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 sm:mb-0">
          <label className="block text-gray-700 mb-2">Location:</label>
          {/* Location filter dropdown */}
          <select className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option value="">All</option>
            <option value="city">City</option>
            <option value="suburb">Suburb</option>
          </select>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3">
          <label className="block text-gray-700 mb-2">Urgency:</label>
          {/* Urgency filter dropdown */}
          <select className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option value="">All</option>
            <option value="urgent">Urgent</option>
            <option value="non-urgent">Non-urgent</option>
          </select>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Sample Card 1 */}
        <div className="border rounded-lg shadow-md">
          <img
            src={img1}
            alt="Clinic 1"
            className="mb-4 rounded-t-lg w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 truncate">
              Appolo Hospital
            </h3>
            <p className="text-gray-600 mb-2 truncate">
              Location: Chennai, India
            </p>
            <p className="text-gray-600 mb-2 truncate">Rating: 4.5</p>
            <p className="text-gray-600 mb-2 truncate">Price Range: 4500</p>
            <Link to="/https://www.apollohospitals.com/">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                Book Now
              </button>
            </Link>
          </div>
        </div>

        {/* Sample Card 2 */}
        <div className="border rounded-lg shadow-md">
          <img
            src={img2}
            alt="Clinic 2"
            className="mb-4 rounded-t-lg w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 truncate">
              Medanta Hospital
            </h3>
            <p className="text-gray-600 mb-2 truncate">
              Location: Delhi, India
            </p>
            <p className="text-gray-600 mb-2 truncate">Rating: 4.2</p>
            <p className="text-gray-600 mb-2 truncate">Price Range: 3500</p>
            <Link to="https://www.medanta.org/">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                Book Now
              </button>
            </Link>
          </div>
        </div>

        {/* Add more cards here */}
      </div>
    </div>
  );
};

export default BookingInterface;
