import React,{useEffect} from 'react'
import batch from "../../Assets/Images/Mask group.png";
import flight from "../../Assets/Images/Mask group1.png";
import tree from "../../Assets/Images/Frame 85.png";
import beach from "../../Assets/Images/image 32.png";
import Travel from "../../Assets/Images/TRAVEL.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Discover = () => {
    useEffect(()=>{
AOS.init({
    duration:1000,
    delay:200,
    once:"false"
})
    },[])
    return (
        <div className='px-4 md:px-10 flex flex-col items-center md:grid md:grid-cols-2 gap-2 md:gap-10'>
            <div>
                <button className='bg-blue-100 text-blue-500 px-3 py-2 text-sm rounded-lg  font-serif'>
                    Why Choose Us?
                </button>
                <div className='my-4'>
                    <p className='font-bold text-xl   my-2'>Discover When Even You Want To Go</p>
                    <p className='text-xs md:text-md mr-10'>Escape to the World’s Most Breathtaking Islands and immerse yourself in paradise. Escape to the World’s Most Breathtaking Islands and immerse yourself in paradise.</p>
                </div>
                <div className='grid gap-3'>
                    <div className='flex gap-5 items-center'>
                        <img src={batch} alt="" className='h-7' />
                        <div>
                            <p className='font-bold text-sm'>Best Travel Agency</p>
                            <p className='text-xs'>Escape to the World’s Most Breathtaking Islands and immerse yourself in paradise. </p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <img src={flight} alt="" className='h-7' />
                        <div>
                            <p className='font-bold text-sm'>Best Travel Agency</p>
                            <p className='text-xs'>Escape to the World’s Most Breathtaking Islands and immerse yourself in paradise. </p>
                        </div>
                    </div>
                </div>
                <button className='px-5 my-5 py-2 bg-blue-600 text-white rounded-lg'>Book Now</button>
            </div>
            <div className='flex justify-around items-center relative w-full '>
               
                    <img src={tree} data-aos="fade-left" alt="" className='  w-[200px] md:[300px] lg:w-[50%]  bg-cover ' />
                    <img src={beach}  alt="" className='absolute rounded-lg w-[90px] md:w-[140px] left-40  bottom-1 top-1/3 md:top-1/3 md:left-0' />
                     <img src={Travel} data-aos="flip-right" alt="" className=' hidden md:block md:w-[90px] md:h-[80%] relative right-10 z-1' />
               
               
            </div>
        </div>
    )
}

export default Discover