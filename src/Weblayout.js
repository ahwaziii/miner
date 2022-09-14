import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './miners/Navbar';

function Weblayout() {
  return (
      <div>
        <Navbar />
      <Outlet />
    </div>
  )
}

export default Weblayout
