'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);


    setTimeout(() => {
      setSubmitting(false);
      toast.success('Message sent! We will get back to you soon.', {
        style: { background: '#ecfccb', color: '#14532d' }, 
      });
      e.target.reset();
    }, 500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-emerald-950 mb-3">
        Contact & Support
      </h1>
      <p className="text-sm text-emerald-700 mb-6">
        Have questions about booking, payments, or caregiver verification? Send
        us a message and our support team will get back to you as soon as
        possible.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        
        <div className="space-y-4 text-sm text-emerald-900">
          <div>
            <h2 className="font-semibold text-emerald-950 mb-1">
              Support Details
            </h2>
            <p>Email: support@care.io</p>
            <p>Phone: +880 1234-567890</p>
            <p>
              Hours:{' '}
              <span className="text-emerald-700">
                9:00 AM - 10:00 PM (GMT+6)
              </span>
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-emerald-950 mb-1">
              Office Address
            </h2>
            <p>Care.IO HQ</p>
            <p>Dhaka, Bangladesh</p>
          </div>

          <div className="rounded-lg border border-lime-300 bg-lime-50/80 p-3 text-xs text-emerald-900">
            For urgent caregiving issues, please call our support number
            directly so we can respond faster.
          </div>
        </div>

        
        <div className="rounded-xl border border-emerald-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold text-emerald-950 mb-3">
            Send us a message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3 text-sm">
            <div>
              <label className="block text-xs font-medium text-emerald-800 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-emerald-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
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
                className="w-full rounded-md border border-emerald-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-emerald-800 mb-1">
                Subject
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-emerald-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-emerald-800 mb-1">
                Message
              </label>
              <textarea
                className="w-full rounded-md border border-emerald-200 px-3 py-2 text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                placeholder="Write your message here..."
                required
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-gradient-to-r from-lime-500 via-lime-600 to-emerald-700 text-emerald-950 font-semibold text-sm py-2.5 hover:from-lime-600 hover:via-lime-700 hover:to-emerald-800 hover:text-lime-50 shadow-sm hover:shadow-md transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}