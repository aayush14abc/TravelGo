import React from 'react';
import CardItem from "./CardItem";
import './Cards.css'
function Cards() {
    return (
        <div className='cards'>
            <h1 > Check out these Epic Places</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={require('../images/beach1.jpg')}
                                  text="Explore the beaches of Mauritius with bois"
                                  label="Adventure" path='/services'
                        />
                        <CardItem src={require('../images/castle.jpg')}
                                  text="Enjoy the County Castles of Scotland"
                                  label="County" path='/services'
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItem src={require('../images/jungle.jpg')}
                                  text="Explore Deep Jungles"
                                  label="Jungle" path='/services'/>
                        <CardItem src={require('../images/mountain.jpg')}
                                  text="Go deeper than anyone in the open sea"
                                  label="Deep Sea" path='/services'/>
                        <CardItem src={require('../images/girl.jpg')}
                                  text="Discover your self and live your best life"
                                  label="Discover" path='/services'/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;