import React from 'react';

import './Discover.style.css';

function FilterBy() {
    return (
        <div className="side-section-card-container">
            <p>Filter by...</p>
            <ul>
                <li>
                    <input className="input-checkbox" type="checkbox" name="filterBy" id="filter1" value="filter1" />
                    Filter-1
                </li>
                <li>
                    <input className="input-checkbox" type="checkbox" name="filterBy" id="filter2" value="filter2" />
                    Filter-2
                </li>
                <li>
                    <input className="input-checkbox" type="checkbox" name="filterBy" id="filter3" value="filter3" />
                    Filter-3
                </li>
            </ul>
        </div>
    );
}

export default FilterBy;