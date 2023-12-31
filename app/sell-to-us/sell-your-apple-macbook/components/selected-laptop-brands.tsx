import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

type SmartPhoneBrand = {
  label: string;
  icon: string; // assuming you also want to use icons for brands
};

type SmartPhoneBrandsProps = {
  // eslint-disable-next-line no-unused-vars
  setSelectedLaptopBrands: (brand: string) => void;
};

const LaptopBrands: React.FC<SmartPhoneBrandsProps> = ({ setSelectedLaptopBrands }) => {
  const router = useRouter(); // Creating an instance of the router
  const brands: SmartPhoneBrand[] = [
    { label: 'Apple', icon: 'apple.png' },
    { label: 'Samsung', icon: 'samsung.png' },
    { label: 'Other', icon: 'huawei.png' }
  ];

  const handleBrandSelection = (brand: string) => {
    if (brand === 'Apple') {
      router.push('/sell-to-us/sell-your-apple-macbook'); // Redirecting to the sell-your-macbook page
    } else {
      setSelectedLaptopBrands(brand);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-4 text-center text-xl font-semibold">Select the Macbook Brand</h2>
      <div className="flex flex-row space-x-2">
        {brands.map((brand) => (
          <button
            key={brand.label}
            onClick={() => handleBrandSelection(brand.label)}
            className="flex flex-col items-center space-x-2 rounded-lg border p-4 shadow hover:bg-gray-200  hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Image
              src={`/images/Brand-Logos/${brand.icon}`} // assuming you have a similar folder for brand icons
              alt={brand.label}
              className="mb-2   h-24 w-24 rounded-lg object-contain"
              height={97}
              width={97}
            />
            <p className="text-center">{brand.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LaptopBrands;
