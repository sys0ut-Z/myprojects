import React from 'react'
import BolideImg from '../../assets/bugatti/bugatti bolide landscape.jpg'

const Banner = () => {
  return (
    <div className='py-16 bg-gray-200'>
      <div className="container">
        <h1 className='pb-16 text-3xl lg:text-4xl font-bold text-center text-primary'>Top Companies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">

          {/* Image Section */}
          <div className='group relative max-h-[200px] max-w-[440px] md:max-h-[250px] md:max-w-[500px]'>
            <img src={BolideImg} alt="bolide_img" className='block mx-auto max-w-full max-h-full rounded-lg
            group-hover:scale-110 transition-all duration-500'/>
            {/* <p className='group-hover:block hidden italic font-bold absolute bottom-5 left-1/2 -translate-x-1/2 text-xl xl:text-2xl text-secondary transition-all duration-500'>
              BUGATTI BOLIDE
            </p> */}
          </div>

          {/* Text Section */}
          <div className='flex items-center'>
            <p className='lg:text-lg px-4 text-pretty font-semibold line-clamp-[8]'>Bugatti is a French luxury automobile manufacturer known for producing high-performance, handcrafted sports cars. Founded in 1909 by Ettore Bugatti, the brand became famous for its innovation, elegance, and racing success. The company combines cutting-edge technology with timeless design to create some of the world’s most exclusive vehicles. Bugatti cars are known for their exceptional speed, luxury, and engineering precision. Models like the Veyron and Chiron have set world records for top speed while offering unmatched performance and comfort. Each car features a powerful W16 engine, advanced aerodynamics, and a meticulously crafted interior</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner