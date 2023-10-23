'use client';

import Image from 'next/image';
import { useState } from 'react';

type iPhoneModel =
  | 'iPhone 13'
  | 'iPhone 13 Pro'
  | 'iPhone 13 Pro Max'
  | 'iPhone 13 mini'
  | 'iPhone 12'
  | 'iPhone 12 Pro'
  | 'iPhone 12 Pro Max'
  | 'iPhone 12 mini'
  | 'iPhone 11'
  | 'iPhone 11 Pro'
  | 'iPhone 11 Pro Max'
  | 'iPhone SE (2nd generation)'
  | 'iPhone SE (1st generation)'
  | 'iPhone XR'
  | 'iPhone XS'
  | 'iPhone XS Max'
  | 'iPhone X'
  | 'iPhone 8'
  | 'iPhone 8 Plus';

const iPhoneDetails = {
  'iPhone 13': {
    storage: ['128GB', '256GB', '512GB', '1TB'],
    colors: ['Starlight', 'Midnight', 'Blue', 'Pink', 'Red', 'Green']
  },
  'iPhone 13 Pro': {
    storage: ['128GB', '256GB', '512GB', '1TB'],
    colors: ['Graphite', 'Gold', 'Silver', 'Sierra Blue']
  },
  'iPhone 13 Pro Max': {
    storage: ['128GB', '256GB', '512GB', '1TB'],
    colors: ['Graphite', 'Gold', 'Silver', 'Sierra Blue']
  },
  'iPhone 13 mini': {
    storage: ['128GB', '256GB', '512GB'],
    colors: ['Starlight', 'Midnight', 'Pink', 'Blue', 'Green']
  },
  'iPhone 12': {
    storage: ['64GB', '128GB', '256GB', '512GB'],
    colors: ['Black', 'White', 'Red', 'Green', 'Blue', 'Purple']
  },
  'iPhone 12 Pro': {
    storage: ['128GB', '256GB', '512GB', '1TB'],
    colors: ['Graphite', 'Gold', 'Silver', 'Pacific Blue']
  },
  'iPhone 12 Pro Max': {
    storage: ['128GB', '256GB', '512GB', '1TB'],
    colors: ['Graphite', 'Gold', 'Silver', 'Pacific Blue']
  },
  'iPhone 12 mini': {
    storage: ['64GB', '128GB', '256GB'],
    colors: ['Black', 'White', 'Red', 'Green', 'Blue', 'Purple']
  },
  'iPhone 11': {
    storage: ['64GB', '128GB', '256GB'],
    colors: ['Black', 'White', 'Green', 'Yellow', 'Purple', 'Red']
  },
  'iPhone 11 Pro': {
    storage: ['64GB', '256GB', '512GB'],
    colors: ['Midnight Green', 'Space Gray', 'Silver']
  },
  'iPhone 11 Pro Max': {
    storage: ['64GB', '256GB', '512GB'],
    colors: ['Midnight Green', 'Space Gray', 'Silver']
  },
  'iPhone SE (2nd generation)': {
    storage: ['64GB', '128GB', '256GB'],
    colors: ['Red', 'White', 'Black']
  },
  'iPhone SE (1st generation)': {
    storage: ['32GB', '128GB'],
    colors: ['Red', 'White', 'Space Gray']
  },
  'iPhone XR': {
    storage: ['64GB', '128GB', '256GB'],
    colors: ['Black', 'White', 'Coral', 'Yellow', 'Blue', 'Red']
  },
  'iPhone XS': {
    storage: ['64GB', '256GB', '512GB'],
    colors: ['Gold', 'Space Gray', 'Silver']
  },
  'iPhone XS Max': {
    storage: ['64GB', '256GB', '512GB'],
    colors: ['Gold', 'Space Gray', 'Silver']
  },
  'iPhone X': {
    storage: ['64GB', '256GB'],
    colors: ['Space Gray', 'Silver']
  },
  'iPhone 8': {
    storage: ['64GB', '128GB', '256GB'],
    colors: ['Space Gray', 'Silver', 'Gold']
  },
  'iPhone 8 Plus': {
    storage: ['64GB', '128GB', '256GB'],
    colors: ['Space Gray', 'Silver', 'Gold']
  }
};

const iPhoneConditions = ['Brand New', 'Used - Good', 'Used - Fair', 'Broken'];

