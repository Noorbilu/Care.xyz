'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getUserFromCookie, logout } from '@/lib/auth';

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUserFromCookie());
  }, []);

  return (
    <nav className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          Care.IO
        </Link>

        <div className="flex gap-4 items-center">
          <Link href="/items">Services</Link>
          {user && <Link href="/my-bookings">My Bookings</Link>}
          {user && <Link href="/items/add">Add Service</Link>}

          {!user ? (
            <Link href="/login" className="px-3 py-1 border rounded">
              Login
            </Link>
          ) : (
            <button
              onClick={() => {
                logout();
                window.location.href = '/';
              }}
              className="px-3 py-1 border rounded"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}