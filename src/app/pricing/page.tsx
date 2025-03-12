import React from 'react';
import Navigation from '@/components/layout/Navigation';

interface ShippingOption {
  name: string;
  price: number;
  deliveryDate: string;
}

const shippingOptions: ShippingOption[] = [
  {
    name: 'STANDARD',
    price: 4.95,
    deliveryDate: 'MAR 15TH',
  },
  {
    name: 'EXPEDITED',
    price: 10.95,
    deliveryDate: 'MAR 12TH - MAR 15TH',
  },
  {
    name: 'EXPRESS',
    price: 15.95,
    deliveryDate: 'MAR 15TH',
  },
];

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center mb-12">PRICING</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="border rounded-lg p-6">
              <div className="text-center mb-4">
                <h2 className="text-xl font-semibold">PAPERBACK</h2>
                <div className="mt-2">
                  <span className="text-3xl font-bold">$46.53</span>
                  <span className="text-gray-500 ml-1">USD</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Recommended</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• High Quality Cover Print</li>
                <li>• Premium Paper Stock</li>
                <li>• Full Color Interior</li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <div className="text-center mb-4">
                <h2 className="text-xl font-semibold">HARDCOVER</h2>
                <div className="mt-2">
                  <span className="text-3xl font-bold">$57.95</span>
                  <span className="text-gray-500 ml-1">USD</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Premium Option</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• Durable Hardcover</li>
                <li>• Premium Paper Stock</li>
                <li>• Full Color Interior</li>
                <li>• Elegant Finish</li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">SHIPPING</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {shippingOptions.map((option) => (
                <div key={option.name} className="border rounded-lg p-4 text-center">
                  <h3 className="font-semibold mb-2">{option.name}</h3>
                  <div className="text-xl font-bold mb-2">${option.price.toFixed(2)}</div>
                  <p className="text-sm text-gray-600">{option.deliveryDate}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </>
  );
} 