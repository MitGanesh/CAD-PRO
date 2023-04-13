import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { CgFramer } from "react-icons/cg";
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();
  const [menuScreen, setMenuScreen] = useState(false);

  const toggleMenuScreen = () => {
    setMenuScreen(prev => !prev);
  };

  return (
    <header className='shadow-lg'>
      <nav className='container flex justify-between items-center w-[92%] mx-auto py-5'>
        <div className='z-20'>
          <Link href="/" className='flex cursor-pointer gap-1 items-center text-teal-700'>
            <CgFramer className='text-4xl' />
            <span className='text-2xl font-serif'>
              SGCC
            </span>
          </Link>
        </div>
        <div className={`absolute duration-1000 md:static bg-white min-h-[30vh] md:min-h-fit w-full md:w-auto ${menuScreen ? 'top-[10%] shadow-lg' : 'top-[-100%]'} left-0 flex items-center px-4 z-10`}>
          <ul className='flex flex-col md:flex-row md:items-center gap-[8vw] md:gap-[6vw]'>
            <li>
              <Link className={`${router.pathname === '/' ? 'text-teal-700 underline underline-offset-[3.5vh]' : 'text-black'} font-light hover:text-teal-700 cursor-pointer`} href="/" onClick={() => setMenuScreen(false)}>Home</Link>
            </li>
            <li>
              <Link className={`${router.pathname === '/about-us' ? 'text-teal-700 underline underline-offset-[3.5vh]' : 'text-black'} font-light hover:text-teal-700 cursor-pointer`} href="/about-us" onClick={() => setMenuScreen(false)}>About Us</Link>
            </li>
            <li>
              <Link className={`${router.pathname === '/contact-us' ? 'text-teal-700 underline underline-offset-[3.5vh]' : 'text-black'} font-light hover:text-teal-700 cursor-pointer`} href="/contact-us" onClick={() => setMenuScreen(false)}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className='flex items-center gap-6 z-20'>
          {/* <button className='bg-teal-400 text-white px-5 py-2 rounded-full hover:bg-teal-600 cursor-pointer'>Sign In</button> */}
          <HiOutlineMenu onClick={toggleMenuScreen} className={`text-3xl cursor-pointer ${menuScreen ? 'hidden' : ''} md:hidden`} />
          <HiOutlineX onClick={toggleMenuScreen} className={`text-3xl cursor-pointer ${menuScreen ? '' : 'hidden'} md:hidden`} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar;