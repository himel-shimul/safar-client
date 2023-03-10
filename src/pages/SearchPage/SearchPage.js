import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Navbar from "../Shared/Navbar/Navbar";
import Filters from "./Filters/Filters";
import SearchBanner from "./SearchBanner";
import SearchProducts from "./SearchProducts/SearchProducts";
import guide from '../../assets/safar logo/1.png'

const SearchPage = () => {
  // const destination = useLoaderData();
  // console.log(destination);

  const location = useLocation();
  const [destination, setDestination] = useState(location.state?.destination);
  const [dates, setDates] = useState(location.state?.dates);
  const [options, setOptions] = useState(location.state?.options);

  const [min, setMin] = useState(1);
  const [max, setMax] = useState(999);
  useTitle(destination + "'s" + " "+ "Hotels")

  const {
    data: allHotels,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch(
        `https://safar-server-nasar06.vercel.app/search/hotels?city=${destination}&min=${min}&max=${max}`,
        {}
      );
      const data = await res.json();
      return data;
    },
  });
  const priceRangeResource = { refetch, setMin, setMax };
  // const info = {dates,options};
  console.log(allHotels)
  return (
    <div style={{ backgroundImage: `url(${guide})` }} className="bg-cover">
      <Navbar/>
      <div className="w-full mx-auto">
      <div>
        {/* <SearchBanner allHotels={allHotels}></SearchBanner> */}
      </div>
      <div className="lg:flex">
        {/* <Filters priceRangeResource={priceRangeResource}></Filters> */}
        <SearchProducts
          allHotels={allHotels}
          isLoading={isLoading}
        ></SearchProducts>
      </div>
    </div>
    </div>
  );
};

export default SearchPage;
