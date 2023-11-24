// components/PriceSlider.tsx

'use client';

// components/PriceSlider.tsx

// components/PriceSlider.tsx

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useEffect, useState } from 'react';
import SubmitMacbookForm from './submitMacbookForm';

type MacBookModel = 'Macbook Air' | 'Macbook Pro'; // Add other models as needed

interface PriceProps {
  totalPrice: number;
  selectedModel: MacBookModel | null;
  selectedScreenSize: string | null;
  selectedReleaseDate: string | null;
  selectedStorage: string | null;
  selectedProcessor: string | null;
  selectedRam: string | null;
  selectedGPU: string | null;
}

const PriceSlider = ({
  totalPrice,
  selectedModel,
  selectedScreenSize,
  selectedReleaseDate,
  selectedProcessor,
  selectedRam,
  selectedStorage,
  selectedGPU
}: PriceProps) => {
  const [selectedMacbookPrice, setPrice] = useState(0); // Initialize state with totalPrice prop
  useEffect(() => {
    setPrice(totalPrice);
  }, [
    totalPrice,
    selectedModel,
    selectedScreenSize,
    selectedReleaseDate,
    selectedProcessor,
    selectedRam,
    selectedStorage,
    selectedGPU
  ]);

  const maxPrice = Math.round(totalPrice * 1.05);
  const minPrice = Math.round(totalPrice * 0.8);

  const MacbookDetails = {
    selectedModel: selectedModel,
    selectedScreenSize: selectedScreenSize,
    selectedReleaseDate: selectedReleaseDate,
    selectedProcessor: selectedProcessor,
    selectedRam: selectedRam,
    selectedStorage: selectedStorage,
    selectedGPU: selectedGPU,
    selectedMacbookPrice
  };

  return (
    <div className="  p-6  dark:bg-gray-800">
      <div className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
        You will get :
      </div>
      <div className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-200">
        R{selectedMacbookPrice}
      </div>
      <div className="mb-4 text-gray-800 dark:text-gray-300">
        for your{' '}
        <span className="text-green font-bold">
          {selectedModel} {selectedScreenSize} {''}
          {selectedReleaseDate} {selectedProcessor} {selectedRam}
          {'     '}
          {selectedStorage}{' '}
        </span>
      </div>

      <div className="mb-4 text-gray-900 dark:text-gray-100">
        Or you can adjust the price using the slider below
      </div>

      <Slider
        min={minPrice}
        max={maxPrice}
        defaultValue={totalPrice}
        value={selectedMacbookPrice} // bind slider's value to state
        onChange={(value: number | number[]) => {
          // Check if the value is a number and update the state accordingly.
          if (typeof value === 'number') {
            setPrice(value); // update state when slider changes
          }
        }}
        // Styles should be passed via styles prop according to the updated interface
        styles={{
          track: { backgroundColor: '#10B981', height: '6px' },
          handle: { borderColor: '#10B981' },
          rail: { backgroundColor: '#D1D5DB', height: '6px' }
        }}
        className="mb-4"
      />

      <div className="flex justify-between text-gray-800 dark:text-gray-400">
        <span>Instant Cash</span>
        <span>Suggested</span>
        <span>Sells slower</span>
      </div>

      <div className="mt-5">
        <SubmitMacbookForm {...MacbookDetails} />
        <button className=" rounded-md border bg-gray-200 px-4 py-2 text-gray-900 dark:bg-gray-700 dark:text-gray-300">
          No Thanks
        </button>
      </div>
    </div>
  );
};

export default PriceSlider;
