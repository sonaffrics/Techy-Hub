export interface NavLink {
  name: string;
  path: string;
}

export interface AppContent {
  homepageHeroTitle: string;
  homepageHeroSubtitle: string;
  homepageHeroCtaText: string;
  homepageHeroCtaLink: string;
  aboutPageTitle: string;
  aboutPageDescription: string;
  servicesPageTitle: string;
  servicesPageDescription: string;
  blogPageTitle: string;
  blogPageDescription: string;
  contactPageTitle: string;
  contactPageDescription: string;
  footerText: string;
  logoUrl: string;
  // Add more editable content fields as needed
}

export interface ThemeConfig {
  primaryColorClass: string; // e.g., 'bg-mb-primary'
  secondaryColorClass: string; // e.g., 'bg-mb-secondary'
  accentColorClass: string; // e.g., 'bg-mb-accent'
  textColorClass: string; // e.g., 'text-mb-text'
  backgroundColorClass: string; // e.g., 'bg-mb-light-bg'
  darkBgClass: string; // e.g., 'bg-mb-dark-bg' for footer/dark sections
  ctaButtonClass: string; // e.g., 'bg-mb-cta-green hover:bg-green-700'
  primaryFontClass: string; // e.g., 'font-sans'
  secondaryFontClass: string; // e.g., 'font-serif'
  // Add more theme-related fields
}

export interface BlogPostType {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  author: string;
  date: string;
  imageUrl: string;
  content: string; // HTML content
}

export interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  ogType?: string;
  ogImage?: string;
}