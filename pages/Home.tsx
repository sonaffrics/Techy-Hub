import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Button from '../components/Button';
import { useAppContext } from '../App';
import { CONTACT_PHONE, COMPANY_NAME, SUPPORT_ISSUES, SERVICE_ICONS } from '../constants';

const Home: React.FC = () => {
  const { content, theme } = useAppContext();

  return (
    <div className="min-h-screen">
      <Seo
        title="Home"
        description={content.homepageHeroSubtitle}
        url="/"
      />

      {/* Hero Section */}
      <section className={`${theme.primaryColorClass} text-white py-16 md:py-24 text-center px-4`}>
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            {content.homepageHeroTitle}
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            {content.homepageHeroSubtitle}
          </p>
          <Button asLink href={content.homepageHeroCtaLink} variant="cta" size="lg">
            {content.homepageHeroCtaText}
          </Button>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 px-4 bg-mb-light-bg">
        <div className="container mx-auto text-center max-w-5xl">
          <h2 className={`${theme.textColorClass} text-3xl md:text-4xl font-bold mb-6`}>
            Our Comprehensive Support for Your Mac
          </h2>
          <p className={`${theme.textColorClass} text-lg mb-12 opacity-90`}>
            We specialize in resolving all types of Malwarebytes for Mac issues quickly and efficiently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SUPPORT_ISSUES.slice(0, 6).map((issue, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300 border border-gray-200">
                <div className={`${theme.accentColorClass} text-white text-4xl p-4 rounded-full inline-block mb-4`}>
                  {SERVICE_ICONS[issue] || '✨'}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-mb-text">{issue}</h3>
                <p className="text-gray-600 text-sm">
                  {`Expert assistance for your ${issue.toLowerCase()} on Malwarebytes for Mac.`}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button asLink href="/services" variant="primary" size="lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action - Why Choose Us */}
      <section className={`${theme.darkBgClass || theme.backgroundColorClass} text-white py-16 px-4`}>
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Trust {COMPANY_NAME}?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            With years of experience and a commitment to customer satisfaction, we provide reliable, secure, and expert-level support for all your Malwarebytes for Mac needs.
          </p>
          <Button asLink href={`tel:${CONTACT_PHONE}`} variant="cta" size="lg">
            Get Immediate Expert Help
          </Button>
        </div>
      </section>

      {/* Testimonials (Placeholder) */}
      <section className="py-16 px-4 bg-mb-light-bg">
        <div className="container mx-auto text-center max-w-5xl">
          <h2 className={`${theme.textColorClass} text-3xl md:text-4xl font-bold mb-12`}>
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <p className="italic text-gray-700 mb-4">
                "My Malwarebytes wouldn't open after an update. These guys fixed it remotely in minutes! Highly recommend their prompt and professional service."
              </p>
              <p className="font-semibold text-mb-text">- John D., California</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <p className="italic text-gray-700 mb-4">
                "Had trouble reactivating my license. The support was excellent, walked me through every step. Great customer service!"
              </p>
              <p className="font-semibold text-mb-text">- Sarah L., New York</p>
            </div>
          </div>
          <p className="mt-8 text-lg text-gray-700">
            Join hundreds of satisfied Mac users. <Link to="/contact" className="text-mb-primary hover:underline">Contact us</Link> today!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;