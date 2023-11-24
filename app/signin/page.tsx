'use client';

import SignUp from 'app/signup/page';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';

export default function SignInForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const router = useRouter();
  const [showSignInModal, setShowSignInModal] = useState(true);
  const [showSignUpModal, setShowSignUpModal] = useState(false); // Assuming you want the sign-up modal to show by default
  const [success, setSuccess] = useState(false);
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  const toggleSignInModal = () => {
    setShowSignInModal(false); // Show sign-in modal
    setShowSignUpModal(true); // Hide sign-up modal
  };

  useEffect(() => {
    if (session) {
      setShowSignInModal(false); // Close the sign-in modal when the user is signed in
    }

    // Reset isSubmitting after handling submission result
    if (isSubmitting) {
      setIsSubmitting(false);
    }
  }, [session, isSubmitting, error, router]);

  const handleGoogleSignIn = async () => {};

  const handleFacebookSignIn = async () => {};

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password
      });

      if (res?.ok) {
        setSuccess(true);
      }
    } catch (error) {
      console.error(error);
      setError('Error occurred during sign in.');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
      {showSignInModal && (
        <form onSubmit={handleSubmit} className="w-96 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-center text-2xl font-semibold">Sign In</h2>

          {/* Google Auth */}

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mb-2 mt-4 w-full rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600 focus:border-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Sign In
          </button>
          <button
            onClick={() => signIn('google', { callbackUrl: '/' })}
            className="mb-2 w-full rounded-md bg-red-500 p-2 text-white hover:bg-red-600 focus:border-red-700 focus:outline-none focus:ring focus:ring-red-200"
          >
            Sign In with Google
          </button>

          {/* Facebook Auth */}
          <button
            onClick={handleFacebookSignIn} // This needs to be implemented
            className="mb-4 w-full rounded-md bg-blue-600 p-2 text-white hover:bg-blue-700 focus:border-blue-800 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Sign In with Facebook
          </button>
          <div>
            Already have an account?
            <button
              className="text-indigo-500 hover:text-indigo-600 focus:underline focus:outline-none"
              onClick={toggleSignInModal}
            >
              Sign in
            </button>
            {success && (
              <div className="mt-4 text-center">
                <p className="mb-2">Signed in Succesfully</p>
              </div>
            )}
          </div>
        </form>
      )}
      {!showSignInModal && !session && <SignUp />}
    </div>
  );
}
