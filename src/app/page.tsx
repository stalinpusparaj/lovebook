import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/layout/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative bg-pink-100 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  It's Your Love,<br />Tell Your Story.
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Create personalized love books with custom illustrations and heartfelt messages.
                </p>
                <Link
                  href="/create"
                  className="inline-block bg-red-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-red-700"
                >
                  START CREATING
                </Link>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/images/book-preview.svg"
                  alt="Love Book Preview"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              A PERSONALIZED BOOK IN 3 EASY STEPS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4">
                  <Image
                    src="/images/step1.svg"
                    alt="Design Your Characters"
                    width={200}
                    height={200}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. DESIGN YOUR CHARACTERS TO LOOK LIKE YOU</h3>
                <p className="text-gray-600">
                  Choose your style, hair, skin tone and more to create characters that look just like you and your love!
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <Image
                    src="/images/step2.svg"
                    alt="Answer Questions"
                    width={200}
                    height={200}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. ANSWER A FEW QUICK QUESTIONS</h3>
                <p className="text-gray-600">
                  Questions about your relationship help us build your story.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <Image
                    src="/images/step3.svg"
                    alt="Personalize Pages"
                    width={200}
                    height={200}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. PERSONALIZE EACH PAGE TO FIT YOUR STORY</h3>
                <p className="text-gray-600">
                  Add your own text and illustrations to make it uniquely yours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect Gift Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/images/gift-preview.svg"
                  alt="Perfect Gift"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-6">
                  WHY IS LOVEBOOK THE PERFECT GIFT?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>IT'S YOUR PERSONAL LOVE STORY</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>EASY TO BUILD, FUN TO CREATE</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>MAKE YOUR LOVE STORY COME TO LIFE</span>
                  </li>
                </ul>
                <Link
                  href="/create"
                  className="inline-block bg-red-600 text-white px-8 py-4 rounded-md text-lg font-semibold mt-8 hover:bg-red-700"
                >
                  GET STARTED
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">You Say "I Love You" All The Time, Now Tell Them WHY</h2>
            <div className="inline-block bg-gray-100 rounded-lg p-4 mt-4">
              <span className="text-gray-500 line-through mr-2">$65.95</span>
              <span className="text-3xl font-bold text-red-600">$46.53</span>
              <span className="text-sm text-gray-500 ml-1">USD</span>
            </div>
            <Link
              href="/create"
              className="block max-w-xs mx-auto bg-red-600 text-white px-8 py-4 rounded-md text-lg font-semibold mt-8 hover:bg-red-700"
            >
              GET STARTED
            </Link>
          </div>
        </section>
      </main>
    </>
  );
} 