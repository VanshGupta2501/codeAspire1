import React, { use, useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";



const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showContact, setShowContact ] = useState(false)
  


  useEffect(()=>{
    if(showContact){
      document.body.style.overflow = 'hidden'
    }
    else{
      document.body.style.overflow='auto'
    }
    return ()=>{
      document.body.style.overflow='auto'
    };

  },[showContact])
  return (
    < >
    <div className=' w-full extrasmall:py-2  py-4 top-0 flex justify-center items-center fixed z-10  shadow-xl bg-[#c6baa0]   '>
        <div className='relative w-[90%] flex justify-between items-center '>
            <NavLink onClick={()=>{window.scrollTo({top:0, behavior:'smooth'})}} to='/'><img className='extralarge:w-[300px] xxxsmall:w-72  medium:w-52 small:w-40 w-96 hover:cursor-pointer ' src={logo} /></NavLink>
            <div className='flex extralarge:gap-10 xxxsmall:hidden xextralarge:gap-20 '>
                <h1 className='hover:cursor-pointer font-semibold extralarge:text-xl xextralarge:text-2xl hover:text-orange-500'> <NavLink to='/' onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}  className={({isActive})=> ` cursor-pointer hover:text-orange-500 ${isActive ? "text-orange-500 " : "text-black"} `}  >Home</NavLink></h1>
                <h1 className='hover:cursor-pointer font-semibold extralarge:text-xl xextralarge:text-2xl hover:text-orange-500'> <NavLink to='/service' onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}} className={({isActive})=> ` cursor-pointer hover:text-orange-500 ${isActive ? "text-orange-500 " : "text-black"} `}  >Services</NavLink></h1>
                <h1 className='hover:cursor-pointer font-semibold extralarge:text-xl xextralarge:text-2xl hover:text-orange-500'> <NavLink to='/about' onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}} className={({isActive})=> ` cursor-pointer hover:text-orange-500 ${isActive ? "text-orange-500 " : "text-black"} `}  >About</NavLink></h1>
                <h1 className='hover:cursor-pointer font-semibold extralarge:text-xl xextralarge:text-2xl hover:text-orange-500'> <NavLink to='/product' onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}} className={({isActive})=> ` cursor-pointer hover:text-orange-500 ${isActive ? "text-orange-500 " : "text-black"} `}  >Products</NavLink></h1>

            </div>
            <BsThreeDots onClick={()=>setShowMobileMenu(true)  } className='  xxxsmall:mx-1 xxxsmall:ml-40  text-3xl ml-80  hidden xxxsmall:block cursor-pointer' />
            <NavLink onClick={()=>{window.scrollTo({top:0, behavior:'smooth'})}} to='/contact' className={({isActive})=> ` cursor-pointer rounded-2xl hover:bg-orange-500  ${isActive ? " bg-orange-400 rounded-2xl " : "text-black"} `} > <button className=' medium:hidden  border border-[#8a8a8a89] extralarge:py-1 extralarge:px-6 xextralarge:py-2 xextralarge:px-8 rounded-2xl extralarge:text-lg font-medium xextralarge:text-xl '>Contact Us</button> </NavLink>
            <IoReorderThreeOutline  onClick={()=>setShowContact(true)} className='hidden xxxsmall:text-5xl text-3xl medium:block cursor-pointer ' />
            
        </div>
    </div>

      {/* mobile responsive */}
      <div className={` ${showMobileMenu ? 'w-full h-24 fixed ' : 'h-0 w-0' } xextrasmall:h-20 fixed  extralarge:hidden transition-all    xxxsmall:block duration-300 delay-100 z-50  bg-[#e5d0a3] overflow-hidden mt-10 top-[22px] right-0 bottom-0  `} >
        <div className='  flex   items-center gap-2 mt-5 text-lg font-medium px-5 xextralarge:mt-4 extrasmall:px-2  xextrasmall:gap-0 xextrasmall:px-0  '>
          <h1 className='hover:cursor-pointer px-4 py-2 extrasmall:px-3 rounded-full inline-block  font-semibold text-xl hover:text-orange-500 '><NavLink to='/' onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}  className={({isActive})=> ` cursor-pointer hover:text-orange-500 ${isActive ? "text-orange-500 " : "text-black"} `}  >Home</NavLink></h1>
          <h1 className='px-4 hover:cursor-pointer py-2 extrasmall:px-3 rounded-full inline-block'><NavLink to='/service' onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}} className={({isActive})=> ` cursor-pointer hover:text-orange-500 ${isActive ? "text-orange-500 " : "text-black"} `}  >Services</NavLink></h1>
          <h1 className='px-4 hover:cursor-pointer py-2 extrasmall:px-3 rounded-full inline-block'><NavLink to='/about' onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}} className={({isActive})=> ` cursor-pointer hover:text-orange-500 ${isActive ? "text-orange-500 " : "text-black"} `}  >About</NavLink></h1>
          <h1 className='px-4 hover:cursor-pointer py-2 extrasmall:px-3 rounded-full inline-block'><NavLink to='/product' onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}} className={({isActive})=> ` cursor-pointer hover:text-orange-500 ${isActive ? "text-orange-500 " : "text-black"} `}  >Products</NavLink></h1>
            <div className='' >
              <FaXmark onClick={()=>setShowMobileMenu(false)  } className=' bg-yellow-400 rounded-full mx-2 ml-3 my-3 text-3xl cursor-pointer hover:scale-125 transition-transform '  />
            </div>
        </div>
      </div> 


      {/* contact us */}
      
      <div className={` ${showContact ? 'w-[300px] h-screen ' : 'h-0 w-0' } fixed  large:hidden transition-all    medium:block duration-300 delay-100 z-[60]  bg-[#e6d0a3] overflow-hidden mt-10 top-[22px] right-0 bottom-0  `} >
        <div className='flex'>
          <img src={logo} className='w-56 mx-2 my-10' alt="" />
          <FaXmark onClick={()=>setShowContact(false)  } className=' bg-yellow-400 rounded-full mx-2 my-3  text-3xl cursor-pointer hover:scale-125 transition-transform'  />
        </div>
        <div className='px-4 text-pretty font-medium flex flex-col gap-2 xextrasmall:-mt-5 extrasmall:-mt-6 ' >
          <h1 className='text-2xl font-extrabold font-sans' >About us</h1>
          <p className='' >Welcome to Code Aspire, One of the mushrooming IT service organization in India . We make it easy for businesses to find the most talented developers, Quality analysts and marketers as per their needs faster and more efficiently.</p>
        </div>
        
        <button className='bg-blue-200 rounded-3xl px-3 text-lg font-medium mx-5 my-5 '><NavLink onClick={()=>{(window.scrollTo({top:0,behavior:'smooth'}))}} to='/about' >Let's Talk</NavLink></button>
        
        <div className='mx-3'>
          <h1 className='text-xl font-bold font-ppt2'  >Contact Information</h1>
            <div className='flex mx-2 my-3 gap-2'>
              <FaPhoneAlt className='text-lg my-1' />
              <h1>+91-933 616 6483</h1>
            </div>
            <div className='flex mx-2 my-3 gap-2'>
              <MdMail />
              <h1>hr@code-aspire.com</h1>
            </div>
        </div>
        <div className='flex gap-3 mx-3 py-2 ' >
          <a href="https://www.facebook.com/people/CodeAspire-Consultancy-Services/100070215794236/?mibextid=LQQJ4d" target="_blank"><GrFacebookOption className=' rounded-full border border-black text-3xl px-[2px] hover:bg-yellow-300 hover:-translate-y-1' /></a>
          <a href="http://https://x.com/i/flow/login?redirect_after_login=%2FCode_Aspire   " target="_blank" rel="noopener noreferrer"> <FaXTwitter  className=' rounded-full border border-black text-3xl px-[4px] hover:bg-yellow-300 hover:-translate-y-1'/></a>
          <a href="https://www.instagram.com/code_aspire/?igshid=YTQwZjQ0NmI0OA%3D%3D" target="_blank" rel="noopener noreferrer"> <FaInstagram className=' rounded-full border border-black text-3xl px-[5px] hover:bg-yellow-300 hover:-translate-y-1'/></a>
          <a href="https://www.linkedin.com/company/codeaspire-consultancy-services/" target="_blank" rel="noopener noreferrer"><CiLinkedin className=' rounded-full border border-black text-3xl px-[3px] hover:bg-yellow-300 hover:-translate-y-1'/></a>
        </div>

      </div> 
      <div className={` ${showContact ? 'w-screen h-screen top-[61px] ' : 'h-0 w-0' } medium:block large:hidden  transition-all bg-black  fixed z-[55] left-0 bottom-0 opacity-70`}>

      </div>


    </>
  )
}

export default Navbar


// <div className={` ${showMobileMenu ? 'w-full ' : 'h-0 w-0' }  extralarge:hidden   xxxsmall:block duration-300 delay-100  transition-all bg-white overflow-hidden mt-10 top-0 right-0 bottom-0  `} >
// <div className='  flex flex-col-reverse  items-center gap-2 mt-5 text-lg font-medium px-5 '>
//   <h1 className='hover:cursor-pointer px-4 py-2 rounded-full inline-block  font-semibold text-xl hover:text-orange-500 '>Home</h1>
//   <h1 className='px-4 py-2 rounded-full inline-block'>Home</h1>
//   <h1 className='px-4 py-2 rounded-full inline-block'>Home</h1>
//   <h1 className='px-4 py-2 rounded-full inline-block'>Home</h1>
//   <div className='' >
//     <FaXmark onClick={()=>setShowMobileMenu(false)  } className=' ml-[500px] my-3 text-2xl cursor-pointer'  />
//   </div>
// </div>
// </div> 