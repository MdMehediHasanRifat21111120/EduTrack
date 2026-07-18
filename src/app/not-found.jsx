import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-xl border bg-white p-8 text-center shadow-sm">
        <h1 className="text-6xl font-bold text-blue-600">404</h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-900">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
