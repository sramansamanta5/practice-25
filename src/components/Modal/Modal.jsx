import React from 'react'

const Modal = ({show,setShow}) => {
  return (
    <div className='fixed left-0 top-0 w-full h-full flex items-center justify-center backdrop-blur-md'>
      <div className='bg-white p-3 border-2 border-yellow-200'>
      <h1>Heading</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Assumenda alias aliquid numquam sit totam nemo laborum nihil eligendi optio illum!</p>
       <button onClick={()=>{setShow(false)}} className='p-2 bg-red-600 text-white rounded-lg'>Close</button>
       </div>
    </div>
  )
}

export default Modal