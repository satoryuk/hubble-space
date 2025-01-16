import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to access the passed state
import Navbar from "../Navbar";
import Footer from "../Footer";

const ApodDetail = () => {
  const location = useLocation();
  const { day, month, year } = location.state || {}; // Get day, month, and year from state

  return (
    <div className="bg-gray-900">
      {/* <Navbar /> */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl w-full mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"> 
          <div className="relative w-full md:w-1/2">
            <img
              src="https://via.placeholder.com/916x916" // Replace with the actual image URL
              alt="Witch Nebula"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 w-full md:w-1/2 flex flex-col">
            <h1 className="text-white text-3xl font-bold mb-3 leading-snug">
              Witch Nebula Casts Starry Spell
            </h1>
            <p className="text-gray-400 text-sm mb-4">
              A witch appears to be screaming out into space in this image from NASA's Wide-Field Infrared Survey Explorer, or WISE. The infrared portrait shows the Witch Head Nebula, named after its resemblance to the profile of a wicked witch.
            </p>
            <p className="text-gray-500 text-xs mb-6">
              <span className="font-semibold">Image Credit:</span> NASA/JPL-Caltech
            </p>
            {/* Display the selected date */}
            <p className="text-gray-500 text-xs mb-4">
              <span className="font-semibold">Selected Date:</span> {day}/{month}/{year}
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300 shadow-md flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l6-6 6 6M4 8l6 6 6-6"
                  />
                </svg>
                <span>Download</span>
              </button>
              <button className="bg-gray-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-600 transition duration-300 shadow-md flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2h-6m-6 0h6m-6 0a2 2 0 01-2-2v-4a2 2 0 012-2h6m6-6V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m-6 6v4"
                  />
                </svg>
                <span>Share</span>
              </button>
            </div>
            <div className="border-t border-gray-700 mt-6 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-400 text-sm">  <div>
                  <h4 className="text-gray-500 uppercase text-xs font-medium">Taken</h4>
                  <p>October 30, 2013</p>
                </div>
                <div>
                  <h4 className="text-gray-500 uppercase text-xs font-medium">Image Credit</h4>
                  <p>NASA/JPL-Caltech</p>
                </div>
                <div>
                  <h4 className="text-gray-500 uppercase text-xs font-medium">Size</h4>
                  <p>9163x9163px</p>
                </div>
              </div>
            </div>

            </div>
        </div>
      </div>
      {/* <Footer /> Footer will be shown at the bottom of the detail page */}
    </div>
  );
};

export default ApodDetail;
