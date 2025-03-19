import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Contact from '../Component/Contact'
import Android from '../Pages/Android'

const Applayout = () => {
  return (
    <div>
      <Navbar/>
      <Android/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Applayout
