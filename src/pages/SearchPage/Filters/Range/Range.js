import React from "react";
import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";

const Range = ({ priceRangeResource }) => {
  const { setMin, setMax, refetch } = priceRangeResource;
  return (
    <div>
      {" "}
      <MultiRangeSlider
        min={50}
        max={200}
        onClick={({ min, max }) => {
          setMin(min);
          setMax(max);
          refetch();
        }}
      />
    </div>
  );
};

export default Range;
