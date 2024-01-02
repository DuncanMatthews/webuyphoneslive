'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type MacBookModel = 'Macbook Air' | 'Macbook Pro'; // Add other models as needed

interface PriceProps {
  selectedMacbookPrice: number;
  selectedModel: MacBookModel | null;
  selectedScreenSize: string | null;
  selectedReleaseDate: string | null;
  selectedStorage: string | null;
  selectedProcessor: string | null;
  selectedRam: string | null;
  selectedGPU: string | null;
}

const SubmitMacbookForm: React.FC<PriceProps> = ({
  selectedMacbookPrice,
  selectedModel,
  selectedScreenSize,
  selectedReleaseDate,
  selectedProcessor,
  selectedRam,
  selectedStorage,
  selectedGPU
}) => {
  const { data: session } = useSession();
  const [sucessMessage, setSucessMessage] = React.useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Ensure the user is signed in before attempting to submit the form
      if (!session || !session.user) {
        alert('You must be signed in to submit iPhone details.');
        return;
      }

      const now = new Date();
      // Store it in the state if you need to use it elsewhere in your component

      setTimeout(() => {
        setLoading(false);
      }, 2000);

      const response = await fetch('/api/users/submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          macModel: selectedModel,
          screen: selectedScreenSize,
          year: selectedReleaseDate,
          processor: selectedProcessor,
          ram: selectedRam,
          storage: selectedStorage,
          gpu: selectedGPU,
          price: selectedMacbookPrice,
          userId: session.user.id, // Include the user's ID in the submission
          submissionDate: now.toISOString() // Include the submission date in ISO string format
        })
      });

      if (response.status === 201) {
        console.log('Submission successful');
        setSucessMessage('Submission successful!');
      }

      if (!response.ok) {
        setError('Network response was not ok ' + response.statusText);
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();
      console.log('Submission successful:', data);
      setLoading(false);
      router.push('/thank-you'); // Redirect to the thank you page
    } catch (error) {
      console.error('Submission error:', error);
      setSucessMessage('Submission failed!');
    }
  };

  return (
    <div>
      <p className="mb-5">
        <span className="text-green  font-bold">
          {selectedModel} {selectedScreenSize} {selectedReleaseDate} {selectedProcessor}{' '}
          {selectedRam} {selectedStorage} {selectedGPU}
        </span>
      </p>
      <button
        onClick={handleSubmit}
        className={`gray-300 my-3 flex items-center justify-center rounded-md border bg-gray-200 px-4 py-2 text-gray-900 hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700 ${
          sucessMessage ? 'bg-green-500 text-white hover:bg-green-600' : ''
        }`}
        disabled={!!(isLoading || sucessMessage)}
      >
        <span>{sucessMessage ? 'Success' : 'sell your macbook'}</span>
        {isLoading && (
          <svg
            className="gray-300 ml-2 h-5 w-5 animate-spin text-gray-900"
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
        {error && <p className="text-sm text-red-500">{error}</p>}
      </button>
    </div>
  );
};

export default SubmitMacbookForm;
