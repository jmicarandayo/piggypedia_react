import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Guide from './pages/Guide'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <div>
        <Routes>
                <Route path='/*' element={<Layout/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>        
        </Routes>
    </div>
  )
}

export default App