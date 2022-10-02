import React from 'react'
import { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import TopBar from '../components/TopBar';

const Locate = ({isOpen}) => {
  const [ show, setShow ] = useState(false);
  return (
    <div className='h-screen bg-[#F2F7F5]'>
        <div className={`duration-500 ${isOpen ? 'w-[calc(100vw-300px)]' : 'w-[calc(100vw-60px)]'}`}>
            <TopBar/>
            <div className='w-full'>
                <div className='m-20'>
                    <div className='bg-white p-6'>
                        <div className='flex justify-end'>
                          <button className='cursor-pointeroutline-none px-6 py-2 border-[#00c797] text-[#00c797] hover:bg-[#00c797] hover:text-white border flex items-center gap-2'><IoSearchOutline size={20} />Search</button>
                        </div>
                        <div className='my-10'>
                            <div className='bg-gray-400 w-full h-[300px] '>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Locate




                  