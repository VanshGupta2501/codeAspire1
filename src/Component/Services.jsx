import React from 'react'
import { CgWebsite } from "react-icons/cg";
import { FaComputer } from "react-icons/fa6";
import { MdAppShortcut } from "react-icons/md";
import { motion } from "motion/react"
import { NavLink } from 'react-router-dom';

const Services = () => {
  return (
    <div className='service w-full h-[1200px] flex justify-center items-center   mt-10   shadow-black   text-white '>
      <div className='w-[99%] flex flex-col gap-5 mt-14 bg-[#FDF7E4] px-10 py-5 text-black font-ppt '>
        <motion.h1 initial={{y:'20px', opacity:0 }} viewport={{ once: true }}   whileInView={{y:'0px',opacity:1 , transition:{delay:0.2, ease:'linear', duration:0.5}}} className='text-5xl font-bold tracking-tighter font-ppt text-blue-400 ' >Services</motion.h1>
        <motion.h1 initial={{y:'20px', opacity:0 }} viewport={{ once: true }}   whileInView={{y:'0px',opacity:1 , transition:{delay:0.2, ease:'linear', duration:0.5}}} className='text-7xl -tracking-tight font-bold '>We Provide the Best <br /> Quality Services</motion.h1>
        <motion.h1 initial={{y:'20px', opacity:0 }} viewport={{ once: true }}   whileInView={{y:'0px',opacity:1 , transition:{delay:0.2, ease:'linear', duration:0.5}}} className=' text-lg font-semibold' >We are a global technology solutions provider, delivering innovative and cutting-edge services across industries. <br /> Our expertise spans software development, cloud computing, AI, and cybersecurity. We empower businesses with scalable, <br /> efficient, and future-ready digital solutions. Partner with us to drive transformation and stay ahead in the digital era.</motion.h1>
        <div>
          <button className='bg-yellow-300 px-2 py-1 rounded-2xl' ><NavLink to='/all-service' onClick={()=>{window.scrollTo({top:0, behavior:'smooth'})}} >Explore All Services </NavLink></button>
        </div>
        <div className='py-20 flex items-center justify-around '>
            <motion.div initial={{x:0, scale:0}} viewport={{ once: true }}   whileInView={{scale:1, transition:{delay:0.2, ease:'linear', duration:0.5}}}   className=' relative bg-[#f8efd9] shadow-xl rounded-3xl w-[30%] h-[600px] flex flex-col px-10 items-start justify-evenly '>
                <div><MdAppShortcut className='text-7xl border border-black   py-2 rounded-2xl '   /></div>
                <h1 className='text-3xl font-bold' >Software Development</h1>
                <p className='-mt-7 text-lg font-medium text-start'>Innovative app development solutions that elevate businesses, Seamlessly combining functionality with exceptional design. Crafting optimal user interfaces for intuitive experiences, Enhancing engagement, performance, and scalability.</p>
                <div className='flex justify-center gap-1 items-center absolute top-0 left-0 flex-col  hover:bg-[#f8e9c8] h-[600px] w-[100%] rounded-3xl opacity-0 hover:opacity-100' >
                  <MdAppShortcut className='text-6xl' ></MdAppShortcut>
                  <h1 className='text-2xl font-semibold hover:text-yellow-300 hover:duration-200 hover:transition-all '><NavLink to='/service/software' onClick={()=>{window.scrollTo({top:0, behavior:'smooth'})}} > View More </NavLink> </h1>
                </div>
            </motion.div>
            <motion.div  initial={{x:0, scale:0}} viewport={{ once: true }} whileInView={{scale:1, transition:{delay:0.3, ease:[0.76,0,0.24,1], duration:0.7}}} className='relative bg-[#f8efd9] shadow-xl rounded-3xl  w-[30%] h-[600px] flex flex-col px-10 items-start justify-evenly '>
                <div><CgWebsite className='text-7xl border border-black  py-2 rounded-2xl'   /></div>
                <h1 className='text-3xl font-bold' >Web Development</h1>
                <p className='-mt-7 text-lg font-medium text-start'>Innovative app development solutions that elevate businesses, Seamlessly combining functionality with exceptional design. Crafting optimal user interfaces for intuitive experiences, Enhancing engagement, performance, and scalability.</p>
                <div className='flex justify-center items-center absolute gap-1 top-0 left-0 flex-col hover:bg-[#f8e9c8] h-[600px] w-[100%] rounded-3xl opacity-0 hover:opacity-100' >
                  <CgWebsite className='text-6xl' ></CgWebsite>
                  <h1 className='text-2xl font-semibold hover:text-yellow-300 cursor-pointer '><NavLink to='/service/website' onClick={()=>{window.scrollTo({top:0, behavior:'smooth'})}} > View More </NavLink> </h1>
                </div>
            </motion.div>
            <motion.div initial={{x:0, scale:0}} viewport={{ once: true }} whileInView={{scale:1, transition:{delay:0.4, ease:[0.76,0,0.24,1], duration:0.9}}} className='relative bg-[#f8efd9] shadow-xl rounded-3xl  w-[30%] h-[600px] flex flex-col px-10 items-start justify-evenly '>
                <div><FaComputer className='text-7xl border border-black  py-3 rounded-2xl'   /></div>
                <h1 className='text-3xl font-bold' >App Development</h1>
                <p className='-mt-7 text-lg font-medium text-start'>Innovative app development solutions that elevate businesses, Seamlessly combining functionality with exceptional design. Crafting optimal user interfaces for intuitive experiences, Enhancing engagement, performance, and scalability.</p>
                <div className='flex justify-center gap-1 items-center absolute top-0 left-0 flex-col   hover:bg-[#f8e9c8] h-[600px] w-[100%] rounded-3xl opacity-0 hover:opacity-100' >
                  <FaComputer className='text-6xl' ></FaComputer>
                  <h1 className='text-2xl font-semibold hover:text-yellow-300 '><NavLink to='/service/android' onClick={()=>{window.scrollTo({top:0, behavior:'smooth'})}} > View More </NavLink> </h1>
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Services
