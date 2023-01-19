import React from "react";
import bgImg from "../../assets/bgImgSearch.png";

const SearchBanner = () => {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPositionY: "center",
        }}
        className="p-8 h-40 rounded text-white border w-full mx-auto my-6"
      >
        <h2 className="text-2xl font-bold">Hotels</h2>
        <p>120 Hotels available in this area</p>
      </div>
    </div>
  );
};

export default SearchBanner;
