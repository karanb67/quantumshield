import React from 'react';
import { motion } from 'framer-motion';

// Paths to your Word files
import file1 from '../assets/files/Team24_Project Deliverable1.docx';
import file2 from '../assets/files/Team24_Project Deliverable2.docx';
import file3 from '../assets/files/Team24_Project Deliverable3.docx';
import file4 from '../assets/files/Team24_Project Deliverable4.docx';
import file5 from '../assets/files/Team24_Project Deliverable5.docx';
import file6 from '../assets/files/Team24_Project Deliverable6.docx';
import file7 from '../assets/files/Team24_Project Deliverable7.docx';
import file8 from '../assets/files/Team24_Project Deliverable8.docx';
import file9 from '../assets/files/Team24_Project Deliverable9.docx';
import file10 from '../assets/files/Team24_Project Deliverable10.docx';
import fileMain from '../assets/files/Team24_Project Deliverable10.docx';

const blogPosts = [
  {
    title: 'Team24 Project Report',
    date: 'December 2, 2024',
    description: 'Download the detailed Project report of Team24.',
    file: fileMain,
  },
  {
    title: 'Team24 Project Deliverable 1',
    date: 'December 2, 2024',
    description: 'Download the detailed deliverable of Team24 project',
    file: file1,
  },
  {
    title: 'Team24 Project Deliverable 2',
    date: 'December 5, 2024',
    description: 'Download the detailed deliverable of Team24 project',
    file: file2,
  },
  {
    title: 'Team24 Project Deliverable 3',
    date: 'December 5, 2024',
    description: 'Download the detailed deliverable of Team24 project',
    file: file3,
  },
  {
    title: 'Team24 Project Deliverable 4',
    date: 'December 5, 2024',
    description: 'Download the detailed deliverable of Team24 project',
    file: file4,
  },
  {
    title: 'Team24 Project Deliverable 5',
    date: 'December 5, 2024',
    description: 'Download the detailed deliverable of Team24 project',
    file: file5,
  },
  {
    title: 'Team24 Project Deliverable 6',
    date: 'December 5, 2024',
    description: 'Download the detailed deliverable of Team24 project',
    file: file6,
  },
  {
    title: 'Team24 Project Deliverable 7',
    date: 'December 5, 2024',
    description: 'Download the detailed deliverable of Team24 project',
    file: file7,
  },
  {
    title: 'Team24 Project Deliverable 8',
    date: 'December 5, 2024',
    description: 'Download the detailed deliverable of Team24 project',
    file: file8,
  },
  {
    title: 'Team24 Project Deliverable 9',
    date: 'December 5, 2024',
    description: 'Download the detailed deliverable of Team24 project',
    file: file9,
  },
  {
    title: 'Team24 Project Deliverable 10',
    date: 'December 5, 2024',
    description: 'Download the detailed deliverable of Team24 project',
    file: file10,
  },
];

const Blog = () => {
  return (
    <div className="bg-gray-100 py-16 px-8 text-gray-900">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 mt-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Quantum Shield Blog
      </motion.h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
            className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <p className="text-base text-gray-700 mb-4">{post.description}</p>
            <div className="flex space-x-4">
              <a
                href={post.file}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
              >
                View File
              </a>
              <a
                href={post.file}
                download
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
              >
                Download File
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
