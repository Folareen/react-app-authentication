import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Register from './pages/Register'
import Login from './pages/Login'
import Error from './pages/Error'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const user = localStorage.getItem('user')

  return (
    <Router>
      {
        user?
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        :
        <Routes>
          <Route path='/' element={<Navigate replace to='/login' />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      }
      <ToastContainer />
    </Router>
  )
}

export default App