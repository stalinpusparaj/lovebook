import React, { useState } from 'react';
import Image from 'next/image';

interface CoverSelectionProps {
  onSelect: (coverId: string) => void;
  characters: {
    giver: { name: string };
    receiver: { name: string };
  };
}

export default function CoverSelection({ onSelect, characters }: CoverSelectionProps) {
  const [occasion, setOccasion] = useState('Birthday');
  const [relationship, setRelationship] = useState('Friend');

  const covers = [
    {
      id: 'cover1',
      title: 'My Reasons Why',
      image: '/images/covers/camping.jpg',
      category: 'Popular',
    },
    {
      id: 'cover2',
      title: 'The Reasons Why I Love You',
      image: '/images/covers/park.jpg',
      category: 'Popular',
    },
    {
      id: 'cover3',
      title: '50 Reasons Why',
      image: '/images/covers/superhero.jpg',
      category: 'Popular',
    },
    // Add more covers here
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">COVER SELECTION</h1>

      {/* Occasion Selection */}
      <div className="mb-8">
        <select
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          className="w-full max-w-xs mx-auto block border rounded-md p-2"
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Valentine">Valentine's Day</option>
          <option value="Christmas">Christmas</option>
        </select>
      </div>

      {/* Cover Categories */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Popular</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {covers.map((cover) => (
            <div
              key={cover.id}
              className="group cursor-pointer"
              onClick={() => onSelect(cover.id)}
            >
              <div className="relative aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={cover.image}
                  alt={cover.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:opacity-75 transition-opacity"
                />
              </div>
              <p className="mt-2 text-sm text-center">{cover.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Character Info Form */}
      <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Cover Select</h3>
        <p className="mb-4">We'll help you find the best cover, but first tell us more about {characters.receiver.name}</p>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Occasion Type</label>
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Valentine">Valentine's Day</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Relationship Type</label>
            <select
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="Friend">Friend</option>
              <option value="Romantic">Romantic</option>
              <option value="Family">Family</option>
            </select>
          </div>

          <button
            className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
} 