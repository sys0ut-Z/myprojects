import React, { useState } from 'react'
import Hero from '../components/Hero/Hero'
import BestCars from '../components/BestCars/BestCars'
import Banner from '../components/Banner/Banner'
import Blogs from '../components/Blogs/Blogs'
import DownloadPopup from '../components/Popup/DownloadPopup'

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <Hero setShowPopup={setShowPopup}/>
      <BestCars />
      <Banner />
      <Blogs />
      <DownloadPopup showPopup={showPopup} setShowPopup={setShowPopup}/>
    </div>
  )
}

export default Home