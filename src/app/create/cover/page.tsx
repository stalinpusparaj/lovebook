import React from 'react';
import Image from 'next/image';
import Navigation from '@/components/layout/Navigation';

interface CoverOption {
  id: string;
  title: string;
  image: string;
  price: number;
}

const popularCovers: CoverOption[] = [
  {
    id: '1',
    title: 'My Reasons Why',
    image: '/images/covers/camping.jpg',
    price: 52.88,
  },
  {
    id: '2',
    title: 'The Reasons Why I Love You',
    image: '/images/covers/park.jpg',
    price: 52.88,
  },
  {
    id: '3',
    title: 'All My Reasons Why',
    image: '/images/covers/beach.jpg',
    price: 52.88,
  },
  // Add more covers...
];

export default function CoverSelectionPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center mb-8">
            COVER SELECTION
          </h1>

          <div className="mb-8">
            <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-2">
              Select an Occasion
            </label>
            <select
              id="occasion"
              className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="valentines">Valentine's Day</option>
              <option value="wedding">Wedding</option>
            </select>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Popular</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {popularCovers.map((cover) => (
                <div key={cover.id} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-2">
                    <Image
                      src={cover.image}
                      alt={cover.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900">{cover.title}</h3>
                  <p className="text-sm text-gray-500">${cover.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <button className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700">
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
} 