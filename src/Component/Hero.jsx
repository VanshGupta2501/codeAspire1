import React from 'react'
import { motion } from "motion/react"
import videobg from '../assets/video.mp4'

const Hero = () => {
  return (
    <div data-scroll data-scroll-speed="-0.9" className=' hero w-full h-screen flex justify-center items-center my-4 text-gray-400 ' >
        <video src={videobg} autoPlay loop muted className=' w-full absolute h-[850px]' ></video>
        <div className='w-[85%] flex justify-between items-end relative text-white '>
            <motion.p initial={{y:"-40px"}} animate={{y:"2vw"}} transition={{ease:[0.76,0,0.24,1],duration:0.8}}  className=' font-ppt text-[19px] font-bold'>If you are looking for an agency to help you get the right talents <br /> as per your needs , you’ve come to the right place. <br /> We can help you take your business to the next level.</motion.p>
            <div className='flex flex-col items-end'>
                <p className=' font-ppt text-lg'>WE ARE LEADING TECHNOLOGY SOLUTIONS PROVIDING COMPANY!</p>
                <motion.h1 initial={{x:"-200px"}} animate={{x:"3vw"}} transition={{ease:[0.76,0,0.24,1],duration:0.8}} className='font-bold text-8xl font-ppt'>We Make The</motion.h1>
                <motion.h1 initial={{x:"-200px"}} animate={{x:"3vw"}} transition={{ease:[0.76,0,0.24,1],duration:0.8}} className='text-9xl font-semibold font-ppt'>Best IT</motion.h1>
                <motion.h1 initial={{x:"-200px"}} animate={{x:"3vw"}} transition={{ease:[0.76,0,0.24,1],duration:0.8}} className='text-9xl font-semibold tracking-tight font-ppt'>Solutions</motion.h1>
            </div>
        </div>
    </div>
  )
}

export default Hero
