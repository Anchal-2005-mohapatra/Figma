import React,{useState} from 'react'
import img from "../../Assets/jagannath t&t logo 1.png"
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import hotel from "../../Assets/Images/image.png"
import car from "../../Assets/Images/image1.png";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from './Sidebar';


const Navbar = () => {
    const[open, setOpen] = useState (false);
  return (
    <div className='flex justify-between px-1  md:px-11  py-3 items-center sticky top-0 bg-white z-50 '>
         <div className='flex  gap-1 md:gap-10 lg:gap-15 items-center'>
        <div className='flex gap-2 md:gap-3 items-center animate-bounce'>
             <img src={img} alt="" className='h-5 md:h-10 lg:h-15' />
            <div className=''>
                <h1 className='text-blue-500 fomt-thin md:font-bold text-xs md:text-lg'>JAGANATH</h1>
                <p className='text-xs font-thin md:font-bold '>TOURIST & TRAVEL</p>
            </div>
           </div>
           <div className='relative'>
            <input type="text" placeholder='Find Your Perfect Tour Package ' className='rounded-full w-full text-xs md:text-md lg:text-lg md:w-[240px] lg:w-[450px] bg-gray-200 px-10 py-2 ' />
             <CiSearch className='absolute bottom-2 left-3 md:left-2 md:top-3'/>
        </div>
        </div>
        
        <div className='text-xs flex items-center md:gap-2 lg:gap-5'>
            <div className='hidden md:flex md:gap-2  lg:gap-3 items-center md:px-2 md:py-1 lg:px-4 lg:py-2 bg-orange-100 rounded-full shadow-lg  border-4 border-white'>
                <img src={hotel} alt="" className=' lg:h-5 md:h-2'/>
                 <button className=' md:block lg:block'>Hotel Booking</button>
            </div>
           
            <div className=' hidden md:flex md:gap-2  lg:gap-3  gap-3 items-center md:px-2 md:py-1 lg:px-4 lg:py-2 bg-orange-100 rounded-full shadow-lg  border-4 border-white'>
                <img src={car} alt="" className=' lg:h-5 md:h-2'/>
                 <button className='md:block lg:block'>Cab Booking</button>
            </div>
            <div className='hidden md:flex lg:glex  gap-3 items-center px-2 py-2 bg-black text-white rounded-lg  shadow-xl  border-4 border-white'>
           <VscAccount  size={20} />
                 <button className=''>Login</button>
            </div>
            <RxHamburgerMenu size={20 } onClick={()=>setOpen(true)}  className='block md:hidden lg:hidden'  />

        </div>
        <Sidebar open={open} onClose={()=>setOpen(false)} />
    </div>
  )
}

export default Navbar