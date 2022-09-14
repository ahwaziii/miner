import React from 'react';
import "./ModalLogin.css";
import  { useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from 'react-router';
function ModalLogin() {
  const navigate = useNavigate();
        const [emailValue, setEmailValue] = useState("");
        const [passwordValue, setPasswordValue] = useState("");
        const cookies = new Cookies();
        const token = cookies.get("token");
  const [user, setUser] = useState();
        const submit = () => {
          fetch("http://178.252.171.198:8000/api/authenticate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              auth: `ut ${cookies.get("token")}`,
            },
            body: JSON.stringify({
              email: emailValue,
              pass_: passwordValue,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              setUser(data);
              cookies.set("token", data.Token, { path: "/miner" });
            })
            .catch((err) => {
              console.log(err);
            })
            .finally(() => {
             if(user){navigate('/user');}
           })
        };
        // if (cookies.HAS_DOCUMENT_COOKIE==true) { alert("hi") }
        
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
