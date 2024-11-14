import React from 'react';
import { motion } from 'framer-motion';
import { Bell, MessageSquare, Heart, ShoppingBag, Star } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { mockUsers } from '../data/mock';

const notifications = [
  {
    id: 1,
    type: 'message',
    userId: 'user2',
    content: 'sent you a new message about your listing',
    time: '2 minutes ago',
    read: false
  },
  {
    id: 2,
    type: 'offer',
    userId: 'user3',
    content: 'accepted your offer for Photography Session',
    time: '1 hour ago',
    read: false
  },
  {
    id: 3,
    type: 'review',
    userId: 'user4',
    content: 'left you a 5-star review',
    time: '3 hours ago',
    read: true
  },
  {
    id: 4,
    type: 'sale',
    userId: 'user1',
    content: 'purchased your listed item',
    time: '5 hours ago',
    read: true
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case 'message':
      return <MessageSquare className="w-5 h-5 text-blue-500" />;
    case 'offer':
      return <Heart className="w-5 h-5 text-pink-500" />;
    case 'review':
      return <Star className="w-5 h-5 text-yellow-500" />;
    case 'sale':
      return <ShoppingBag className="w-5 h-5 text-green-500" />;
    default:
      return <Bell className="w-5 h-5 text-gray-500" />;
  }
};

export function Notifications() {
  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-700">
              Mark all as read
            </button>
          </div>

          <div className="divide-y">
            {notifications.map((notification) => {
              const user = mockUsers[notification.userId];
              return (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 flex items-start space-x-4 ${
                    notification.read ? 'bg-white' : 'bg-indigo-50'
                  }`}
                >
                  <div className="flex-shrink-0">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        {user.name} {notification.content}
                      </p>
                      <div className="flex items-center">
                        {getIcon(notification.type)}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}