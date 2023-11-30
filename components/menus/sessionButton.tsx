'use client';

// SessionButton.tsx (Client Component)
import { signIn, signOut, useSession } from 'next-auth/react';

function SessionButton() {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut({ redirect: false });
  };

  const handleLogin = async () => {
    await signIn();
  };

  return session ? (
    <button onClick={handleLogout}>Logout</button>
  ) : (
    <button onClick={handleLogin}>Login</button>
  );
}

export default SessionButton;
