import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, icon, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {icon && (
        <div className={`mb-4 ${centered ? 'flex justify-center' : ''}`}>
          <div className="w-12 h-12 bg-primary-400/20 dark:bg-luxury-dark-accent/20 rounded-full flex items-center justify-center text-primary-400 dark:text-luxury-dark-accent">
            {icon}
          </div>
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-primary-900 dark:text-luxury-dark-text mb-4">
        {title}
      </h2>
      <div className={`w-24 h-1 bg-gradient-to-r from-primary-400 dark:from-luxury-dark-accent to-primary-500 dark:to-luxury-dark-primary rounded-full ${centered ? 'mx-auto' : ''} mb-4`}></div>
      {subtitle && (
        <p className="text-lg text-primary-500 dark:text-luxury-dark-textSecondary max-w-2xl font-['Inter']">
          {subtitle}
        </p>
      )}
    </div>
  );
}
