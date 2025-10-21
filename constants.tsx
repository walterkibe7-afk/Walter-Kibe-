import type { PortfolioItem } from './types';
import { PortfolioCategory } from './types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: 'Quantum Leap Branding',
    category: PortfolioCategory.LOGO,
    imageUrl: 'https://picsum.photos/seed/quantum/800/600',
    width: 800,
    height: 600,
  },
  {
    id: 2,
    title: 'Summer Music Fest',
    category: PortfolioCategory.POSTER,
    imageUrl: 'https://picsum.photos/seed/summerfest/600/800',
    width: 600,
    height: 800,
  },
  {
    id: 3,
    title: 'Nebula AI Logo',
    category: PortfolioCategory.LOGO,
    imageUrl: 'https://picsum.photos/seed/nebula/800/600',
    width: 800,
    height: 600,
  },
  {
    id: 4,
    title: 'Eco-Friendly Tech Event',
    category: PortfolioCategory.POSTER,
    imageUrl: 'https://picsum.photos/seed/ecotech/600/800',
    width: 600,
    height: 800,
  },
  {
    id: 5,
    title: 'Artisan Coffee Roasters',
    category: PortfolioCategory.LOGO,
    imageUrl: 'https://picsum.photos/seed/artisan/800/600',
    width: 800,
    height: 600,
  },
  {
    id: 6,
    title: 'Cyber Monday Sale',
    category: PortfolioCategory.POSTER,
    imageUrl: 'https://picsum.photos/seed/cybermonday/600/800',
    width: 600,
    height: 800,
  },
  {
    id: 7,
    title: 'Apex Fitness Logo',
    category: PortfolioCategory.LOGO,
    imageUrl: 'https://picsum.photos/seed/apex/800/600',
    width: 800,
    height: 600,
  },
    {
    id: 8,
    title: 'Indie Film Festival',
    category: PortfolioCategory.POSTER,
    imageUrl: 'https://picsum.photos/seed/indiefilm/600/800',
    width: 600,
    height: 800,
  },
];

export const SOCIAL_LINKS = [
    { name: 'Twitter', url: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.218 3.791 4.649-.469.127-.962.193-1.464.193-.304 0-.598-.03-.886-.084.618 1.949 2.423 3.328 4.552 3.364-1.785 1.39-4.033 2.22-6.489 2.22-.424 0-.84-.025-1.255-.074 2.311 1.474 5.068 2.333 8.041 2.333 9.491 0 14.682-7.857 14.682-14.681 0-.224-.005-.447-.014-.668.998-.722 1.864-1.632 2.56-2.657z"/></svg> },
    { name: 'LinkedIn', url: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-2.199 1.561-4.004 3.545-4.004 2.012 0 3.455 1.805 3.455 4.004v8.399h4.988v-10.131c0-4.87-3.304-7.869-6.937-7.869-3.604 0-5.069 2.584-6.053 4.25z"/></svg> },
    { name: 'Dribbble', url: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.741 15.345c-1.332-1.325-3.325-2.222-5.631-2.532.331-.632.55-1.365.55-2.146 0-2.061-1.671-3.732-3.732-3.732-2.061 0-3.732 1.671-3.732 3.732 0 .809.24 1.555.629 2.194-2.455.39-4.576 1.35-5.992 2.651.983 3.393 4.197 5.856 8.246 5.856s7.263-2.463 8.246-5.856zm-11.488-3.61c0-1.073.87-1.942 1.942-1.942s1.942.87 1.942 1.942c0 1.073-.87 1.943-1.942 1.943s-1.942-.87-1.942-1.943z"/></svg> }
];
