import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, PlusCircle, User, Bell, MessageCircle, Settings, HelpCircle, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

import sixtyImage from '../sixty.png';


const menuItems = [
  { icon: <Home className="h-5 w-5" />, label: 'Home', path: '/' },
  { icon: <PlusCircle className="h-5 w-5" />, label: 'Create Ad', path: '/create' },
  { icon: <MessageCircle className="h-5 w-5" />, label: 'Messages', path: '/messages', badge: 3 },
  { icon: <Bell className="h-5 w-5" />, label: 'Notifications', path: '/notifications', badge: 5 },
  { icon: <User className="h-5 w-5" />, label: 'Profile', path: '/profile' },
  { icon: <Settings className="h-5 w-5" />, label: 'Settings', path: '/settings' },
  { icon: <HelpCircle className="h-5 w-5" />, label: 'Help', path: '/help' },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40"
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed left-0 top-0 bottom-0 w-64 bg-white shadow-lg z-50"
          >
            <div className="p-4 flex justify-between items-center border-b">
            <img className='max-w-28' src={sixtyImage} alt="Description de l'image" />
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            <nav className="p-4">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg group transition-colors"
                    >
                      <span className="group-hover:text-blue-600">{item.icon}</span>
                      <span className="ml-3 group-hover:text-blue-600">{item.label}</span>
                      {item.badge && (
                        <span className="ml-auto bg-blue-100 text-blue-600 py-1 px-2 rounded-full text-xs">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}