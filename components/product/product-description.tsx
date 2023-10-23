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
        <div className="flex justify-between">
          <div>
            <h1 className="mb-2 text-2xl font-medium">{product.title}</h1>
          </div>

          <div
            className="w-auto rounded-full p-2 font-sans
            text-2xl font-normal leading-4 text-black"
          >
            <ProductPrice
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            />
          </div>
        </div>

        <div className="my-5 flex justify-between">
          <div>
            <span className="my-6 text-gray-500">★★★★☆ 4.1/5 (1,793 reviews)</span>
            <div className="my-5 flex items-center space-x-2">
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
            </div>
            {product.availableForSale && (
              <span className="text-black-500 rounded-2xl border-rose-500 bg-yellow-300 px-3	 py-1	 text-sm">
                In Stock
              </span>
            )}
          </div>
          <div className="">
            <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
          </div>
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />

      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}
    </>
  );
}
