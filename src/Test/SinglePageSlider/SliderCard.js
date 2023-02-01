import React from 'react';

const SliderCard = (props) => {
    return (
        <div className="slider-card">
            <img className='w-full h-full' src={props.imgUrl}
                alt={props.alt || 'Image'} />
        </div>
    );
};

export default SliderCard;