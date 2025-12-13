import React, { useState } from 'react';
import { BlogPostType } from '../../types';
import { useAppContext } from '../../App';
import Button from '../Button';

interface BlogFormProps {
  post?: BlogPostType;
  onSave: (post: BlogPostType) => void;
  onCancel: () => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ post, onSave, onCancel }) => {
  const [formData, setFormData] = useState<BlogPostType>(
    post || {
      id: '',
      slug: '',
      title: '',
      metaDescription: '',
      author: '',
      date: new Date().toISOString().split('T')[0], // Default to current date
      imageUrl: 'https://picsum.photos/800/400?random=' + Math.floor(Math.random() * 1000),
      content: '',
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.id) {
        formData.id = Date.now().toString(); // Generate a unique ID for new posts
    }
    // Simple slug generation if not provided
    if (!formData.slug) {
        formData.slug = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-*|-*$/g, '');
    }
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
      <h3 className="text-xl font-semibold mb-4">{post ? 'Edit Blog Post' : 'Create New Blog Post'}</h3>
      <div className="mb-4">
        <label className="block text-mb-text text-sm font-bold mb-2" htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-mb-text leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-mb-text text-sm font-bold mb-2" htmlFor="slug">Slug (URL path)</label>
        <input
          type="text"
          id="slug"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-mb-text leading-tight focus:outline-none focus:shadow-outline"
          placeholder="e.g., my-awesome-blog-post"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-mb-text text-sm font-bold mb-2" htmlFor="metaDescription">Meta Description</label>
        <textarea
          id="metaDescription"
          name="metaDescription"
          value={formData.metaDescription}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-mb-text leading-tight focus:outline-none focus:shadow-outline"
          rows={2}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-mb-text text-sm font-bold mb-2" htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-mb-text leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-mb-text text-sm font-bold mb-2" htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-mb-text leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-mb-text text-sm font-bold mb-2" htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-mb-text leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-mb-text text-sm font-bold mb-2" htmlFor="content">Content (HTML)</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-mb-text leading-tight focus:outline-none focus:shadow-outline"
          rows={10}
          required
        ></textarea>
      </div>
      <div className="flex justify-end gap-2">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="cta">
          {post ? 'Update Post' : 'Create Post'}
        </Button>
      </div>
    </form>
  );
};


const BlogManager: React.FC = () => {
  const { blogPosts, addOrUpdateBlogPost, deleteBlogPost } = useAppContext();
  const [editingPost, setEditingPost] = useState<BlogPostType | undefined>(undefined);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (post: BlogPostType) => {
    setEditingPost(post);
    setShowForm(true);
  };

  const handleSave = (post: BlogPostType) => {
    addOrUpdateBlogPost(post);
    setEditingPost(undefined);
    setShowForm(false);
  };

  const handleDelete = (slug: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deleteBlogPost(slug);
    }
  };

  const handleCreateNew = () => {
    setEditingPost(undefined);
    setShowForm(true);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 text-mb-text">Blog Post Management</h2>

      {!showForm && (
        <Button variant="primary" onClick={handleCreateNew} className="mb-6">
          Create New Blog Post
        </Button>
      )}

      {showForm && (
        <BlogForm
          post={editingPost}
          onSave={handleSave}
          onCancel={() => setShowForm(false)}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-mb-light-bg rounded-lg shadow-sm border border-gray-100 p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-mb-text">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-2">By {post.author} on {post.date}</p>
              <img src={post.imageUrl} alt={post.title} className="w-full h-32 object-cover rounded-md mb-3" />
              <p className="text-gray-700 text-sm line-clamp-3 mb-4">{post.metaDescription}</p>
            </div>
            <div className="flex gap-2 justify-end">
              <Button size="sm" variant="accent" onClick={() => handleEdit(post)}>
                Edit
              </Button>
              <Button size="sm" variant="secondary" onClick={() => handleDelete(post.slug)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogManager;