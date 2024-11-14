import React from 'react';
import { ShoppingBag, Wrench, Heart, Baby, Car, Coffee, LayoutGrid } from 'lucide-react';
import type { Category } from '../types';

const categories: { id: Category | 'all'; label: string; icon: React.ReactNode }[] = [
  { id: 'all', label: 'All', icon: <LayoutGrid className="h-6 w-6" /> },
  { id: 'sale', label: 'Sale', icon: <ShoppingBag className="h-6 w-6" /> },
  { id: 'services', label: 'Services', icon: <Wrench className="h-6 w-6" /> },
  { id: 'help', label: 'Help', icon: <Heart className="h-6 w-6" /> },
  { id: 'care', label: 'Care', icon: <Baby className="h-6 w-6" /> },
  { id: 'transport', label: 'Transport', icon: <Car className="h-6 w-6" /> },
  { id: 'food', label: 'Food', icon: <Coffee className="h-6 w-6" /> },
];

interface CategoryFilterProps {
  selected: Category | null;
  onSelect: (category: Category | null) => void;
}

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelect(category.id === 'all' ? null : category.id)}
          className={`flex flex-col items-center px-4 py-2 rounded-lg transition-colors ${
            (category.id === 'all' && selected === null) || selected === category.id
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          {category.icon}
          <span className="mt-1 text-sm font-medium">{category.label}</span>
        </button>
      ))}
    </div>
  );
}