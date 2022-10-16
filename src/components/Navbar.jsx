import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './Header.style.css';

function Navbar() {

  const location = useLocation();

  setTimeout(() => {
    let currentPath = location.pathname;
    if (currentPath !== "/")document.getElementById(location.pathname.slice(1)).className +=" " + "nav-link-active";
  }, 50);

  return (
    <nav className='nav-container'>
      <li><NavLink id="discover" className='nav-link' to="/discover">DISCOVER</NavLink></li>
      <li><NavLink id="solar_system" className='nav-link' to="/solar_system">SOLAR SYSTEM</NavLink></li>
      <li><NavLink id="apod" className='nav-link' to="/apod">APOD</NavLink></li>
    </nav>
  );
}

export default Navbar;