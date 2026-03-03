import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=''>
      
      <Routes>

<Route path='/' element={<Home/>} />

      </Routes>

      <Footer/>

    </div>
  )
}

export default App