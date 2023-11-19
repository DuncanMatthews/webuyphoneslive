import {
  BanknotesIcon,
  CheckIcon,
  EnvelopeIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';

export default function TradeInSteps() {
  return (
    <div className="mt-10 flex flex-row space-x-14  rounded-lg bg-gray-300 p-8 shadow-sm">
      <div className="flex flex-row items-center space-x-2">
        <span>
          <CheckIcon height={30} />
        </span>
        <p className="font-light">Get an offer from an expert refurbisher</p>
      </div>
      <div className="flex flex-row items-center space-x-3">
        <span>
          <EnvelopeIcon height={30} />
        </span>
        <p className="font-light">Ship your Device for Free</p>
      </div>
      <div className="flex flex-row items-center space-x-3">
        <span>
          <BanknotesIcon height={30} />
        </span>
        <p className="font-light">Get cash in your bank account</p>
      </div>
      <div className="flex  flex-row items-center space-x-2">
        <span>
          <ShoppingBagIcon height={30} />
        </span>
        <p className="font-light">Use credit towards your purchase</p>
      </div>
    </div>
  );
}
