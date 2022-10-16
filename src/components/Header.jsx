import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from './Navbar';

import './Header.style.css';

import { ReactComponent as GoArrowIcon } from '../assets/Icons/GoArrowIcon.svg';
import { ReactComponent as SearchIcon } from '../assets/Icons/SearchIcon.svg';
import { ReactComponent as CloseIcon } from '../assets/Icons/CloseIcon.svg';
import { ReactComponent as UserIcon } from '../assets/Icons/UserIcon.svg';

function Header() {
  
  const [isSearchBar, setIsSearchBar] = useState(false); 

  const searchIconClick = () => {
    // toggling the search-bar-wide class to display and change width of input(search)-bar
    document.getElementById("SearchBar").classList.toggle("search-bar-wide");
    if(isSearchBar===true){
      // toggling the display none-block for go arrow icon
      document.getElementById("GoArrowIcon").style.display = "none";
      setIsSearchBar(false)
    }
    else{
      // toggling the display none-block for go arrow icon
      document.getElementById("GoArrowIcon").style.display = "block";
      setIsSearchBar(true)
    }
  }

  return (
    <div className='header-container'>
        <NavLink className="main-heading" to="/"><span>RIDE INTO THE UNIVERSE</span></NavLink>
        <div className="search-container">
          <input id="SearchBar" className="search-bar-collapsed" type="text" name="searchText" placeholder="Search here..."/>
          <span id="GoArrowIcon"><GoArrowIcon /></span>
          <span className="search-icon" onClick={searchIconClick}>
            {/* if isSearchBar is true means search icon will turn into close icon along with opend inputbar*/}
            {isSearchBar? <CloseIcon />:<SearchIcon />}
          </span>
        </div>
        <Navbar />
        <NavLink to="/user_account"><UserIcon className="user-icon-svg" /></NavLink>
    </div>
  );
}

export default Header;