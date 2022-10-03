import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoChevronDownSharp } from "react-icons/io5"
import Button from '../components/Button'
import ListDropdown from '../components/ListDropdown'
import { useState } from 'react'
import { useContext } from 'react'
import { ProgramContext } from '../context/ProgramContext'
import { useEffect } from 'react'
import CreateTopBar from '../components/CreateTopBar'

const AddProgram = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ error, setError ] = useState('');
  const [ type, setType ] = useState('Choose program type...');
  const { program } = useContext(ProgramContext);
  const navigate = useNavigate()
  useEffect(() => {
    if (program.type) {
      setType(program.type)
      setError('')
    }
    // console.log(program)
    setIsOpen(false)
  },[program]);
  const handleConfirm = () => {
    if(program.type){
      navigate('/new-program/create')
    }else {
      setError('Program type is required')
    }
  }
  return (
    <div className='w-full h-screen bg-[#F2F7F5]'>
      <CreateTopBar/>
      <div className='flex justify-center'>
          <div className='w-[350px] flex flex-col text-center mt-10 '>
            <h2 className='text-[#2E6943] font-bold text-3xl'>Create a Program</h2>
            <div className='relative'>
              <button className='w-full flex justify-between my-5 border border-gray-300 p-3 rounded-sm' onClick={() => setIsOpen(!isOpen)}>
                <span className='text-gray-500 text-sm'>{type}</span>
                <IoChevronDownSharp className={`text-[#00DDA2] duration-300 ${isOpen && '-rotate-180'}`}/>
              </button>
              {isOpen && <ListDropdown/>}
            </div>
              {error && <span className='p-2 text-red-600 text-sm bg-red-300 bg-opacity-10'>{error}</span>}
              <div onClick={handleConfirm}>
                <Button className={'w-full rounded-sm'} text={'Confirm'}/>
              </div>
          </div>
        </div>
    </div>
  )
}

export default AddProgram