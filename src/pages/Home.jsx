import React from 'react'
import Navbar from '../components/Navbar'
import Her from '../components/Her'
import Specialized from '../components/Specialized'
import Why from '../components/Why'
import Booking from '../components/Booking'
import Faq from '../components/Faq'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Her/>
        <Specialized/>
        <Why/>
        <Booking/>
        <Faq/>
        
    </div>
  )
}

export default Home