'use client';

import { CheckCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Image from 'next/image';

const About = () => {
  const features = [
    'High-quality materials and craftsmanship',
    'Modern and minimalist design',
    'Eco-friendly production process',
    '5-year warranty on all products'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side - Image */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <div className="relative rounded-xl overflow-hidden shadow-xl group">
              <div className="overflow-hidden">
                <Image
                  src="/images/lady.jpg"
                  alt="About our furniture"
                  width={600}
                  height={600}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="md:w-1/2 md:pl-10">
            <h2 className="text-3xl font-bold mb-6 relative inline-block group/title">
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-500 group-hover/title:w-full"></span>
              We Provide You The Best Experience
            </h2>
            <p className="text-gray-600 mb-8">
              Our furniture is designed to bring both style and comfort to your home. 
              Each piece is carefully crafted with attention to detail and quality materials 
              to ensure it lasts for years to come.
            </p>
            
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start group/feature">
                  <CheckCircleOutlined className="text-green-500 text-xl mr-3 mt-1 transform transition-transform duration-300 group-hover/feature:scale-125" />
                  <span className="text-gray-700 transition-colors duration-300 group-hover/feature:text-blue-600">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              type="primary" 
              size="large"
              className="bg-blue-600 hover:bg-blue-700 h-12 px-8 text-lg group/button transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <span className="inline-block group-hover/button:translate-x-1 transition-transform duration-300">
                Learn More
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
