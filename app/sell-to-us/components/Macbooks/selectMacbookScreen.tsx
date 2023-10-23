import React, { useState } from 'react';

type MacbookSize = {
  label: string;
  icon: string; // icon representing the MacBook screen size
};

type MacbookModels = {
  label: string;
  icon: string; // icon representing the MacBook model
};

type MacbookSizesProps = {
  setSelectedMacbookScreenSize: (size: string) => void;
};

const MacbookSizes: React.FC<MacbookSizesProps> = ({ setSelectedMacbookScreenSize }) => {
  const [showMacbookModels, setShowMacbookModels] = useState(false);

  const sizes: MacbookSize[] = [
    { label: '13-inch', icon: 'macbook_13.png' },
    { label: '14-inch', icon: 'macbook_14.png' },
    { label: '15-inch', icon: 'macbook_15.png' },
    { label: '16-inch', icon: 'macbook_16.png' }
  ];

  const models: MacbookModels[] = [
    { label: 'Macbook', icon: 'macbook.png' },
    { label: 'Macbook Air', icon: 'macbook_air.png' },
    { label: 'Macbook Pro', icon: 'macbook_pro.png' }
  ];

  return (
    <div className="ml-64">
      <h2 className="mb-4 text-center text-xl font-semibold">Select the MacBook screen size</h2>
      <div className="my-4 grid grid-cols-2 gap-4 md:grid-cols-3">
        {sizes.map((size) => (
          <button
            key={size.label}
            onClick={() => setSelectedMacbookScreenSize(size.label)}
            className="flex flex-col items-center rounded-lg border p-4 shadow hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <img
              src={`/images/Macbook-Sizes/${size.icon}`}
              alt={size.label}
              className="mb-2 h-24 w-24 rounded-lg object-contain"
            />
            <p className="text-center">{size.label}</p>
          </button>
        ))}
      </div>
      <div>
        {!showMacbookModels && (
          <>
            <h2 className="mb-4 text-center text-xl font-semibold">Select the MacBook model</h2>
            <div className="my-4 grid grid-cols-2 gap-4 md:grid-cols-3">
              {models.map((model) => (
                <button
                  key={model.label}
                  onClick={() => {
                    setSelectedMacbookScreenSize;
                  }}
                  className="flex flex-col items-center rounded-lg border p-4 shadow hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <img
                    src={`/images/Macbook-Models/${model.icon}`}
                    alt={model.label}
                    className="mb-2 h-24 w-24 rounded-lg object-contain"
                  />
                  <p className="text-center">{model.label}</p>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MacbookSizes;
