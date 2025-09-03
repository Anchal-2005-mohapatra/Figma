import React from 'react'
import img from '../assets/donate.jpg';
import image from '../assets/need.jpeg';
import img1 from '../assets/blood.jpeg';

 const Header = () => {
  return (
    <div>
      <header className='flex gap-4 overflow-scroll max-w-full p-2 '>
        <img src={img} alt=""  className='w-[100vw] h-[500px]'/>
        <img src={image} alt=""   className='w-[100vw] h-[500px]'/>
        <img src={img1} alt=""  className='w-[100vw] h-[500px]' /></header>
        
    </div>
  )
}
export default Header;
