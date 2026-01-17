'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { isAuthenticated } from '@/lib/auth';
import { api } from '@/lib/api';
import toast from 'react-hot-toast';

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace('/login?redirect=/items/add');
    }
  }, [router]);

  useEffect(() => {
    setForm(prev => ({
      ...prev,
      id: prev.name.toLowerCase().replace(/\s+/g, '-'),
    }));
  }, [form.name]);

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      await api.post('/items', {
        ...form,
        pricePerHour: Number(form.pricePerHour),
      });

      setMessage('Service created successfully!');
      toast.success('Service created successfully!', {
        style: { background: '#ecfccb', color: '#14532d' },
      });

      
    } catch (err) {
      console.error(err);
      setMessage('Failed to create service.');
      toast.error('Failed to create service. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2 text-emerald-950">
        Add New Service
      </h1>
      <p className="text-sm text-emerald-700 mb-4">
        Create a new caregiving service with a clear title, description, hourly rate, and image.
      </p>

      {message && (
        <p className="mb-3 text-sm rounded-md px-3 py-2 border border-lime-400 bg-lime-50 text-emerald-900">
          {message}
        </p>
      )}

      <form
        onSubmit={onSubmit}
        className="space-y-3 border border-lime-200 rounded-lg bg-lime-50 p-6 shadow-sm"
      >
        {['id', 'name', 'category', 'image'].map((field) => (
          <div key={field}>
            <label className="block text-xs font-semibold text-emerald-900 mb-1 capitalize">
              {field === 'id' ? 'Service ID (slug)' : field}
            </label>
            <input
              type={field === 'image' ? 'url' : 'text'}
              className="border border-lime-200 px-3 py-2 rounded w-full text-sm
                         focus:outline-none focus:ring-emerald-700 focus:border-emerald-900"
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
          <label className="block text-xs font-semibold text-emerald-900 mb-1">
            Description
          </label>
          <textarea
            className="border border-lime-200 px-3 py-2 rounded w-full text-sm
                       focus:outline-none focus:ring-emerald-700 focus:border-emerald-900"
            value={form.description}
            onChange={(e) => handleChange('description', e.target.value)}
            rows={3}
            placeholder="Describe what this service offers..."
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-emerald-900 mb-1">
            Price Per Hour (৳)
          </label>
          <input
            type="number"
            min="0"
            className="border border-lime-200 px-3 py-2 rounded w-full text-sm
                       focus:outline-none focus:ring-emerald-700 focus:border-emerald-900"
            value={form.pricePerHour}
            onChange={(e) => handleChange('pricePerHour', Number(e.target.value))}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`mt-2 w-full rounded-full bg-lime-600 text-white py-2.5 font-semibold text-sm transition-all shadow-sm
                      ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-lime-700 hover:shadow-md'}`}
        >
          {loading ? 'Creating...' : 'Create Service'}
        </button>
      </form>
    </div>
  );
}
