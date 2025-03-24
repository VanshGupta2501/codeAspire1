import React from 'react'
import { motion } from "motion/react"
import videobg from '../assets/video.mp4'

const Hero = () => {
  return (
    <div data-scroll data-scroll-speed="-0.9" className=' xxsmall:my-16 xxxsmall:my-6 hero w-full h-screen flex justify-center items-center my-4 text-gray-400 ' >
        <video src={videobg} autoPlay loop muted className=' w-full h-[1500px]  absolute ' ></video>
        <div className='w-[85%] flex justify-between items-end relative text-white large:w-[98%] large:flex-col-reverse large:gap-20 large:mx-16 small:mx-10 xxxsmall:gap-[365px] xxsmall:gap-[400px] xxsmall:text-black  '>
            <motion.p initial={{y:"-40px"}} animate={{y:"2vw"}} transition={{ease:[0.76,0,0.24,1],duration:0.8}}  className=' font-ppt text-[19px] font-bold extralarge:text-[20px] w-[600px] extralarge:w-[800px] xxsmall:text-[15px] large:text-[15px] small:text-[12px] large:w-[500px]  small:w-[300px]  '>If you are looking for an agency to help you get the right talents  as per your needs , you’ve come to the right place. We can help you take your business to the next level.</motion.p>
            <div className='flex flex-col items-end  extralarge:w-[900px] extralarge:pr-20 '>
                <p className=' font-ppt text-lg extralarge:text-[15px] extralarge:-mr-20 small:text-[10px] xxsmall:text-[10px] '>WE ARE LEADING TECHNOLOGY SOLUTIONS PROVIDING COMPANY!</p>
                <motion.h1 initial={{x:"-200px"}} animate={{x:"3vw"}} transition={{ease:[0.76,0,0.24,1],duration:0.8}} className='font-bold text-8xl font-ppt  extralarge:text-[70px] large:text-[60px] small:text-[40px] xxsmall:text-[40px]  '>We Make The</motion.h1>
                <motion.h1 initial={{x:"-200px"}} animate={{x:"3vw"}} transition={{ease:[0.76,0,0.24,1],duration:0.8}} className='text-9xl font-semibold font-ppt extralarge:text-[75px] large:text-[65px] small:text-[40px] xxsmall:text-[40px] '>Best IT</motion.h1>
                <motion.h1 initial={{x:"-200px"}} animate={{x:"3vw"}} transition={{ease:[0.76,0,0.24,1],duration:0.8}} className='text-9xl font-semibold tracking-tight font-ppt extralarge:text-[75px] large:text-[65px] small:text-[40px] xxsmall:text-[40px] '>Solutions</motion.h1>
            </div>
        </div>
    </div>
  )
}

export default Hero
