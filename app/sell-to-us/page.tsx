'use client';

import { FC, useState } from 'react';

import SellAppleLaptops from './components/Macbooks/selectAppleLaptop';
import SellAppleComputer from './components/selectAppleComputer';
import SelectCategory from './components/selectCategory';
import ComputerBrands from './components/selectComputerBrand';
import SmartPhoneBrands from './components/selectSmartPhoneBrand';
import SellPhone from './components/selectiPhone';

interface SellPhoneProps {
  selectediPhoneModel: iPhoneModel | null;
  setselectediPhoneModel: React.Dispatch<React.SetStateAction<iPhoneModel | null>>;
  selectediPhoneColor: string | null;
  setselectediPhoneColor: React.Dispatch<React.SetStateAction<string | null>>;
  selectediPhoneStorage: string | null;
  setselectediPhoneStorage: React.Dispatch<React.SetStateAction<string | null>>;
  selectediPhoneCondition: string | null;
  setselectediPhoneCondition: React.Dispatch<React.SetStateAction<string | null>>;
}

interface ElectronicOption {
  label: string;
  icon: string;
}

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

type MacBookModel = 'Macbook Air' | 'Macbook Pro';

const ElectronicsSelector: FC = () => {
  const [selectedElectronic, setSelectedElectronic] = useState<string | null>(null);
  const [selectedPhoneBrand, setselectedPhoneBrand] = useState<string | null>(null);
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
  const [selectComputerBrand, setSelectedComputerBrand] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<MacBookModel | null>(null);
  const [selectedScreenSize, setSelectedScreenSize] = useState<string | null>(null);
  const [selectedReleaseDate, setSelectedReleaseDate] = useState<string | null>(null);
  const [selectedProcessor, setSelectedProcessor] = useState<string | null>(null);
  const [selectedRam, SetSelectedRam] = useState<string | null>(null);
  const [selectediPhoneModel, setselectediPhoneModel] = useState<iPhoneModel | null>(null);
  const [selectedStorage, setSelectedStorage] = useState<string | null>(null);
  const [selectedGPU, setSelectedGPU] = useState<string | null>(null);

  const [selectediPhoneStorage, setselectediPhoneStorage] = useState<string | null>(null);
  const [selectediPhoneColor, setselectediPhoneColor] = useState<string | null>(null);
  const [selectediPhoneCondition, setselectediPhoneCondition] = useState<string | null>(null);

  const electronicsOptions: ElectronicOption[] = [
    { label: 'Laptops', icon: 'apple-computer.png' },
    { label: 'Smartphone', icon: 'smartphone.png' },
    { label: 'Gadgets', icon: 'gadget.png' },
    { label: 'Tablets', icon: 'tablet.png' },
    { label: 'Smartwatches', icon: 'smartwatch.png' },
    { label: 'Desktop Computers', icon: 'desktop.png' }
  ];

  return (
    <div className="relative flex h-screen flex-col items-center justify-center md:flex-row">
      {isSlideOverOpen && (
        <div className="absolute left-0 top-0 hidden h-[calc(100vh-4rem)] w-3/12 overflow-y-auto bg-gray-100 text-white shadow-lg md:block">
          <div className="flex h-full flex-col">
            {/* Sidebar Header */}
            <div className="flex items-center justify-start bg-gray-100 px-6 py-4 text-black shadow-md">
              {selectedElectronic && !setselectedPhoneBrand && (
                <button onClick={() => setIsSlideOverOpen(false)} className="button-1">
                  Go Back
                </button>
              )}

              {selectedElectronic && selectedPhoneBrand && (
                <button onClick={() => setselectedPhoneBrand(null)} className="button-2">
                  Go Back
                </button>
              )}
            </div>

            {/* Sidebar Content */}
            {!selectedModel && !selectediPhoneModel && (
              <div className="flex flex-col justify-center p-6">
                <div className="mx-auto mt-10 w-2/3">
                  <div className="rounded-lg border bg-white p-5 shadow-md">
                    <div className="my-4 flex items-center justify-between">
                      <span className="font-medium text-gray-600">Model</span>
                      <span className="font-semibold text-gray-800">{selectedElectronic}</span>
                    </div>

                    <hr className="border-gray-300" />
                    <div className="my-4 flex items-center justify-between">
                      <span className="font-medium text-gray-600">Brand</span>
                      <span className="font-semibold text-gray-800">
                        {selectedPhoneBrand || selectComputerBrand}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedModel && (
              <div className="flex flex-col justify-center p-6">
                <div className="mx-auto mt-10 w-2/3">
                  <div className="rounded-lg border bg-white p-5 shadow-md">
                    <div className="my-4 flex items-center justify-between">
                      <span className="font-medium text-gray-600">Model</span>
                      <span className="font-semibold text-gray-800">{selectedModel}</span>
                    </div>
                    {selectedScreenSize && (
                      <>
                        <hr className="border-gray-300" />
                        <div className="my-4 flex items-center justify-between">
                          <span className="font-medium text-gray-600">ScreenSize</span>
                          <span className="font-semibold text-gray-800">{selectedScreenSize}</span>
                        </div>
                      </>
                    )}

                    {selectedReleaseDate && (
                      <>
                        <hr className="border-gray-300" />
                        <div className="my-4 flex items-center justify-between">
                          <span className="font-medium text-gray-600">Release Year</span>
                          <span className="font-semibold text-gray-800">{selectedReleaseDate}</span>
                        </div>
                      </>
                    )}

                    {selectedProcessor && (
                      <>
                        <hr className="border-gray-300" />
                        <div className="my-4 flex items-center justify-between">
                          <span className="font-medium text-gray-600">Processor</span>
                          <span className="font-semibold text-gray-800">{selectedProcessor}</span>
                        </div>
                      </>
                    )}

                    {selectedRam && (
                      <>
                        <hr className="border-gray-300" />
                        <div className="my-4 flex items-center justify-between">
                          <span className="font-medium text-gray-600">Ram</span>
                          <span className="font-semibold text-gray-800">{selectedRam}</span>
                        </div>
                      </>
                    )}
                    {selectedStorage && (
                      <>
                        <hr className="border-gray-300" />
                        <div className="my-4 flex items-center justify-between">
                          <span className="font-medium text-gray-600">Storage</span>
                          <span className="font-semibold text-gray-800">{selectedStorage}</span>
                        </div>
                      </>
                    )}
                    {selectedGPU && (
                      <>
                        <hr className="border-gray-300" />
                        <div className="my-4 flex items-center justify-between">
                          <span className="font-medium text-gray-600">Ram</span>
                          <span className="font-semibold text-gray-800">{selectedGPU}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {selectediPhoneModel && (
              <div className="flex flex-col justify-center p-6">
                <div className="mx-auto mt-10 w-2/3">
                  <div className="rounded-lg border bg-white p-5 shadow-md">
                    <div className="my-4 flex items-center justify-between">
                      <span className="font-medium text-gray-600">Model</span>
                      <span className="font-semibold text-gray-800">{selectedElectronic}</span>
                    </div>

                    <hr className="border-gray-300" />
                    <div className="my-4 flex items-center justify-between">
                      <span className="font-medium text-gray-600">Brand</span>
                      <span className="font-semibold text-gray-800">{selectedPhoneBrand}</span>
                    </div>

                    {selectediPhoneStorage && (
                      <>
                        <hr className="border-gray-300" />
                        <div className="my-4 flex items-center justify-between">
                          <span className="font-medium text-gray-600">Storage</span>
                          <span className="font-semibold text-gray-800">
                            {selectediPhoneStorage}
                          </span>
                        </div>
                      </>
                    )}
                    {selectediPhoneColor && (
                      <>
                        <hr className="border-gray-300" />
                        <div className="my-4 flex items-center justify-between">
                          <span className="font-medium text-gray-600">Color</span>
                          <span className="font-semibold text-gray-800">{selectediPhoneColor}</span>
                        </div>
                      </>
                    )}
                    {selectediPhoneCondition && (
                      <>
                        <hr className="border-gray-300" />
                        <div className="my-4 flex items-center justify-between">
                          <span className="font-medium text-gray-600">Condition</span>
                          <span className="font-semibold text-gray-800">
                            {selectediPhoneCondition}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Sidebar Footer */}
            <div className="mt-auto p-6">
              <button
                onClick={() => setIsSlideOverOpen(false)}
                className="rounded bg-white px-4 py-2 text-red-600 shadow hover:text-red-800"
              >
                Close Slide-over
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="h-full w-full px-4 md:w-2/6">
        <h1 className="mx-auto mb-6 text-center text-2xl font-bold">
          Sell your device in seconds!
        </h1>

        {!selectedElectronic ? (
          <SelectCategory
            electronicsOptions={electronicsOptions}
            setSelectedElectronic={(electronic) => {
              setSelectedElectronic(electronic);
              setIsSlideOverOpen(true); // Open the slide-over when a category is selected
            }}
            setIsSlideOverOpen={setIsSlideOverOpen}
          />
        ) : selectedElectronic === 'Smartphone' ? (
          !selectedPhoneBrand ? (
            <SmartPhoneBrands
              setIsSlideOverOpen={setIsSlideOverOpen}
              setselectedPhoneBrand={setselectedPhoneBrand}
            />
          ) : selectedPhoneBrand === 'Apple' ? (
            <SellPhone
              selectediPhoneModel={selectediPhoneModel}
              setselectediPhoneModel={setselectediPhoneModel}
              selectediPhoneColor={selectediPhoneColor}
              setselectediPhoneColor={setselectediPhoneColor}
              selectediPhoneStorage={selectediPhoneStorage}
              setselectediPhoneStorage={setselectediPhoneStorage}
              selectediPhoneCondition={selectediPhoneCondition}
              setselectediPhoneCondition={setselectediPhoneCondition}
            />
          ) : (
            // You can add more conditions or a default for other phone brands here
            <div>Select a valid phone brand.</div>
          )
        ) : selectedElectronic === 'Desktop Computers' ? (
          !selectComputerBrand ? (
            <ComputerBrands setSelectedComputerBrand={setSelectedComputerBrand} />
          ) : selectComputerBrand === 'Apple' ? (
            <SellAppleComputer />
          ) : (
            // You can add more conditions or a default for other computer brands here
            <div>Select a valid computer brand.</div>
          )
        ) : selectedElectronic === 'Laptops' ? (
          !selectComputerBrand ? (
            <ComputerBrands setSelectedComputerBrand={setSelectedComputerBrand} />
          ) : selectComputerBrand === 'Apple' ? (
            <SellAppleLaptops
              selectedGPU={selectedGPU}
              setSelectedGPU={setSelectedGPU}
              selectedModel={selectedModel}
              setSelectedRam={SetSelectedRam}
              selectedRam={selectedRam}
              setSelectedModel={setSelectedModel}
              selectedScreenSize={selectedScreenSize}
              setSelectedScreenSize={setSelectedScreenSize}
              selectedReleaseDate={selectedReleaseDate}
              setSelectedReleaseDate={setSelectedReleaseDate}
              selectedStorage={selectedStorage}
              setSelectedStorage={setSelectedStorage}
              setSelectedProcessor={setSelectedProcessor}
              selectedProcessor={selectedProcessor}
            />
          ) : (
            <div>Select a valid laptop brand.</div>
          )
        ) : (
          <div>Select a valid electronic category.</div>
        )}
      </div>
    </div>
  );
};

export default ElectronicsSelector;
