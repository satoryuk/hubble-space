import React, { useState } from "react";
import Navbar from "../Navbar";

// Accept width and height as props
const MissionSummarize = ({ width = 28, height = 28 }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const imageUrl =
    "https://wallpapers.com/images/featured/4k-oaax18kaapkokaro.jpg";

  return (
    <div>
      
      <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
        {/* Mission Image */}
        <div>
          <img
            src={imageUrl}
            alt="Mission Patch"
            className="cursor-pointer object-contain hover:scale-105 transition-transform duration-300"
            onClick={() => setIsZoomed(true)}
            style={{ width: `${width}rem`, height: `${height}rem` }} // Use the passed sizes
          />
        </div>

        {/* Mission Details Box */}
        <div className="w-full max-w-3xl border border-black hover:border-blue-500 transition-colors duration-300 rounded-lg shadow-lg mt-4">
          <div className="bg-blue-900 text-white text-center py-2 rounded-t-lg font-semibold">
            FalconSat
          </div>
          <div className="bg-gray-100 p-4 text-gray-800 text-center">
            <p>
              <strong className="text-red-600">Flight Number:</strong> 1
            </p>
            <p>
              <strong className="text-red-600">Launch Year:</strong> 2006
            </p>
            <p>
              <strong className="text-red-600">Launch Date:</strong> 2006-03-25T10:30:00+12:00
            </p>
            <p>
              <strong className="text-red-600">Rocket Name:</strong> Falcon 1
            </p>
            <p>
              <strong className="text-red-600">Launch Site:</strong> Kwajalein Atoll Omelek Island
            </p>
            <p>
              <strong className="text-red-600">Launch Success:</strong> False
            </p>
            <p>
              <strong className="text-red-600">Land Success:</strong> False
            </p>
            <p>
              <strong className="text-red-600">Details:</strong> None
            </p>
          </div>
        </div>

        {/* Fullscreen Image Modal */}
        {isZoomed && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative">
              <button
                className="absolute top-2 right-2 text-white text-2xl font-bold"
                onClick={() => setIsZoomed(false)}
              >
                ×
              </button>
              <img
                src={imageUrl}
                alt="Zoomed Mission Patch"
                className="max-w-full max-h-screen object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MissionSummarize;
