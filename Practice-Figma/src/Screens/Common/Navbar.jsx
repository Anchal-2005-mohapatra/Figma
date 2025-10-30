import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import flag from "../../assets/indianFlag.png";
import girl from "../../assets/girl.jpg";
import SidebarMenu from './SidebarMenu';

const Navbar = () => {
    const [input, setInput] = useState("");
    const [menu, setMenu] = useState(false);

        const value = (e) => {
            e.preventDefault();
        }
        return (
            <div className='w-full sticky top-0 left-0  bg-gray-100 '>
                <div className='rounded-xl shadow-lg shadow-gray-400 flex justify-between items-center py-2 px-4 bg-white text-xs md:text-md lg:text-xl  gap-10'>
                    <div>
                        <ul className='flex items-center gap-5 md:gap-9'>
                            <h1 className='text-blue-600'>Dash<span className='text-black'>Stack</span>

                            </h1>
                            <li >
                                <RxHamburgerMenu size={20} onClick={()=> setMenu(!menu)} />
                            </li>
                            <input type=" text" placeholder='Search' className='hidden md:block lg:block border-x-2 border-y-2 border-gray-400 rounded-full text-center relative w-full md:h-4 lg:h-6' value={input} onChange={(e) => setInput(e.target.value)} />
                            <CiSearch className='absolute left-33 md:left-44 lg:left-50' />
                        </ul>
                    </div>
                    <div className='flex items-center gap-3 md:gap-8'>
                        <IoIosNotificationsOutline size={23} />
                        <img src={flag} alt="" className='h-2 md:h-3' />
                        <select name="" id="" className='border-none'>
                            <option value="">English</option>
                            <option value="">Hindi</option>
                            <option value="">Odia</option>
                        </select>
                        <img src={girl} alt="" className=' h-4 md:h-6 lg:h-8 xl:h-10 rounded-full' />
                        <select name="" id=""></select>
                    </div>
                </div>
                <SidebarMenu menu={menu} onClose={()=>setMenu(false)}  />

            </div>
        )
    }

    export default Navbar