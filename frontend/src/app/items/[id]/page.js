import Link from 'next/link';

async function getItem(id) {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/items/${id}`;
  const res = await fetch(url, { cache: 'no-store' });

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  return data;
}

// Note: params is now a Promise, so we await it
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const item = await getItem(resolvedParams.id);

  if (!item) {
    return {
      title: 'Service Not Found | Care.IO',
    };
  }
  return {
    title: `${item.name} | Care.IO`,
    description: item.description,
  };
}

// Same here: await params before using id
export default async function ItemDetailPage({ params }) {
  const resolvedParams = await params;
  const item = await getItem(resolvedParams.id);

  if (!item) {
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
          src={item.image}
          alt={item.name}
          className="rounded w-full h-64 object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold mb-2">{item.name}</h1>
          <p className="text-gray-700 mb-3">{item.description}</p>
          <p className="font-semibold mb-3">
            ৳ {item.pricePerHour} / hour
          </p>
          <Link
            href={`/booking/${item.id}`}
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded"
          >
            Book Service
          </Link>
        </div>
      </div>
    </div>
  );
}