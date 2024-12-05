import React from 'react';
import { Code, Globe, Shield } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      icon: <Code className="h-6 w-6 text-blue-500" />,
    },
    {
      title: 'Global Solutions',
      description: 'Reach customers worldwide with our international business solutions.',
      icon: <Globe className="h-6 w-6 text-blue-500" />,
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security for all your digital assets.',
      icon: <Shield className="h-6 w-6 text-blue-500" />,
    },
  ];

  return (
    <div id="services" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-500">Everything you need to grow your business</p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              {service.icon}
              <h3 className="mt-4 text-lg font-medium text-gray-900">{service.title}</h3>
              <p className="mt-2 text-base text-gray-500 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}