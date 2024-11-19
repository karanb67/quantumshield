import React from 'react';
import { motion } from 'framer-motion';
import connectionGif from '../assets/network-security.png';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-black py-32 md:py-40 px-4 md:px-8 relative overflow-hidden">
      {/* Background circles for visual interest */}
      <div className="absolute top-10 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-blue-100 rounded-full mix-blend-multiply opacity-30 animate-blob filter blur-xl"></div>
      <div className="absolute top-32 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-pink-100 rounded-full mix-blend-multiply opacity-30 animate-blob filter blur-xl"></div>
      <div className="absolute top-64 left-1/2 w-48 h-48 md:w-72 md:h-72 bg-purple-100 rounded-full mix-blend-multiply opacity-30 animate-blob filter blur-xl"></div>

      <div className="container mx-auto flex flex-col items-center">
        {/* Animated Welcome Message */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-center text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Quantum Shield
        </motion.h1>
        <motion.h6
          className="text-xl md:text-2xl font-medium mb-4 md:mb-6 text-center text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Innovate, Secure, Thrive
        </motion.h6>
        <motion.p
          className="text-base md:text-lg mb-6 md:mb-10 max-w-lg md:max-w-2xl text-center text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Empowering secure wireless communication through VPN technology. We provide seamless, encrypted solutions for secure connectivity across networks, ensuring your data remains safe and private.
        </motion.p>
        {/* Animated Image */}
        <motion.img
          src={connectionGif}
          alt="VPN Animation"
          className="w-full max-w-md md:max-w-3xl rounded-lg shadow-xl mb-8 md:mb-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
        {/* Feature Boxes */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-center mb-10 md:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}
            className="bg-gray-50 text-gray-900 p-6 md:p-8 rounded-lg shadow-md transition-transform duration-300"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4">Advanced Encryption</h3>
            <p className="text-base md:text-lg">
              Our VPN technology uses cutting-edge encryption to protect your data from unauthorized access.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}
            className="bg-gray-50 text-gray-900 p-6 md:p-8 rounded-lg shadow-md transition-transform duration-300"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4">Reliable Network Speeds</h3>
            <p className="text-base md:text-lg">
              Enjoy high-speed connectivity without compromising security, ensuring a seamless experience.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}
            className="bg-gray-50 text-gray-900 p-6 md:p-8 rounded-lg shadow-md transition-transform duration-300"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4">User-Friendly Interface</h3>
            <p className="text-base md:text-lg">
              Our intuitive interface makes it easy for anyone to set up and use our secure VPN services.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
