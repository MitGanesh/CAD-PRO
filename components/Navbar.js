import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CgFramer } from "react-icons/cg";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  // const router = useRouter();
  const [menuScreen, setMenuScreen] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const toggleMenuScreen = () => setMenuScreen(prev => !prev);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('white');
        setTextColor('black');
      } else {
        setColor('transparent');
        setTextColor('white');
      }
    }
    window.addEventListener('scroll', changeColor);
  }, [])


  return (
    <div className={`bg-${color} fixed top-0 left-0 w-full z-10 ease-in duration-300`}>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-5 text-white'>
        <Link href="/">
          <h1 className={`font-bold text-4xl text-${textColor} cursor-pointer`}>CAD's</h1>
        </Link>
        <ul className={`hidden sm:flex text-${textColor}`}>
          <li>
            <Link className='p-4' href="/">Home</Link>
          </li>
          <li>
            <Link className='p-4' href="/#gallery">Gallery</Link>
          </li>
          <li>
            <Link className='p-4' href="/about">About Us</Link>
          </li>
          <li>
            <Link className='p-4' href="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className='block sm:hidden z-10' onClick={toggleMenuScreen}>
          {menuScreen ? <HiOutlineX size={30} className={`text-${textColor}`} /> : <HiOutlineMenu size={30} className={`text-${textColor}`} />}
        </div>

        {/* Mobile Menu */}
        <div className={`sm:hidden absolute top-0 right-0 bottom-0 w-full h-screen ${menuScreen ? 'left-0' : 'left-[-100%]'} flex justify-center items-center bg-black text-center ease-in duration-300`}>
          <ul>
            <li className='p-4 text-2xl hover:text-gray-500'>
              <Link href="/">Home</Link>
            </li>
            <li className='p-4 text-2xl hover:text-gray-500'>
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li className='p-4 text-2xl hover:text-gray-500'>
              <Link href="/about">About</Link>
            </li>
            <li className='p-4 text-2xl hover:text-gray-500'>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;