"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";

export default function Dashboard() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (isLoaded && !user) {
      router.push("/"); // Redirect to sign-in if user is not logged in
    } else if (user) {
    }
  }, [user, isLoaded, router]);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-5 text-xl font-semibold">SHEWorks</div>
        <nav className="mt-4">
          <ul>
            <li className="p-3 hover:bg-gray-200 cursor-pointer">
              📊 Dashboard
            </li>
            <li className="p-3 hover:bg-gray-200 cursor-pointer">🛍 Orders</li>
            <li className="p-3 hover:bg-gray-200 cursor-pointer">👤 Profile</li>
            <li className="p-3 hover:bg-gray-200 cursor-pointer">
              ⚙️ Settings
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
          <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
          <SignOutButton>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Logout
            </button>
          </SignOutButton>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-lg font-semibold">🛒 Total Orders</h2>
            <p className="text-2xl font-bold">120</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-lg font-semibold">💰 Earnings</h2>
            <p className="text-2xl font-bold">$5,400</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-lg font-semibold">⭐ Reviews</h2>
            <p className="text-2xl font-bold">4.8/5</p>
          </div>
        </div>
      </main>
    </div>
  );
}
