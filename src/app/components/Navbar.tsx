"use client";

import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <div className="flex items-center">
          <Image
                  className="p-24"
                  src="/mastermind.png"
                  alt="Next.js Logo"
                  width={400}
                  height={50}
                  priority
                />
          </div>
          
          {/* Navigation Items */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Home
            </Link>
            <Link href="/rules" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Rules
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 