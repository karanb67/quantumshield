import React from 'react';
import { motion } from 'framer-motion';
import connectionGif from '../assets/network-security.png';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 text-black py-32 md:py-40 px-4 md:px-8 relative overflow-hidden">
      {/* Background circles for visual interest */}
      <div className="absolute top-10 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-blue-200 rounded-full mix-blend-multiply opacity-40 animate-blob filter blur-2xl"></div>
      <div className="absolute top-32 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-pink-200 rounded-full mix-blend-multiply opacity-40 animate-blob filter blur-2xl"></div>
      <div className="absolute top-64 left-1/2 w-48 h-48 md:w-72 md:h-72 bg-purple-200 rounded-full mix-blend-multiply opacity-40 animate-blob filter blur-2xl"></div>

      <div className="container mx-auto flex flex-col items-center">
        {/* Animated Welcome Message */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-4 md:mb-6 text-center text-gray-900 tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          Welcome to Quantum Shield
        </motion.h1>
        <motion.h6
          className="text-xl md:text-2xl font-medium mb-4 md:mb-6 text-center text-gray-700 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
        >
          Innovate, Secure, Thrive
        </motion.h6>
        <motion.p
          className="text-base md:text-lg mb-6 md:mb-10 max-w-lg md:max-w-2xl text-center text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
        >
          Empowering secure wireless communication through VPN technology. We provide seamless, encrypted solutions for secure connectivity across networks, ensuring your data remains safe and private.
        </motion.p>
        
        {/* Animated Image */}
        <motion.img
          src={connectionGif}
          alt="VPN Animation"
          className="w-full max-w-sm md:max-w-3xl rounded-lg shadow-2xl mb-8 md:mb-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.5, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: 'easeInOut' } }}
        />
        
        {/* Feature Boxes */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 text-center mb-16 md:mb-20"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 2 } },
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}
            className="bg-gradient-to-r from-blue-300 to-purple-200 text-gray-900 p-8 rounded-lg shadow-xl transition-transform duration-300 hover:bg-opacity-90 transform-gpu"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Advanced Encryption</h3>
            <p className="text-base md:text-lg">
              Our VPN technology uses cutting-edge encryption to protect your data from unauthorized access.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}
            className="bg-gradient-to-r from-blue-300 to-purple-200 text-gray-900 p-8 rounded-lg shadow-xl transition-transform duration-300 hover:bg-opacity-90 transform-gpu"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Reliable Network Speeds</h3>
            <p className="text-base md:text-lg">
              Enjoy high-speed connectivity without compromising security, ensuring a seamless experience.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}
            className="bg-gradient-to-r from-blue-300 to-purple-200 text-gray-900 p-8 rounded-lg shadow-xl transition-transform duration-300 hover:bg-opacity-90 transform-gpu"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">User-Friendly Interface</h3>
            <p className="text-base md:text-lg">
              Our intuitive interface makes it easy for anyone to set up and use our secure VPN services.
            </p>
          </motion.div>
        </motion.div>

        {/* How It Works Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">How It Works</h2>
          <p className="text-lg text-center text-gray-600">
            Quantum Shield provides you with a simple and secure way to keep your data protected.
            Connect to our secure servers, and enjoy private browsing with high-speed encryption 
            that prevents unauthorized access to your data. Whether you're on a public network or at home, 
            Quantum Shield has you covered.
          </p>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
          <div className="flex flex-col space-y-6">
            <blockquote className="text-center">
              <p className="text-lg text-gray-600 italic">"Quantum Shield has completely changed how we manage our remote team. The VPN is fast, secure, and user-friendly."</p>
              <cite className="mt-4 block text-gray-900 font-semibold">- Sarah L., IT Manager</cite>
            </blockquote>
            <blockquote className="text-center">
              <p className="text-lg text-gray-600 italic">"We feel more secure knowing our data is protected. Quantum Shield makes it simple for everyone in our company."</p>
              <cite className="mt-4 block text-gray-900 font-semibold">- John K., CEO</cite>
            </blockquote>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
