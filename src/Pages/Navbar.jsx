
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { FiMenu, FiX } from 'react-icons/fi'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 bg-violet-300 shadow-md text-white z-50">
      <div className="flex items-center justify-between p-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto mr-2" />
          <span className="text-2xl font-bold text-white">LetsFixIt</span>
         <p className="text-sm text-white ml-14">Lets Fix Your Gadgets</p>
        </div>
        

        {/*  Icon for (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex gap-6 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "text-white hover:text-black"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "text-white hover:text-black"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "text-white hover:text-black"
            }
          >
            Services
          </NavLink>

           <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "text-white hover:text-black"
            }
          >
           Products
          </NavLink>


        </div>
      </div>

      {/* Nav Links (Mobile View) */}
      {menuOpen && (
        <div className="flex flex-col items-center md:hidden bg-violet-200 py-4 gap-4 text-lg">
          <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
          <NavLink to="/services" onClick={toggleMenu}>Services</NavLink>
          <NavLink to="/products" onClick={toggleMenu}>Products</NavLink>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
