import React from 'react'
import { IoAddOutline, IoPersonSharp, IoLogOutSharp } from "react-icons/io5";

const Dropdown = () => {
  return (
    <div className=''>
        <div className='text-[#2E6943] absolute bg-white left-auto right-0 w-[240px] py-4 px-2 mt-[45px] shadow-md rounded-md'>
            <span className='px-4'>John Doe</span>
            <ul className='border-y border-gray-300 my-4 py-2'>
                <li className='flex items-center gap-2 py-2 px-4 hover:bg-[#F2F7F5]'><IoPersonSharp size={25} className='text-[#00c797]'/> Your details</li>
                <li className='flex items-center gap-2 py-2 px-4 hover:bg-[#F2F7F5]'><IoLogOutSharp size={25} className='text-[#00c797]'/> Log out</li>
            </ul>
            <div className='flex gap-4 items-center px-2 py-2 hover:bg-[#F2F7F5]'>
                <span className='h-[30px] w-[30px] rounded-full text-white bg-[#00c797]'><IoAddOutline size={30}/></span><span>Create a Program</span>
            </div>
        </div>
    </div>
  )
}

export default Dropdown