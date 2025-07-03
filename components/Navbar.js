import Link from 'next/link';
import { useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = auth.currentUser;
      setUser(user);
    };
    fetchUser();
  }, []);

  const handleLogin = async () => {
    const provider = new auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
  };

  const handleLogout = async () => {
    await auth.signOut();
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a>Video App</a>
        </Link>
        {user ? (
          <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        ) : (
          <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        )}
      </div>
    </nav>
  );
}