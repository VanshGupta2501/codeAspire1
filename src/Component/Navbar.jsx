import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full py-4 top-0 flex justify-center items-center fixed z-[99] shadow-xl bg-[#c6baa0]'>
        <div className='w-[90%] flex justify-between items-center'>
            <NavLink onClick={()=>{window.scrollTo({top:0, behavior:'smooth'})}} to='/'><img className='w-96 hover:cursor-pointer ' src={logo} /></NavLink>
            <div className='flex gap-10 '>
                <h1 className='hover:cursor-pointer font-semibold text-xl hover:text-orange-500'> <NavLink to='/' onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}} className={({isActive})=> ` cursor-pointer hover:text-orange-500 ${isActive ? "text-orange-500 " : "text-black"} `}  >Home</NavLink></h1>
                <h1 className='hover:cursor-pointer font-semibold text-xl hover:text-orange-500'> <NavLink to='/service' onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}} className={({isActive})=> ` cursor-pointer hover:text-orange-500 ${isActive ? "text-orange-500 " : "text-black"} `}  >Services</NavLink></h1>
                <h1 className='hover:cursor-pointer font-semibold text-xl hover:text-orange-500'> <NavLink to='/about' onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}} className={({isActive})=> ` cursor-pointer hover:text-orange-500 ${isActive ? "text-orange-500 " : "text-black"} `}  >About</NavLink></h1>
                <h1 className='hover:cursor-pointer font-semibold text-xl hover:text-orange-500'> <NavLink to='/product' onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}} className={({isActive})=> ` cursor-pointer hover:text-orange-500 ${isActive ? "text-orange-500 " : "text-black"} `}  >Products</NavLink></h1>

            </div>
            <NavLink onClick={()=>{window.scrollTo({top:0, behavior:'smooth'})}} to='/contact' className={({isActive})=> ` cursor-pointer rounded-2xl hover:bg-orange-500  ${isActive ? " bg-orange-400 rounded-2xl " : "text-black"} `} > <button className='  border border-[#8a8a8a89] py-1 px-6 rounded-2xl text-lg font-medium'>Contact Us</button> </NavLink>
            
        </div>
    </div>
  )
}

export default Navbar
