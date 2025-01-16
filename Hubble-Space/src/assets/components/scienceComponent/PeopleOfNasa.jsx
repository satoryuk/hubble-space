import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Import the hamburger icon

// Dummy profiles data
const PeopleOfNasa = () => {
  const profiles = [
    { name: "Dr. Pablo Saz Parkinson", title: "Astrophysics Data Analysis Program", id: 1, image: "https://via.placeholder.com/150" },
    { name: "Ray Wheeler", title: "Senior Scientist", id: 2, image: "https://www.ihc2022.org/wp-content/uploads/2021/12/S8-Keynote-Ray-Wheeler-April-2017-A-scaled.jpg" },
    { name: "Jason Williams", title: "Physicist", id: 3, image: "https://via.placeholder.com/150" },
    { name: "Diana Ly", title: "Astrophysicist", id: 4, image: "https://via.placeholder.com/150" },
    { name: "Kevin Murphy", title: "Quantum Scientist", id: 5, image: "https://via.placeholder.com/150" },
    { name: "Aaron Burton", title: "Engineer", id: 6, image: "https://via.placeholder.com/150" },
  ];

  const [showDropdowns, setShowDropdowns] = useState([false, false, false, false]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (index) => {
    setShowDropdowns((prevState) =>
      prevState.map((item, i) => (i === index ? !item : item))
    );
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Define dropdown options here
  const dropdownOptions = [
    ["Option 1", "Option 2", "Option 3"], // Options for Science Topic
    ["Option 1", "Option 2", "Option 3"], // Options for For Everyone
    ["Option 1", "Option 2", "Option 3"], // Options for For Researchers
    ["Option 1", "Option 2", "Option 3"], // Options for About NASA Science
  ];

  // Carousel state and logic
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
  "https://image.futurezone.at/images/cfs_landscape_1864w_1049h/6376623/bb068460-ee60-4b5a-8c81-1584c0035e63_spacex_i4_ceit_testdrive_dsc_3070_jpg.jpg",
  "https://th.bing.com/th/id/R.3a8d4c6d26d0e09e3f0f7055df369b6a?rik=8Fl0aCMe8VIzcA&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/R.a9c90ceba0bfcf28e0f427d26ebba33f?rik=kRittPZh0i98Aw&riu=http%3a%2f%2fwww.sunisthefuture.net%2fwp-content%2fuploads%2f2012%2f08%2fNASA-engineers-of-Mars-Science-Lab-MSL-team-at-Jet-Propulsion-Lab-celebrating-Curiosity-Rover-landing1.jpg&ehk=flmpkemiFRGcg1bnYDTkwIpp9b3Gwk0FzZyKnCKe%2fXw%3d&risl=&pid=ImgRaw&r=0",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change the slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      {/* <Navbar /> */}

      {/* Navbar 2 */}
      <div>
        <nav className="bg-gray-900 p-2">
          {/* Mobile Menu Toggle Button */}
          <div className="flex justify-center sm:hidden">
               <button onClick={toggleMobileMenu} className="text-white flex items-center">
                 <FontAwesomeIcon icon={faBars} className="mr-2" />
                 Menu
               </button>
          </div>


          {/* Dropdown Navbar for Mobile */}
          {isMobileMenuOpen && (
            <div className="flex flex-col items-center space-y-2 mt-2 sm:hidden">
              <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                Science Mission   </button>
              {["Science Topic", "For Everyone", "For Researchers", "About NASA Science"].map((label, index) => (
                <div key={index} className="relative group">
                  <button
                    className="flex items-center space-x-2 px-4 py-2 text-white hover:text-gray-300 focus:outline-none"
                    onClick={() => toggleDropdown(index)}
                  >
                    <span>{label}</span>
                    <HiOutlineArrowCircleDown />
                  </button>
                  {showDropdowns[index] && (
                    <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {dropdownOptions[index].map((option, optionIndex) => (
                          <button
                            key={optionIndex}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                English
              </button>
              <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">
                Kids
              </button>
            </div>
          )}

          {/* Horizontal Navbar for larger screens */}
          <div className="hidden sm:flex justify-center items-center space-x-4">
            <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Science Mission</button>
            {["Science Topic", "For Everyone", "For Researchers", "About NASA Science"].map((label, index) => (
              <div key={index} className="relative group">
                <button
                  className="flex items-center space-x-2 px-4 py-2 text-white hover:text-gray-300 focus:outline-none"
                  onClick={() => toggleDropdown(index)}
                >
                  <span>{label}</span>
                  <HiOutlineArrowCircleDown />
                </button>
                {showDropdowns[index] && (
                  <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {dropdownOptions[index].map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div>
              <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 mx-2">English</button>
              <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300 mx-2">Kids</button>
            </div>
          </div>
        </nav>
      </div>


      {/* Carousel Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        {/* Slides */}
        <div className="absolute inset-0 w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Text Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-gradient-to-b from-transparent to-black">
          <h1 className="text-center text-white text-4xl font-bold md:text-6xl tracking-wide fadeIn-animation">
            People of NASA Science
          </h1>
          <p className="text-center mt-4 text-white text-lg md:text-xl text-center fadeIn-animation delay-200">
            Meet the brilliant minds shaping the future of space exploration.
          </p>
        </div>

         {/* Gradient Overlay */}
         <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black"></div>
      </section>

      {/* Main Content Section */}
      <div className="bg-gray-100 min-h-screen p-6 flex flex-col lg:flex-row">
        {/* Filters Section */}
        <div className="w-full lg:w-1/4 p-4">
          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <form className="max-w-sm mx-auto">
            <label htmlFor="filters" className="block mb-2 text-sm font-medium text-gray-900">
              Select an option
            </label>
            <select
              id="filters"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="">Choose a filter</option>
              <option value="citizen-science">Citizen Science</option>
              <option value="earth-moon">Earth's Moon</option>
              <option value="juno">Juno</option>
              <option value="people-of-nasa">People of NASA</option>
              <option value="science-leadership">Science Leadership</option>
              <option value="climate-change">Climate Change</option>
            </select>
          </form>
        </div>

        {/* Profiles Grid */}
        <div className="w-full lg:w-3/4 p-4">
          {/* Search Bar */}
          <div className="flex justify-center mb-4">
            <input
              type="text"
              placeholder="Search PEOPLE of NASA Science..."
              className="p-2 rounded bg-white border border-gray-300 w-full max-w-md shadow"
            />
          </div>

          {/* Profiles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {profiles.map((profile) => (
              <div key={profile.id} className="bg-white rounded-lg border border-gray-200 shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg">
                <img src={profile.image} alt={profile.name} className="rounded w-full h-32 object-cover mb-4" />
                <h2 className="text-xl font-bold">{profile.name}</h2>
                <p className="text-gray-600">{profile.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleOfNasa;
