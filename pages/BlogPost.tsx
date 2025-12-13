import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';
import { useAppContext } from '../App';
import Button from '../components/Button';
import SocialShareButtons from '../components/SocialShareButtons';
import { CONTACT_PHONE } from '../constants';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { blogPosts, theme } = useAppContext();
  const [post, setPost] = useState<typeof blogPosts[0] | undefined>(undefined);

  useEffect(() => {
    if (slug) {
      const foundPost = blogPosts.find((p) => p.slug === slug);
      if (foundPost) {
        setPost(foundPost);
      } else {
        navigate('/blog'); // Redirect to blog list if post not found
      }
    }
  }, [slug, blogPosts, navigate]);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center text-xl text-gray-600">
        Loading blog post...
      </div>
    );
  }

  const currentUrl = window.location.href; // Get current URL for sharing

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
      <Seo
        title={post.title}
        description={post.metaDescription}
        url={`/blog/${post.slug}`}
        ogType="article"
        ogImage={post.imageUrl}
      />

      <article className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-200">
        <img src={post.imageUrl} alt={post.title} className="w-full h-64 md:h-80 object-cover rounded-lg mb-6" />
        <h1 className={`${theme.textColorClass} text-3xl md:text-4xl font-bold mb-4 leading-tight`}>
          {post.title}
        </h1>
        <div className="flex items-center text-gray-600 text-sm mb-6">
          <span className="mr-4">By <span className="font-semibold">{post.author}</span></span>
          <span>Published on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>

        <div
          className="prose prose-lg max-w-none text-gray-800 leading-relaxed mb-10 blog-content-styles"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-b border-gray-200 py-6 mb-10">
          <div className="mb-4 sm:mb-0">
            <p className="text-gray-700 font-semibold mb-2">Share this article:</p>
            <SocialShareButtons size="md" />
          </div>
          <Button onClick={() => navigate('/blog')} variant="primary">
            Back to Blog
          </Button>
        </div>

        <div className="text-center bg-mb-primary text-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Still Facing Issues?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            While our articles offer great insights, some problems require direct, expert intervention. Don't hesitate to reach out!
          </p>
          <Button asLink href={`tel:${CONTACT_PHONE}`} variant="cta" size="lg">
            Call Our Experts Now: {CONTACT_PHONE}
          </Button>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;