'use client';

import SignUp from 'app/signup/page';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import IphonePriceSlider from './components/select-final-iphone-price';
import SideBar from './components/sidebar';

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

interface iPhoneDataItem {
  model: string; // The model should be of type string
  basePrice: number;
  storage: {
    [key: string]: string;
  };
  colors: string[];
  exteriorCondition: {
    [key: string]: string;
  };
}

const SellPhone: React.FC = () => {
  const [selectediPhoneModel, setselectediPhoneModel] = useState<iPhoneModel | null>(null);
  const [selectediPhoneColor, setselectediPhoneColor] = useState<string | null>(null);
  const [selectediPhoneStorage, setselectediPhoneStorage] = useState<string | null>(null);
  const [selectediPhoneCondition, setselectediPhoneCondition] = useState<string | null>(null);

  const getProgressStage = () => {
    if (selectediPhoneCondition) return 5;
    if (selectediPhoneColor) return 4;
    if (selectediPhoneStorage) return 3;
    if (selectediPhoneModel) return 2;
    return 1;
  };

  const [data, setData] = useState<iPhoneDataItem[]>([]);

  const progressStage = getProgressStage();
  const [selectediPhoneModelPrice, setSelectediPhoneModelPrice] = useState<number | null>(null);
  const [selectedStorageOptionPrice, setSelectedStorageOptionPrice] = useState<number | null>(null);
  const [selectediPhoneConditionPrice, setSelectediPhoneConditionPrice] = useState<number | null>(
    null
  );

  useEffect(() => {
    async function getData() {
      const res = await fetch('/images/data/iphonedata.json');
      const data = await res.json();

      console.log(Object.keys(data));

      // Store the data in a state variable
      setData(data);
    }

    getData();
  }, []);

  const { data: session } = useSession();

  const uniqueModels = Array.from(new Set(data.map((item: iPhoneDataItem) => item.model)));
  const [totalIphonePrice, setTotalIphonePrice] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      if (selectediPhoneModelPrice && selectedStorageOptionPrice && selectediPhoneConditionPrice) {
        setTotalIphonePrice(
          selectediPhoneModelPrice + selectedStorageOptionPrice + selectediPhoneConditionPrice
        );
      }
    };
    calculateTotalPrice();
    console.log('this is total iphone price', totalIphonePrice);
  }, [
    selectediPhoneModelPrice,
    selectedStorageOptionPrice,
    selectediPhoneConditionPrice,
    totalIphonePrice
  ]);

  return (
    <div className="dark:text-white">
      {/* Progress Indicator */}
      <div className="min-w-fit	">
        <div className="flex min-w-fit  items-center	justify-center">
          <div className="w-5/5  mb-4 flex justify-center">
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

      {selectediPhoneModel && (
        <div>
          <SideBar
            selectediPhoneModel={selectediPhoneModel}
            selectediPhoneStorage={selectediPhoneStorage}
            selectediPhoneColor={selectediPhoneColor}
            selectediPhoneCondition={selectediPhoneCondition}
          />
        </div>
      )}

      <div className="dark:text-white">
        {/* Model Selection */}
        {!selectediPhoneModel && (
          <div className="flex flex-col items-center justify-center py-6 ">
            <h2 className="mb-4 text-xl font-semibold">Select your iPhone model</h2>
            <div className="grid grid-cols-2 gap-4 focus:ring-indigo-500 md:grid-cols-4">
              {!selectediPhoneModel &&
                uniqueModels.map((models, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setselectediPhoneModel(models as iPhoneModel);
                      setSelectediPhoneModelPrice(
                        data.find((item) => item.model === models)?.basePrice ?? null
                      );
                    }}
                    className={`flex flex-col items-center rounded-lg  border p-6 shadow focus:ring-indigo-500 ${
                      selectediPhoneModel === models
                        ? 'bg-indigo-500 text-white'
                        : 'hover:bg-gray-200 hover:text-black'
                    }`}
                  >
                    <Image
                      width={100}
                      height={100}
                      src={`/images/iphones/${models.toLowerCase().replace(/\s+/g, '')}.png`}
                      alt={models}
                      className="mb-2 rounded-lg object-contain"
                    />
                    <p className="text-center">{models}</p>
                  </button>
                ))}
            </div>
          </div>
        )}
        {selectediPhoneModel && !selectediPhoneStorage && (
          <div className="min-h-screen space-x-3 text-center">
            <div className="py-4 text-2xl">Select your iPhone Storage</div>
            {Array.from(
              new Set(
                data
                  .filter((item) => item.model === selectediPhoneModel)
                  .map((item) => Object.keys(item.storage))
                  .flat()
              )
            ).map((storageOption) => {
              const selectedStorageOption = data.find(
                (item) => item.model === selectediPhoneModel && item.storage[storageOption]
              );
              return (
                <button
                  key={storageOption}
                  onClick={() => {
                    setselectediPhoneStorage(storageOption);
                    setSelectedStorageOptionPrice(
                      selectedStorageOption?.storage[storageOption]
                        ? Number(selectedStorageOption.storage[storageOption])
                        : null
                    );
                  }}
                  className="rounded border bg-slate-200 hover:bg-slate-300  focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <p className="rounded border px-6 py-2 text-black">{storageOption}</p>
                </button>
              );
            })}
          </div>
        )}

        {selectediPhoneModel && selectediPhoneStorage && !selectediPhoneColor && (
          <div className="min-h-screen space-x-3 space-y-3 text-center">
            <div className="py-4 text-2xl">Select your iPhone Color</div>
            {Array.from(
              new Set(
                data
                  .filter((item) => item.model === selectediPhoneModel)
                  .map((item) => item.colors)
                  .flat()
              )
            ).map((colorOption) => (
              <button
                key={colorOption}
                onClick={() => setselectediPhoneColor(colorOption)}
                className="rounded border bg-slate-200  hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <p className="rounded border px-6 py-2 text-black">{colorOption}</p>
              </button>
            ))}
          </div>
        )}

        {selectediPhoneModel &&
          selectediPhoneStorage &&
          selectediPhoneColor &&
          !selectediPhoneCondition && (
            <div className="min-h-screen space-x-3 space-y-3 text-center">
              <div className="py-4 text-2xl">Select your iPhone Condition</div>
              {selectediPhoneModel &&
                selectediPhoneColor &&
                data.find(
                  (item) =>
                    item.model === selectediPhoneModel && item.colors.includes(selectediPhoneColor)
                )?.exteriorCondition &&
                Object.keys(
                  data.find(
                    (item) =>
                      item.model === selectediPhoneModel &&
                      item.colors.includes(selectediPhoneColor)
                  )!.exteriorCondition // add null assertion operator here
                ).map((exteriorConditionOption) => {
                  const selectediPhoneCondition = data.find(
                    (item) =>
                      item.model === selectediPhoneModel &&
                      item.colors.includes(selectediPhoneColor) &&
                      item.exteriorCondition[exteriorConditionOption]
                  );
                  return (
                    <button
                      key={exteriorConditionOption}
                      onClick={() => {
                        setselectediPhoneCondition(exteriorConditionOption);
                        setSelectediPhoneConditionPrice(
                          selectediPhoneCondition?.exteriorCondition[exteriorConditionOption]
                            ? Number(
                                selectediPhoneCondition.exteriorCondition[exteriorConditionOption]
                              )
                            : null
                        );
                      }}
                      className="hover-bg-slate-300 rounded border  bg-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <p className="rounded border px-6 py-2 text-black">
                        {exteriorConditionOption}
                      </p>
                    </button>
                  );
                })}
            </div>
          )}
        {selectediPhoneModel &&
          selectediPhoneStorage &&
          selectediPhoneColor &&
          selectediPhoneCondition &&
          !session && (
            <div>
              <SignUp />
            </div>
          )}
        {selectediPhoneModel &&
          selectediPhoneStorage &&
          selectediPhoneColor &&
          selectediPhoneCondition &&
          session && (
            <div>
              <IphonePriceSlider
                selectediPhoneModel={selectediPhoneModel}
                selectediPhoneStorage={selectediPhoneStorage}
                selectediPhoneCondition={selectediPhoneCondition}
                selectediPhoneColor={selectediPhoneColor}
                totalIphonePrice={totalIphonePrice}
              />
            </div>
          )}
      </div>
    </div>
  );
};

export default SellPhone;
