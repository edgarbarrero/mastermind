"use client";

import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const Navbar: React.FC = () => {
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
            <Link href="/auth" className="text-gray-600 hover:text-gray-900 px-2 sm:px-3 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 