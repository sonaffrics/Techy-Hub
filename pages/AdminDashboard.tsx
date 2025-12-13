import React from 'react';
import { useAppContext } from '../App';
import EditableText from '../components/Admin/EditableText';
import EditableImage from '../components/Admin/EditableImage';
import ThemeCustomizer from '../components/Admin/ThemeCustomizer';
import BlogManager from '../components/Admin/BlogManager';
import Seo from '../components/Seo';

const AdminDashboard: React.FC = () => {
  const { content, updateContent, theme } = useAppContext();

  // Handlers for EditableText components
  const handleSaveContent = (key: keyof typeof content, newValue: string) => {
    updateContent({ [key]: newValue });
  };

  const handleSaveImage = (key: keyof typeof content, newSrc: string) => {
    updateContent({ [key]: newSrc });
  };

  return (
    <div className={`container mx-auto px-4 py-8 md:py-12 ${theme.backgroundColorClass}`}>
      <Seo
        title="Admin Dashboard"
        description="Manage website content, theme, and blog posts."
        url="/admin"
      />
      <h1 className="text-4xl font-bold text-mb-text mb-8">Admin Dashboard</h1>

      {/* General Site Content */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-mb-text">General Site Content</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-mb-text text-sm font-bold mb-2">Logo URL:</label>
            <EditableImage
              src={content.logoUrl}
              alt="Company Logo"
              onSave={(newSrc) => handleSaveImage('logoUrl', newSrc)}
              className="w-32 h-auto mb-2"
            />
          </div>
          <div>
            <label className="block text-mb-text text-sm font-bold mb-2">Homepage Hero Title:</label>
            <EditableText
              value={content.homepageHeroTitle}
              onSave={(newValue) => handleSaveContent('homepageHeroTitle', newValue)}
              tag="input"
              className="text-2xl font-semibold"
            />
          </div>
          <div>
            <label className="block text-mb-text text-sm font-bold mb-2">Homepage Hero Subtitle:</label>
            <EditableText
              value={content.homepageHeroSubtitle}
              onSave={(newValue) => handleSaveContent('homepageHeroSubtitle', newValue)}
              tag="textarea"
              className="text-lg"
            />
          </div>
          <div>
            <label className="block text-mb-text text-sm font-bold mb-2">Homepage CTA Text:</label>
            <EditableText
              value={content.homepageHeroCtaText}
              onSave={(newValue) => handleSaveContent('homepageHeroCtaText', newValue)}
              tag="input"
            />
          </div>
           <div>
            <label className="block text-mb-text text-sm font-bold mb-2">Homepage CTA Link (e.g., tel:+1...):</label>
            <EditableText
              value={content.homepageHeroCtaLink}
              onSave={(newValue) => handleSaveContent('homepageHeroCtaLink', newValue)}
              tag="input"
            />
          </div>
          <div>
            <label className="block text-mb-text text-sm font-bold mb-2">About Page Title:</label>
            <EditableText
              value={content.aboutPageTitle}
              onSave={(newValue) => handleSaveContent('aboutPageTitle', newValue)}
              tag="input"
            />
          </div>
          <div>
            <label className="block text-mb-text text-sm font-bold mb-2">About Page Description:</label>
            <EditableText
              value={content.aboutPageDescription}
              onSave={(newValue) => handleSaveContent('aboutPageDescription', newValue)}
              tag="textarea"
            />
          </div>
          <div>
            <label className="block text-mb-text text-sm font-bold mb-2">Services Page Title:</label>
            <EditableText
              value={content.servicesPageTitle}
              onSave={(newValue) => handleSaveContent('servicesPageTitle', newValue)}
              tag="input"
            />
          </div>
          <div>
            <label className="block text-mb-text text-sm font-bold mb-2">Services Page Description:</label>
            <EditableText
              value={content.servicesPageDescription}
              onSave={(newValue) => handleSaveContent('servicesPageDescription', newValue)}
              tag="textarea"
            />
          </div>
          <div>
            <label className="block text-mb-text text-sm font-bold mb-2">Blog Page Title:</label>
            <EditableText
              value={content.blogPageTitle}
              onSave={(newValue) => handleSaveContent('blogPageTitle', newValue)}
              tag="input"
            />
          </div>
          <div>
            <label className="block text-mb-text text-sm font-bold mb-2">Blog Page Description:</label>
            <EditableText
              value={content.blogPageDescription}
              onSave={(newValue) => handleSaveContent('blogPageDescription', newValue)}
              tag="textarea"
            />
          </div>
          <div>
            <label className="block text-mb-text text-sm font-bold mb-2">Contact Page Title:</label>
            <EditableText
              value={content.contactPageTitle}
              onSave={(newValue) => handleSaveContent('contactPageTitle', newValue)}
              tag="input"
            />
          </div>
          <div>
            <label className="block text-mb-text text-sm font-bold mb-2">Contact Page Description:</label>
            <EditableText
              value={content.contactPageDescription}
              onSave={(newValue) => handleSaveContent('contactPageDescription', newValue)}
              tag="textarea"
            />
          </div>
          <div>
            <label className="block text-mb-text text-sm font-bold mb-2">Footer Text:</label>
            <EditableText
              value={content.footerText}
              onSave={(newValue) => handleSaveContent('footerText', newValue)}
              tag="input"
            />
          </div>
        </div>
      </div>

      {/* Theme Customization */}
      <ThemeCustomizer />

      {/* Blog Management */}
      <BlogManager />
    </div>
  );
};

export default AdminDashboard;