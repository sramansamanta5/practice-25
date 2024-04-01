import React, { useState } from 'react'

const Randomcolour = () => {
    const [colour,setColour]=useState('yellow')
  return (
    <div className='m-5 p-3 border-2 border-solid border-black' style={{backgroundColor:colour}}>
      <button className='bg-blue-400 text-white p-2 rounded-lg'>Change colour</button> 
    </div>
  )
}

export default Randomcolour