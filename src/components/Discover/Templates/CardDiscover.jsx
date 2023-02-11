import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as RightArrowIcon } from "../../../assets/Icons/RightArrowIcon.svg";

import "./CardDiscover.style.css";

function CardDiscover(props) {

    return (
        <div className='card-container'>
            <img className="card-thumbnail-image"
                src={props.cardImage}
                alt="Card Image" />
            <p className='card-heading'>{props.cardHeading}</p>
            <p className="card-description">{props.cardDescription}</p>
            <button className="button-explore">
                <Link to={props.urlPath}>Explore<RightArrowIcon /></Link>
            </button>
        </div>
    );
}

export default CardDiscover;