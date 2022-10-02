import React from 'react'
import SideBar from '../components/SideBar'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Guide from '../pages/Guide';
import Locate from '../pages/Locate';
import Compute from '../pages/Compute';

const Layout = () => {
    const [ isOpen, setIsOpen ] = useState(true);
    // const [ isActive, set]
    const handleClick = () => {
        setIsOpen(!isOpen);
        console.log('Clicked')
    }
  return (
    <div className='w-full h-screen'>
    <SideBar isOpen={isOpen} handleClick={handleClick}/>
    <div className={`duration-500 w-full fixed ${isOpen ? 'left-[300px]' : 'left-[60px]'}`}>
        <Routes>
            {/* <Route index element={<Home/>}/> */}
            <Route path='home' element={<Home isOpen={isOpen}/>}/>
            <Route path='guide' element={<Guide isOpen={isOpen}/>}/>
            <Route path='locate' element={<Locate isOpen={isOpen}/>}/>
            <Route path='compute' element={<Compute isOpen={isOpen}/>}/>
        </Routes>
    </div>
</div>
  )
}

export default Layout