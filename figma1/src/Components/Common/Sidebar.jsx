import React from 'react'

const Sidebar = ({ menu, onClose }) => {
  if (!menu) return null;

  return (
    <div>

      {menu && (
        <div className='min-h-screen opacity-80 z-50 fixed right-0 top-10 bg-black text-white w-1/2 md:w-1/3 lg:w-100 ' >

          <ul className='grid gap-3 px-5 py-5 cursor-pointer'>
            <button onClick={onClose} className='text-right'>✕</button>
            <li><a href="#1" onClick={onClose} >Home</a></li>
            <li><a href="#2" onClick={onClose} >About</a></li>
            <li><a href="#3" onClick={onClose}>Pricing</a></li>
            <li><a href="#4" onClick={onClose}>Customers</a></li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Sidebar