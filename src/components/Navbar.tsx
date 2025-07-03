'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingBag, User, Menu, X, LogOut, Settings } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { state } = useCart();

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/me');
        if (response.ok) {
          const userData = await response.json();
          setUser(userData.user);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      }
    };

    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setUser(null);
      setShowUserMenu(false);
      window.location.href = '/';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-lg sticky top-0 z-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-orange-600"
            >
              SITASONI
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Shop
            </Link>
            <Link href="/shop?category=men" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Men
            </Link>
            <Link href="/shop?category=women" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Women
            </Link>
            <Link href="/shop?category=kids" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Kids
            </Link>
            <Link href="/shop?category=accessories" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Accessories
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Shopping Cart */}
            <Link href="/cart">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 text-gray-700 hover:text-orange-600 transition-colors"
              >
                <ShoppingBag className="w-6 h-6" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {state.itemCount}
                  </span>
                )}
              </motion.button>
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="p-2 text-gray-700 hover:text-orange-600 transition-colors"
                >
                  <User className="w-6 h-6" />
                </motion.button>

                {showUserMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                  >
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      <p className="font-medium">{user.name}</p>
                      <p className="text-gray-500">{user.email}</p>
                    </div>
                    
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <User className="w-4 h-4 mr-2" />
                      My Profile
                    </Link>
                    
                    {user.role === 'admin' && (
                      <Link
                        href="/admin"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Admin Panel
                      </Link>
                    )}
                    
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <Link
                href="/auth"
                className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors font-medium"
              >
                Login
              </Link>
            )}

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 py-4"
          >
            <div className="flex flex-col space-y-3">
              <Link
                href="/shop"
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/shop?category=men"
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Men
              </Link>
              <Link
                href="/shop?category=women"
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Women
              </Link>
              <Link
                href="/shop?category=kids"
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Kids
              </Link>
              <Link
                href="/shop?category=accessories"
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Accessories
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
