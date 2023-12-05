import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

type SmartPhoneBrand = {
  label: string;
  icon: string; // assuming you also want to use icons for brands
};

type SmartPhoneBrandsProps = {
  // eslint-disable-next-line no-unused-vars
  setselectedPhoneBrand: (brand: string) => void;
  selectedPhoneBrand: string | null;
};

const SmartPhoneBrands: React.FC<SmartPhoneBrandsProps> = ({ setselectedPhoneBrand }) => {
  const brands: SmartPhoneBrand[] = [
    { label: 'Apple', icon: 'apple.png' },
    { label: 'Samsung', icon: 'samsung.png' },
    { label: 'Huawei', icon: 'huawei.png' },
    { label: 'OnePlus', icon: 'oneplus.png' },
    { label: 'Oppo', icon: 'oppo.png' }
  ];

  const router = useRouter(); // Creating an instance of the router

  const handleBrandSelection = (brand: string) => {
    if (brand === 'Apple') {
      router.push('/sell-to-us/sell-your-apple-iphone'); // Redirecting to the sell-your-macbook page
    } else if (brand == 'Samsung') {
      router.push('/sell-to-us/sell-your-samsung-phone');
    } else {
      setselectedPhoneBrand(brand);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-4 text-xl font-semibold">Select the SmartPhone Brand</h2>
      <div className="grid grid-cols-3 items-center justify-center gap-4 md:grid-cols-5">
        {brands.map((brand) => (
          <button
            key={brand.label}
            onClick={() => {
              setselectedPhoneBrand(brand.label);
              handleBrandSelection(brand.label);
            }}
            className="flex flex-col items-center rounded-lg border p-4 shadow hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Image
              src={`/images/Brand-Logos/${brand.icon}`} // assuming you have a similar folder for brand icons
              alt={brand.label}
              className="mb-2 h-24 w-24 rounded-lg object-contain"
              height={100}
              width={100}
            />
            <p className="text-center">{brand.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SmartPhoneBrands;
