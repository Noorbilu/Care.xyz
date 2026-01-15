'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
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

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>

      {bookings.length === 0 && <p>No bookings yet.</p>}

      <div className="space-y-4">
        {bookings.map((b) => (
          <div
            key={b.id}
            className="border rounded p-4 bg-white flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">Service: {b.serviceId}</p>
              <p className="text-sm">Duration: {b.durationHours} hours</p>
              <p className="text-sm">
                Location: {b.location?.division}, {b.location?.district},{' '}
                {b.location?.city}, {b.location?.area}
              </p>
              <p className="text-sm">Total Cost: ৳ {b.totalCost}</p>
              <p className="text-sm">Status: {b.status}</p>
            </div>
            <div className="space-x-2">
              <button className="px-3 py-1 border rounded text-sm">
                View Details
              </button>
              <button className="px-3 py-1 border rounded text-sm text-red-600">
                Cancel Booking
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}