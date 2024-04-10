import React from 'react'
import { useState } from 'react'

const Folder = ({explorerData}) => {
  
    
    const[expand,setExpand]=useState(false)


    if(explorerData.isFolder){
        return (
            <div className='m-7 cursor-pointer'>
                <div onClick={()=>{setExpand(!expand)}}>📁{explorerData.name}</div>
                {expand? <div className='m-4'>{explorerData.items?explorerData.items.map((item)=>{return <Folder explorerData={item}/>}):null}</div>:null}
            </div>
          )
    }
    else{
     return  <div className='m-7'>📄{explorerData.name}</div>
    }
}

export default Folder