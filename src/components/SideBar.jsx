import React from 'react'
import Logo from '../assets/pig_logo.png'
import Brand from '../assets/brand_name.png'
import { IoHomeSharp, IoLocationSharp, IoBookSharp, IoAddOutline } from "react-icons/io5";
import { GiWeight } from "react-icons/gi";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const SideBar = ({isOpen, handleClick}) => {
  return (
    <div className={`fixed h-screen bg-[#377E51] top-0 left-0 duration-500 ${isOpen ? 'w-[300px]' : 'w-[60px]'}`}>
        <div>
            <div className={`my-10`}>
                <div className='flex items-center px-3'><img className='h-[30px]' src={Logo} alt="" /><div><img className={`pl-3 h-[30px] duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} src={Brand} alt="" /></div></div>
            </div>
            <ul>
                <li className=''><NavLink to='/home' className={({isActive}) => isActive ? 'px-4 flex items-center gap-3 text-white text-md hover:bg-[#2E6943] cursor-pointer py-3 border-r-4 border-[#00BA82] bg-[#2E6943]' : 'px-4 flex items-center gap-3 text-white text-md hover:bg-[#2E6943] cursor-pointer py-3'}><span><IoHomeSharp size={25}/></span><p className={`duration-500 whitespace-nowrap ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Home</p></NavLink></li>
                <li className=''><NavLink to='/guide' className={({isActive}) => isActive ? 'px-4 flex items-center gap-3 text-white text-md hover:bg-[#2E6943] cursor-pointer py-3 border-r-4 border-[#00BA82] bg-[#2E6943]' : 'px-4 flex items-center gap-3 text-white text-md hover:bg-[#2E6943] cursor-pointer py-3'}><span><IoBookSharp size={25}/></span><p className={`duration-500 whitespace-nowrap ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Guide</p></NavLink></li>
                <li className=''><NavLink to='/locate' className={({isActive}) => isActive ? 'px-4 flex items-center gap-3 text-white text-md hover:bg-[#2E6943] cursor-pointer py-3 border-r-4 border-[#00BA82] bg-[#2E6943]' : 'px-4 flex items-center gap-3 text-white text-md hover:bg-[#2E6943] cursor-pointer py-3'}><span><IoLocationSharp size={25}/></span><p className={`duration-500 whitespace-nowrap ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Locate Store</p></NavLink></li>
                <li className=''><NavLink to='/compute' className={({isActive}) => isActive ? 'px-4 flex items-center gap-3 text-white text-md hover:bg-[#2E6943] cursor-pointer py-3 border-r-4 border-[#00BA82] bg-[#2E6943]' : 'px-4 flex items-center gap-3 text-white text-md hover:bg-[#2E6943] cursor-pointer py-3'}><span><GiWeight size={25}/></span><p className={`duration-500 whitespace-nowrap ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Compute Weight</p></NavLink></li>
            </ul>
            <div className=' text-gray-300'>
                <p className={`duration-500 font-bold px-4 my-3 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Programs</p>
                <div className='text-sm flex flex-col gap-2'>
                    <p className='cursor-pointer whitespace-nowrap px-6 py-1 flex items-center gap-2 hover:bg-[#2E6943]' ><span>1 </span><span className={`duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Nursing Piglets</span></p>
                    <p className='cursor-pointer whitespace-nowrap px-6 py-1 flex items-center gap-2 hover:bg-[#2E6943]' ><span>2 </span><span className={`duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Fattening Piglets</span></p>
                </div>
                <Link to="/new-program" className='flex items-center px-4 gap-4 mt-2 hover:text-[#00DDA2]'><span><IoAddOutline size={25}/></span><span className={`whitespace-nowrap ${isOpen ? 'opacity-100 ' : 'opacity-0 duration-500'}`}>Create Program</span></Link>
            </div>
            
        </div>
        <div className='text-gray-300 absolute bottom-[10%] flex justify-center w-full'>
                <MdOutlineDoubleArrow className={`cursor-pointer duration-300 ${isOpen ? 'rotate-180' : ''}`} size={25} onClick={handleClick}/>
        </div>
    </div>
  )
}

export default SideBar