// app/components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <Link href="/" className="block h-32 w-32 relative mb-4">
              <Image
                src="/images/logo.png"
                alt="Pooms Logo"
                fill
                className="object-contain"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              The sophisticated design is a synergy with comfort, giving an atmosphere of the most luxurious residence.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Our Services</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link href="/returns" className="text-gray-400 hover:text-white">Returns & Exchanges</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaDribbble size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>Copyright © {new Date().getFullYear()} Pooms. All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white">Terms of Use</Link>
            <span>•</span>
            <Link href="/cookies" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;