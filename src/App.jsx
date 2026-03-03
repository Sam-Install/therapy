import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Navbar from './components/Navbar'
import Services from './pages/Services'
import Booking from './components/Booking'

const App = () => {
  return (
    <div className=''>

      <Navbar/>
      
      <Routes>

<Route path='/' element={<Home/>} />
<Route path='about' element={<About/>} />
<Route path='/services' element={<Services/>} />
<Route path='/booking' element={<Booking/>} />

      </Routes>

      <Footer/>

    </div>
  )
}

export default App