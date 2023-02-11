import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { ReactComponent as LeftArrowIcon } from '../../assets/Icons/LeftArrowIcon.svg';

import './PathLocation.style.css';

function PathLocation() {

  const location = useLocation();
  // stoting tabs in arrayList
  const pathTabs = location.pathname.split("/").slice(1);
  // poping and storing last or current tab in variable
  const currentTab = pathTabs.pop();
  // length of pathTabs arrayList
  const pathTabCount = pathTabs.length;
  const goBack = () => {
    history.back();
  }

  return (
    <div id="PathHistory">
      <span className="tooltip">
        {/* going back to previous tab on path(not in history) */}
        {/* if no previous tab there(pathTabCount===1), then back to home page */}
        <NavLink to={
          pathTabCount===1?
            "/"+pathTabs[pathTabCount-1]
            :
            "/home"
          }>
          <LeftArrowIcon />
        </NavLink>
        <span className='tooltip-text'>Go back</span>
      </span>
      {pathTabs.map((tab, key) => (
        // printing each tabs(except last one) in arrayList as a link and adding '/'
        <React.Fragment key={key}>
          <NavLink className="path-tab-link" to={"/" + tab}>{tab}</NavLink>
          /
        </React.Fragment>
      ))}
      {/* Printing last(current) tab */}
      <span className='path-current-tab'>
        {currentTab.replace("%20", " ")}
      </span>
    </div>
  );
}

export default PathLocation;