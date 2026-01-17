'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import { isAuthenticated, getUserFromCookie } from '@/lib/auth';

export default function BookingPage() {
  const params = useParams();
  const router = useRouter();

  const [service, setService] = useState(null);
  const [durationHours, setDurationHours] = useState(1);
  const [location, setLocation] = useState({
    division: '',
    district: '',
    city: '',
    area: '',
    address: '',
  });
  const [totalCost, setTotalCost] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace(`/login?redirect=/booking/${params.service_id}`);
    }
  }, [params.service_id, router]);


  useEffect(() => {
    async function loadService() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/items/${params.service_id}`
        );
        const data = await res.json();
        setService(data);
        setTotalCost(data.pricePerHour * durationHours);
      } catch (err) {
        console.error('Error loading service', err);
      }
    }
    loadService();
  }, [params.service_id]);

 
  useEffect(() => {
    if (service) {
      setTotalCost(service.pricePerHour * durationHours);
    }
  }, [durationHours, service]);

  const handleChange = (field, value) => {
    setLocation((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = getUserFromCookie();
    if (!user) {
      router.replace(`/login?redirect=/booking/${params.service_id}`);
      return;
    }
    try {
      await api.post('/bookings', {
        userId: user.email,
        serviceId: params.service_id,
        durationHours,
        division: location.division,
        district: location.district,
        city: location.city,
        area: location.area,
        address: location.address,
        totalCost,
      });
      setMessage('Booking created successfully with status Pending.');
    } catch (err) {
      console.error(err);
      setMessage('Failed to create booking.');
    }
  };

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center text-emerald-800">
        Loading service details...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-emerald-900">
        Book: {service.name}
      </h1>

      {message && (
        <p className="mb-3 text-sm rounded-md px-3 py-2 border border-lime-400 bg-lime-50 text-emerald-900">
          {message}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-4 border border-emerald-200 p-6 rounded-xl bg-white shadow-sm"
      >
        <div>
          <label className="block text-sm font-semibold text-emerald-800 mb-1">
            Duration (hours)
          </label>
          <input
            type="number"
            min={1}
            value={durationHours}
            onChange={(e) =>
              setDurationHours(parseInt(e.target.value, 10) || 1)
            }
            className="border border-emerald-200 px-3 py-2 rounded w-full text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {['division', 'district', 'city', 'area'].map((field) => (
            <div key={field}>
              <label className="block text-sm font-semibold text-emerald-800 mb-1 capitalize">
                {field}
              </label>
              <input
                value={location[field]}
                onChange={(e) => handleChange(field, e.target.value)}
                required
                className="border border-emerald-200 px-3 py-2 rounded w-full text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
              />
            </div>
          ))}
        </div>

        <div>
          <label className="block text-sm font-semibold text-emerald-800 mb-1">
            Address
          </label>
          <textarea
            value={location.address}
            onChange={(e) => handleChange('address', e.target.value)}
            required
            rows={3}
            className="border border-emerald-200 px-3 py-2 rounded w-full text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
          />
        </div>

        <div className="font-semibold text-emerald-900">
          Total Cost: ৳ {totalCost}
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center w-full rounded-full
                     bg-gradient-to-r from-lime-500 via-lime-600 to-emerald-700
                     text-emerald-950 font-semibold text-sm py-2.5
                     hover:from-lime-600 hover:via-lime-700 hover:to-emerald-800
                     hover:text-lime-50 shadow-sm hover:shadow-md transition-all"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
