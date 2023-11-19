// components/PriceSlider.tsx

'use client';

// components/PriceSlider.tsx

// components/PriceSlider.tsx

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useEffect, useState } from 'react';
import IPhoneDetails from './submitIphoneForm';

type MacBookModel = 'Macbook Air' | 'Macbook Pro'; // Add other models as needed

interface PriceProps {
  selectediPhoneModel: string | null;
  selectediPhoneStorage: string | null;
  selectediPhoneCondition: string | null;
  selectediPhoneColor: string | null;
  totalIphonePrice: number;
}

const IphonePriceSlider = ({
  selectediPhoneModel,
  selectediPhoneStorage,
  selectediPhoneCondition,
  selectediPhoneColor,
  totalIphonePrice
}: PriceProps) => {
  const [price, setPrice] = useState(0); // Initialize state with totalPrice prop

  useEffect(() => {
    setPrice(totalIphonePrice);
  }, [
    selectediPhoneColor,
    totalIphonePrice,
    selectediPhoneColor,
    selectediPhoneCondition,
    selectediPhoneStorage,
    selectediPhoneModel
  ]);
  console.log(price);

  const [iphoneDetails, setIphoneDetails] = useState({
    selectediPhoneModel: selectediPhoneModel,
    selectediPhoneStorage: selectediPhoneStorage,
    selectediPhoneColor: selectediPhoneColor,
    selectediPhoneCondition: selectediPhoneCondition
  });

  const maxPrice = Math.round(totalIphonePrice * 1.05);
  const minPrice = Math.round(totalIphonePrice * 0.82);

  return (
    <div className="min-h-screen">
      <div className="rounded-md bg-white p-6 shadow-lg dark:bg-gray-800">
        <div className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
          You will get :
        </div>
        <div className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-200">R{price}</div>
        <div className="mb-4 text-gray-800 dark:text-gray-300">
          for your{' '}
          {selectediPhoneModel &&
            selectediPhoneStorage &&
            selectediPhoneCondition &&
            selectediPhoneColor && (
              <div>
                <span className="text-green font-bold">
                  {selectediPhoneModel} {selectediPhoneStorage} {''}
                  {selectediPhoneColor} {selectediPhoneCondition} Condition
                </span>
              </div>
            )}
        </div>

        <div className="mb-4 text-gray-900 dark:text-gray-100">
          Or you can adjust the price using the slider below
        </div>

        <Slider
          min={minPrice}
          max={maxPrice}
          defaultValue={totalIphonePrice}
          value={price} // bind slider's value to state
          onChange={(value) => {
            if (typeof value === 'number') {
              setPrice(value); // update state when slider changes
            }
          }}
          trackStyle={{ backgroundColor: '#10B981', height: '6px' }}
          handleStyle={{ borderColor: '#10B981' }}
          railStyle={{ backgroundColor: '#D1D5DB', height: '6px' }}
          className="mb-4"
        />

        <div className="flex justify-between text-gray-800 dark:text-gray-400">
          <span>Instant Cash</span>
          <span>Suggested</span>
          <span>Sells slower</span>
        </div>

        <div className="mt-4">
          <IPhoneDetails {...iphoneDetails} />
          <button className=" rounded-md border bg-gray-200 px-4 py-2 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300">
            No Thanks
          </button>
        </div>
      </div>
    </div>
  );
};

export default IphonePriceSlider;
