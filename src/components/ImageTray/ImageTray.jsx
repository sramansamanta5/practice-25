import React, { useState } from 'react'
import { imagedata } from './Imagedata'
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";


const ImageTray = () => {

    const [currentindex,setCurrentindex]=useState(0)

    const prevSlide=()=>{
        const isfirstslide=currentindex===0;
        const newslide=isfirstslide?imagedata.length-1:currentindex-1;
        setCurrentindex(newslide)
    }

    const nextSlide=()=>{
        const islastSlide=currentindex===imagedata.length-1;
        const newslide=islastSlide?0:currentindex+1;
        setCurrentindex(newslide)
    }

    const dots=[];
     for(let i=0;i<imagedata.length;i++){
        dots.push(i)
     }

     console.log(dots)

    
  return (
    <>
    <div className='m-4 flex flex-row justify-center items-center gap-1'>
      <button className='rounded-full p-3 bg-black'  onClick={prevSlide}><FaLessThan  size={35} fill='white'/></button>
      <div className='rounded-lg'><img className='object-contain h-48 w-96 rounded-lg' src={imagedata[currentindex][0].imgurl}/></div>
      <div className='rounded-lg'><img className='object-contain h-48 w-96 rounded-lg' src={imagedata[currentindex][1].imgurl}/></div>
      <div className='rounded-lg'><img className='object-contain h-48 w-96 rounded-lg' src={imagedata[currentindex][2].imgurl}/></div>
      <button className='rounded-full p-3 bg-black'  onClick={nextSlide}><FaGreaterThan size={35} fill='white'/></button>
      </div>
      <div className='flex flex-row gap-2 justify-center items-center'>
         {dots.map((dot,index)=>{return <div onClick={()=>setCurrentindex(index)} className='rounded-full p-1' style={index===currentindex?{backgroundColor:'red'}:{backgroundColor:''}}><GoDotFill size={22}/></div>})}
      </div>
    </>
  )
}

export default ImageTray