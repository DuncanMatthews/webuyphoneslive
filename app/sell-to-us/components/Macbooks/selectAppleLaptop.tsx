import React from 'react';

import Image from 'next/image';
type MacBookModel = 'Macbook Air' | 'Macbook Pro'; // Add other models as needed

interface MacBookDetails {
  screenSizes: string[];
  releaseDates: { [key: string]: string[] };
  storages: { [key: string]: { [key: string]: string[] } };
  processors: { [key: string]: { [key: string]: string[] } };
  rams: { [key: string]: { [key: string]: string[] } };
  GPU: { [key: string]: { [key: string]: string[] } };
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

const macbookData: Record<MacBookModel, MacBookDetails> = {
  'Macbook Air': {
    screenSizes: ['11', '13'],
    releaseDates: {
      '11': ['Mid 2013', 'Early 2014', 'Early 2015'],
      '13': [
        'Mid 2012',
        'Mid 2013',
        'Early 2014',
        'Early 2015',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022'
      ]
    },
    processors: {
      '11': {
        'Mid 2013': ['1.3 GHz dual-core i5', '1.7 GHz dual-core i7'],
        'Early 2014': ['1.4 GHz dual-core i5'],
        'Early 2015': ['1.6 GHz dual-core i5', '2.2 GHz dual-core i7']
      },
      '13': {
        'Mid 2012': ['1.8 GHz dual-core i5', '2.0 GHz dual-core i7'],
        'Mid 2013': ['1.3 GHz dual-core i5', '1.7 GHz dual-core i7'],
        'Early 2014': ['1.4 GHz dual-core i5'],
        'Early 2015': ['1.6 GHz dual-core i5', '2.2 GHz dual-core i7'],
        '2017': ['1.8 GHz dual-core i5'],
        '2018': ['1.6 GHz dual-core i5'],
        '2019': ['1.6 GHz dual-core i5'],
        '2020': ['1.1 GHz dual-core i3', '1.1 GHz quad-core i5', '1.2 GHz quad-core i7'],
        '2021': ['Apple M1'],
        '2022': ['Apple M2']
      }
    },
    rams: {
      '11': {
        'Mid 2013': ['4GB', '8GB'],
        'Early 2014': ['4GB', '8GB'],
        'Early 2015': ['4GB', '8GB']
      },
      '13': {
        'Mid 2012': ['4GB', '8GB'],
        'Mid 2013': ['4GB', '8GB'],
        'Early 2014': ['4GB', '8GB'],
        'Early 2015': ['4GB', '8GB'],
        '2017': ['8GB', '16GB'],
        '2018': ['8GB', '16GB'],
        '2019': ['8GB', '16GB'],
        '2020': ['8GB', '16GB'],
        '2021': ['8GB', '16GB'],
        '2022': ['8GB', '16GB', '32GB']
      }
    },
    storages: {
      '11': {
        'Mid 2013': ['128GB', '256GB', '512GB'],
        'Early 2014': ['128GB', '256GB'],
        'Early 2015': ['128GB', '256GB', '512GB']
      },
      '13': {
        'Mid 2012': ['128GB', '256GB', '512GB'],
        'Mid 2013': ['128GB', '256GB', '512GB'],
        'Early 2014': ['128GB', '256GB'],
        'Early 2015': ['128GB', '256GB', '512GB'],
        '2017': ['128GB', '256GB'],
        '2018': ['128GB', '256GB', '512GB', '1.5TB'],
        '2019': ['128GB', '256GB', '512GB', '1TB'],
        '2020': ['256GB', '512GB', '1TB', '2TB'],
        '2021': ['256GB', '512GB', '1TB'],
        '2022': ['256GB', '512GB', '1TB', '2TB']
      }
    },
    GPU: {
      '11': {},
      '13': {}
    }
  },
  'Macbook Pro': {
    screenSizes: ['13', '14', '15', '16'],
    releaseDates: {
      '13': ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
      '14': ['2021', '2022', '2023'],
      '15': [
        '2008',
        '2009',
        '2010',
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019'
      ],
      '16': ['2019', '2020', '2021', '2023'] // Added release dates for 16" until 2022
    },

    processors: {
      '13': {
        '2012': ['2.5 GHz dual-core i5', '2.9 GHz dual-core i7'],
        '2013': ['2.4 GHz dual-core i5', '2.6 GHz dual-core i5', '2.8 GHz dual-core i7'],
        '2014': ['2.6 GHz dual-core i5', '2.8 GHz dual-core i5', '3.0 GHz dual-core i7'],
        '2015': ['2.7 GHz dual-core i5', '2.9 GHz dual-core i5', '3.1 GHz dual-core i7'],
        '2016': ['2.0 GHz dual-core i5', '3.1 GHz dual-core i7'],
        '2017': ['1.7 GHz Core i7', '2.3 GHz dual-core i5', '3.5 GHz dual-core i7'],
        '2018': ['2.3 GHz Core i5 ', '2.7 GHz Core i7'],
        '2019': ['1.4 GHz quad-core i5', '2.4 GHz quad-core i5', '2.8 GHz quad-core i7'],
        '2020': ['1.4 GHz Core i5 ', '1.7 GHz Core i7 ', '2.0 GHz Core i5', '2.3 GHz Core i7'],
        '2022': ['3.49 GHz Apple M2']
      },
      '14': {
        '2021': ['3.2 GHz Apple M1 Pro', '3.2 GHz Apple M1 Max'],
        '2022': ['Apple M2 Pro', 'Apple M2 Max'],
        '2023': ['3.49 GHz Apple M2 Pro', '3.68 GHz Apple M2 Max']
      },
      '15': {
        '2008': ['2.4 GHz', '2.5 GHz'],
        '2009': ['2.53 GHz', '2.66 GHz', '2.8 GHz', '3.06 GHz'],
        '2010': ['2.4 GHz', '2.53 GHz', '2.66 GHz', '2.8 GHz'],
        '2011': ['2.0 GHz quad-core', '2.2 GHz quad-core', '2.3 GHz quad-core'],
        '2012': ['2.3 GHz quad-core', '2.6 GHz quad-core', '2.7 GHz quad-core'],
        '2013': ['2.0 GHz quad-core', '2.3 GHz quad-core', '2.6 GHz quad-core'],
        '2014': ['2.2 GHz quad-core', '2.5 GHz quad-core', '2.8 GHz quad-core'],
        '2015': ['2.2 GHz quad-core', '2.5 GHz quad-core', '2.8 GHz quad-core'],
        '2016': ['2.6 GHz quad-core', '2.7 GHz quad-core', '2.9 GHz quad-core'],
        '2017': ['2.8 GHz Core i7 ', '2.9 GHz Core i7', '3.1 GHz Core i7'],
        '2018': ['2.2 GHz Core i7', '2.6 GHz Core i7', '2.9 GHz Core i9'],
        '2019': ['2.6 GHz 6-core', '2.3 GHz 8-core', '2.4 GHz 8-core'],
        '2020': ['2.3 GHz 8-core', '2.4 GHz 8-core'],
        '2021': ['2.4 GHz 10-core', '2.5 GHz 10-core']
      },
      '16': {
        '2019': ['2.6 GHz Core i7', '2.3 GH i9', '2.4 GHz Core i9', '2.6 GHz Core i7'],
        '2021': ['3.2 GHz Apple M1 Max'],
        '2023': ['3.4 GHz 12-core M2 Pro', '3.68 GHz 12-core M2 Pro', '3.68 GHz 16-core M2 Max']
      }
    },
    rams: {
      '13': {
        '2012': ['4GB', '8GB'],
        '2013': ['4GB', '8GB', '16GB'],
        '2014': ['8GB', '16GB'],
        '2015': ['8GB', '16GB'],
        '2016': ['8GB', '16GB'],
        '2017': ['8GB', '16GB'],
        '2018': ['8GB', '16GB'],
        '2019': ['8GB', '16GB'],
        '2020': ['8GB', '16GB', '32GB']
      },
      '14': {
        '2021': ['16GB', '32GB'],
        '2022': ['16GB', '32GB'],
        '2023': ['16GB', '32GB']
      },
      '15': {
        '2008': ['2GB', '4GB'],
        '2009': ['4GB', '8GB'],
        '2010': ['4GB', '8GB'],
        '2011': ['4GB', '8GB', '16GB'],
        '2012': ['8GB', '16GB'],
        '2013': ['8GB', '16GB', '32GB'],
        '2014': ['16GB', '32GB'],
        '2015': ['16GB', '32GB'],
        '2016': ['16GB', '32GB'],
        '2017': ['16GB', '32GB'],
        '2018': ['16GB', '32GB'],
        '2019': ['16GB', '32GB'],
        '2020': ['16GB', '32GB', '64GB'],
        '2021': ['16GB', '32GB', '64GB'],
        '2022': ['16GB', '32GB', '64GB']
      },
      '16': {
        '2019': ['16GB', '32GB', '64GB'],
        '2020': ['16GB', '32GB', '64GB'],
        '2021': ['16GB', '32GB', '64GB', '96GB'],
        '2023': ['16GB', '32GB', '64GB', '96GB']
      }
    },
    storages: {
      '13': {
        '2012': ['500GB HDD', '128GB SSD', '256GB SSD', '512GB SSD'],
        '2013': ['128GB SSD', '256GB SSD', '512GB SSD', '1TB SSD'],
        '2014': ['128GB SSD', '256GB SSD', '512GB SSD', '1TB SSD'],
        '2015': ['128GB SSD', '256GB SSD', '512GB SSD', '1TB SSD'],
        '2016': ['256GB SSD', '512GB SSD', '1TB SSD'],
        '2017': ['128GB SSD', '256GB SSD', '512GB SSD', '1TB SSD'],
        '2018': ['128GB SSD', '256GB SSD', '512GB SSD', '1TB SSD', '2TB SSD'],
        '2019': ['128GB SSD', '256GB SSD', '512GB SSD', '1TB SSD', '2TB SSD'],
        '2020': ['256GB SSD', '512GB SSD', '1TB SSD', '2TB SSD', '4TB SSD']
      },
      '14': {
        '2021': ['512GB SSD', '1TB SSD'],
        '2022': ['512GB SSD', '1TB SSD'],
        '2023': ['512GB SSD', '1TB SSD']
      },
      '15': {
        '2008': ['250GB HDD', '320GB HDD'],
        '2009': ['250GB HDD', '320GB HDD', '500GB HDD'],
        '2010': ['250GB HDD', '500GB HDD', '750GB HDD'],
        '2011': ['500GB HDD', '750GB HDD', '1TB HDD'],
        '2012': ['500GB HDD', '750GB HDD', '1TB HDD'],
        '2013': ['500GB HDD', '1TB HDD', '256GB SSD', '512GB SSD'],
        '2014': ['512GB SSD', '1TB SSD'],
        '2015': ['512GB SSD', '1TB SSD', '2TB SSD'],
        '2016': ['256GB SSD', '512GB SSD', '1TB SSD', '2TB SSD'],
        '2017': ['256GB SSD', '512GB SSD', '1TB SSD', '2TB SSD'],
        '2018': ['256GB SSD', '512GB SSD', '1TB SSD', '2TB SSD', '4TB SSD'],
        '2019': ['256GB SSD', '512GB SSD', '1TB SSD', '2TB SSD', '4TB SSD']
      },
      '16': {
        '2019': ['512GB SSD', '1TB SSD', '2TB SSD', '4TB SSD', '8TB SSD'],
        '2020': ['512GB SSD', '1TB SSD', '2TB SSD', '4TB SSD', '8TB SSD'],
        '2021': ['512GB SSD', '1TB SSD', '2TB SSD', '4TB SSD', '8TB SSD'],
        '2023': ['512GB SSD', '1TB SSD', '2TB SSD']
      }
    },
    GPU: {
      '13': {
        '2020': ['8 GPU'],
        '2021': ['Apple M1'],
        '2022': ['10-core GPU']
      },
      '14': {
        '2021': ['14-core GPU', '16-core GPU', '32-core GPU'],

        '2023': ['16-core GPU', '19-core GPU', '32-core GPU', '38-core GPU']
      },
      '15': {
        '2008': ['NVIDIA GeForce 8600M GT'],
        '2009': ['NVIDIA GeForce 9400M', 'NVIDIA GeForce 9600M GT'],
        '2010': ['NVIDIA GeForce GT 330M', 'Intel HD Graphics'],
        '2011': ['AMD Radeon HD 6490M', 'AMD Radeon HD 6750M', 'Intel HD Graphics 3000'],
        '2012': ['NVIDIA GeForce GT 650M', 'Intel HD Graphics 4000'],
        '2013': ['NVIDIA GeForce GT 750M', 'Intel Iris Pro Graphics'],
        '2014': ['NVIDIA GeForce GT 750M', 'Intel Iris Pro Graphics'],
        '2015': ['AMD Radeon R9 M370X', 'Intel Iris Pro Graphics'],
        '2016': ['AMD Radeon Pro 450/455/460', 'Intel HD Graphics 530'],
        '2017': ['AMD Radeon Pro 555/560', 'Intel HD Graphics 630'],
        '2018': ['AMD Radeon Pro 555X/560X/Vega 16/Vega 20', 'Intel UHD Graphics 630'],
        '2019': ['AMD Radeon Pro 555X/560X/5300M/5500M', 'Intel UHD Graphics 630']
      },
      '16': {
        '2019': ['AMD Radeon Pro 5300M/5500M', 'Intel UHD Graphics 630'],
        '2020': ['8 GPU', 'Intel UHD Graphics 630'],
        '2021': ['16 GPU', '24 GPU', '32 GPU'],
        '2023': ['19 GPU', '30 GPU', '38 GPU']
      }
    }
  }
};

const SellAppleLaptops: React.FC<SellAppleLaptopsProps> = ({
  selectedModel,
  setSelectedModel,
  selectedScreenSize,
  setSelectedScreenSize,
  selectedReleaseDate,
  setSelectedReleaseDate,
  selectedStorage,
  setSelectedStorage,
  selectedProcessor,
  setSelectedProcessor,
  setSelectedRam,
  selectedRam,
  setSelectedGPU,
  selectedGPU
}) => {
  const progressStage = selectedModel
    ? selectedScreenSize
      ? selectedReleaseDate
        ? selectedProcessor
          ? selectedStorage
            ? 5
            : 4
          : 3
        : 2
      : 1
    : 0;

  const gpuOptions = macbookData[selectedModel!]?.GPU[selectedScreenSize!]?.[selectedReleaseDate!];

  return (
    <div>
      {/* Progress Indicator */}
      <div className="my-5">
        <div className="flex justify-center">
          <div className="flex w-[90%]">
            <div
              className={`flex w-1/4 items-center justify-center rounded-l-lg px-4 py-2 ${
                progressStage >= 1 ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-500'
              }`}
            >
              Model
            </div>
            <div
              className={`flex w-1/4 items-center justify-center px-4 py-2 ${
                progressStage >= 2 ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-500'
              }`}
            >
              Screen Size
            </div>
            <div
              className={`flex w-1/4 items-center justify-center px-4 py-2 ${
                progressStage >= 3 ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-500'
              }`}
            >
              Release Year
            </div>
            <div
              className={`flex w-1/4 items-center justify-center px-4 py-2 ${
                progressStage >= 4 ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-500'
              }`}
            >
              Processor
            </div>
            <div
              className={`flex w-1/4 items-center justify-center rounded-r-lg px-4 py-2 ${
                progressStage >= 5 ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-500'
              }`}
            >
              Storage
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex flex-col items-center justify-center">
        <h2 className="mb-4 text-xl font-semibold">Select your MacBook model</h2>
        {!selectedModel && (
          <div className="my-5 flex flex-row space-x-4">
            {Object.keys(macbookData).map((model) => (
              <button
                key={model}
                onClick={() => setSelectedModel(model as MacBookModel)}
                className="flex flex-col items-center rounded-lg border p-4 shadow hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <Image
                  width={100}
                  height={100}
                  src={`/images/Macbooks/${model.toLowerCase().replace(/\s+/g, '')}.png`}
                  alt={model}
                  className="mb-2 rounded-lg object-contain"
                />
                <p className="text-center">{model}</p>
              </button>
            ))}
          </div>
        )}
        {selectedModel && !selectedScreenSize && (
          <div className="p">
            <h2 className="mb-4 text-xl font-semibold">Select Screen Size</h2>
            <div className="my-5 flex flex-row items-center justify-center space-x-4">
              {macbookData[selectedModel!].screenSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedScreenSize(size)}
                  className="flex flex-col items-center rounded-lg border p-4 shadow hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <p className="text-center">{size}"</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedScreenSize && selectedModel && !selectedReleaseDate && (
          <div className="my-4">
            <h2 className="mb-4 text-center text-xl font-semibold">Select Release Year</h2>
            <div className="flex flex-wrap items-center justify-center space-x-3 space-y-2">
              {macbookData[selectedModel]?.releaseDates[selectedScreenSize]?.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedReleaseDate(year)}
                  className="flex flex-col items-center rounded-lg border p-4 shadow hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <p className="text-center">{year}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedScreenSize && selectedModel && selectedReleaseDate && !selectedProcessor && (
          <div className="my-4">
            <h2 className="mb-4 text-center text-xl font-semibold">Select Processor</h2>
            <div className="flex flex-wrap items-center justify-center space-x-3 space-y-2">
              {macbookData[selectedModel]?.processors[selectedScreenSize]?.[
                selectedReleaseDate
              ]?.map((processor) => (
                <button
                  key={processor}
                  onClick={() => setSelectedProcessor(processor)}
                  className="flex flex-col items-center rounded-lg border p-4 shadow hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <p className="text-center">{processor}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedScreenSize &&
          selectedModel &&
          selectedReleaseDate &&
          selectedProcessor &&
          !selectedRam && (
            <div className="my-4">
              <h2 className="mb-4 text-center text-xl font-semibold">Select Ram</h2>
              <div className="flex flex-wrap items-center justify-center space-x-3 space-y-2">
                {macbookData[selectedModel!]?.rams[selectedScreenSize!]?.[
                  selectedReleaseDate!
                ]?.map((ram) => (
                  <button
                    key={ram}
                    onClick={() => setSelectedRam(ram)}
                    className="flex flex-col items-center rounded-lg border p-4 shadow hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <p className="text-center">{ram}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        {selectedScreenSize &&
          selectedModel &&
          selectedReleaseDate &&
          selectedProcessor &&
          selectedRam &&
          !selectedStorage && (
            <div className="my-4">
              <h2 className="mb-4 text-center text-xl font-semibold">Select Storage</h2>
              <div className="flex flex-wrap items-center justify-center space-x-3 space-y-2">
                {macbookData[selectedModel!]?.storages[selectedScreenSize!]?.[
                  selectedReleaseDate!
                ]?.map((storage) => (
                  <button
                    key={storage}
                    onClick={() => setSelectedStorage(storage)}
                    className="flex flex-col items-center rounded-lg border p-4 shadow hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <p className="text-center">{storage}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

        {selectedScreenSize &&
          selectedModel &&
          selectedReleaseDate &&
          selectedProcessor &&
          selectedRam &&
          selectedStorage &&
          !selectedGPU &&
          gpuOptions &&
          gpuOptions.length > 0 && (
            <div className="my-4">
              <h2 className="mb-4 text-center text-xl font-semibold">Select GPU</h2>
              <div className="flex flex-wrap items-center justify-center space-x-3 space-y-2">
                {gpuOptions.map((gpu) => (
                  <button
                    key={gpu}
                    onClick={() => setSelectedGPU(gpu)}
                    className="flex flex-col items-center rounded-lg border p-4 shadow hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <p className="text-center">{gpu}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

        {selectedScreenSize &&
          selectedModel &&
          selectedReleaseDate &&
          selectedProcessor &&
          selectedRam &&
          selectedStorage && (
            <div>
              <p className="">
                You selected a {selectedModel} {selectedScreenSize}" from {selectedReleaseDate} with
                a {selectedProcessor} processor, {selectedRam} RAM, {selectedGPU} and{' '}
                {selectedStorage} storage.
              </p>
            </div>
          )}
      </div>
    </div>
  );
};

export default SellAppleLaptops;
