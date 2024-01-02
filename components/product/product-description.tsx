'use client';

import { CheckIcon, HeartIcon } from '@heroicons/react/24/outline';
import { AddToCart } from 'components/cart/add-to-cart';
import Prose from 'components/prose';
import SlideOver from 'components/sliderover';
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import { useState } from 'react';
import ProductPrice from './product-price';
import { VariantSelector } from './variant-selector';

const deliveryDate = new Date();
deliveryDate.setDate(deliveryDate.getDate() + 4);

export function ProductDescription({ product }: { product: Product }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-between  px-4 py-3 align-middle">
          <div className="w-1/2 max-w-md" style={{ wordWrap: 'break-word' }}>
            <h1 className="text-3xl">{product.title}</h1>
          </div>
          <div className="flex w-1/2 justify-end">
            <ProductPrice
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            />
          </div>
        </div>
        {/*Second Div */}
        <div className="flex justify-between  border-b px-4 py-3 align-baseline">
          <div className="">
            <span className=" text-gray-500">
              ★★★★☆ 4.1/5 <span className=" font-medium	">(1,793 reviews)</span>
            </span>
            <span className="flex items-center space-x-2 pb-4">
              <Image
                src="/images/Brand-Logos/Fasta Logo.png"
                alt="Fasta Logo"
                className="h-8 w-8"
                height={20}
                width={36}
              />
              <span className=" text-xs	">
                Pay over Time.{' '}
                <a href="#" className="text-blue-500 underline">
                  Prequalify now.
                </a>
              </span>
            </span>
          </div>
          <div className="flex w-1/2 justify-end">
            <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
            <span className="px-1 py-1">
              <HeartIcon className="h-8 w-8" />
            </span>
          </div>
        </div>

        {/*Third Div */}
        <div className="border-b">
          <div className=" py-6 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 ">Product details</h2>
            <div className="mt-4 space-y-6 sm:mt-5 sm:space-y-5">
              <div className="flex items-center space-x-3">
                <div className="rounded-md bg-gray-200 p-2 sm:p-4">
                  <CheckIcon className="h-4 w-4 text-gray-500 sm:h-6 sm:w-6" />
                </div>
                <span className="font-medium text-gray-700 ">
                  Free delivery by{' '}
                  <span className="font-bold">
                    {deliveryDate.toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="rounded-md bg-gray-200 p-2 sm:p-4">
                  <CheckIcon className="h-4 w-4 text-gray-500 sm:h-6 sm:w-6" />
                </div>
                <span className="font-medium text-gray-700 ">1-year warranty.</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="rounded-md bg-gray-200 p-2 sm:p-4">
                  <CheckIcon className="h-4 w-4 text-gray-500 sm:h-6 sm:w-6" />
                </div>
                <span className="font-medium text-gray-700 ">Works with all carriers</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="rounded-md bg-gray-200 p-2 sm:p-4">
                  <CheckIcon className="h-4 w-4 text-gray-500 sm:h-6 sm:w-6" />
                </div>
                <span className="font-medium text-gray-700 ">Certified Pre Owned</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VariantSelector options={product.options} variants={product.variants} />
      {product.descriptionHtml ? (
        <Prose className="/[60%] mb-6 mt-6 text-sm leading-tight" html={product.descriptionHtml} />
      ) : null}
      <div className="mt-3">
        {/* <Link href="#" onClick={toggleSlider}>
          <div className="flex flex-row items-center justify-between border-b py-5 hover:bg-slate-300">
            <span className="px-3">
              <h4 className="font-light">Technical specifications</h4>
            </span>
            <span className="px-3">
              <ArrowRightIcon height={12} />
            </span>
          </div>
        </Link> */}
        {/* <Link href="#" onClick={toggleSlider}>
          <div className="flex flex-row items-center justify-between border-b py-5">
            <span>
              <h4 className="px-3 font-light">Technical specifications</h4>
            </span>
            <span className="px-3">
              <ArrowRightIcon height={12} />
            </span>
          </div>
        </Link>
        <Link href="#" onClick={toggleSlider}>
          <div className="flex flex-row items-center justify-between border-b py-5 hover:bg-slate-300">
            <span className="px-3">
              <h4 className="font-light">Technical specifications</h4>
            </span>
            <span className="px-3">
              <ArrowRightIcon height={12} />
            </span>
          </div>
        </Link> */}

        {isOpen && <SlideOver />}
      </div>
    </>
  );
}
