import React from 'react';
import './MapItems.css'
import {AiFillStar} from 'react-icons/ai'

function MapItems({ counter,mentorImage, title, field, techInfo, mentor, image, stars}) {
    return (
        <div className="map__item">
            <div className="map__itemWrapper">
                <div className="map_itemHeader">
                    <img src={image} alt="" />
                    <div className="map__itemInfo">
                        <h2>{title}</h2>
                        <h3>{field}</h3>
                        <div className="ratings">
                            <div className="rating__stars">
                                {
                                    Array(stars).fill().map((i,inx) => (<AiFillStar key={inx}/>))
                                }
                            </div>
                            <span>{stars}.0</span>
                        </div>
                    </div>
                </div>
                <div className="map_itemBody">
                    <p >{techInfo}</p>
                    <div className="map_itemMentor">
                        <img src={mentorImage} alt="" />
                        <div>
                            <h3>{mentor}</h3>
                            <p>Mentor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapItems
