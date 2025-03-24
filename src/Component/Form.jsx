import React from 'react'
import form from '../assets/talk.png'
import { motion } from "motion/react"

const Form = () => {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1,transition:{delay:0.5, ease:'linear', duration:0.8}}} viewport={{ once: true }} className='w-full h-[800px] xsmall:h-[1200px] flex justify-center items-center bg-[#FAEED1] ' >
    <div className='w-[90%] flex items-center justify-around xsmall:flex-col   '>
      <img className=' small:w-[400px] medium:w-[500px] w-[600px]' src={form} alt="" />
      <div className='flex flex-col gap-5 medium:w-[400px] large:px-10 extralarge:w-[500px] extralarge:px-3 large:w-[450px] '>
          <p className='text-2xl font-bold text-blue-500' >Let's Talk</p>
          <h1 className='text-5xl font-bold'>We Would Like To Hear From <br /> You Anytime</h1>
          <form className='flex flex-col gap-3 '>
              <label> Your Name</label>
              <input className='py-2 px-2 rounded-xl  bg-blue-100 ' type="text" name='name'  placeholder='Enter your name' required />
              <label> Phone Number</label>
              <input className='py-2 px-2 rounded-xl bg-blue-100' type="tel" name='phone'  placeholder='Enter your mobile number' required />
              <label> Write your message here</label>
              <textarea className='py-2 px-2 rounded-xl bg-blue-100 ' name="message" rows="6" placeholder='Enter your message' required></textarea>
              <div className='my-3  border  '>
                <button className= '  extralarge:px-10  bg-blue-600 text-white  py-2 px-3 rounded-2xl' type='submit'>Submit Now</button>
              </div>
              
          </form>
      </div>
    </div>
  </motion.div>
  )
}

export default Form
