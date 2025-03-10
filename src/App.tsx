import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Apply from './pages/Apply';
import Programs from './pages/Programs';
import Startups from './pages/Startups';
import Mentors from './pages/Mentors';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/bsic" element={<Home />} />
        <Route path="/bsic/apply" element={<Apply />} />
        <Route path="/bsic/programs" element={<Programs />} />
        <Route path="/bsic/startups" element={<Startups />} />
        <Route path="/bsic/mentors" element={<Mentors />} />
      </Routes>
    </div>
  );
}

export default App;