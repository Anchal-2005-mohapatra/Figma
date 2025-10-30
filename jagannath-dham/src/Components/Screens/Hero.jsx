import React,{useEffect} from 'react'
import frame from "../../Assets/Images/Frame 145.png";
import frame1 from "../../Assets/Images/Frame 147.png";
import frame2 from "../../Assets/Images/Frame 149.png";
import frame3 from "../../Assets/Images/Frame 150.png";
import img from "../../Assets/jagannath t&t logo 1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
    useEffect(()=>{
        AOS.init({
            duration:1000,
            once:false,
            offset:100,
            delay:200

        });
    },[])
  
    return (
        <div className='grid  px-4 md:px-10 md:flex  gap-2  mt-20   '>
            <div className='flex flex-col items-center gap-4 justify-center  md:relative  md:space-y-14' data-aos="fade-left">
                <img src={frame} alt="" className='' />
                <img src={frame1} alt="" className=' md:right-0 h-[50%] w-[50%] md:h-[80px] md:bottom-4 lg:h-[160px] lg:bottom-3 xl:bottom-0 md:absolute' />
            </div>
            <div className='text-center my-2 md:my-4 md:mt-15 ' data-aos="flip-right">
                <img src={img} alt="" className='h-5 md:h-8 lg:h-14 m-auto ' />
                <button className='my-1 md:my-3 text-xs  bg-blue-100 text-blue-600 px-1 md:px-2 py-2 rounded-lg font-serif'>Poular Journey</button>
                <h1 className='font-bold  md:my-3 text-md md:text-lg  lg:text-2xl lg:my-5'>Let’s Discover The World With Our Excellent Eyes</h1>
                <p className='text-xs md:text-sm text-gray-500'>Whether you’re looking for a romantic getawaamily-friendly solo journey to explore the world, a travel agency can provide tailored itinerary that exceeds your expectations.</p>
                <button className='flex gap-2 items-center m-auto bg-blue-100 text-blue-600 px-2 py-2 rounded-lg font-serif my-4 text-sm md:text-md '>Take Tour List <FaArrowRight/></button>
            </div>
            <div className='flex flex-col items-center gap-4 justify-center  md:relative md:space-y-14'data-aos="fade-right">
                <img src={frame2} alt="" />
                <img src={frame3} alt="" className=' md:left-0 md:bottom-4 h-[50%] w-[50%] md:h-[80px]  lg:h-[160px] lg:bottom-3 xl:bottom-0' />
            </div>
        </div>
    )
}

export default Hero