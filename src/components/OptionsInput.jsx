import React, { useContext, useEffect, useState } from 'react'
import { IoChevronDownSharp } from "react-icons/io5"
import { ProgramContext } from '../context/ProgramContext';
import ListDropdown from './ListDropdown'

const OptionsInput = ({options, name, input}) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const { program } = useContext(ProgramContext);
    useEffect(() => {
        setIsOpen(false)
      },[program]);
  return (
    <div className='relative'>
        <button className='w-full flex justify-between my-5 border border-gray-300 p-3 rounded-sm' onClick={() => setIsOpen(!isOpen)}>
        <span className='text-gray-500 text-sm'>{input}</span>
        <IoChevronDownSharp className={`text-[#00DDA2] duration-300 ${isOpen && '-rotate-180'}`}/>
        </button>
        {isOpen && <ListDropdown options={options} name={name}/>}
    </div>
  )
}

export default OptionsInput