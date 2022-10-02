import React from 'react'
import { useState } from 'react';
import { IoChevronDownSharp, IoNotifications } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import Dropdown from '../components/Dropdown';

const TopBar = () => {
    const [ openDropdown, setOpenDropdown ] = useState(false);
    const location = useLocation();
    const page = location.pathname.split('/')[1];

  return (
    <div>
        <div className='flex justify-between items-center bg-white py-4 px-10 shadow-md'>
                <h1 className='text-[#2E6943] text-3xl font-bold capitalize'>{page}</h1>
                <div className='flex items-center relative'>
                    <span className='cursor-pointer text-[#00c797]'><IoNotifications size={25}/></span>
                    <div className='hover:bg-[#F2F7F5] group cursor-pointer py-2 px-2 ml-2 text-[#2E6943] flex items-center ' onClick={() => setOpenDropdown(!openDropdown)}>
                        <div className='h-[40px] w-[40px] bg-[#F2F7F5] group-hover:bg-white flex justify-center items-center rounded-full'>
                            JD
                        </div>
                        <span className='ml-2'>John Doe</span>
                        <IoChevronDownSharp size={20} className={`text-[#2E6943] cursor-pointer duration-200 ml-2 ${openDropdown && '-rotate-180'}`}/>
                        
                    </div>
                    <div className={!openDropdown && 'hidden'}>
                            <Dropdown />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default TopBar