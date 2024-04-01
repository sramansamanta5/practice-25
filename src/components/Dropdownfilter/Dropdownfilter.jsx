import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dropdownfilter = () => {
 
  const[ischecked,setisChecked]=useState(false)
  const[selectedoption,setselectedoption]=useState('')

  useEffect(()=>{
    axios.get(`https://api.spoonacular.com/recipes`)
    .then((res)=>{console.log(res)})
  })

   //cleanup function in useeffect
  //Lazy loading
  //Infinite scroll
  //custom hooks
  return (
    <div className='m-5 p-4'>
      <div className='flex flex-col gap-2 '>
        <h1>Filter by ----</h1>
        <select onChange={(e)=>{setselectedoption(e.target.value)}} className='bg-orange-400 rounded-lg text-white p-3 font-bold w-48'>
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option>
         </select>
         {console.log(selectedoption)}
         <labe>Agree:<input type='checkbox' value="math" checked={ischecked} onChange={()=>{setisChecked(!ischecked)}}></input></labe>
          <h1>Math :{ischecked.toString()}</h1>
      </div>
    </div>
  )
}

export default Dropdownfilter