import React from 'react';
import { NavLink } from 'react-router-dom';

import './Discover.style.css';

function TopPicks() {
    return (
        <div className="side-section-card-container">
            <p>Top-picks📈</p>
            <ol>
                <li><NavLink className="top-picks" to="/discover">Topic-1</NavLink></li>
                <li><NavLink className="top-picks" to="/discover">Topic-2</NavLink></li>
                <li><NavLink className="top-picks" to="/discover">Topic-3</NavLink></li>
                <li><NavLink className="top-picks" to="/discover">Topic-4</NavLink></li>
                <li><NavLink className="top-picks" to="/discover">Topic-5</NavLink></li>
            </ol>
        </div>
    );
}

export default TopPicks;