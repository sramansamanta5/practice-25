import React, { useState } from 'react'
import Modalrating from './Modalrating'

const GiveRating = () => {
    const[rating,setRating]=useState(0)
    const[isopen,setisOpen]=useState(false)
  return (
    <div className='m-5'>
      <h1>Open modal and give rating</h1>
      <button className='p-2 text-white bg-green-600' onClick={()=>{setisOpen(true)}}>Rate</button>
      {isopen? <Modalrating rating={rating} setRating={setRating} isopen={isopen} setisOpen={setisOpen}/>:null}
      <h1>
        {rating===0?"You havent given a rating": `You gave a ${rating} rating!!!`}
       </h1>
    </div>
  )
}

export default GiveRating