import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Import the bars icon
import Feature from "./Feature";
import Navbar from '../Navbar';

const Skywatching = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const carouselItems = [
    {
      image: "https://spaceplace.nasa.gov/gallery-space/en/NGC2336-galaxy.en.jpg",
      alt: "Galaxy NGC 2336",
    },
    {
      image: "https://th.bing.com/th/id/OIP.aKwYWkYoIBquDY_EKsrlBwHaE0?w=248&h=180&c=7&r=0&o=5&pid=1.7",
      alt: "Beautiful galaxy",
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);

  return (
    <div>
      <div className="text-white">
        

        {/* Secondary Navbar */}
        <nav className="bg-gray-800 py-2">
          <div className="flex justify-center items-center">
            <div className="hidden lg:flex gap-6">
              {[
                "Skywatching Home",
                "Eclipses",
                "What's Up",
                "Explore the Night Sky",
                "Night Sky Network",
                "Tips and Guides",
                "FAQ",
              ].map((link, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-sm font-medium hover:text-blue-400 transition duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
            <button 
              onClick={() => setDropdownOpen(!isDropdownOpen)} 
              className="lg:hidden flex items-center justify-center text-sm font-medium hover:text-blue-400 transition duration-300 mx-auto"
            >
              <FontAwesomeIcon icon={faBars} className="mr-2" /> Menu
            </button>
          </div>

          {isDropdownOpen && (
            <div className="flex flex-col lg:hidden mt-2">
              {[
                "Skywatching Home",
                "Eclipses",
                "What's Up",
                "Explore the Night Sky",
                "Night Sky Network",
                "Tips and Guides",
                "FAQ",
              ].map((link, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-sm font-medium py-2 px-4 bg-gray-700 hover:bg-gray-600 transition duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          )}
        </nav>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div className="w-full h-[400px]">
            <img
              src={carouselItems[currentSlide].image}
              alt={carouselItems[currentSlide].alt}
              className="w-full h-full object-cover transition-transform duration-500"
            />
          </div>

          {/* Caption - Centered Title */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h2 className="text-3xl font-bold hover:text-blue-400 transition duration-300">
              Welcome to Skywatcher
            </h2>
            <p className="text-gray-400">Tips, guides, and activities for skywatchers.</p>
          </div>


          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-4 bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition"
          >
            &#8249;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-4 bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition"
          >
            &#8250;
          </button>
        </div>
      </div>
      <Feature />
    </div>
  );
};

export default Skywatching;
