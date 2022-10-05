import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import AddProgram from './pages/AddProgram'
import Guide from './pages/Guide'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import CreateProgram from './pages/CreateProgram'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <div>
        <Routes>
                <Route path='/*' element={
                <ProtectedRoute>
                  <Layout/>
                </ProtectedRoute>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/new-program' element={
                  <ProtectedRoute>
                    <AddProgram/>
                  </ProtectedRoute>
                }/>        
                <Route path='/new-program/create' element={
                  <ProtectedRoute>
                    <CreateProgram/>
                  </ProtectedRoute>
                }/>        
        </Routes>
    </div>
  )
}

export default App