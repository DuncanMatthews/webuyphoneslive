'use client';

import { useEffect, useState } from 'react';

export default function VerifyEmailPage() {
  const [isVerified, setIsVerified] = useState(false);
  const [token, setToken] = useState<string>('');
  const [error, setError] = useState<string>('');

  const verifyUserEmail = async () => {
    try {
      const data = await fetch('/api/users/verifyemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      });
      const response = await data.json();
      console.log('this is ', response);
      if (response.success) {
        setIsVerified(true);
      } else {
        setError(response.message);
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split('=')[1];
    if (urlToken) {
      setToken(urlToken || '');
    }
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1>Verify Email</h1>
      <h2>{token ? `${token}` : 'non token'}</h2>
      {isVerified && (
        <div>
          <h2>Your email has been verified</h2>
          <link href="/sigin" rel="canonical" />
        </div>
      )}
      {error && (
        <div>
          <h2>{error}</h2>
          <link href="/sigin" rel="canonical" />
        </div>
      )}
    </div>
  );
}
