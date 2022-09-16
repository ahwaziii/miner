import React from 'react'
import './Footer.css'
function Footer() {
  return (
      <>
      <div className='body-footer'>
        <div className='singup-footer'>
          <h2 className="text-white">  ثبت نام استخراج ابری بیت کوین </h2>
          <p className="u-text-light mb-0">1.ثبت نام &nbsp;&nbsp;&nbsp;&nbsp; 2.خرید بسته &nbsp;&nbsp;&nbsp;&nbsp; 3.استخراج بیت کوین  </p>
          <div className='infomotion-input'>
                      <div className='infomotion-inputs'>
                      <button id='input-btn' className='infomotion-button'>ثبت نام</button>
                          <input id='input-shomare' type={'Text'} placeholder={'شماره موبایل یا ایمیل' } />
                      <input id='input-name' type={'Text'} placeholder={'نام و نام خوانوادگی'} />
                      
                      </div>
          </div>
          <hr className='hr-footer' />
          <div className='footer-under'>
            <div className='footer-logo'>
              <img src='eteamad.png'/>
            </div>
            <div className='footer-address'>
              <p className="mb-2 u-text-light"> <span className="fa fa-map-marker mr-2"></span> تهران - فلکه دوم صادقیه - برج گلدیس - طبقه هفتم - واحد 721 | کد پستی 1451796786</p>
              <div class="row">
                    <p class="mb-2 u-text-light">
                        <span class="fa fa-envelope  mr-2"></span> <a class="u-link-light" href="mailto:support@norobit.com">support@norobit.com</a>
                    </p>
                    <p class="mb-2 u-text-light">
                        <span class="fa fa-phone mr-2"></span> <a class="u-link-light" href="tel:02147623232">021-47623232</a>
                    </p>
                </div>
            </div>
          </div>
          <div className='footer-about'>
            <div className='about-logo'>
              <div className='logos'><img src='icons8-instagram-32.png'/></div>
              <div className='logos'><img src='icons8-telegram-25.png'/></div>
              <div className='logos'><img src='icons8-twitter-50.png'/></div>
              
              
              
            </div>
            <div className='about-about'>
            <ul class="list-inline text-md-right mb-0">
                    <li class="list-inline-item">
                        <a >
                            قوانین
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a >
                            ارتباط باما
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a >
                           درباره ما
                        </a>
                    </li>
                </ul>
            </div>
            <div className='about-nashr'>
              <p className="small u-text-light mb-0">کپی رایت © 2019 . کلیه حقوق برای شرکت گستره نگار اطلس محفوظ است</p>
            </div>
            
          </div>
        </div>  
      </div>
      </>
  )
}

export default Footer
