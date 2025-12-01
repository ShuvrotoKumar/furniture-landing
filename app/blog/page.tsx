'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Input, Button, Card, Tag, Divider } from 'antd';
import { SearchOutlined, CalendarOutlined, UserOutlined, TagOutlined } from '@ant-design/icons';

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Modern Living Room Designs for 2023',
    excerpt: 'Discover the latest trends in modern living room designs that combine comfort and style.',
    image: '/images/b1.jpg',
    date: 'October 15, 2023',
    author: 'Sarah Johnson',
    category: 'Interior Design',
    slug: 'modern-living-room-designs-2023',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Sustainable Furniture: A Buyer\'s Guide',
    excerpt: 'Learn how to choose eco-friendly furniture that aligns with your sustainable lifestyle.',
    image: '/images/b2.jpg',
    date: 'October 8, 2023',
    author: 'Michael Chen',
    category: 'Sustainability',
    slug: 'sustainable-furniture-guide',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Maximizing Small Spaces: Clever Furniture Solutions',
    excerpt: 'Transform your small space with these innovative furniture ideas and space-saving solutions.',
    image: '/images/b3.jpg',
    date: 'October 1, 2023',
    author: 'Emily Rodriguez',
    category: 'Space Planning',
    slug: 'small-space-furniture-solutions',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'The Art of Mixing Wood Tones in Home Decor',
    excerpt: 'Master the technique of combining different wood tones for a harmonious home aesthetic.',
    image: '/images/b4.jpg',
    date: 'September 24, 2023',
    author: 'David Kim',
    category: 'Decor Tips',
    slug: 'mixing-wood-tones-decor',
    readTime: '8 min read'
  },
  {
    id: 5,
    title: 'Home Office Essentials for Productivity',
    excerpt: 'Create an inspiring and functional home office with these essential furniture pieces.',
    image: '/images/b5.jpg',
    date: 'September 17, 2023',
    author: 'Jessica Williams',
    category: 'Home Office',
    slug: 'home-office-essentials',
    readTime: '5 min read'
  },
  {
    id: 6,
    title: 'The Rise of Biophilic Design in Modern Homes',
    excerpt: 'Explore how bringing nature indoors can transform your living spaces and well-being.',
    image: '/images/b6.jpg',
    date: 'September 10, 2023',
    author: 'Robert Taylor',
    category: 'Design Trends',
    slug: 'biophilic-design-homes',
    readTime: '9 min read'
  }
];

// Categories for filtering
const categories = [
  { name: 'All', slug: 'all', count: blogPosts.length },
  { name: 'Interior Design', slug: 'interior-design', count: 12 },
  { name: 'Furniture Care', slug: 'furniture-care', count: 8 },
  { name: 'Space Planning', slug: 'space-planning', count: 6 },
  { name: 'Design Trends', slug: 'design-trends', count: 10 },
  { name: 'DIY Projects', slug: 'diy-projects', count: 5 },
  { name: 'Home Office', slug: 'home-office', count: 7 }
];

// Popular tags
const popularTags = [
  'Modern Design', 'Minimalism', 'Scandinavian', 'Mid-Century', 'Eco-Friendly',
  'Luxury', 'Small Spaces', 'Home Decor', 'Furniture Care', 'Interior Styling'
];

// Recent comments
const recentComments = [
  { id: 1, author: 'Alex Johnson', text: 'Great tips! I\'ve been looking for ways to improve my small apartment.', post: 'Maximizing Small Spaces' },
  { id: 2, author: 'Maria Garcia', text: 'The biophilic design article was eye-opening!', post: 'The Rise of Biophilic Design' },
  { id: 3, author: 'James Wilson', text: 'Thanks for the sustainable furniture recommendations!', post: 'Sustainable Furniture Guide' }
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [email, setEmail] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle the subscription here
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Design Inspiration & Tips</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the latest trends, design ideas, and expert advice for your home
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-8">
            <Input
              placeholder="Search articles..."
              prefix={<SearchOutlined className="text-gray-400" />}
              size="large"
              className="rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="lg:w-2/3">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.slug}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.slug
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Blog Posts */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <Card
                    key={post.id}
                    hoverable
                    className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg"
                    cover={
                      <div className="relative h-48 md:h-56 w-full">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                          <Tag color="blue" className="mb-2">
                            {post.category}
                          </Tag>
                        </div>
                      </div>
                    }
                  >
                    <div className="flex-grow">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span className="flex items-center mr-4">
                          <UserOutlined className="mr-1" /> {post.author}
                        </span>
                        <span className="flex items-center">
                          <CalendarOutlined className="mr-1" /> {post.date}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold mb-2 text-gray-800 hover:text-blue-600 transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <Link 
                        href={`/blog/${post.slug}`} 
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                      >
                        Read More →
                      </Link>
                    </div>
                  </Card>
                ))
              ) : (
                <div className="col-span-2 text-center py-12">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No articles found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                {[1, 2, 3, '...', 8].map((page, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${
                      page === 1 ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 hover:bg-gray-100">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* About Widget */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">About The Blog</h3>
              <p className="text-gray-600 mb-4">
                Welcome to our design blog where we share inspiration, tips, and trends for creating beautiful living spaces.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-400">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-pink-600">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Popular Posts */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Popular Posts</h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="flex items-start group">
                    <div className="flex-shrink-0 w-16 h-16 relative rounded overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.slice(0, 6).map((category) => (
                  <li key={category.slug}>
                    <button
                      onClick={() => setSelectedCategory(category.slug)}
                      className={`flex justify-between items-center w-full text-left px-3 py-2 rounded ${
                        selectedCategory === category.slug
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Newsletter</h3>
              <p className="text-gray-600 text-sm mb-4">
                Subscribe to get the latest design tips and trends straight to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}