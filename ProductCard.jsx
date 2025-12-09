import React from 'react';
import { Check, Star, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="card p-6 relative overflow-hidden group">
      {/* Popular Badge */}
      {product.popular && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
          <Star size={12} fill="currentColor" />
          <span>Popular</span>
        </div>
      )}

      {/* Icon with gradient background */}
      <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center text-3xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        {product.icon}
      </div>

      {/* Product Info */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
        <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">
          {product.category}
        </span>
      </div>

      {/* Price */}
      <div className="mb-4">
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold text-gray-900">${product.price}</span>
          <span className="text-gray-500">/ {product.duration}</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
            <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Buy Button */}
      <a 
        href="https://t.me/sweeeshy" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg group-hover:scale-105"
      >
        <ShoppingCart size={20} />
        <span>Buy Now</span>
      </a>

      {/* Decorative element */}
      <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r ${product.color} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500`}></div>
    </div>
  );
};

export default ProductCard;
