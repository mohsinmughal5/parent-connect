import React from 'react'
import HomePage from './pages/home'
import OurTeam from './pages/out-team'
import ServicesPage from './pages/services'
import ContactUs from './pages/contact-us'
import { Route, Routes } from 'react-router-dom'

const RouterCall = () => {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/our-team' element={<OurTeam />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
    </div>
  )
}

export default RouterCall
