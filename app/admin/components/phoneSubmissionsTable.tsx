'use client';

import SignInForm from 'app/signin/page';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

// Define the Submission interface
interface Submission {
  _id: string;
  userId: {
    cellphone: string;
    email: string;
  };
  phoneModel: string;
  storage: string;
  condition: string;
  color: string;
  price: number;
  status: string;
  createdAt: Date;
}

interface MacbookSubmissions {
  _id: string;
  userId: {
    cellphone: string;
    email: string;
  };
  macModel: string;
  screenSize: string;
  releaseDate: string;
  processor: string;
  ram: number;
  storage: string;
  gpu: string;
  price: number;
  createdAt: Date;
  status: string;
}

const PhoneSubmissionsTable = () => {
  // State to store submissions data
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [macbookSubmissions, setMacbookSubmissions] = useState<MacbookSubmissions[]>([]);

  const { data: session, status } = useSession();
  const [isUpdating, setIsUpdating] = useState<Record<string, boolean>>({});

  // State to track dropdown visibility for each submission
  const [dropdownOpenStates, setDropdownOpenStates] = useState<Record<string, boolean>>({});

  // Function to toggle the visibility of a specific dropdown
  const toggleDropdown = (id: string) => {
    setDropdownOpenStates((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Function to handle status update
  const handleStatusUpdate = async (submissionId: string, newStatus: string) => {
    try {
      const response = await fetch('/api/submissions/updateSubmissionStatus', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ _id: submissionId, status: newStatus })
      });

      if (response.ok) {
        // Update the local state with the updated status
        setSubmissions(
          submissions.map((submission) =>
            submission._id === submissionId ? { ...submission, status: newStatus } : submission
          )
        );

        setMacbookSubmissions(
          macbookSubmissions.map((macbookSubmission) =>
            macbookSubmission._id === submissionId
              ? { ...macbookSubmission, status: newStatus }
              : macbookSubmission
          )
        );

        setDropdownOpenStates((prev) => ({
          ...prev,
          [submissionId]: false
        }));
      } else {
        console.error('Error updating submission status', response.statusText);
      }
    } catch (error) {
      console.error('Error updating submission status', error);
    }
    setIsUpdating((prev) => ({ ...prev, [submissionId]: false })); // Stop loading
  };

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch('/api/submissions/getiPhoneSubmissions');
        if (response.ok) {
          const data = await response.json();
          setSubmissions(data);
        } else {
          console.error('Error fetching submissions', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching submissions', error);
      }
    };

    if (session) {
      fetchSubmissions();
    }
  }, [session]);

  useEffect(() => {
    const fetchMacbookSubmissions = async () => {
      try {
        const response = await fetch('/api/submissions/getMacbookSubmissions');
        if (response.ok) {
          const data = await response.json();
          setMacbookSubmissions(data);
        } else {
          console.error('Error fetching submissions', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching submissions', error);
      }
    };

    if (session) {
      fetchMacbookSubmissions();
    }
  }, [session]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session || !session.user.isAdmin) {
    return (
      <div>
        <div className="justify-center text-center">Access Denied</div>
        {!session && <SignInForm />}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="h-96 rounded-lg">
          <h1 className="mb-4 text-2xl font-semibold">Phone Submissions</h1>
          <div className="">
            <table className="min-w-full">
              <thead className="w-full bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    User
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Submission Details
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((submission: Submission) => (
                  <tr key={submission._id} className="bg-white">
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                      {submission.userId?.cellphone} ({submission.userId?.email})
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <div>
                        {submission.phoneModel} {submission.storage} {submission.condition}{' '}
                        {submission.color}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      R{submission.price}
                    </td>
                    <td className="px-6 py-4">
                      {/* Dropdown for status selection */}
                      <div className="relative inline-block text-left">
                        <div>
                          <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            aria-expanded={dropdownOpenStates[submission._id]}
                            aria-haspopup="true"
                            onClick={() => toggleDropdown(submission._id)}
                          >
                            {submission.status}
                          </button>
                          <div
                            className={`${
                              dropdownOpenStates[submission._id] ? '' : 'hidden'
                            } absolute z-10 mt-2 w-44 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                            role="menu"
                            aria-orientation="vertical"
                          >
                            <button
                              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => handleStatusUpdate(submission._id, 'completed')}
                              role="menuitem"
                            >
                              Completed
                            </button>
                            <button
                              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => handleStatusUpdate(submission._id, 'processing')}
                              role="menuitem"
                            >
                              Processing
                            </button>
                            <button
                              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => handleStatusUpdate(submission._id, 'new')}
                              role="menuitem"
                            >
                              New
                            </button>
                          </div>
                          {isUpdating[submission._id] && (
                            <span className="absolute right-0 top-0 flex h-full items-center pr-4">
                              {/* Replace with your preferred loading spinner */}
                              <svg
                                className="h-5 w-5 animate-spin text-gray-500"
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
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 0116 0H4z"
                                ></path>
                              </svg>
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
                {macbookSubmissions.map((macbookSubmission: MacbookSubmissions) => (
                  <tr key={macbookSubmission._id} className="bg-white">
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                      {macbookSubmission.userId?.cellphone} ({macbookSubmission.userId?.email})
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <div>
                        {macbookSubmission.macModel} {macbookSubmission.releaseDate}{' '}
                        {macbookSubmission.processor} {macbookSubmission.ram}{' '}
                        {macbookSubmission.storage} {macbookSubmission.gpu}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      R{macbookSubmission.price}
                    </td>
                    <td className="px-6 py-4">
                      {/* Dropdown for status selection */}
                      <div className="relative inline-block text-left">
                        <div>
                          <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            aria-expanded={dropdownOpenStates[macbookSubmission._id]}
                            aria-haspopup="true"
                            onClick={() => toggleDropdown(macbookSubmission._id)}
                          >
                            {macbookSubmission.status}
                          </button>
                          <div
                            className={`${
                              dropdownOpenStates[macbookSubmission._id] ? '' : 'hidden'
                            } absolute z-10 mt-2 w-44 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                            role="menu"
                            aria-orientation="vertical"
                          >
                            <button
                              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => handleStatusUpdate(macbookSubmission._id, 'completed')}
                              role="menuitem"
                            >
                              Completed
                            </button>
                            <button
                              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() =>
                                handleStatusUpdate(macbookSubmission._id, 'processing')
                              }
                              role="menuitem"
                            >
                              Processing
                            </button>
                            <button
                              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => handleStatusUpdate(macbookSubmission._id, 'new')}
                              role="menuitem"
                            >
                              New
                            </button>
                          </div>
                          {isUpdating[macbookSubmission._id] && (
                            <span className="absolute right-0 top-0 flex h-full items-center pr-4">
                              {/* Replace with your preferred loading spinner */}
                              <svg
                                className="h-5 w-5 animate-spin text-gray-500"
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
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 0116 0H4z"
                                ></path>
                              </svg>
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneSubmissionsTable;
