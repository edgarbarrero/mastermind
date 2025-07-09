"use client";

import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  
  return (
    <nav className="w-full bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-16">
          {/* Logo/Title */}
          <div className="flex items-center">
          <Image
                  className="p-2 sm:p-4 md:p-6"
                  src="/mastermind.png"
                  alt="Next.js Logo"
                  width={200}
                  height={25}
                  priority
                />
          </div>
          
          {/* Navigation Items */}
          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 px-2 sm:px-3 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200">
              Home
            </Link>
            <Link href="/rules" className="text-gray-600 hover:text-gray-900 px-2 sm:px-3 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200">
              Rules
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 px-2 sm:px-3 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200">
              About
            </Link>
            
            {/* User Section */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-200 cursor-pointer">
                  <span className="text-white font-semibold text-sm sm:text-base">
                    {user?.name?.charAt(0).toUpperCase() || 'U'}
                  </span>
                </div>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-gray-900 px-2 sm:px-3 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/auth" className="text-gray-600 hover:text-gray-900 px-2 sm:px-3 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 