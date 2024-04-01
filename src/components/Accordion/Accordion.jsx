import React, { useState } from 'react'
import questions from './data'
import SingleAccord from './SingleAccord'

const Accordion = () => {
    
  return (
    <div className='m-5'>
        {questions.map((q)=>{
            return <SingleAccord q={q} key={q.id}/>
        })}
    </div>
  )
}

export default Accordion