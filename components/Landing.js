import Link from 'next/link';
import React from 'react';
import { CgChevronDown } from 'react-icons/cg';

const Landing = () => {
  return (
    <div className="w-[100vw] h-[91vh] bg-[url('https://images.pexels.com/photos/5584052/pexels-photo-5584052.jpeg')] bg-cover bg-center p-8 flex items-end">
      <div className="flex flex-col text-center w-full items-center">
        <h1 className="text-3xl font-light title-font mb-4 text-gray-900 tracking-widest">PLANNING - INTERIOR DESIGN - CONSERVATION - ARTS PLUS</h1>
        <Link href="#philosophy">
          <CgChevronDown className='text-2xl cursor-pointer' />
        </Link>
      </div>
    </div>
  )
}

export default Landing;