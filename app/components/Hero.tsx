'use client';

import { Button } from 'antd';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/hero.jpg)',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'translateZ(0)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Make Your Interior More <span className='text-cyan-300'>Minimalistic & Modern</span>
        </h1>
        <p className="text-lg  md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          We create beautiful and functional spaces that reflect your style and personality.
        </p>
        <Button 
          type="primary" 
          size="large"
          className="bg-blue-600 hover:bg-blue-700 h-12 px-8 text-lg mt-4.5"
        >
          Shop Now
        </Button>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg 
              className="w-8 h-8 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
