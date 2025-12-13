import { AppContent, ThemeConfig, BlogPostType } from '../types';
import { CONTACT_PHONE, COMPANY_NAME, DUMMY_BLOG_POSTS } from '../constants';

// Initial state for content and theme
export const initialContent: AppContent = {
  homepageHeroTitle: `Expert Malwarebytes Support for Mac - ${COMPANY_NAME}`,
  homepageHeroSubtitle: 'Resolving installation, activation, and troubleshooting issues for USA clients.',
  homepageHeroCtaText: `Call for Immediate Support: ${CONTACT_PHONE}`,
  homepageHeroCtaLink: `tel:${CONTACT_PHONE}`,
  aboutPageTitle: 'About Our Malwarebytes Mac Support Services',
  aboutPageDescription: 'We are a dedicated team of technical experts specializing in Malwarebytes for Mac support. Our mission is to provide fast, reliable, and professional assistance to users experiencing any issues with their Malwarebytes software on macOS. From installation challenges to complex malware removal, we ensure your Mac stays protected and runs smoothly.',
  servicesPageTitle: 'Comprehensive Malwarebytes for Mac Support Services',
  servicesPageDescription: 'Our team offers a full spectrum of support for all your Malwarebytes for Mac needs. We\'re here to help you get the most out of your security software.',
  blogPageTitle: 'Malwarebytes for Mac Support Blog',
  blogPageDescription: 'Stay informed with our expert articles, troubleshooting guides, and tips for optimizing Malwarebytes on your Mac.',
  contactPageTitle: 'Contact Our Malwarebytes Mac Support Team',
  contactPageDescription: 'Have a question or need immediate assistance? Reach out to our friendly and knowledgeable support specialists.',
  footerText: `© ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.`,
  logoUrl: 'https://picsum.photos/100/30?random=logo', // Placeholder logo
};

export const initialTheme: ThemeConfig = {
  primaryColorClass: 'bg-mb-primary',
  secondaryColorClass: 'bg-mb-secondary',
  accentColorClass: 'bg-mb-accent',
  textColorClass: 'text-mb-text',
  backgroundColorClass: 'bg-mb-light-bg',
  darkBgClass: 'bg-mb-dark-bg', // Default dark background for footer/dark sections
  ctaButtonClass: 'bg-mb-cta-green hover:bg-green-700 text-white',
  primaryFontClass: 'font-sans',
  secondaryFontClass: 'font-serif',
};

class ContentService {
  private APP_CONTENT_KEY = 'malwarebytes_mac_support_app_content';
  private THEME_CONFIG_KEY = 'malwarebytes_mac_support_theme_config';
  private BLOG_POSTS_KEY = 'malwarebytes_mac_support_blog_posts';

  getAppContent(): AppContent {
    const storedContent = localStorage.getItem(this.APP_CONTENT_KEY);
    return storedContent ? JSON.parse(storedContent) : initialContent;
  }

  saveAppContent(content: AppContent): void {
    localStorage.setItem(this.APP_CONTENT_KEY, JSON.stringify(content));
  }

  getThemeConfig(): ThemeConfig {
    const storedTheme = localStorage.getItem(this.THEME_CONFIG_KEY);
    return storedTheme ? JSON.parse(storedTheme) : initialTheme;
  }

  saveThemeConfig(theme: ThemeConfig): void {
    localStorage.setItem(this.THEME_CONFIG_KEY, JSON.stringify(theme));
  }

  getBlogPosts(): BlogPostType[] {
    const storedPosts = localStorage.getItem(this.BLOG_POSTS_KEY);
    if (storedPosts) {
      return JSON.parse(storedPosts);
    }
    // Initialize with dummy data if nothing in localStorage
    localStorage.setItem(this.BLOG_POSTS_KEY, JSON.stringify(DUMMY_BLOG_POSTS));
    return DUMMY_BLOG_POSTS;
  }

  addOrUpdateBlogPost(post: BlogPostType): BlogPostType[] {
    const posts = this.getBlogPosts();
    const index = posts.findIndex(p => p.slug === post.slug);
    if (index > -1) {
      posts[index] = post; // Update existing
    } else {
      posts.push(post); // Add new
    }
    this.saveBlogPosts(posts);
    return posts;
  }

  deleteBlogPost(slug: string): BlogPostType[] {
    let posts = this.getBlogPosts();
    posts = posts.filter(p => p.slug !== slug);
    this.saveBlogPosts(posts);
    return posts;
  }

  private saveBlogPosts(posts: BlogPostType[]): void {
    localStorage.setItem(this.BLOG_POSTS_KEY, JSON.stringify(posts));
  }
}

export const contentService = new ContentService();