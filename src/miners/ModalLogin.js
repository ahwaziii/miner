import React from 'react';
import "./ModalLogin.css";
import  { useState } from "react";
import Cookies from "universal-cookie";

function ModalLogin() {
    
        const [emailValue, setEmailValue] = useState("");
        const [passwordValue, setPasswordValue] = useState("");
        const cookies = new Cookies();
        const token = cookies.get("token");
    
        const submit = () => {
          fetch("http://178.252.171.198:8000/api/authenticate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              auth: `ut ${cookies.get("token")}`,
            },
            body: JSON.stringify({
              email: "m@gmail.com",
              pass_: "111",
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              cookies.set("token", data.Token, { path: "/" });
            })
            .catch((err) => {
              console.log(err);
            });
        };
      
        console.log(token);
  return (
    <>
          
                
          <div className='div-modal'>
            <div className='div-login-form'>
              
                <h1>Login</h1>
                <div className='inputs-form'>
              <div className='div-form-input-text'>                
                  <input value={emailValue} className='inputs' onChange={(e) => setEmailValue(e.target.value)}></input><label>User Name</label>
              </div>
              <div className='div-form-input-password'>
                  <input type={'password'} value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} ></input><label>Password</label>
              </div>  
                </div>
                <button onClick={submit}>Submit</button>
            
            </div>
          </div>
          
        </>
  )
}

export default ModalLogin
