import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Shree Ganesh CAD Center</title>
        <meta name="viewport" content="minimum-scale=1,initial-scale=1,width=device-width" />
        <meta name="description" content="Become a part of our big family to inspire and get inspired by professional experts. BinaryTouch Technologies specializes in software development and services." />
        <meta name="keywords" content="binarytouch.com,binary touch solutions,binary touch website development services company,binary touch website design and development services,binary touch technologies,binary touch information technology services company,binarytouch software company,binarytouch technologies llp"></meta>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;