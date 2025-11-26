'use client';

import { useState } from 'react';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
  {
    id: 1,
    name: 'Modern Armchair',
    category: 'Living Room',
    price: '$299',
    image: '/images/card1.jpg'
  },
  {
    id: 2,
    name: 'Minimalist Sofa',
    category: 'Living Room',
    price: '$599',
    image: '/images/card2.jpg'
  },
  {
    id: 3,
    name: 'Wooden Coffee Table',
    category: 'Living Room',
    price: '$199',
    image: '/images/card3.jpg'
  },
  {
    id: 4,
    name: 'Dining Table Set',
    category: 'Dining Room',
    price: '$899',
    image: '/images/card4.jpg'
  }
];

const Products = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Best Selling Products</h2>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { 
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24
            },
            1024: { 
              slidesPerView: 4,
              spaceBetween: 24
            }
          }}
          className="pb-12 w-full"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="pb-10">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-2 hover:scale-[1.02] group">
                <div className="relative pt-[100%] bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className={`absolute top-4 right-4 p-2 rounded-full ${
                      favorites.includes(product.id) ? 'text-red-500' : 'text-gray-400'
                    } bg-white shadow-md transform transition-transform duration-300 group-hover:scale-110`}
                  >
                    <HeartOutlined />
                  </button>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <span className="text-gray-500 text-sm">{product.category}</span>
                  <h3 className="text-xl font-semibold my-2">{product.name}</h3>
                  <div className="mt-auto pt-4 flex justify-between items-center">
                    <span className="text-lg font-bold">{product.price}</span>
                    <Button 
                      type="primary" 
                      icon={<ShoppingCartOutlined className="group-hover:rotate-[-10deg] transition-transform duration-300" />}
                      className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">Add to Cart</span>
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Products;
