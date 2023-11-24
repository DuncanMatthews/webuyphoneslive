'use client';

import SignUp from 'app/signup/page';
import MacBookModel from 'app/utils/model/macbook';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import SellMacbookSidebar from './components/SellMacbookSidebar';
import PriceSlider from './components/selectFinalMacbookPrice';

type MacBookModel = 'Macbook Air' | 'Macbook Pro'; // Add other models as needed

interface MacBookDataItem {
  model: MacBookModel;
  screenSize: string;
  releaseDate: string;
  basePrice: number;
  processor: {
    type: string;
    price: number | null;
  };
  ram: {
    size: string;
    price: number | null;
  };
  storage: {
    type: string;
    price: number | null;
  };
  gpu: {
    type: string | null;
    price: number | null;
  };
}

interface SellAppleLaptopsProps {
  selectedModel: MacBookModel | null;
  setSelectedModel: React.Dispatch<React.SetStateAction<MacBookModel | null>>;
  selectedScreenSize: string | null;
  setSelectedScreenSize: React.Dispatch<React.SetStateAction<string | null>>;
  selectedReleaseDate: string | null;
  setSelectedReleaseDate: React.Dispatch<React.SetStateAction<string | null>>;
  selectedStorage: string | null;
  setSelectedStorage: React.Dispatch<React.SetStateAction<string | null>>;
  selectedProcessor: string | null;
  setSelectedProcessor: React.Dispatch<React.SetStateAction<string | null>>;
  setSelectedRam: React.Dispatch<React.SetStateAction<string | null>>;
  selectedRam: string | null;
  selectedGPU: string | null;
  setSelectedGPU: React.Dispatch<React.SetStateAction<string | null>>;
}

