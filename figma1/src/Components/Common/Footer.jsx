import React from 'react'
import { CiMail } from "react-icons/ci";
import logo from '../../Assets/Company Logo.png';


const Footer = () => {
    return (
        <div className='mx-9 my-4'>
            <div className=' flex justify-between'>

                <div className='flex gap-10 md:gap-20'>
                    <div className='grid gap-4'>
                        <h1 className='text-blue-600'>About</h1>
                        <ul className='grid gap-2 text-gray-500'>
                            <li>
                                Terendings
                            </li>
                            <li>
                                About Us
                            </li>
                            <li>
                                Feature
                            </li>
                        </ul>
                    </div>

                    <div className='grid gap-4'>
                        <h1 className='text-blue-600'>Company</h1>
                        <ul className='grid gap-2 text-gray-500'>
                            <li>
                                Partnerships
                            </li>
                            <li>
                                Emplyoee
                            </li>
                            <li>
                                Security
                            </li>
                        </ul>
                    </div>


                    <div className='grid gap-4'>
                        <h1 className='text-blue-600'>Support</h1>
                        <ul className='grid gap-2 text-gray-500'>
                            <li>
                                Support Center
                            </li>
                            <li>
                                Contact Us
                            </li>
                            <li>
                                FAQs
                            </li>
                        </ul>
                    </div>


                    <div className='grid '>
                        <h1 className='text-blue-600'>Movement</h1>
                        <ul className='grid gap-2 text-gray-500'>
                            <li>
                                What is Financy?
                            </li>
                            <li>
                                Support Us
                            </li>

                        </ul>
                    </div>
                </div>

                <div className='flex gap-3 text-gray-500 items-center'>
                    <CiMail />
                    <a href="mailto-financycompany@gmail.com">financycompany@gmail.com</a>

                </div>
            </div>

            <div className='flex justify-between items-center mt-6  border-t pt-4'>
                <img src={logo} alt="" className='h-6 md:h-8 lg:h-9 ' />
                <p className='text-sm text-gray-500'>©Financy All Right Reserved</p>
                <div className='text-sm text-gray-500'>
                    <ul className='flex gap-4'>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Security</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer