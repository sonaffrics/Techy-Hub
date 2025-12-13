import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LiveChatButton from './components/LiveChatButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Destinations from './pages/Destinations';
import AdminDashboard from './pages/AdminDashboard';
import { initialContent, initialTheme, contentService } from './services/contentService';
import { AppContent, ThemeConfig, BlogPostType } from './types';
import { CONTACT_PHONE } from './constants';

interface AppContextType {
  content: AppContent;
  theme: ThemeConfig;
  updateContent: (newContent: Partial<AppContent>) => void;
  updateTheme: (newTheme: Partial<ThemeConfig>) => void;
  addOrUpdateBlogPost: (post: BlogPostType) => void;
  deleteBlogPost: (slug: string) => void;
  blogPosts: BlogPostType[];
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

const App: React.FC = () => {
  const [content, setContent] = useState<AppContent>(initialContent);
  const [theme, setTheme] = useState<ThemeConfig>(initialTheme);
  const [blogPosts, setBlogPosts] = useState<BlogPostType[]>(contentService.getBlogPosts());

  useEffect(() => {
    const loadedContent = contentService.getAppContent();
    const loadedTheme = contentService.getThemeConfig();
    const loadedBlogPosts = contentService.getBlogPosts();
    setContent(loadedContent);
    setTheme(loadedTheme);
    setBlogPosts(loadedBlogPosts);
  }, []);

  const updateContent = (newContent: Partial<AppContent>) => {
    const updated = { ...content, ...newContent };
    setContent(updated);
    contentService.saveAppContent(updated);
  };

  const updateTheme = (newTheme: Partial<ThemeConfig>) => {
    const updated = { ...theme, ...newTheme };
    setTheme(updated);
    contentService.saveThemeConfig(updated);
  };

  const addOrUpdateBlogPost = (post: BlogPostType) => {
    const updatedPosts = contentService.addOrUpdateBlogPost(post);
    setBlogPosts(updatedPosts);
  };

  const deleteBlogPost = (slug: string) => {
    const updatedPosts = contentService.deleteBlogPost(slug);
    setBlogPosts(updatedPosts);
  };

  const getDynamicClassName = (baseClass: string, themeKey: keyof ThemeConfig) => {
    const themeValue = theme[themeKey];
    if (themeValue && typeof themeValue === 'string') {
      return `${baseClass} ${themeValue}`;
    }
    return baseClass;
  };

  return (
    <AppContext.Provider value={{ content, theme, updateContent, updateTheme, addOrUpdateBlogPost, deleteBlogPost, blogPosts }}>
      <HashRouter>
        <div className={getDynamicClassName('min-h-screen flex flex-col', 'primaryFontClass')}>
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/destinations" element={<Destinations />} /> {/* Placeholder page */}
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </main>
          <LiveChatButton phoneNumber={CONTACT_PHONE} />
          <Footer />
        </div>
      </HashRouter>
    </AppContext.Provider>
  );
};

export default App;