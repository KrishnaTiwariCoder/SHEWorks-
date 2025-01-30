"use client"
import React from 'react';
import { Layout } from 'lucide-react';
import { useRouter } from 'next/navigation';
// import { Card, CardContent } from '@repo/components/ui/card';

const Dashboard = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Main Content Area */}
      <div className="p-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">Dashboard</h1>
          <p className="text-slate-400">Welcome to your dashboard overview</p>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Stats Cards */}
          <div className="bg-slate-800 border-slate-700">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-100 mb-2">Total Revenue</h3>
              <p className="text-3xl font-bold text-emerald-400">$24,345</p>
              <p className="text-sm text-slate-400 mt-2">+12% from last month</p>
            </div>
          </div>

          <div className="bg-slate-800 border-slate-700">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-100 mb-2">Active Users</h3>
              <p className="text-3xl font-bold text-blue-400">1,234</p>
              <p className="text-sm text-slate-400 mt-2">+5% from last week</p>
            </div>
          </div>

          <div className="bg-slate-800 border-slate-700">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-100 mb-2">Pending Orders</h3>
              <p className="text-3xl font-bold text-orange-400">45</p>
              <p className="text-sm text-slate-400 mt-2">3 require attention</p>
            </div>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-slate-800 border-slate-700 mb-8">
          <div className="p-6">
            <h2 className="text-xl font-bold text-slate-100 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { title: 'New order received', time: '2 minutes ago', status: 'pending' },
                { title: 'Payment processed', time: '1 hour ago', status: 'completed' },
                { title: 'Customer support ticket', time: '3 hours ago', status: 'active' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-slate-700">
                  <div>
                    <p className="text-slate-100">{activity.title}</p>
                    <p className="text-sm text-slate-400">{activity.time}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    activity.status === 'completed' ? 'bg-emerald-900 text-emerald-200' :
                    activity.status === 'pending' ? 'bg-orange-900 text-orange-200' :
                    'bg-blue-900 text-blue-200'
                  }`}>
                    {activity.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Layout className="h-6 w-6 text-slate-400" />
              <span className="text-slate-100 font-semibold">Dashboard</span>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <button onClick={()=> router.push("/dashboard/help")} className="text-slate-400 hover:text-slate-100 transition-colors">
                    Get Help
                  </button>
                </li>
                <li>
                  <button onClick={()=> router.push("/dashboard/transactions")} className="text-slate-400 hover:text-slate-100 transition-colors">
                    Transactions
                  </button>
                </li>
                <li>
                  <button onClick={()=> router.push("/dashboard/recent-activity")} className="text-slate-400 hover:text-slate-100 transition-colors">
                    Recent Activity
                  </button>
                </li>
                <li>
                  <button onClick={()=> router.push("/dashboard/orders")} className="text-slate-400 hover:text-slate-100 transition-colors">
                    Orders
                  </button>
                </li>
                <li>
                  <button onClick={()=> router.push("/dashboard/services")} className="text-slate-400 hover:text-slate-100 transition-colors">
                    Services
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard