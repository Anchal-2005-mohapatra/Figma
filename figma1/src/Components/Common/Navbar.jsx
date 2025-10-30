import React, { useState } from 'react'
import logo from '../../Assets/Company Logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();
    return (
        <div className='flex justify-between py-3 px-9  md:p-4 lg:p-5 items-center w-full text-sm md:text-lg lg:text-lg shadow-lg  ' >
            <div><img src={logo} alt="" className='h-6 md:h-8 lg:h-9 ' onClick={() => navigate("/")} /></div>
            <div >
                <ul className='hidden md:gap-6 md:flex cursor-pointer' >
                    <li><a href="#1" >Home</a></li>
                    <li><a href="#2">About</a></li>
                    <li><a href="#3" >Pricing</a></li>
                    <li><a href="#4" >Customers</a></li>
                </ul>
            </div>
            <div className='flex gap-4 md:gap-5 items-center  ' >
                <button>Login</button>
                <button>Register</button>
                <RxHamburgerMenu className='block md:hidden lg:hidden' onClick={() => { setMenu(true) }} />

                <Sidebar menu={menu} onClose={() => setMenu(false)} />
            </div>

        </div>
    )
}

export default Navbar