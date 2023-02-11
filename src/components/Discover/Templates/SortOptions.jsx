import React from 'react';

import "./Discover.style.css";

function SortOptions() {
  return (
    <div className="side-section-card-container">
        <p>Sort by...</p>
        <ul>
            <li>
                <input className="input-radio" id="dateOfPubishment" type="radio" name="sortBy" value="dateOfPublishment" />
                Date of publishment
            </li>
            <li>
                <input className="input-radio" id="mostViewed" type="radio" name="sortBy" value="mostViewed" />
                Most viewed
            </li>
        </ul>
    </div>
  );
}

export default SortOptions;