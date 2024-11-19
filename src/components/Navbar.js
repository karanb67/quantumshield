import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger and Close Icons
import logo from '../assets/quantumshield-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white w-full fixed top-0 left-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-6 px-6 md:px-12">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="QuantumShield Logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold text-black">Quantum Shield</h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-base list-none absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-6 md:p-0 md:items-center`}
        >
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 text-gray-800 cursor-pointer transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 text-gray-800 cursor-pointer transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 text-gray-800 cursor-pointer transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 text-gray-800 cursor-pointer transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
