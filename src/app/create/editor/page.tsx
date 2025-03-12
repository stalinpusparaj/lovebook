import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Image from 'next/image';

interface BookPage {
  id: number;
  image: string;
  text: string;
}

const samplePages: BookPage[] = [
  {
    id: 1,
    image: '/images/pages/cover.jpg',
    text: 'Happy Birthday',
  },
  {
    id: 2,
    image: '/images/pages/balloons.jpg',
    text: 'To celebrate your special day',
  },
  {
    id: 3,
    image: '/images/pages/fireworks.jpg',
    text: 'I love that you are a great singer',
  },
  // Add more pages...
];

export default function EditorPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">My Book</h1>
            <div className="text-sm text-gray-600">
              You have {samplePages.length} Pages
            </div>
          </div>

          <div className="flex space-x-4 mb-8">
            <button className="px-6 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-50">
              + Add Pages
            </button>
            <button className="px-6 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-50">
              Arrange
            </button>
            <button className="px-6 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-50">
              Preview
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {samplePages.map((page) => (
              <div key={page.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-2 border border-gray-200">
                  <Image
                    src={page.image}
                    alt={page.text}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity" />
                </div>
                <p className="text-xs text-center text-gray-600">
                  {page.id === 1 ? 'Cover' : page.id}
                </p>
              </div>
            ))}
          </div>

          <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <button className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-700">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 