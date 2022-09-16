import React, { createContext, useState } from 'react'
import { useContext } from 'react';
const context = createContext();
const login = createContext();


function Context({children}) {
    const [modalLogin, setModalLogin] = useState(false);
    const [user, setUser] = useState();
  return (
    <context.Provider value={{ modalLogin, setModalLogin ,user}}>{children}</context.Provider> 
    
    )   
}
function UseStateModalLogin() {
  return useContext(context);
}
export {UseStateModalLogin}
export default Context
