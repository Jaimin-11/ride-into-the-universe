import { React, useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from './Navbar';

import './Header.style.css';

import { ReactComponent as RightArrowIcon } from '../assets/Icons/RightArrowIcon.svg';
import { ReactComponent as SearchIcon } from '../assets/Icons/SearchIcon.svg';
import { ReactComponent as CloseIconWhiteTopRoundedBG } from '../assets/Icons/CloseIconWhiteTopRoundedBG.svg';
import { ReactComponent as UserIcon } from '../assets/Icons/UserIcon.svg';

function Header() {

  const [isSearchBar, setIsSearchBar] = useState(false);

  const searchIconClick = () => {
    // toggling the search-bar-wide class to display and change width of input(search)-bar
    document.getElementById("SearchBar").classList.toggle("search-bar-wide");
    document.getElementById("SearchBox").classList.toggle("search-box-opened");
    if (isSearchBar === true) {
      // toggling the display none-block for go arrow icon
      document.getElementById("GoArrowIcon").style.display = "none";
      setIsSearchBar(false)
    }
    else {
      // toggling the display none-block for go arrow icon
      document.getElementById("GoArrowIcon").style.display = "block";
      setIsSearchBar(true)
    }
  }

  return (
    <Fragment>
      <div className='header-container'>
        <NavLink className="main-heading" to="/"><span>RIDE INTO THE UNIVERSE</span></NavLink>
        <Navbar />  {/* Custome react component Navbar */}
        <div className="search-container">

          <span className="search-icon" onClick={searchIconClick}>
            {/* if isSearchBar is true means search icon will turn into close icon along with opened inputbar*/}
            {isSearchBar ? <CloseIconWhiteTopRoundedBG /> : <SearchIcon />}
          </span>
        </div>
        <NavLink to="/user_account"><UserIcon className="user-icon-svg" /></NavLink>
      </div>
      <div id="SearchBox" className='search-box-closed'>
        <input id="SearchBar" className="search-bar-collapsed" type="text" name="searchText" placeholder="Search here..." />
        <span id="GoArrowIcon"><RightArrowIcon /></span>
      </div>
    </Fragment>
  );
}

export default Header;