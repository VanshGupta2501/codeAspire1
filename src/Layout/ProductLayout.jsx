import React from 'react'
import Navbar from '../Component/Navbar'
import Product from '../Component/Product'
import Form from '../Component/Form'
import Contact from '../Component/Contact'
import Footer from '../Component/Footer'

const ProductLayout = () => {
  return (
    <div>
      <Navbar/>
      <Product/>
      <Form/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default ProductLayout
