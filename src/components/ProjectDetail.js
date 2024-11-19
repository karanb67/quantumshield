import React from 'react';
import { motion } from 'framer-motion';

const ProjectDetail = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-black py-32 px-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply opacity-30 animate-blob filter blur-xl"></div>
      <div className="absolute top-32 right-1/4 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply opacity-30 animate-blob filter blur-xl"></div>
      
      <div className="container mx-auto">
        <motion.h1
          className="text-5xl font-bold mb-10 text-center text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Project: Secure Wireless Communication
        </motion.h1>
        <motion.p
          className="text-lg max-w-4xl mx-auto mb-16 text-center text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          This project focuses on creating a secure wireless communication system using VPN technology. The main goal is to ensure data integrity and privacy through advanced encryption and secure protocols.
        </motion.p>

        {/* Placeholder for Project Content */}
        <motion.div
          className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <img
            src={require('../assets/project1.png')}
            alt="Secure Wireless Communication"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Overview</h2>
          <p className="text-lg text-gray-600 mb-4">
            The project aims to create a reliable and secure wireless communication system that connects remote offices via a VPN, providing data integrity, encryption, and privacy.
          </p>
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Key Features</h2>
          <ul className="list-disc list-inside text-lg text-gray-600 mb-4">
            <li>Advanced Encryption for Data Security</li>
            <li>Reliable Network Speeds for Seamless Communication</li>
            <li>User-Friendly Setup and Management Interface</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
