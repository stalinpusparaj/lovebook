import React, { useState } from 'react';

interface Character {
  name: string;
  type: 'giver' | 'receiver';
  age: 'adult' | 'child';
  gender: 'feminine' | 'neutral' | 'masculine';
  attributes: {
    faceShape: string;
    hairStyle: string;
    eyes: string;
    nose: string;
    mouth: string;
    outfit: string;
    accessories: string[];
  };
}

interface CharacterCreatorProps {
  onSave: (character: Character) => void;
  type: 'giver' | 'receiver';
  initialCharacter?: Character;
}

export default function CharacterCreator({ onSave, type, initialCharacter }: CharacterCreatorProps) {
  const [character, setCharacter] = useState<Character>(initialCharacter || {
    name: '',
    type,
    age: 'adult',
    gender: 'neutral',
    attributes: {
      faceShape: 'round',
      hairStyle: 'short',
      eyes: 'default',
      nose: 'default',
      mouth: 'smile',
      outfit: 'casual',
      accessories: [],
    },
  });

  const [step, setStep] = useState<'info' | 'customize'>('info');

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('customize');
  };

  const renderInfoForm = () => (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-center">Name The {type === 'giver' ? 'Giver' : 'Receiver'}</h2>
      <form onSubmit={handleInfoSubmit}>
        <input
          type="text"
          value={character.name}
          onChange={(e) => setCharacter({ ...character, name: e.target.value })}
          placeholder="Enter name"
          className="w-full p-2 border rounded-md mb-4"
        />
        
        <div className="mb-4">
          <p className="mb-2">Select Age</p>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setCharacter({ ...character, age: 'adult' })}
              className={`px-4 py-2 rounded-full border ${
                character.age === 'adult' ? 'bg-red-600 text-white' : 'bg-white'
              }`}
            >
              Adult
            </button>
            <button
              type="button"
              onClick={() => setCharacter({ ...character, age: 'child' })}
              className={`px-4 py-2 rounded-full border ${
                character.age === 'child' ? 'bg-red-600 text-white' : 'bg-white'
              }`}
            >
              Child
            </button>
          </div>
        </div>

        <div className="mb-6">
          <p className="mb-2">Select A Template</p>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setCharacter({ ...character, gender: 'feminine' })}
              className={`px-4 py-2 rounded-full border ${
                character.gender === 'feminine' ? 'bg-red-600 text-white' : 'bg-white'
              }`}
            >
              Feminine
            </button>
            <button
              type="button"
              onClick={() => setCharacter({ ...character, gender: 'neutral' })}
              className={`px-4 py-2 rounded-full border ${
                character.gender === 'neutral' ? 'bg-red-600 text-white' : 'bg-white'
              }`}
            >
              Neutral
            </button>
            <button
              type="button"
              onClick={() => setCharacter({ ...character, gender: 'masculine' })}
              className={`px-4 py-2 rounded-full border ${
                character.gender === 'masculine' ? 'bg-red-600 text-white' : 'bg-white'
              }`}
            >
              Masculine
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <button
            type="submit"
            className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Continue
          </button>
          <button
            type="button"
            onClick={() => onSave(character)}
            className="w-full py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );

  const renderCustomizer = () => (
    <div className="max-w-4xl mx-auto bg-white p-8">
      <div className="flex gap-8">
        {/* Preview */}
        <div className="w-1/2 bg-gray-100 rounded-lg p-4">
          <div className="aspect-w-1 aspect-h-1 bg-white rounded-lg">
            {/* Character preview will go here */}
          </div>
        </div>

        {/* Customization Options */}
        <div className="w-1/2">
          <div className="flex flex-wrap gap-4">
            <button className="p-2 rounded-full bg-gray-100">
              <span className="sr-only">Face Shape</span>
              😊
            </button>
            <button className="p-2 rounded-full bg-gray-100">
              <span className="sr-only">Hair</span>
              💇
            </button>
            <button className="p-2 rounded-full bg-gray-100">
              <span className="sr-only">Eyes</span>
              👀
            </button>
            {/* Add more customization buttons */}
          </div>

          <div className="mt-8">
            <button
              onClick={() => onSave(character)}
              className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Save Character
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {step === 'info' ? renderInfoForm() : renderCustomizer()}
    </div>
  );
} 