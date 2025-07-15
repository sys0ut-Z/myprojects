import React, { useState } from 'react'
import { 
  img1, img2, img3, img4, img5, img6, 
  img7, img8, img9, img10, img11, img12,
  img13, img14, img15, img16, img17, img18,

  limg1, limg2, limg3, limg4, limg5, limg6,
  limg7, limg8, limg9, limg10, limg11, limg12,
} from '../components/Images/ImagesImprt'
import DownloadPupup from '../components/Popup/DownloadPopup'

const portraitImages = [
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
  {
    id: 7,
    image: img7,
  },
  {
    id: 8,
    image: img8,
  },
  {
    id: 9,
    image: img9,
  },
  {
    id: 10,
    image: img10,
  },
  {
    id: 11,
    image: img11,
  },
  {
    id: 12,
    image: img12,
  },
  {
    id: 13,
    image: img13,
  },
  {
    id: 14,
    image: img14,
  },
  {
    id: 15,
    image: img15,
  },
  {
    id: 16,
    image: img16,
  },
  {
    id: 17,
    image: img17,
  },
  {
    id: 18,
    image: img18,
  }
]

const landscapeImages = [
  {
    id: 1, 
    image: limg1,
  },
  {
    id: 2, 
    image: limg2,
  },
  {
    id: 3, 
    image: limg3,
  },
  {
    id: 4, 
    image: limg4,
  },
  {
    id: 5,
    image: limg5,
  },
  {
    id: 6,
    image: limg6,
  },
  {
    id: 7, 
    image: limg7,
  },
  {
    id: 8,
    image: limg8
  },
  {
    id: 9,
    image: limg9,
  },
  {
    id: 10,
    image: limg10,
  },
  {
    id: 11,
    image: limg11,
  },
  {
    id: 12,
    image: limg12,
  }

]

const PreviewImages = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className='pt-32 pb-16 dark:bg-gray-800'>
      <div className="container py-6">

        {
          // ? justify-items-center is optional
        }
        {/* Portrait Images */}
        <h1 className='pb-10 text-3xl lg:text-4xl font-bold text-center text-primary'>4k Portrait Images</h1>
        <div className='grid grid-cols-2 min-[763px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 lg:gap-9 justify-items-center'>
          {
            portraitImages.map(({id, image}) => (
              <div key={id} className='sm:min-h-[400px] sm:min-w-[200px]'>
                <a href={`${image}`} download={true}>
                  <img src={image} type="car_image" className='min-w-full min-h-full object-cover rounded-md
                  transition-all duration-500 hover:scale-105'/>
                </a>
              </div>
            ))
          }
        </div>

        {/* Landscape Images */}
        <h1 className='pb-10 pt-20 text-3xl lg:text-4xl font-bold text-center text-primary'>4k Landscape Images</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-9 justify-items-center'>
          {
            landscapeImages.map(({id, image}) => (
              <div key={id} className=''>
                <a href={`${image}`} download={true}>
                  <img src={image} type="car_image" className='min-w-full min-h-full object-cover rounded-md
                  transition-all duration-500 hover:scale-105'/>
                </a>
              </div>
            ))
          }
        </div>
        <div className='text-center'>
          <button className='mt-6 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 
            text-xs sm:text-sm hover:scale-105 transition-all duration-300 rounded-full'
            onClick={() => setShowPopup(prev => !prev)}
          >
            Download
          </button>
        </div>
      </div>
      <DownloadPupup showPopup={showPopup} setShowPopup={setShowPopup}/>
    </div>
  )
}

export default PreviewImages