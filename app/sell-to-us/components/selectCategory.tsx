import React from 'react';

type ElectronicOption = {
  label: string;
  icon: string;
};

type SelectCategoryProps = {
  electronicsOptions: ElectronicOption[];
  setSelectedElectronic: (label: string) => void;
  setIsSlideOverOpen: (isOpen: boolean) => void;
};

const SelectCategory: React.FC<SelectCategoryProps> = ({
  electronicsOptions,
  setSelectedElectronic,
  setIsSlideOverOpen
}) => {
  return (
    <div className="">
      <h2 className="mb-4 text-center text-xl font-semibold">Select the electronic category</h2>
      <div className="my-4 grid grid-cols-2 gap-4 md:grid-cols-3">
        {electronicsOptions.map((electronic) => (
          <button
            key={electronic.label}
            onClick={() => {
              setSelectedElectronic(electronic.label);
              setIsSlideOverOpen(true);
            }}
            className="flex flex-col items-center rounded-lg border p-4 shadow hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <img
              src={`/images/categories/${electronic.icon}`}
              alt={electronic.label}
              className="mb-2 h-24 w-24 rounded-lg object-contain"
            />
            <p className="text-center">{electronic.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectCategory;
