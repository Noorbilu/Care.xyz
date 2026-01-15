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
      return;
    }
  }, [params.service_id, router]);

  useEffect(() => {
    async function loadService() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/items/${params.service_id}`
      );
      const data = await res.json();
      setService(data);
      setTotalCost(data.pricePerHour * durationHours);
    }
    loadService();
  }, [params.service_id]);

  useEffect(() => {
    if (service) {
      setTotalCost(service.pricePerHour * durationHours);
    }
  }, [durationHours, service]);

  const handleChange = (field, value) => {
    setLocation(prev => ({ ...prev, [field]: value }));
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
        userId: user.email,           // treat email as userId
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
      // Optional redirect:
      // router.push('/my-bookings');
    } catch (err) {
      console.error(err);
      setMessage('Failed to create booking.');
    }
  };

  if (!service) {
    return <div className="max-w-4xl mx-auto p-6">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Book: {service.name}</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 border p-4 rounded bg-white"
      >
        <div>
          <label className="block text-sm font-semibold mb-1">
            Duration (hours)
          </label>
          <input
            type="number"
            min={1}
            value={durationHours}
            onChange={e =>
              setDurationHours(parseInt(e.target.value, 10) || 1)
            }
            className="border px-3 py-2 rounded w-full"
          />
        </div>

        {/* Location: Division, District, City, Area, Address */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Division</label>
            <input
              className="border px-3 py-2 rounded w-full"
              onChange={e => handleChange('division', e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">District</label>
            <input
              className="border px-3 py-2 rounded w-full"
              onChange={e => handleChange('district', e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">City</label>
            <input
              className="border px-3 py-2 rounded w-full"
              onChange={e => handleChange('city', e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Area</label>
            <input
              className="border px-3 py-2 rounded w-full"
              onChange={e => handleChange('area', e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Address</label>
          <textarea
            className="border px-3 py-2 rounded w-full"
            onChange={e => handleChange('address', e.target.value)}
            required
          />
        </div>

        <div className="font-semibold">
          Total Cost: ৳ {totalCost}
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded">
          Confirm Booking
        </button>

        {message && <p className="mt-3 text-sm">{message}</p>}
      </form>
    </div>
  );
}