import React from 'react';
import Image from 'next/image';
import Navigation from '@/components/layout/Navigation';

interface CartItem {
  id: string;
  title: string;
  image: string;
  price: number;
  pages: number;
  format: string;
  characters: {
    giver: {
      name: string;
      avatar: string;
    };
    receiver: {
      name: string;
      avatar: string;
    };
  };
}

const cartItem: CartItem = {
  id: '1',
  title: 'LoveBook',
  image: '/images/books/birthday-cover.jpg',
  price: 52.88,
  pages: 47,
  format: 'Paperback',
  characters: {
    giver: {
      name: 'Stalin Gates',
      avatar: '/images/characters/giver.png',
    },
    receiver: {
      name: 'prcilla',
      avatar: '/images/characters/receiver.png',
    },
  },
};

export default function CartPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-8">My Cart</h1>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <div className="flex gap-6">
              <div className="w-48">
                <Image
                  src={cartItem.image}
                  alt={cartItem.title}
                  width={200}
                  height={280}
                  className="rounded-lg"
                />
              </div>

              <div className="flex-1">
                <div className="flex justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-semibold">{cartItem.title}</h2>
                    <p className="text-sm text-gray-600">
                      {cartItem.pages} Pages | {cartItem.format}
                    </p>
                  </div>
                  <div className="text-xl font-bold">${cartItem.price}</div>
                </div>

                <div className="flex gap-8 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Image
                        src={cartItem.characters.giver.avatar}
                        alt={cartItem.characters.giver.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <span className="text-sm">{cartItem.characters.giver.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">Giver</span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Image
                        src={cartItem.characters.receiver.avatar}
                        alt={cartItem.characters.receiver.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <span className="text-sm">{cartItem.characters.receiver.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">Receiver</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="text-sm text-blue-600 hover:text-blue-700">Edit</button>
                  <button className="text-sm text-blue-600 hover:text-blue-700">Preview</button>
                  <button className="text-sm text-red-600 hover:text-red-700">Remove</button>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Promotional Code"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="flex justify-between mb-4">
                <span>Subtotal:</span>
                <span className="font-bold">${cartItem.price} USD</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span>Shipping:</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold">${cartItem.price} USD</span>
                </div>
              </div>
            </div>

            <button className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-700">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
} 