'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface IPhoneDetailsProps {
  selectediPhoneModel: string | null;
  selectediPhoneStorage: string | null;
  selectediPhoneColor: string | null;
  selectediPhoneCondition: string | null;
  selectediPhonePrice: number;
}

const IPhoneDetails: React.FC<IPhoneDetailsProps> = ({
  selectediPhoneModel,
  selectediPhoneStorage,
  selectediPhoneColor,
  selectediPhoneCondition,
  selectediPhonePrice
}) => {
  const { data: session } = useSession();
  const [sucessMessage, setSucessMessage] = React.useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Ensure the user is signed in before attempting to submit the form
      if (!session || !session.user) {
        alert('You must be signed in to submit iPhone details.');
        return;
      }

      setTimeout(() => {
        setLoading(false);
      }, 2000);

      const response = await fetch('/api/users/submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phoneModel: selectediPhoneModel,
          storage: selectediPhoneStorage,
          condition: selectediPhoneCondition,
          color: selectediPhoneColor,
          price: selectediPhonePrice,
          userId: session.user.id // Include the user's ID in the submission
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();
      console.log('Submission successful:', data);
      setLoading(false);
      setSucessMessage('Submission successful!');
      router.push('/thank-you'); // Redirect to the thank you page
    } catch (error) {
      console.error('Submission error:', error);
      setSucessMessage('Submission failed!');
    }
  };

  return (
    <div>
      <p>
        <span className="text-green font-bold">
          {selectediPhoneModel} {selectediPhoneStorage} {selectediPhoneColor}{' '}
          {selectediPhoneCondition} Condition
        </span>
      </p>
      <button
        onClick={handleSubmit}
        className={`my-3 flex items-center justify-center rounded-md border bg-gray-200 px-4 py-2 text-gray-900 hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700 dark:text-gray-300 ${
          sucessMessage ? 'bg-green-500 text-white hover:bg-green-600' : ''
        }`}
        disabled={!!(isLoading || sucessMessage)}
      >
        <span>{sucessMessage ? 'Success' : 'Sell your iPhone'}</span>
        {isLoading && (
          <svg
            className="ml-2 h-5 w-5 animate-spin text-gray-900 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
        )}
        {sucessMessage && (
          <svg
            className="ml-2 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default IPhoneDetails;
