import React from 'react'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Layout from './layout/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes (without layout) */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Protected routes (with layout) */}
        <Route path="/*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App