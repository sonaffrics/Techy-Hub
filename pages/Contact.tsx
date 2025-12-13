import React, { useState } from 'react';
import Seo from '../components/Seo';
import Button from '../components/Button';
import { useAppContext } from '../App';
import EditableText from '../components/Admin/EditableText';
import { CONTACT_PHONE } from '../constants';

const Contact: React.FC = () => {
  const { content, updateContent, theme } = useAppContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSaveTitle = (newValue: string) => {
    updateContent({ contactPageTitle: newValue });
  };

  const handleSaveDescription = (newValue: string) => {
    updateContent({ contactPageDescription: newValue });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend API
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    // In a real app, you'd show a success message and then hide it after a few seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
      <Seo
        title="Contact Us"
        description={content.contactPageDescription}
        url="/contact"
      />

      <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-200">
        <div className="text-center mb-10">
          <EditableText
            tag="h1"
            value={content.contactPageTitle}
            onSave={handleSaveTitle}
            className={`${theme.textColorClass} text-3xl md:text-4xl font-bold mb-4`}
          />
          <EditableText
            tag="p"
            value={content.contactPageDescription}
            onSave={handleSaveDescription}
            className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className={`${theme.textColorClass} text-2xl font-bold mb-6`}>
              Send Us a Message
            </h2>
            {isSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline ml-2">Your message has been sent. We'll get back to you soon.</span>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-mb-text leading-tight focus:outline-none focus:ring-2 focus:ring-mb-primary focus:border-transparent"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-mb-text leading-tight focus:outline-none focus:ring-2 focus:ring-mb-primary focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-mb-text leading-tight focus:outline-none focus:ring-2 focus:ring-mb-primary focus:border-transparent"
                  placeholder="Regarding your Malwarebytes issue..."
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-mb-text leading-tight focus:outline-none focus:ring-2 focus:ring-mb-primary focus:border-transparent"
                  rows={5}
                  placeholder="Describe your issue or inquiry here..."
                  required
                ></textarea>
              </div>
              <Button type="submit" variant="cta" className="w-full">
                Send Message
              </Button>
            </form>
            <p className="text-gray-600 text-sm mt-4 text-center">
              Your data is protected. We value your privacy and security.
            </p>
          </div>

          <div className="bg-mb-light-bg p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center">
            <div className={`${theme.primaryColorClass} text-white p-4 rounded-full mb-6`}>
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>
            <h2 className={`${theme.textColorClass} text-2xl font-bold mb-4`}>
              Call Us Directly
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              For immediate assistance with any Malwarebytes for Mac issue, our dedicated support team is available by phone.
            </p>
            <a href={`tel:${CONTACT_PHONE}`} className={`${theme.ctaButtonClass} inline-flex items-center text-white px-8 py-4 rounded-lg text-xl font-bold hover:brightness-110 transition-colors duration-300`}>
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              {CONTACT_PHONE}
            </a>
            <p className="text-gray-600 text-sm mt-6">
              Our lines are open during business hours to provide you with expert support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;