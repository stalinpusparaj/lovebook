'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface CharacterFeatures {
  headStyle: string;
  upperBodyStyle: string;
  lowerBodyStyle: string;
  shoesStyle: string;
}

// Available image options for each section - simplified to use new PNG files
export const HEAD_STYLES = ['1', '2'];
export const UPPER_BODY_STYLES = ['1', '2'];
export const LOWER_BODY_STYLES = ['1', '2'];
export const SHOES_STYLES = ['1', '2'];

interface AvatarPreviewProps {
  type: 'giver' | 'receiver';
  features: CharacterFeatures;
  showAnimation?: boolean;
}

export default function AvatarPreview({ type, features, showAnimation = true }: AvatarPreviewProps) {
  const [isWaving, setIsWaving] = useState(false);

  // Wave animation
  useEffect(() => {
    if (!showAnimation) return;

    const waveInterval = setInterval(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 1000);
    }, 8000);

    return () => clearInterval(waveInterval);
  }, [showAnimation]);

  return (
    <div className={`relative w-full h-full ${isWaving ? 'animate-bounce' : ''}`}>
      {/* Container for better alignment */}
      <div className="absolute inset-0 flex flex-col items-center">
        {/* Head Section */}
        <div className="relative w-[35%] h-[22%] -mb-[2%]">
          <Image
            src={`/images/features/upperhead/fh${features.headStyle}.png`}
            alt="Head"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Upper Body Section */}
        <div className="relative w-[40%] h-[38%] -mt-[1%]">
          <Image
            src={`/images/features/upperbody/fu${features.upperBodyStyle}.png`}
            alt="Upper Body"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Lower Body Section */}
        <div className="relative w-[35%] h-[32%] -mt-[1%]">
          <Image
            src={`/images/features/bottombody/fb${features.lowerBodyStyle}.png`}
            alt="Lower Body"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Shoes Section - Split into left and right */}
        <div className="relative w-full h-[10%] flex justify-center -mt-[0.5%]">
          {/* Left Shoe */}
          <div className="relative w-[15%] h-full -mr-[3%]">
            <Image
              src={`/images/features/bottomshoos/fs${features.shoesStyle}.png`}
              alt="Left Shoe"
              fill
              className="object-contain scale-x-[-1]" // Flip horizontally for left shoe
              priority
            />
          </div>
          {/* Right Shoe */}
          <div className="relative w-[15%] h-full -ml-[3%]">
            <Image
              src={`/images/features/bottomshoos/fs${features.shoesStyle}.png`}
              alt="Right Shoe"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
} 