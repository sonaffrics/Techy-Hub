import React from 'react';
import Seo from '../components/Seo';
import Button from '../components/Button';
import { useAppContext } from '../App';
import EditableText from '../components/Admin/EditableText';
import EditableImage from '../components/Admin/EditableImage';
import { CONTACT_PHONE } from '../constants';

const About: React.FC = () => {
  const { content, updateContent, theme } = useAppContext();

  const handleSaveTitle = (newValue: string) => {
    updateContent({ aboutPageTitle: newValue });
  };

  const handleSaveDescription = (newValue: string) => {
    updateContent({ aboutPageDescription: newValue });
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
      <Seo
        title="About Us"
        description={content.aboutPageDescription}
        url="/about"
      />

      <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-200">
        <div className="text-center mb-8">
          <EditableText
            tag="h1"
            value={content.aboutPageTitle}
            onSave={handleSaveTitle}
            className={`${theme.textColorClass} text-3xl md:text-4xl font-bold mb-4`}
          />
          <EditableText
            tag="p"
            value={content.aboutPageDescription}
            onSave={handleSaveDescription}
            className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
          <div>
            <h2 className={`${theme.textColorClass} text-2xl md:text-3xl font-bold mb-4`}>
              Our Mission
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our mission is simple: to provide unparalleled technical support for Malwarebytes for Mac users across the USA. We understand the critical importance of robust cybersecurity, and we are dedicated to ensuring your Malwarebytes software is always running optimally, protecting your digital life without interruption. We strive for excellence in every interaction, offering patient, clear, and effective solutions.
            </p>

            <h2 className={`${theme.textColorClass} text-2xl md:text-3xl font-bold mb-4`}>
              Why Choose Us?
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li><strong>Expert Technicians:</strong> Our team comprises highly trained and certified professionals with deep expertise in macOS and Malwarebytes.</li>
              <li><strong>Fast & Reliable Service:</strong> We prioritize quick response times and efficient problem resolution to get you back on track without delay.</li>
              <li><strong>Customer-Centric Approach:</strong> Your satisfaction is our top priority. We listen, diagnose thoroughly, and explain solutions clearly.</li>
              <li><strong>Secure & Trustworthy:</strong> We adhere to the highest standards of data security and privacy, ensuring your information is always protected.</li>
            </ul>

            <Button asLink href={`tel:${CONTACT_PHONE}`} variant="cta" size="lg" className="mt-6">
              Call Us Today: {CONTACT_PHONE}
            </Button>
          </div>
          <div>
            <EditableImage
              src="https://picsum.photos/600/400?random=about"
              alt="Team working on Mac support"
              onSave={(newSrc) => console.log('Image saved (Admin mode only):', newSrc)} // Placeholder for admin image save
              className="rounded-lg shadow-lg"
            />
            <p className="text-center text-gray-500 text-sm mt-2">Our dedicated team is ready to help.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className={`${theme.textColorClass} text-2xl md:text-3xl font-bold mb-4`}>
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-mb-light-bg p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-2 text-mb-text">Integrity</h3>
              <p className="text-gray-700 text-sm">
                We operate with complete honesty and transparency, building trust with every client interaction.
              </p>
            </div>
            <div className="bg-mb-light-bg p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-2 text-mb-text">Excellence</h3>
              <p className="text-gray-700 text-sm">
                We are committed to delivering the highest quality support, constantly improving our knowledge and services.
              </p>
            </div>
            <div className="bg-mb-light-bg p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-2 text-mb-text">Customer Focus</h3>
              <p className="text-gray-700 text-sm">
                Our clients are at the heart of everything we do. We tailor our support to meet your specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;