import React,{useEffect, useState} from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

const carousel = ({slides}) => {
  return (
    <div className="overflow-hidden relative">
      <div className='flex flex-1 items-center'>
        {slides.map((slide)=>(
          <img src={slide} alt="img" />
        ))}

        <div className="absolute w-full flex flex-1 justify-between p-4">

          <button className='p-1 rounded-full shadow bg-slate-300 text-gray-800 hover:bg-white'>
          <ChevronLeft size={40}/>
          </button>

          <button className='p-1 rounded-full shadow bg-slate-300 text-gray-800 hover:bg-white'>
            <ChevronRight size={40}/>
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default carousel