import React from 'react'
import About from '../Component/About'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Contact from '../Component/Contact'

const AboutLayout = () => {
  return (
    <>
      <Navbar/>
      <Contact/>  
      <About/>
      <Footer/>
    </>
  )
}

export default AboutLayout
