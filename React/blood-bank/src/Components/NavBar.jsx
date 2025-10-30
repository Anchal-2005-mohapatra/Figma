import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';
import { AiOutlineLogin } from 'react-icons/ai';


const NavBar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);


    const hamburger = () => {
        setOpen(!open);
        
    }
    const goToAbout = () => {
        navigate('/login');
    };


    return (
        <div className='  '>
            <ul className='flex gap-4 m-2 justify-center bg-rose-950  p-3 text-white  font-serif  md:gap-4  lg:gap-4 xl:gap-8 2xl:gap-10 '>
                <li className='hidden md:block lg:block'><Link to={"/"}>Home</Link></li>
                <li className='hidden md:block lg:block'><Link to="/about">AboutUs</Link></li>
                <li className='text-center'>
                    <select className='bg-rose-950 hover:bg-white hover:text-rose-950 hidden md:block lg:block' >
                        <option className='hidden'>Looking for Blood</option>
                        <option className='bg-white text-rose-950 text-s '>Blood Availability </option>
                        <option className='bg-white text-rose-950  text-s '>Blood center Directory</option>
                        <option className='bg-white text-rose-950  text-s'>Thalassamia Requiest</option>
                    </select>
                </li>

                <li>
                    <select className='bg-rose-950 hidden md:block lg:block'>
                        <option className='hidden'>Want To Donate Blood</option>
                        <option value="">Blood Donation Camp</option>
                        <option value="">Doner Login</option>
                        <option value="">About Blood Donation</option>
                    </select>
                </li>

                <li className='hidden md:block lg:block'>
                    <Link to={"/contact"}>Contact us</Link>
                </li>
                <div className='flex gap-40 md:gap-47'>
                    <button onClick={goToAbout} className='bg-amber-500 rounded px-2 flex p-1' > <AiOutlineLogin size={22} className='mr-2 '/>Login</button>
                    <AiOutlineBars size={20} onClick={hamburger} className='block md:hidden lg:hidden xl:hidden mt-2'
                    />
                </div>
                
            </ul>
                    {open && (
                        <ul className='flex flex-col bg-blue-900 text-white text-bold w-[200px] m-3 rounded-2xl md:hidden lg:hidden xl:hidden'>
                            <li className='p-2' ><Link to={"/"}>Home</Link></li>
                            <li className='p-2'><Link to="/about">AboutUs</Link></li>
                            <li>
                                <select className='p-1' >
                                    <option className='hidden'>Looking for Blood</option>
                                    <option className='bg-red-950 text-white '>Blood Availability </option>
                                    <option className='bg-red-950 text-white '>Blood center Directory</option>
                                    <option className='bg-red-950 text-white '>Thalassamia Requiest</option>
                                </select>
                            </li>

                            <li>
                                <select className='p-1'>
                                    <option className='hidden'>Want To Donate Blood</option>
                                    <option className='bg-red-950 text-white '>Blood Donation Camp</option>
                                    <option className='bg-red-950 text-white '>Doner Login</option>
                                    <option className='bg-red-950 text-white '>About Blood Donation</option>
                                </select>
                            </li>

                            <li className='p-2'>
                                <Link to={"/contact"}>Contact us</Link>
                            </li>
                        </ul>
                    )}
                
        </div>
    )
}
export default NavBar;
