import React from 'react';
import { motion } from 'framer-motion';

const ProjectDetail = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-black py-32 px-8 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.h1
          className="text-5xl font-bold mb-10 text-center text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Secure Wireless Communication
        </motion.h1>
        <motion.div
          className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={require('../assets/project1.png')}
            alt="Secure Wireless Communication"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Overview</h2>
          <p className="text-lg text-gray-600 mb-4">
            This project focuses on creating a secure wireless communication system using VPN technology. Our goal is to
            ensure data integrity and privacy through advanced encryption and secure protocols.
          </p>
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Key Features</h2>
          <ul className="list-disc list-inside text-lg text-gray-600 mb-4">
            <li>Advanced Encryption for Data Security</li>
            <li>Reliable Network Speeds for Seamless Communication</li>
            <li>User-Friendly Setup and Management Interface</li>
          </ul>

          {/* Demo Video Section */}
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Demo Video</h2>
          <div className="rounded-lg shadow-lg overflow-hidden">
          <iframe
           src="https://drive.google.com/file/d/1cSzQisAD6vQqXE63if6zgpaO6BSG0qmr/preview"
           width="100%"
           height="480"
           allow="autoplay"
          ></iframe>
          </div>
        </motion.div>
        <br></br>
        
       
      </div>
    </div>
  );
};

export default ProjectDetail;
