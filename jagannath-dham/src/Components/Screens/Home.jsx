import React, { useState } from 'react'
import jagaa from "../../Assets/Images/bettery 1.png"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Catagories from './Catagories';
import Hero from './Hero';
import NewListing from './NewListing';
import SummerDeals from './SummerDeals';
import Discover from './Discover';
import Gallery from './Gallery';
import Insparation from './Insparation';
import Blogs from './Blogs';
import Footer from '../Common/Footer';
import frame2 from "../../Assets/Images/Frame 149.png";
import frame from "../../Assets/Images/Frame 145.png";

const images = [
    jagaa,
    frame,
    frame2
]
const Home = () => {
    const [slider, setSlider] = useState(0);
    const prevSlider = () => {
        setSlider((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }
    const nextSlide = () => {
        setSlider((prev) => (prev === images.length ? 0 : prev + 1))
    }
    return (
        <>
        <div className='   w-full'>
            <div className='relative min-h-screen  ' >
                <img src={images[slider]} alt="" className={`w-full bg-no-repeat object-cover bg-cover rounded-lg ${slider === 0 ? "w-full h-full" : "w-full h-[100px] lg:h-[600px] object-cover transition-all duration-1000 bg-cover bg-none"}`} />
                <FaArrowLeft color='white' className='absolute z-1 left-2  md:left-6 top-12 md:top-[150px] lg:top-[220px]' onClick={prevSlider} />
                <FaArrowRight color='white' className='absolute z-1 right-2  md:right-6 top-12 md:top-[150px] lg:top-[220px] ' onClick={nextSlide} />
                <div className="flex justify-center mt-3 space-x-2">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSlider(idx)}
                            className={`w-3 h-3 mt-2 rounded-full cursor-pointer ${idx === setSlider ? "bg-blue-900" : "bg-gray-300"
                                }`}
                        ></button>
                    ))}
                </div>
                <div className=''>
                     <Catagories />
                <Hero />
                <NewListing />
                <SummerDeals />
                <Discover />
                <Gallery />
                <Insparation />
                <Blogs />
                </div>
               
              
            </div>

        </div>
          <Footer/>
        </>
    )
}

export default Home