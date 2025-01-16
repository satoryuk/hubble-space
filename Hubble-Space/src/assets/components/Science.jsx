import React from 'react';
import { TiArrowRightThick } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

// Define your image URLs as constants
const apodImage = 'https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_640.jpg'; 
const spacexImage = 'https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_640.jpg';
const nasaImage = 'https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_640.jpg'; 
const skywatchingImage = 'https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_640.jpg'; 

const Science = () => {
  const navigate = useNavigate(); // Use the useNavigate hook

  const scienceData = [
    { 
      id: 1, 
      title: "APOD", 
      image: apodImage, 
      link: "/science/apod" // Link to APOD detail page
    },               
    { 
      id: 2, 
      title: "SpaceX Mission", 
      image: spacexImage, 
      link: "/science/spacex-mission" // Link to SpaceX Mission detail page
    },  
    { 
      id: 3, 
      title: "People of NASA Science", 
      image: nasaImage, 
      link: "/science/people-of-nasa" // Link to People of NASA detail page
    }, 
    { 
      id: 4, 
      title: "Skywatching", 
      image: skywatchingImage, 
      link: "/science/skywatching" // Link to Skywatching detail page
    }, 
  ];

  const handleCardClick = (link) => {
    navigate(link); // Navigate to the corresponding route
  };

  return (
    <div className="bg-white py-12 px-8">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-4xl font-bold text-gray-800">Science</h2>
        <div className="flex items-center space-x-2">
          <a href="/more-news" className="text-black font-bold hover:underline">
            Discover more
          </a>
          <span className="w-6 h-6 flex items-center justify-center border-4 border-red-500 text-red-500 rounded-full text-sm">
            <TiArrowRightThick />
          </span>
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {scienceData.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCardClick(item.link)} // Use onClick to navigate
            className="relative group bg-black text-white overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[400px] object-cover transition-opacity duration-300 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
              <h2 className="text-lg font-semibold">{item.title}</h2>
            </div>
            <div className="absolute bottom-4 right-4 bg-red-500 w-6 h-6 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Science;
