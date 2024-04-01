import React from 'react'
import Menulist from './Menulist'
import menus from './Data'

const Parentree = () => {
  return (
    <div className='m-5'>
        <h1>Parentree</h1>
       <Menulist list={menus}/>
    </div>
  )
}

export default Parentree