export default function SellAppleComputer() {
  const [selectedModel, setSelectedModel] = useState<iPhoneModel | null>(null);
  const [selectedStorage, setSelectedStorage] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);

  const getProgressStage = () => {
    if (selectedCondition) return 5;
    if (selectedColor) return 4;
    if (selectedStorage) return 3;
    if (selectedModel) return 2;
    return 1;
  };

  const progressStage = getProgressStage();

  return (
    <div className="min-h-screen">
      {/* Progress Indicator */}
      <div className="">
        <div className="flex items-center justify-center">
          <div className="mb-4  flex w-3/5 justify-center">
            <div
              className={`flex w-1/5 items-center justify-center rounded-l-lg px-5 py-1 ${
                progressStage >= 1 ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-500'
              }`}
            >
              Model
            </div>
            <div
              className={`flex w-1/5 items-center justify-center px-4 py-2 ${
                progressStage >= 2 ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-500'
              }`}
            >
              Storage
            </div>
            <div
              className={`flex w-1/5 items-center justify-center px-4 py-2 ${
                progressStage >= 3 ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-500'
              }`}
            >
              Color
            </div>
            <div
              className={`flex w-1/5 items-center justify-center px-4 py-2 ${
                progressStage >= 4 ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-500'
              }`}
            >
              Condition
            </div>
            <div
              className={`flex w-1/5 items-center justify-center rounded-r-lg px-4 py-2 ${
                progressStage >= 5 ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-500'
              }`}
            >
              Summary
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="mb-6 text-2xl font-bold">Sell your iPhone</h1>

        {/* Model Selection */}
        {!selectedModel ? (
          <div className="flex flex-col items-center justify-center py-6 ">
            <h2 className="mb-4 text-xl font-semibold">Select your iPhone model</h2>
            <div className="my-4 grid grid-cols-2 gap-4 md:grid-cols-4">
              {Object.keys(iPhoneDetails).map((model) => (
                <button
                  key={model}
                  onClick={() => setSelectedModel(model as iPhoneModel)}
                  className="flex flex-col items-center rounded-lg border p-4 shadow hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <Image
                    width={100}
                    height={100}
                    src={`/images/iphones/${model.toLowerCase().replace(/\s+/g, '')}.png`}
                    alt={model}
                    className="mb-2 rounded-lg object-contain"
                  />
                  <p className="text-center">{model}</p>
                </button>
              ))}
            </div>
          </div>
        ) : // Storage Selection
        !selectedStorage ? (
          <div className="flex flex-col items-center justify-center py-6 ">
            <h2 className="mb-4 py-6 text-xl font-semibold">
              Select storage for your {selectedModel}
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {iPhoneDetails[selectedModel].storage.map((storage) => (
                <button
                  key={storage}
                  onClick={() => setSelectedStorage(storage)}
                  className="rounded-lg border p-4 shadow hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <p className="text-center">{storage}</p>
                </button>
              ))}
            </div>
          </div>
        ) : // Color Selection
        !selectedColor ? (
          <div className="flex flex-col items-center justify-center py-6 ">
            <h2 className="mb-4 py-6 text-xl font-semibold">
              Select color for your {selectedModel} {selectedStorage}
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {iPhoneDetails[selectedModel].colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className="rounded-lg border p-4 shadow hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <p className="text-center">{color}</p>
                </button>
              ))}
            </div>
          </div>
        ) : // Condition Selection
        !selectedCondition ? (
          <div className="flex flex-col items-center justify-center py-6 ">
            <h2 className="mb-4 py-6 text-xl font-semibold">
              What's the condition of your {selectedModel}?
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {iPhoneConditions.map((condition) => (
                <button
                  key={condition}
                  onClick={() => setSelectedCondition(condition)}
                  className="rounded-lg border p-4 shadow hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <p className="text-center">{condition}</p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          // Summary
          <div className="bg-white-900 flex flex-col items-center p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-white">Summary</h2>
            <div className="rounded-lg bg-white p-8 shadow-xl">
              <p className="mb-4 text-gray-800">
                <span className="font-medium text-gray-500">Model:</span>
                <span className="font-semibold">{selectedModel}</span>
              </p>
              <p className="mb-4 text-gray-800">
                <span className="font-medium text-gray-500">Storage:</span>
                <span className="font-semibold">{selectedStorage}</span>
              </p>
              <p className="mb-4 text-gray-800">
                <span className="font-medium text-gray-500">Color:</span>
                <span className="font-semibold">{selectedColor}</span>
              </p>
              <p className="text-gray-800">
                <span className="font-medium text-gray-500">Condition:</span>
                <span className="font-semibold">{selectedCondition}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
