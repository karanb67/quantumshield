import React from 'react';

const AdvancedEncryption = () => {
  return (
    <div className="bg-gray-50 text-gray-900 py-40 px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold mb-6">Advanced Encryption</h1>
        <p className="text-lg leading-relaxed mb-6">
          Advanced encryption ensures that all data transmitted over the VPN is encoded, preventing unauthorized access. Cisco Packet Tracer's simulated environment allows you to configure encryption protocols such as AES (Advanced Encryption Standard) to protect sensitive data from interception.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-lg space-y-2 mb-6">
          <li>AES Encryption: Reliable 256-bit encryption for high security.</li>
          <li>IPSec Implementation: Protocol for secure communication.</li>
          <li>Data Integrity: Verifies the data has not been altered.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <p className="text-lg leading-relaxed">
          In Cisco Packet Tracer, secure data packets using an encryption key shared between VPN endpoints. Configure the encryption algorithm in the router settings for secure communication.
        </p>
      </div>
    </div>
  );
};

export default AdvancedEncryption;
