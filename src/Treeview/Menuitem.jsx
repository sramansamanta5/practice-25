import React, { useState } from 'react'

const Menuitem = ({item}) => {
    const [displaycurrentChildren,setDisplaycurrentChildren]=useState({})
    

    const handletoggleChildren=(getCurrentlabel)=>{
     setDisplaycurrentChildren({
        ...displaycurrentChildren,[getCurrentlabel]:!displaycurrentChildren[getCurrentlabel]
     })
    }
    console.log(displaycurrentChildren)
  return (
    <div>
       <h1>{item.label}</h1>
       {item && item.children ?<div onClick={()=>{handletoggleChildren(item.label)}}>
        {displaycurrentChildren[item.label]?"-":"+"}
       </div>:''}
    </div>
  )
}

export default Menuitem