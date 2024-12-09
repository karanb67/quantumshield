import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import connectionGif from '../assets/network-security.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-blue-100 via-purple-50 to-pink-100 text-black py-32 md:py-40 px-4 md:px-8 relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute top-10 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-multiply opacity-40 animate-blob filter blur-2xl"></div>
      <div className="absolute top-32 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-pink-300 rounded-full mix-blend-multiply opacity-40 animate-blob filter blur-2xl"></div>

      <div className="container mx-auto flex flex-col items-center">
        {/* Welcome Section */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-4 text-center text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          Welcome to Quantum Shield
        </motion.h1>
        <motion.h6
          className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
        >
          <b>“Innovate. Secure. Thrive.”</b>
        </motion.h6>
        <motion.p
          className="text-base md:text-lg mb-6 max-w-lg text-center text-gray-600 leading-relaxed"
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
          className="w-full max-w-sm md:max-w-3xl rounded-lg shadow-2xl mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
        />

<motion.div
  className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-16"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  }}
>
  <motion.div
    whileHover={{ scale: 1.05 }}
    onClick={() => navigate('/advanced-encryption')}
    className="bg-gradient-to-r from-blue-400 to-blue-200 text-white p-6 rounded-lg shadow-lg cursor-pointer flex flex-col justify-center items-center h-48"
  >
    <h3 className="text-xl font-bold mb-2">Advanced Encryption</h3>
    <p className="text-sm">Learn about the encryption standards we use.</p>
  </motion.div>
  <motion.div
    whileHover={{ scale: 1.05 }}
    onClick={() => navigate('/user-friendly')}
    className="bg-gradient-to-r from-purple-400 to-purple-200 text-white p-6 rounded-lg shadow-lg cursor-pointer flex flex-col justify-center items-center h-48"
  >
    <h3 className="text-xl font-bold mb-2">User-Friendly Interface</h3>
    <p className="text-sm">See how our UI simplifies secure networking.</p>
  </motion.div>
  <motion.div
    whileHover={{ scale: 1.05 }}
    onClick={() => navigate('/secure-connection')}
    className="bg-gradient-to-r from-green-400 to-green-200 text-white p-6 rounded-lg shadow-lg cursor-pointer flex flex-col justify-center items-center h-48"
  >
    <h3 className="text-xl font-bold mb-2">Secure Connections</h3>
    <p className="text-sm">Explore how Quantum Shield ensures private and reliable communication.</p>
  </motion.div>
</motion.div>

        {/* Marketing Video */}
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">Marketing Video</h2>
          <div className="rounded-lg shadow-lg overflow-hidden">
          <iframe
           src="https://drive.google.com/file/d/1mkKvZBhQTKK8M6zI73B3c9I50e8zhdq_/preview"
           width="800"
           height="480"
           allow="autoplay"
          ></iframe>
          </div>
          <h2 className="text-3xl py-10 font-semibold mb-4 text-gray-900">Final Showcase Presentation
        </h2>
          <div className="rounded-lg shadow-lg overflow-hidden">
          <iframe
           src="https://drive.google.com/file/d/1WVwl8H4Pk4eOCu8XL43Pn6zjSo_HQHgq/view" //final showcase presentation
           width="800"
           height="480"
           allow="autoplay"
          ></iframe>
          </div>
        {/* Client Reviews Section */}
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 py-10">What Our Clients says About Us</h2>
        <motion.div
          className="flex justify-between items-center space-x-6 py-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
        >
          <blockquote className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <p className="text-gray-600 italic">"Quantum Shield has completely changed how we manage our remote team. The VPN is fast, secure, and user-friendly."</p>
            <cite className="mt-4 block font-semibold text-gray-800">- Sarah L., IT Manager</cite>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <p className="text-gray-600 italic">"We feel more secure knowing our data is protected. Quantum Shield makes it simple for everyone in our company."</p>
            <cite className="mt-4 block font-semibold text-gray-800">- John K., CEO</cite>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <p className="text-gray-600 italic">"The encryption features are phenomenal. I've never felt safer accessing my network remotely."</p>
            <cite className="mt-4 block font-semibold text-gray-800">- Emily R., Engineer</cite>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <p className="text-gray-600 italic">"Setting up Quantum Shield was seamless and easy. Highly recommended for growing businesses."</p>
            <cite className="mt-4 block font-semibold text-gray-800">- Michael P., CTO</cite>
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
