import React, { useEffect, useState } from 'react'

import Modalload from './Modalload'

const Onload = () => {
 
  const[isopen,setisOpen]=useState(false)

  useEffect(()=>{
    setisOpen(false)
    setTimeout(()=>{
      setisOpen(true)
    },4000)
  },[])
  
  return (
    <div className='m-5'>
    <button className='p-2 bg-green-500 text-white' onClick={()=>{setisOpen(true)}}>Open</button>
    {isopen?<Modalload isopen={isopen} setisOpen={setisOpen}/>:null}
    </div>
  )
}

export default Onload