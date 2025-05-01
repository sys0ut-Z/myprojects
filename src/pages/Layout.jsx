import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router'
import DownloadPopup from '../components/Popup/DownloadPopup'

const Layout = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Navbar setShowPopup={setShowPopup}/>
      <Outlet />
      <Footer />
      <DownloadPopup showPopup={showPopup} setShowPopup={setShowPopup}/>
    </>
  )
}

export default Layout