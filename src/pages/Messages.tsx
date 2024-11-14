import React from 'react';
import { Search, MoreVertical, Phone, Video, Star } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { mockUsers } from '../data/mock';

const messages = [
  {
    id: 1,
    userId: 'user2',
    lastMessage: 'Thanks for your interest! When would you like the delivery?',
    timestamp: '2 min ago',
    unread: true
  },
  {
    id: 2,
    userId: 'user3',
    lastMessage: 'The photo session was great! Here are the final edits.',
    timestamp: '1 hour ago',
    unread: true
  },
  {
    id: 3,
    userId: 'user4',
    lastMessage: 'Perfect! See you tomorrow at 10 AM.',
    timestamp: '3 hours ago',
    unread: false
  }
];

export function Messages() {
  const [selectedChat, setSelectedChat] = React.useState(messages[0]);

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="flex h-[calc(100vh-8rem)]">
          {/* Sidebar */}
          <div className="w-80 border-r">
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="overflow-y-auto h-full">
              {messages.map(message => {
                const user = mockUsers[message.userId];
                return (
                  <button
                    key={message.id}
                    onClick={() => setSelectedChat(message)}
                    className={`w-full p-4 flex items-start space-x-3 hover:bg-gray-50 transition-colors ${
                      selectedChat.id === message.id ? 'bg-indigo-50' : ''
                    }`}
                  >
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                        <span className="text-xs text-gray-500">{message.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-500 truncate">{message.lastMessage}</p>
                    </div>
                    {message.unread && (
                      <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={mockUsers[selectedChat.userId].avatar}
                  alt={mockUsers[selectedChat.userId].name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="text-sm font-semibold">{mockUsers[selectedChat.userId].name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-500">
                      {mockUsers[selectedChat.userId].rating} · {mockUsers[selectedChat.userId].reviewCount} reviews
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Phone className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Video className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <MoreVertical className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {/* Chat messages would go here */}
            </div>

            <div className="p-4 border-t">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}