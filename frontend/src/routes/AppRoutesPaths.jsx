import React from 'react'
import { Routes, Route } from 'react-router-dom'
import  Home  from '../pages/Home'
import  Download  from '../pages/Download'
import About from '../pages/About'
import Contact from '../pages/Contact'
import WhyUs from '../pages/WhyUs'
export default function AppRoutesPaths() {
  return (

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Why-us" element={<WhyUs />} />
        </Routes>

    
  )
}
