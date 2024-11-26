import React from 'react';

const SecureConnections = () => {
  return (
    <div className="bg-gray-50 text-gray-900 py-40 px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        
        <h1 className="text-4xl font-bold mb-6">Secure Connections</h1>
        <p className="text-lg leading-relaxed mb-6">
          Secure connections enable safe communication between devices over public or private networks. Using VPN technology in Cisco Packet Tracer, users can connect multiple remote sites securely.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-lg space-y-2 mb-6">
          <li>Site-to-Site VPN: Connect different branches securely using tunneling protocols.</li>
          <li>Remote Access VPN: Secure access for remote employees.</li>
          <li>Firewall Integration: Protects against unauthorized connections.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <p className="text-lg leading-relaxed">
          Set up VPN tunnels in Cisco Packet Tracer between routers. Enable authentication, configure static or dynamic IP routing, and monitor the secure data flow between endpoints.
        </p>
      </div>
    </div>
  );
};

export default SecureConnections;
