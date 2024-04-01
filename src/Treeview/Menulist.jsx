import React from 'react'
import Menuitem from './Menuitem'

const Menulist = ({list}) => {
  return (
    <div>
     {list?list.map((listitem)=><Menuitem item={listitem} key={crypto.randomUUID()}/>):null}
    </div>
  )
}

export default Menulist