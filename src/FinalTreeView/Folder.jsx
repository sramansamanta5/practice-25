import React, { useState } from 'react'
import Details from './Details'

const Folder = ({menulist}) => {

  const [expand,setExpand]=useState(false)

  // <div>{c.label}</div>
  return (
    <div>
         {menulist.map((menu)=>{
            return <div className='m-5'>
                <h1 onClick={()=>{setExpand(!expand)}} className='cursor-pointer'>{menu.label}</h1>
                 {expand?<h1>{menu.children?menu.children.map((c)=>{return <Details menulist={c}/>}):null}</h1>:null}
            </div>
         })}
    </div>
  )
}

export default Folder