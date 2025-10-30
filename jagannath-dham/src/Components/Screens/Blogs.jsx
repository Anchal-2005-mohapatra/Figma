import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";
import temple from "../../Assets/Images/Frame 79.png";
import img1 from "../../Assets/Images/3.png";
import img2 from "../../Assets/Images/4.png";
import img3 from "../../Assets/Images/5.png";
import img4 from "../../Assets/Images/6.png";
import img5 from "../../Assets/Images/7.png";
import img6 from "../../Assets/Images/8.png";
import tower from "../../Assets/Images/2 53.png";
import flight from "../../Assets/Images/3 1.png";
const items = [
    {
        id: 1,
        image: temple,
        location: "Uttarakhand",
        place: "Char- Dham Yatra (The Devotional Places)",
        date: "25th Dec 2025"

    },
    {
        id: 2,
        image: temple,
        location: "Uttarakhand",
        place: "Char- Dham Yatra (The Devotional Places)",
        date: "25th Dec 2025"

    },
    {
        id: 3,
        image: temple,
        location: "Uttarakhand",
        place: "Char- Dham Yatra (The Devotional Places)",
        date: "25th Dec 2025"

    },
    {
        id: 4,
        image: temple,
        location: "Uttarakhand",
        place: "Char- Dham Yatra (The Devotional Places)",
        date: "25th Dec 2025"

    }
]
const Blogs = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false
        })
    }, []);
    return (

        <div className='px-4 md:px-10 text-xs md:text-md '>
            <div className='text-center my-5'>
                <button className='px-3 py-2 bg-blue-100 text-blue-600 rounded-lg '>Our Blogs</button>
                <h1 className='text-lg  font-bold my-4'>
                    Our Latest Blogs
                </h1>
                <p>Are You Tired Of The Typical Destination And Looking To Step Out Of Your Comfort Zone Travel!</p>
            </div>

            <div className='grid md:grid-cols-4 gap-2  md:gap-4 lg:gap-6 my-4 '>
                {items.map((item) => (
                    <div key={item.id} className='bg-white  shadow-lg px-3 py-4 border-2 border-x-gray-200 rounded-lg' data-aos="flip-down">
                        <img src={item.image} alt="" className='h-[120px] object-cover bg-no-repeat bg-cover rounded-lg w-full' />
                        <div className='text-left py-2 px-2'>
                            <p>{item.location}</p>
                            <p className='text-md font-bold my-2'>{item.place}</p>
                            <p>{item.date}</p>
                        </div>
                    </div>
                ))}

            </div>


            <div className='grid gap-4 my-4'>
                <div className='text-center my-3'>
                    <button className='bg-blue-100 text-blue-600 px-3 py-2 rounded-lg font-serif my-2'>Our Partners</button>
                    <p className='text-lg font-bold md:xl '>Companies You can Easily Trust</p>
                </div>
                <div className='grid grid-cols-3 md:grid-cols-6   gap-9 md:gap-5 lg:gap-6 items-center'>
                    <img src={img1} alt="" className='h-12' />
                    <img src={img2} alt="" className='h-12' />
                    <img src={img4} alt="" className='h-12' />
                    <img src={img3} alt="" className='h-12' />
                    <img src={img6} alt="" className='h-12' />
                    <img src={img5} alt="" className='h-12' />
                </div>
            </div>

            <div className='grid grid-cols-4 bg-blue-700 px-3 py-4 items-center rounded-lg'>
                <img src={flight} alt="" className='h-10' />
                <div className=' col-span-2 my-4 text-center'>
                    <h1 className='text-white text-lg font-bold my-4'>Subscribe to our Newsletter</h1> 
                  <div className='flex items-center justify-center '>
                   <div><input type="email" placeholder='Enter Your Mail Id ' className='px-3 py-2 rounded-l'/></div> 
                   <div className='px-2 py-3 w-7 h-8 rounded-r  bg-blue-500 last:'> <FaArrowRight color='white' /></div>
                    </div>  

                </div>
                <img src={tower} alt="" className='h-10' />
            </div>
        </div>
    )
}

export default Blogs