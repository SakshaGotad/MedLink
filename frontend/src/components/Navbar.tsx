'use client';

import Link from 'next/link';
import React from 'react';

const Navbar= () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[100px]">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Logo  
            </Link>
          </div>

          {/* Center: Navigation Items */}
          <div className="hidden md:flex space-x-8">
            <Link href="/features" className="text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
              Demos
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              Departments
            </Link>
          </div>

          {/* Right: Get Started Button */}
          <div>
            <Link
              href="/auth/login"
              className="inline-block px-4 py-2 text-white bg-[#8141dc] hover:bg-[#604883] rounded-md transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
