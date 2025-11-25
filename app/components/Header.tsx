'use client';

import { ShoppingCartOutlined, HeartOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          FurniCraft
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Shop', 'Product', 'Pages', 'About'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`} 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900">
            <SearchOutlined className="text-xl" />
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <HeartOutlined className="text-xl" />
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <ShoppingCartOutlined className="text-xl" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
