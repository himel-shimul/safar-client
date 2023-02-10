import React, { useContext, useState } from 'react';
import { DateRange } from 'react-date-range';
import { FaAngleDown, FaMinus, FaPlus, FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { SearchContext } from '../../../contexts/SearchProvider';
import LeftSide from './LeftSide';
import ReviewSection from './ReviewSection';


const DetailSection = ({hotelData}) => {
    const {hotel_name, description, location, regular_price, images, offer_price, facilities } = hotelData;

    
    const { days, options} = useContext(SearchContext);
    
    const [isHandleClick, setIsHandleClick] = useState(false);
    const [isClick, setIsClick] = useState(false);
    const [count, setCount] = useState(0);
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const serviceFee = 100;

    const handleOpenCalender = () => {
        setIsHandleClick(true)

    }
    const handleCloseCalender = () => {
        setIsHandleClick(false)
    }

    const handleClickOpen = () => {
        setIsClick(true)
    }

    const handleClickClose = () => {
        setIsClick(false)
    }

    const countData = [
        {

        }
    ]

    return (
        <div>
            <div className='flex p-4 w-full relative'>
                <div style={{ width: "60%", padding: "2rem" }}>
                    <LeftSide hotelData={hotelData}/>
                </div>

                {/* right side / card */}
                <div className='static' style={{ width: "40%", padding: "2rem" }}>
                    <div style={{ border: "1px solid grey", borderRadius: ".5rem", padding: "1rem" }}>
                        <div className='flex justify-between' >
                            <h1>${regular_price}/night</h1>
                            <div className='flex'>
                                <FaRegStar className='mt-1 mx-2' />
                                <p > 5.0 - <Link to='/'>12 Reviews</Link></p>
                            </div>
                        </div>
                        <div style={{ border: "1px solid grey", borderTopLeftRadius: ".5rem", borderTopRightRadius: ".5rem", padding: ".5rem", marginTop: "5vh" }}>
                            <div className='flex justify-around'>
                                {/* {
                                    isHandleClick === true ?
                                        <div onClick={handleCloseCalender} className='flex justify-center items-center hover:bg-slate-100' style={{ borderRadius: "2rem", width: "6rem" }}>
                                            <div>
                                                <h1><small>Check-In</small></h1>
                                                <p>01/02/03</p>
                                            </div>
                                        </div>
                                        :
                                        <div onClick={handleOpenCalender} className='flex justify-center items-center hover:bg-slate-100' style={{ borderRadius: "2rem", width: "6rem" }}>
                                            <div>
                                                <h1><small>Check-In</small></h1>
                                                <p>01/02/03</p>
                                            </div>
                                        </div>
                                } */}
                                {/* {
                                    isHandleClick === true ?
                                        <div onClick={handleCloseCalender} className='flex justify-center items-center hover:bg-slate-100' style={{ borderRadius: "2rem", width: "6rem" }}>
                                            <div>
                                                <h1><small>Check-Out</small></h1>
                                                <p>01/02/03</p>
                                            </div>
                                        </div> :
                                        <div onClick={handleOpenCalender} className='flex justify-center items-center hover:bg-slate-100' style={{ borderRadius: "2rem", width: "6rem" }}>
                                            <div>
                                                <h1><small>Check-Out</small></h1>
                                                <p>01/02/03</p>
                                            </div>
                                        </div>
                                } */}
                            </div>
                            {/* <div className={isHandleClick === true ? 'visible' : 'hidden'}>
                                <DateRange className='w-full'
                                    editableDateInputs={true}
                                    onChange={item => setState([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={state}
                                />
                            </div> */}
                        </div>

                        {/* <div className='flex justify-between' style={{ border: "1px solid grey", borderBottomLeftRadius: ".5rem", borderBottomRightRadius: ".5rem", padding: ".5rem", marginTop: "-.2vh" }}>
                            <div className='mx-2'>
                                <h1><small>GUESTS</small></h1>
                                <p>2 guests</p>
                            </div>
                            {
                                isClick === true ?
                                    <div onClick={handleClickClose} className='flex items-center mx-2' >
                                        <FaAngleDown className='h-5 w-5' />
                                    </div>
                                    :
                                    <div onClick={handleClickOpen} className='flex items-center mx-2' >
                                        <FaAngleDown className='h-5 w-5' />
                                    </div>
                            }
                        </div> */}
                        <div className={isClick === true ? 'visible' : 'hidden'} style={{ width: "100%" }}>
                            <div>
                                <div className='flex justify-between mx-4 my-6'>
                                    <div>
                                        <h1 className='font-bold'>Adults</h1>
                                        <p>Age 13+</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='flex'>
                                            <button onClick={() => setCount(count - 1)} className='flex justify-center items-center hover:bg-slate-200' style={{ width: "1.5rem", height: "1.5rem", border: "1px solid grey", borderRadius: "5rem" }}>
                                                <FaMinus className='h-3 w-3' />
                                            </button>
                                            <p className='mx-2'>{count}</p>
                                            <button onClick={() => setCount(count + 1)} className='flex justify-center items-center hover:bg-slate-200' style={{ width: "1.5rem", height: "1.5rem", border: "1px solid grey", borderRadius: "5rem" }}>
                                                <FaPlus className='h-3 w-3' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* button */}
                        <div className='mt-4'>
                            <Link to='/checkout'><button className='w-full h-8 bg-green-800 rounded-lg hover:bg-green-700 text-white'>Check Availability</button></Link>
                        </div>
                        {/* you won't be charged yet */}
                        <div>
                            <div className='flex justify-center my-3'>
                                <h1>You won't be charged yet ?</h1>
                            </div>
                            <div className='flex justify-between my-2'>
                                <h1 className='text-green-800'>${regular_price} x {days} nights</h1>
                                <p>${regular_price * days}</p>
                            </div>
                            <div className='flex justify-between my-2'>
                                <h1 className='text-green-800'>Service fee</h1>
                                <p>${serviceFee}</p>
                            </div>
                        </div>

                        {/* total price */}

                        <div className='flex justify-between mt-6'>
                            <h1 className='font-bold'>Total before taxes</h1>
                            <p>${(regular_price * days) + serviceFee}</p>
                        </div>
                    </div>
                </div>
            </div >


            {/* review section & host details*/}
            <div style={{ padding: "2rem" }}>
                <ReviewSection />
            </div>
        </div>
    );
};

export default DetailSection;