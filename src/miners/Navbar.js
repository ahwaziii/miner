import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router';
import { UseStateCount } from '../context';
import ModalLogin from './ModalLogin';
function Navbar() {
    const {modalLogin, setModalLogin } = UseStateCount();
    const navigate = useNavigate();
  return (
      <>
          <header>
              <div className='header-body'>
                  <div className='container '>
                      <div className='login-singup'>
                          <div className='ul-login'>
                              <ul className='ul-inline'>
                                  <li onClick={()=>setModalLogin(true)} className='li-inline-login'>Login</li>
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
                      <li>وبلاگ</li>
                      <li>درباره ما</li>
                      <li>سوالات متداول</li>
                      <li>تعرفه ها</li>
                      <li>ویژگی ها</li>
                      <li>امکانات</li>
                      <li onClick={()=>navigate('/miner')}>خانه</li>
                  </ul>
                  
              </div>
              
          </header>
          {modalLogin &&
        
        <>
          <div className='div-modal-v'>
          <div onClick={() => setModalLogin(false)} className='div-backdrop'>
            
          </div>
            <ModalLogin/>    
          
          </div>
        </>
          }
      </>
  )
}

export default Navbar

