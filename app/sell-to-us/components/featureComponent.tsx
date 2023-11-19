import { ArrowPathIcon } from '@heroicons/react/24/outline';
import React from 'react';

const SustainabilityComponent: React.FC = () => {
  return (
    <div className="flex justify-between space-x-4">
      {/* First Card */}
      <div className="flex w-1/3 flex-col rounded-lg border p-6">
        <h3 className="mb-4 text-2xl font-semibold">Good for the planet.</h3>
        <p className="mb-6">
          If your device is in good shape, we'll help get it to a new owner. Or, if it's seen better
          days, we can recycle it for free.
        </p>
        <button className="mb-2 rounded-lg bg-blue-600 px-4 py-2 text-white">
          Recycle your device
        </button>
        <a href="#" className="text-blue-600 underline">
          More ways to recycle
        </a>
      </div>

      {/* Second Card */}
      <div className="flex w-1/3 flex-col items-center rounded-lg border p-6">
        <ArrowPathIcon height={50} />
        <h3 className="mb-4 text-2xl font-semibold">Doing more, using less.</h3>
        <p className="mb-6">
          We're using more recycled content in our products than ever before. And we're recovering
          crucial materials from end-of-life devices to use again in new ones.
        </p>
        <a href="#" className="text-blue-600 underline">
          Learn more
        </a>
      </div>

      {/* Third Card */}
      <div className="flex w-1/3 flex-col items-center rounded-lg border p-6">
        <ArrowPathIcon height={50} />
        <h3 className="mb-4 text-2xl font-semibold">For a better future.</h3>
        <p className="mb-6">
          Our plan is to have a net zero carbon impact by 2030. We're investing in low-carbon
          design, energy efficiency, renewable power, and more.
        </p>
        <a href="#" className="text-blue-600 underline">
          See just how far we go
        </a>
      </div>
    </div>
  );
};

export default SustainabilityComponent;
