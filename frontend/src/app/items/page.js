import Link from 'next/link';

async function getItems() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/items`, {
    cache: 'no-store',
  });
  return res.json();
}

export const metadata = {
  title: 'Care.IO Services',
  description: 'Browse all available care services.',
};

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Available Services</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded p-4 bg-white flex flex-col"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <h2 className="font-semibold text-lg mb-1">{item.name}</h2>
            <p className="text-sm text-gray-600 mb-2 line-clamp-2">
              {item.description}
            </p>
            <p className="font-semibold mb-3">
              ৳ {item.pricePerHour} / hour
            </p>
            <Link
              href={`/items/${item.id}`}
              className="mt-auto text-blue-600 text-sm underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}