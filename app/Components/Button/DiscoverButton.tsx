import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

/**
 * Custom Button component that includes the 'discover-btn' class
 * for premium hover animations as defined in globals.css.
 */
const DiscoverButton: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <button
      className={`font-semibold cursor-pointer py-2 px-3 discover-btn rounded transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default DiscoverButton;
