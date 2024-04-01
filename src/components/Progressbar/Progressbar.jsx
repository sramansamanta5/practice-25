import React from 'react'

const Progressbar = () => {
  return (
    <div id='container' className='h-4 w-full bg-black fixed top-0 left-0 right-0'>
        <div id='progress' className='h-4 w-1/4 bg-orange-600 fixed top-0 left-0 right-0'></div>
    </div>
  )
}

export default Progressbar