import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/quantumshield-logo.png';

const Navbar = () => {
  return (
    <header className="bg-white w-full fixed top-0 left-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-6 px-6">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="QuantumShield Logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold text-black">Quantum Shield</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-base list-none">
          <li>
            <Link to="/" className="hover:text-blue-600 text-gray-800 cursor-pointer transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-blue-600 text-gray-800 cursor-pointer transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-600 text-gray-800 cursor-pointer transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600 text-gray-800 cursor-pointer transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
