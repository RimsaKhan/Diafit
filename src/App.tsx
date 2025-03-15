import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Profile from './pages/Profile';
import DietPlanner from './pages/DietPlanner';
import Dashboard from './pages/Dashboard';
import WaterTracker from './pages/WaterTracker';
import ExerciseVideos from './pages/ExerciseVideos';

import MedicalInformation from './pages/MedicalInformation';
import AiAssistant from './pages/AiAssistant';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
           <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/diet-planner" element={<DietPlanner />} />
          <Route path="/water-tracker" element={<WaterTracker />} />
          <Route path="/exercise-videos" element={<ExerciseVideos />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/medicalInformation" element={<MedicalInformation />} />
          <Route path="/Ai-Assistant" element={< AiAssistant/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;