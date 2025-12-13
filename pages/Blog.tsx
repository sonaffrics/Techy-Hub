import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { useAppContext } from '../App';
import EditableText from '../components/Admin/EditableText';
import Button from '../components/Button';
import { CONTACT_PHONE } from '../constants';

const Blog: React.FC = () => {
  const { content, updateContent, blogPosts, theme } = useAppContext();

  const handleSaveTitle = (newValue: string) => {
    updateContent({ blogPageTitle: newValue });
  };

  const handleSaveDescription = (newValue: string) => {
    updateContent({ blogPageDescription: newValue });
  };

  // Sort posts by date, newest first
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
      <Seo
        title="Blog"
        description={content.blogPageDescription}
        url="/blog"
      />

      <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-200">
        <div className="text-center mb-10">
          <EditableText
            tag="h1"
            value={content.blogPageTitle}
            onSave={handleSaveTitle}
            className={`${theme.textColorClass} text-3xl md:text-4xl font-bold mb-4`}
          />
          <EditableText
            tag="p"
            value={content.blogPageDescription}
            onSave={handleSaveDescription}
            className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPosts.length > 0 ? (
            sortedPosts.map((post) => (
              <article key={post.id} className="bg-mb-light-bg rounded-lg shadow-sm border border-gray-100 overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
                <Link to={`/blog/${post.slug}`}>
                  <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                </Link>
                <div className="p-5 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-mb-text mb-2 leading-tight">
                    <Link to={`/blog/${post.slug}`} className="hover:text-mb-primary transition-colors duration-200">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 text-sm mb-3">
                    By {post.author} on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <p className="text-gray-700 text-base line-clamp-3 mb-4 flex-grow">
                    {post.metaDescription}
                  </p>
                  <Link to={`/blog/${post.slug}`} className={`${theme.primaryColorClass} text-white px-4 py-2 rounded-md inline-block text-center hover:opacity-90 transition-colors duration-300 mt-auto`}>
                    Read More
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">No blog posts available yet. Check back soon!</p>
          )}
        </div>

        <div className="mt-16 text-center bg-mb-primary text-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Direct Support?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Our blog offers great tips, but for immediate help, our experts are just a call away.
          </p>
          <Button asLink href={`tel:${CONTACT_PHONE}`} variant="cta" size="lg">
            Call Now: {CONTACT_PHONE}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;