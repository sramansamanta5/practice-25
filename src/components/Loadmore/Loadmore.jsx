import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Loadmore = () => {

    const [Products,setProducts]=useState([])
    const [loadamount,setLoadAmount]=useState(6)

   
    
    useEffect(()=>{
        axios.get('https://dummyjson.com/products').then((res)=>{setProducts(res.data.products)})
    },[])

  return (
    <div className='m-5 p-3'>
       <div className='grid grid-cols-3 gap-2'>
          {Products.slice(0,loadamount).map((p)=>{
            return <div  className='flex flex-col items-center' key={p.id}>
               <div><img src={p.images[2]} className='object-contain h-48 w-96'/></div> 
                <h2>{p.title}</h2>
            </div>
          })}
       </div>
       <center><button className='bg-orange-500 text-white p-2 rounded-lg' disabled={loadamount>=Products.length?true:false} onClick={()=>{setLoadAmount(loadamount+6)}}>Load More</button></center>
    </div>
  )
}

export default Loadmore