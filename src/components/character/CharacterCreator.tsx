'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import CharacterCustomizer from './CharacterCustomizer';

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

interface CharacterCreatorProps {
  onSave: (character: Character | null) => void;
  initialCharacter?: Character;
  type: 'giver' | 'receiver';
}

type Step = 'initial' | 'customize';

const defaultFeatures: CharacterFeatures = {
  skinColor: '#FFE0BD',
  hairStyle: 1,
  hairColor: '#2B1700',
  eyeStyle: 1,
  eyebrowStyle: 1,
  mouthStyle: 1,
  facialHair: 0,
  outfit: 1,
  outfitColor: '#FF6B6B',
  glasses: 0,
  glassesOpacity: 100,
  accessories: [],
  tattoos: [],
  backgroundColor: '#FFFFFF',
  bodyShape: 1,
};

export default function CharacterCreator({ onSave, initialCharacter, type }: CharacterCreatorProps) {
  const [step, setStep] = useState<Step>('initial');
  const [character, setCharacter] = useState<Character>(initialCharacter || {
    name: '',
    age: 'Adult',
    gender: 'Neutral',
    features: defaultFeatures,
  });

  const handleInitialSave = () => {
    if (!character.name) {
      alert('Please enter a name');
      return;
    }
    setStep('customize');
  };

  const handleCustomizationSave = (features: CharacterFeatures) => {
    onSave({
      ...character,
      features
    });
  };

  if (step === 'customize') {
    return (
      <CharacterCustomizer
        type={type}
        character={character}
        onSave={handleCustomizationSave}
        onBack={() => setStep('initial')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-md mx-auto px-4 py-8">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/logo.svg"
              alt="LoveBook"
              width={60}
              height={60}
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Create Your {type === 'giver' ? 'Giver' : 'Receiver'} Character
          </h1>
          <p className="text-gray-600">
            Let's start by adding some basic information
          </p>
        </div>

        {/* Name Input */}
        <div className="mb-8">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Character Name
          </label>
          <input
            id="name"
            type="text"
            value={character.name}
            onChange={(e) => setCharacter({ ...character, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            placeholder={`Enter ${type === 'giver' ? 'giver' : 'receiver'} name`}
          />
        </div>

        {/* Age Selection */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Age Category
          </label>
          <div className="grid grid-cols-2 gap-4">
            {(['Adult', 'Child'] as const).map((age) => (
              <button
                key={age}
                onClick={() => setCharacter({ ...character, age })}
                className={`py-3 rounded-lg border-2 transition-colors ${
                  character.age === age
                    ? 'bg-red-600 text-white border-red-600'
                    : 'border-gray-300 text-gray-700 hover:border-red-300'
                }`}
              >
                {age}
              </button>
            ))}
          </div>
        </div>

        {/* Gender Template Selection */}
        <div className="mb-12">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Character Style
          </label>
          <div className="grid grid-cols-3 gap-4">
            {(['Feminine', 'Neutral', 'Masculine'] as const).map((style) => (
              <button
                key={style}
                onClick={() => setCharacter({ ...character, gender: style })}
                className={`py-3 rounded-lg border-2 transition-colors ${
                  character.gender === style
                    ? 'bg-red-600 text-white border-red-600'
                    : 'border-gray-300 text-gray-700 hover:border-red-300'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleInitialSave}
            className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Continue to Customization
          </button>
          <button
            onClick={() => onSave(null)}
            className="w-full py-3 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
} 