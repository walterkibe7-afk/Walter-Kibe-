import React, { useState, useMemo } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { PortfolioCategory } from '../types';
import PortfolioItemCard from './PortfolioItemCard';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory | 'All'>('All');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') {
      return PORTFOLIO_ITEMS;
    }
    return PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  const categories: (PortfolioCategory | 'All')[] = ['All', PortfolioCategory.LOGO, PortfolioCategory.POSTER];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-light-text mb-4">My Portfolio</h2>
          <p className="text-lg text-medium-text max-w-xl mx-auto">
            A selection of my favorite projects.
          </p>
        </div>
        
        <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base font-semibold rounded-md transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-brand-primary text-white'
                  : 'bg-dark-card text-medium-text hover:bg-gray-700 hover:text-light-text'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <PortfolioItemCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
