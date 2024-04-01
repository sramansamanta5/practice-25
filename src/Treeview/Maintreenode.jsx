import React from 'react'
import menus from './Data'
import Parentree from './Parentree'

const Maintreenode = () => {
  ////Discarded  discarded
  return (
    <div className='m-5'>
     <Parentree menus={menus}/>
    </div>
  )
}

export default Maintreenode