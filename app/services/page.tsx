'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiTruck, FiTool, FiPackage, FiHome, FiScissors, FiDollarSign, FiRefreshCw } from 'react-icons/fi';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform ${isHovered ? '-translate-y-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      icon: <FiTruck className="w-6 h-6" />,
      title: 'Fast & Reliable Delivery',
      description: 'Professional delivery service that brings your furniture to your door with care and precision.',
      features: [
        'Nationwide shipping',
        'Curbside or in-home delivery',
        'Real-time tracking',
        'White-glove service available'
      ]
    },
    {
      icon: <FiTool className="w-6 h-6" />,
      title: 'Professional Assembly',
      description: 'Our experts will assemble your furniture perfectly, saving you time and hassle.',
      features: [
        'Experienced technicians',
        'All tools provided', 
        'Packaging removal', 
        'Quality inspection'
      ]
    },
    {
      icon: <FiPackage className="w-6 h-6" />,
      title: 'Packing & Storage',
      description: 'Secure storage solutions for your furniture until you\'re ready for delivery.',
      features: [
        'Climate-controlled facilities',
        'Short and long-term options',
        'Full insurance coverage',
        'Flexible retrieval'
      ]
    },
    {
      icon: <FiHome className="w-6 h-6" />,
      title: 'In-Home Consultation',
      description: 'Get expert advice on furniture selection and space planning in the comfort of your home.',
      features: [
        'Personalized design advice',
        'Space planning',
        'Fabric and finish selection',
        '3D room visualization'
      ]
    },
    {
      icon: <FiScissors className="w-6 h-6" />,
      title: 'Custom Furniture',
      description: 'Bespoke furniture pieces tailored to your exact specifications and style.',
      features: [
        'Custom sizing',
        'Material selection',
        'Design collaboration',
        'Handcrafted quality'
      ]
    },
    {
      icon: <FiRefreshCw className="w-6 h-6" />,
      title: 'Refinishing & Repair',
      description: 'Restore your beloved furniture to its former glory with our expert refinishing services.',
      features: [
        'Wood repair',
        'Upholstery restoration',
        'Finish touch-ups',
        'Hardware replacement'
      ]
    }
  ];

  return (
    <div className="min-h-screen mt-14 bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our comprehensive range of premium services designed to make your furniture shopping experience seamless and enjoyable.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            features={service.features}
          />
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto mt-20 bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-12 sm:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Space?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our design experts are here to help you create the perfect environment for your home or office.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Schedule a Consultation
              </a>
              <a
                href="tel:+11234567890"
                className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
              >
                Call Us: (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;