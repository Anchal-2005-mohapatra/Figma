import React, { useState } from 'react'
import HeroSection from './HeroSection';
import user from '../../assets/users.webp';
import order from '../../assets/order.webp';
import sales from '../../assets/sales.webp';
import Pending from '../../assets/Pending.webp';

const Home = () => {

    return (
        <div className='bg-gray-300 min-h-screen px-2 py-2  md:px-4 lg:p-14 '>


            <div className='m-auto text-xs md:text-md lg:text-lg xl:text-2xl   '>

                <p className='font-bold font-serif ml-5 mt-5'> Dashboard</p>


                <div className='grid mx-3 my-8 md:flex gap-2 md:gap-6 lg:gap-8 m-auto  '>

                     <div className='bg-white rounded-lg px-6 md:px-6 md:py-3 pt-1 '>
                        <div className='flex justify-between gap-2 md:gap-2 items-center  '>
                            <div className='my-0 md:my-2 lg:my-4 '>
                                <p className='my-0 md:my-2 lg:my-4'>Total Users</p>
                                <p>40689</p>
                            </div>
                            <img src={user} alt="users" className='h-9 rounded-full' />
                        </div>
                        <p className=' my-2 md:my-4 lg:my-4 font-mono 
                        mx-0 md:mx-2  text-blue-500'>8.5% Up from Yesterday</p>
                    </div>


                      <div className='bg-white rounded-lg px-6 md:px-6 md:py-3 pt-1 '>
                        <div className='flex justify-between gap-2 md:gap-2 items-center  '>
                            <div className='my-0 md:my-2 lg:my-4 '>
                                <p className='my-0 md:my-2 lg:my-4'>Total Oders</p>
                                <p>10293</p>
                            </div>
                            <img src={order} alt="users" className='h-9 rounded-full' />
                        </div>
                        <p className=' my-2 md:my-4 lg:my-4 font-mono 
                        mx-0 md:mx-2  text-blue-500'>1.3% Down from Yesterday</p>
                    </div>

                     <div className='bg-white rounded-lg px-6 md:px-6 md:py-3 pt-1 '>
                        <div className='flex justify-between gap-2 md:gap-2 items-center  '>
                            <div className='my-0 md:my-2 lg:my-4 '>
                                <p className='my-0 md:my-2 lg:my-4'>Total Sales</p>
                                <p>$89,000</p>
                            </div>
                            <img src={sales} alt="users" className='h-9 rounded-full' />
                        </div>
                        <p className=' my-2 md:my-4 lg:my-4 font-mono 
                        mx-0 md:mx-2  text-blue-500'>4.5% Up from Yesterday</p>
                    </div>

                      <div className='bg-white rounded-lg px-6 md:px-6 md:py-3 pt-1 '>
                        <div className='flex justify-between gap-2 md:gap-2 items-center  '>
                            <div className='my-0 md:my-2 lg:my-4 '>
                                <p className='my-0 md:my-2 lg:my-4'>Total Pending</p>
                                <p>2040</p>
                            </div>
                            <img src={Pending} alt="users" className='h-9 rounded-full' />
                        </div>
                        <p className=' my-2 md:my-4 lg:my-4 font-mono 
                        mx-0 md:mx-2  text-blue-500'>1.5% Up from Yesterday</p>
                    </div>
                </div>

            </div>
            <HeroSection/>

        </div>
    )
}

export default Home