import React from 'react'
import CarVideo from '../../assets/Car flames 2k_.mp4'
import Logo from '../../assets/logo_3.png'
import { FaLocationArrow } from "react-icons/fa6";
import { IoPhonePortraitSharp } from "react-icons/io5"

// Social Medial handles
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const socialMediaHandles = [
  {
    id: 1,
    text : <FaInstagram size={23} className='hover:scale-110 transition-all duration-300 hover:text-primary cursor-pointer
            dark:text-white dark:hover:text-primary'/>
  },
  {
    id: 2,
    text : <FaFacebook size={23} className='hover:scale-110 transition-all duration-300 hover:text-primary cursor-pointer
          dark:text-white dark:hover:text-primary'/>
  },
  {
    id: 3,
    text : <FaLinkedin size={23} className='hover:scale-110 transition-all duration-300 hover:text-primary cursor-pointer
          dark:text-white dark:hover:text-primary'/>
  },
  {
    id: 4,
    text : <FaWhatsapp size={23} className='hover:scale-110 transition-all duration-300 hover:text-primary cursor-pointer
          dark:text-white dark:hover:text-primary'/>
  },
]

const Footer = () => {
  return (
    <div>
      <div className='relative min-h-[500px] min-w-screen'>

        {/* Background Video */}
        <video autoPlay muted loop
          className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
        >
          <source src={CarVideo} type="video/mp4"/>
        </video>

        {/* Links Section */}
        <div className='bg-black/65 dark:bg-black/80 relative top-0 left-0 min-h-[500px] min-w-screen z-10'>
          <div className='container py-24'>
            <div className='py-14 px-3 bg-white dark:bg-gray-900 rounded-md grid grid-cols-2 md:grid-cols-4 gap-8'>

              {/* Text Content Section */}
              <div className='space-y-3'>
                <div className='grid grid-cols-2 max-lg:grid-cols-1 justify-items-center sm:pt-4'>
                  <div>
                    <img src={Logo} className='max-w-[85px] max-h-[55px] sm:max-w-[105px] sm:max-h-[75px]'/>
                  </div>
                  <p className='text-sm max-sm:line-clamp-3 dark:text-gray-200'>
                    Explored the Images?, do check out some of the important links for more info. 24 x 7 Customer Support without any problems
                  </p>
                </div>
                <div className='flex gap-3 items-center px-2'>
                  <span><FaLocationArrow size={17} className='dark:text-white'/></span>
                  <span className='tracking-wide dark:text-gray-300 text-sm sm:text-base'>Gujarat, Ahmedabad</span>
                </div>
                <div className='flex gap-2 items-center px-2'>
                  <span><IoPhonePortraitSharp size={17} className='dark:text-white'/></span>
                  <span className='tracking-wide dark:text-gray-300 text-sm sm:text-base'>+91 1254376980</span>
                </div>

                {/* Social Media Handles */}
                <div className='px-2 py-2 flex gap-3 lg:gap-4'>
                  {
                    socialMediaHandles.map(({id, text}) => (
                      <span key={id}>{text}</span>
                    ))
                  }
                </div>
              </div>

              {/* Links Section 1 */}
              <div>
                <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold dark:text-white'>Car Companies</h1>
                <ul className='pt-4 space-y-4'>
                  {
                    ["Koenigsegg", "Bugatti", "Ferrari", "Lamborghini", "Astom Martin"].map((text, id) => (
                      <li className='sm:text-lg' key={id}>
                        <a href={`/#${text}`} className='hover:text-primary transition-all duration-300
                        dark:text-gray-300 dark:hover:text-secondary'>{text}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>

              {/* Links Section 2 */}
              <div>
                <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold dark:text-white'>Car Companies</h1>
                <ul className='pt-4 space-y-4'>
                  {
                    ["Nissan", "Lotus", "Ajlani", "Chevrolet", "Bentley"].map((text, id) => (
                      <li className='sm:text-lg' key={id}>
                        <a href={`/#${text}`} className='hover:text-primary transition-all duration-300
                        dark:text-gray-300 dark:hover:text-secondary'>{text}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>

              {/* Links Section 3 */}
              <div>
                <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold dark:text-white'>Other Links</h1>
                <ul className='pt-4 space-y-4'>
                  {
                    ["Sweden", "Italy", "America", "China", "Dubai"].map((text, id) => (
                      <li className='sm:text-lg' key={id}>
                        <a href={`/#${text}`} className='hover:text-primary transition-all duration-300
                        dark:text-gray-200 dark:hover:text-secondary'>{text}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          <div class="absolute bottom-10 sm:bottom-6 left-1/2 -translate-x-1/2 text-xs md:text-sm xl:text-base text-white tracking-wide text-center">MADE BY ZANKHAN, AMBITIOUS &amp; ANONYMOUS CODER😎🔥</div>
        </div>    
      </div>
    </div>
  )
}

export default Footer