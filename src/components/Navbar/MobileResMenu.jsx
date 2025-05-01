import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { navLinks } from './Navbar';

const MobileResMenu = ({showMenubar, setShowMenubar}) => {
  return (
    <div className={`fixed z-50 top-0 ${showMenubar ? "left-0" : "-left-[200%]"} 
      h-screen w-screen bg-black/60 block transition-all duration-300`}>
      <div className='absolute top-0 left-0 w-[80%] sm:w-[60%] h-full bg-white p-7'>

        {/* Header Section */}
        <div className='flex justify-between items-center'>
          <h1 className='flex items-center gap-3'>
            <span><FaUserCircle size={40} /></span>
            <span className='text-lg font-semibold'>User</span>
          </h1>
          <span>
            <IoMdClose size={25} onClick={() => setShowMenubar(prev => !prev)}
              className='cursor-pointer'  
            />
          </span>
        </div>

        {/* Links */}
        <div className='py-10'>
          <ul className='space-y-6'>
            {
              navLinks.map(({id, text}) => (
                <li className='font-semibold' key={id}>
                  {text}
                </li>
              ))
            }
          </ul> 
        </div>
      </div>
        <div className='absolute left-6 bottom-6 sm:text-lg'>
          Download Hight Quality Images for Free
        </div>
    </div>
  )
}

export default MobileResMenu