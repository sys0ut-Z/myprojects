import React from 'react'
import { NavLink } from 'react-router'
import { FaUserCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
const navLinks = [
  {
    id: 1,
    text : (
      <NavLink to="/" onClick={() => window.scrollTo(0, 0)}
        className={({isActive}) => `${isActive ? "text-primary" : "text-black dark:text-white"} md:text-lg lg:text-xl`}
      >
        Home
      </NavLink>
    )
  },
  {
    id: 2,
    text : (
      <NavLink to="/blogs" onClick={() => window.scrollTo(0, 0)}
        className={({isActive}) => `${isActive ? "text-primary" : "text-black dark:text-white"} md:text-lg lg:text-xl`}
      >
        Blogs
      </NavLink>
    )
  },
  // {
  //   id: 3,
  //   text : (
  //     <NavLink to="/about-cars" onClick={() => window.scrollTo(0, 0)}
  //       className={({isActive}) => `${isActive ? "text-primary" : "text-black dark:text-white"} md:text-lg lg:text-xl`}
  //     >
  //       About
  //     </NavLink>
  //   )
  // },
  {
    id: 4,
    text : (
      <NavLink to="/preview-imgs" onClick={() => window.scrollTo(0, 0)}
        className={({isActive}) => `${isActive ? "text-primary" : "text-black dark:text-white"} md:text-lg lg:text-xl`}
      >
        Preview
      </NavLink>
    )
  },
  {
    id: 5,
    text : (
      <NavLink to="/cars-info" onClick={() => window.scrollTo(0, 0)}
        className={({isActive}) => `${isActive ? "text-primary" : "text-black dark:text-white"} md:text-md lg:text-lg`}
      >
        Info
      </NavLink>
    )
  }
]

const MobileResMenu = ({showMenubar, setShowMenubar}) => {
  return (
    <div className={`fixed z-50 top-0 ${showMenubar ? "left-0" : "-left-[200%]"} 
      h-screen w-screen bg-black/60 block transition-all duration-300`}>
      <div className='absolute top-0 left-0 w-[80%] sm:w-[60%] h-full bg-white dark:bg-gray-800 p-7'>

        {/* Header Section */}
        <div className='flex justify-between items-center'>
          <h1 className='flex items-center gap-3'>
            <span><FaUserCircle size={40} className='dark:text-gray-300'/></span>
            <span className='text-lg font-semibold dark:text-white'>User</span>
          </h1>
          <span>
            <IoMdClose size={25} onClick={() => setShowMenubar(prev => !prev)}
              className='cursor-pointer dark:text-white'  
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
        <div className='absolute left-6 bottom-6 text-xs sm:text-lg text-black dark:text-white'>
          Download High Quality Images for Free
        </div>
    </div>
  )
}

export default MobileResMenu