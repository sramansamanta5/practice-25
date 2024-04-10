import React, { useState } from 'react'

const Details = ({menulist}) => {
    const [show,setShow]=useState(false)
  return (
    <div className='mx-5'>
       <h1 onClick={()=>setShow(!show)}> {menulist.label}</h1>
       {show?<h1>{menulist.children?menulist.children.map((child)=>{return <Details menulist={child}/>}):null}</h1>:null}
    </div>
  )
}

export default Details