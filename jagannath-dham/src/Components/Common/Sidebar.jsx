import React from 'react'
import { VscAccount } from "react-icons/vsc";
import hotel from "../../Assets/Images/image.png"
import car from "../../Assets/Images/image1.png";
import { RxCross1 } from "react-icons/rx";


const Sidebar = ({ open, onClose }) => {
    if (!open) {
        return null;
    }
    return (
        <div className=' min-h-screen rounded-lg fixed top-14 right-0  w-30 md:w-64  bg-black shadow-lg p-4 '>
            <div className='opacity-80 z-50 '>
                {open && (
                    <div className=' text-white '>
                        <div className=' grid gap-5'>
                                <RxCross1 color='white' size={20} onClick={onClose} />
                            <div className='flex items-center gap-3 px-4 py-2 bg-orange-500 rounded-full shadow-lg  border-4 border-white'>
                                <img src={hotel} alt="" className=' h-5' />
                                <button className=' md:block lg:block'>Hotel Booking</button>
                            </div>

                            <div className='flex items-center gap-3  px-4 py-2 bg-orange-500 rounded-full shadow-lg  border-4 border-white'>
                                <img src={car} alt="" className=' h-5' />
                                <button className='md:block lg:block'>Cab Booking</button>
                            </div>
                            <div className='flex lg:glex items-center gap-3 px-2 py-2 bg-black text-white rounded-lg  shadow-xl  border-4 border-white'>
                                <VscAccount size={20} />
                                <button className=''>Login</button>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Sidebar