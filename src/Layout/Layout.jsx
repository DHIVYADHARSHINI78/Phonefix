import React from 'react';
import Navbar from '../Pages/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer.jsx';

const Layout = () => {
  return (
    <>
      <Navbar />
   
      <Outlet /> {/* This renders the page content like Home, About, etc. */}
         <Footer/>
    </>
  );
};

export default Layout;
