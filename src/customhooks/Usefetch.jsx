import React, { useEffect, useState } from 'react'


const Usefetch = (url) => {

const[products,setProducts]=useState([])

//url-'https://dummyjson.com/products'

useEffect(()=>{
         
 fetch(url)
 .then(res => res.json())
 .then(json => setProducts(json))
            
  },[])

  return products
   
  
}

export default Usefetch