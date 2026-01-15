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
        <img
          src={service.image}
          alt={service.name}
          className="rounded w-full h-64 object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold mb-2">{service.name}</h1>
          <p className="text-gray-700 mb-3">{service.description}</p>
          <p className="font-semibold mb-3">
            ৳ {service.pricePerHour} / hour
          </p>
          <Link
            href={`/booking/${service.id}`}
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded"
          >
            Book Service
          </Link>
        </div>
      </div>
    </div>
  );
}