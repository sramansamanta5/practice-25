import React from 'react'
import { useState } from 'react'
import Maintree from './Maintree'

const Treestructure = ({menu}) => {
  //Parent 2
    const [show,setShow]=useState(false)
  return (
    <div>
     <div className='flex flex-row gap-1'>
         <h1>{menu.label}</h1>
          <button onClick={()=>{setShow(!show)}}>{show?"-":"+"}</button>
     </div>
     {/*{show?menu.children?menu.children.map((child)=>{return <div className='mx-8'>{child.label}</div>}):"":""} */}
     {show?menu.children? <Treestructure menu={menu.children}/>:null:''}
     {show?menu.children? <Maintree menus={menu}/>:null:''}
     </div>
  )
}

export default Treestructure