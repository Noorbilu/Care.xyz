import Link from 'next/link';

export default function ServiceCard({ service }) {
  if (!service) return null;

  return (
    <div className="
      bg-[#456a3e]
      border border-[#567647]
      rounded-xl
      p-4
      flex flex-col
      text-[#E6F4D7]
      shadow-sm
      hover:shadow-lg
      transition
    ">
      <img
        src={service.image}
        alt={service.name}
        className="
          w-full h-40 object-cover
          rounded-lg mb-3
          border border-[#1E2A19]
        "
      />

      <h3 className="font-semibold text-lg mb-1">
        {service.name}
      </h3>

      <p className="text-sm text-[#B7C6A3] mb-2">
        {service.description}
      </p>

      <p className="font-semibold mb-3 text-[#9FD36A]">
        ৳ {service.pricePerHour} / hour
      </p>

      <div className="mt-auto flex justify-between items-center">
        <Link
          href={`/items/${service.id}`}
          className="
            text-sm
            text-[#B6E388]
            hover:text-[#C6F6A2]
            transition
          "
        >
          View Details
        </Link>

        <Link
          href={`/booking/${service.id}`}
          className="
            text-sm
            bg-[#9FD36A]
            hover:bg-[#B6E388]
            text-[#0B120A]
            px-4 py-1.5
            rounded-lg
            font-medium
            transition
          "
        >
          Book
        </Link>
      </div>
    </div>
  );
}
