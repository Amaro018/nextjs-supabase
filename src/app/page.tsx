// src/app/page.tsx
import Link from 'next/link'
const Page = async () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Next Auth App</h1>
      <div className="space-x-4">
        <a href="/signup">
          <button className="px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-500">
            Sign Up
          </button>
        </a>
        <Link href="/dashboard">
          <button className="px-4 py-2 font-semibold text-white bg-green-600 rounded hover:bg-green-500">
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
