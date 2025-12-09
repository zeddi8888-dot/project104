import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl">
              OH
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Sweeeshy Premium Shops</h1>
              <p className="text-xs text-gray-500">Premium Accounts</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Home
            </a>
            <a href="#products" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Products
            </a>
            <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Features
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#products"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Products
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Features
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
