'use client';

import 'rc-slider/assets/index.css';
import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './productCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const products = [
  {
    title: 'MacBook Air 13"',
    description: '2020 - QWERTY - English',
    price: '633.99',
    rating: 4,
    imageUrl: '/images/categories/apple-computer.png'
  },
  {
    title: 'PlayStation 5',
    description: '825 GB - White',
    price: '473.00',
    rating: 4,
    imageUrl: '/images/categories/apple-computer.png'
  },
  {
    title: 'PlayStation 5',
    description: '825 GB - White',
    price: '473.00',
    rating: 4,
    imageUrl: '/images/categories/apple-computer.png'
  },
  {
    title: 'PlayStation 5',
    description: '825 GB - White',
    price: '473.00',
    rating: 4,
    imageUrl: '/images/categories/apple-computer.png'
  },
  {
    title: 'PlayStation 5',
    description: '825 GB - White',
    price: '473.00',
    rating: 4,
    imageUrl: '/images/categories/apple-computer.png'
  },
  {
    title: 'PlayStation 5',
    description: '825 GB - White',
    price: '473.00',
    rating: 4,
    imageUrl: '/images/categories/apple-computer.png'
  },
  {
    title: 'PlayStation 5',
    description: '825 GB - White',
    price: '473.00',
    rating: 4,
    imageUrl: '/images/categories/apple-computer.png'
  },
  {
    title: 'PlayStation 5',
    description: '825 GB - White',
    price: '473.00',
    rating: 4,
    imageUrl: '/images/categories/apple-computer.png'
  },
  {
    title: 'PlayStation 5',
    description: '825 GB - White',
    price: '473.00',
    rating: 4,
    imageUrl: '/images/categories/apple-computer.png'
  },
  {
    title: 'iPhone 8',
    description: '825 GB - White',
    price: '473.00',
    rating: 4,
    imageUrl: '/images/categories/smartphone.png'
  }
  // ... add other products here
];

interface ProductProps {
  title: string;
  description: string;
  price: string;
  rating: number;
  imageUrl: string;
}

const FeaturedCarousel: React.FC = () => {
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
        removeArrowOnDeviceType={['tablet', 'mobile']}
      >
        {products.map((product, productIdx) => (
          <ProductCard key={productIdx} {...product} />
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedCarousel;
