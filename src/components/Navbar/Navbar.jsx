import React, { useState } from 'react'
import Logo from '../../assets/logo_3.png'
import { NavLink } from 'react-router'
import { FaCaretDown } from 'react-icons/fa'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import MobileResMenu from './MobileResMenu'

export const navLinks = [
  {
    id: 1,
    text : (
      <NavLink to="/" onClick={() => window.scrollTo(0, 0)}
        className={({isActive}) => `${isActive ? "text-primary" : "text-black"} md:text-lg lg:text-xl`}
      >
        Home
      </NavLink>
    )
  },
  {
    id: 2,
    text : (
      <NavLink to="/blogs" onClick={() => window.scrollTo(0, 0)}
        className={({isActive}) => `${isActive ? "text-primary" : "text-black"} md:text-lg lg:text-xl`}
      >
        Blogs
      </NavLink>
    )
  },
  // {
  //   id: 3,
  //   text : (
  //     <NavLink to="/about-cars" onClick={() => window.scrollTo(0, 0)}
  //       className={({isActive}) => `${isActive ? "text-primary" : "text-black"} md:text-lg lg:text-xl`}
  //     >
  //       About
  //     </NavLink>
  //   )
  // },
  {
    id: 4,
    text : (
      <NavLink to="/preview-imgs" onClick={() => window.scrollTo(0, 0)}
        className={({isActive}) => `${isActive ? "text-primary" : "text-black"} md:text-lg lg:text-xl`}
      >
        Preview
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
      <div className='fixed top-0 left-0 w-screen bg-gray-200 shadow-xl z-40'>
        <div className='container py-3'>
                          {/* // ? max-[477px] max-[412px] */ }
          <div className='grid grid-cols-2 min-[434px]:grid-cols-3 md:grid-cols-4 place-items-stretch'>

            {/* Left Section */}
            <div className='col-span-1 max-h-[120px] max-w-[120px] lg:max-w-[140px]'>
              <img src={Logo} className='max-h-full max-w-full rounded-full object-contain'/>
            </div>

            {/* navLinks */}
            <div className='hidden md:grid justify-items-center col-span-2'>
              <ul className='flex justify-between items-center gap-14'>
                {
                  navLinks.map(({id, text}) => (
                    <li key={id} className='font-semibold'>
                      {text} 
                    </li>
                  ))
                }

                {/* Quick Links Dropdown */}
                <li className='group relative hidden lg:block'>
                  <a href="/#quick-links" className='text-xl font-semibold flex items-center gap-2'>
                    <span className='text-center'>Imp Links</span>
                    <span><FaCaretDown className='group-hover:-rotate-180 transition-all duration-300'/></span>
                  </a>
                  <div className='absolute -left-10 hidden group-hover:block w-[150px] pt-2'>
                    <ul className='p-2 bg-white space-y-4 rounded-md shadow-md'>
                      {
                        dropDownLinks.map(({id, text, link}) => (
                          <li key={id} 
                          className='hover:bg-primary/50 hover:text-white px-1 py-2 text-lg font-semibold rounded-md cursor-pointer'>
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
            <div className='max-[434px]:hidden flex col-span-1 justify-center items-center'>
              <button className='bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 
                text-sm lg:text-xl hover:scale-105 transition-all duration-300'
                onClick={() => setShowPopup(prev => !prev)}
              >
                Download Now
              </button>
            </div>

            {/* Hamburger Menu */}
            <div className='col-span-1 md:hidden flex justify-end items-center'>
              {
                showMenubar ? (
                  <HiMenuAlt1 onClick={() => setShowMenubar(prev => !prev)}
                    className="cursor-pointer transition-all"
                    size={35}
                  />
                ) : (
                  <HiMenuAlt3 onClick={() => setShowMenubar(prev => !prev)}
                    className="cursor-pointer transition-all"
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