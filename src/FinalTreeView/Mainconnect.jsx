import React, { useState } from 'react'
import menus from './data'
import Folder from './Folder'

const Mainconnect = () => {
    const[menulist,setMenulist]=useState(menus)
  return (
    <div>
        <Folder menulist={menulist}/>
    </div>
  )
}

export default Mainconnect