import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import './DashboardNav.css'
import SellerSubmenu from "./SellerSubMenu";

const DashboardNab = () => {

  const [sellerMenu, setSellerMenu] = useState(false);

  const handleOpenSellerMenu = () => {
    setSellerMenu(true)
  }
  const handleCloseSellerMenu = () => {
    setSellerMenu(false)
  }
  return (
    <div style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/white-snow-hill-snow-mountain-background-with-cloudy-sky_31949-7.jpg?w=2000')` }} className="dashboard-nav fixed w-full flex items-center justify-between  text-black">
      <div className="flex items-center justify-evenly md:justify-start ml-0 md:ml-2 w-14 md:w-64">
        {/* <img
          className="w-7 h-7 md:w-10 md:h-10 md:mr-2 rounded-md overflow-hidden"
          src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
          alt=""
        /> */}
        <span className="hidden mx-20 font-bold text-xl hover:text-blue-700 md:block"><Link to='/'>Safar</Link></span>
      </div>
      <div className="flex justify-between items-center h-14 header-right">
        <div className="rounded flex items-center w-full max-w-xl mr-4 shadow-sm">
          {/* <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            className="w-full pl-3 text-sm text-white outline-none focus:outline-none bg-transparent"
          /> */}
        </div>
        <ul className="flex items-center">
          <li className="flex mr-6">
            <h1 className="font-bold">Organizer Name</h1>
            <div className="border border-black rounded-full h-5 w-5 mt-1 mx-2 flex justify-center items-center hover:bg-blue-200">
              {
                sellerMenu ?
                  <div onClick={handleCloseSellerMenu}>
                    <FaAngleUp />
                  </div>
                  :
                  <div onClick={handleOpenSellerMenu}>
                    <FaAngleDown />
                  </div>
              }
            </div>
          </li>
          <div className={sellerMenu ? 'visible' : 'hidden'}>
            <SellerSubmenu />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardNab;
