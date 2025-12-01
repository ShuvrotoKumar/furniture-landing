'use client';

import { useState } from 'react';
import { HeartOutlined, ShoppingCartOutlined, CheckOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const allProducts: Product[] = [
  {
    id: 1,
    name: 'Modern Armchair',
    category: 'Living Room',
    price: '299',
    image: '/images/card1.jpg',
    createdAt: new Date('2023-01-15')
  },
  {
    id: 2,
    name: 'Minimalist Sofa',
    category: 'Living Room',
    price: '599',
    image: '/images/card2.jpg',
    createdAt: new Date('2023-02-20')
  },
  {
    id: 3,
    name: 'Wooden Coffee Table',
    category: 'Living Room',
    price: '199',
    image: '/images/card3.jpg',
    createdAt: new Date('2023-03-10')
  },
  {
    id: 4,
    name: 'Dining Table Set',
    category: 'Dining Room',
    price: '899',
    image: '/images/card4.jpg',
    createdAt: new Date('2023-01-05')
  },
  {
    id: 5,
    name: 'Leather Recliner',
    category: 'Living Room',
    price: '499',
    image: '/images/card1.jpg',
    createdAt: new Date('2023-04-15')
  },
  {
    id: 6,
    name: 'Bookshelf',
    category: 'Office',
    price: '249',
    image: '/images/card2.jpg',
    createdAt: new Date('2023-03-25')
  },
  {
    id: 7,
    name: 'TV Stand',
    category: 'Living Room',
    price: '349',
    image: '/images/card3.jpg',
    createdAt: new Date('2023-02-10')
  },
  {
    id: 8,
    name: 'Accent Chair',
    category: 'Living Room',
    price: '279',
    image: '/images/card4.jpg',
    createdAt: new Date('2023-05-01')
  },
  {
    id: 9,
    name: 'Queen Size Bed',
    category: 'Bedroom',
    price: '799',
    image: '/images/card1.jpg',
    createdAt: new Date('2023-04-20')
  },
  {
    id: 10,
    name: 'Office Desk',
    category: 'Office',
    price: '349',
    image: '/images/card2.jpg',
    createdAt: new Date('2023-03-15')
  },
  {
    id: 11,
    name: 'Patio Set',
    category: 'Outdoor',
    price: '1299',
    image: '/images/card3.jpg',
    createdAt: new Date('2023-02-28')
  },
  {
    id: 12,
    name: 'Bar Stool',
    category: 'Dining Room',
    price: '129',
    image: '/images/card4.jpg',
    createdAt: new Date('2023-01-20')
  }
];

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  createdAt?: Date;
}

interface ProductsProps {
  searchQuery?: string;
  categoryFilter?: string | null;
  sortBy?: string;
  currentPage?: number;
  itemsPerPage?: number;
}

const Products = ({
  searchQuery = '',
  categoryFilter = null,
  sortBy = 'featured',
  currentPage = 1,
  itemsPerPage = 8
}: ProductsProps) => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const { addToCart, cart } = useCart();
  const [addedToCart, setAddedToCart] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    setAddedToCart(prev => [...prev, product.id]);
    message.success(`${product.name} added to cart!`);
  };

  // Filter, sort and paginate products
  const filteredAndSortedProducts = allProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !categoryFilter || product.category === categoryFilter;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseFloat(a.price) - parseFloat(b.price);
        case 'price-high':
          return parseFloat(b.price) - parseFloat(a.price);
        case 'newest':
          return (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0);
        default: // 'featured'
          return 0; // Keep original order for featured
      }
    });

  // Calculate pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredAndSortedProducts.slice(startIndex, startIndex + itemsPerPage);
  const totalProducts = filteredAndSortedProducts.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  // Format price with currency
  const formatPrice = (price: string) => {
    return `$${parseFloat(price).toFixed(2)}`;
  };

  return (
    <section className="py-8 overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Featured Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover handpicked furniture pieces that combine style, comfort, and functionality for your dream home.
          </p>
        </div>

        {/* Navigation Arrows and Products Container */}
        <div className="relative">
          <div className="absolute left-0 right-0 top-0 translate-0 bottom-0 -mx-12  flex items-center justify-between pointer-events-none">
            <button className="swiper-button-prev-custom relative pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all shadow-lg hover:scale-110 -translate-x-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>

            <button className="swiper-button-next-custom relative pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-white  border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all shadow-lg hover:scale-110 translate-x-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {searchQuery || categoryFilter ? (
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {Math.min(startIndex + 1, totalProducts)}-{Math.min(startIndex + itemsPerPage, totalProducts)} of {totalProducts} products
              {searchQuery && <span> matching "{searchQuery}"</span>}
              {categoryFilter && <span> in {categoryFilter}</span>}
            </p>
          </div>
        ) : null}

        {paginatedProducts.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={4}
            slidesPerGroup={1}
            speed={400}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
                slidesPerGroup: 1
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerGroup: 1
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
                slidesPerGroup: 1
              }
            }}
            className="w-full"
          >
            {paginatedProducts.map((product) => (
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
                      className={`absolute top-4 right-4 p-2 rounded-full ${favorites.includes(product.id) ? 'text-red-500' : 'text-gray-400'
                        } bg-white shadow-md transform transition-transform duration-300 group-hover:scale-110`}
                    >
                      <HeartOutlined />
                    </button>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <span className="text-gray-500 text-sm uppercase tracking-wider">{product.category}</span>
                    <h3 className="text-xl font-semibold my-2 text-gray-800">{product.name}</h3>
                    <div className="mt-auto pt-4 flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
                      {addedToCart.includes(product.id) ? (
                        <Link href="/checkout">
                          <Button
                            type="primary"
                            icon={<CheckOutlined />}
                            className="bg-green-600 hover:bg-green-700 hover:scale-105 transition-all duration-300"
                          >
                            <span className="group-hover:translate-x-1 transition-transform duration-300">Checkout</span>
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          type="primary"
                          onClick={() => handleAddToCart(product)}
                          icon={<ShoppingCartOutlined className="group-hover:rotate-[-10deg] transition-transform duration-300" />}
                          className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-300">Add to Cart</span>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Products;
