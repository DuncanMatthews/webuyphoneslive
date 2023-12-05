import FeaturedCarousel from 'components/carousels/feature-slider';
import MyCarousel from 'components/carousels/slider';
import Footer from 'components/layout/footer';
import { getCollectionProducts } from 'lib/shopify';
import { Suspense } from 'react';

export const runtime = 'edge';
export const metadata = {
  title:
    'Find Your Perfect Device or Trade-In at WeBuyPhones - South Africa’s Trusted Source for Second-Hand Phones and MacBooks',
  description:
    'Explore a vast selection of high-quality second-hand phones and MacBooks at WeBuyPhones, South Africa’s premier destination for buying and trading electronic devices. Whether you’re looking to upgrade or trade in your old phone or MacBook, we’ve got you covered with competitive prices, trustworthy products, and seamless transactions. Built with Next.js, Vercel, and Shopify, our platform ensures a smooth and secure shopping experience.',
  openGraph: {
    type: 'website',
    title:
      'WeBuyPhones - Your Gateway to Affordable and Reliable Second-Hand Devices in South Africa',
    description:
      'Upgrade your tech game with WeBuyPhones! Discover unbeatable deals on second-hand phones and MacBooks, or get the best value for your old device through our straightforward trade-in process. Shop with confidence in South Africa’s trusted electronic marketplace, powered by Next.js, Vercel, and Shopify.'
  }
};

export default async function HomePage() {
  const products = await getCollectionProducts({ collection: 'homepage-carousel' });

  return (
    <>
      <Suspense>
        <MyCarousel />
        <FeaturedCarousel products={products} />
        {/* <TopSellers /> */}
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
