'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { isAuthenticated } from '@/lib/auth';

export default function Protected({ children }) {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      const current = window.location.pathname;
      router.replace(`/login?redirect=${encodeURIComponent(current)}`);
    } else {
      setAllowed(true);
    }
  }, [router]);

  if (!allowed) return null;
  return <>{children}</>;
}