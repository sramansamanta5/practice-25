import React from 'react'
import { useState } from 'react'
import Strike from './Strike'

const TictacToe = () => {
   
    const [tiles,setTiles]=useState([...Array(9)].fill(null))
  
  return (
    <div className='m-5'>
      
    <h1 className='my-3'>Tic Tac Toe</h1>
     <div className='flex flex-row gap-2 items-center my-1'>
        <div className='border-yellow-500 p-4 border-2 border-solid grow-0 shrink-0' >X</div>
        <div className='border-yellow-500 p-4 border-2 border-solid grow-0 shrink-0' >X</div>
        <div className='border-yellow-500 p-4 border-2 border-solid grow-0 shrink-0' >0</div>
     </div>
     <div className='flex flex-row gap-2 items-center my-1'>
        <div className='border-yellow-500 p-4 border-2 border-solid grow-0 shrink-0'>0</div>
        <div className='border-yellow-500 p-4 border-2 border-solid grow-0 shrink-0'>X</div>
        <div className='border-yellow-500 p-4 border-2 border-solid grow-0 shrink-0'>0</div>
     </div>
     <div className='flex flex-row gap-2 items-center my-1'>
        <div className='border-yellow-500 p-4 border-2 border-solid grow-0 shrink-0'>0</div>
        <div className='border-yellow-500 p-4 border-2 border-solid grow-0 shrink-0'>X</div>
        <div className='border-yellow-500 p-4 border-2 border-solid grow-0 shrink-0'>0</div>
     </div>
     <Strike/>
     {console.log(tiles)}
    <button className='m-4 bg-green-700 p-2 rounded-lg text-white'>Restart</button>
    
    </div>
  )
}

export default TictacToe