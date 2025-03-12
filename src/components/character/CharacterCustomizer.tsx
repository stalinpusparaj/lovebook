'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import AvatarPreview, { HEAD_STYLES, UPPER_BODY_STYLES, LOWER_BODY_STYLES, SHOES_STYLES } from './AvatarPreview';

interface CharacterFeatures {
  headStyle: string;
  upperBodyStyle: string;
  lowerBodyStyle: string;
  shoesStyle: string;
}

interface CharacterCustomizerProps {
  type: 'giver' | 'receiver';
  onSave: (features: CharacterFeatures) => void;
  onBack: () => void;
}

type CustomizationCategory = 'head' | 'upperBody' | 'lowerBody' | 'shoes';

export default function CharacterCustomizer({ type, onSave, onBack }: CharacterCustomizerProps) {
  const [features, setFeatures] = useState<CharacterFeatures>({
    headStyle: HEAD_STYLES[0],
    upperBodyStyle: UPPER_BODY_STYLES[0],
    lowerBodyStyle: LOWER_BODY_STYLES[0],
    shoesStyle: SHOES_STYLES[0]
  });

  const [activeCategory, setActiveCategory] = useState<CustomizationCategory>('head');

  const getCategoryOptions = (category: CustomizationCategory) => {
    switch (category) {
      case 'head':
        return HEAD_STYLES;
      case 'upperBody':
        return UPPER_BODY_STYLES;
      case 'lowerBody':
        return LOWER_BODY_STYLES;
      case 'shoes':
        return SHOES_STYLES;
      default:
        return [];
    }
  };

  const handleStyleSelect = (style: string) => {
    setFeatures(prev => ({
      ...prev,
      [`${activeCategory}Style`]: style
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            ← Back
          </button>
          <h1 className="text-2xl font-bold">
            Customize Your {type === 'giver' ? 'Giver' : 'Receiver'}
          </h1>
          <button
            onClick={() => onSave(features)}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Preview Mode
          </button>
        </div>

        <div className="flex gap-8">
          {/* Left Side - Preview */}
          <div className="w-1/3 bg-white rounded-lg p-6 shadow-sm">
            <div className="aspect-[3/4] relative">
              <AvatarPreview
                type={type}
                features={features}
                showAnimation={false}
              />
            </div>
            <div className="mt-4 text-center">
              <button
                onClick={() => onSave(features)}
                className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Save Character
              </button>
            </div>
          </div>

          {/* Right Side - Customization Options */}
          <div className="w-2/3">
            {/* Category Tabs */}
            <div className="flex gap-4 mb-6">
              {['head', 'upperBody', 'lowerBody', 'shoes'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category as CustomizationCategory)}
                  className={`px-4 py-2 rounded-full ${
                    activeCategory === category
                      ? 'bg-red-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {category === 'upperBody' ? 'Upper Body' : 
                   category === 'lowerBody' ? 'Lower Body' : 
                   category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Style Options Grid */}
            <div className="grid grid-cols-3 gap-4">
              {getCategoryOptions(activeCategory).map((style) => (
                <button
                  key={style}
                  onClick={() => handleStyleSelect(style)}
                  className={`relative aspect-square bg-white rounded-lg overflow-hidden border-2 ${
                    features[`${activeCategory}Style`] === style
                      ? 'border-red-600'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Image
                    src={`/images/features/${
                      activeCategory === 'head' ? 'upperhead' :
                      activeCategory === 'upperBody' ? 'upperbody' :
                      activeCategory === 'lowerBody' ? 'bottombody' :
                      'bottomshoos'
                    }/${style}.png`}
                    alt={`${activeCategory} style`}
                    fill
                    className="object-contain p-2"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 