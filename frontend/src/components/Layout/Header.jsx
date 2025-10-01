import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/outline';

function Header() {
  return (
    <header className="bg-primary text-text-light shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold font-heading text-accent hover:text-white transition-colors duration-200">
          Conquer.
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-text-light hover:text-accent transition-colors duration-200 text-lg">Home</Link>
          <Link to="/shop" className="text-text-light hover:text-accent transition-colors duration-200 text-lg">Shop</Link>
          <Link to="/about" className="text-text-light hover:text-accent transition-colors duration-200 text-lg">About</Link>
          <Link to="/contact" className="text-text-light hover:text-accent transition-colors duration-200 text-lg">Contact</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative p-1 rounded-full text-text-light hover:bg-secondary hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent">
            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white rounded-full px-1">0</span>
          </Link>
          <Link to="/login" className="p-1 rounded-full text-text-light hover:bg-secondary hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent">
            <UserCircleIcon className="h-6 w-6" aria-hidden="true" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

