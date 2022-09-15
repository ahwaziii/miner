import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './miners/Navbar';
import Miners from './miners/Miners';
import { useNavigate } from 'react-router';

function Weblayout() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/miner')
  },[])
  return (
      <div>
      <Navbar />
      
      <Outlet />
    </div>
  )
}

export default Weblayout
