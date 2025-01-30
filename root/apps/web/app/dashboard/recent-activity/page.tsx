import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, DollarSign, TicketIcon, HeadphonesIcon, BookOpen } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      type: 'New Order',
      details: 'Order #2458 received from John Doe',
      time: '2 minutes ago',
      icon: Package
    },
    {
      type: 'Payment Received',
      details: '299.00 payment for Order #2457',
      time: '15 minutes ago',
      icon: DollarSign
    },
    {
      type: 'Support Ticket',
      details: 'New ticket #789 - Login issues',
      time: '1 hour ago',
      icon: TicketIcon
    }
  ];

  return (
    <div className="bg-gray-900 p-6 w-full max-h-full size-svh">
      <h2 className="text-2xl font-bold mb-6 text-white">Recent Activity</h2>
      
      <div className="space-y-4">
        {/* Activity Feed */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl text-white">Latest Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
                  <div className="p-2 rounded-full bg-gray-600">
                    <activity.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-white">{activity.type}</h3>
                    <p className="text-gray-300 text-base">{activity.details}</p>
                    <span className="text-gray-400 text-sm">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors cursor-pointer">
            <CardContent className="p-6 flex items-center space-x-4">
              <HeadphonesIcon className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="text-lg font-semibold text-white">Contact Support</h3>
                <p className="text-gray-300 text-base">Get help from our team</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors cursor-pointer">
            <CardContent className="p-6 flex items-center space-x-4">
              <BookOpen className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="text-lg font-semibold text-white">Documentation</h3>
                <p className="text-gray-300 text-base">View user guides</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;