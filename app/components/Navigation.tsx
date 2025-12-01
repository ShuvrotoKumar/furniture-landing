'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FiSearch, FiShoppingCart, FiX } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import { useCart } from '../context/CartContext';

// Dynamically import the ShoppingCartDrawer with SSR disabled
const ShoppingCartDrawer = dynamic(
  () => import('./ShoppingCartDrawer'),
  { ssr: false }
);
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import TrustedByPartners from './TrustedByPartners';

interface Product {
  id: number;
  name: string;
  category: string;
}

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [activeSection, setActiveSection] = useState('home');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const { totalItems } = useCart();

  // Sample product data - replace with your actual data source
  const products: Product[] = [
    { id: 1, name: 'Modern Lounge Chair', category: 'Chairs' },
    { id: 2, name: 'Minimalist Coffee Table', category: 'Tables' },
    { id: 3, name: 'Scandinavian Sofa', category: 'Sofas' },
    { id: 4, name: 'Ergonomic Office Chair', category: 'Chairs' },
    { id: 5, name: 'Glass Dining Table', category: 'Tables' },
  ];

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Features', id: 'features' },
    { name: 'Popular', id: 'popular' },
    { name: 'Products', id: 'products' },
    { name: 'About', id: 'about' },
    { name: 'Materials', id: 'materials' },
    { name: 'Testimonials', id: 'testimonials' },
    { name:'Partners', id:'partners'}
  ];

  // Handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Add some offset for better UX
      
      // Get all sections that are in the viewport
      const sections = navItems
        .map(item => {
          const element = document.getElementById(item.id);
          if (!element) return null;
          
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.pageYOffset;
          const elementBottom = bottom + window.pageYOffset;
          
          return {
            id: item.id,
            element,
            top: elementTop,
            bottom: elementBottom,
            height: elementBottom - elementTop
          };
        })
        .filter(Boolean);

      // Find the section that's currently in view
      let currentSection = 'home';
      
      for (const section of sections) {
        if (!section) continue;
        
        // Check if section is in viewport
        if (scrollPosition >= section.top - 150 && scrollPosition < section.bottom - 100) {
          currentSection = section.id;
          break;
        }
      }
      
      setActiveSection(currentSection);
    };

    // Check for hash on initial load
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          setActiveSection(hash);
        }
      }
    };

    // Initial check
    handleHashChange();
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [pathname]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (query.length > 0) {
      const results = products.filter(
        product => product.name.toLowerCase().includes(query)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  // Handle search submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page or handle search
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  // Handle navigation with smooth scroll
  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    console.log('Clicked nav item:', id);
    
    // If we're not on the home page and the section is not 'home', navigate to home page with hash
    if (pathname !== '/') {
      if (id === 'home') {
        router.push('/');
        return;
      } else {
        // For other sections, navigate to home page with hash
        router.push(`/#${id}`);
        return;
      }
    }
    
    // If we're on the home page, handle smooth scrolling
    const element = document.getElementById(id);
    console.log('Found element:', element);
    
    if (!element) {
      console.error(`Element with id '${id}' not found`);
      return;
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
    
    // Calculate the offset for fixed header (120px to account for header height and some spacing)
    const headerOffset = 120;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;
    
    console.log('Scrolling to:', offsetPosition);
    
    // Smooth scroll to the element
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    // Update active section and URL
    setActiveSection(id);
    const newUrl = `#${id}`;
    console.log('Updating URL to:', newUrl);
    window.history.pushState(null, '', newUrl);
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchInputRef.current && !searchInputRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      searchInputRef.current?.focus();
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10 shadow-xl">
      <div className="container mx-auto px-4 py-1">
        <div className="flex justify-between items-center">
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2 -ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FiX size={24} className="text-blue-400" />
            ) : (
              <FaBars size={24} />
            )}
          </button>

          {/* Logo - Scrolls to top */}
          <Link 
            href="/#home" 
            scroll={false}
            onClick={(e) => handleNavClick(e, 'home')}
            className={`h-28 w-48 relative focus:outline-none mx-auto md:mx-0 ${
              isMenuOpen ? 'hidden md:block' : ''
            }`}
          >
            <Image
              src="/images/logo.png"
              alt="Pooms Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              console.log(`Rendering nav item: ${item.id}, active: ${activeSection === item.id}`);
              const href = pathname === '/' ? `#${item.id}` : item.id === 'home' ? '/' : `/#${item.id}`;
              return (
                <Link
                  key={item.id}
                  href={href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`${
                    (pathname === '/' && activeSection === item.id) || 
                    (pathname !== '/' && item.id === 'home')
                      ? 'text-blue-400' 
                      : 'text-white hover:text-blue-300'
                  } transition-colors font-medium py-2 px-1 cursor-pointer`}
                  aria-current={(pathname === '/' && activeSection === item.id) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Search Button */}
            <div className="relative" ref={searchInputRef}>
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-white hover:text-blue-300 p-2"
                aria-label="Search"
              >
                <FiSearch size={20} className={isSearchOpen ? 'text-blue-400' : ''} />
              </button>
              
              {/* Search Dropdown */}
              {isSearchOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50 overflow-hidden">
                  <form onSubmit={handleSearchSubmit} className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      placeholder="Search for products..."
                      className="w-full px-4 py-2 pl-10 pr-10 text-gray-800 focus:outline-none"
                      autoComplete="off"
                    />
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => {
                          setSearchQuery('');
                          setSearchResults([]);
                          searchInputRef.current?.focus();
                        }}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        aria-label="Clear search"
                      >
                        <FiX />
                      </button>
                    )}
                  </form>
                  
                  {/* Search Results */}
                  {searchResults.length > 0 && (
                    <div className="border-t border-gray-200 max-h-96 overflow-y-auto">
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.id}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery('');
                            setSearchResults([]);
                          }}
                        >
                          <div className="font-medium">{product.name}</div>
                          <div className="text-xs text-gray-500">{product.category}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                  
                  {/* No Results */}
                  {searchQuery && searchResults.length === 0 && (
                    <div className="px-4 py-2 text-sm text-gray-500">
                      No products found for "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-white hover:text-blue-300 relative"
              aria-label="Shopping cart"
            >
              <FiShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <ShoppingCartDrawer 
              isOpen={isCartOpen} 
              onClose={() => setIsCartOpen(false)} 
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen mt-4 pb-4' : 'max-h-0'
        }`}>
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              console.log(`Rendering mobile nav item: ${item.id}, active: ${activeSection === item.id}`);
              const href = pathname === '/' ? `#${item.id}` : item.id === 'home' ? '/' : `/#${item.id}`;
              const isActive = (pathname === '/' && activeSection === item.id) || 
                             (pathname !== '/' && item.id === 'home');
              
              return (
                <Link
                  key={item.id}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Mobile nav clicked:', item.id);
                    handleNavClick(e, item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left py-3 px-4 rounded-lg transition-colors text-lg ${
                    isActive
                      ? 'bg-blue-500 text-white font-medium'
                      : 'text-white hover:bg-white/10'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              );
            })}
            
            {/* Mobile Search - Only visible when menu is open on mobile */}
            {isMenuOpen && (
              <div className="mt-4 pt-4 border-t border-white/10">
                <form onSubmit={handleSearchSubmit} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search products..."
                    className="w-full px-4 py-3 pl-10 pr-10 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autoComplete="off"
                  />
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                      aria-label="Clear search"
                    >
                      <FiX />
                    </button>
                  )}
                </form>
                
                {/* Mobile Search Results */}
                {searchResults.length > 0 && (
                  <div className="mt-2 bg-white rounded-lg overflow-hidden">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        className="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-100 border-b border-gray-100 last:border-0"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setSearchQuery('');
                          setSearchResults([]);
                        }}
                      >
                        <div className="font-medium">{product.name}</div>
                        <div className="text-xs text-gray-500">{product.category}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
