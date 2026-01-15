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
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
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
      <h1 className="text-2xl font-bold mb-4">Add New Service</h1>
      {message && <p className="mb-3 text-sm">{message}</p>}

      <form onSubmit={onSubmit} className="space-y-3 border p-4 rounded bg-white">
        {['id', 'name', 'category', 'image'].map((field) => (
          <div key={field}>
            <label className="block text-sm font-semibold mb-1 capitalize">
              {field}
            </label>
            <input
              className="border px-3 py-2 rounded w-full"
              value={form[field]}
              onChange={e => handleChange(field, e.target.value)}
              required
            />
          </div>
        ))}

        <div>
          <label className="block text-sm font-semibold mb-1">Description</label>
          <textarea
            className="border px-3 py-2 rounded w-full"
            value={form.description}
            onChange={e => handleChange('description', e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Price Per Hour
          </label>
          <input
            type="number"
            min="0"
            className="border px-3 py-2 rounded w-full"
            value={form.pricePerHour}
            onChange={e => handleChange('pricePerHour', e.target.value)}
            required
          />
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded">
          Create Service
        </button>
      </form>
    </div>
  );
}