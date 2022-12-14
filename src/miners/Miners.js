import React from 'react'
import { useState, useEffect } from 'react'

import "./Miners.css";

function Miners() {
  
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('http://178.252.171.198:8000/api/devices')
      .then((src) => src.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err))
      setIsLoading(false)
  }, []);
  if(isLoading)return<h1>please wait...</h1>

  return (
    <div className='Miners'>
      <div className='body'>
        {data &&
          data.map((i) => {
            return (
            <>
              <div className='all-item'>
                <div className='contetnt-miner'>
                  <img src='https://iranmine.net/images/uploads/products/2021/08/21/20210821133703co.jpg' />
                </div>
              <div className='details'>
                <div className='detail-mine'>
                  <div className='div-infomotion'><div className='inside-div-infomotion'><p>Device:TH</p><p>{ i.DeviceTH}</p></div></div>
                  <div className='div-infomotion'><div className='inside-div-infomotion'><p>DailyProfit:</p><p>{ i.DailyProfit} </p></div></div>
                  <div className='div-infomotion'><div className='inside-div-infomotion'><p>UsdDailProfit:</p><p>{ i.UsdDailProfit}</p></div></div>
                  <div className='div-infomotion'><div className='inside-div-infomotion'><p>MontlyProfit:</p><p>{i.MontlyProfit }</p></div></div>
                  <div className='div-infomotion'><div className='inside-div-infomotion'><p>DailyCost</p><p>{i.DailyCost_ }</p></div></div>
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
        <div className='div-miner'>
        </div>
      </div>
        </>  
  )})}       
      </div>
    </div>
)}

export default Miners
