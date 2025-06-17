import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-violet-300 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Tagline */}
        <div>
          <div className="flex items-center mb-2">
            <img src={logo} alt="Logo" className="h-12 w-auto mr-2" />
            <span className="text-xl font-bold">LetsFixIt</span>
          </div>
          <p>Repair your gadgets from the comfort of your home.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <NavLink to="/" className="hover:underline">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:underline">About</NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:underline">Services</NavLink>
            </li>

            <li>
              <NavLink to="/products" className="hover:underline">Products</NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <FiMail />
              <a href="mailto:dhivyak463@gmail.com" className="hover:underline">
                dhivyak463@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone />
              <a href="tel:+917867077402" className="hover:underline">
                +91 7867077402
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin />
              Namakkal, Tamil Nadu
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="bg-violet-400 text-center py-3 text-sm">
        © {new Date().getFullYear()} Dhivya. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
