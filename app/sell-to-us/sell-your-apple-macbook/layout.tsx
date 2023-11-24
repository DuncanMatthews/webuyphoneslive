import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Sell Your Unwanted MacBook in South Africa',
  description:
    'Looking to turn your old MacBook into cash? We’ve got you covered! Sell us your unwanted MacBook, regardless of its model or condition, and receive payment within just 24 hours. We offer hassle-free transactions, free shipping across South Africa, and swift payments. Trust us for a seamless and reliable selling experience!'
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex min-h-screen flex-col">
      <div className="mt-10 flex flex-grow justify-center px-4 md:px-8">{children}</div>
    </section>
  );
}
