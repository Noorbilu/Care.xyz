import Link from 'next/link';

export default function ServiceCard({ service }) {
  if (!service) return null;

  return (
    <div className="border rounded p-4 bg-white flex flex-col">
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-40 object-cover rounded mb-3"
      />
      <h3 className="font-semibold text-lg mb-1">{service.name}</h3>
      <p className="text-sm text-gray-600 mb-2">
        {service.description}
      </p>
      <p className="font-semibold mb-3">
        ৳ {service.pricePerHour} / hour
      </p>
      <div className="mt-auto flex justify-between items-center">
        <Link
          href={`/items/${service.id}`}
          className="text-blue-600 text-sm underline"
        >
          View Details
        </Link>
        <Link
          href={`/booking/${service.id}`}
          className="text-sm bg-blue-600 text-white px-3 py-1 rounded"
        >
          Book
        </Link>
      </div>
    </div>
  );
}