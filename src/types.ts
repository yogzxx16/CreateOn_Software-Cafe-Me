export type PageView = 'home' | 'menu' | 'about' | 'gallery' | 'visit-us';

export type MenuCategory = 'all' | 'coffee' | 'coolers' | 'pastas' | 'momos' | 'desserts';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  isVegetarian: boolean;
  category: MenuCategory[];
  tags: string[];
  badge?: string;
  imageUrl: string;
  prepTime?: string;
  orderUrl?: string;
}

export type GalleryCategory = 'all' | 'vibe' | 'food' | 'brews' | 'memories';

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: GalleryCategory;
  imageUrl: string;
  colSpanDesktop?: number;
  rowSpanDesktop?: number;
  badge?: string;
  tag?: string;
  caption?: string;
  credit?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  initial: string;
  avatarBg: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
