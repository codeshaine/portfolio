export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-white dark:bg-[#0a0a0a] text-gray-800 dark:text-gray-200">
      <h1 className="text-6xl font-extrabold tracking-tight mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="max-w-md text-gray-600 dark:text-gray-400 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="px-6 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition-transform"
      >
        Go Home
      </a>
    </div>
  );
}
