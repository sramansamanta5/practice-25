import React, { useState } from 'react'
import Modal from './Modal'

const Main = () => {
  
 const[show,setShow]=useState(false)

  return (
    <div className='m-5'>
      <button className='p-2 bg-violet-700 text-white hover:bg-blue-800' onClick={()=>{setShow(true)}}>Open Modal</button>
      {show?<Modal show={show} setShow={setShow}/>:null}
    </div>
  )
}

export default Main