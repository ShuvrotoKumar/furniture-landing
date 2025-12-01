'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Input, Select, Pagination, message, Button } from 'antd';
import Products from '../components/Products';
import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const { Option } = Select;

const ProductsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [messageApi, contextHolder] = message.useMessage();
  const itemsPerPage = 8;

  // Get initial values from URL params
  useEffect(() => {
    const query = searchParams.get('q') || '';
    const category = searchParams.get('category');
    const sort = searchParams.get('sort') || 'featured';
    const page = parseInt(searchParams.get('page') || '1', 10);

    setSearchQuery(query);
    setCategoryFilter(category);
    setSortBy(sort);
    setCurrentPage(page);
  }, [searchParams]);

  // Update URL when filters change
  const updateUrlParams = (params: Record<string, string | number | null>) => {
    const newParams = new URLSearchParams(searchParams.toString());
    
    Object.entries(params).forEach(([key, value]) => {
      if (value === null || value === '') {
        newParams.delete(key);
      } else {
        newParams.set(key, String(value));
      }
    });

    // Reset to first page when filters change
    if (!('page' in params)) {
      newParams.set('page', '1');
      setCurrentPage(1);
    }

    router.push(`/products?${newParams.toString()}`, { scroll: false });
  };

  const handleSearch = (value: string) => {
    updateUrlParams({ q: value, category: null });
  };

  const handleCategoryChange = (value: string) => {
    updateUrlParams({ category: value === 'all' ? null : value });
  };

  const handleSortChange = (value: string) => {
    updateUrlParams({ sort: value });
  };

  const handlePageChange = (page: number) => {
    updateUrlParams({ page });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Categories for filtering
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Living Room', label: 'Living Room' },
    { value: 'Bedroom', label: 'Bedroom' },
    { value: 'Dining Room', label: 'Dining Room' },
    { value: 'Office', label: 'Office' },
    { value: 'Outdoor', label: 'Outdoor' },
  ];

  // Sort options
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest Arrivals' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {contextHolder}
      {/* Header with Back Button */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <button 
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mr-4"
            aria-label="Go back"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block mb-4">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-900 bg-yellow-400 rounded-full">
              Premium Collection
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Collection</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our premium selection of furniture designed to elevate your living spaces
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="w-full md:w-1/3">
            <Input
              placeholder="Search products..."
              size="large"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onPressEnter={(e) => handleSearch((e.target as HTMLInputElement).value)}
              className="w-full"
              addonAfter={
                <Button 
                  type="primary" 
                  icon={<SearchOutlined />}
                  onClick={() => handleSearch(searchQuery)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                />
              }
              allowClear
            />
          </div>
          
          <div className="w-full md:w-1/3">
            <Select
              className="w-full"
              size="large"
              value={categoryFilter || 'all'}
              onChange={handleCategoryChange}
            >
              {categories.map((category) => (
                <Option key={category.value} value={category.value}>
                  {category.label}
                </Option>
              ))}
            </Select>
          </div>
          
          <div className="w-full md:w-1/4">
            <Select
              className="w-full"
              size="large"
              value={sortBy}
              onChange={handleSortChange}
            >
              {sortOptions.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-8">
          <Products 
            searchQuery={searchQuery}
            categoryFilter={categoryFilter}
            sortBy={sortBy}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <Pagination
            current={currentPage}
            pageSize={itemsPerPage}
            total={50} // This should be the total number of products from your data
            onChange={handlePageChange}
            showSizeChanger={false}
            className="pagination"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;