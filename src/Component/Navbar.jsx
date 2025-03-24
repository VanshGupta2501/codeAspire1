import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";


const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  return (
    <>
    <div className='  w-full py-4 top-0 flex justify-center items-center fixed z-10  shadow-xl bg-[#c6baa0]   '>
        <div className=' w-[90%] flex justify-between items-center '>
            <NavLink onClick={()=>{window.scrollTo({top:0, behavior:'smooth'})}} to='/'><img className=' medium:w-52 small:w-40 w-96 hover:cursor-pointer ' src={logo} /></NavLink>
            <div className='flex gap-10 xxxsmall:hidden '>
                <h1 className='hover:cursor-pointer font-semibold text-xl hover:text-orange-500'> <NavLink to='/' onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}  className={({isActive})=> ` cursor-pointer hover:text-orange-500 ${isActive ? "text-orange-500 " : "text-black"} `}  >Home</NavLink></h1>
                <h1 className='hover:cursor-pointer font-semibold text-xl hover:text-orange-500'> <NavLink to='/service' onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}} className={({isActive})=> ` cursor-pointer hover:text-orange-500 ${isActive ? "text-orange-500 " : "text-black"} `}  >Services</NavLink></h1>
                <h1 className='hover:cursor-pointer font-semibold text-xl hover:text-orange-500'> <NavLink to='/about' onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}} className={({isActive})=> ` cursor-pointer hover:text-orange-500 ${isActive ? "text-orange-500 " : "text-black"} `}  >About</NavLink></h1>
                <h1 className='hover:cursor-pointer font-semibold text-xl hover:text-orange-500'> <NavLink to='/product' onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}} className={({isActive})=> ` cursor-pointer hover:text-orange-500 ${isActive ? "text-orange-500 " : "text-black"} `}  >Products</NavLink></h1>

            </div>
            <BsThreeDots onClick={()=>setShowMobileMenu(true)  } className=' text-3xl ml-80  hidden xxxsmall:block cursor-pointer' />
            <NavLink onClick={()=>{window.scrollTo({top:0, behavior:'smooth'})}} to='/contact' className={({isActive})=> ` cursor-pointer rounded-2xl hover:bg-orange-500  ${isActive ? " bg-orange-400 rounded-2xl " : "text-black"} `} > <button className=' medium:hidden  border border-[#8a8a8a89] py-1 px-6 rounded-2xl text-lg font-medium'>Contact Us</button> </NavLink>
            <IoReorderThreeOutline  onClick={()=>{setShowMobileMenu(false)}} className='hidden text-3xl medium:block cursor-pointer ' />
            
        </div>
    </div>
      {/* mobile responsive */}
      <div className={` ${showMobileMenu ? 'w-full ' : 'h-0 w-0' }  extralarge:hidden   xxxsmall:block duration-300 delay-100  transition-all bg-[#c6baa0] overflow-hidden mt-10 top-0 right-0 bottom-0  `} >
        <div className='  flex flex-col-reverse  items-center gap-2 mt-5 text-lg font-medium px-5 '>
          <h1 className='hover:cursor-pointer px-4 py-2 rounded-full inline-block  font-semibold text-xl hover:text-orange-500 '>Home</h1>
          <h1 className='px-4 py-2 rounded-full inline-block'>Home</h1>
          <h1 className='px-4 py-2 rounded-full inline-block'>Home</h1>
          <h1 className='px-4 py-2 rounded-full inline-block'>Home</h1>
            <div className='' >
              <FaXmark onClick={()=>setShowMobileMenu(false)  } className=' ml-[500px] my-3 text-2xl cursor-pointer'  />
            </div>
        </div>
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