const SellAppleLaptops: React.FC = () => {
  const [data, setData] = useState<MacBookDataItem[]>([]);

  const [totalPrice, setTotalPRice] = useState<number | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    async function getData() {
      const res = await fetch('/images/data/data.json');
      const data = await res.json();

      // Store the data in a state variable
      setData(data);
    }

    getData();
  }, []);

  const [selectedModel, setSelectedModel] = useState<MacBookModel | null>(null);
  const [selectedScreenSize, setSelectedScreenSize] = useState<string | null>(null);
  const [selectedReleaseDate, setSelectedReleaseDate] = useState<string | null>(null);
  const [selectedStorage, setSelectedStorage] = useState<string | null>(null);
  const [selectedProcessor, setSelectedProcessor] = useState<string | null>(null);
  const [selectedRam, setSelectedRam] = useState<string | null>(null);
  const [selectedGPU, setSelectedGPU] = useState<string | null>(null);

  const uniqueModels: MacBookModel[] = Array.from(
    new Set(data.map((item: MacBookDataItem) => item.model))
  );

  function getTotalPrice(
    selectedModel: MacBookModel | null,
    selectedScreenSize: string | null,
    selectedReleaseDate: string | null,
    selectedProcessor: string | null,
    selectedRam: string | null,
    selectedStorage: string | null,
    selectedGPU: string | null
  ): number | null {
    if (
      !selectedModel ||
      !selectedScreenSize ||
      !selectedReleaseDate ||
      (!selectedProcessor && !selectedRam && !selectedStorage && !selectedGPU)
    ) {
      return null;
    }

    const matchedItems = data.filter(
      (item) =>
        item.model === selectedModel &&
        item.screenSize === selectedScreenSize &&
        item.releaseDate === selectedReleaseDate &&
        item.processor.type === selectedProcessor &&
        item.ram.size === selectedRam &&
        item.storage.type === selectedStorage &&
        item.gpu.type === selectedGPU
    );

    console.log('Matched Items:', matchedItems);

    if (matchedItems.length > 0) {
      const totalPrice = matchedItems.reduce((acc, item) => {
        const processorPrice = item.processor && item.processor.price ? item.processor.price : 0;
        const ramPrice = item.ram && item.ram.price ? item.ram.price : 0;
        const storagePrice = item.storage && item.storage.price ? item.storage.price : 0;
        const gpuPrice = item.gpu && item.gpu.price ? item.gpu.price : 0;
        return acc + item.basePrice + processorPrice + ramPrice + storagePrice + gpuPrice;
      }, 0);

      console.log('This is total price', totalPrice);
      return totalPrice;
    } else {
      console.log('No matching item found');
      return null;
    }
  }

  useEffect(() => {
    const price = getTotalPrice(
      selectedModel,
      selectedScreenSize,
      selectedReleaseDate,
      selectedProcessor,
      selectedRam,
      selectedStorage,
      selectedGPU
    );
    if (price !== null) {
      setTotalPRice(price);
      console.log(totalPrice);
    }
  }, [selectedStorage, selectedGPU]);

  // ... existing code

  const getProgressStage = () => {
    if (selectedGPU) return 7; // Final step
    if (selectedStorage) return 6;
    if (selectedRam) return 5;
    if (selectedProcessor) return 4;
    if (selectedReleaseDate) return 3;
    if (selectedScreenSize) return 2;
    if (selectedModel) return 1;
    return 0; // Initial stage, no selection made
  };

  const progressStage = getProgressStage();

  return (
    <div className="dark:text-white">
      {/* Select Model */}

      {/* Progress Indicator */}
      <div className="min-w-fit	">
        <div className="flex min-w-fit  items-center	justify-center">
          <div className="7/7  mb-4 flex justify-center">
            {/* Model */}
            <div
              className={`w-1/7 flex items-center justify-center rounded-l-lg

              px-1 py-2 pl-2 text-sm md:px-4 md:py-2 ${
                progressStage >= 1 ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-500'
              }`}
            >
              Model
            </div>
            {/* Screen Size */}
            <div
              className={`w-1/7 flex items-center justify-center px-1 py-2 text-sm md:px-4 md:py-2 ${
                progressStage >= 2 ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-500'
              }`}
            >
              Screen Size
            </div>
            {/* Release Date */}
            <div
              className={`w-1/7 flex items-center justify-center px-1 py-2 text-sm md:px-4 md:py-2 ${
                progressStage >= 3 ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-500'
              }`}
            >
              Release Date
            </div>
            {/* Processor */}
            <div
              className={`w-1/7 flex items-center justify-center px-1 py-2 text-sm md:px-4 md:py-2 ${
                progressStage >= 4 ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-500'
              }`}
            >
              Processor
            </div>
            {/* RAM */}
            <div
              className={`w-1/7 flex items-center justify-center px-1 py-2 text-sm md:px-4 md:py-2 ${
                progressStage >= 5 ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-500'
              }`}
            >
              RAM
            </div>
            {/* Storage */}
            <div
              className={`w-1/7 flex items-center justify-center px-1 py-2 text-sm md:px-4 md:py-2 ${
                progressStage >= 6 ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-500'
              }`}
            >
              Storage
            </div>
            {/* GPU */}
            <div
              className={`w-1/7 flex items-center justify-center rounded-r-lg px-1 py-2 pr-2 text-sm

md:px-4 md:py-2 ${progressStage >= 7 ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-500'}`}
            >
              GPU
            </div>
          </div>
        </div>

        {selectedModel && (
          <SellMacbookSidebar
            setSelectedGPU={setSelectedGPU}
            setSelectedReleaseDate={setSelectedReleaseDate}
            setSelectedScreenSize={setSelectedScreenSize}
            setSelectedModel={setSelectedModel}
            setSelectedRam={setSelectedRam}
            setSelectedProcessor={setSelectedProcessor}
            setSelectedStorage={setSelectedStorage}
            selectedReleaseDate={selectedReleaseDate}
            selectedModel={selectedModel}
            selectedGPU={selectedGPU}
            selectedRam={selectedRam}
            selectedScreenSize={selectedScreenSize}
            selectedProcessor={selectedProcessor}
            selectedStorage={selectedStorage}
          />
        )}

        {!selectedModel && (
          <div className="flex flex-wrap items-center justify-center space-x-3 space-y-2">
            {uniqueModels.map((model) => (
              <button
                key={model}
                onClick={() => setSelectedModel(model)}
                className={`flex flex-col items-center rounded-lg bg-white p-4 shadow ring ring-transparent ${
                  selectedModel === model
                    ? 'text-white hover:ring-2 hover:ring-indigo-500'
                    : 'hover:text-black hover:ring-2 hover:ring-indigo-500'
                }`}
              >
                <div className="relative h-32 w-32">
                  <Image
                    src={`/images/Macbooks/${model.toLowerCase().replace(/\s+/g, '')}.png`}
                    alt={model}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <p className="text-center">{model}</p>
              </button>
            ))}
          </div>
        )}
        {/* Select Screen Size */}
        {selectedModel && !selectedScreenSize && (
          <div className="space-x-3 text-center">
            <div className="py-4 text-2xl">Select your Macbook Screen Size</div>
            {Array.from(
              new Set(
                data
                  .filter((item: MacBookDataItem) => item.model === selectedModel)
                  .map((item: MacBookDataItem) => item.screenSize)
              )
            ).map((screenSize) => (
              <button
                key={screenSize}
                onClick={() => setSelectedScreenSize(screenSize)}
                className="rounded bg-white shadow transition duration-300 ease-in-out hover:bg-slate-300 hover:ring-2 hover:ring-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <p className="rounded px-6 py-2 text-black">{screenSize}</p>
              </button>
            ))}
          </div>
        )}
        {/* Select Release Date */}
        {selectedModel && selectedScreenSize && !selectedReleaseDate && (
          <div className="space-x-3 space-y-3 text-center ">
            <div className="py-4 text-2xl">Select your Macbook Year</div>
            {Array.from(
              new Set(
                data
                  .filter(
                    (item) => item.model === selectedModel && item.screenSize === selectedScreenSize
                  )
                  .map((item) => item.releaseDate)
              )
            ).map((releaseDate) => (
              <button
                key={releaseDate}
                onClick={() => setSelectedReleaseDate(releaseDate)}
                className="rounded bg-white shadow transition duration-300 ease-in-out hover:bg-slate-300 hover:ring-2 hover:ring-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <p className="rounded border-slate-900 px-6 py-2	 text-black">{releaseDate}</p>
              </button>
            ))}
          </div>
        )}
        {/* Select Processor */}
        {selectedModel && selectedScreenSize && selectedReleaseDate && !selectedProcessor && (
          <div className="space-x-3 space-y-3 text-center ">
            <div className="py-4 text-2xl">Select your Macbook Processor</div>
            {Array.from(
              new Set(
                data
                  .filter(
                    (item: MacBookDataItem) =>
                      item.model === selectedModel &&
                      item.screenSize === selectedScreenSize &&
                      item.releaseDate === selectedReleaseDate
                  )
                  .map((item: MacBookDataItem) => item.processor.type)
              )
            ).map((processorType) => (
              <button
                key={processorType}
                onClick={() => setSelectedProcessor(processorType)}
                className="rounded bg-white shadow transition duration-300 ease-in-out hover:bg-slate-300 hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <p className="rounded border-slate-900 px-6 py-2	 text-black">{processorType}</p>
              </button>
            ))}
          </div>
        )}
        {/* Select RAM */}
        {selectedModel &&
          selectedScreenSize &&
          selectedReleaseDate &&
          selectedProcessor &&
          !selectedRam && (
            <div className="space-x-3 space-y-3 text-center ">
              <div className="py-4 text-2xl">Select your Macbook Ram Size</div>
              {Array.from(
                new Set(
                  data
                    .filter(
                      (item: MacBookDataItem) =>
                        item.model === selectedModel &&
                        item.screenSize === selectedScreenSize &&
                        item.releaseDate === selectedReleaseDate &&
                        item.processor.type === selectedProcessor
                    )
                    .map((item: MacBookDataItem) => item.ram.size)
                )
              ).map((ramSize) => (
                <button
                  key={ramSize}
                  onClick={() => setSelectedRam(ramSize)}
                  className="rounded bg-white shadow transition duration-300 ease-in-out hover:bg-slate-300 hover:ring-2 hover:ring-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <p className="rounded border-slate-900 px-6 py-2	 text-black">{ramSize}</p>
                </button>
              ))}
            </div>
          )}
        {/* Select Storage */}
        {selectedModel &&
          selectedScreenSize &&
          selectedReleaseDate &&
          selectedProcessor &&
          selectedRam &&
          !selectedStorage && (
            <div className="space-x-3 space-y-3 text-center ">
              <div className="py-4 text-2xl">Select your Macbook Storage Size</div>
              {Array.from(
                new Set(
                  data
                    .filter(
                      (item: MacBookDataItem) =>
                        item.model === selectedModel &&
                        item.screenSize === selectedScreenSize &&
                        item.releaseDate === selectedReleaseDate &&
                        item.processor.type === selectedProcessor &&
                        item.ram.size === selectedRam
                    )
                    .map((item: MacBookDataItem) => item.storage.type)
                )
              ).map((storageType) => (
                <button
                  key={storageType}
                  onClick={() => setSelectedStorage(storageType)}
                  className="rounded bg-white shadow transition duration-300 ease-in-out hover:bg-slate-300 hover:ring-2 hover:ring-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <p className="rounded border-slate-900 px-6 py-2	 text-black">{storageType}</p>
                </button>
              ))}
            </div>
          )}
        {/* Select GPU */}
        {selectedModel &&
        selectedScreenSize &&
        selectedReleaseDate &&
        selectedProcessor &&
        selectedRam &&
        selectedStorage &&
        !selectedGPU
          ? (() => {
              const GPUOptions = Array.from(
                new Set(
                  data
                    .filter(
                      (item: MacBookDataItem) =>
                        item.model === selectedModel &&
                        item.screenSize === selectedScreenSize &&
                        item.releaseDate === selectedReleaseDate &&
                        item.processor.type === selectedProcessor &&
                        item.ram.size === selectedRam &&
                        item.storage.type === selectedStorage
                    )
                    .map((item: MacBookDataItem) => item.gpu.type)
                )
              );

              return GPUOptions && GPUOptions.length > 0 ? (
                <div className="space-x-3 space-y-3 text-center ">
                  {GPUOptions.map((GPU) =>
                    GPU ? ( // Check if GPU is not empty
                      <button
                        key={GPU}
                        onClick={() => setSelectedGPU(GPU)}
                        className="rounded bg-white shadow transition duration-300 ease-in-out hover:bg-slate-300 hover:ring-2 hover:ring-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <p className="rounded border px-6 py-2 text-black">{GPU}</p>
                      </button>
                    ) : null
                  )}
                </div>
              ) : null;
            })()
          : null}
        {selectedModel &&
          selectedScreenSize &&
          selectedReleaseDate &&
          selectedProcessor &&
          selectedRam &&
          selectedStorage &&
          !session && (
            <div>
              <SignUp />
            </div>
          )}
        {totalPrice && selectedModel && session && (
          <div>
            <PriceSlider
              selectedModel={selectedModel}
              selectedScreenSize={selectedScreenSize}
              selectedReleaseDate={selectedReleaseDate}
              selectedProcessor={selectedProcessor}
              selectedRam={selectedRam}
              selectedStorage={selectedStorage}
              selectedGPU={selectedGPU}
              totalPrice={totalPrice}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SellAppleLaptops;
