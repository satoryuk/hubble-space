import { Link } from 'react-router-dom';

const SpaceXmission = () => {
  const missions = [
    { name: "FalconSat", id: 1, image: "https://via.placeholder.com/150" },
    { name: "DemoSat", id: 2, image: "https://via.placeholder.com/150" },
    { name: "Trailblazer", id: 3, image: "https://via.placeholder.com/150" },
    { name: "RaxilSat", id: 4, image: "https://via.placeholder.com/150" },
    { name: "Flight Test 1", id: 5, image: "https://via.placeholder.com/150" },
    { name: "COTS 1", id: 6, image: "https://via.placeholder.com/150" },
    { name: "Falcon 9", id: 7, image: "https://via.placeholder.com/150" },
    { name: "Crew Demo", id: 8, image: "https://via.placeholder.com/150" },
  ];

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
          />
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
            Search
          </button>
        </div>
      </div>

      {/* Grid for Missions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {missions.map((mission) => (
          <Link
            key={mission.id}
            to={`/science/mission-summarize/${mission.id}`} // Direct Link to Mission Summarize
            className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <img
              src={mission.image}
              alt={mission.name}
              className="rounded-t-xl w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800">{mission.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpaceXmission;
