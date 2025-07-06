"use client";

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Mastermind
            </h1>
          </div>
          
          {/* Navigation Items */}
          <div className="flex items-center space-x-8">
            <a 
              href="#" 
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Rules
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 