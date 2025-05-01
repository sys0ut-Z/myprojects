import React from 'react'
import img1 from '../../assets/lamborghini/lambo sian fkp 37 portrait 2.webp'
import img2 from '../../assets/ferrari/ferrari s90 stradale p.jpg'
import img3 from '../../assets/all_samples/lambo huracan.jpg'
import img4 from '../../assets/bugatti/bugatti centodeici portrait.jpg'
import img5 from '../../assets/koenigsegg/koenigsegg gemera portrait.jpg'
import img6 from '../../assets/ferrari/ferrari daytona sp3 portrait.webp'
import img7 from '../../assets/all_samples/BMW.jpg'
import img8 from '../../assets/all_samples/GTR.jpg'
import img9 from '../../assets/all_samples/porsche.jpg'
import img10 from '../../assets/all_samples/lamborghini-aventador-rain.jpg'
import img11 from '../../assets/all_samples/supra img.jpeg'
import img12 from '../../assets/all_samples/front-view-black-sedan-sport-car-bridge_114579-4068.avif'

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
  {
    id: 4,
    image: img4,
  },
  {
    id: 5,
    image: img5,
  },
  {
    id: 6,
    image: img6,
  },
]

const carImages2 = [
  {
    id: 1,
    image: img7,
  },
  {
    id: 2,
    image: img8,
  },
  {
    id: 3,
    image: img9,
  },
  {
    id: 4,
    image: img10,
  },
  {
    id: 5,
    image: img11,
  },
  {
    id: 6,
    image: img12,
  },
]

const BestCars = () => {
  return (
    <div className='py-16 text-black bg-gray-100'>
      <div className='container space-y-10'>
        <h1 className='text-3xl lg:text-4xl font-bold text-primary text-center'>Explore the Quality</h1>
        <div className='space-y-10'>

          {/* Row 1 */}
          <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 justify-items-center gap-10 xl:gap-6'>
            {
              carImages.map(({id, image}) => (
                <div key={id} className='max-w-[200px] max-h-[350px]'>
                  <img src={image} className='min-w-full min-h-full object-cover hover:scale-110 transition-all duration-500
                  rounded-md'/>
                  {/* // ? optional --> xl:saturate-0 xl:hover:saturate-100 */}
                </div>
              ))
            }
          </div>

          {/* Row 2 */}
          <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 justify-items-center gap-10 xl:gap-6'>
            {
              carImages2.map(({id, image}) => (
                <div key={id} className='max-w-[200px] max-h-[350px]'>
                  <img src={image} className='min-w-full min-h-full object-cover hover:scale-110 transition-all duration-500
                  rounded-md'/>
                  {/* // ? optional --> xl:saturate-0 xl:hover:saturate-100 */}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestCars