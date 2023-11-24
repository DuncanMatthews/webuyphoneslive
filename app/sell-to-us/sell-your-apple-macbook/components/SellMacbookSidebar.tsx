interface MacBookDataItem {
  model: MacBookModel;
  screenSize: string;
  releaseDate: string;
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
    type: string;
    price: number | null;
  };
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

export default function SellMacbookSidebar({
  selectedModel,
  setSelectedModel,
  selectedScreenSize,
  setSelectedScreenSize,
  selectedReleaseDate,
  setSelectedReleaseDate,
  selectedProcessor,
  setSelectedProcessor,
  selectedRam,
  setSelectedRam,
  selectedStorage,
  setSelectedStorage,
  selectedGPU,
  setSelectedGPU
}: {
  selectedModel: MacBookModel | null;
  setSelectedModel: React.Dispatch<React.SetStateAction<MacBookModel | null>>;
  selectedScreenSize: string | null;
  setSelectedScreenSize: React.Dispatch<React.SetStateAction<string | null>>;
  selectedReleaseDate: string | null;
  setSelectedReleaseDate: React.Dispatch<React.SetStateAction<string | null>>;
  selectedProcessor: string | null;
  setSelectedProcessor: React.Dispatch<React.SetStateAction<string | null>>;
  selectedRam: string | null;
  setSelectedRam: React.Dispatch<React.SetStateAction<string | null>>;
  selectedStorage: string | null;
  setSelectedStorage: React.Dispatch<React.SetStateAction<string | null>>;
  selectedGPU: string | null;
  setSelectedGPU: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  return (
    <div className="absolute bottom-0 left-0 top-[8.7rem] z-40 hidden min-h-[1800px] w-[350px] bg-white shadow-xl md:block">
      <div className=" overflow-scroll px-6	   py-8">
        {selectedModel && (
          <div className="flex flex-col justify-center p-6">
            <div className="mx-auto mt-10 w-full">
              <div className="rounded-lg border bg-white p-5 shadow-md">
                <div className="my-4 flex items-center justify-between">
                  <span className="font-light text-gray-600">Model</span>
                  <span className="font-semibold text-gray-800">{selectedModel}</span>
                </div>

                {selectedScreenSize && (
                  <>
                    <hr className="border-gray-300" />
                    <div className="my-4 flex items-center justify-between">
                      <span className="font-light	 text-gray-600">Screen Size</span>
                      <span className="font-semibold text-gray-800">{selectedScreenSize}</span>
                    </div>
                  </>
                )}
                {selectedReleaseDate && (
                  <>
                    <hr className="border-gray-300" />
                    <div className="my-4 flex items-center justify-between">
                      <span className="font-light	 text-gray-600">Year</span>
                      <span className="font-semibold text-gray-800">{selectedReleaseDate}</span>
                    </div>
                  </>
                )}
                {selectedProcessor && (
                  <>
                    <hr className="border-gray-300" />
                    <div className="my-4 flex items-center justify-between">
                      <span className="font-light	 text-gray-600">Processor</span>
                      <span className="font-semibold text-gray-800">{selectedProcessor}</span>
                    </div>
                  </>
                )}
                {selectedRam && (
                  <>
                    <hr className="border-gray-300" />
                    <div className="my-4 flex items-center justify-between">
                      <span className="font-light	 text-gray-600">Processor</span>
                      <span className="font-semibold text-gray-800">{selectedRam}</span>
                    </div>
                  </>
                )}
                {selectedStorage && (
                  <>
                    <hr className="border-gray-300" />
                    <div className="my-4 flex items-center justify-between">
                      <span className="font-light	 text-gray-600">Processor</span>
                      <span className="font-semibold text-gray-800">{selectedStorage}</span>
                    </div>
                  </>
                )}
                {selectedGPU && (
                  <>
                    <hr className="border-gray-300" />
                    <div className="my-4 flex items-center justify-between">
                      <span className="font-light	 text-gray-600">Processor</span>
                      <span className="font-semibold text-gray-800">{selectedGPU}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Sidebar Footer */}
        <div className="mt-auto p-6"></div>
      </div>
    </div>
  );
}
