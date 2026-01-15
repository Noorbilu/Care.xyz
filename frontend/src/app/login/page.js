'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { mockLogin } from '@/lib/auth';

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
      setError('Invalid credentials. Use user@care.io / Care123');
      return;
    }
    router.push(redirectTo);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      {error && <p className="text-red-600 mb-3">{error}</p>}
      <form onSubmit={onSubmit} className="space-y-3">
        <div>
          <label className="block text-sm">Email</label>
          <input
            className="border w-full px-3 py-2 rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            required
          />
        </div>
        <div>
          <label className="block text-sm">Password</label>
          <input
            className="border w-full px-3 py-2 rounded"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            required
          />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Login
        </button>
      </form>
    </div>
  );
}