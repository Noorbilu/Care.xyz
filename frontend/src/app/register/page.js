'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/items';

  const [nid, setNid] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  function validatePassword(pw) {
    if (pw.length < 6) return 'Password must be at least 6 characters.';
    if (!/[A-Z]/.test(pw))
      return 'Password must contain at least one uppercase letter.';
    if (!/[a-z]/.test(pw))
      return 'Password must contain at least one lowercase letter.';
    return '';
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const pwError = validatePassword(password);
    if (pwError) {
      setError(pwError);
      return;
    }

    if (password !== confirm) {
      setError('Password and Confirm Password do not match.');
      return;
    }

    setSuccess('Registration successful! Redirecting to login...');
    setTimeout(() => {
      router.push(`/login?redirect=${encodeURIComponent(redirectTo)}`);
    }, 1200);
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-4 py-6 border rounded-xl bg-white shadow-sm">
      <h1 className="text-2xl font-bold mb-2 text-emerald-950">
        Create Account
      </h1>
      <p className="text-sm text-emerald-700 mb-4">
        Register with your NID and contact details to book trusted caregiving
        services.
      </p>

      {error && (
        <p className="mb-3 text-sm text-red-600 border border-red-200 bg-red-50 px-3 py-2 rounded">
          {error}
        </p>
      )}
      {success && (
        <p className="mb-3 text-sm text-emerald-700 border border-emerald-200 bg-emerald-50 px-3 py-2 rounded">
          {success}
        </p>
      )}

      <form onSubmit={onSubmit} className="space-y-3 text-sm">
        <div>
          <label className="block text-xs font-medium text-emerald-800 mb-1">
            NID Number
          </label>
          <input
            type="text"
            className="w-full rounded-md border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
            value={nid}
            onChange={(e) => setNid(e.target.value)}
            placeholder="Enter your NID number"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-emerald-800 mb-1">
            Full Name
          </label>
          <input
            type="text"
            className="w-full rounded-md border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-emerald-800 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full rounded-md border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-emerald-800 mb-1">
            Contact Number
          </label>
          <input
            type="tel"
            className="w-full rounded-md border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="+880 1XXX-XXXXXX"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-emerald-800 mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full rounded-md border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 6 chars, 1 uppercase, 1 lowercase"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-emerald-800 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full rounded-md border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Re-type your password"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-full bg-gradient-to-r from-lime-500 via-lime-600 to-emerald-700 text-emerald-950 font-semibold py-2.5 hover:from-lime-600 hover:via-lime-700 hover:to-emerald-800 shadow-sm hover:shadow-md transition-all"
        >
          Register
        </button>

        <p className="mt-3 text-xs text-emerald-700 text-center">
          Already have an account?{' '}
          <a
            href="/login"
            className="font-semibold text-emerald-900 underline underline-offset-2"
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
}