import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './miners/Navbar';
import Miners from './miners/Miners';
import { useNavigate } from 'react-router';

function Weblayout() {
  return (
      <div>
      <Navbar />
      <Miners />
      <Outlet />
    </div>
  )
}

export default Weblayout
