'use client';

import { FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ShoppingCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShoppingCartDrawer = ({ isOpen, onClose }: ShoppingCartDrawerProps) => {
  // Close drawer when clicking outside
  const handleClickOutside = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === 'cart-overlay') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            id="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={handleClickOutside}
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-semibold">Your Cart</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close cart"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Empty State */}
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-32 h-32 relative mb-6">
                <Image
                  src="/images/empty-cart.svg"
                  alt="Empty cart"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
              <button
                onClick={onClose}
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ShoppingCartDrawer;
