import React, { useState } from 'react'
import menus from './Data'
import Treestructure from './Treestructure'


const Maintree = () => {
    //parent 1
  return (
    <div className='m-5 font-bold text-2xl'>
        {menus.map((menu)=>{
            return <Treestructure menu={menu} key={crypto.randomUUID()}/>       
            })}
    </div>
  )
}

export default Maintree