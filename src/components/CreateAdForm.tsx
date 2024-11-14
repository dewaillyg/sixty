import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Upload, DollarSign, Tag } from 'lucide-react';
import type { Category, Duration } from '../types';

const durations: Duration[] = [15, 30, 45, 60];
const categories: { id: Category; label: string }[] = [
  { id: 'sale', label: 'Items for Sale' },
  { id: 'services', label: 'Professional Services' },
  { id: 'help', label: 'Help Needed' },
  { id: 'care', label: 'Care & Support' },
  { id: 'transport', label: 'Transportation' },
  { id: 'food', label: 'Food & Beverages' }
];

export function CreateAdForm() {
  const [selectedDuration, setSelectedDuration] = useState<Duration>(60);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [showPrice, setShowPrice] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-6"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Ad</h2>
      
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="What do you need help with?"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <div className="mt-2 grid grid-cols-2 gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(category.id);
                  setShowPrice(['sale', 'services', 'transport', 'food'].includes(category.id));
                }}
                className={`flex items-center justify-center px-4 py-2 border rounded-md ${
                  selectedCategory === category.id
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Tag className="h-4 w-4 mr-2" />
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Provide more details about your request..."
          />
        </div>

        {showPrice && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DollarSign className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                min="0"
                step="0.01"
                className="pl-10 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="0.00"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">USD</span>
              </div>
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">Duration</label>
          <div className="mt-2 grid grid-cols-4 gap-3">
            {durations.map((duration) => (
              <button
                key={duration}
                type="button"
                onClick={() => setSelectedDuration(duration)}
                className={`flex items-center justify-center px-3 py-2 border rounded-md ${
                  selectedDuration === duration
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Clock className="h-4 w-4 mr-1" />
                {duration}m
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <div className="mt-1 relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter your location"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Images</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload files</span>
                  <input type="file" className="sr-only" multiple accept="image/*" />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Post Ad
          </button>
        </div>
      </form>
    </motion.div>
  );
}