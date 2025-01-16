import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Step 1: Import useNavigate
import Navbar from "../Navbar";

const Apod = () => {
  const navigate = useNavigate(); // Step 1: Initialize useNavigate
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [showMonthOptions, setShowMonthOptions] = useState(false);

  const months = Array.from({ length: 12 }, (_, i) => ({
    value: String(i + 1).padStart(2, "0"),
    label: new Date(0, i).toLocaleString("default", { month: "long" }),
  }));

  const isSubmitEnabled = day && month && year;

  const handleSubmit = () => {
    navigate('/science/apod-detail', { state: { day, month, year } });
};
  return (
    <div>
      {/* <Navbar /> */}
      <div
        className="text-white min-h-screen flex flex-col items-center justify-center"
        style={{
          fontFamily: "'Inter', sans-serif",
          backgroundImage: `url('https://img.freepik.com/premium-photo/concept-universe-planet-black-hole-galaxy-star-sun-big-bang-creation_817797-139.jpg`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl font-bold text-center mb-10">
          Astronomy Picture of the Day Calendar
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-4 w-full max-w-md px-4">
          {/* Day Input */}
          <input
            type="number"
            placeholder="Day"
            min="1"
            max="31"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="text-center flex-1 rounded-md px-4 py-2 bg-gray-200 text-black text-lg font-semibold shadow-md"
          />
          
          {/* Month Button */}
          <div className="relative flex-1">
            <button
              className="w-full rounded-md px-4 py-2 bg-gray-200 text-black text-lg font-semibold shadow-md"
              onClick={() => setShowMonthOptions(!showMonthOptions)}
            >
              {month ? months.find((m) => m.value === month)?.label : "Month"}
            </button>
            {showMonthOptions && (
              <div className="absolute left-0 right-0 bg-gray-800 border border-gray-600 z-10 mt-2">
                {months.map((m) => (
                  <button
                    key={m.value}
                    onClick={() => {
                      setMonth(m.value);
                      setShowMonthOptions(false);
                    }}
                    className="w-full text-left p-2 hover:bg-gray-700 text-white"
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Year Input */}
          <input
            type="number"
            placeholder="Year"
            min="1900"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="text-center flex-1 rounded-md px-4 py-2 bg-gray-200 text-black text-lg font-semibold shadow-md"
          />
        </div>

        {/* Submit Button */}
        {isSubmitEnabled && (
          <button 
            onClick={handleSubmit} // Calls handleSubmit on click
            className="rounded-md px-6 py-2 bg-gray-900 text-white text-lg font-semibold shadow-md transition-transform transform hover:bg-blue-200 hover:text-gray-900"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Apod;
