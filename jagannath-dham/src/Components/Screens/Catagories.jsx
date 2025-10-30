import React from 'react'
import { IoIosArrowDown } from "react-icons/io";


function Catagories() {
    return (
        <div className='px-2 lg:px-4 hidden mt-7 md:grid grid-cols-6 bg-blue-50 mx-2 my-4  gap-4 py-4 justify-center  rounded-lg items-center text-gray-500 border-2 border-x-blue-300 border-y-blue-300'>
            <div className=' border-2 border-x-gray-300 border-y-gray-300  flex lag:gap-8 justify-between items-center bg-white px-3 lg:px-6 py-2 rounded-lg'>
                <p >Price</p>
                <IoIosArrowDown />
            </div>

              <div className='border-2 border-x-gray-300 border-y-gray-300  flex gap-8 justify-between items-center bg-white  px-3 lg:px-4 py-2 rounded-lg'>
                <p >Location</p>
                <IoIosArrowDown />
            </div>

              <div className='border-2 border-x-gray-300 border-y-gray-300  flex gap-8 justify-between items-center bg-white  px-3 *:lg:px-2 py-2  rounded-lg'>
                <p >Tour Category</p>
                <IoIosArrowDown />
            </div>

              <div className='border-2 border-x-gray-300 border-y-gray-300  flex gap-8 justify-between items-center bg-white  px-3 lg:px-2 py-2 rounded-lg'>
                <p >packaging Type</p>
                <IoIosArrowDown />
            </div>
            <div className='border-2 border-x-gray-300 border-y-gray-300  flex gap-8 justify-between items-center bg-white  px-3 lg:px-3 py-2  rounded-lg'>
                <p >Departure City</p>
                <IoIosArrowDown />
            </div>
            

            <button className='bg-blue-600 text-white px-3 lg:px-4 py-2 rounded-lg'>Search Now</button>
        </div>
    )
}

export default Catagories