import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoChevronDownSharp, IoArrowBackSharp } from "react-icons/io5"
import { BsFillCalendar2Fill } from "react-icons/bs"
import Button from '../components/Button'
import { useState } from 'react'
import { useContext } from 'react'
import { ProgramContext } from '../context/ProgramContext'
import { useEffect } from 'react'
import CreateTopBar from '../components/CreateTopBar'
import OptionsInput from '../components/OptionsInput'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const options = [
    'BMEG', 'Pilmico', 'Unifeeds', 'Ultrapak'
]

const CreateProgram = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ age, setAge ] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [ error, setError ] = useState('');
  const [ brand, setBrand ] = useState('Choose feed brand...');
  const { program, createProgram } = useContext(ProgramContext);
  const navigate = useNavigate()
  useEffect(() => {
    if (program?.feedBrand) {
      setBrand(program.feedBrand)
    //   setError('')
    }
    console.log(program)
    setIsOpen(false)
  },[program]);
  const handleCreate = () => {
    if(!program.programType || !program.feedBrand || !program.startDate || !age){
      setError('All inputs are required!')
    }else {
      navigate('/home')
    }
  }
  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setStartDate(e);
    createProgram({startDate:e})
    console.log(e.getTime())
    console.log(new Date(e.getTime()))
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='w-full h-screen bg-[#F2F7F5]'>
      <CreateTopBar/>
      <div className='flex justify-center'>
          <div className='w-[350px] flex flex-col mt-10 '>
            <div className='flex items-center justify-between flex-row-reverse'>
                <h2 className='text-[#2E6943] font-bold text-lg capitalize'>{program?.programType}</h2>
                <Link to='/new-program' className='text-[#00DDA2] cursor-pointer'><IoArrowBackSharp size={25}/></Link>
            </div>
            <OptionsInput options={options} name='feedBrand' input={brand}/>
            <input className='w-full flex justify-between my-5 border border-gray-300 p-3 rounded-sm bg-[#F2F7F5] text-gray-500 text-sm outline-none' value={age} type="number" placeholder='Age (days)' onChange={(e) => setAge(e.target.value)}/>
            <div className='relative'>
                <button className='w-full flex justify-between my-5 border border-gray-300 p-3 rounded-sm' onClick={handleClick}>
                <span className='text-gray-500 text-sm flex items-center gap-3'><BsFillCalendar2Fill size={16}/>Start Date: {startDate.toDateString()}</span>
                <IoChevronDownSharp className={`text-[#00DDA2] duration-300 ${isOpen && '-rotate-180'}`}/>
                </button>
                        <DatePicker className='hidden outline-none w-full justify-between my-5 border border-gray-300 p-3 rounded-sm text-gray-500 text-sm bg-[#F2F7F5] cursor-pointer'
                        selected={startDate}
                        onChange={handleChange}
                        inline={isOpen}
                      />
                        
            </div>
            


              {error && <span className='p-2 text-red-600 text-center text-sm bg-red-300 bg-opacity-10'>{error}</span>}
              <div onClick={handleCreate}>
                <Button className={'w-full rounded-sm'} text={'Create'}/>
              </div>
          </div>
        </div>
    </div>
  )
}

export default CreateProgram