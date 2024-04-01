import React from 'react'
import Usefetch from './Usefetch'

const Mainhook = () => {
  
   const data= Usefetch('https://dummyjson.com/products')

  return (
    <div className='m-5'>
        <h1>Mainhook</h1>
        <div className='grid grid-cols-5 gap-1'>
        { data.products?data.products.map((d)=>{
            return <div key={d.id} className='flex flex-col  items-center'>
                   <div><img src={d.thumbnail}  className='object-contain h-48 w-96'/></div>
                   <h1>{d.title}</h1>
            </div>
           }):''}
        </div>
    </div>
  )
}

export default Mainhook