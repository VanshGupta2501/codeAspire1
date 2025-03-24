import React from 'react'
import img from '../assets/hero111.webp'
import { FaArrowRight } from "react-icons/fa6";
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from "motion/react"
import { RiTeamFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

const Hero2 = () => {


  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,   
  });

  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.05"  className='  w-full h-screen flex justify-center items-center  '>
      <div  className='w-[100%]  gap-20 xxsmall:h-[900px]  h-[800px] bg-cover flex justify-center items-center  flex-col ' style={{backgroundImage:`url(${img})` }} >
        {/* <img className='w-[1400px]' src={img} alt="" /> */}
        <motion.div initial={{y:"100px", opacity:0  }} whileInView={{opacity:1 ,delay:'0.4', transition:{delay:0.2, ease:'linear', duration:0.4}, y:'-20px' }}   className=' grid grid-cols-4 extralarge:grid-cols-2  gap-44 text-white '>
          <div ref={ref} className='flex items-center  gap-6 text-4xl font-semibold'>
            <RiTeamFill  className=' w-16 h-16 bg-blue-300 px-2 rounded-full' />
            <div className='flex flex-col gap-4'>
            <span className='border-b-[3px] py-2' >
              {inView && (
              <CountUp className="text-6xl font-semibold" start={0} end={50} duration={5} />
              )}
              <span>+</span>
              </span>
            <span className="text-xl block">Team Member</span>
            </div>
          </div>

          <div ref={ref} className='flex items-center  gap-6 text-4xl font-semibold'>
            <RiTeamFill  className=' w-16 h-16 bg-blue-300 px-2 rounded-full' />
            <div className='flex flex-col gap-4'>
            <span className='border-b-[3px] py-2' >
              {inView && (
              <CountUp className="text-6xl font-semibold" start={0} end={50} duration={5} />
              )}
              <span>+</span>
              </span>
            <span className="text-xl block">Team Member</span>
            </div>
          </div>

          <div ref={ref} className='flex items-center  gap-6 text-4xl font-semibold'>
            <RiTeamFill  className=' w-16 h-16 bg-blue-300 px-2 rounded-full' />
            <div className='flex flex-col gap-4'>
            <span className='border-b-[3px] py-2' >
              {inView && (
              <CountUp className="text-6xl font-semibold" start={0} end={50} duration={5} />
              )}
              <span>+</span>
              </span>
            <span className="text-xl block">Team Member</span>
            </div>
          </div>

          <div ref={ref} className='flex items-center  gap-6 text-4xl font-semibold'>
            <RiTeamFill  className=' w-16 h-16 bg-blue-300 px-2 rounded-full' />
            <div className='flex flex-col gap-4'>
            <span className='border-b-[3px] py-2' >
              {inView && (
              <CountUp className="text-6xl font-semibold" start={0} end={50} duration={5} />
              )}
              <span>+</span>
              </span>
            <span className="text-xl block">Team Member</span>
            </div>
          </div>
 
        </motion.div>
        <button className='group font-semibold flex items-center justify-center gap-3 border-2 border-white text-2xl py-3 px-7 rounded-3xl text-white hover:bg-[#085989] '><NavLink to='/request-demo' onClick={()=>{window.scrollTo({top:0, behavior:'smooth'})}} >Request Demo </NavLink> <FaArrowRight className=' group-hover:animate-bounce my-2' /></button>
      </div>
    </div>
  )
}

export default Hero2
