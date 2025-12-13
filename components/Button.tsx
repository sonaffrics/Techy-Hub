import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../App';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'cta';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  asLink = false,
  href,
  className,
  // Destructure button-specific props to explicitly apply them to the <button> element
  // and prevent them from being spread onto <a> or Link elements.
  type = 'button', // Default type for <button> element
  disabled, // Disabled prop for <button> element
  ...restProps // Collect any other props (generic HTML attributes and event handlers)
}) => {
  const { theme } = useAppContext();

  let baseStyles = `font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2`;
  let variantStyles = '';

  switch (variant) {
    case 'primary':
      variantStyles = `${theme.primaryColorClass} text-white hover:opacity-90`;
      break;
    case 'secondary':
      variantStyles = `${theme.secondaryColorClass} text-white hover:opacity-90`;
      break;
    case 'accent':
      variantStyles = `${theme.accentColorClass} text-white hover:opacity-90`;
      break;
    case 'cta':
      variantStyles = `${theme.ctaButtonClass}`; // text-white is already part of ctaButtonClass from theme config
      break;
    default:
      variantStyles = `${theme.primaryColorClass} text-white hover:opacity-90`;
  }

  let sizeStyles = '';
  switch (size) {
    case 'sm':
      sizeStyles = 'px-3 py-1 text-sm';
      break;
    case 'md':
      sizeStyles = 'px-4 py-2 text-base';
      break;
    case 'lg':
      sizeStyles = 'px-6 py-3 text-lg';
      break;
    default:
      sizeStyles = 'px-4 py-2 text-base';
  }

  const combinedClassName = `${baseStyles} ${variantStyles} ${sizeStyles} ${className || ''}`;

  if (asLink && href) {
    // Check if it's an internal route (starts with '/')
    const isInternalLink = href.startsWith('/');
    if (isInternalLink) {
      return (
        // Cast restProps to AnchorHTMLAttributes to satisfy Link's prop type checking
        <Link to={href} className={combinedClassName} {...restProps as React.AnchorHTMLAttributes<HTMLAnchorElement>}>
          {children}
        </Link>
      );
    } else {
      // For external links (tel:, mailto:, http:, etc.)
      // Cast restProps to AnchorHTMLAttributes to ensure type compatibility
      return (
        <a href={href} className={combinedClassName} {...restProps as React.AnchorHTMLAttributes<HTMLAnchorElement>}>
          {children}
        </a>
      );
    }
  }

  return (
    // Render as a button when asLink is false or not provided
    // Explicitly pass button-specific props (type, disabled)
    <button type={type} disabled={disabled} className={combinedClassName} {...restProps}>
      {children}
    </button>
  );
};

export default Button;