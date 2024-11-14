import React from 'react';
import { Star, Settings, LogOut } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { mockUsers } from '../data/mock';

export function Profile() {
  const user = mockUsers.user1;

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600" />
          <div className="px-6 py-4">
            <div className="flex items-center">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-24 w-24 rounded-full border-4 border-white -mt-12"
              />
              <div className="ml-4 flex-1">
                <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                <div className="flex items-center mt-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-600">
                    {user.rating.toFixed(1)} ({user.reviewCount} reviews)
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 rounded-lg hover:bg-gray-100">
                  <Settings className="h-6 w-6 text-gray-600" />
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-100">
                  <LogOut className="h-6 w-6 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Ads</h3>
            {/* Add active ads list */}
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            {/* Add recent activity list */}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}