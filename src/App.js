// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import NotFound from './components/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import Contact from './components/Contact';
import AdvancedEncryption from './components/AdvancedEncryption';
import UserFriendly from './components/UserFriendly';
import SecureConnections from './components/SecureConnections';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/advanced-encryption" element={<AdvancedEncryption />} />
          <Route path="/user-friendly" element={<UserFriendly />} />
           <Route path="/secure-connection" element={<SecureConnections />} />
        </Routes>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
