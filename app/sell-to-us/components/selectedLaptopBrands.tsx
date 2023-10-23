import React from 'react';

type SmartPhoneBrand = {
  label: string;
  icon: string; // assuming you also want to use icons for brands
};

type SmartPhoneBrandsProps = {
  setSelectedLaptopBrands: (brand: string) => void;
};

const LaptopBrands: React.FC<SmartPhoneBrandsProps> = ({ setSelectedLaptopBrands }) => {
  const brands: SmartPhoneBrand[] = [
    { label: 'Apple', icon: 'apple.png' },
    { label: 'Samsung', icon: 'samsung.png' },
    { label: 'Other', icon: 'huawei.png' }
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-4 text-center text-xl font-semibold">Select the Macbook Brand</h2>
      <div className="my-4 grid grid-cols-2 gap-4 md:grid-cols-3">
        {brands.map((brand) => (
          <button
            key={brand.label}
            onClick={() => {
              setSelectedLaptopBrands(brand.label);
            }}
            className="flex flex-col items-center rounded-lg border p-4 shadow hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <img
              src={`/images/Brand-Logos/${brand.icon}`} // assuming you have a similar folder for brand icons
              alt={brand.label}
              className="mb-2 h-24 w-24 rounded-lg object-contain"
            />
            <p className="text-center">{brand.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LaptopBrands;
