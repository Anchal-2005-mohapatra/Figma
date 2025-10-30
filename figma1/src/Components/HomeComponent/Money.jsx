import React from 'react'
import clg from "../../Assets/Collage Icon (1).png";
import { MdArrowOutward } from "react-icons/md";
import aero from "../../Assets/Travel Icon.png";
import graph from "../../Assets/Expenses Content (1).png";
const Money = () => {
    return (
        <div id='3' className='flex justify-center items-center mx-9 my-5 '>

            <div className='flex gap-12 my-8'>
                <div className='bg-gray-100 rounded-lg p-4 transform duration-100 hover:scale-95 shadow-lg '>
                    <div className='flex justify-between gap-5 items-center my-3'>
                        <h1 className='font-bold text-md'>Save Your Money for the future
                        </h1>
                        <MdArrowOutward />

                    </div>
                    <div className='p-1 bg-white'>
                        <p className='text-xs text-gray-300'>Money Saving- 2024
                        </p>
                        <p className='text-sm'>$480,640.00</p>

                        <div className=' rounded-lg bg-gray-100 flex  items-center gap-4 px-4 py-2 mt-2 transform duration-100 hover:scale-95 shadow-lg'>

                            <div className='flex gap-2 items-center'>
                                <img src={clg} alt="" />
                                <div>
                                    <p>College</p>
                                    <p className='text-gray-300 text-xs'>Achieved in 4 months</p>
                                </div>
                            </div>
                            <div>
                                 <p >$82.000</p>
                            </div>
                           
                        </div>
                        <div className=' rounded-lg bg-gray-100 flex  items-center gap-4 px-4 py-2 mt-2 transform duration-100 hover:scale-95 shadow-lg'>

                            <div className='flex gap-2 items-center'>
                                <img src={aero} alt="" />
                                <div>
                                    <p>College</p>
                                    <p className='text-gray-300 text-xs'>Achieved in 4 months</p>
                                </div>
                            </div>
                            <div>
                                 <p >$82.000</p>
                            </div>
                           
                        </div>
                    </div>
                </div>

                <div className='bg-gray-100 rounded-lg px-7 py-4 transform duration-100 hover:scale-95 shadow-lg'>
                    <div className='flex justify-between gap-5 items-center my-3'>
                        <h1 className='font-bold text-md'>Useful Expenses Reporting
                        </h1>
                        <MdArrowOutward />

                    </div>
                    <div className='p-3 bg-white transform duration-100 hover:scale-105 shadow-lg '>
                        <img src={graph} alt="" className='h-40' />


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Money