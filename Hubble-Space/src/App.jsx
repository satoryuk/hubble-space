import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import LandingPage from './assets/components/LandingPage';
import Science from './assets/components/Science';
import Apod from './assets/components/scienceComponent/Apod';
import SpaceXmission from './assets/components/scienceComponent/SpaceXmission';
import MissionSummarize from './assets/components/scienceComponent/MissionSummarize'; // Added
import PeopleOfNasa from './assets/components/scienceComponent/PeopleOfNasa';
import ApodDetail from './assets/components/scienceComponent/ApodDetail';
import Footer from './assets/components/Footer';
import './index.css';
import FeatureNews from './assets/components/FeaturedNews';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/science" element={<Science />} />
          <Route path="/science/apod" element={<Apod />} />
          <Route path="/science/apod-detail" element={<ApodDetail />} />
          <Route path="/science/spacex-mission" element={<SpaceXmission />} />
          <Route path="/science/mission-summarize/:id" element={<MissionSummarize />} /> {/* Dynamic Route */}
          <Route path="/science/people-of-nasa" element={<PeopleOfNasa />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
