import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../index.css';

// Custom marker icon for Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Google Form's Form Response URL
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfWO34ist5xb2BNGMwJVBScTeT76nRCx15FnVroQNbuXb2b4A/formResponse';

    const formBody = new URLSearchParams();
    formBody.append('entry.628845030', formData.name); // Replace with your form field names
    formBody.append('entry.1282540953', formData.email);
    formBody.append('entry.172661482', formData.phone);
    formBody.append('entry.796077671', formData.message);

    fetch(formUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody.toString(),
    })
      .then(() => {
        alert('Thank you for your message. We will get back to you shortly!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error!', error.message);
      });
  };

  return (
    <div className="bg-gray-100 py-16 px-8 text-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12 mt-16">Contact Us</h2>
      <div className="container mx-auto flex flex-col lg:flex-row justify-around items-start space-y-12 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded shadow-md">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-lg font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4 text-center">Our Location</h3>
          <p className="text-lg mb-4 flex items-center text-center">
            <FaMapMarkerAlt className="mr-2" /> 4000 Victoria Park Ave, North York, ON M2H 3S7
          </p>
          <div className="w-full h-64 lg:h-80 rounded overflow-hidden shadow-md">
            <MapContainer
              center={[43.811744260944664, -79.34639168990499]} // Latitude and Longitude for "4000 Victoria Park Ave, North York, ON M2H 3S7"
              zoom={15}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[43.811744260944664, -79.34639168990499]}>
                <Popup>4000 Victoria Park Ave, North York, ON M2H 3S7</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
