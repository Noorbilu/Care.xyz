'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { isAuthenticated } from '@/lib/auth';
import { api } from '@/lib/api';

export default function AddItemPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    id: '',
    name: '',
    description: '',
    pricePerHour: 0,
    category: '',
    image: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace('/login?redirect=/items/add');
    }
  }, [router]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      await api.post('/items', {
        ...form,
        pricePerHour: Number(form.pricePerHour),
      });
      setMessage('Service created successfully!');
      // optional redirect:
      // router.push('/items');
    } catch (err) {
      console.error(err);
      setMessage('Failed to create service.');
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2 text-emerald-950">
        Add New Service
      </h1>
      <p className="text-sm text-emerald-700 mb-4">
        Create a new caregiving service with a clear title, description, hourly
        rate, and image.
      </p>

      {message && (
        <p className="mb-3 text-sm rounded-md px-3 py-2 border
                       border-lime-400 bg-lime-50 text-emerald-900">
          {message}
        </p>
      )}

      <form
        onSubmit={onSubmit}
        className="space-y-3 border border-emerald-200 rounded-xl bg-white p-5 shadow-sm"
      >
        {['id', 'name', 'category', 'image'].map((field) => (
          <div key={field}>
            <label className="block text-xs font-semibold text-emerald-800 mb-1 capitalize">
              {field === 'id' ? 'Service ID (slug)' : field}
            </label>
            <input
              className="border border-emerald-200 px-3 py-2 rounded w-full text-sm
                         focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
              value={form[field]}
              onChange={(e) => handleChange(field, e.target.value)}
              placeholder={
                field === 'id'
                  ? 'e.g. baby-care-2'
                  : field === 'image'
                  ? 'Image URL'
                  : ''
              }
              required
            />
          </div>
        ))}

        <div>
          <label className="block text-xs font-semibold text-emerald-800 mb-1">
            Description
          </label>
          <textarea
            className="border border-emerald-200 px-3 py-2 rounded w-full text-sm
                       focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
            value={form.description}
            onChange={(e) => handleChange('description', e.target.value)}
            rows={3}
            placeholder="Describe what this service offers..."
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-emerald-800 mb-1">
            Price Per Hour (৳)
          </label>
          <input
            type="number"
            min="0"
            className="border border-emerald-200 px-3 py-2 rounded w-full text-sm
                       focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
            value={form.pricePerHour}
            onChange={(e) => handleChange('pricePerHour', e.target.value)}
            required
          />
        </div>

        <button
          className="mt-2 inline-flex items-center justify-center w-full
                     rounded-full bg-gradient-to-r from-lime-500 via-lime-600 to-emerald-700
                     text-emerald-950 font-semibold text-sm py-2.5
                     hover:from-lime-600 hover:via-lime-700 hover:to-emerald-800
                     hover:text-lime-50 shadow-sm hover:shadow-md transition-all"
        >
          Create Service
        </button>
      </form>
    </div>
  );
}