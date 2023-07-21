import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CommunityPage from './pages/CommunityPage';
import SelectionPage from './pages/SelectionPage';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/community" element={<CommunityPage />} />
      <Route exact path="/registration" element={<SelectionPage />} />
      <Route exact path="/registration/drive" element={<CommunityPage />} />
      <Route exact path="/registration/heath" element={<CommunityPage />} />
    </Routes>
  );
};

export default App;
