import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAppContext } from '../App';
import { COMPANY_NAME } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { content, theme } = useAppContext();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Admin', path: '/admin' }, // Admin dashboard link
  ];

  const logoUrl = content.logoUrl || 'https://picsum.photos/100/30?random=logo'; // Default or editable

  return (
    <header className={`${theme.primaryColorClass} text-white p-4 shadow-md`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img src={logoUrl} alt={`${COMPANY_NAME} Logo`} className="h-8 mr-2" />
          {COMPANY_NAME.split(' ')[0]} <span className="hidden sm:inline ml-1">{COMPANY_NAME.split(' ').slice(1).join(' ')}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-white hover:text-mb-accent transition-colors duration-300 ${isActive ? 'font-semibold border-b-2 border-mb-accent' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className={`${theme.primaryColorClass} md:hidden flex flex-col items-center mt-4 space-y-4 pb-4`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-white text-lg hover:text-mb-accent transition-colors duration-300 ${isActive ? 'font-semibold border-b-2 border-mb-accent' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;