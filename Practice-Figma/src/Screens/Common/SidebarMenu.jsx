import React, { useState } from "react";
const SidebarMenu = ({menu, onClose}) => {
    if(!menu)
    {
        return null;
    }
    return (
        <>
                {menu && (
                    <div className='h-screen   fixed top-10 right-0  bg-gray-900 text-white w-1/2 md:w-1/4 lg:w-1/2   '>
                        <div className=' bg-black opacity-70 text-xs  px-4 py-4 grid gap-6 md:gap-8'>
                            <ul className='grid gap-3 md:gap-4 lg:gap-6'>
                                   <button className="" onClick={onClose}>✕</button> 
                                <li>
                                    Dashboard
                                </li>
                                <li>
                                    Products
                                </li>
                                <li>
                                    Favorite
                                </li>
                                <li>
                                    Inbox
                                </li>
                                <li>
                                    Order List
                                </li>
                                <li>
                                    Product Stock
                                </li>
                                 <hr className='text-gray-300' />
                            </ul>
                           
                            <ul className='grid gap-3 md:gap-4 lg:gap-7'>
                                <li className='text-xs md:text-md lg:text-lg text-gray-400 font-bold'>PAGES</li>
                                <li>Pricing</li>
                                <li>Calender</li>
                                <li>To-Do</li>
                                <li>Contact</li>
                                <li>Invoice</li>
                                <li>UI Elements</li>
                                <li>Team</li>
                                <li>Table</li>
                            </ul>
                            <hr className='text-gray-300' />
                            <ul className='grid gap-4 md:gap-4 lg:gap-6'>
                                <li>
                                    Setings
                                </li>
                                <li>Logout</li>
                            </ul>
                        </div>
                    </div>
                )}
        </>
    )
}
export default SidebarMenu;