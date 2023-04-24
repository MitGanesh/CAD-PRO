import React from 'react';
import Link from 'next/link';
// import { CgChevronDown } from 'react-icons/cg';

const Landing = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='text-white p-5 z-[2] text-center'>
        <h2 className='text-4xl font-extralight py-5'>PLANNING - INTERIOR DESIGN - CONSERVATION - ARTS PLUS</h2>
        <button className='px-8 py-2 border'>Know More</button>
      </div>
    </div>
  )
}

export default Landing;