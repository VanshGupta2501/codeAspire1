import React from 'react'
import { motion } from "motion/react"

const Contact = () => {
  return (
    <div className='contact w-full h-[250px] flex items-center justify-center bg-[#DED0B6] pt-10 xxsmall:mt-10 mt-4 xsmall:mr-10 '>
    <div className='w-[90%] h-[50%] flex items-center justify-center gap-44 xsmall:gap-10   xsmall:flex-col '>
      <motion.div initial={{x:"60px"}}  viewport={{ once: true }} whileInView={{delay:'2', transition:{delay:0.2, ease:'linear', duration:0.4}, x:'-30px' }} className=' flex flex-col items-center justify-center xsmall:items-start gap-2'>
        <p className='text-2xl'>Call Us</p>
        <p className='text-xl'>123456789</p>
      </motion.div>
      <motion.div initial={{x:"-60px"}} whileInView={{delay:'2', transition:{delay:0.2, ease:'linear', duration:0.4}, x:'30px' }} className=' flex flex-col items-center xsmall:items-start justify-center gap-2'>
        <p className='text-2xl '>Email Us</p>
        <p className='text-xl'>Code-Aspire@gmail.com</p>
      </motion.div>
    </div>
  </div>
  )
}


export default Contact
