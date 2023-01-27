import React from 'react';
// import Test from '../../../../Test/Test';
import SingleProductCard from './SingleProductCard';

const SearchProductCard = () => {
  return (
    <div className="w-full bg-base-100 shadow-xl">
      {/* <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
      <h2 className="p-2 text-xs text-gray-400">COLLECTION</h2>
      <h2 className="p-2 mb-4">Best of Mui Tour</h2>
      <div className='flex justify-between px-3'>
        <p className='text-gray-400'>(1200 Reviews)</p>
        <p className='line-through text-gray-400'>$135</p>
      </div>
      <div className='flex justify-between my-2 px-3 pb-2'>
        <p className='text-sm text-blue-600'>Save upto 50% off</p>
        <p className='text-xl'>$105</p>
      </div> */}

      {/* single product card */}
      <SingleProductCard />
    </div>
  );
};

export default SearchProductCard;