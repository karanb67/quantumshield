import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    title: 'Secure Wireless Communication',
    description:
      'A project focused on creating a secure wireless communication system using VPN technology to ensure data integrity and privacy.',
    image: require('../assets/project1.png'),
    link: '/projects/secure-wireless-communication',
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white text-black py-32 px-8">
      <div className="container mx-auto">
        <motion.h1
          className="text-5xl font-bold mb-10 text-center text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Projects
        </motion.h1>

        {/* Project Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer border border-gray-200"
              onClick={() => navigate(project.link)}
            >
              {/* Project Image */}
              <div className="rounded-lg overflow-hidden mb-4 border-4 border-gray-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>

              {/* Project Title and Description */}
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
                {project.title}
              </h3>
              <p className="text-base md:text-lg text-gray-600">
                {project.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
