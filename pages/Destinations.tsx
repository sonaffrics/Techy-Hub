import React from 'react';
import Seo from '../components/Seo';
import Button from '../components/Button';
import { useAppContext } from '../App';
import { CONTACT_PHONE } from '../constants';

const Destinations: React.FC = () => {
  const { theme } = useAppContext();
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
      <Seo
        title="Our Destinations"
        description="Explore the places we've been (or dream of going) - this is a placeholder page!"
        url="/destinations"
      />

      <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-200 text-center">
        <h1 className={`${theme.textColorClass} text-3xl md:text-4xl font-bold mb-4`}>
          Our Destinations
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
          This is a placeholder page for "Destinations." While our primary focus is on providing top-tier Malwarebytes for Mac support to clients across the USA, we understand the need for comprehensive website structures.
        </p>

        <img src="https://picsum.photos/800/400?random=map" alt="Placeholder map" className="rounded-lg shadow-lg mx-auto mb-8" />

        <p className="text-gray-700 mb-8">
          You might be looking for information on where Malwarebytes operates, or perhaps this section is intended for future expansion. For now, consider this a journey into cybersecurity protection, no matter your location!
        </p>

        <div className="mt-8 bg-mb-primary text-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Support, Not Travel Advice?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            If you've landed here but need help with Malwarebytes on your Mac, our support team is ready!
          </p>
          <Button asLink href={`tel:${CONTACT_PHONE}`} variant="cta" size="lg">
            Call Our Experts Now: {CONTACT_PHONE}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Destinations;