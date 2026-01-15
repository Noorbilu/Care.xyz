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
      <h1 className="text-2xl font-bold mb-2 text-emerald-950">
        Available Services
      </h1>
      <p className="text-sm text-emerald-700 mb-6">
        Choose from our trusted caregiving services. View details and book the
        right caregiver for your family.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="border border-lime-300 rounded-xl p-4 bg-white flex flex-col shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h2 className="font-semibold text-lg mb-1 text-emerald-950">
              {item.name}
            </h2>
            <p className="text-sm text-emerald-800 mb-2 line-clamp-2">
              {item.description}
            </p>
            <p className="font-semibold mb-3 text-emerald-900">
              ৳ {item.pricePerHour}{' '}
              <span className="text-sm text-emerald-700">/ hour</span>
            </p>

            <div className="mt-auto flex items-center justify-between gap-2">
              <Link
                href={`/items/${item.id}`}
                className="text-xs font-semibold text-emerald-900 underline underline-offset-2 hover:text-emerald-700"
              >
                View Details
              </Link>
              <Link
                href={`/booking/${item.id}`}
                className="inline-flex items-center justify-center text-xs font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r from-lime-500 via-lime-600 to-emerald-700 text-emerald-950 hover:from-lime-600 hover:via-lime-700 hover:to-emerald-800 hover:text-lime-50 transition-all"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}