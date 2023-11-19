// feature-slider.tsx
'use client';

import { GridTileImage } from 'components/grid/tile';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';
import 'rc-slider/assets/index.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

interface FeaturedCarouselProps {
  products: Product[];
}

const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({ products }) => {
  if (!products?.length) return null;
  const carouselProducts = [...products, ...products, ...products];

  return (
    <div className="container mb-5 pb-5">
      {' '}
      {/* <- added overflow-hidden here */}
      <div className="mb-3 mt-16 pl-2 text-2xl text-white">Most Wanted</div>
      <Carousel
        autoPlaySpeed={1000}
        responsive={responsive}
        swipeable={true}
        draggable={true}
        containerClass="carousel-container"
        transitionDuration={100}
        infinite={true}
        centerMode={true}
        removeArrowOnDeviceType={['mobile']}
      >
        {carouselProducts.map((product, i) => (
          <div key={`${product.handle}${i}`} className="">
            <Link href={`/product/${product.handle}`} className=" h-full w-full">
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedCarousel;
