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
        className={({isActive}) => `${isActive ? "text-primary" : "text-black dark:text-white"} md:text-md lg:text-lg`}
      >
        Home
      </NavLink>
    )
  },
  {
    id: 2,
    text : (
      <NavLink to="/blogs" onClick={() => window.scrollTo(0, 0)}
        className={({isActive}) => `${isActive ? "text-primary" : "text-black dark:text-white"} md:text-md lg:text-lg`}
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
        className={({isActive}) => `${isActive ? "text-primary" : "text-black dark:text-white"} md:text-md lg:text-lg`}
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
        <div className='container py-3'>
                          {/* // ? max-[477px] max-[412px] lg:grid-cols-4  min-[434px]:grid-cols-5 min-[852px]:max-lg:grid-cols-5 */ }
          <div className='grid grid-cols-4 md:grid-cols-5 xl:grid-cols-4 place-items-stretch'>

            {/* Left Section */}
            <div className='col-span-1 max-h-[100px] max-w-[100px] lg:max-w-[110px]'>
              <img src={Logo} className='max-h-full max-w-full rounded-full object-contain'/>
            </div>

            {/* navLinks */}
            <div className='hidden md:grid justify-items-center col-span-2'>
              <ul className='flex items-center gap-14'>
                {
                  navLinks.map(({id, text}) => (
                    <li key={id} className='font-semibold'>
                      {text} 
                    </li>
                  ))
                }

                {/* Quick Links Dropdown */}
                <li className='group relative hidden lg:block w-[200px]'>
                  <a href="/#quick-links" className='text-lg font-semibold flex items-center gap-2'>
                    <span className='text-center dark:text-white'>Imp Links</span>
                    <span><FaCaretDown className='group-hover:-rotate-180 transition-all duration-300 dark:text-white'/></span>
                  </a>
                  <div className='absolute -left-10 hidden group-hover:block w-[140px] pt-2'>
                    <ul className='p-2 bg-white dark:bg-gray-800 space-y-3 rounded-md shadow-md'>
                      {
                        dropDownLinks.map(({id, text, link}) => (
                          <li key={id} 
                          className='hover:bg-primary/50 dark:hover:bg-primary hover:text-white px-2 py-2 text-md font-semibold rounded-md cursor-pointer dark:text-white'>
                            <a href={link}>{text}</a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            {/* Button */}
            <div className='flex col-span-2 xl:col-span-1 justify-end pr-6 items-center gap-6'>
              <button className='hidden [@media(min-width:450px)]:block bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 
                text-sm lg:text-xl hover:scale-105 transition-all duration-300'
                onClick={() => setShowPopup(prev => !prev)}
              >
                Download Now
              </button>
              <DarkMode />
            </div>

            {/* Hamburger Menu */}
            <div className='col-span-1 md:hidden flex justify-end items-center pr-3'>
              {
                showMenubar ? (
                  <HiMenuAlt1 onClick={() => setShowMenubar(prev => !prev)}
                    className="cursor-pointer transition-all dark:text-primary"
                    size={35}
                  />
                ) : (
                  <HiMenuAlt3 onClick={() => setShowMenubar(prev => !prev)}
                    className="cursor-pointer transition-all dark:text-primary"
                    size={35}
                  />
                )
              }
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