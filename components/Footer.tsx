import React from 'react';
import { Link } from 'react-router-dom';
import SocialShareButtons from './SocialShareButtons';
import { useAppContext } from '../App';
import { CONTACT_PHONE } from '../constants';

const Footer: React.FC = () => {
  const { content, theme } = useAppContext();
  return (
    <footer className={`${theme.darkBgClass || theme.backgroundColorClass} text-white py-8 px-4`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <p>
            Need immediate help? Call us at: <br />
            <a href={`tel:${CONTACT_PHONE}`} className="text-mb-accent hover:underline font-semibold">
              {CONTACT_PHONE}
            </a>
          </p>
          <p className="mt-2">
            Email: <a href="mailto:support@yourdomain.com" className="text-mb-accent hover:underline">support@yourdomain.com</a>
          </p>
        </div>

        <nav className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/services" className="hover:text-mb-accent transition-colors duration-200">Services</Link></li>
            <li><Link to="/blog" className="hover:text-mb-accent transition-colors duration-200">Blog</Link></li>
            <li><Link to="/about" className="hover:text-mb-accent transition-colors duration-200">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-mb-accent transition-colors duration-200">Contact</Link></li>
          </ul>
        </nav>

        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Follow Us</h3>
          <SocialShareButtons size="lg" />
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        <p className="mb-2">{content.footerText}</p>
        <div className="flex justify-center space-x-4">
          <Link to="/privacy-policy" className="hover:text-mb-accent transition-colors duration-200">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-mb-accent transition-colors duration-200">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;