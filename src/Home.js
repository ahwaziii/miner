import React from 'react'
import './Home.css'
function Home() {
  return (
      <>
          <div className='content'>
              <div className='infomotion'>
              <div className='infomotion-text'>
                  <h1 className="display-4 font-size-26 mb-3">استخراج ابری در بستر بلاک‌چین</h1>
                  <p>
                            نوروبیت ارائه دهنده اولین سرویس استخراج ابری در ایران
                  </p>
                  <p id="p-bold">
                            برای مشاهده نماد اعتماد
                            <a href="#enamad">اینجا</a>
                            کلیلک کنید
                  </p>
                  <p className="text-dark ">
                            برای مشاهده دمو ابتدا ثبت نام کنید
                  </p>
                  
                  </div>
                  <div className='infomotion-input'>
                      <div className='infomotion-input'>
                      <button className='infomotion-button'>ثبت نام</button>
                          <input type={'Text'} placeholder={'شماره موبایل یا ایمیل' } />
                      <input type={'Text'} placeholder={'نام و نام خوانوادگی'} />
                      
                      </div>
                  </div>
              </div>
              <div className='content-img'>
                  <img src='bitcoin-mining-software.jpg' alt='image'/>
              </div>
              
              
        </div>
      </>
  )
}

export default Home
