// components/PriceSlider.tsx

'use client';

// components/PriceSlider.tsx

// components/PriceSlider.tsx

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useEffect, useState } from 'react';
import IPhoneDetails from './submitIphoneForm';

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

interface IphonePriceSliderProps {
  selectediPhoneModel: iPhoneModel | null;
  selectediPhoneStorage: string | null;
  selectediPhoneCondition: string | null;
  selectediPhoneColor: string | null;
  totalIphonePrice: number;
}

const IphonePriceSlider: React.FC<IphonePriceSliderProps> = ({
  selectediPhoneModel,
  selectediPhoneStorage,
  selectediPhoneCondition,
  selectediPhoneColor,
  totalIphonePrice
}: IphonePriceSliderProps) => {
  const [selectediPhonePrice, setPrice] = useState(0); // Initialize state with totalPrice prop
  const [instantCash, setInstantCash] = useState(false); // New state variable for instantCash

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

  const iphoneDetails = {
    selectediPhoneModel,
    selectediPhoneStorage,
    selectediPhoneCondition,
    selectediPhoneColor,
    selectediPhonePrice,
    instantCash
  };

  const maxPrice = Math.round(totalIphonePrice * 1.05);
  const minPrice = Math.round(totalIphonePrice * 0.82);

  useEffect(
    () => {
      if (selectediPhonePrice === minPrice) {
        setInstantCash(true);
      } else {
        setInstantCash(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectediPhonePrice]
  );

  return (
    <div className="  p-6  dark:bg-gray-800">
      <div className="gray-100 mb-4 text-xl font-semibold text-gray-900">You will get :</div>
      <div className="gray-200 mb-4 text-4xl font-bold text-gray-900">R{selectediPhonePrice}</div>
      <div className="gray-300 mb-4 text-gray-800">
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

      <div className="gray-100 mb-4 text-gray-900">
        Or you can adjust the price using the slider below
      </div>

      <Slider
        min={minPrice}
        max={maxPrice}
        defaultValue={totalIphonePrice}
        value={selectediPhonePrice} // bind slider's value to state
        onChange={(value) => {
          if (typeof value === 'number') {
            setPrice(value); // update state when slider changes
          }
        }}
        className="mb-4"
      />

      <div className="gray-400 flex justify-between text-gray-800">
        <span onClick={() => setPrice(minPrice)} style={{ cursor: 'pointer' }}>
          Instant Cash
        </span>
        <span onClick={() => setPrice(totalIphonePrice)} style={{ cursor: 'pointer' }}>
          Sells faster
        </span>
        <span>Sells slower</span>
      </div>

      <div className="mt-4">
        <IPhoneDetails {...iphoneDetails} />
        <button className=" gray-300 rounded-md border bg-gray-200 px-4 py-2 text-gray-900 hover:bg-gray-300 dark:bg-gray-700">
          No Thanks
        </button>
      </div>
    </div>
  );
};

export default IphonePriceSlider;
