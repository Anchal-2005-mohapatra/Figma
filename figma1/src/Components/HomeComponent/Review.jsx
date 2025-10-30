import React from 'react'
import girl from "../../Assets/image.png";
import { IoStarSharp } from "react-icons/io5";




const Review = () => {
    return (
        <div id='4' className='mx-9  '>
            <div>
                <button className='px-3 text-blue-500 bg-white py-2 rounded-lg shadow-xl'>WHAT THEY SAY ABOUT US</button>
                <div className='flex items-center justify-between my-4'>
                    <p className='text-lg font-bold'>Many Good Reviews from Users!</p>
                    <p className='text-sm text-gray-400 font-serif w-[300px] lg:w-[500px]'>Finacy gets good reviews from many users for its convenient and useful feature. </p>
                </div>
            </div>

            <div className='grid md:grid md:grid-cols-4 gap-2  my-10'>

                <div className='bg-gray-100 p-4 rounded-lg transform duration-100 hover:scale-95  shadow-lg hover:border-red-700 '>
                    <div className='flex gap-5'>
                        <img src={girl} alt="" className='rounded-full h-9 g' />
                        <div>
                            <p>Jessica Chani</p>
                            <p className='text-gray-400 text-sm'>Teacher</p>
                        </div>
                    </div>
                    <hr className='text-black my-2' />
                    <div className='my-3'>
                        <p>Security is very important in online finanacial management, and financy use high-level encyption to protect users' sensitive data so users can feel safe .</p>
                        <p>Not only that, but financy also provides various additional features, investment, and even personalized financial advice.</p>
                    </div>

                </div>

                <div className='grid grid-rows-2 bg-white transform duration-100 hover:scale-95  shadow-lg hover:border-gray-500'>
                    <div className='bg-gray-100 p-4 rounded-lg '>
                        <div className='flex gap-4'>
                            <img src={girl} alt="" className='rounded-full h-9 g' />
                            <div>
                                <p>Charles Leclerc</p>
                                <p className='text-gray-400 text-sm'>Businessman</p>
                            </div>
                        </div>
                        <div className='flex  space-x-1'>
                            <span className='text-yellow-500'><IoStarSharp />
                            </span>
                            <span className='text-yellow-500'><IoStarSharp />
                            </span>
                            <span className='text-yellow-500'><IoStarSharp />
                            </span>
                            <span className='text-yellow-500'><IoStarSharp />
                            </span>
                            <span className='text-yellow-500'><IoStarSharp />
                            </span>
                            </div>
                    </div>
                    <div className='p-3 '>
                        <p className='text-2xl'>420.000 <sub className='text-blue-700'>+</sub></p>
                        <p className='text-gray-400 text-sm'>Finacy users.</p>
                    </div>
                </div>


                <div className=' grid grid-rows-2 bg-white transform duration-100 hover:scale-95  shadow-lg hover:border-gray-500'>
                    <div className='p-3'>
                        <p className='text-2xl'>200,000 <sub className='text-blue-700'>+</sub></p>
                        <p className='text-gray-400 text-sm'>Finacy users.</p>
                    </div>
                    <div className='bg-gray-100 p-4 rounded-lg '>
                        <div className='flex gap-4'>
                            <img src={girl} alt="" className='rounded-full h-9 g' />
                            <div>
                                <p>Charles Leclerc</p>
                                <p className='text-gray-400 text-sm'>Businessman</p>
                            </div>
                        </div>
                        <div className='flex  space-x-1'>
                            <span className='text-yellow-500'><IoStarSharp />
                            </span>
                            <span className='text-yellow-500'><IoStarSharp />
                            </span>
                            <span className='text-yellow-500'><IoStarSharp />
                            </span>
                            <span className='text-yellow-500'><IoStarSharp />
                            </span>
                            <span className='text-yellow-500'><IoStarSharp />
                            </span></div>
                    </div>

                </div>

                <div className='bg-gray-100 p-4 rounded-lg transform duration-100 hover:scale-95  shadow-lg hover:border-gray-500'>
                    <div className='flex gap-5'>
                        <img src={girl} alt="" className='rounded-full h-9 g' />
                        <div>
                            <p>Jessica Chani</p>
                            <p className='text-gray-400 text-sm'>Teacher</p>
                        </div>
                    </div>
                    <hr className='text-black my-2' />
                    <div className='my-3'>
                        <p>Security is very important in online finanacial management, and financy use high-level encyption to protect users' sensitive data so users can feel safe .</p>
                        <p>Not only that, but financy also provides various additional features, investment, and even personalized financial advice.</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Review