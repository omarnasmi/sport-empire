import React from 'react'

function Welcome() {
  return (
    
<div className='flex-auto py-4 mb-10 bg-gradient-to-r from-black to-gray-800'>

  <div className='flex items-top'>
    <div className='rounded bg-gradient-to-r from-black to-gray-900  py-1 px-1 mr-4 '>
      <img className='' src="\src\assets\Build your empire.gif " alt="Build your empire" />
    </div>
    <div className='flex flex-col justify-top '>
      <p className='text-white text-4xl mb-2 archivo-black-regular'>BOOST YOUR POWER</p>
      <h2 className='text-white text-center text-lg px-4'>Join our platform to improve your physique</h2>
      <button className='bg-green-800 text-white py-1 px-1 rounded-md ml-10 h-10'><a href="">Discover</a></button>
    </div>
    
  </div>
</div>


  )
}

export default Welcome