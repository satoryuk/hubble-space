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
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Title and Search Bar */}
      <div className="flex flex-col md:flex-row justify-center items-center mb-6 space-y-4 md:space-y-0 md:space-x-4"> 
        <p className="text-red-600 font-bold">Search Mission (1-9)</p>
        <div className="flex">
          <input
            type="text"
            placeholder="Search Mission..."
            className="p-2 rounded bg-white border border-gray-300 shadow"
          />
          <button className="ml-2 bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Search</button>
        </div>
      </div>

      {/* Grid for Missions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {missions.map((mission) => (
          <Link
            key={mission.id}
            to={`/science/mission-summarize/${mission.id}`} // Direct Link to Mission Summarize
            className="bg-white border border-gray-200 rounded-lg shadow-md"
          >
            <img
              src={mission.image}
              alt={mission.name}
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{mission.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpaceXmission;
