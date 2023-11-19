import { CheckIcon } from '@heroicons/react/24/outline';
import { AddToCart } from 'components/cart/add-to-cart';
import ProductPrice from 'components/product/product-price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-4 dark:border-neutral-700">
        <div className="flex-rows justify-space-between mt-10 flex items-end space-y-5">
          <div>
            <h1 className="text-2xl font-medium">{product.title}</h1>
            <div className="">
              <span className=" text-gray-500">★★★★☆ 4.1/5 (1,793 reviews)</span>
              <span className="flex items-center space-x-2 pb-4">
                <Image
                  src="/images/Brand-Logos/Fasta Logo.png"
                  alt="Fasta Logo"
                  className="h-8 w-8"
                  height={20}
                  width={36}
                />
                <span>
                  Pay over Time.{' '}
                  <a href="#" className="text-blue-500 underline">
                    Prequalify now.
                  </a>
                </span>
              </span>
            </div>
          </div>
          <div className="mb-6 ml-8 flex flex-col pb-3  ">
            <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
            <div className="justifiy-space-between">
              <ProductPrice
                amount={product.priceRange.maxVariantPrice.amount}
                currencyCode={product.priceRange.maxVariantPrice.currencyCode}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            {/* {product.availableForSale && (
              <span className="text-black-500 rounded-2xl border-rose-500 bg-yellow-300 px-3	 py-1	 text-sm">
                In Stock
              </span>
            )} */}

            <div className="border-b">
              <div className="px-4 py-6 sm:px-6">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                  Product details
                </h2>
                <div className="mt-4 space-y-6 sm:mt-5 sm:space-y-5">
                  <div className="flex items-center space-x-3">
                    <div className="rounded-md bg-gray-200 p-2 sm:p-4">
                      <Image
                        src="/path/to/delivery-icon.png"
                        alt="Delivery Icon"
                        className="h-4 w-4 sm:h-6 sm:w-6"
                        height={24}
                        width={24}
                      />
                    </div>
                    <span className="font-medium text-gray-700 dark:text-white">
                      Free delivery by Oct 30 - Oct 31
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="rounded-md bg-gray-200 p-2 sm:p-4">
                      <CheckIcon className="h-4 w-4 text-gray-500 sm:h-6 sm:w-6" />
                    </div>
                    <span className="font-medium text-gray-700 dark:text-white">
                      Free 30-day returns <br /> 1-year warranty.
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="rounded-md bg-gray-200 p-2 sm:p-4">
                      <CheckIcon className="h-4 w-4 text-gray-500 sm:h-6 sm:w-6" />
                    </div>
                    <span className="font-medium text-gray-700 dark:text-white">
                      Works with all carriers <br /> Learn about unlocked phones
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="rounded-md bg-yellow-500 p-2 sm:p-4">
                      <Image
                        src="/path/to/refurbished-icon.png"
                        alt="Refurbished Icon"
                        className="h-4 w-4 sm:h-6 sm:w-6"
                        height={24}
                        width={24}
                      />
                    </div>
                    <span className="font-medium text-gray-700 dark:text-white">
                      Verified refurbished in the US
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />
      <div className="">
        {product.descriptionHtml ? (
          <Prose
            className="mb-6 border-t text-sm leading-tight dark:text-white/[60%]"
            html={product.descriptionHtml}
          />
        ) : null}
      </div>
    </>
  );
}
