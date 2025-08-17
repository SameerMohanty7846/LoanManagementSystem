import React from 'react'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import MainLayout from './layout/MainLayout'
import AuthLayout from './layout/AuthLayout'
import ViewLoans from './components/ViewLoans'
import LoanHistory from './components/LoanHistory'
import EmiCalculator from './components/EmiCalculator'
import ViewAndUpdateLoans from './components/ViewAndUpdateLoans'
import ViewLoanApplications from './components/ViewLoanApplications'
import PrivateRoute from './routes/PrivateRoute'
import UserDashboard from './components/UserDashboard'
import AdminDashboard from './components/AdminDashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* User Routes  */}
        <Route element={<PrivateRoute role={'user'} children={<MainLayout />} ></PrivateRoute>}>
          <Route path='/user/loans' element={<ViewLoans />} />
          <Route path='/user/loanhistory' element={<LoanHistory />} />
          <Route path='/user/emicalculator' element={<EmiCalculator />} />
          <Route path='/user/userdashboard' element={<UserDashboard />} />

        </Route>

        {/* Admin Routes  */}
        <Route element={<PrivateRoute role={'admin'} children={<MainLayout />} ></PrivateRoute>}>
          <Route path='/admin/view-and-update-loans' element={<ViewAndUpdateLoans />} />
          <Route path='/admin/view-loan-applications' element={<ViewLoanApplications />} />
          <Route path='/admin/admindashboard' element={<AdminDashboard />} />

        </Route>

        <Route element={<AuthLayout />}>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

        </Route>


        {/* Normal Routing  */}

        {/* USER
a>ViewLoans         =>/user/loans
b>LoanHistory       =>/user/loanhistory
c>EMI Calculator  =>/user/emicalculator

ADMIN
a>ViewAndUpdate Loans    =>/admin/view-and-update loans
b>ViewLoanApplications   =>/admin/view-loan-applications
 */}







      </Routes>
    </BrowserRouter>
  )
}

export default App