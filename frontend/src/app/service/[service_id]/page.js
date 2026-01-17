import Image from 'next/image';
import Link from 'next/link';

async function getService(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/items/${id}`,
    { cache: 'no-store' }
  );
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const service = await getService(params.service_id);
  if (!service) {
    return {
      title: 'Service Not Found | Care.IO',
    };
  }
  return {
    title: `${service.name} | Care.IO`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }) {
  const service = await getService(params.service_id);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        Service not found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-6">
        <Image
          src={service.image}
          alt={service.name}
          width={400}        
          height={250}
          className="rounded w-full h-64 object-cover shadow-sm"
        />
        <div>
          <h1 className="text-2xl font-bold mb-2 text-emerald-900">
            {service.name}
          </h1>
          <p className="text-sm uppercase tracking-[0.16em] text-emerald-700/80 mb-2">
            Care Service
          </p>
          <p className="text-emerald-800 mb-3 leading-relaxed">
            {service.description}
          </p>
          <p className="font-semibold mb-4 text-emerald-900">
            ৳ {service.pricePerHour}{' '}
            <span className="text-sm text-emerald-700">per hour</span>
          </p>
          <Link
            href={`/booking/${service.id}`}
            className="inline-flex items-center justify-center bg-gradient-to-r from-lime-500 via-lime-600 to-emerald-700 text-emerald-950 font-semibold px-6 py-2.5 rounded-full shadow-sm hover:from-lime-600 hover:via-lime-700 hover:to-emerald-800 hover:text-lime-50 transition-all"
          >
            Book Service
          </Link>
        </div>
      </div>
    </div>
  );
}