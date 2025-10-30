import React from 'react'
import first from "../../Assets/Images/Frame 113.png";
import second from "../../Assets/Images/Frame 114.png";
import third from "../../Assets/Images/Frame 112.png"
import fourth from "../../Assets/Images/Frame 115.png";
import fifth from "../../Assets/Images/Frame 116.png";
import sixth from "../../Assets/Images/Frame 117.png";
import seventh from "../../Assets/Images/Frame 118.png";
import eight from "../../Assets/Images/Frame 119.png"

const Gallery = () => {
  return (
    <div className='bg-blue-50 rounded my-5 py-3 px-5 '>
      <div className='text-center'>
        <button className='bg-blue-100 text-blue-700 px-3 py-2 rounded-lg '>Our Gallery</button>
        <p className='font-bold text-lg lg:text-2xl'>See the happy faces </p>
        <p className='text-sm  text-gray-400'>Escape to the World’s Most Breathtaking Islands and immerse yourself in paradise. </p>
      </div>

<div className='grid gap-3 my-3 px-4 ' >
      <div className='grid md:grid-cols-3 gap-4'>
        <img src={third} alt="" />
        <img src={first} alt="" className='w-full' />
        <img src={second} alt="" />
      </div>
      <div className=' hidden md:grid md:grid-cols-2 gap-4'>
        <img src={fourth} alt="" />
        <img src={fifth} alt="" />
      </div>

      <div className='grid md:grid-cols-3 gap-4'>
      <img src={sixth} alt="" />
      <img src={seventh} alt="" />
      <img src={eight} alt="" />
      </div>
    </div>
</div>
  )
}

export default Gallery