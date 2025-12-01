'use client';

import Image from 'next/image';
import { FiShoppingCart, FiStar } from 'react-icons/fi';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

const PopularDemand = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // Sample product data - replace with your actual data source
  const popularProducts: ProductCardProps[] = [
    {
      id: 1,
      name: 'Modern Lounge Chair',
      price: 399,
      rating: 4.8,
      image: '/images/d1.jpg'
    },
    {
      id: 2,
      name: 'Minimalist Coffee Table',
      price: 249,
      rating: 4.6,
      image: '/images/d2.jpg'
    },
    {
      id: 3,
      name: 'Scandinavian Sofa',
      price: 899,
      rating: 4.9,
      image: '/images/d3.jpg'
    },
  ];

  return (
    <section id="popular" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-center mb-12">
          <ul className="flex space-x-8">
            <li>
              <button 
                onClick={() => scrollToSection('popular')}
                className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
              >
                Popular
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
              >
                Features
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('new-arrivals')}
                className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
              >
                New Arrivals
              </button>
            </li>
          </ul>
        </nav>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Demand</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our most loved furniture pieces, handpicked by our customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] group"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center text-amber-500 font-medium transform group-hover:scale-110 transition-transform duration-300">
                  <FiStar className="mr-1" />
                  {product.rating}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center transition-all duration-300 transform hover:scale-105 hover:shadow-md">
                    <FiShoppingCart className="mr-2 transition-transform duration-300 group-hover:rotate-[-10deg]" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
            View All Popular Items
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularDemand;
