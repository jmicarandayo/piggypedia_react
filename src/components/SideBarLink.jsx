import React from 'react'

const SideBarLink = () => {
  return (
    <div>
        <li className='flex items-center gap-3 text-white text-lg hover:bg-[#2E6943] cursor-pointer py-3 pl-7 border-l-4 border-[#00BA82]'><IoHomeSharp size={22}/><span className={`duration-500  ${isOpen ? 'block' : 'hidden'}`}>Home</span></li>
    </div>
  )
}

export default SideBarLink