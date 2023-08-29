import React, { useEffect, useState } from 'react'

const Game = () => {
  // let [boxs,setbox]=useState([-1,-1,-1,-1,-1,-1,-1,-1,-1]);
  let [boxs,setbox]=useState([-1,-1,-1,-1,-1,-1,-1,-1,-1]);
  let [turn,setturn]=useState(false);
  let [started,setstarted]=useState(false)
  function Clicked(i){
    let a=[...boxs];
   if(turn){
     a[i]=1;
   }
   else{
    a[i]=0;
   }
    setturn(!turn);
    setbox(a);
  }
  useEffect(()=>{
    let box=boxs;
    let i=[0,3,6];
    i.forEach(i => {
      console.log(`${boxs[1]} ${boxs[2]} ${boxs[i+2]}\n`)
      if(boxs[1]===boxs[2]===boxs[3]){
        console.log("boxes");
      }
    });
    console.log("boxes");
  },[boxs])

  return (
    <div className='h-[100vh] flex items-center justify-center'>
    <div>
    <h1 className='text-center text-yellow-200 font-semibold text-3xl my-4'>Game</h1>
    <div className='w-40 h-12 my-6 mx-auto bg-green-400 p-2 rounded-xl flex relative'><div className={`w-24 h-12  bg-black absolute left-0 transition-all bottom-0 duration-300  ${(turn)?(`left-0`):(`left-20`)}`}></div><div className='flex flex-col w-fit h-fit mt-2'><div className='h-2 w-12 bg-white my-1 rounded-full absolute rotate-45'></div><div className='h-2 w-12 bg-white my-1 rounded-full relative rotate-[-45deg]'></div></div>
    <div className='w-8 h-10 rounded-full border-solid border-white border-8 ml-auto relative bottom-1 mr-1'></div>
    </div>
    <div className='grid grid-cols-3 grid-rows-3 w-96 h-96 gap-1 max-sm:w-80 max-sm:h-80'>
    {boxs.map((data,index)=>{
     return <div className={`bg-cyan-500 border-2 border-solid rounded-md flex items-center justify-center hover:bg-cyan-950 hover:border-amber-400  `} disabled={started} key={"A"+index} onClick={()=>{
      let i=index;
      Clicked(i);
      console.log(index);
     }}>
     {(data===0)?(<div className='flex flex-col w-fit h-fit'><div className='h-2 w-12 bg-white my-1 rounded-full absolute rotate-45'></div><div className='h-2 w-12 bg-white my-1 rounded-full relative rotate-[-45deg]'></div></div>):((data!==-1)&&<div>
      <div className='w-10 h-12 rounded-full border-solid border-white border-8'></div>
     </div>)}
     
     </div>;
    })}
    </div>
    <div className='flex items-center justify-center'>
    <button className='bg-slate-500 py-2 px-5 my-2 rounded-xl text-xl font-semibold text-white'>Start</button>
    </div>
    </div>


    </div>
  )
}

export default Game;