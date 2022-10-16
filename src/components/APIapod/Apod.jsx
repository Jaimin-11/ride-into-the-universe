import React from 'react';
import { useState, useEffect } from 'react';
import Loading from '../ReusableStyles/Loading';

// Default current date data shown
// Floating form for custom input requests

function Apod() {
    const [isLoading, setIsLoading] = useState(true);
    const [apod, setApod] = useState();
    console.log("Entered here...");

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
        isLoading ? <Loading waitFor={"Astronomy Picture Of The Day"} /> :
            <div>
                {console.log(apod)}
                <img src={apod.url} alt="Image not avilable" />
                <h3>{apod.title}</h3>
                <p>Date📅: {apod.date}</p>
                <p>{apod.explanation}</p>
            </div>
    );
}

export default Apod;