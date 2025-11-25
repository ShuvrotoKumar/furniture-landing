'use client';

import Image from 'next/image';

const Materials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Very Serious Materials For Making Furniture
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* First Material */}
          <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] group">
            <div className="relative w-40 h-22 md:w-40 md:h-40 mb-4 md:mb-0 md:mr-6 transform group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/images/fab1.jpg"
                alt="Premium Wood"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">Premium Wood</h3>
              <p className="text-gray-600">
                Sustainably sourced hardwoods for lasting durability and natural beauty.
              </p>
            </div>
          </div>

          {/* Second Material */}
          <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] group">
            <div className="relative w-40 h-22 md:w-40 md:h-40 mb-4 md:mb-0 md:mr-6 transform group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/images/fab2.jpg"
                alt="Luxury Fabric"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">Luxury Fabric</h3>
              <p className="text-gray-600">
                High-quality, durable fabrics that combine comfort with style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;
