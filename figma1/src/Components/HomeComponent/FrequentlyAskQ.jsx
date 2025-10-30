import React, { useState } from 'react'
import { FaArrowCircleDown } from "react-icons/fa";
import { ImCross } from "react-icons/im";


const FrequentlyAskQ = () => {
    const [open, setOpen] = useState(false);
    const[open1, setOpen1]=useState(false);
    const[open2, setOpen2]=useState(false);
    const[open3, setOpen3]=useState(false);
    const[open4, setOpen4]=useState(false);
    return (
        <div className='mx-9 my-5 '>
            <button className=' text-blue-400 rounded-full shadow-lg px-4 py-3'  >FREQUENTLY ASKED QUESTIONS</button>

            <div className='flex items-center justify-between'>
                <h1 className='text-lg font-bold'>Find Answers to Yur FAQs on Our Site!</h1>
                <p className='text-sm text-gray-400 font-serif w-[300px] lg:w-[500px]'>These FAQs are designed to provide you with the information you need quicky and easily.</p>
            </div>


            <div className='my-6 '>

                <div className='bg-gray-100 grid  px-4 py-3 mb-3 rounded-lg cursor-pointer items-center ' onClick={() => setOpen(!open)}>
                  <div className='flex justify-between items-center'>
                    <p className='font-bold'>What Is Financial Management?</p>
                    <FaArrowCircleDown onClick={() => setOpen(true)} /></div>  
                    {open &&
                        <div className='flex justify-between px-5 py-2   mt-2 bg-white rounded-lg'>
                            <p className='mt-2 text-sm text-gray-600'>
                                Financial management is the process of planning, organizing, controlling, and monitoring the financial resuorces of an individual or company to achieve rheir financial goals.</p>
                                <ImCross size={13} onClick={()=>setOpen(false)} className='my-2 mx-2'/>

                        </div>}
                </div>


                 <div className='bg-gray-100 grid  px-4 py-3 mb-3 rounded-lg cursor-pointer items-center ' onClick={() => setOpen1(!open1)}>
                  <div className='flex justify-between items-center'>
                    <p className='font-bold'>What Are The Benefits Of Using Financial Management Service?</p>
                    <FaArrowCircleDown onClick={() => setOpen1(true)} /></div>  
                    {open1 &&
                        <div className='flex justify-between px-5 py-2   mt-2 bg-white rounded-lg'>
                            <p className='mt-2 text-sm text-gray-600'>
                                Enhancing Financial Management Effective financial management is the cornerstone of any thriving business. Financial services provide the tools and expertise needed to manage your company’s finances deftly. This includes budgeting, forecasting, and monitoring financial performance.</p>
                                <ImCross size={18} onClick={()=>setOpen1(false)} className='my-2 mx-2'/>

                        </div>}
                </div>

                
                 <div className='bg-gray-100 grid  px-4 py-3 mb-3 rounded-lg cursor-pointer items-center ' onClick={() => setOpen2(!open2)}>
                  <div className='flex justify-between items-center'>
                    <p className='font-bold'>How To Get Started With Financial Management Services?</p>
                    <FaArrowCircleDown onClick={() => setOpen2(true)} /></div>  
                    {open2 &&
                        <div className='flex justify-between px-5 py-2   mt-2 bg-white rounded-lg'>
                            <p className='mt-2 text-sm text-gray-600'>
                               To get started with financial management services, first assess your financial goals such as saving, investing, or budgeting. Then, choose a trusted financial advisor or digital platform that fits your needs. Finally, share your financial details and work with them to create a personalized financial plan and regularly track your progress.</p>
                                <ImCross size={18} onClick={()=>setOpen2(false)} className='my-2 mx-2'/>

                        </div>}
                </div>


                 <div className='bg-gray-100 grid  px-4 py-3 mb-3 rounded-lg cursor-pointer items-center ' onClick={() => setOpen3(!open3)}>
                  <div className='flex justify-between items-center'>
                    <p className='font-bold'>Are Financial Management Service Only For People With High Income?</p>
                    <FaArrowCircleDown onClick={() => setOpen3(true)} /></div>  
                    {open3 &&
                        <div className='flex justify-between px-5 py-2   mt-2 bg-white rounded-lg'>
                            <p className='mt-2 text-sm text-gray-600'>
                               No, financial management services are not only for people with high income. They are beneficial for anyone who wants to manage their money wisely, set financial goals, and plan for the future. Even individuals with moderate or low income can use these services to save, budget, and invest effectively.</p>
                                <ImCross size={18} onClick={()=>setOpen3(false)} className='my-2 mx-2'/>

                        </div>}
                </div>


                 <div className='bg-gray-100 grid  px-4 py-3 mb-3 rounded-lg cursor-pointer items-center ' onClick={() => setOpen4(!open4)}>
                  <div className='flex justify-between items-center'>
                    <p className='font-bold'>How can I contact your support team if I have additional questions?</p>
                    <FaArrowCircleDown onClick={() => setOpen4(true)} /></div>  
                    {open4 &&
                        <div className='flex justify-between px-5 py-2   mt-2 bg-white rounded-lg'>
                            <p className='mt-2 text-sm text-gray-600'>
                               If you have more questions about financial management, you can contact a certified financial advisor or financial management service provider. They can guide you based on your goals and budget. You can also explore trusted online platforms or banks that offer financial consultation and support.</p>
                                <ImCross size={18} onClick={()=>setOpen4(false)} className='my-2 mx-2'/>

                        </div>}
                </div>


            </div>
        </div>
    )
}
export default FrequentlyAskQ;
