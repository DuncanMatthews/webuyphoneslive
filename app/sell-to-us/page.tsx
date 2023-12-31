'use client';

import Image from 'next/image';
import { useState } from 'react';
import SustainabilityComponent from './components/featureComponent';
import SmartPhoneBrands from './components/select-smart-phone-brand';
import TradeInSteps from './components/tradeInSteps';
import LaptopBrands from './sell-your-apple-macbook/components/selected-laptop-brands';

export default function SellYouriPhone() {
  const [selectedElectronic, setSelectedElectronic] = useState<string | null>(null);
  const [selectedLaptopBrand, setSelectedLaptopBrand] = useState<string | null>(null);
  const [selectedPhoneBrand, setselectedPhoneBrand] = useState<string | null>(null);

  interface ElectronicOption {
    label: string;
    icon: string;
  }

  const electronicsOptions: ElectronicOption[] = [
    { label: 'Laptops', icon: 'apple-computer.png' },
    { label: 'Smartphone', icon: 'smartphone.png' },
    { label: 'Gadgets', icon: 'gadget.png' },
    { label: 'Tablets', icon: 'tablet.png' },
    { label: 'Smartwatches', icon: 'smartwatch.png' },
    { label: 'Desktop Computers', icon: 'desktop.png' }
  ];

  return (
    <div className="max-w-7xl		">
      <h2 className="mb-4 text-center text-xl font-semibold">Select the electronic category</h2>
      {!selectedElectronic && (
        <div className="my-4 grid grid-cols-2 gap-4 md:grid-cols-3">
          {electronicsOptions.map((electronic) => (
            <button
              key={electronic.label}
              onClick={() => {
                setSelectedElectronic(electronic.label);
              }}
              className="flex flex-col items-center rounded-lg border p-4 shadow-md hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <Image
                src={`/images/categories/${electronic.icon}`}
                alt={electronic.label}
                className="mb-2 h-24 w-24 rounded-lg object-contain"
                height={100}
                width={100}
              />
              <p className="text-center">{electronic.label}</p>
            </button>
          ))}
        </div>
      )}

      {!selectedElectronic && (
        <>
          <div className="">
            <TradeInSteps />
          </div>
          {/* <div className='mt-20 rounded-md'><InfoSection /></div> */}
          <div className=" mt-20">
            <SustainabilityComponent />
          </div>
        </>
      )}

      {selectedElectronic === 'Laptops' && !selectedLaptopBrand && (
        <LaptopBrands setSelectedLaptopBrands={setSelectedLaptopBrand} />
      )}

      {selectedElectronic === 'Smartphone' && (
        <SmartPhoneBrands
          setselectedPhoneBrand={setselectedPhoneBrand}
          selectedPhoneBrand={selectedPhoneBrand}
        />
      )}
    </div>
  );
}
