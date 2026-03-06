import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Navbar from './components/Navbar'
import Services from './pages/Services'
import Booking from './components/Booking'
import Login from './components/Admin/Login'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div className=''>

      <Navbar/>
      
      <Routes>

<Route path='/' element={<Home/>} />
<Route path='about' element={<About/>} />
<Route path='/services' element={<Services/>} />
<Route path='/booking' element={<Booking/>} />
<Route path='/admin/login' element={<Login/>} />
<Route path='/dashboard' element={<Dashboard/>} />

      </Routes>

      <Footer/>

    </div>
  )
}

export default App