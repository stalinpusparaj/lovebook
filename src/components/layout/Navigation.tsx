'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image src="/images/logo.svg" alt="LoveBook" width={120} height={40} priority />
            </Link>
          </div>
          
          <div className="flex space-x-8">
            <Link href="/occasions" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
              OCCASIONS
            </Link>
            <Link href="/recipients" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
              RECIPIENTS
            </Link>
            <Link href="/shop" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
              SHOP
            </Link>
            <Link href="/pricing" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
              PRICING & SHIPPING
            </Link>
            <Link href="/membership" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
              MEMBERSHIP
            </Link>
            <Link href="/account" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
              MY ACCOUNT
            </Link>
          </div>

          <div className="flex items-center">
            <Link href="/cart" className="relative">
              <span className="sr-only">Cart</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Sale Banner */}
      <div className="bg-red-700 text-white text-center py-2">
        <p className="text-sm">
          JUST BECAUSE SALE | SAVE 12% | CODE: BECAUSE12
        </p>
      </div>
    </nav>
  );
} 