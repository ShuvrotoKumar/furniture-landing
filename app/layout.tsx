// app/layout.tsx
'use client';

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import 'antd/dist/reset.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Handle initial scroll if there's a hash in the URL
    const handleInitialScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Small delay to ensure the page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Initial scroll check
    handleInitialScroll();
  }, [pathname]);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Pooms - Premium Furniture</title>
        <meta name="description" content="Discover premium furniture designs for your home" />
        <meta name="keywords" content="furniture, home decor, interior design, premium furniture, modern furniture, living room, bedroom, office furniture, dining room, sofa, chair, table" />
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
