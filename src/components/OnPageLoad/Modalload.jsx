import React from 'react'
import { ImCross } from "react-icons/im";

const Modalload = ({ isopen,setisOpen}) => {
  return (
    <div className='fixed left-0 top-0 h-full w-full flex justify-center items-center backdrop-blur-md'>
        <div className='m-3 p-3 border-solid border-white border-3'>
           <ImCross onClick={()=>{setisOpen(false)}} fill='red'/> 
           <p className='m-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vitae impedit voluptatibus quis distinctio, culpa accusamus praesentium consectetur,
             hic atque voluptas illo sequi ea, soluta consequatur pariatur aliquid eum dolore necessitatibus harum laudantium eveniet molestiae? 
             Blanditiis veritatis repudiandae minus cum aliquam voluptates non dicta, adipisci unde dolores, suscipit ullam quos.</p>
         <button className='bg-green-500 p-3 m-2'>Agree</button>
        </div>
    </div>
  )
}

export default Modalload