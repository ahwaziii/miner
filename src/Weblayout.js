import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './miners/Navbar';
import Miners from './miners/Miners';

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
