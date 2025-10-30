import React from 'react'
import chat from '../../assets/chat.jpg';


const HeroSection = () => {
  return (
    <div>
      <div className=' h-60 md:h-[40pc] bg-cover bg-center bg-no-repeat rounded-2xl text-white' style={{ backgroundImage: `url(${chat})` }}>
        <div className='flex justify-between gap-8 text-xs md:text-3xl lg:text-4xl '>
          <h1 className='px-6 py-4  '>Sales Details</h1>
          <div><select name="" id="" className='active:text-black px-6 py-4 hover:text-gray-300'>
            <option value="" className='text-black '>
              October</option>
            <option value="" className='text-black'>Nov</option>
            <option value="" className='text-black'>December</option></select></div>
        </div>
      </div>

      <div className='my-4 bg-white py-4'>


        <div className='text-sm md:text-2xl lg:text-4xl xl:text-5xl flex justify-between '>
          <p>Deals Details
          </p>
          <select>
            <option value="" className='text-black '>
              October</option>
            <option value="" className='text-black'>Nov</option>
            <option value="" className='text-black'>Nov</option>
            <option value="" className='text-black'>Nov</option>
            <option value="" className='text-black'>December</option>
            <option value="" className='text-black'>December</option>
            <option value="" className='text-black'>December</option>
            <option value="" className='text-black'>December</option>
            </select>


        </div>
        <div>
          <table>
            <caption>Table</caption>
            <thead>
              <tr>
                <th rowSpan={2}> thello </th>
                <th colSpan={2}>hii</th>
                <th>namaste</th>
              </tr>
            </thead>

            <tbody className='items-center'>
              <tr>
                <td>hii</td>
                <td>hello</td>
                <td>hu</td>
                <td>hi</td>
                <td>ji</td>
              </tr>
              <tr>
                <td>hii</td>
                <td>hello</td>
                <td>hu</td>
                <td>hi</td>
                <td>ji</td>
              </tr>

            </tbody>

          </table>
        </div>
      </div>

    </div>
  )
}
export default HeroSection;
