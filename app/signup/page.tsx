'use client';
import SignInForm from 'app/signin/page';
import Link from 'next/link';
import { useState } from 'react';

function SignUp() {
  const [cellphone, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(true); // Assuming you want the sign-up modal to show by default

  const toggleSignInModal = () => {
    setShowSignInModal(true); // Show sign-in modal
    setShowSignUpModal(false); // Hide sign-up modal
  };

  const toggleSignUpModal = () => {
    setShowSignInModal(false); // Hide sign-in modal
    setShowSignUpModal(true); // Show sign-up modal
  };

  // const { status } = useSession();

  // if (status === "loading") {
  //   return (
  //     <h2 style={{ textAlign: "center", marginTop: "20px" }}>Loading...</h2>
  //   );
  // }

  // if (status === "authenticated") {
  //   return (
  //     <h2 style={{ textAlign: "center", marginTop: "20px" }}>
  //       Already Logged In , visit the{" "}
  //       <Link style={{ color: "gray" }} href="/">
  //         Home Page
  //       </Link>{" "}
  //     </h2>
  //   );
  // }

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    const response = await fetch('/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cellphone: cellphone,
        email: email,
        password: password
      })
    });

    const responseData = await response.json();

    console.log('response data for sign up', responseData);

    if (response.status === 201) {
      setSuccess(true);
    }

    console.log(responseData);
  }

  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
      {showSignUpModal && (
        <form onSubmit={handleSubmit} className="w-96 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold">Create new Account</h2>

          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
          />
          <input
            type="mobile"
            placeholder="cell"
            value={cellphone}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-4 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
          />
          <button className="mb-4 w-full rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600 focus:border-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200">
            Signup
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
              <div className="mt-4 rounded border border-green-200 bg-green-100 p-4 text-center">
                <p className="mb-2 flex items-center justify-center font-bold">
                  <span className="mr-2">✓</span>
                  Account Created Successfully
                </p>
                <Link className="text-indigo-500 hover:underline" href="/signin">
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </form>
      )}

      {showSignInModal && <SignInForm />}
    </div>
  );
}

export default SignUp;
