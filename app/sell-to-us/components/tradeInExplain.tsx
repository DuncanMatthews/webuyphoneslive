import Link from 'next/link';
import React from 'react';

const InfoSection: React.FC = () => {
  return (
    <div className="rounded-md bg-white px-4 py-12 shadow-md sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Trading In Information */}
          <div className="space-y-5">
            <h3 className="mb-4 text-2xl font-semibold">
              How does trading in your phone to WeBuyPhones work?
            </h3>
            <p className="text-gray-600">
              Trading in your old Apple products in South Africa is a simple and efficient process.
              When you decide to trade in your MacBook, iPhone, or any other Apple device, we'll
              evaluate its current market value based on its condition and model. Once assessed, we
              provide you with a credit voucher. This voucher can be used to offset the cost of your
              next Apple purchase with us. It's an eco-friendly and economical way to upgrade your
              Apple gear, ensuring your old devices are put to good use while you enjoy the latest
              tech.
            </p>
            <div>
              <Link href="#" className="py-4 text-indigo-500 hover:text-indigo-700">
                Learn more about trading in &rarr;
              </Link>
            </div>
          </div>

          {/* Selling Information */}
          <div className="space-y-5">
            <h3 className="mb-4 text-2xl font-semibold">
              How does selling your old apple products to WeBuyPhones
            </h3>
            <p className="text-gray-600">
              Selling your old Apple products to Webuyphones in South Africa is a straightforward
              and beneficial process. When you're ready to part with your MacBook, iPhone, or any
              other Apple device, simply bring it to us. We'll assess its current market value based
              on its model and condition. Once the valuation is complete, we offer you a competitive
              cash price. Accept our offer, and you'll receive immediate payment, making it
              hassle-free for you to earn from your old devices. With Webuyphones, you get the best
              value while ensuring your Apple products find a new home.
            </p>
            <div>
              <Link href="#" className="py-4 text-indigo-500 hover:text-indigo-700">
                Learn more about selling &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
