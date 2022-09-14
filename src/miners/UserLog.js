import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function UserLog() {
    const [isLoading, setIsLoadin] = useState(false);
    const [data, setData] = useState();
    useEffect(() => {
        fetch('http://178.252.171.198:8000/api/devices')
            .then((src) => { src.json() })
            .then((json) => setData(json)).catch((err) => console.log(err))
            .finally(()=>setIsLoadin(false))
    }, [])
    if(isLoading)return <h1>please wait</h1>
  return (
      <>
          
      </>
  )
}

export default UserLog
