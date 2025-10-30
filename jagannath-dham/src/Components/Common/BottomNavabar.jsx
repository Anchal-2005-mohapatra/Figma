import React from 'react'
import wtsp from "../../Assets/Images/wtsp.jpg"

const BottomNavabar = () => {
    return (
        <div className='px-12 hidden w-full md:flex justify-between  sm:text-xs md:text-md lg:text-lg py-2  items-center shadow-lg sticky top-18 bg-white  '>
            <div>
                <ul className='font-serif text-xs md:text-lg flex items-center gap-5 md:gap-10  lg:gap-14 cursor-pointer '><li>Home</li>
                    <li className='hover:text-blue-600'>About Us</li>
                    <li className='hover:text-blue-600'>Tour Packages</li>
                    <li className='hover:text-blue-600'>Gallery</li>
                    <li className='hover:text-blue-600'>Contact</li></ul>
            </div>
            <div className='bg-gray-100 px-3 text-xs  py-1 rounded-lg'>
                <div className='flex gap-5 items-center'>
                    <img src={wtsp} alt="" className='h-6 rounded-full' />
                    <div>
                        <p>Whatsapp</p>
                        <p className='font-semibold'>+91 999 888 776</p>
                    </div>
                </div>
            </div>
          
        </div>
    )
}

export default BottomNavabar