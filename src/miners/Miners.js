import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import arr from '../Db';
import "./Miners.css";
function Miners() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
  const result = arr.map((i) => {
    return (
      <>
        <header className='header-miner'>

        </header>
      <div className='all-item'>
        <div className='details'>
          <div className='detail-mine'>
            <div className='div-imfomiton'><div className='inside-div-imfomiton'><p>Device:TH</p><p>{ i.DeviceTH}</p></div></div>
            <div className='div-imfomiton'><div className='inside-div-imfomiton'><p>DailyProfit:</p><p>{ i.DailyProfit} </p></div></div>
            <div className='div-imfomiton'><div className='inside-div-imfomiton'><p>UsdDailProfit:</p><p>{ i.UsdDailProfit}</p></div></div>
            <div className='div-imfomiton'><div className='inside-div-imfomiton'><p>MontlyProfit:</p><p>{i.MontlyProfit }</p></div></div>
            <div className='div-imfomiton'><div className='inside-div-imfomiton'><p>DailyCost</p><p>{i.DailyCost_ }</p></div></div>
            <div className='div-imfomiton'><div className='inside-div-imfomiton'><p>DevicePrice</p><p>{i.DevicePrice }</p></div></div>
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
      <div className='body'>
        {result}
      </div>
      
    </div>
  )
}

export default Miners
