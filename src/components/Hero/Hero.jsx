import React from 'react'
import CarVideo from '../../assets/Car flames 2k_.mp4'
import BolideImg from '../../assets/bugatti/bugatti bolide landscape 2.jpg'
import Slider from 'react-slick'

import img1 from '../../assets/all_samples/futuristic-exploration-dubai-s-evolving-cityscape.jpg'
import img2 from '../../assets/all_samples/mini-coupe-parking-highway-bridge.jpg'
import img3 from '../../assets/all_samples/red lambo.avif'

const sliderConfig = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3_000,
  cssEase: 'linear',
  pauseOnHover: true,
  pauseOnFocus: true,
}

const carImages = [
  {
    id: 1,
    image: img1,
  },
  {
    id: 2,
    image: img2,
  },
  {
    id: 3,
    image: img3,
  },
]

const Hero = ({setShowPopup}) => {
  return (
    /* 
      don't create empty main div, coz it will start from the top, and if you do this then its absolute child elements
      will also start its top-[] from navbar top which will clash

      ! the only problem between making parent relative & absolute is that, relative will consider on its own 
      ! while absolute will consider html element as its parent div which will mess all the other Components
    */
    // <div>
      <div className='relative h-[700px] w-screen'>
        <video className='absolute h-full w-full object-cover z-[-1]'
            autoPlay muted loop>
          <source src={CarVideo} type="video/mp4"/>
        </video>

        <div className='relative bg-black/70 dark:bg-black/80 h-full w-full z-20'>
          <div className="container text-white py-[180px]">
            <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10'>

              {/* Text Content Section */}
              <div className='order-2 lg:order-1 space-y-6 lg:space-y-7'>
                <h1 className='text-3xl lg:text-5xl font-bold text-primary'>Get Images for Free</h1>
                <p className='cursor-default text-sm lg:text-base text-pretty py-4 line-clamp-3'>
                  Want some images for your project, check out our free high quality images. We have famous car companies like 
                  Bugatti, Lamborghini, Koenigsegg and much more. What are your waiting for? Grab those Images right now
                </p>
                <button className='bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 
                  text-sm lg:text-base hover:scale-105 transition-all duration-300 rounded-full'
                  onClick={() => setShowPopup(prev => !prev)}
                >
                  Download Now
                </button>
              </div>

              {/* Image Slider Section */}
              <div className='order-1 lg:order-2'>
                <div className='w-[350px] sm:w-[430px] lg:w-[460px] mx-auto'>
                  <Slider {...sliderConfig}>
                    {
                      carImages.map(({id, image}) => (
                        <div key={id}>
                          <div className='mx-auto max-w-[300px] sm:max-w-[400px] sm:max-h-[550px] xl:max-w-[500px] xl:max-h-[700px] px-3'>
                            <img src={image} className='max-w-full max-h-full object-cover rounded-lg border-2 border-white'/>
                          </div>
                        </div>
                      ))
                    }
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  )
}

export default Hero