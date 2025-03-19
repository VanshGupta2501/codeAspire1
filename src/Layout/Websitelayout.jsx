import React from 'react'
import Website from '../Pages/Website'
import Navbar from '../Component/Navbar'
import Contact from '../Component/Contact'
import Footer from '../Component/Footer'

const Websitelayout = () => {
  return (
    <div>
        <Navbar/>
        <Website/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Websitelayout
