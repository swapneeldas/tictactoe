import React from 'react'

const Winline = ({winline}) => {
    switch (winline) {
        case 0: return (<div></div>);
        case 1:  return (
            <div className='w-full h-2 bg-cyan-300  absolute top-[49%] rounded-full transform scale-[0.98]'></div>
          );
        
        case 2: return(
            <div className='w-full h-2 bg-cyan-300  absolute top-1/2 rounded-full rotate-45 scale-[1.35]'></div>
        );
        case 3: return(
            <div className='w-full h-2 bg-cyan-300  absolute top-1/2 rounded-full rotate-[-45deg] scale-[1.35]'></div>
        )
        case 4:return (
            <div className='w-full h-2 bg-cyan-300  absolute top-[16%] rounded-full scale-[0.98]'/>
        )
        case 5:return(
            <div className='w-full h-2 bg-cyan-300  absolute bottom-[16%] rounded-full scale-[0.98]'/>
        )
        case 6:
            return(
                <div className='w-2 h-full bg-cyan-300  absolute right-[49%] top-0 rounded-full scale-[0.98]'/>
            )
        case 7:
            return(
                <div className='w-2 h-full bg-cyan-300  absolute right-[15%] top-0 rounded-full scale-[0.98]'/>
            )
        case 8:return(<div className='w-2 h-full bg-cyan-300  absolute left-[15%] top-0 rounded-full scale-[0.98]'/>
        )
        default:
            break;
    }

    


}

export default Winline