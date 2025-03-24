import React from 'react'
import about from '../assets/about-3.jpg'
import about2 from '../assets/about-4.jpg'
import { motion } from "motion/react"
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div className='  about w-full flex items-center justify-center medium:h-[1500px]  h-[750px] bg-[DED0B6] my-36 '>
    <motion.div initial={{opacity:0}} whileInView={{opacity:1,transition:{delay:0.5, ease:'linear', duration:0.8}}} viewport={{ once: true }}  className='w-[90%] extralarge:w-[80%]   large:w-[95%] flex flex-col gap-10  font-ppt'>
      <div className=' medium:flex-col  flex justify-between items-center hover:overflow-hidden hover:rounded-2xl extralarge:gap-20  '>
          <img className=' hover:scale-105 transition-transform  hover:blur-[2px] w-[600px] rounded-2xl hover:ease-in hover:duration-300 ' src={about} alt="" />
          <div className='flex flex-col gap-7 w-[500px] medium:w-[700px] xxsmall:px-10  '>
              <h1 className='text-blue-500 text-5xl font-bold   '>About us</h1>
              <h1 className='text-5xl font-bold'>Your Trusted Partner For All  IT Solutions</h1>
              <p className='text-xl text-gray-500'>If you are looking for an agency to help you get the right talents as per your  needs , you’ve come to the right place. We can help you take your business to the next level.</p>
          </div>
      </div>
      <div className='flex mt-10   justify-between xxxsmall:px-10 xsmall:px-20 small:px-32 medium:px-48 xxsmall:px-20  extralarge:gap-16 medium:flex-col-reverse '>
          <div className='flex flex-col gap-5 w-[300px] medium:w-[500px] medium:-mx-10 '>
              <h1 className='font-extrabold text-2xl'>Our Vision</h1>
              <p className='text-lg font-medium text-gray-500'>Our vision is to become a global leader in providing  the best and unique web design and marketing  services to improve our client’s productivity and  business strength.</p>
              <button className='bg-yellow-300 mx-20 my-4 py-3 rounded-2xl w-[200px]'><NavLink onClick={()=>{(window.scrollTo({top:0,behavior:'smooth'}))}} to='/about' >Know More About Us</NavLink></button>
          </div>
          <div className='  flex flex-col gap-5 w-[300px] medium:w-[500px] medium:-mx-10 '>
              <h1 className='font-extrabold text-2xl'>Our Mission</h1>
              <p className='text-lg font-medium text-gray-500'>Our mission is to empower our clients to use the internet to its full potential by providing affordable, effective, custom design and marketing solutions.</p>
          </div>
          <div className='hover:overflow-hidden hover:rounded-2xl'>
          <img className='  w-[500px]  h-[300px] rounded-2xl  hover:scale-105 transition-transform  hover:blur-[2px] hover:ease-in hover:duration-300  ' src={about2} alt="" />
          </div>
      </div>
    </motion.div>
  </div>
  )
}

export default About
