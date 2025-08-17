import React from 'react'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Layout from './layout/MainLayout'
import MainLayout from './layout/MainLayout'
import AuthLayout from './layout/AuthLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

        </Route>

        <Route element={<AuthLayout />}>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

        </Route>


      

      
      </Routes>
    </BrowserRouter>
  )
}

export default App