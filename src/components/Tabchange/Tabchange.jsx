import React, { useState } from 'react'
import { tabdatas } from './tabdata'

const Tabchange = () => {

    const[currentindex,setCurrentindex]=useState(0)
  return (
    <div className='m-5 p-3 bg-blue-300 rounded-lg'>
        <h1>Tabchange</h1>
<div className=' flex flex-row gap-2'>
{tabdatas.map((tab,index)=>{
 return <div key={index} className=''>
<button className='border-violet-500 border-2 bg-violet-500 text-white p-3 rounded-lg' onClick={()=>setCurrentindex(index)} style={currentindex===index?{backgroundColor:'black'}:{backgroundColor:''}}>{tab.Heading}</button>
</div>
})}
<div>
 </div>
    </div>
        <p className='my-1 border-2 border-solid border-t-amber-100 p-4 rounded-lg bg-yellow-300'>{tabdatas[currentindex].Description}</p>
    </div>
  )
}

export default Tabchange