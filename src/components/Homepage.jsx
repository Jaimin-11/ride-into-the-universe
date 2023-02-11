import React from 'react';

import './Homepage.style.css';

function Homepage() {

  setTimeout(() => {
    document.getElementsByClassName("homepage-container")[0].className = "homepage-container";
  }, 50);

  return (
    <div className='homepage-container'>
      Homepage
    </div>
  );
}

export default Homepage;