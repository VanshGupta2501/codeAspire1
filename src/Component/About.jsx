import React from 'react'
import about from '../assets/about-3.jpg'
import about2 from '../assets/about-4.jpg'
import { motion } from "motion/react"

const About = () => {
  return (
    <div data-scroll data-scroll-speed="0.03" data-scroll-section className='about w-full flex items-center justify-center  h-[750px] bg-[DED0B6] my-36 '>
    <motion.div initial={{opacity:0}} whileInView={{opacity:1,transition:{delay:0.5, ease:'linear', duration:0.8}}} viewport={{ once: true }}  className='w-[90%]  flex flex-col gap-10 font-ppt'>
      <div className='flex justify-between items-center hover:overflow-hidden hover:rounded-2xl '>
          <img className=' hover:scale-105 transition-transform  hover:blur-[2px] w-[600px] rounded-2xl hover:ease-in hover:duration-300 ' src={about} alt="" />
          <div className='flex flex-col gap-7'>
              <h1 className='text-blue-500 text-5xl font-bold'>About us</h1>
              <h1 className='text-5xl font-bold'>Your Trusted Partner For All <br /> IT Solutions</h1>
              <p className='text-xl text-gray-500'>If you are looking for an agency to help you get the right talents as per your <br /> needs , you’ve come to the right place. We can help you take your business to <br /> the next level.</p>
          </div>
      </div>
      <div className='flex mt-10 justify-between'>
          <div className='flex flex-col gap-5'>
              <h1 className='font-extrabold text-2xl'>Our Vision</h1>
              <p className='text-lg font-medium text-gray-500'>Our vision is to become a global leader in providing <br /> the best and unique web design and marketing <br /> services to improve our client’s productivity and <br /> business strength.</p>
              <button className='bg-yellow-300 mx-20 my-4 py-3 rounded-2xl'>Know More About Us</button>
          </div>
          <div className='flex flex-col gap-5'>
              <h1 className='font-extrabold text-2xl'>Our Mission</h1>
              <p className='text-lg font-medium text-gray-500'>Our mission is to empower our clients to use <br /> the internet to its full potential by providing affordable, <br /> effective, custom design and marketing solutions.</p>
          </div>
          <div className='hover:overflow-hidden hover:rounded-2xl'>
          <img className='w-[500px] h-[300px] rounded-2xl  hover:scale-105 transition-transform  hover:blur-[2px] hover:ease-in hover:duration-300  ' src={about2} alt="" />
          </div>
      </div>
    </motion.div>
  </div>
  )
}

export default About
