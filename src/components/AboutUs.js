import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

// Team Members Data
const teamMembers = [
  { name: 'Karan', role: 'Project Lead', image: require('../assets/karan.jpg'), linkedin: 'https://www.linkedin.com/in/karan69/' },
  { name: 'Ishan Patel', role: 'Network Security and Compliance Specialist', image: require('../assets/ishan.jpg'), linkedin: 'https://www.linkedin.com/in/ishan-patel-337128174/' },
  { name: 'Ishmita Reehal', role: 'Network and Infrastructure Engineer', image: require('../assets/ishmita.jpg'), linkedin: 'https://www.linkedin.com/in/ishmitareehal/' },
  { name: 'Muddassir Ahmed', role: 'Network and Infrastructure Engineer', image: require('../assets/muddassir.jpg'), linkedin: 'https://www.linkedin.com/in/mahmednadeem/' },
  { name: 'Charmi Balar', role: 'R&D Specialist', image: require('../assets/charmi.jpg'), linkedin: 'https://www.linkedin.com/in/charmi-balar-3338651bb/' },
  { name: 'Kreny Patel', role: 'Compliance Specialist', image: require('../assets/kreny.jpg'), linkedin: 'https://www.linkedin.com/in/krenypatel29/' },
  { name: 'Dhruviben Patel', role: 'Documentation & QA', image: require('../assets/dhruvi.jpg'), linkedin: 'https://www.linkedin.com/in/dhruviben-patel-429a39327/' },
  { name: 'Anshika Joshi', role: 'Documentation & QA Lead', image: require('../assets/anshika.jpg'), linkedin: 'https://www.linkedin.com/in/anshika-joshi-416309229/' },
];

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-16 px-8 text-gray-900">
      <motion.div
        className="mt-16 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
          About QuantumShield
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 font-light">
          At <span className="font-bold text-gray-900">QuantumShield</span>, we are committed to delivering cutting-edge wireless communication solutions using VPN technology. With advanced encryption, user-friendly designs, and reliable network speeds, we cater to businesses, privacy-conscious individuals, and tech enthusiasts alike.
        </p>
        <h3 className="text-3xl font-bold text-gray-800 mt-8 mb-4">
          Innovation and Security: Our Core Values
        </h3>
        <p className="text-lg leading-relaxed text-gray-600 font-medium">
          We aim to showcase the benefits of secure communication solutions by merging innovation with robust security. Our solutions ensure that your data and communication remain protected and efficient.
        </p>
        <h3 className="text-3xl font-bold text-gray-800 mt-8 mb-4">
          Our Story
        </h3>
        <p className="text-lg leading-relaxed text-gray-600 font-medium">
          Founded on a shared passion for cybersecurity, QuantumShield was born to provide reliable VPN services in a world where remote work has become essential. Our journey started with a simple mission: secure data and enable efficient communication across networks.
        </p>
      </motion.div>

      {/* Meet the Team Section */}
      <motion.h2
        className="text-4xl font-bold text-center mt-16 mb-12 text-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        Meet the QuantumShield Team
      </motion.h2>
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-center">{member.name}</h3>
            <p className="text-base text-gray-600 text-center mt-2">{member.role}</p>
            <div className="text-center mt-4">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-700 hover:text-green-800 transition"
              >
                <FaLinkedin className="mr-2" />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutUs;
