import React from 'react';
import { Clock, MapPin, Star } from 'lucide-react';
import type { Ad, User } from '../types';

interface AdCardProps {
  ad: Ad;
  user: User;
}

export function AdCard({ ad, user }: AdCardProps) {
  const timeLeft = new Date(ad.expiresAt).getTime() - new Date().getTime();
  const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden">
      {ad.images && ad.images.length > 0 && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={ad.images[0]}
            alt={ad.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{ad.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{ad.description}</p>
          </div>
          {ad.price && (
            <span className="text-lg font-bold text-indigo-600">
              ${ad.price.toFixed(2)}
            </span>
          )}
        </div>
        
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{ad.location.address}</span>
        </div>
        
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          <span>
            {hoursLeft > 0 ? `${hoursLeft}h ` : ''}{minutesLeft}m left
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}`}
              alt={user.name}
              className="h-8 w-8 rounded-full"
            />
            <div className="ml-2">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-500 ml-1">
                  {user.rating.toFixed(1)} ({user.reviewCount})
                </span>
              </div>
            </div>
          </div>
          
          <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-full hover:bg-indigo-700 transition-colors">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}