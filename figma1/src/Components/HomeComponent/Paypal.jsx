import React from 'react'
import shopify from "../../Assets/shopify.png" 
import vector from "../../Assets/Vector.png";
import dot from "../../Assets/Vector (1).png";
const Paypal = () => {
  return (
    <div id='2' className='flex justify-between px-9 my-8 lg:px-20 py-5 bg-blue-100 text-blue-700'>
        <div className='cursor-pointer flex items-center gap-2'>
          <img src={vector} alt=""  className='h-4'/>
            <p>payPal</p>
            </div>
            <div className=' cursor-pointer flex items-center gap-2'>
              <img src={shopify} alt=""  className='h-6'/>
            <p>shopify</p></div>
            <div className='cursor-pointer'>
            <p>amazon</p></div>
            <div className='cursor-pointer flex items-center gap-2'>
              <img src={dot} alt="" className='h-4' />
            <p>asana</p></div>
    </div>
  )
}

export default Paypal