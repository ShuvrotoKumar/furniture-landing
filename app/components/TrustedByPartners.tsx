'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const TrustedByPartners = () => {
  const partners = [
    {
      id: 1,
      name: 'IKEA',
      logo: '/images/l1.png',
      width: 100,
      height: 40
    },
    {
      id: 2,
      name: 'West Elm',
      logo: '/images/l2.png',
      width: 120,
      height: 40
    },
    {
      id: 3,
      name: 'Crate & Barrel',
      logo: '/images/l3.png',
      width: 150,
      height: 40
    },
    {
      id: 4,
      name: 'CB2',
      logo: '/images/l4.png',
      width: 80,
      height: 40
    },
    {
      id: 5,
      name: 'Design Within Reach',
      logo: '/images/l5.png',
      width: 180,
      height: 40
    }
  ];

  // Duplicate partners for seamless looping
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 relative inline-block group/title">
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-500 group-hover/title:w-full"></span>
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to collaborate with the most respected names in the furniture industry
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
            {duplicatedPartners.map((partner, index) => (
              <div 
                key={`${partner.id}-${index}`}
                className="mx-8 flex-shrink-0 transform transition-transform duration-300 hover:scale-110"
              >
                <div className="relative w-40 h-20 flex items-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className="object-contain w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustedByPartners;