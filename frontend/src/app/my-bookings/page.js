'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getUserFromCookie, isAuthenticated } from '@/lib/auth';
import { api } from '@/lib/api';

export default function MyBookingsPage() {
  const router = useRouter();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace('/login?redirect=/my-bookings');
      return;
    }

    const user = getUserFromCookie();
    async function load() {
      try {
        const res = await api.get('/bookings', {
          params: { userId: user?.email },
        });
        setBookings(res.data);
      } catch (err) {
        console.error('Error loading bookings', err);
      }
    }

    load();
  }, [router]);

  
  const handleCancel = (id) => {
    setBookings((prev) =>
      prev.map((bk) =>
        bk.id === id ? { ...bk, status: 'Cancelled' } : bk
      )
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2 text-emerald-950">
        My Bookings
      </h1>
      <p className="text-sm text-emerald-700 mb-6">
        View your caregiving bookings, check status, and manage upcoming
        services.
      </p>

      {bookings.length === 0 && (
        <p className="text-sm text-emerald-800">
          No bookings yet. Visit the{' '}
          <Link
            href="/items"
            className="font-semibold text-emerald-900 underline underline-offset-2"
          >
            Services
          </Link>{' '}
          page to book your first caregiver.
        </p>
      )}

      <div className="space-y-4">
        {bookings.map((b) => (
          <div
            key={b.id}
            className="border border-lime-300 rounded-xl p-4 bg-white flex justify-between items-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <p className="font-semibold text-emerald-950">
                Service: {b.serviceId}
              </p>
              <p className="text-sm text-emerald-800">
                Duration: {b.durationHours} hours
              </p>
              <p className="text-sm text-emerald-800">
                Location:{' '}
                {[
                  b.location?.division,
                  b.location?.district,
                  b.location?.city,
                  b.location?.area,
                ]
                  .filter(Boolean)
                  .join(', ')}
              </p>
              <p className="text-sm text-emerald-900">
                Total Cost:{' '}
                <span className="font-semibold">৳ {b.totalCost}</span>
              </p>
              <p className="text-sm">
                Status:{' '}
                <span
                  className={
                    b.status === 'Confirmed'
                      ? 'text-emerald-700 font-semibold'
                      : b.status === 'Completed'
                      ? 'text-lime-700 font-semibold'
                      : b.status === 'Cancelled'
                      ? 'text-red-600 font-semibold'
                      : 'text-amber-600 font-semibold'
                  }
                >
                  {b.status}
                </span>
              </p>
            </div>

            <div className="space-x-2">
              <Link
                href={`/items/${b.serviceId}`}
                className="px-3 py-1 border border-emerald-200 rounded-full text-xs font-medium text-emerald-900 hover:bg-lime-50 transition-colors inline-flex items-center justify-center"
              >
                View Details
              </Link>
              <button
                onClick={() => handleCancel(b.id)}
                className="px-3 py-1 border border-red-200 rounded-full text-xs font-medium text-red-600 hover:bg-red-50 transition-colors"
              >
                Cancel Booking
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}