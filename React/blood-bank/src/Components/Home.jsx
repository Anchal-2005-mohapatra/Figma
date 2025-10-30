import React from 'react'
import img from '../assets/donate.jpg';
import image from '../assets/need.jpeg';
import img1 from '../assets/blood.jpeg';

const Home = () => {
  const date = new Date();
  console.log(date);

  const show = 
    
      date.getHours() 
      + 
      ':'
       + date.getMinutes() +
       ":"
        + date.getSeconds() ;


  return (

    <div>
      <header className='flex gap-4 overflow-scroll pl-2  '>
        <img src={img} alt="" className='w-[100vw] h-[300px] md:h-[400px] lg:h-[500px]' />
        <img src={image} alt="" className='w-[100vw] h-[300px] md:h-[400px] lg:h-[500px]' />
        <img src={img1} alt="" className='w-[100vw] h-[300px] md:h-[400px] lg:h-[500px]' /></header>

      <div className='flex justify-center items-center p-2 flex-col gap-3  text-white text-xl font-bold  md:flex-row md:gap-3  lg:glex-rows'>
        <div className='text-center bg-[#647FBC] px-2 py-7 rounded w-[270px] md:w-[390px] md:text-center lg:w-[400px]'>
          <h2>8099u4</h2>
          <p>doners registered</p></div>
        <div className=' text-center bg-[#C1856D] px-2 py-7 rounded w-[270px] md:w-[390px] md:text-center lg:w-[400px] '>
          <h2>8t0w</h2>
          <p>blood units Collected</p>
        </div>

      </div>
  <p className='text-center text-red-800'>Data from 5th of sep 2025 onwards : <span className='text-red-500 text-sm'>Last update :{show} </span></p>
  <div className='grid gap-4 m-3 grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
    <div className='bg-[#9A3F3F] px-5 text-white py-10 text-center rounded-3xl border-2 transition-transform  hover:scale-110 shadow-black'>
      <h2>Blood Availability Search</h2>
    </div>

     <div className='bg-[#26667F] px-5 text-white py-10 text-center rounded-3xl border-2 transition-transform  hover:scale-110 shadow-black'>
      <h2>Blood Bank Derectory</h2>
    </div>
     <div className='bg-[#934790] px-5 text-white py-10 text-center rounded-3xl border-2 transition-transform  hover:scale-110 shadow-black'>
      <h2>Blood Donation Camps</h2>
    </div>
     <div className='bg-[#C59560] px-4 text-white py-9 text-center rounded-3xl border-2 transition-transform  hover:scale-110 shadow-black'>
      <h2>Doner Login</h2>
    </div>
     <div className='bg-[#E43636] px-5 text-white py-10 text-center rounded-3xl border-2 transition-transform  hover:scale-110 shadow-black'>
      <h2>Register Voluntary Blood Camp</h2>
    </div>
  </div>
    </div>
  )
}
export default Home;
