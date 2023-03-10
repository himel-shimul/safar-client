import React, { useState } from "react";
import { useContext } from "react";
import { FaBars, FaTimesCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Submenu from "./Submenu";
import logo from "../../../assets/3.png";
import useTitle from "../../../hooks/useTitle";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const [submenu, setSubmenu] = useState(false);
useTitle('All Guides')
  return (
   <div className="mx-2 p-2">
     <div className="flex items-center justify-between">
         <Link to="/">
         <div className="flex items-center ">
            <img className="w-16" src={logo} alt="" />

            <h1 className="text-2xl mt-5 font-semibold">SAFAR</h1>
          </div>
         </Link>
          <div className="flex items-center mt-4 mx-4 lg:mt-0">
            {user?.uid  ?
              <div className="relative">
                {/* sub menu  */}
                <div className={`${submenu ? "visible" : "hidden"}`}>
                  <Submenu></Submenu>
                </div>
                <button
                  type="button"
                  className="flex items-center focus:outline-none"
                  aria-label="toggle profile dropdown"
                >
                  {
                    <div
                      onClick={() => setSubmenu(!submenu)}
                      className="w-8 h-8 bg-blue-400 hover:bg-blue-500 overflow-hidden rounded-full"
                    >
                      <FaUser className="text-2xl text-white text-center mx-auto pt-2" />
                    </div>
                  }
                </button>
              </div>
              :
              <Link to="/login">
              <button className="text-white bg-blue-500 hover:bg-blue-400 px-3 py-1 rounded-lg">Login</button>
              </Link>
            }
          </div>
        </div>
   </div>
    // <nav x-data="{ isOpen: false }" className="relative bg-slate-50 ">
    //   <div className="w-full px-6 py-4 mx-auto">
    //     <div className="lg:flex lg:items-center lg:justify-between">
    //       <div className="flex items-center justify-between">
    //         <div className="text-xl font-semibold text-gray-700">
    //           <Link
    //             className="text-2xl font-bold transition-colors duration-300 transform lg:text-3xl hover:text-gray-700"
    //             to="/"
    //           >
    //             SAFAR
    //           </Link>
    //         </div>

    //         <div onClick={() => setOpen(!open)} className="flex lg:hidden">
    //           <button
    //             type="button"
    //             className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
    //             aria-label="toggle menu"
    //           >
    //             {open ? (
    //               <FaTimesCircle className="w-6 h-6"></FaTimesCircle>
    //             ) : (
    //               <FaBars className="w-6 h-6"></FaBars>
    //             )}
    //           </button>
    //         </div>
    //       </div>

    //       <div
    //         className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-50 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
    //           open
    //             ? "translate-x-0 opacity-100 "
    //             : "opacity-0 -translate-x-full"
    //         } `}
    //       >
    //         <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
    //           <Link
    //             to="/"
    //             className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100"
    //           >
    //             Home
    //           </Link>

    //           <Link
    //             to="/offers"
    //             className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100"
    //           >
    //             Offers
    //           </Link>

    //           <Link
    //             to="/login"
    //             className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100"
    //           >
    //             Login
    //           </Link>
    //         </div>

    //         <div className="flex items-center mt-4 lg:mt-0">
    //           <button
    //             className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
    //             aria-label="show notifications"
    //           ></button>

    //           {user?.uid && (
    //             <div className="relative">
    //               {/* sub menu  */}
    //               <div className={`${submenu ? "visible" : "hidden"}`}>
    //                 <Submenu></Submenu>
    //               </div>
    //               <button
    //                 type="button"
    //                 className="flex items-center focus:outline-none"
    //                 aria-label="toggle profile dropdown"
    //               >
    //                 {
    //                   <div
    //                     onClick={() => setSubmenu(!submenu)}
    //                     className="w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full"
    //                   >
    //                     <FaUser className="text-2xl text-center mx-auto pt-2" />
    //                   </div>
    //                 }
    //               </button>
    //             </div>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
