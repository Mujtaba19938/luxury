import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400 dark:focus:ring-luxury-dark-accent focus:ring-offset-2 dark:focus:ring-offset-luxury-dark-surface disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-primary-400 dark:bg-luxury-dark-accent text-white hover:bg-primary-500 dark:hover:bg-luxury-dark-accentHover shadow-md hover:shadow-lg',
    secondary: 'bg-white/80 dark:bg-luxury-dark-surfaceHover/80 text-primary-900 dark:text-luxury-dark-text hover:bg-white dark:hover:bg-luxury-dark-surfaceHover shadow-md hover:shadow-lg',
    outline: 'border-2 border-primary-400 dark:border-luxury-dark-accent text-primary-400 dark:text-luxury-dark-accent hover:bg-primary-400 dark:hover:bg-luxury-dark-accent hover:text-white dark:hover:text-white hover:shadow-md'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
