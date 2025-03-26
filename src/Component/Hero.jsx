import React from 'react'
import { motion } from "motion/react"
import videobg from '../assets/video.mp4'

const Hero = () => {
  return (
    <div data-scroll data-scroll-speed="-0.9" className=' xextrasmall:mt-8 xxsmall:my-16 xxxsmall:my-6 hero w-full h-screen flex justify-center items-center my-4 text-gray-400 bg-black ' >
        <video src={videobg} autoPlay loop muted className=' w-full h-[1500px]  absolute  ' ></video>
        <div className='w-[85%] xxxsmall:flex-col-reverse xxxsmall:gap-[300px] extrasmall:gap-[150px]  flex justify-between items-end relative text-white    '>
            <motion.p initial={{y:"-40px"}} animate={{y:"2vw"}} transition={{ease:[0.76,0,0.24,1],duration:0.8}}  className=' font-ppt text-[19px] font-bold  extralarge:text-[20px] w-[600px] extralarge:w-[800px]  xextralarge:text-[30px] small:text-[16px] xsmall:text-[14px] xsmall:mb-16 xxxsmall:w-[300px] xxxsmall:text-[20px] xxxsmall:mr-36 extrasmall:mr-2 '>If you are looking for an agency to help you get the right talents  as per your needs , you’ve come to the right place. We can help you take your business to the next level.</motion.p>
            <div className='flex flex-col items-end  extralarge:w-[800px] medium:w-[500px] xsmall:w-[400px] small:mb-52 medium:mb-64 xsmall:mt-10 xxxsmall:w-[450px] '>
                <p className=' font-ppt text-lg   xxsmall:text-[10px]  xextralarge:text-[25px] xextralarge:-mr-10 extralarge:text-[20px]  extralarge:w-[700px] medium:text-[20px] small:text-[16px]  small:text-end xxxsmall:text-[12px] xxxsmall:px-4   '>WE ARE LEADING TECHNOLOGY SOLUTIONS PROVIDING COMPANY!</p>
                <motion.h1 initial={{x:"-200px"}} animate={{x:"3vw"}} transition={{ease:[0.76,0,0.24,1],duration:0.8}} className=' font-bold text-8xl font-ppt xextralarge:text-[120px]  extralarge:text-[90px]  medium:text-[70px] xsmall:text-[60px] xxxsmall:text-[62px] '>We Make The</motion.h1>
                <motion.h1 initial={{x:"-200px"}} animate={{x:"3vw"}} transition={{ease:[0.76,0,0.24,1],duration:0.8}} className='text-9xl  font-semibold font-ppt  xextralarge:text-[120px] extralarge:text-[95px]  medium:text-[70px] xsmall:text-[60px] xxxsmall:text-[62px] '>Best IT</motion.h1>
                <motion.h1 initial={{x:"-200px"}} animate={{x:"3vw"}} transition={{ease:[0.76,0,0.24,1],duration:0.8}} className='text-9xl  font-semibold tracking-tight  xextralarge:text-[120px] font-ppt extralarge:text-[95px]   medium:text-[70px] xsmall:text-[60px] xxxsmall:text-[62px] '>Solutions</motion.h1>
            </div>
        </div>
    </div>
  )
}

export default Hero
