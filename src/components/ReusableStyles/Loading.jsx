import React from 'react';

import './Loading.css';

function Loading(props) {
    return (
        <>
            <div className='loading-div'></div>
            <p>{props.waitFor}...</p>
        </>
    );
}

export default Loading;