import React from 'react';

import './Loading.style.css';

function Loading(props) {
    return (
        <div className='loading-div'>
            <span className='l-rotate'></span>
            <p>Loading {props.waitFor}...</p>
        </div>
    );
}

export default Loading;