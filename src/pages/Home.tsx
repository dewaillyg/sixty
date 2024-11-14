import React from 'react';
import { motion } from 'framer-motion';
import { CategoryFilter } from '../components/CategoryFilter';
import { AdCard } from '../components/AdCard';
import { PageTransition } from '../components/PageTransition';
import type { Category } from '../types';
import { mockAds, mockUsers } from '../data/mock';

export function Home() {
  const [selectedCategory, setSelectedCategory] = React.useState<Category | null>(null);

  const filteredAds = selectedCategory
    ? mockAds.filter(ad => ad.category === selectedCategory)
    : mockAds;

  return (
    <PageTransition>
      <div className="py-8">
        <CategoryFilter
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
        
        <motion.div 
          className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          layout
        >
          {filteredAds.map(ad => (
            <motion.div
              key={ad.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <AdCard
                ad={ad}
                user={mockUsers[ad.userId]}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
}