import React from 'react';
import type { PortfolioItem } from '../types';

interface PortfolioItemCardProps {
  item: PortfolioItem;
  index: number;
}

const PortfolioItemCard: React.FC<PortfolioItemCardProps> = ({ item }) => {
  return (
    <div className="group bg-dark-card rounded-lg overflow-hidden shadow-lg hover:shadow-brand-primary/20 transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={`${item.imageUrl}`}
          alt={item.title}
          width={item.width}
          height={item.height}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-light-text mb-1">{item.title}</h3>
        <p className="text-brand-secondary font-medium">{item.category}</p>
      </div>
    </div>
  );
};

export default PortfolioItemCard;
