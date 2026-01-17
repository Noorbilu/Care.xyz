import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import pic from '../app/Flat design elderly couple elegant dance illustration _ Premium Vector.jpg'
import Image from 'next/image';

export const metadata = {
  title: 'Care.IO | Trusted Baby Sitting & Elderly Care Platform',
  description:
    'Book reliable babysitting, elderly care, and sick care services easily.',
};

export default function HomePage() {
  const services = [
    {
      id: 'baby-care',
      name: 'Baby Sitting Service',
      description: 'Verified babysitters for infants and children.',
      pricePerHour: 300,
      image: 'https://i.ibb.co/x8L5QRfX/download-53.jpg',
    },
    {
      id: 'elderly-care',
      name: 'Elderly Care Service',
      description: 'Compassionate care and support for seniors.',
      pricePerHour: 350,
      image: 'https://i.ibb.co/v4FMcJyv/download-54.jpg',
    },
    {
      id: 'sick-care',
      name: 'Sick People Service',
      description:
        'Specialized care for sick or recovering family members.',
      pricePerHour: 400,
      image: 'https://i.ibb.co/MHTDGJ8/download-55.jpg',
    },
  ];

  return (
    <div>
      
      <section className="bg-gradient-to-r from-lime-50 via-lime-100 to-lime-200 py-10 flex justify-between">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-lime-900">
              Trusted Care for Your Loved Ones, Anytime.
            </h1>
            <p className="mb-6 text-lime-800">
              Care.IO helps you find verified babysitters, elderly caregivers,
              and special care professionals in your area.
            </p>

            
            <Link
              href="/items"
              className="bg-gradient-to-r from-lime-800 via-lime-900 to-lime-950
                         text-lime-50 px-6 py-3 rounded-full font-semibold
                         hover:from-lime-900 hover:via-lime-950 hover:to-black
                         shadow-sm hover:shadow-md transition-all"
            >
              Browse Services
            </Link>
          </div>

          <div>
            <Image
              src={pic}
              alt="Family care illustration"
              width={400}         
              height={250}
              className="rounded-5xl shadow-md h-80 w-85"
            />
          </div>
        </div>
      </section>

      
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-lime-900">
            About Care.IO
          </h2>
          <p className="mb-2 text-lime-900">
            Care.IO একটি ওয়েব অ্যাপ্লিকেশন যা ব্যবহারকারীদের শিশু, বৃদ্ধ
            বা অসুস্থ ব্যক্তির জন্য নির্ভরযোগ্য এবং trusted care service
            বুক করতে সাহায্য করে। ব্যবহারকারী সহজেই সার্ভিস বুক করতে পারবে
            তার প্রয়োজনীয় সময়কাল এবং অবস্থান অনুযায়ী।
          </p>
          <p className="text-lime-900">
            Our goal is to make caregiving easy, secure, and accessible for
            everyone.
          </p>
        </div>
      </section>

     
      <section className="py-12 bg-lime-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-lime-900">
            Our Core Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-lime-900">
            How Care.IO Works
          </h2>
          <ol className="space-y-3 list-decimal list-inside text-lime-900">
            <li>Browse services and choose the one that fits your need.</li>
            <li>Select duration and location details.</li>
            <li>See total cost automatically based on service charge.</li>
            <li>Confirm your booking and track status online.</li>
          </ol>
        </div>
      </section>

      <section className="py-12 bg-lime-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-lime-900">
            What Families Say
          </h2>
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
              <div
                key={t.name}
                className="border border-lime-300 rounded-xl p-4 bg-white"
              >
                <p className="italic mb-2 text-lime-800">“{t.text}”</p>
                <p className="font-semibold text-sm text-lime-900">
                  — {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

   
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6 text-lime-900">
            Our Impact
          </h2>
          <div className="grid grid-cols-3 gap-6 text-lime-900">
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

      
      <section className="py-12 bg-gradient-to-r from-lime-50 via-lime-100 to-lime-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-lime-900">FAQ</h2>
          <div className="space-y-3 mb-6 text-lime-900">
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
            className="inline-block bg-gradient-to-r from-lime-800 via-lime-900 to-lime-950
                       text-lime-50 px-6 py-3 rounded-full font-semibold
                       hover:from-lime-900 hover:via-lime-950 hover:to-black
                       shadow-sm hover:shadow-md transition-all"
          >
            Start Booking Now
          </Link>
        </div>
      </section>
    </div>
  );
}
