import React,{useEffect} from 'react'
import summer from "../../Assets/Images/Frame 98.png"
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";


const SummerDeals = () => {
  
          useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      delay: 200,
    });
  }, []);
  return (
    <div className='px-4 md:px-10 grid max-sm:grid-rows-2 md:grid-cols-2 my-6 '>
<img src={summer} alt="" className='object-cover' data-aos="flip-right" />
<div className='flex items-center justify-center flex-col  bg-indigo-950 text-white rounded-sm ' data-aos="flip-left">
    <p>Enjoy Summer Deals</p>
    <p className='text-lg font-bold'>Up to 40% Discount!</p>
    <button className='flex gap-2 items-center m-auto bg-blue-800 text-white text-sm px-2 py-2 rounded-lg font-serif my-4'>Take Tour List <FaArrowRight/></button>


</div>
    </div>
  )
}

export default SummerDeals