import React, { useContext, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { MdLocationPin } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import "./HeaderSearch.css";
import { SearchContext } from "../../../contexts/SearchProvider";
import { useNavigate } from "react-router-dom";

const HeaderSearch = () => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);


  const handleSearch = () => {
    
    localStorage.setItem("destination", JSON.stringify(destination));
    localStorage.setItem("days", JSON.stringify(days));
    localStorage.setItem("options", JSON.stringify(options));
    dispatch({type: 'NEW_SEARCH', payload: (destination, days, options)});
    navigate("/searchpage", { state: { destination, dates, options } });
  };

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  // search location
  // const handleSearch = (e) => {
  //   const location = e.target.value;
  //   console.log(location, date[0].startDate, date[0].endDate);
  // };
  return (
    <div>

      <div className=" mx-auto px-6 md:h-8 rounded-lg bg-white flex justify-center sm:mx-4 md:justify-around items-center lg:py-16 relative md:mt-16 mt-56 mb-40">
        <div className="w-10/12 md:px-6 p-8 mx-auto md:h-8 rounded-lg bg-white md:flex justify-between sm:mx-4 md:justify-around items-center lg:py-16 absolute  border-2 shadow-xl shadow-blue-100 border-slate-200">
          <div className="flex items-center gap-2 md:mb-0 mb-4">
            <MdLocationPin className="text-3xl text-orange-500" />
            <input
              name="name"
              type="text"
              placeholder="Where are you going?"
              className="p-2 border outline-none rounded-full text-xs lg:text-lg"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <h1 className="text-5xl text-blue-200 md:mb-0 mb-4 md:block hidden ">|</h1>
          <div className="md:mb-0 mb-4">
            <span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDates([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dates}
                  className="absolute md:top-full top-40 mx-auto z-50"
                />
              )}
            </span>
          </div>
          <span
            onClick={() => setOpenDate(!openDate)}
            className=" cursor-pointer text-xs lg:text-lg "
          >
            <span className="flex items-center gap-3 md:mb-0 mb-4">
              <BsCalendar3 className="text-2xl text-blue-500" />
              {`${format(dates[0].startDate, "MM/dd/yyyy")} - ${format(
                dates[0].endDate,
                "MM/dd/yyyy"
              )}`}
            </span>
          </span>
          <h1 className="text-5xl text-blue-200 md:mb-0 mb-4 md:block hidden">|</h1>
          <div className="headerSearchItem flex items-center gap-3 md:mb-0 mb-4">
            <FaRegUser className="text-2xl text-blue-500" />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="headerSearchText"
            >
              {options.adult > 1
                ? `${options.adult} adults · ${options.children} children · ${options.room} room`
                : `${options.adult} adult · ${options.children} children · ${options.room} room`}
            </span>

            {openOptions && (
              <div className="options mt-4">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.adult <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.children <= 0}
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.room <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <h1 className="text-5xl text-blue-200 md:mb-0 mb-4 md:block hidden">|</h1>
          <input
            type="submit"
            onClick={handleSearch}
            value="Search"
            className="px-2 md:px-6 w-full md:w-auto bg-blue-400 hover:bg-blue-500 text-white lg:text-lg md:py-2 py-1 md:rounded-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;