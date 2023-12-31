import type { Metadata } from 'next';
import Head from 'next/head';
import React from 'react';

export const metadata: Metadata = {
  title: 'Get More Value: Trade or Sell Your iPhone in South Africa',
  description:
    'Considering Apple’s trade-in for your next upgrade? Why not explore a more lucrative option? Sell us your unwanted iPhone, irrespective of its model or condition, and receive payment within just 24 hours. Experience a simple and straightforward process, complimentary shipping across South Africa, and swift payment. Opt for a reliable and efficient selling experience that ensures you get the best value for your device!'
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex min-h-screen flex-col">
      <Head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'Collection',
              name: 'Get More Value: Trade or Sell Your iPhone in South Africa',
              description:
                'Sell us your unwanted iPhone, irrespective of its model or condition, and receive payment within just 24 hours. Experience a simple and straightforward process, complimentary shipping across South Africa, and swift payment.',
              offers: {
                '@type': 'AggregateOffer',
                lowPrice: '500.00', // Set the lowest price for iPhones
                highPrice: '1500.00', // Set the highest price for iPhones
                priceCurrency: 'ZAR', // Change to your currency
                availability: 'http://schema.org/InStock'
              }
            })
          }}
        />

        <div className="mt-10 flex  flex-grow justify-center">{children}</div>
      </Head>
    </section>
  );
}
