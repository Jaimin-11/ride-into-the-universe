import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

import Homepage from './Homepage';
import Discover from './Discover/Discover';
import SolarSystem from './SolarSystem/SolarSystem';
import Apod from './APIapod/Apod';

function Pages() {
  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="discover" element={<Discover />} />
        <Route path="solar_system" element={<SolarSystem />} />
        <Route path="apod" element={<Apod />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default Pages;