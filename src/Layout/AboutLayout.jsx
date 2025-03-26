import React from 'react'
import About from '../Component/About'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Contact from '../Component/Contact'
import Form from '../Component/Form'

const AboutLayout = () => {
  return (
    <>
      <Navbar/>
      <Contact/>  
      <About/>
      <Form/>
      <Footer/>
    </>
  )
}

export default AboutLayout
