import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SpaceXmission = () => {
  const [missions, setMissions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch the mission data from the API
  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v4/launches'); // Example SpaceX API endpoint
        const data = await response.json();
        setMissions(data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching mission data:", error);
      }
    };

    fetchMissions();
  }, []); // Empty dependency array to run this only once when the component mounts

  // Filter missions based on search query
  const filteredMissions = missions.filter((mission) =>
    mission.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen p-8 flex flex-col items-center justify-center">
      {/* Title and Search Bar */}
      <div className="flex flex-col items-center mb-8 space-y-4">
        <p className="text-3xl font-semibold text-gray-700">Mission List</p>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search Mission..."
            className="p-3 rounded-lg bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          />
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
            Search
          </button>
        </div>
      </div>

      {/* Grid for Missions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMissions.length > 0 ? (
          filteredMissions.map((mission) => (
            <Link
              key={mission.id}
              to={`/science/mission-summarize/${mission.id}`} // Direct Link to Mission Summarize
              className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <img
                src={mission.links.patch.small || "https://via.placeholder.com/150"} // Use mission image if available
                alt={mission.name}
                className="rounded-t-xl w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800">{mission.name}</h2>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-lg text-gray-600">No missions found.</p> // Show a message if no missions are found
        )}
      </div>
    </div>
  );
};

export default SpaceXmission;
