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
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-black py-32 px-8 relative overflow-hidden">
      {/* Background Circles for Decoration */}
      <div className="absolute top-10 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-blue-100 rounded-full mix-blend-multiply opacity-30 animate-blob filter blur-xl"></div>
      <div className="absolute top-32 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-pink-100 rounded-full mix-blend-multiply opacity-30 animate-blob filter blur-xl"></div>
      <div className="absolute top-64 left-1/2 w-48 h-48 md:w-72 md:h-72 bg-purple-100 rounded-full mix-blend-multiply opacity-30 animate-blob filter blur-xl"></div>

      <div className="container mx-auto flex flex-col items-center">
        {/* Page Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Projects
        </motion.h1>
        {/* Section Divider */}
        <motion.div
          className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mb-16"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        ></motion.div>
        {/* Subheading Paragraph */}
        <motion.p
          className="text-base md:text-lg mb-16 max-w-xl text-center text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Explore our innovative projects designed to provide advanced and secure communication solutions.
        </motion.p>
        {/* Project Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.2)' }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-transform duration-300 cursor-pointer border border-gray-200"
              onClick={() => navigate(project.link)}
            >
              <div className="rounded-lg overflow-hidden mb-4 border-4 border-gray-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">{project.title}</h3>
              <p className="text-base md:text-lg text-gray-600">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* Call to Action */}
        <motion.div
          className="mt-24 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 px-12 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/contact')}
        >
          <h3 className="text-2xl font-bold">Ready to Work with Us?</h3>
          <p className="text-lg mt-2">Get in touch and let us know how we can help you achieve secure communication solutions.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
