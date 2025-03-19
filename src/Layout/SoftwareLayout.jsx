import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Contact from '../Component/Contact'
import Software from '../Pages/Software'

const SoftwareLayout = () => {
  return (
    <div>
      <Navbar/>
      <Software/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default SoftwareLayout
