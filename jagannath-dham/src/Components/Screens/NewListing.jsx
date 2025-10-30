import React, { useEffect } from 'react'
import frame46 from "../../Assets/Images/Frame 46.png";
import AOS from "aos";
import "aos/dist/aos.css";
import konark from "../../Assets/Images/Frame 46 (1).png";
import lake from "../../Assets/Images/image 12.png";
import hydara from "../../Assets/Images/image 12 (1).png";
import asam from "../../Assets/Images/Frame 46 (2).png";
import bridge from "../../Assets/Images/image 12 (2).png";
import budha from "../../Assets/Images/Frame 46 copy.png";
import andra from "../../Assets/Images/Frame 46 (3).png";
import { MdArrowOutward } from "react-icons/md";
import flight from "../../Assets/Images/Frame 50.png";
import hotel from "../../Assets/Images/Frame 50 (1).png"
import sightseen from "../../Assets/Images/Frame 50 (2).png";
import meal from "../../Assets/Images/Frame 50 (3).png";
import transfer from "../../Assets/Images/Frame 50 (4).png";

const images = [
    {
        id: 1,
        name: "Kashmir Tour",
        image: frame46,
        days: "jammu & Kashmir → 10 Days",
        price: 600
    },
    {
        id: 2,
        name: "Ladakh Tour",
        image: lake,
        location: "jammu & Kashmir",
        days: "jammu & Kashmir → 10 Days",
        price: 600
    },
    {
        id: 3,
        name: "Odisha Tour",
        image: konark,
        location: "jammu & Kashmir",
        days: "jammu & Kashmir → 10 Days",
        price: 600
    },
    {
        id: 4,
        name: "Asam Tour",
        image: asam,

        days: "jammu & Kashmir → 10 Days",
        price: 600
    },
    {
        id: 5,
        name: "UttarakhandTour",
        image: bridge,

        days: "jammu & Kashmir → 10 Days",
        price: 600
    },
    {
        id: 6,
        name: "Bihar Tour",
        image: budha,

        days: "jammu & Kashmir → 10 Days",
        price: 600
    },
    {
        id: 7,
        name: "Hydrabad Tour",
        image: hydara,

        days: "jammu & Kashmir → 10 Days",
        price: 600
    },
    {
        id: 8,
        name: "Andrapradesh Tour",
        image: andra,

        days: "jammu & Kashmir → 10 Days",
        price: 600
    },
];


const NewListing = ({ item }) => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            delay: 200,
        });
    }, []);
    return (
        <div className='bg-yellow-50 py-6'>
            <div className='m-auto text-center'>
                <button className='bg-blue-100  text-blue-600  px-3 py-2 rounded-lg font-serif borer-none'>Popular Tour list</button>
                <p className='font-bold text-lg my-4'>New Listing in Our Tour</p>
            </div>
            <div className='flex overflow-scroll md:grid md:grid-cols-2 lg:grid-cols-4  gap-4 px-4 md:px-10'>
                {images.map((items) => {
                    return (
                        <div key={items.id} className='rounded-lg bg-white py-3 px-2'>
                            <img src={items.image} alt="" className='rounded-lg ' />
                            <div className='grid gap-1 px-3 mt-2 '>
                                <p className='font-bold'>{items.name}</p>
                                <p className='text-xs mb-3'>{items.days}</p>
                                <div className='flex justify-between '>
                                    <button className='flex items-center  gap-2 bg-blue-600 text-white rounded-lg text-xs px-2 ' >Book Now <MdArrowOutward />
                                    </button>
                                    <div>
                                        <p className='text-xs'>Per Person</p>
                                        <p className='font-bold'>₹{items.price}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='px-1 flex gap-5 md:grid md:grid-cols-5 lg:flex lg:justify-between lg:gap-2'>

                                    <div className='flex flex-col justify-center items-center'>
                                        <img src={flight} alt="" className='h-9 md:h-6 lg:h-10' />
                                        <p className='text-xs md:font-extralight  text-gray-400 '>Flight</p>
                                    </div>

                                    <div className='flex flex-col justify-center items-center'>
                                        <img src={hotel} alt="" className='h-9 md:h-6 lg:h-10' />
                                        <p className='text-xs md:font-extralight text-gray-400 '>Hotel</p>
                                    </div>

                                    <div className='flex flex-col justify-center items-center'>
                                        <img src={sightseen} alt="" className='h-9 md:h-6 lg:h-10' />
                                        <p className='text-xs md:font-extralight text-gray-400'>Sightseeing</p>
                                    </div>

                                    <div className='flex flex-col justify-center items-center'>
                                        <img src={meal} alt="" className='h-9 md:h-6 lg:h-10' />
                                        <p className='text-xs md:font-extralight  text-gray-400'>Meals</p>
                                    </div>

                                    <div className='flex flex-col justify-center items-center'>
                                        <img src={transfer} alt="" className='h-9 md:h-6 lg:h-10' />
                                        <p className='text-xs md:font-extralight text-gray-400'>Transfers</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default NewListing