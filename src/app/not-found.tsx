import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#263d42] mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
        <p className="text-gray-600 mb-8 max-w-md">
          The page you're looking for doesn't exist. It might have been moved or
          removed.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#80ced7] text-[#263d42] px-8 py-3 rounded-lg font-semibold hover:bg-[#5eb5bf] transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
