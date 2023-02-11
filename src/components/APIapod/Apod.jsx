import React from 'react';
import { useState, useEffect } from 'react';
import Loading from '../Reusables/Loading';
import PathLocation from '../Reusables/PathLocation';

import "./Apod.style.css";

// Default current date data shown
// Floating form for custom input requests

function Apod() {
    const [isLoading, setIsLoading] = useState(true);
    const [apod, setApod] = useState();

    const getData = async () => {
        try {
            const response = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_API_KEY}`
            );
            const data = await response.json();
            setApod(data);
            setIsLoading(false);
        }
        catch (err) {
            console.log("❌❌❌", err);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        isLoading ?
            <Loading waitFor={"Astronomy Picture Of The Day"} />
            :
            <div className='apod-container'>
                <PathLocation />
                {console.log(apod)}
                <div className='apod-info'>
                    <div className='apod-image-container'>
                        <img src={apod.url} alt="Image not avilable" />
                        {apod.hdurl !== "" ? <a href={apod.hdurl} target="_blank">Click to see HD image🔗</a> : ''}
                    </div>
                    <div className='apod-i-box'>
                        <h3 className='apod-i-heading'>{apod.title}</h3>
                        <p className='apod-i-date'>Date📅: {apod.date}</p>
                        <p className='apod-i-explanation'>{apod.explanation}</p>
                    </div>
                </div>
            </div>
    );
}

export default Apod;