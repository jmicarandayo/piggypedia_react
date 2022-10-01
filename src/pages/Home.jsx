import React from 'react'
import { useState } from 'react';
import { IoNotificationsOutline, IoChevronDownSharp } from "react-icons/io5";

const Home = ({isOpen}) => {
    const [ show, setShow ] = useState(false);

  return (
    <div className='h-screen bg-[#F2F7F5]'>
        <div className={`duration-500 ${isOpen ? 'w-[calc(100vw-300px)]' : 'w-[calc(100vw-60px)]'}`}>
            <div className='flex justify-between items-center bg-white py-4 px-10 shadow-md'>
                <h1 className='text-[#2E6943] text-3xl font-bold'>Home</h1>
                <div className='flex items-center'>
                    <span className='cursor-pointer'><IoNotificationsOutline size={25}/></span>
                    <div className='hover:bg-[#F2F7F5] group cursor-pointer py-2 px-6 ml-2 text-[#2E6943] flex gap-4 items-center'>
                        <div className='h-[40px] w-[40px] bg-[#F2F7F5] group-hover:bg-white flex justify-center items-center rounded-full'>
                            JD
                        </div>
                        <span>John Doe</span>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className='m-20'>
                    <div className='bg-white p-6'>
                        <h2 className='text-[#2E6943] text-lg mb-8'>All Program</h2>
                        {/* Program Item */}
                        <div className='my-4'>
                            <p className='text-gray-400 py-2'>Date June 17, 2022</p>
                            <div className='border-t-2'>
                                <div className='flex items-center justify-between'>
                                    <p className='py-2 text-[#2E6943]'>Fattening Piglets</p>
                                    <span><IoChevronDownSharp onClick={() => setShow(!show)} className={`text-[#2E6943] cursor-pointer duration-300 ${show && 'rotate-180'}`} size={20}/></span>
                                </div>
                                <div className='px-6'>
                                    <span className='text-gray-400'>Unifeeds</span>
                                    <div className={`duration-300 ${show ? 'visible' : 'hidden'}`}>
                                        <p className={`duration-300 py-4 ${show ? 'opacity-100' : 'opacity-0 '}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laudantium asperiores alias atque dolore reiciendis, repellendus molestiae voluptas sunt earum numquam possimus debitis laboriosam ea tenetur odio. Veritatis, ipsa culpa!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <p className='text-gray-400 py-2'>Date June 17, 2022</p>
                            <div className='border-t-2'>
                                <div className='flex items-center justify-between'>
                                    <p className='py-2 text-[#2E6943]'>Fattening Piglets</p>
                                    <span><IoChevronDownSharp onClick={() => setShow(!show)} className={`text-[#2E6943] cursor-pointer duration-300 ${show && 'rotate-180'}`} size={20}/></span>
                                </div>
                                <div className='px-6'>
                                    <span className='text-gray-400'>Unifeeds</span>
                                    <div className={`duration-300 ${show ? 'visible' : 'hidden'}`}>
                                        <p className={`duration-300 py-4 ${show ? 'opacity-100' : 'opacity-0 '}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laudantium asperiores alias atque dolore reiciendis, repellendus molestiae voluptas sunt earum numquam possimus debitis laboriosam ea tenetur odio. Veritatis, ipsa culpa!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home