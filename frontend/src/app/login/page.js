'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { mockLogin } from '@/lib/auth';
import toast from 'react-hot-toast';

export const dynamic = 'force-dynamic';  

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/items';

  const [email, setEmail] = useState('user@care.io');
  const [password, setPassword] = useState('Care123');
  const [error, setError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const ok = mockLogin(email, password);
    if (!ok) {
      const msg = 'Invalid credentials. Use user@care.io / Care123';
      setError(msg);
      toast.error(msg);
      return;
    }
    toast.success('Logged in successfully!', {
      style: { background: '#ecfccb', color: '#14532d' },
    });
    router.push(redirectTo);
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-4 py-6 border border-emerald-200 rounded-xl bg-white shadow-sm">
      <h1 className="text-2xl font-bold mb-3 text-emerald-950">Login</h1>

      {error && (
        <p className="mb-3 text-sm text-red-600 border border-red-200 bg-red-50 px-3 py-2 rounded">
          {error}
        </p>
      )}

      <form onSubmit={onSubmit} className="space-y-3 text-sm">
        <div>
          <label className="block text-xs font-medium text-emerald-800 mb-1">
            Email
          </label>
          <input
            type="email"
            className="border border-emerald-200 w-full px-3 py-2 rounded text-sm
                       focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@care.io"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-emerald-800 mb-1">
            Password
          </label>
          <input
            type="password"
            className="border border-emerald-200 w-full px-3 py-2 rounded text-sm
                       focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Care123"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-2 bg-gradient-to-r from-lime-500 via-lime-600 to-emerald-700
                     text-emerald-950 font-semibold px-4 py-2.5 rounded-full w-full
                     hover:from-lime-600 hover:via-lime-700 hover:to-emerald-800
                     hover:text-lime-50 shadow-sm hover:shadow-md transition-all"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-xs text-emerald-700 text-center">
        New to Care.IO?{' '}
        <a
          href="/register"
          className="font-semibold text-emerald-900 underline underline-offset-2"
        >
          Create an account
        </a>
      </p>
    </div>
  );
}