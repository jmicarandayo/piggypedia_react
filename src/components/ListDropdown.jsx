import React, { useContext } from 'react'
import { ProgramContext } from '../context/ProgramContext';

const ListDropdown = ({options, name}) => {
    const { createProgram } = useContext(ProgramContext);

  return (
    <div>
        <div className='text-[#2E6943] absolute bg-white left-auto right-0 w-full mt-[-20px] p-1 shadow-md rounded-sm z-10'>
            <ul className='p-2 text-sm'>
              {options.map((option, ) => (
                <li className='flex items-center gap-2 py-2 px-4 hover:bg-[#F2F7F5] cursor-pointer' key={option} onClick={() => createProgram({ [name]:option})}>{option}</li>
              ))}
                {/* <li className='flex items-center gap-2 py-2 px-4 hover:bg-[#F2F7F5] cursor-pointer' onClick={() => createProgram({type: 'Nursing Piglets'})}>Nursing Piglets</li>
                <li className='flex items-center gap-2 py-2 px-4 hover:bg-[#F2F7F5] cursor-pointer' onClick={() => createProgram({type: 'Fattening Piglets'})}>Fattening Piglets</li>
                <li className='flex items-center gap-2 py-2 px-4 hover:bg-[#F2F7F5] cursor-pointer' onClick={() => createProgram({type: 'Pregnant Sows/Gilts'})}>Pregnant Sows/Gilts</li>
                <li className='flex items-center gap-2 py-2 px-4 hover:bg-[#F2F7F5] cursor-pointer' onClick={() => createProgram({type: 'Milking Sows'})}>Milkings Sows</li> */}
            </ul>
        </div>
    </div>
  )
}

export default ListDropdown