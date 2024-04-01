import React, { useState } from 'react'

const SingleAccord = ({q}) => {
    const [show,setShow]=useState(false)
  return (
    <div>
        <div>
             <h1>{q.Qusetion}<button onClick={()=>{setShow(!show)}}>{show?'-':"+"}</button></h1>
             <div>{show?q.Answer:null}</div>
            </div>
    </div>
  )
}

export default SingleAccord