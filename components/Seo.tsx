import React, { useEffect } from 'react';
import { DEFAULT_SEO, BASE_URL } from '../constants';
import { SeoProps } from '../types'; // Import SeoProps from types.ts

const Seo: React.FC<SeoProps> = ({ title, description, keywords, url, ogType, ogImage }) => {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${DEFAULT_SEO.title}` : DEFAULT_SEO.title;
    const pageDescription = description || DEFAULT_SEO.description;
    const pageKeywords = keywords || DEFAULT_SEO.keywords;
    const pageUrl = url ? `${BASE_URL}${url}` : BASE_URL;
    const pageOgType = ogType || 'website';
    const pageOgImage = ogImage || 'https://picsum.photos/1200/630?random=seo'; // Default image for social sharing

    document.title = pageTitle;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', pageDescription);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', pageKeywords);

    // Open Graph / Facebook
    updateOrCreateMeta('property', 'og:title', pageTitle);
    updateOrCreateMeta('property', 'og:description', pageDescription);
    updateOrCreateMeta('property', 'og:type', pageOgType);
    updateOrCreateMeta('property', 'og:url', pageUrl);
    updateOrCreateMeta('property', 'og:image', pageOgImage);

    // Twitter
    updateOrCreateMeta('name', 'twitter:card', 'summary_large_image');
    updateOrCreateMeta('name', 'twitter:title', pageTitle);
    updateOrCreateMeta('name', 'twitter:description', pageDescription);
    updateOrCreateMeta('name', 'twitter:image', pageOgImage);

  }, [title, description, keywords, url, ogType, ogImage]);

  const updateOrCreateMeta = (attrName: string, attrValue: string, content: string) => {
    let metaTag = document.querySelector(`meta[${attrName}="${attrValue}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute(attrName, attrValue);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', content);
  };

  return null; // This component doesn't render anything visible
};

export default Seo;