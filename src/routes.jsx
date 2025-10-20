import React from 'react'

import HomePage from './pages/home'
import OurTeam from './pages/our-team'
import ServicesPage from './pages/services'
import ContactUs from './pages/contact-us'
import Blogs from './pages/blogs'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/sign-up'
import SignIn from './pages/sign-in'



const RouterCall = () => {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/our-team' element={<OurTeam />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default RouterCall
