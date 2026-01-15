'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getUserFromCookie, logout } from '@/lib/auth';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setUser(getUserFromCookie());
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-900/20 bg-gradient-to-r from-lime-200 via-lime-100 to-lime-50/60 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-lime-400 via-lime-700 to-lime-950 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <span className="text-white font-extrabold text-lg">C</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-extrabold text-lg text-emerald-900 tracking-tight">
              Care.IO
            </span>
            <span className="text-[11px] text-emerald-800/70 font-medium uppercase tracking-[0.16em]">
              Trusted Family Care
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-emerald-900 hover:text-emerald-700 transition-colors"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-emerald-900 hover:text-emerald-700 transition-colors"
          >
            About
          </Link>

          <Link
            href="/items"
            className="text-sm font-medium text-emerald-900 hover:text-emerald-700 transition-colors"
          >
            Services
          </Link>

          {user && (
            <Link
              href="/my-bookings"
              className="text-sm font-medium text-emerald-900 hover:text-emerald-700 transition-colors"
            >
              My Bookings
            </Link>
          )}

          {user && (
            <Link
              href="/items/add"
              className="text-sm font-medium text-emerald-900 hover:text-emerald-700 transition-colors"
            >
              Add Service
            </Link>
          )}

          <Link
            href="/contact"
            className="text-sm font-medium text-emerald-900 hover:text-emerald-700 transition-colors"
          >
            Contact
          </Link>

          {/* Right side: user / auth */}
          <div className="flex items-center gap-3">
            {user && (
              <span className="hidden lg:inline max-w-[160px] truncate text-xs px-2 py-1 rounded-full bg-lime-100 text-emerald-900 font-medium">
                {user.email}
              </span>
            )}

            {!user ? (
              <Link
                href="/login"
                className="text-sm font-semibold px-4 py-1.5 rounded-full border border-emerald-700 text-emerald-900 hover:bg-emerald-800 hover:text-lime-50 transition-colors"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={() => {
                  logout();
                  window.location.href = '/';
                }}
                className="text-sm font-semibold px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-700 to-emerald-800 text-lime-50 shadow-sm hover:shadow-md hover:from-emerald-800 hover:to-emerald-900 transition-all"
              >
                Logout
              </button>
            )}
          </div>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-emerald-900 hover:bg-lime-100"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-emerald-900/10 bg-lime-50/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-2">
            <Link
              href="/"
              className="block text-sm font-medium text-emerald-900 py-1"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className="block text-sm font-medium text-emerald-900 py-1"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>

            <Link
              href="/items"
              className="block text-sm font-medium text-emerald-900 py-1"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>

            {user && (
              <Link
                href="/my-bookings"
                className="block text-sm font-medium text-emerald-900 py-1"
                onClick={() => setMenuOpen(false)}
              >
                My Bookings
              </Link>
            )}

            {user && (
              <Link
                href="/items/add"
                className="block text-sm font-medium text-emerald-900 py-1"
                onClick={() => setMenuOpen(false)}
              >
                Add Service
              </Link>
            )}

            <Link
              href="/contact"
              className="block text-sm font-medium text-emerald-900 py-1"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-2 border-t border-emerald-900/10 mt-2">
              {!user ? (
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block bg-gradient-to-r from-lime-800 via-lime-900 to-lime-950
                       text-lime-50 px-6 py-3 rounded-full font-semibold
                       hover:from-lime-900 hover:via-lime-950 hover:to-black
                       shadow-sm hover:shadow-md transition-all">
                  Login
                </Link>
              ) : (
                <button
                  onClick={() => {
                    logout();
                    window.location.href = '/';
                  }}
                  className="inline-block bg-gradient-to-r from-lime-800 via-lime-900 to-lime-950
                       text-lime-50 px-6 py-3 rounded-full font-semibold
                       hover:from-lime-900 hover:via-lime-950 hover:to-black
                       shadow-sm hover:shadow-md transition-all"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}