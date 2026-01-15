export const metadata = {
  title: 'About Care.IO',
  description:
    'Learn about the mission and vision behind Care.IO, a trusted baby sitting and elderly care platform.',
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-olive-950 mb-4">
        About Care.IO
      </h1>
      <p className="text-sm uppercase tracking-[0.2em] text-olive-600 mb-6">
        Our Story · Our Mission · Our Promise
      </p>

      <div className="space-y-6 text-sm text-olive-900 leading-relaxed">
        <p>
          Care.IO is a web platform built to make caregiving simple, safe, and
          accessible for every family. Whether you need a babysitter, elderly
          care, or special care for a sick family member, Care.IO connects you
          with trusted caregivers in your area.
        </p>

        <p>
          আমাদের লক্ষ্য হল পরিবারের শিশু, বৃদ্ধ ও অসুস্থ সদস্যদের জন্য
          নির্ভরযোগ্য এবং মানসম্মত সেবা সহজে হাতে পাওয়া। সময়, লোকেশন এবং
          চাহিদা অনুযায়ী ব্যবহারকারী খুব দ্রুত নিরাপদ caregiving বুক করতে পারে।
        </p>

        <div className="grid md:grid-cols-3 gap-4 pt-4">
          <div className="rounded-xl border border-lime-300 bg-lime-50/80 p-4">
            <h2 className="font-semibold text-olive-900 mb-1">
              Verified Caregivers
            </h2>
            <p className="text-xs text-olive-800">
              We verify profiles and focus on transparent reviews to keep your
              family safe.
            </p>
          </div>
          <div className="rounded-xl border border-lime-300 bg-lime-50/80 p-4">
            <h2 className="font-semibold text-olive-900 mb-1">
              Clear Pricing
            </h2>
            <p className="text-xs text-olive-800">
              See total cost upfront based on duration and service rate – no
              hidden charges.
            </p>
          </div>
          <div className="rounded-xl border border-lime-300 bg-lime-50/80 p-4">
            <h2 className="font-semibold text-olive-900 mb-1">
              Easy Tracking
            </h2>
            <p className="text-xs text-olive-800">
              Track booking status — Pending, Confirmed, Completed — from one
              place.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-olive-200 bg-olive-50/70 p-4">
          <h2 className="font-semibold text-olive-950 mb-2">
            Our Commitment
          </h2>
          <p className="text-xs text-olive-900">
            We are committed to building a platform that respects your time,
            protects your data, and puts your loved ones&apos; safety first.
            Every feature of Care.IO is designed to reduce stress for families
            and make professional caregiving more accessible.
          </p>
        </div>
      </div>
    </div>
  );
}