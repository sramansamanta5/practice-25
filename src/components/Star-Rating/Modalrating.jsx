import React from 'react'
import { FaRegStar } from "react-icons/fa";  //outile star          
import { FaStar } from "react-icons/fa";    //filled star         

const Modalrating = ({rating,setRating, isopen,setisOpen}) => {
  


  return (
    <div className='fixed left-0 top-0 w-full h-full flex items-center justify-center backdrop-blur-md'>
        <div className='p-5 border-3 border-white border-solid bg-white'>
       <div className='flex flex-row gap-2 m-3'>{[...Array(5)].map((star,index)=>{
        return <div onClick={()=>{setRating(index+1)}}>{rating>index?<FaStar size={30}/>:<FaRegStar size={30}/>}</div>
       })}</div>
       <button onClick={()=>{setisOpen(false)}} className='p-2 bg-red-400 text-white m-3 rounded-lg'>Close</button>
       </div>
    </div>
  )
}

export default Modalrating