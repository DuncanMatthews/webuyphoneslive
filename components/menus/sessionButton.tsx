'use client';

// SessionButton.tsx (Client Component)
import { signOut, useSession } from 'next-auth/react';

function SessionButton() {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut({ redirect: false });
  };

  return session ? <button onClick={handleLogout}>Logout</button> : <p>You are not logged in</p>;
}

export default SessionButton;
