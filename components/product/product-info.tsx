import { Product } from 'lib/shopify/types';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="flex justify-between bg-gray-100 px-4 py-2">
        <div className="w-1/2">{/* Left div content */}</div>
        <div className="w-1/2">{/* Right div content */}</div>
      </div>
    </>
  );
}
