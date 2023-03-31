import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineDown} from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
      setNav(!nav)
    }
   // change color scroll navbar 
    const [color, setColor] = useState(false)
    const changeColor =() => {
      if (window.scrollY >= 96) {
          setColor(true)}
      else {
        setColor(false)
      } 
    }
  window.addEventListener('scroll', changeColor)
      

  return (
    <div className={color ? 'navscroll flex justify-between items-center h-24  mx-auto px-4 text-black sticky top-0 duration-500 font-poppins' : ' font-poppins nav flex justify-between items-center h-24  mx-auto px-4 text-black sticky top-0'}>
        <img src='images/icon.png' className='logo'/>
        <ul className='hidden md:flex mr-40'>
          <li className='p-4 px-10 hover:underline-offset-2 border-gray-900'>Home</li>
          <div className='flex p-4 px-10'>
            <li className=''>Event</li>
            <AiOutlineDown className='pt-1' size={23}></AiOutlineDown>
          </div>
          <div className='flex p-4 px-10'>
            <li className=''>Competition</li>
            <AiOutlineDown className='pt-1' size={23}></AiOutlineDown>
          </div>
          
          
        </ul>
        <div onClick={handleNav} className='block md:hidden z-50'>
            {!nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/> }

        </div>
        <div className={!nav ? 'navscroll  fixed left-0 top-0 w-full h-full border-r border-r-gray-900  ease-in-out duration-500 '  : 'nav fixed left-[-100%] w-3/5 h-full top-0 border-r ease-linear duration-500 text-white '}>
          <ul className='uppercase p-4 mt-20'>
            <li className='p-8 hover:font-bold duration-100 border-b border-gray-600 text-center'>Home</li>
            <li className='p-8 hover:font-bold duration-100 border-b border-gray-600 text-center'>Event</li>
            <li className='p-8 hover:font-bold duration-100 text-center'>Competition</li>
          </ul>
        </div>
    </div>
        
  )}

export default Navbar