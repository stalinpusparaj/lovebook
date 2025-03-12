'use client';

import React, { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import CharacterCreator from '@/components/character/CharacterCreator';
import AvatarPreview from '@/components/character/AvatarPreview';
import Image from 'next/image';

interface CharacterFeatures {
  skinColor: string;
  hairStyle: number;
  hairColor: string;
  eyeStyle: number;
  eyebrowStyle: number;
  mouthStyle: number;
  facialHair: number;
  outfit: number;
  outfitColor: string;
  glasses: number;
  glassesOpacity: number;
  accessories: number[];
  tattoos: number[];
  backgroundColor: string;
  bodyShape: number;
}

interface Character {
  name: string;
  age: 'Adult' | 'Child';
  gender: 'Feminine' | 'Neutral' | 'Masculine';
  features: CharacterFeatures;
}

export default function CreatePage() {
  const [showCreator, setShowCreator] = useState<'giver' | 'receiver' | null>(null);
  const [giver, setGiver] = useState<Character | null>(null);
  const [receiver, setReceiver] = useState<Character | null>(null);

  const handleCharacterSave = (character: Character | null, type: 'giver' | 'receiver') => {
    if (type === 'giver') {
      setGiver(character);
    } else {
      setReceiver(character);
    }
    setShowCreator(null);
  };

  if (showCreator) {
    return (
      <>
        <Navigation />
        <CharacterCreator
          type={showCreator}
          onSave={(character) => handleCharacterSave(character, showCreator)}
          initialCharacter={showCreator === 'giver' ? giver || undefined : receiver || undefined}
        />
      </>
    );
  }

  // Initial screen when no characters are created
  if (!giver && !receiver) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Welcome To The LoveMoji® Creator
              </h1>
              <p className="text-lg text-gray-600">
                Let's create characters that represent you and your loved one.
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <Image
                src="/images/welcome-couple.svg"
                alt="Welcome Couple"
                width={400}
                height={400}
                priority
                className="transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => setShowCreator('giver')}
                className="px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Create Your Characters
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }

  // Screen when only giver is created
  if (giver && !receiver) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center mb-8">
              Character Creation
            </h1>

            <div className="flex justify-center gap-24">
              {/* Giver Character */}
              <div className="text-center">
                <div className="mb-6 w-64 h-80 relative bg-white rounded-lg shadow-lg overflow-hidden">
                  <AvatarPreview
                    type="giver"
                    features={giver.features}
                    showAnimation={true}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">THE GIVER</h3>
                <p className="text-lg text-gray-600 mb-4">{giver.name}</p>
                <button
                  onClick={() => setShowCreator('giver')}
                  className="px-6 py-2 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                >
                  Edit Character
                </button>
              </div>

              {/* Receiver Character */}
              <div className="text-center">
                <div className="mb-6 w-64 h-80 relative bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-gray-400">
                      <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">THE RECEIVER</h3>
                <p className="text-lg text-gray-400 mb-4">Not Created</p>
                <button
                  onClick={() => setShowCreator('receiver')}
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Create Character
                </button>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  // Final screen when both characters are created
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center mb-8">
            Your Love Story Characters
          </h1>

          <div className="flex justify-center gap-24 mb-12">
            {/* Giver Character */}
            <div className="text-center">
              <div className="mb-6 w-64 h-80 relative bg-white rounded-lg shadow-lg overflow-hidden">
                <AvatarPreview
                  type="giver"
                  features={giver!.features}
                  showAnimation={true}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">THE GIVER</h3>
              <p className="text-lg text-gray-600 mb-4">{giver!.name}</p>
              <button
                onClick={() => setShowCreator('giver')}
                className="px-6 py-2 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
              >
                Edit Character
              </button>
            </div>

            {/* Receiver Character */}
            <div className="text-center">
              <div className="mb-6 w-64 h-80 relative bg-white rounded-lg shadow-lg overflow-hidden">
                <AvatarPreview
                  type="receiver"
                  features={receiver!.features}
                  showAnimation={true}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">THE RECEIVER</h3>
              <p className="text-lg text-gray-600 mb-4">{receiver!.name}</p>
              <button
                onClick={() => setShowCreator('receiver')}
                className="px-6 py-2 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
              >
                Edit Character
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => window.location.href = '/create/cover'}
              className="px-12 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Continue to Book Creation
            </button>
          </div>
        </div>
      </main>
    </>
  );
} 