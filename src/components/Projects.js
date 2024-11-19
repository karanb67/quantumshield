import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    title: 'Secure Wireless Communication',
    description: 'A project focused on creating a secure wireless communication system using VPN technology to ensure data integrity and privacy.',
    image: require('../assets/project1.png'),
    link: '/projects/secure-wireless-communication',
  },
  // Add more projects as needed
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-black py-32 px-8 relative overflow-hidden">
      {/* Background Circles for Decoration */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply opacity-30 animate-blob filter blur-xl"></div>
      <div className="absolute top-32 right-1/4 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply opacity-30 animate-blob filter blur-xl"></div>
      <div className="absolute top-64 left-1/2 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply opacity-30 animate-blob filter blur-xl"></div>

      <div className="container mx-auto flex flex-col items-center">
        {/* Page Heading */}
        <motion.h1
          className="text-5xl font-bold mb-10 text-center text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Projects
        </motion.h1>
        {/* Subheading Paragraph */}
        <motion.p
          className="text-lg mb-16 max-w-2xl text-center text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Explore our innovative projects designed to provide advanced and secure communication solutions.
        </motion.p>
        {/* Project Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.2)' }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              onClick={() => navigate(project.link)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-3xl font-semibold mb-4 text-gray-900">{project.title}</h3>
              <p className="text-lg text-gray-600">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
