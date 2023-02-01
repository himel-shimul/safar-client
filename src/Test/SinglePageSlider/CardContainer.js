import React from 'react';
import SliderCard from './SliderCard';

const CardContainer = (props) => {
    return (
        <div className="cards-container">
            {
                props.cards.map((card) => (
                    <SliderCard imgUrl={card.imgUrl} />
                ))
            }
        </div>
    );
};

export default CardContainer;