import React, { useState } from 'react'
import explorer from './data'
import Folder from './Folder'

const Main = () => {
   
    const[explorerData,setExplorerData]=useState(explorer)
   // <div key={item.id}>
   //<h1>{item.name}</h1>
   //</div>
   return (
    <div>
     <Folder explorerData={explorerData}/>
    </div>
   ) 
  
}

export default Main