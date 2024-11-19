import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  { name: 'Karan', role: 'Project Lead', image: require('../assets/karan.jpg'), linkedin: 'https://www.linkedin.com/in/karan69/' },
  { name: 'Ishan Patel', role: 'Network Security and Compliance Specialist', image: require('../assets/ishan.jpg'), linkedin: 'https://www.linkedin.com/in/ishan-patel-337128174/' },
  { name: 'Ishmita Reehal', role: 'Network and Infrastructure Engineer', image: require('../assets/ishmita.jpg'), linkedin: 'https://www.linkedin.com/in/ishmitareehal/' },
  { name: 'Muddassir Ahmed', role: 'Network and Infrastructure Engineer', image: require('../assets/muddassir.jpg'), linkedin: 'https://www.linkedin.com/in/mahmednadeem/' },
  { name: 'Charmi Balar', role: 'R&D Specialist', image: require('../assets/charmi.jpg'), linkedin: 'https://www.linkedin.com/in/charmi-balar-3338651bb/' },
  { name: 'Kreny Patel', role: 'Compliance Specialist', image: require('../assets/kreny.jpg'), linkedin: 'https://www.linkedin.com/in/krenypatel29/' },
  { name: 'Dhruviben Patel', role: 'Documentation & QA', image: require('../assets/dhruvi.jpg'), linkedin: 'https://www.linkedin.com/in/dhruviben-patel-429a39327/' },
  { name: 'Anshika Joshi', role: 'Documentation & QA Lead', image: require('../assets/anshika.jpg'), linkedin: 'https://www.linkedin.com/in/anshika-joshi-416309229/' }
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About QuantumShield</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          At QuantumShield, we are dedicated to providing cutting-edge wireless communication solutions using VPN technology. Our focus is on delivering advanced encryption, user-friendly interfaces, and reliable network speeds to businesses, privacy-conscious individuals, and tech enthusiasts.
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Commitment to Innovation and Security</h3>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          With a passion for innovation, we aim to showcase our project by highlighting the benefits of our secure communication solutions. Our commitment lies in ensuring your data and communication remain protected and efficient.
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Story</h3>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Founded on a shared passion for cybersecurity and wireless communication, our company was created to provide businesses with reliable and secure VPN services. From the very beginning, we saw the increasing need for safe and efficient remote access solutions in a world where more and more employees work from various locations. Our journey started with the goal of designing and implementing VPN systems that meet the highest standards of security and performance.
        </p>
      </motion.div>

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
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}
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
