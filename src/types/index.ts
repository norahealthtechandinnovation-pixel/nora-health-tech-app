export type AppSection =
  | 'home'
  | 'about'
  | 'work'
  | 'products'
  | 'news'
  | 'contact'
  | 'settings';

export type WorkAreaId =
  | 'ai-digital-health'
  | 'health-data'
  | 'public-health'
  | 'health-policy'
  | 'research-evidence'
  | 'health-tools';

export interface WorkArea {
  id: WorkAreaId;
  name: string;
  tagline: string;
  overview: string;
  strategicObjectives: string[];
  featuredProjects: {
    title: string;
    description: string;
    status: 'Active' | 'Completed' | 'In Progress';
    partnerOrScope: string;
    impactSummary: string;
    keyDeliverables: string[];
  }[];
}

export type ProductStatus =
  | 'Released'
  | 'Pilot Phase'
  | 'In Development'
  | 'Active Research';

export interface ProductItem {
  id: string;
  name: string;
  category: WorkAreaId | 'Enterprise Health';
  status: ProductStatus;
  tagline: string;
  description: string;
  keyFeatures: string[];
  targetUsers: string[];
  accessUrl: string;
  accessActionLabel: string;
  lastUpdated: string;
}

export type NewsCategory =
  | 'Company Announcement'
  | 'Research Highlight'
  | 'Publication'
  | 'Innovation Update';

export interface NewsArticle {
  id: string;
  title: string;
  category: NewsCategory;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  author: string;
  tags: string[];
  isSampleContent: boolean;
  externalLink?: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  mission: string;
  vision: string;
  values: {
    title: string;
    description: string;
  }[];
  contactEmail: string;
  websiteUrl: string;
  socialLinks: {
    platform: string;
    url: string;
    handle: string;
  }[];
}

export interface AppPreferences {
  theme: 'dark' | 'light' | 'system';
  compactDensity: boolean;
  reduceMotion: boolean;
  fontSize: 'standard' | 'large';
}
