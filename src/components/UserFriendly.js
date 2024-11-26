import React from 'react';

const UserFriendly = () => {
  return (
    <div className="bg-gray-50 text-gray-900 py-40 px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold mb-6">User-Friendly Interface</h1>
        <p className="text-lg leading-relaxed mb-6">
          Our VPN system is designed with an intuitive interface for ease of use. Cisco Packet Tracer enables users to design secure networks without complex commands, using GUI tools for setup and monitoring.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-lg space-y-2 mb-6">
          <li>Drag-and-Drop Setup: Add routers, switches, and devices with a simple drag-and-drop interface.</li>
          <li>Simplified VPN Configuration: GUI wizards guide users through IPSEC VPN setups.</li>
          <li>Real-Time Monitoring: View encrypted traffic flows with visual indicators.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <p className="text-lg leading-relaxed">
          In Cisco Packet Tracer, configure VPN using step-by-step wizards. Use the interface to apply encryption settings, monitor packet transmission, and troubleshoot.
        </p>
      </div>
    </div>
  );
};

export default UserFriendly;
