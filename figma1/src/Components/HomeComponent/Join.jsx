import React from 'react'
import girl from "../../Assets/image.png";
import graph from "../../Assets/Weekly Income.png";
const Join = () => {
    return (
        <div className='bg-blue-100 mx-9 rounded-lg  '> 
            <div className=' grid items-center  grid-cols-2 px-9 my-10 ' >

            <div className=' grid gap-3'>
                <p className='text-lg md:text-2xl lg:text-3xl'>Join Us and manage your Financial easily!</p>
                <p className='text-xs md:text-md lg:text-lg'>Increase control your finances and achieve financial freedom by joinig.</p>
                <div className='flex gap-2 '>
                     <button className='px-3 py-2 bg-blue-300 rounded-full '>Manage Now</button>
                <button className='px-3 py-2 border border-blue-400 rounded-full'
                >For More</button>
                </div>
               
            </div>

            <div className='relative'>
                <div className=' absolute top-4 w-[170px]  md:w-[250px] lg:w-[290px] bg-white py-4 px-4 shadow-xl  rounded-lg'>
                    <div className='flex gap-3'>
                        <div className=' h-2 w-2 md:h-3 md:w-3 rounded-full bg-blue-500 hover:border hover:bg-gray-500 '></div>
                        <div className=' h-2 w-2 md:h-3 md:w-3 rounded-full bg-blue-500 hover:border hover:bg-gray-500 '></div>
                        <div className=' h-2 w-2 md:h-3 md:w-3 rounded-full bg-blue-500 hover:border hover:bg-gray-500 '></div>
                    </div>
                    <p>total Balace </p>
                    <h1>$4,637.00</h1>
                    <hr />
                    <div className='flex justify-between'>
                        <img src={girl} alt="" className='h-8 rounded-full my-3' />
                        <div>
                            <p>Brie Larson</p>
                            <p className='text-gray-500'>UI Designer</p>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <p>Weekly Spend</p>
                        <div className='flex gap-2 items-end '>
                            <div className='h-10 w-3 bg-blue-200 rounded-lg'>  </div>
                            <div className='h-7 w-3 bg-blue-800 rounded-lg'>  </div>
                            <div className='h-9 w-3 bg-blue-200 rounded-lg'>  </div>
                            <div className='h-10 w-3 bg-blue-800 rounded-lg'>  </div>
                            <div className='h-10 w-3 bg-blue-200 rounded-lg'>  </div>
                        </div>
                    </div>
                </div>
                <div className=' ' >
                    <img src={graph} alt="" className='w-[400px]' />
                </div>
            </div>
        </div></div>
    )
}

export default Join