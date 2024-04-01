import React, { useState } from 'react'

const SingleTree = ({menus}) => {
  const[show,setShow]=useState(false)
  return (
    <div className='m-5'>
        
         {menus.map((menu)=>{return <div key={crypto.randomUUID()}>
            <div className='flex flex-row gap-1'>
            <h1>{menu.label}</h1>
            <button onClick={()=>{setShow(!show)}}>{show?'-':'+'}</button> 
             </div>
             {show?menu.children?<SingleTree menus={menu.children} show={show}/>:'':null}
         </div>})}
    </div>
  )
}

export default SingleTree