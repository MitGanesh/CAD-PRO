import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { CgFramer } from "react-icons/cg";
import Link from 'next/link';

const Navbar = () => {
  const [menuScreen, setMenuScreen] = useState(false);

  const toggleMenuScreen = () => {
    setMenuScreen(prev => !prev);
  };

  return (
    <header className='shadow-lg'>
      <nav className='container flex justify-between items-center w-[92%] mx-auto py-5'>
        <div className='z-20'>
          <Link href="/" className='flex cursor-pointer gap-1 items-center'>
            <CgFramer className='text-4xl' />
            SGCC
          </Link>
        </div>
        <div className={`absolute duration-500 md:static bg-white min-h-[30vh] md:min-h-fit w-full md:w-auto ${menuScreen ? 'top-[10%] shadow-lg' : 'top-[-100%]'} left-0 flex items-center px-4 z-10`}>
          <ul className='flex flex-col md:flex-row md:items-center gap-[8vw] md:gap-[6vw]'>
            <li>
              <Link className='hover:text-gray-500 cursor-pointer' href="/">Home</Link>
            </li>
            <li>
              <Link className='hover:text-gray-500 cursor-pointer' href="#">About Us</Link>
            </li>
            <li>
              <Link className='hover:text-gray-500 cursor-pointer' href="#">Contact</Link>
            </li>
          </ul>
        </div>
        <div className='flex items-center gap-6 z-20'>
          <button className='bg-teal-400 text-white px-5 py-2 rounded-full hover:bg-teal-600 cursor-pointer'>Sign In</button>
          <HiOutlineMenu onClick={toggleMenuScreen} className={`text-3xl cursor-pointer ${menuScreen ? 'hidden' : ''} md:hidden`} />
          <HiOutlineX onClick={toggleMenuScreen} className={`text-3xl cursor-pointer ${menuScreen ? '' : 'hidden'} md:hidden`} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar;