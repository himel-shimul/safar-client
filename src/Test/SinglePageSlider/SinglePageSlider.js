import React from 'react';
import CardContainer from './CardContainer';
import './SinglePageSlider.css'

const SinglePageSlider = () => {

    const cardsData = [
        { id: 1, imgUrl: 'https://unsplash.it/200/200' },
        { id: 2, imgUrl: 'https://unsplash.it/201/200' },
        { id: 3, imgUrl: 'https://unsplash.it/200/201' },
        { id: 4, imgUrl: 'https://unsplash.it/201/201' },
        { id: 5, imgUrl: 'https://unsplash.it/202/200' },
        { id: 6, imgUrl: 'https://unsplash.it/200/199' },
        { id: 7, imgUrl: 'https://unsplash.it/199/199' },
        { id: 8, imgUrl: 'https://unsplash.it/199/200' },
        { id: 9, imgUrl: 'https://unsplash.it/200/198' },
        { id: 10, imgUrl: 'https://unsplash.it/198/199' },
    ]
    return (
        <div className="container">
            <CardContainer cards={cardsData} />
        </div>
    );
};

export default SinglePageSlider;