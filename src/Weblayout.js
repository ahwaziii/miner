import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './miners/Navbar';
import Miners from './miners/Miners';
import { useNavigate } from 'react-router';

function Weblayout() {
  const navigate = useNavigate()
  
  return (
      <div>
      <Navbar />
      <Miners/>
      <Outlet />
    </div>
  )
}

export default Weblayout
