import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import About from '../Component/About'
import Contact from '../Component/Contact'
import Form from '../Component/Form'

const ContactLayout = () => {
  return (
    <div>
      <Navbar/>
      <Contact/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default ContactLayout
