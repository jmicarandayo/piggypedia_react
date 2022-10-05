import React from 'react'
import Logo from '../assets/pig_logo.png'
import Brand from '../assets/brand_dark.png'
import { Link, useNavigate } from 'react-router-dom'
import { IoCloseOutline, IoPersonSharp } from "react-icons/io5"
import { useContext } from 'react'
import { ProgramContext } from '../context/ProgramContext'

const CreateTopBar = () => {
    const { createProgram } = useContext(ProgramContext);
    const navigate = useNavigate();
    const handleClose = () => {
        window.localStorage.removeItem('program')
        createProgram(null);
        navigate('/home')
    }
  return (
    <div className='w-full border-b border-gray-300 bg-white'>
        <div className='flex items-center justify-between max-w-[1024px] mx-auto p-6'>
        <div className='flex items-center gap-1'>
            <img className='h-[30px]' src={Logo} alt="" />
            <img className='h-[25px] text-black' src={Brand} alt="" />
        </div>
        <div className='flex items-center gap-2'>
            <div className='h-[40px] w-[40px] bg-[#F2F7F5] group-hover:bg-white flex justify-center items-center rounded-full text-[#2E6943]'>
                <IoPersonSharp/>
            </div>
            <span className='font-extralight text-3xl text-slate-300'>|</span>
            <div onClick={handleClose}>
                <IoCloseOutline size={25} className='text-[#00DDA2] cursor-pointer'/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CreateTopBar