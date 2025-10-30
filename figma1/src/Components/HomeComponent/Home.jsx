import React from 'react'
import audio from "../../Assets/audio.mp3";
import chart from "../../Assets/Chart.png";
import girl from "../../Assets/image.png";
import Paypal from './Paypal';
import Secure from './Secure';
import graph from "../../Assets/Weekly Income.png";
import Money from './Money';
import Review from './Review';
import FrequentlyAskQ from './FrequentlyAskQ';
import Join from './Join';
import Footer from '../Common/Footer';
const Home = () => {
    return (
        <div id='1'>
            <div className='grid min-h-screen grid-cols-2 items-center gap-15 md:gap-25 my-8 mx-9  ' >
                <div className=''>
                    <button className='text-blue shadow-lg px-3 py-2 rounded-full'>Join with us</button>
                    <p className='text-lg md:text-2xl lg:text-3xl'>Easier <span className='text-blue-500'>Solution</span> to Manage Your <span className='text-blue-500'>Finance</span></p>
                    <p className='text-xs md:text-md lg:text-lg'>Discover new ways to manage your finances. invenst efficent and smartly, and achieve your financial goals with us.</p>
                    <button>Manage Now</button>
                    <audio src={`${audio}`} alt="How It works" muted loop onPlay={() => console.log("audio was on!")} ></audio>
                </div>
                
                <div className='realtive'>      
                    <img src={chart} alt="" className='w-[400px] absolute bottom-36 left-30 top-24' />
                  
                    <div className='relative left-10 z-50 w-[170px] text-xs md:text-md  h-[180px] md:w-[250px] lg:w-[290px] bg-white py-4 px-4 shadow-xl rounded-lg'>
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
                     <div className='absolute bottom-0 left-0 ' >
                    <img src={graph} alt="" className='w-[400px]' />
                </div>
                </div>
            </div>
            <Paypal />
            <Secure/>
            <Money/>
            <Review/>
            <FrequentlyAskQ/>
            <Join/>
            <Footer/>
        </div>
    )
}

export default Home