import React from 'react';
import { Bell, Lock, User, CreditCard, Globe, HelpCircle, ChevronRight } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { mockUsers } from '../data/mock';

const settingsSections = [
  {
    title: 'Profile',
    icon: <User className="w-5 h-5 text-gray-500" />,
    items: [
      { label: 'Personal Information', href: '#' },
      { label: 'Email Settings', href: '#' },
      { label: 'Phone Number', href: '#' }
    ]
  },
  {
    title: 'Notifications',
    icon: <Bell className="w-5 h-5 text-gray-500" />,
    items: [
      { label: 'Push Notifications', href: '#' },
      { label: 'Email Notifications', href: '#' },
      { label: 'SMS Notifications', href: '#' }
    ]
  },
  {
    title: 'Privacy & Security',
    icon: <Lock className="w-5 h-5 text-gray-500" />,
    items: [
      { label: 'Password', href: '#' },
      { label: 'Two-Factor Authentication', href: '#' },
      { label: 'Login History', href: '#' }
    ]
  },
  {
    title: 'Payment Methods',
    icon: <CreditCard className="w-5 h-5 text-gray-500" />,
    items: [
      { label: 'Credit Cards', href: '#' },
      { label: 'PayPal', href: '#' },
      { label: 'Bank Accounts', href: '#' }
    ]
  }
];

export function Settings() {
  const user = mockUsers.user1;

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b">
            <div className="flex items-center space-x-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {settingsSections.map((section) => (
              <div key={section.title}>
                <div className="flex items-center space-x-2 mb-4">
                  {section.icon}
                  <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
                </div>
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  {section.items.map((item, index) => (
                    <button
                      key={item.label}
                      className={`w-full flex items-center justify-between p-4 hover:bg-gray-100 transition-colors ${
                        index !== section.items.length - 1 ? 'border-b border-gray-200' : ''
                      }`}
                    >
                      <span className="text-sm text-gray-700">{item.label}</span>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}