import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import Hero2 from '../Component/Hero2'
import Services from '../Component/Services'
import About from '../Component/About'
import Product from '../Component/Product'
import Footer from '../Component/Footer'
import Contact from '../Component/Contact'
import Form from '../Component/Form'
import Steps from '../Component/Steps'
import Termsofservices from '../Pages/Termsofservices'



// import Steps from '../Component/swiper/Steps'`



const Layout = () => {


  return (
    <div>
      <Navbar/>
      <Hero/>
      <Hero2/>
      <Services/>
      <Steps/>
      <About/>
      {/* <Product/> */}
      <Form/>
      <Contact/>
      <Footer/>
      {/* <Termsofservices/> */}
    </div>
   
  )
}

export default Layout
