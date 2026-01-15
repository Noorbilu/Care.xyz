import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center px-4">
      <h1 className="text-3xl font-bold mb-2 text-emerald-950">
        404 – Page Not Found
      </h1>
      <p className="mb-4 text-sm text-emerald-700 text-center max-w-md">
        The page you are looking for doesn&apos;t exist or may have been moved.
        Please check the URL or return to the home page.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-full bg-gradient-to-r from-lime-500 via-lime-600 to-emerald-700
                   text-emerald-950 font-semibold text-sm
                   hover:from-lime-600 hover:via-lime-700 hover:to-emerald-800 hover:text-lime-50
                   shadow-sm hover:shadow-md transition-all"
      >
        Return Home
      </Link>
    </div>
  );
}