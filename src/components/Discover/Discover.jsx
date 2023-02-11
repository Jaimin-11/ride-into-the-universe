import React from 'react';
import PathLocation from '../Reusables/PathLocation';

import "./Discover.style.css";

import Thumb_default from "../../assets/Images/Thumb_default.jpg";
import Thumb_mars from "../../assets/Images/Thumb_mars.jpg";
import Thumb_solar_system from "../../assets/Images/Thumb_solar_system.jpg";
import Thumb_apod from "../../assets/Images/Thumb_apod.jpg";
import Thumb_news from "../../assets/Images/Thumb_news.jpg";
import CardDiscover from './Templates/CardDiscover';

function Discover() {

  const cardsList = [
    {
      urlPath: '/discover/solar_system',
      cardImage: Thumb_solar_system,
      cardHeading: "Solar System",
      cardDescription: "Gives information surveyed by the Solar System OpenData Project. Provided by The Solar System."
    },
    {
      urlPath: '/discover/apod',
      cardImage: Thumb_apod,
      cardHeading: "APOD",
      cardDescription: "Astronomy Picture Of the Day delivers a unique astronomy picture every single day. Provided by NASA."
    },
    {
      urlPath: '/discover/mars',
      cardImage: Thumb_mars,
      cardHeading: "Mars",
      cardDescription: "summary, Lorem ipsum dolor sit amet consectetur adipisicing elit.Labore magni"
    },
    {
      urlPath: '/discover/space%20news',
      cardImage: Thumb_news,
      cardHeading: "News",
      cardDescription: "summary, Lorem ipsum dolor sit amet consectetur adipisicing elit.Labore magni"
    },
    {
      urlPath: '#',
      cardImage: Thumb_default,
      cardHeading: "Heading",
      cardDescription: "summary, Lorem ipsum dolor sit amet consectetur adipisicing elit.Labore magni"
    }
  ]

  return (
    <div id="discover">
      <PathLocation />
      <div className='discover-container'>
        {
          cardsList.map((card, index) => (
            <CardDiscover
              key={"card-" + (index + 1)}
              urlPath={card.urlPath}
              cardImage={card.cardImage}
              cardHeading={card.cardHeading}
              cardDescription={card.cardDescription} />
          ))
        }
      </div>
    </div>
  );
}

export default Discover;