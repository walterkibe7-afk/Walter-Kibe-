export enum PortfolioCategory {
  LOGO = 'Logo Design',
  POSTER = 'Social Media Poster',
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: PortfolioCategory;
  imageUrl: string;
  width: number;
  height: number;
}
