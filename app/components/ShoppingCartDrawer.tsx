'use client';

import { FiX, FiShoppingCart, FiTrash2, FiArrowLeft } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { Button, message } from 'antd';
import { formatPrice } from '@/app/utils/formatters';

interface CartItem {
  id: number;
  name: string;
  price: number | string;
  image: string;
  quantity: number;
}

interface ShoppingCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShoppingCartDrawer = ({ isOpen, onClose }: ShoppingCartDrawerProps) => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    totalItems, 
    totalPrice, 
    clearCart 
  } = useCart();
  
  const handleClickOutside = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === 'cart-overlay') {
      onClose();
    }
  };
  
  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
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
            <div className="bg-white border-b border-gray-200">
              <div className="flex items-center p-4">
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
                  aria-label="Close cart"
                >
                  <FiArrowLeft size={20} />
                </button>
                <h2 className="text-xl font-semibold flex-1 text-center px-2">🛒 Your Cart</h2>
                {cart.length > 0 && (
                  <button
                    onClick={() => {
                      clearCart();
                      message.success('Cart cleared successfully');
                    }}
                    className="text-sm text-blue-500 hover:underline whitespace-nowrap px-2 py-1 -mr-2"
                  >
                    Clear All
                  </button>
                )}
              </div>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-white">
                <div className="w-28 h-28 flex items-center justify-center mb-5">
                  <FiShoppingCart className="w-24 h-24 text-gray-300" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-500 mb-6 max-w-xs">You haven't added any items yet. Start shopping to fill your cart!</p>
                <Button
                  type="primary"
                  onClick={onClose}
                  className="bg-blue-600 hover:bg-blue-700 h-10 px-6"
                >
                  Start Shopping
                </Button>
              </div>
            ) : (
              <div className="flex flex-col h-[calc(100vh-64px)] bg-white">
                <div className="flex-1 overflow-y-auto p-4 bg-white">
                  <h3 className="text-base font-medium text-gray-700 mb-4">                                   
                    Here are the items you've selected:
                  </h3>
                  <div className="space-y-4 pb-4">
                    {cart.map((item: CartItem) => (
                      <div key={item.id} className="flex items-start gap-3 p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <div className="relative w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 64px) 100vw, 64px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 text-base line-clamp-2">{item.name}</h4>
                          <p className="text-gray-600 text-base mt-1">{formatPrice(item.price)}</p>
                          <div className="flex items-center mt-3">
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md hover:bg-gray-50"
                            >
                              -
                            </button>
                            <div className="w-12 h-8 flex items-center justify-center border-t border-b border-gray-300">
                              {item.quantity}
                            </div>
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md hover:bg-gray-50"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-blue-500 p-2"
                          aria-label="Remove item"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white border-t border-gray-200 p-4 mt-auto">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">{formatPrice(totalPrice)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold pt-3 border-t border-gray-100">
                      <span>Total</span>
                      <span>{formatPrice(totalPrice)}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mt-4">
                    <Link href="/checkout" passHref>
                      <Button
                        type="primary"
                        className="w-full h-12 bg-blue-600 hover:bg-blue-700 border-none text-base"
                        onClick={onClose}
                      >
                        Proceed to Checkout
                      </Button>
                    </Link>
                    <Button
                      type="default"
                      className="w-full h-10 text-gray-700 border-gray-300 hover:bg-gray-50"
                      onClick={onClose}
                    >
                      Continue Shopping
                    </Button>
                  </div>
                  
                  <p className="text-xs text-gray-500 text-center mt-4 px-2">
                    By placing your order, you agree to our{' '}
                    <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a> and{' '}
                    <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ShoppingCartDrawer;
