import React from 'react'
import dhama from "../../Assets/Images/Frame 79.png";
import nature from "../../Assets/Images/Frame 79 (1).png";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import bg from "../../Assets/Images/bg.png";
import batch from "../../Assets/Images/Mask group.png";
import man from "../../Assets/Images/man.png";
import round from "../../Assets/Images/round.png";
import line from "../../Assets/Images/Line 31.png";
import girl from "../../Assets/Images/Frame 104.png";
import { FaStar } from "react-icons/fa";




const Insparation = () => {
    return (
        <div className='text-xs md:text-md'>
            <div className='text-center'>
                <button className='bg-blue-100 text-blue-600 px-3 py-2 rounded-lg font-serif text-xs md:text-md'>Popular Tourist List</button>
                <p className='font-bold text-md md:text-lg my-2'>Travel Inspirations</p>
                <p className=''>Escape to the World’s Most Breathtaking Islands and immerse yourself in paradise. </p>
            </div>
            <div className='px-4 md:px-10 grid md:grid-cols-3 gap-4 my-5'>
                <div className='grid grid-cols-2 gap-3 bg-white shadow-xl rounded-lg px-3 py-2'>
                    <img src={dhama} alt="" className='w-full object-cover bg-cover h-full rounded-lg ' />
                    <div className='flex flex-col gap-4 justify-center '>
                        <div>
                            <div className='flex gap-2 items-center '>
                                <IoLocationOutline size={14} />
                                <p>Uttarakhand</p>
                            </div>
                            <p className='font-bold '>Char- Dham Yatra (The Devotional Places)</p>
                            <div className='flex gap-2 items-center'>
                                <SlCalender />
                                <p>25th Dec 2025</p>
                            </div>
                        </div>
                        <div><hr className='bg-gray-600' /></div>
                        <div>
                            <p>Escape to the World’s Most Breathtaking Islands and immerse yourself in paradise.</p>
                        </div>

                    </div>
                </div>

                <div className='grid grid-cols-2 gap-2 md:gap-3 bg-white shadow-xl rounded-lg px-3 py-2'>
                    <img src={nature} alt="" className='w-full object-cover bg-cover h-full rounded-lg ' />
                    <div className='flex flex-col justify-center gap-4  '>
                        <div>
                            <div className='flex gap-2 items-center '>
                                <IoLocationOutline size={14} />
                                <p>Uttarakhand</p>
                            </div>
                            <p className='font-bold '>Bharat Darshan (India-The Debo Bhoomi)</p>
                            <div className='flex gap-2 items-center'>
                                <SlCalender />
                                <p>25th Dec 2025</p>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <p>Escape to the World’s Most Breathtaking Islands and immerse yourself in paradise.</p>
                        </div>

                    </div>
                </div>
                <div className='grid grid-cols-2 gap-2 md:gap-3 bg-white shadow-xl rounded-lg px-3 py-2'>
                    <img src={nature} alt=""className='w-full object-cover bg-cover h-full rounded-lg ' />
                    <div className='flex flex-col justify-center gap-4 '>
                        <div>
                            <div className='flex gap-2 items-center '>
                                <IoLocationOutline size={14} />
                                <p>Uttarakhand</p>
                            </div>
                            <p className='font-bold '>Bharat Darshan (India-The Debo Bhoomi)</p>
                            <div className='flex gap-2 items-center'>
                                <SlCalender />
                                <p>25th Dec 2025</p>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <p>Escape to the World’s Most Breathtaking Islands and immerse yourself in paradise.</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className='bg-gray-100 px-5 py-5 rounded-lg grid grid-cols-2  md:flex gap-10 md:gap-20 justify-around items-center text-md '>
                <div className='flex items-center gap-5 '>
                    <img src={bg} alt="" className='h-8' />
                    <div>
                        <p className='font-bold text-lg md:text-xl'>2K+</p>
                        <p className=''>Tour Completed</p>
                    </div>
                </div>
                <img src={line} alt="" className='h-11 hidden md:block' />


                <div className='flex items-center gap-5'>
                    <img src={batch} alt="" className='h-8' />
                    <div>
                        <p className='font-bold text-lg md:text-xl'>2K+</p>
                        <p>Travel Experience</p>
                    </div>
                </div>
                <img src={line} alt="" className='h-11 hidden md:block' />

                <div className='flex items-center gap-5'>
                    <img src={man} alt="" className='h-8' />
                    <div>
                        <p className='font-bold text-lg md:text-xl'>100+</p>
                        <p>Happy Traveler</p>
                    </div>
                </div>
                <img src={line} alt="" className='h-11 hidden md:block' />

                <div className='flex items-center gap-5'>
                    <img src={round} alt="" className='h-8' />
                    <div>
                        <p className='font-bold text-lg md:text-xl'>99%</p>
                        <p>Retention Rate</p>
                    </div>
                </div>

            </div>


            <div className=''>
                <div className='text-center my-5 md:my-9 lg:my-10'>
                    <button className='bg-blue-100 text-blue-700 px-3 md:px-3 py-2 rounded-lg'>Clients Feedback About Us</button>
                    <p className='font-bold text-md md:text-lg lg:text-xl my-2 '>See Those Lovely Words From Clients</p>
                    <p className='text-gray-400 '>Are You Tired Of The Typical Destination And Looking To Step Out Of Your Comfort Zone Travel!</p>
                </div>

                <div className='grid md:grid-cols-4 gap-2 md:gap-3 lg:gap-4 my-5 '>

                    <div className='grid  gap-3 bg-white rounded-lg shadow-xl px-4 py-4  cursor-pointer transform duration-300 hover:scale-95 '>
                        <div className='flex gap-4 items-center '>
                            <img src={girl} alt="" className='h-10 md:h-11 lg:h-15' />
                            <div>
                                <p className='text-md:md:text-lg font-bold '>Ishita Dikshit</p>
                                <p >CEO, RJ Softwares</p>
                            </div>
                        </div>
                        <p className='text-gray-500 '>“I Was Tired Of The Typical Destination And Looking To Step Out Of Your Comfort Zone Travel! This agency made my trip so memorable.”</p>
                        <span className='flex gap-2'>
                            <span>
                                <FaStar className='text-yellow-500' />
                            </span>
                            <span>
                                <FaStar className='text-yellow-500' />
                            </span>
                            <span>
                                <FaStar className='text-yellow-500' />
                            </span>
                            <span>
                                <FaStar className='text-yellow-500' />
                            </span>
                            <span>
                                <FaStar className='text-yellow-500' />
                            </span>
                        </span>
                    </div>

                       <div className=' cursor-pointer transform duration-300 hover:scale-95 grid gap-2 bg-white rounded-lg shadow-xl px-4 py-4'>
                        <div className='flex gap-4 items-center'>
                            <img src={girl} alt="" className='h-10 md:h-11 lg:h-15' />
                            <div>
                                <p className='text-md:md:text-lg font-bold '>Ishita Dikshit</p>
                                <p >CEO, RJ Softwares</p>
                            </div>
                        </div>
                        <p className='text-gray-500 '>“I Was Tired Of The Typical Destination And Looking To Step Out Of Your Comfort Zone Travel! This agency made my trip so memorable.”</p>
                        <span className='flex gap-2'>
                            <span>
                                <FaStar className='text-yellow-500' />
                            </span>
                            <span>
                                <FaStar className='text-yellow-500' />
                            </span>
                            <span>
                                <FaStar className='text-yellow-500' />
                            </span>
                            <span>
                                <FaStar className='text-yellow-500' />
                            </span>
                            <span>
                                <FaStar className='text-yellow-500' />
                            </span>
                        </span>
                    </div>

                       <div className=' cursor-pointer transform duration-300 hover:scale-95  grid gap-2 bg-white rounded-lg shadow-xl px-4 py-4'>
                        <div className='flex gap-4 items-center'>
                            <img src={girl} alt="" className='h-10 md:h-11 lg:h-15' />
                            <div>
                                <p className='text-md:md:text-lg font-bold '>Ishita Dikshit</p>
                                <p >CEO, RJ Softwares</p>
                            </div>
                        </div>
                        <p className='text-gray-500 '>“I Was Tired Of The Typical Destination And Looking To Step Out Of Your Comfort Zone Travel! This agency made my trip so memorable.”</p>
                        <span className='flex gap-2'>
                            <span>
                                <FaStar className='text-yellow-500' />
                            </span>
                            <span>
                                <FaStar className='text-yellow-500' />
                            </span>
                            <span>
                                <FaStar className='text-yellow-500' />
                            </span>
                            <span>
                                <FaStar className='text-yellow-500' />
                            </span>
                            <span>
                                <FaStar className='text-yellow-500' />
                            </span>
                        </span>
                    </div>

                       <div className='cursor-pointer transform duration-300 hover:scale-95 grid gap-2 bg-white rounded-lg shadow-xl px-4 py-4'>
                        <div className='flex gap-4 items-center'>
                            <img src={girl} alt="" className='h-10 md:h-11 lg:h-15' />
                            <div>
                                <p className='text-md:md:text-lg font-bold '>Ishita Dikshit</p>
                                <p >CEO, RJ Softwares</p>
                            </div>
                        </div>
                        <p className='text-gray-500 '>“I Was Tired Of The Typical Destination And Looking To Step Out Of Your Comfort Zone Travel! This agency made my trip so memorable.”</p>
                        <span className='flex gap-2'>
                            <span>
                                <FaStar className='text-yellow-500' />
                            </span>
                            <span>
                                <FaStar className='text-yellow-500' />
                            </span>
                            <span>
                                <FaStar className='text-yellow-500' />
                            </span>
                            <span>
                                <FaStar className='text-yellow-500' />
                            </span>
                            <span>
                                <FaStar className='text-yellow-500' />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Insparation