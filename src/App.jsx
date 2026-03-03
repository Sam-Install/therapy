import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'

const App = () => {
  return (
    <div className=''>
      
      <Routes>

<Route path='/' element={<Home/>} />
<Route path='about' element={<About/>} />

      </Routes>

      <Footer/>

    </div>
  )
}

export default App