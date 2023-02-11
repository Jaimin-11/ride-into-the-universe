import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './Header.style.css';

function Navbar() {

  const location = useLocation();

  setTimeout(() => {
    let currentPath = location.pathname;
    if (currentPath === "/") document.getElementById('home').className = "nav-link-active";
    if (currentPath !== "/") document.getElementById(location.pathname.split("/")[1]).className = "nav-link-active";
  }, 100);

  return (
    <nav className='nav-container'>
      <li><NavLink id="home" className='nav-link' to="/">HOME</NavLink></li>
      <li><NavLink id="discover" className='nav-link' to="/discover">DISCOVER</NavLink></li>
    </nav>
  );
}

export default Navbar;