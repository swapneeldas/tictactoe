import React from 'react'

const Gameresult = ({gameresult}) => {

  return (
    <>
    {(gameresult===0)?
    <div className='text-white text-3xl text-center'></div>:
    (gameresult===1)?
    <div className='text-white w-fit mx-auto'><div className='flex'><div className='flex flex-col w-fit h-fit'><div className='h-2 w-12 bg-white my-1 rounded-full absolute rotate-45'></div><div className='h-2 w-12 bg-white my-1 rounded-full relative rotate-[-45deg]'></div></div> 
    <div className='relative bottom-1 text-yellow-300 text-2xl font-bold'>&nbsp; WON</div></div></div>:
    (gameresult===2)?
    <div className='text-white text-3xl w-fit mx-auto'><div className='flex'><div className='w-10 h-12 rounded-full border-solid border-white border-8 justify-center items-center'></div> 
    <div className='relative top-2 text-yellow-300 text-3x font-bold'>&nbsp; WON</div></div></div>:
    <div className='text-yellow-200 text-3xl text-center font-bold'>Draw</div>
    }
    </>
  )
}

export default Gameresult;