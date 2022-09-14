import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
      <>
          <header>
              <div className='header-body'>
                  <div className='container '>
                      <div className='login-singup'>
                          <div className='ul-login'>
                              <ul className='ul-inline'>
                                  <li className='li-inline-login'>Login</li>
                              </ul>
                          </div>
                          <div className='ul-singup'>
                              <ul className='ul-inline'>
                                  <li className='li-inline-singup'>Sing Up</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='navbar'>
                  <div className='navbar-logo'>
                  <img src='norobit.png' />
                  </div>
                  <ul className='ul-navbar'>
                      <li>خانه</li>
                      <li>امکانات</li>
                      <li>ویژگی ها</li>
                      <li>تعرفه ها</li>
                      <li>سوالات متداول</li>
                      <li>درباره ما</li>
                      <li>وبلاگ</li>
                  </ul>
                  
              </div>
              
          </header>
      </>
  )
}

export default Navbar

