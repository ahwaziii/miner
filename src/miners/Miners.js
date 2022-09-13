import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import ModalLogin from './ModalLogin';
import arr from '../Db';
import "./Miners.css";
import { Route } from 'react-router-dom';
function Miners() {
  const [modalLogin, setModalLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('http://178.252.171.198:8000/api/devices')
      .then((data) => data.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err))
      .finally(setIsLoading(false),console.log(data))
  }, [])
  // function LoginHandler(e) {
  //   fetch('http://178.252.171.198:8000/authenticate')
  //     .then((data) => data.json())
  //     .then((json) => setData(json))
  //     .catch((err) => console.log(err))
  //     .finally(setIsLoading(false),console.log(data))
  // }
  
  const result = arr.map((i) => {
    return (
      <>
        
        <header className='header-miner'>
            
        </header>
        
        
      <div className='all-item'>
        <div className='details'>
          <div className='detail-mine'>
            <div className='div-infomotion'><div className='inside-div-infomotion'><p>Device:TH</p><p>{ i.DeviceTH}</p></div></div>
            <div className='div-infomotion'><div className='inside-div-infomotion'><p>DailyProfit:</p><p>{ i.DailyProfit} </p></div></div>
            <div className='div-infomotion'><div className='inside-div-infomotion'><p>UsdDailProfit:</p><p>{ i.UsdDailProfit}</p></div></div>
            <div className='div-infomotion'><div className='inside-div-infomotion'><p>MontlyProfit:</p><p>{i.MontlyProfit }</p></div></div>
            <div className='div-infomotion'><div className='inside-div-infomotion'><p>DailyCost</p><p>{i.DailyCost_ }</p></div></div>
            <div className='div-infomotion'><div className='inside-div-infomotion'><p>DevicePrice</p><p>{i.DevicePrice }</p></div></div>
          </div>
         
          </div>
            <div className='div-miner'>
              <div className='contetnt-miner'>
            <img src='https://iranmine.net/images/uploads/products/2021/08/21/20210821133703co.jpg' />
            
                <div className='imformison-miner'>
                  <div className='name-miner'>
                   <a href='#'>خرید دستگاه ماینر {i.DeviceName}</a>
                </div>
                <div>
                  <span className='span-offer'>28,000,000</span>
                </div>
                <div className='span-sell-price'>
                  <span className='sell-price'>20,000,000</span>
                  <span className='toman'>تومان</span>
                </div>
                </div> 
              </div>
            </div>
        </div>

      </>
      
    )
   
    })
    // console.log(data)
    if(isLoading){return <h1>please wait...</h1>}
  return (
    <div className='Miners'>
      <button onClick={() => setModalLogin(true)}>Login</button>
      {modalLogin &&
        
        <>
          <div className='div-modal-v'>
          <div onClick={() => setModalLogin(false)} className='div-backdrop'>
            
          </div>
            <ModalLogin/>    
          
          </div>
        </>
          }
      <div className='body'>
      
      
        {result}
      </div>
      
    </div>
  )
}

export default Miners
