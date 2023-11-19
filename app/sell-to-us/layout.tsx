import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Cash for Your Unwanted Electronics in South Africa',
  description:
    'Ready to clear out your old gadgets? Turn your unwanted electronics into cash today! We accept a wide range of devices, including laptops, smartphones, tablets, and more. Experience a quick and easy selling process, free shipping nationwide, and receive your payment within 24 hours. Choose the hassle-free way to declutter and earn!'
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex min-h-screen flex-col">
      <nav className="p-4 shadow-md"></nav>
      <div className="mt-10 flex  flex-grow justify-center">{children}</div>
    </section>
  );
}
