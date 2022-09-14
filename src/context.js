import React, { createContext, useState } from 'react'
import { useContext } from 'react';
const context = createContext();

function Context({children}) {
    const [modalLogin, setModalLogin] = useState(false);
    return (
      <context.Provider value={{modalLogin,setModalLogin}}>{children }</context.Provider>  
    )
    
}
function UseStateCount() {
  return useContext(context);
}
export {UseStateCount}
export default Context
