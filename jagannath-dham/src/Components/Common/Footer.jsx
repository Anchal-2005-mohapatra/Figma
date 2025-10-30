import React from 'react'
import location from "../../Assets/Images/Frame 1686557499.png";
import call from "../../Assets/Images/Frame 1686557501.png";
import mail from "../../Assets/Images/Frame 1686557499 (1).png";
import wstp from "../../Assets/Images/Frame 61.png";
import img from "../../Assets/jagannath t&t logo 1.png"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='text-xs md:text-md mt-5 bg-black text-white px-4 py-4  '>

            <div className='grid grid-cols-2 gap-4 md:flex pt-3 pb-3 justify-between'>
                <div className='flex gap-3 items-center'>
                    <img src={location} alt="" className='h-10' />

                    <div>
                        <p className='text-gray-500'>Location</p>
                        <p className='font-bold'>Andheri, New Delhi, India</p>
                    </div>

                </div>

                <div className='flex gap-3 items-center'>
                    <img src={wstp} alt="" className='h-10' />
                    <div>
                        <p className='text-gray-500'>Whatsapp</p>
                        <p className='font-bold'>+91 999 888 776</p>
                    </div>
                </div>


                <div className='flex gap-3 items-center'>
                    <img src={mail} alt=" " className='h-10' />
                    <div>
                        <p className='text-gray-500'>Mail Us</p>
                        <p className='font-bold'>info@gmail.com</p>
                    </div>
                </div>


                <div className='flex gap-3 items-center'>
                    <img src={call} alt="" className='h-10' />
                    <div>
                        <p className='text-gray-500'>Call US</p>
                        <p className='font-bold'>+91 98789 98778</p>
                    </div>
                </div>
            </div>
            <hr />


            <div className='my-7 grid gap-6 md:flex justify-between'>

                <div className='grid gap-4' >
                    <div className='flex gap-2 md:gap-3 items-center '>
                        <img src={img} alt="" className='h-8 md:h-10 lg:h-15' />
                        <div className=''>
                            <h1 className=' font-bold md:font-bold text-xs md:text-lg'>JAGANATH</h1>
                            <p className='text-xs font-thin md:font-bold '>TOURIST & TRAVEL</p>
                        </div>
                    </div>

                    <p className='text-gray-500 '>Jagannath Tour & Travels Agency is a popular travel agency in Odisha as well as all over India.</p>
                    <div className='flex gap-2 '>
                        <FaFacebookF size={18} />
                        <FaInstagram size={18} />
                        <FaLinkedinIn size={18} />
                        <FaYoutube size={18} />
                    </div>

                </div>

                <div className='my-4 grid  grid-cols-2 md:grid-cols-4 gap-7'>
                    <div className=''>
                        <h1 className="font-bold font-serif">TOP TOUR PACKAGES
                        </h1>
                        <ul className='space-y-3 my-6'><li>Kedarnath Tour
                        </li>
                            <li>Uttar Bharat Bhraman</li>
                            <li>
                                Bharat Darshan
                            </li>
                            <li>
                                Char Dham Yatra
                            </li>
                            <li>
                                Dwadash Jyotirling Darshan
                            </li>
                            </ul>
                    </div>

                      <div className=''>
                        <h1 className="font-bold font-serif">QUICK SEARCH
                        </h1>
                        <ul className='space-y-3 my-6'><li>New Packages
                        </li>
                            <li>Latest Tour</li>
                            <li>
                                Winter Journey
                            </li>
                            <li>
                                Summer Trips
                            </li>
                            <li>
                                Adventures
                            </li>
                            </ul>
                    </div>

                     

                      <div className=''>
                        <h1 className="font-bold font-serif">QUICK LINKS
                        </h1>
                        <ul className='space-y-3 my-6'><li>Tour Packages
                        </li>
                            <li>Gallery</li>
                            <li>
                                Feedback
                            </li>
                            <li>
                               Contact
                            </li>
                          
                            </ul>
                    </div>

                     <div className=''>
                        <h1 className="font-bold font-serif">IMPORTAN LINKS
                        </h1>
                        <ul className='space-y-3 my-6'><li>Privacy Policy
                        </li>
                            <li>Cancellation Policy</li>
                            <li>
                               Tour Guide
                            </li>
                            <li>
                               Terms & Conditions
                            </li>
                           
                            </ul>
                    </div>
                </div>
            </div>

            <hr />
            <div className='flex justify-between mt-4'>
                <p>All right reserve ©2025 - Jagannath Tour & Travels</p>
                <p>Design & Developed by Web_Bocket </p>
            </div>
        </div >
    )
}

export default Footer