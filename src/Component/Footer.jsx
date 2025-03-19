import React from 'react'
import { motion } from "motion/react"
import { GrFacebookOption } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-[#BBAB8C] w-full h-[400px]  flex flex-col items-center justify-center">
            <motion.div initial={{y:"40px"}} whileInView={{delay:'2', transition:{delay:0.2, ease:'linear', duration:0.4}, y:'-10px' }} className="w-[90%] h-[80%]  flex items-center justify-evenly " >
                <div className="flex flex-col items-start gap-5">
                    <img className="w-[400px]" src="https://www.code-aspire.com/images/black-logo.png" alt="" />
                    <p className="font-medium text-xl">Transforming visions into reality, our <br /> company specializes in delivering <br /> exceptional IT services</p>
                    <div className='flex gap-3 ' >
                        {/* logo */}
                        <GrFacebookOption className=' rounded-full border text-3xl px-[2px] hover:bg-yellow-300 hover:-translate-y-1' />
                        <FaYoutube className=' rounded-full border text-3xl px-[4px] hover:bg-yellow-300 hover:-translate-y-1'/>
                        <FaInstagram className=' rounded-full border text-3xl px-[5px] hover:bg-yellow-300 hover:-translate-y-1'/>
                        <CiLinkedin className=' rounded-full border text-3xl px-[3px] hover:bg-yellow-300 hover:-translate-y-1'/>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold text-2xl text-white">Links</h1>
                    <div className="flex flex-col gap-1 text-gray-600 font-semibold text-lg">
                        <p className='hover:text-orange-300' ><Link to='hero' smooth={true} offset={-1000} duration={500} ><NavLink to='/' onClick={()=>{window.scrollTo({top:0, behavior:'smooth'})}} >Home</NavLink></Link></p>
                        <p className='hover:text-orange-300 hover:cursor-pointer' ><Link to='about' smooth={true} offset={-100} duration={500} >About</Link></p>
                        <p className='hover:text-orange-300 hover:cursor-pointer' ><Link to='service' smooth={true} offset={-80} duration={500} >Services</Link></p>
                        <p className='hover:text-orange-300 hover:cursor-pointer' ><Link to='product' smooth={true} offset={200} duration={500} >Products</Link></p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold text-2xl text-white">Pages</h1>
                    <div className="flex flex-col gap-1 text-gray-600 font-semibold text-lg ">
                        <NavLink onClick={()=>{window.scrollTo({top:0, behavior:'smooth'})}} to='/contact' ><p className='hover:text-orange-300' >Contact Us</p></NavLink>
                        <p className='hover:text-orange-300' ><NavLink onClick={()=>{(window.scrollTo({top:0,behavior:'smooth'}))}} to='/termCondition' >Terms and Condition</NavLink></p>
                        <NavLink onClick={()=>{window.scrollTo({top:0, behavior:'smooth'})}} to='/policy'><p className='hover:text-orange-300' >Privacy Policy</p></NavLink>
                        <p className='hover:text-orange-300' ><NavLink onClick={()=>{(window.scrollTo({top:0,behavior:'smooth'}))}} to='/prism-policy' >Prism SFA Policy</NavLink></p>
                    </div>
                </div>
                
                <div className="flex flex-col gap-5 mb-7  ">
                    <h1 className="font-bold text-2xl text-white ">Products</h1>
                    <div className="flex flex-col gap-1 text-gray-600 font-semibold text-lg ">
                        <p className='hover:text-orange-300' ><a href="https://www.prismgate.in/" target='_blank' >Prism Gate</a></p>
                        <p className='hover:text-orange-300' > <a href="https://www.prism-sfa-dev.net/" target="_blank" rel="noopener noreferrer">Prism SFA</a> </p>
                        <p className='hover:text-orange-300' >Prism Office</p>
                        
                    </div>
                </div>

            </motion.div>
            <div className=' border-t-2 w-[80%] flex items-center justify-center' >
                <h1 className='text-base font-medium mt-2' >
                © 2025CodeAspire Consultancy Services.</h1>
            </div>
        </div>
       
  )
}

export default Footer
