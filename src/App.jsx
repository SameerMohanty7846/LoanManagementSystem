import React from 'react'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}  ></Route>
          <Route path='/signup' element={<SignUp/>}  ></Route>
        </Routes>
      </BrowserRouter>


    </div>



  )
}

export default App
