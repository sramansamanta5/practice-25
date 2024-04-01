import React, { useState } from 'react'

const Menutree = ({menus}) => {
  //Discarded
    const [show,setShow]=useState(false)
  return (
    <div>
         <span onClick={()=>{setShow(!show)}}>{menus.label}</span>
         {show?(menus.children?menus.children.map((child)=>{return <div>{child.label}</div>}):""):""}
    </div>
  )
}

export default Menutree