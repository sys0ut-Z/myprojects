import React, { useState } from 'react'
import Logo from '../../assets/logo_3.png'
import { NavLink } from 'react-router'
import { FaCaretDown } from 'react-icons/fa'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import MobileResMenu from './MobileResMenu'
import DarkMode from './DarkMode'

const navLinks = [
  {
    id: 1,
    text : (
      <NavLink to="/" onClick={() => window.scrollTo(0, 0)}
        className={({isActive}) => `${isActive ? "text-primary" : "text-black dark:text-white"} text-xs md:text-sm`}
      >
        Home
      </NavLink>
    )
  },
  {
    id: 2,
    text : (
      <NavLink to="/blogs" onClick={() => window.scrollTo(0, 0)}
        className={({isActive}) => `${isActive ? "text-primary" : "text-black dark:text-white"} text-xs md:text-sm`}
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
        className={({isActive}) => `${isActive ? "text-primary" : "text-black dark:text-white"} text-xs md:text-sm`}
      >
        Preview
      </NavLink>
    )
  },
  {
    id: 5,
    text : (
      <NavLink to="/cars-info" onClick={() => window.scrollTo(0, 0)}
        className={({isActive}) => `${isActive ? "text-primary" : "text-black dark:text-white"} text-xs md:text-sm`}
      >
        Info
      </NavLink>
    )
  },
]

const dropDownLinks = [
  {
    id: 1,
    text : "Top Companies",
    link : "/#top-companies"
  },
  {
    id: 2,
    text : "Best Collections",
    link : "/#best-collections"
  },
  {
    id: 3,
    text : "Sample Images",
    link : "/#sample-images"
  },
]

const Navbar = ({setShowPopup}) => {
  const [showMenubar, setShowMenubar] = useState(false);

  return (
    /* 
      adjust z-index of both video in Hero & here
    */
    <div>
      <div className='fixed top-0 left-0 w-screen bg-gray-200 dark:bg-gray-900 shadow-xl z-40'>
        <div className='container py-1'>
                          {/* // ? max-[477px] max-[412px] lg:grid-cols-4  min-[434px]:grid-cols-5 min-[852px]:max-lg:grid-cols-5 */ }
          <div className='flex justify-between'>

            {/* Left Section */}
            <div className='col-span-1 max-h-[70px] max-w-[70px] lg:max-w-[85px]'>
              <img src={Logo} className='max-h-full max-w-full rounded-full object-contain'/>
            </div>

            {/* navLinks */}
            <div className='hidden min-[500px]:flex items-center'>
              <ul className='flex justify-center gap-7'>
                {
                  navLinks.map(({id, text}) => (
                    <li key={id}>
                      {text} 
                    </li>
                  ))
                }
              </ul>
            </div>

            {/* Button */}
            <div className='flex justify-end items-center gap-2'>
              <button className='hidden [@media(min-width:640px)]:block bg-gradient-to-r from-primary to-secondary text-white 
                px-4 py-1 sm:px-5 sm:py-2 text-xs hover:scale-105 transition-all duration-300 rounded-full'
                onClick={() => setShowPopup(prev => !prev)}
              >
                Download
              </button>
              <DarkMode />
              {/* Hamburger Menu */}
              <div className='min-[500px]:hidden flex items-center'>
                {
                  showMenubar ? (
                    <HiMenuAlt1 onClick={() => setShowMenubar(prev => !prev)}
                      className="cursor-pointer transition-all dark:text-primary"
                      size={21}
                    />
                  ) : (
                    <HiMenuAlt3 onClick={() => setShowMenubar(prev => !prev)}
                      className="cursor-pointer transition-all dark:text-primary"
                      size={21}
                    />
                  )
                }
              </div>
            </div>

          </div>
        </div>
      </div>
      <div>
        <MobileResMenu showMenubar={showMenubar} setShowMenubar={setShowMenubar} />
      </div>
    </div>
  )
}

export default Navbar