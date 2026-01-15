import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';

export const metadata = {
  title: 'Care.IO | Trusted Baby Sitting & Elderly Care Platform',
  description:
    'Book reliable babysitting, elderly care, and sick care services easily.',
};

export default function HomePage() {
  // You can keep this static for now; later you could fetch from backend
  const services = [
    {
      id: 'baby-care',
      name: 'Baby Sitting Service',
      description: 'Verified babysitters for infants and children.',
      pricePerHour: 300,
      image: 'https://placehold.co/600x400?text=Baby+Care',
    },
    {
      id: 'elderly-care',
      name: 'Elderly Care Service',
      description: 'Compassionate care and support for seniors.',
      pricePerHour: 350,
      image: 'https://placehold.co/600x400?text=Elderly+Care',
    },
    {
      id: 'sick-care',
      name: 'Sick People Service',
      description:
        'Specialized care for sick or recovering family members.',
      pricePerHour: 400,
      image: 'https://placehold.co/600x400?text=Sick+Care',
    },
  ];

  return (
    <div>
      {/* 1. Hero/Banner */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Trusted Care for Your Loved Ones, Anytime.
            </h1>
            <p className="mb-6">
              Care.IO helps you find verified babysitters, elderly caregivers,
              and special care professionals in your area.
            </p>
            <Link
              href="/items"
              className="bg-blue-600 text-white px-6 py-3 rounded font-semibold"
            >
              Browse Services
            </Link>
          </div>
          <div>
            <img
              src="https://placehold.co/600x400?text=Care.IO"
              alt="Family care illustration"
              className="rounded shadow"
            />
          </div>
        </div>
      </section>

      {/* 2. About */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">About Care.IO</h2>
          <p className="mb-2">
            Care.IO একটি ওয়েব অ্যাপ্লিকেশন যা ব্যবহারকারীদের শিশু, বৃদ্ধ
            বা অসুস্থ ব্যক্তির জন্য নির্ভরযোগ্য এবং trusted care service
            বুক করতে সাহায্য করে। ব্যবহারকারী সহজেই সার্ভিস বুক করতে পারবে
            তার প্রয়োজনীয় সময়কাল এবং অবস্থান অনুযায়ী।
          </p>
          <p>
            Our goal is to make caregiving easy, secure, and accessible for
            everyone.
          </p>
        </div>
      </section>

      {/* 3. Services Overview (now using ServiceCard) */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. How it works */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">How Care.IO Works</h2>
          <ol className="space-y-3 list-decimal list-inside">
            <li>Browse services and choose the one that fits your need.</li>
            <li>Select duration and location details.</li>
            <li>See total cost automatically based on service charge.</li>
            <li>Confirm your booking and track status online.</li>
          </ol>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">What Families Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Rahim',
                text: 'The babysitter was professional and caring. Highly recommended!',
              },
              {
                name: 'Fatema',
                text: 'My parents received great elderly care through Care.IO.',
              },
              {
                name: 'Sakib',
                text: 'Easy booking and transparent pricing. Very helpful service.',
              },
            ].map((t) => (
              <div key={t.name} className="border rounded p-4 bg-white">
                <p className="italic mb-2">“{t.text}”</p>
                <p className="font-semibold text-sm">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Success Metrics */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Our Impact</h2>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold">5k+</p>
              <p className="text-sm">Bookings completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold">1k+</p>
              <p className="text-sm">Verified caregivers</p>
            </div>
            <div>
              <p className="text-3xl font-bold">4.9/5</p>
              <p className="text-sm">Average rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ + CTA */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-3 mb-6">
            <div>
              <p className="font-semibold">Is Care.IO secure?</p>
              <p className="text-sm">
                Yes. We verify caregivers and keep your data safe.
              </p>
            </div>
            <div>
              <p className="font-semibold">
                How do I know the total cost before booking?
              </p>
              <p className="text-sm">
                Our booking page automatically calculates cost based on
                duration and service charge.
              </p>
            </div>
          </div>
          <Link
            href="/items"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded font-semibold"
          >
            Start Booking Now
          </Link>
        </div>
      </section>
    </div>
  );
}