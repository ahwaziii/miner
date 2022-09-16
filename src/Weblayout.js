import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './miners/Navbar';
import { useNavigate } from 'react-router';
import Footer from './miners/Footer';
function Weblayout() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/Home')
  },[])
  return (
      <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Weblayout
