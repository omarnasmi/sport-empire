import React from 'react'

function Welcome() {
  return (
    <div className='flex-auto'>
      <div className='flex'>
        <div className='justify-center'>
          <div className='absolute'>
            <h1 className=" text-3xl text-white font-bold absolute text-nowrap ">Build your Empire</h1>
          </div>
          <div className='relative'>
            <img width={"70%"} className='' src="\src\assets\gym-guy-back.png" alt="" />
          </div>
        </div>

        <div>
          <p className='text-white text-4xl'>Boost your power</p>
          <h2 className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, culpa. Et velit perspiciatis ut quia dignissimos doloremque eligendi, dicta iusto!</h2>
        </div>
      </div>
    </div>

  )
}

export default Welcome