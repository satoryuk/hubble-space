import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MissionSummarize = () => {
  const { id } = useParams(); // Get the mission id from the URL
  const [mission, setMission] = useState(null);

  // Fetch mission details using the id
  useEffect(() => {
    const fetchMissionDetails = async () => {
      try {
        const response = await fetch(`https://api.spacexdata.com/v4/launches/${id}`); // Fetch details for a specific mission
        const data = await response.json();
        setMission(data); // Set the fetched mission data
      } catch (error) {
        console.error("Error fetching mission details:", error);
      }
    };

    fetchMissionDetails();
  }, [id]); // Re-fetch the data whenever the id changes

  if (!mission) {
    return <div>Loading...</div>; // Display loading until data is fetched
  }

  return (
    <div className="p-8 max-w-screen-md mx-auto">
      <h1 className="text-4xl font-bold text-center">{mission.name}</h1>
      
      {/* Mission Image */}
      <img
        src={mission.links.patch.small || "https://via.placeholder.com/150"}
        alt={mission.name}
        className="mt-4 max-w-xs mx-auto object-contain"
      />
      
      {/* Mission Details */}
      <p className="mt-4 text-lg text-justify">{mission.details}</p>
      
      {/* Additional Mission Information */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Mission Information</h2>
        <ul className="list-disc pl-5">
          <li><strong>Launch Date:</strong> {new Date(mission.date_utc).toLocaleDateString()}</li>
          <li><strong>Success:</strong> {mission.success ? "Yes" : "No"}</li>
          
          {/* Rocket Information */}
          {mission.rocket && (
            <li>
              <strong>Rocket:</strong> {mission.rocket.name} ({mission.rocket.type})
            </li>
          )}

          {/* Payload Information */}
          {mission.payloads && mission.payloads.length > 0 && (
            <li>
              <strong>Payload:</strong> {mission.payloads.map((payload) => (
                <div key={payload.id}>
                  <p>{payload.name} - {payload.type}</p>
                  <p>{payload.orbit}</p>
                </div>
              ))}
            </li>
          )}

          {/* Links */}
          {mission.links && mission.links.article && (
            <li>
              <a href={mission.links.article} target="_blank" rel="noopener noreferrer" className="text-blue-600">Read more about the mission</a>
            </li>
          )}

          {mission.links && mission.links.webcast && (
            <li>
              <a href={mission.links.webcast} target="_blank" rel="noopener noreferrer" className="text-blue-600">Watch the launch video</a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MissionSummarize;
