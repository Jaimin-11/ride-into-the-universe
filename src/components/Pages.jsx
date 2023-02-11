import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

import Homepage from './Homepage';
import Discover from './Discover/Discover';
import SolarSystem from './SolarSystem/SolarSystem';
import Apod from './APIapod/Apod';
import SpaceNews from './Discover/dSections/SpaceNews/SpaceNews';
import NewsInDetail from './Discover/dSections/SpaceNews/NewsInDetail';

function Pages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="discover" element={<Discover />} />
        <Route path="discover/space%20news/news%20in%20detail" element={<NewsInDetail />} />
        <Route path="discover/solar_system" element={<SolarSystem />} />
        <Route path="discover/apod" element={<Apod />} />
        <Route path="discover/space%20news" element={<SpaceNews />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default Pages;