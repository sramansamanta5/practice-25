import React, { useState } from 'react'
import { FaRegStar } from "react-icons/fa";  //outile star          
import { FaStar } from "react-icons/fa";    //filled star          

const Starrating = () => {
   
    const[rating,setRating]=useState(2)

  return (
    <div className='m-5 flex flex-row gap-1'>
     
      {[...Array(5)].map((star,index)=>{
        return <div onClick={()=>setRating(index+1)} key={index}>{rating>index? <FaStar fill='orange' size={30}/>: <FaRegStar size={30}/>}</div>
      })}
    </div>
  )
}

export default Starrating